#!/bin/bash
# test-fix1.sh — runs the three handoff test queries against local dev server
# Usage: ./test-fix1.sh
# Prereq: npm run dev is running in another terminal

OUT="$HOME/fairfield-research-tool/fix1-test-output.txt"
URL="http://localhost:3000/api/research"

# Quick health check — fail fast if dev server isn't up
if ! curl -s -o /dev/null -w "%{http_code}" "$URL" -X POST \
     -H "Content-Type: application/json" \
     -d '{"question":"ping","mode":"search"}' | grep -q "^[2-5]"; then
  echo "ERROR: Can't reach $URL"
  echo "Make sure 'npm run dev' is running in another terminal."
  exit 1
fi

echo "Writing output to: $OUT"
echo "Watch your npm run dev terminal for [RAG] log lines."
echo ""

# Header
{
  echo "==============================================================="
  echo "Fix 1 + Fix 5 test run — $(date)"
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

  # Build JSON payload safely with python (avoids shell-quoting headaches)
  local payload
  payload=$(python3 -c "import json,sys; print(json.dumps({'question': sys.argv[1], 'mode': sys.argv[2]}))" "$question" "$mode")

  local response
  response=$(curl -s -X POST "$URL" \
    -H "Content-Type: application/json" \
    -d "$payload")

  # Pull out the analysis text + sources cleanly
  python3 <<PY >> "$OUT"
import json
data = json.loads('''$response''')
print()
print("ANALYSIS:")
print(data.get("analysis", "(no analysis returned)"))
print()
print(f"SOURCES ({data.get('documentCount', 0)} passages used):")
for s in data.get("sources", [])[:10]:
    print(f"  - {s}")
print()
print(f"hasRAGResults: {data.get('hasRAGResults')}")
print(f"responseMode:  {data.get('mode')}")
PY
}

run_query "1 — Mode 1 (chickens in residential zones)" "search" \
  "What does the Fairfield code say about chickens in residential zones?"

run_query "2 — Mode 2 (FHS awards — the original failing query)" "research" \
  "What awards has Fairfield History Series won?"

run_query "3 — Mode 2 safety rail (Walton Lake Bridge resolution)" "research" \
  "What did Council resolve on the Walton Lake Bridge in 2023?"

echo ""
echo "Done. Review with:"
echo "  less $OUT"
echo ""
echo "And check the npm run dev terminal for [RAG] log lines."
