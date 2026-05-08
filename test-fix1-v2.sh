#!/bin/bash
# test-fix1-v2.sh — restart dev server, run 3 test queries, capture RAG logs, print summary
# Usage: ./test-fix1-v2.sh
# Prereq: dev server is STOPPED (we start it ourselves so we can capture its logs)

set -u
cd ~/fairfield-research-tool

OUT="$HOME/fairfield-research-tool/fix1-test-output.txt"
LOG="$HOME/fairfield-research-tool/dev-server.log"
URL="http://localhost:3000/api/research"

echo "=== Cleanup any leftover dev server on port 3000 ==="
lsof -ti tcp:3000 | xargs -r kill -9 2>/dev/null || true
sleep 1

echo "=== Starting dev server in background ==="
echo "Logs: $LOG"
nohup npm run dev > "$LOG" 2>&1 &
DEV_PID=$!
echo "Dev server PID: $DEV_PID"

echo "=== Waiting for server to be ready (max 60s) ==="
for i in $(seq 1 60); do
  if curl -s -o /dev/null -w "%{http_code}" "$URL" -X POST \
       -H "Content-Type: application/json" \
       -d '{"question":"ping","mode":"search"}' 2>/dev/null | grep -q "^[2-5]"; then
    echo "Server ready after ${i}s"
    break
  fi
  if [ "$i" = "60" ]; then
    echo "ERROR: Server didn't come up in 60s. Check $LOG"
    tail -30 "$LOG"
    exit 1
  fi
  sleep 1
done

# Mark log position so we can extract just THIS run's [RAG] lines later
LOG_MARK=$(wc -l < "$LOG")

# Header
{
  echo "==============================================================="
  echo "Fix 1 + Fix 5 test run (v2) — $(date)"
  echo "==============================================================="
} > "$OUT"

run_query() {
  local label="$1"
  local mode="$2"
  local question="$3"

  echo "Running: $label ($mode mode)..."

  {
    echo ""
    echo "---------------------------------------------------------------"
    echo "TEST: $label"
    echo "MODE: $mode"
    echo "QUERY: $question"
    echo "---------------------------------------------------------------"
  } >> "$OUT"

  # Build JSON payload safely with python (handles quotes in question)
  local payload
  payload=$(python3 -c "import json,sys; print(json.dumps({'question': sys.argv[1], 'mode': sys.argv[2]}))" "$question" "$mode")

  # Save raw JSON to a file (avoids ALL string interpolation issues with apostrophes)
  local raw_file
  raw_file=$(mktemp)
  curl -s -X POST "$URL" \
    -H "Content-Type: application/json" \
    -d "$payload" > "$raw_file"

  # Parse from file with python — no string interpolation at all
  python3 - "$raw_file" >> "$OUT" <<'PY'
import json, sys
with open(sys.argv[1]) as f:
    raw = f.read()
try:
    data = json.loads(raw)
except Exception as e:
    print()
    print(f"PARSE ERROR: {e}")
    print(f"RAW BYTES: {len(raw)}")
    print(f"RAW (first 500): {raw[:500]}")
    sys.exit(0)

if "error" in data:
    print()
    print(f"API ERROR: {data['error']}")
    sys.exit(0)

print()
print("ANALYSIS:")
print(data.get("analysis", "(no analysis returned)"))
print()
print(f"SOURCES ({data.get('documentCount', 0)} passages used):")
for s in (data.get("sources") or [])[:10]:
    print(f"  - {s}")
print()
print(f"hasRAGResults: {data.get('hasRAGResults')}")
print(f"responseMode:  {data.get('mode')}")
PY

  rm -f "$raw_file"
}

run_query "1 — Mode 1 (chickens in residential zones)" "search" \
  "What does the Fairfield code say about chickens in residential zones?"

run_query "2 — Mode 2 (FHS awards — the original failing query)" "research" \
  "What awards has Fairfield History Series won?"

run_query "3 — Mode 2 safety rail (Walton Lake Bridge resolution)" "research" \
  "What did Council resolve on the Walton Lake Bridge in 2023?"

# Extract just THIS run's [RAG] lines from the dev server log
{
  echo ""
  echo "==============================================================="
  echo "[RAG] log lines from this run:"
  echo "==============================================================="
  tail -n +$((LOG_MARK + 1)) "$LOG" | grep "^\[RAG\]" || echo "(no [RAG] lines captured)"
} >> "$OUT"

echo ""
echo "==============================================================="
echo "Done. Output:"
echo "==============================================================="
echo ""
cat "$OUT"
echo ""
echo "==============================================================="
echo "Dev server still running in background (PID $DEV_PID, logs: $LOG)"
echo "Stop it later with: kill $DEV_PID"
echo "==============================================================="
