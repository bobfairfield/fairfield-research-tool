# Civic Intelligence Hub — Session Handoff

**Date written**: 2026-04-25 afternoon
**Index state at handoff**: 18,752 vectors / 1,013 sources / 0 orphans
**Repo head at handoff**: post-`a038532` (workflow + deploy fixes); migration scripts uncommitted in working tree

---

## TL;DR — What just happened

Two big things landed today across multiple sessions:

1. **Weekly auto-update workflow is fixed.** Three stacked bugs had silently broken it since installation. First successful bot commit: `be5ead3` (2026-04-22).
2. **RAG metadata Phase 1 is complete.** 14,281 vectors got canonical field names (`filename`, `chunkIndex`, `sourceUrl`) added alongside their legacy aliases. 0 failures after retry. Index unchanged structurally — we only added fields, didn't remove or move anything.

The front-end is unaffected. Nothing is on fire. There's a clear backlog of Phase 2 work, none of it urgent.

---

## Pick up here next time — four options ranked by leverage

### (d) Update upload scripts to write canonical fields directly — RECOMMENDED FIRST

Every new upload between now and aggressive cleanup adds more drift to clean up later. Doing this first means future uploads stop the bleeding.

**What to do:**

1. Create `lib/metadata-schema.js` exporting a `validateMetadata(obj)` function and a `CANONICAL_FIELDS` constant. The schema should require `filename`, `source`, `chunkIndex`, `text`, and forbid the legacy aliases `file`, `fileName`, `chunk_index`, `chunkNum`, `url`, `source_url` (throw or warn on these).
2. Update each upload script to import and use the helper, writing only canonical field names:
   - `document-processor.js` (PDFs)
   - `txt-processor.js` (text files)
   - `batch-upload-school-board.js`
   - `batch-upload-history-transcripts.js`
   - `upload-jc-history.js`
   - `scrapers/scraper-base.js` (this one's the big multiplier — affects all 14+ scrapers)
3. Add a smoke-test upload using one of the existing input files, then run `node audit-field-aliases.js` immediately after to confirm the new vectors don't show up in the migration plan.

**Why first:** It's the only one of the four options that prevents the problem from recurring. The other three are cleanup — once. This is the upstream fix.

**Estimated time:** 1.5–2 hours for all six scripts, plus a smoke test.

---

### (a) Phase 2 aggressive cleanup — remove legacy fields

After (d) is done, the index has clean canonical fields *and* still has all the legacy duplicates. Aggressive mode removes the duplicates.

**What to do:**

```bash
cd ~/fairfield-research-tool
node apply-field-alias-migration.js --mode=aggressive --reset
```

The script already supports this. It uses fetch+upsert because Pinecone's `update()` can't remove fields. Two API calls per vector instead of one, so it's slower.

**Caveat:** The plan file (`field-alias-migration-plan.json`) is from 2026-04-25T17:58 UTC. By the time you run aggressive mode, new vectors may have been added by the weekly scraper. **Regenerate the plan first:**

```bash
rm field-alias-migration-progress.json
node audit-field-aliases.js   # writes a fresh plan
node apply-field-alias-migration.js --mode=aggressive --reset
```

**Estimated time:** 2–3 hours of wall time. Mostly idle waiting. Don't close the laptop or let it sleep.

**Failure mode to expect:** Same kind of network-blip cluster we saw on Phase 1 (362 errors at the tail of a 14k-vector run). The retry pattern works — re-run the same command and resume mode handles the failures.

---

### (b) Problem 2 — duplicate-source dedup

Multiple `source` values point to the same logical source. Examples:

| Logical source | Current `source` values | Vectors |
|---|---|---:|
| City of Fairfield website | `cityoffairfieldiowa.com` + `City of Fairfield` + `City of Fairfield Website` | 3,373 + 716 + 146 = **4,235** |
| Fairfield Public Library | `Fairfield Public Library` (freeform) | 262 |
| Iowa Dance Collective | `Iowa Dance Collective` (freeform) | 126 |
| ...10 freeform sources total | various | varies |

**What to do:**

1. Build `audit-source-duplicates.js` (Phase A — read-only, writes a plan JSON). For each freeform/inconsistent source value, propose a canonical replacement. Output: `source-dedup-plan.json` with `{vectorIds, currentSource, proposedSource}`.
2. Manually review the plan — some "duplicates" might actually be distinct sources that just happen to look similar.
3. Build `apply-source-dedup.js` (Phase B — reads plan, applies via `index.update()` with `{ source: newValue }` patch). Same conservative-then-aggressive pattern: maybe write `canonicalSource` as a new field first, decide later whether to overwrite `source`.

**Higher stakes than Phase 1:** This changes the actual `source` values that the front-end displays in citations. Worth previewing what the search results table looks like before and after.

**Estimated time:** 1 hour to write/review the plan, 30 minutes to apply. Plus design judgment on each of the ~10 freeform sources.

---

### (c) Problem 3 — collapse 979 URL-keyed sources into parent orgIds

Currently 979 sources are full URLs (e.g. `https://www.area15rpc.com/single-post/fall-2025-regional-planning-news-thriving-communities-and-local-development-initiatives`) instead of short keys.

**This is a design call, not a bug.** Pros and cons:

- **Pro of collapsing:** cleaner inventory, easier to see "we have N pages from area15rpc.com" instead of N separate entries; `generate-map.js` becomes simpler.
- **Con of collapsing:** loses per-page citation granularity. When the front-end cites a chunk, it currently can show the exact URL the chunk came from. If we collapse to `orgId`, that link becomes "somewhere on area15rpc.com."
- **Compromise:** keep `source = orgId` for grouping, but ensure `sourceUrl` is always populated with the exact URL for citations. (The conservative migration already added `sourceUrl` to 994 vectors; need to verify it's on all 979 URL-keyed ones and adopt the convention going forward.)

**Recommendation:** don't tackle this until (d) is done — the upload-script changes need to bake in whichever convention you pick.

**Estimated time:** 30 minutes of design thinking, 2 hours to implement once decided.

---

## State of the world — what's where

### Pinecone index `fairfield-civic-docs`

- 18,752 vectors / 1,013 sources / 0 orphans
- 14,281 vectors now have canonical fields (`filename`, `chunkIndex`, `sourceUrl`) added
- All legacy fields (`file`, `fileName`, `chunk_index`, `url`, `source_url`) still present — conservative mode preserved them

### Scripts at repo root (this session's additions)

| Script | Purpose | Read-only? |
|---|---|---|
| `audit-rag.js` | Profile entire index — vector counts, source styles, alias detection | ✅ yes |
| `audit-field-aliases.js` | Generate `field-alias-migration-plan.json` describing exactly which vectors need which patches | ✅ yes |
| `apply-field-alias-migration.js` | Execute plan in dry-run / conservative / aggressive mode; resumable | ❌ writes |
| `verify-field-alias-pass2.js` | Spot-check the 50 most recently patched vectors against expectations | ✅ yes |

### Plan/progress files at repo root

| File | Purpose | Keep until |
|---|---|---|
| `field-alias-migration-plan.json` | The plan that drove conservative migration | Aggressive cleanup is done |
| `field-alias-migration-progress.json` | Resume cursor (`processedIds` array, mode) | New migration run starts with `--reset` |
| `field-alias-migration-summary.md` | Human-readable plan summary | Anytime |
| `field-alias-migration-report.md` | Last apply-script run report | Keep latest only |
| `audit-report.json` / `audit-report.md` | Last index audit | Regenerate any time |

### What's safe to delete vs keep

- **Delete only if confident:** `field-alias-migration-progress.json` (only matters between runs)
- **Always regenerable:** `audit-report.{json,md}`, `field-alias-migration-summary.md`
- **Keep until aggressive cleanup ships:** `field-alias-migration-plan.json` (it's the source of truth for what's still in conservative-only state)

### Apr 25 commits in repo

- `1476a63` — fix run-all-orgs.js exec path + workflow git config
- `a038532` — deploy.js `git add -A` + workflow `permissions: contents: write`
- `70ac5af` — first Civic Hub Bot commit (knowledge base update)
- `be5ead3` — first proper weekly automated scrape commit (2026-04-22)

### Workflow (`weekly-scrape.yml`) hygiene backlog

These were intentionally left for later — workflow is functional, just not pretty:

1. **Redundant post-scraper commit step.** `deploy.js` already commits and pushes inside `run-all-orgs.js`, so the workflow's "Commit and push map update" step at the end produces an empty/duplicate commit. Remove it.
2. **Misaligned comment.** `# ── 6. Run all org scrapers ──` is now sitting above the pre-scrape git config step. Renumber and rename.
3. **Action versions due for refresh** before Jun 2 2026 Node 20 deprecation: `actions/checkout@v4`, `actions/cache@v4`, `actions/setup-node@v4`. (These are the current `@v4` pins; check if v5 is out before that deadline.)

---

## Known issues / things to watch

### The 362 traction-thursdays network blip

During the conservative migration, 362 vectors all clustered at the end of the run failed with Pinecone network errors. Retry succeeded cleanly. This is a **transient infrastructure issue, not data corruption**. If aggressive mode hits the same pattern, the retry-via-resume protocol works.

### Plan freshness for aggressive mode

The plan file is dated `2026-04-25T17:58:17.824Z`. The weekly scraper now runs successfully every Sunday and could add new vectors before you run aggressive mode. **Always regenerate the plan before aggressive mode.**

### Conservative mode "alias group" persistence in audit reports

`audit-rag.js` will continue to report "3 aliased-field groups detected" until aggressive mode removes the legacy fields. **This is expected — not a regression.** The audit script counts both old and new field names as "aliases" because they coexist. Confirms by looking at the per-source detail: should now show `filename` populated alongside `file`/`fileName`.

---

## Operational reminders (carried forward)

### Session startup
```bash
cd ~/fairfield-research-tool
# Keys auto-load from .env.local
```

### After every RAG upload
```bash
node deploy.js "description of what changed"
# Never push manually after uploads
```

### Two-phase destructive ops protocol
1. Phase A: read-only audit script writes a plan JSON listing IDs to act on
2. Phase B: separate apply script reads the plan JSON
3. Confirmation gate before any writes
4. Resumable via progress file
5. Failure capture (first 50 errors) in report.md

This pattern was used for both the orphan cleanup (April) and the field-alias migration (today). Reuse it for Problem 2 dedup.

### macOS Downloads dedup pattern
```bash
ls -lt ~/Downloads/scriptname*.js | head -3
cp -v ~/Downloads/scriptname.js ~/fairfield-research-tool/scriptname.js
ls -la ~/fairfield-research-tool/scriptname.js   # confirm size > 0
node --check ~/fairfield-research-tool/scriptname.js
```

### Pinecone gotchas
- `index.fetch([ids])` max 100 IDs per call (414 URL too long beyond)
- `index.update()` cannot remove fields — aggressive mode requires fetch+upsert
- Throughput ~3.7 updates/sec with 50ms throttle (slower than estimated)
- `$contains` filter operator NOT supported — retrieve top-K and filter in JS

---

## When you start the next chat, paste this

> Picking up from yesterday's RAG cleanup work. Conservative field-alias migration is complete (14,281/14,281, 0 failures). Index is at 18,752 vectors / 1,013 sources / 0 orphans. Working from `~/fairfield-research-tool/`. Want to tackle [option d / a / b / c]. Handoff doc is at `~/fairfield-research-tool/SESSION_HANDOFF_2026-04-25.md`.

That gets you to a useful state in one message — the new chat will load memory, see this doc, and we resume.
