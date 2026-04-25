# Field-Alias Migration Plan — Summary

**Generated**: 2026-04-25T17:58:17.824Z
**Duration**: 127s
**Index**: `fairfield-civic-docs`

## Canonical mapping

| Canonical field | Legacy aliases (will be migrated) |
|---|---|
| `filename` | `file`, `fileName` |
| `chunkIndex` | `chunk_index`, `chunkNum` |
| `sourceUrl` | `url`, `source_url` |

## Stats

- **Total vectors scanned**: 18,752
- **Vectors needing change**: 14,281 (76.2%)
- **Vectors with field-value conflicts** (skipped, need human review): 0

### Canonical fields to be added (conservative mode)

| Canonical field | Vectors getting this added |
|---|---:|
| `filename` | 13,951 |
| `sourceUrl` | 994 |
| `chunkIndex` | 30 |

### Legacy fields to be removed (aggressive mode only)

| Legacy field | Vectors that have it |
|---|---:|
| `file` | 10,320 |
| `fileName` | 3,631 |
| `url` | 964 |
| `chunk_index` | 30 |
| `source_url` | 30 |

### Top sources affected

| Source | Vectors needing change |
|---|---:|
| `cityoffairfieldiowa.com` | 3,373 |
| `City of Fairfield` | 716 |
| `jeffersoncounty.iowa.gov` | 506 |
| `jeffersoncountyhealthcenter.org` | 369 |
| `fairfield-history-series` | 300 |
| `Fairfield Public Library` | 262 |
| `maharishi_school` | 255 |
| `fairfieldiowa.com` | 168 |
| `jeffersoncountyconservation.com` | 157 |
| `https://jeffersoncounty.iowa.gov/code` | 150 |
| `City of Fairfield Website` | 146 |
| `miu` | 141 |
| `Iowa Dance Collective` | 126 |
| `Grow Fairfield` | 101 |
| `fran` | 82 |

## Sample entries (first 5)

```json
[
  {
    "id": "01_Services_Overview.pdf-chunk-4",
    "source": "Fairfield Public Library",
    "currentMetadataKeys": [
      "category",
      "file",
      "source",
      "subcategory",
      "text",
      "type"
    ],
    "conservativePatch": {
      "filename": "01_Services_Overview.pdf"
    },
    "aggressivePatch": {
      "filename": "01_Services_Overview.pdf"
    },
    "fieldsToRemoveInAggressive": [
      "file"
    ],
    "notes": []
  },
  {
    "id": "01_Administration.pdf-chunk-4",
    "source": "City of Fairfield Website",
    "currentMetadataKeys": [
      "category",
      "file",
      "source",
      "subcategory",
      "text",
      "type"
    ],
    "conservativePatch": {
      "filename": "01_Administration.pdf"
    },
    "aggressivePatch": {
      "filename": "01_Administration.pdf"
    },
    "fieldsToRemoveInAggressive": [
      "file"
    ],
    "notes": []
  },
  {
    "id": "01_county_history_chunk_6",
    "source": "jeffersoncounty.iowa.gov",
    "currentMetadataKeys": [
      "category",
      "chunkIndex",
      "fileName",
      "source",
      "subcategory",
      "text"
    ],
    "conservativePatch": {
      "filename": "01_county_history.txt"
    },
    "aggressivePatch": {
      "filename": "01_county_history.txt"
    },
    "fieldsToRemoveInAggressive": [
      "fileName"
    ],
    "notes": []
  },
  {
    "id": "01_Board_of_Supervisors.pdf-chunk-2",
    "source": "jefferson-county",
    "currentMetadataKeys": [
      "category",
      "file",
      "source",
      "subcategory",
      "text"
    ],
    "conservativePatch": {
      "filename": "01_Board_of_Supervisors.pdf"
    },
    "aggressivePatch": {
      "filename": "01_Board_of_Supervisors.pdf"
    },
    "fieldsToRemoveInAggressive": [
      "file"
    ],
    "notes": []
  },
  {
    "id": "01_Board_of_Supervisors.pdf-chunk-0",
    "source": "jefferson-county",
    "currentMetadataKeys": [
      "category",
      "file",
      "source",
      "subcategory",
      "text"
    ],
    "conservativePatch": {
      "filename": "01_Board_of_Supervisors.pdf"
    },
    "aggressivePatch": {
      "filename": "01_Board_of_Supervisors.pdf"
    },
    "fieldsToRemoveInAggressive": [
      "file"
    ],
    "notes": []
  }
]
```