# Field-Alias Migration Apply Report

**Run at**: 2026-04-25T22:59:53.399Z
**Mode**: `aggressive`
**Duration**: 89m 28s
**Plan source**: `field-alias-migration-plan.json` (generated 2026-04-25T21:16:27.100Z)

## Results

- **Succeeded**: 14,281
- **Failed**: 0
- **No-op (no patch needed)**: 0
- **Total processed this run**: 14,281
- **Total cumulative processed (across all runs)**: 14,281 of 14,281

## Next steps

- Re-run `node audit-rag.js` to verify the legacy field names are gone.
- Update upload scripts to use canonical field names going forward (Memory #14, task 2c).