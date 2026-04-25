# Field-Alias Migration Apply Report

**Run at**: 2026-04-25T19:13:41.781Z
**Mode**: `conservative`
**Duration**: 1m 40s
**Plan source**: `field-alias-migration-plan.json` (generated 2026-04-25T17:58:17.824Z)

## Results

- **Succeeded**: 362
- **Failed**: 0
- **No-op (no patch needed)**: 0
- **Total processed this run**: 362
- **Total cumulative processed (across all runs)**: 14,281 of 14,281

## Next steps

- Re-run `node audit-rag.js` to verify the canonical fields are now populated.
- If everything looks right, re-run this script with `--mode=aggressive --reset` to remove the legacy field names.