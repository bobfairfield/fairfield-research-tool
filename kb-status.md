# Knowledge Base Status
# Pinecone index: fairfield-civic-docs | 1536 dims | cosine | AWS us-east-1

Last verified: February 26, 2026 (all 14 orgs indexed)
Total vectors (approximate): ~7,139 (baseline 6,112 + 1,027 org chunks indexed Feb 26 2026)

---

## CIVIC & GOVERNMENT DOCUMENTS

| Source | Type | Status | Notes |
|--------|------|--------|-------|
| City of Fairfield Code of Ordinances | PDF | ✅ Indexed | |
| Title 20 Zoning Ordinance | PDF | ✅ Indexed | |
| 2020 Comprehensive Plan | PDF | ✅ Indexed | |
| WhatsthePlan (comp plan engagement) | Web | ✅ Indexed | |
| City Budget documents | PDF | ✅ Indexed | |
| City Audit documents | PDF | ✅ Indexed | |
| City legal documents | PDF | ✅ Indexed | |
| City Brand Guidelines | PDF | ✅ Indexed | |
| City of Fairfield website | Web | ✅ Indexed | |
| 2023 Fairfield Housing Study | PDF | ✅ Indexed | (indexed twice — k03 + k06) |
| 2024 Downtown Assessment | PDF | ✅ Indexed | |
| Grow Fairfield website | Web | ✅ Indexed | |
| Jefferson County government docs | PDF | ✅ Indexed | 4 dept PDFs corrected after 404 fix |
| Fairfield Public Library website | Web | ✅ Indexed | |

---

## COMMUNITY ORGANIZATIONS (scraped Feb 2026)

### Education
| Org | orgId | Pages | Chunks | Status |
|-----|-------|-------|--------|--------|
| Fairfield Community School District | fcsd | 54 | 6 | ✅ (low yield — JS-rendered site) |
| Maharishi International University | miu | 74 | 518 | ✅ |
| Maharishi School | maharishi-school | 3 | 7 | ✅ (low yield — limited static pages) |

### Health & Human Services
| Org | orgId | Pages | Chunks | Status |
|-----|-------|-------|--------|--------|
| Jefferson County Health Center | jchc | 58 | 97 | ✅ |
| Carry On Bags | carry-on-bags | 6 | 8 | ✅ (small site) |

### Arts, Culture & Media
| Org | orgId | Pages | Chunks | Status |
|-----|-------|-------|--------|--------|
| Fairfield Arts & Convention Center | facc | 6 | 7 | ✅ (JS-rendered site, low yield) |
| Fairfield Media Center | fmc | 14 | 30 | ✅ (includes city council & supervisors transcripts) |
| Iowa Source | iowa-source | 76 | 217 | ✅ (rich article archive) |

### Youth Sports
| Org | orgId | Pages | Chunks | Status |
|-----|-------|-------|--------|--------|
| Fairfield National Little League | fnll | 2 | 3 | ✅ (minimal static content) |
| Fairfield Atlantic Little League | fall | 1 | 1 | ✅ (minimal static content) |
| Jefferson County Little League | jcll | 2 | 3 | ✅ (minimal static content) |

### Tourism
| Org | orgId | Pages | Chunks | Status |
|-----|-------|-------|--------|--------|
| Visit Fairfield Iowa (CVB) | visit-fairfield | 62 | 97 | ✅ |

### Faith & Community
| Org | orgId | Pages | Chunks | Status |
|-----|-------|-------|--------|--------|
| First United Methodist Church | fumc | 37 | 26 | ✅ |
| Fairfield Friends Church | ffc | 7 | 7 | ✅ (minimal static content) |

---

## Iowa Dance Collective
| Source | Type | Status | Notes |
|--------|------|--------|-------|
| IDC website + PDFs (14 PDFs + 6 text files) | Mixed | ✅ Indexed | 126 chunks |

---

## NOT INDEXED (by design)
- Iowa Code chapters — decision: too large, relevance dilution risk, Claude knows general Iowa law
- KRUU-LP 100.1 FM — station has shut down

---

*Update pending column entries after running Pinecone audit script.*
