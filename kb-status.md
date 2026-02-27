# Knowledge Base Status
# Pinecone index: fairfield-civic-docs | 1536 dims | cosine | AWS us-east-1

Last verified: February 26, 2026 (all 24 orgs indexed)
Total vectors (approximate): ~8,044 (baseline 6,112 + 1,027 org chunks Feb 26 + 905 new org chunks Feb 26)

## Coverage Depth Key
- **FULL** — Complete document text indexed section by section (e.g., every ordinance section, every plan chapter)
- **SUBSTANTIAL** — Most pages crawled, rich paragraph-level content indexed
- **SURFACE** — Site crawled but content is thin due to JS-rendering, minimal static text, or small site size; headers and descriptions captured but not detailed body text

---

## CIVIC & GOVERNMENT DOCUMENTS

| Source | Type | Coverage | Notes |
|--------|------|----------|-------|
| City of Fairfield Code of Ordinances | PDF | FULL | Every section chunked and indexed |
| Title 20 Zoning Ordinance | PDF | FULL | Every section chunked and indexed |
| 2020 Comprehensive Plan | PDF | FULL | Every chapter chunked and indexed |
| WhatsthePlan (comp plan engagement site) | Web | SUBSTANTIAL | Community input and plan summaries |
| City Budget documents | PDF | FULL | Full document text indexed |
| City Audit documents | PDF | FULL | Full document text indexed |
| City legal documents | PDF | FULL | Full document text indexed |
| City Brand Guidelines | PDF | FULL | Full document text indexed |
| City of Fairfield website | Web | SUBSTANTIAL | Key public-facing pages crawled |
| 2023 Fairfield Housing Study | PDF | FULL | Full report indexed (indexed twice — k03 + k06) |
| 2024 Downtown Assessment | PDF | FULL | Full report indexed |
| Grow Fairfield website | Web | SUBSTANTIAL | Economic development pages crawled |
| Jefferson County government docs | PDF | SUBSTANTIAL | 4 dept PDFs (Assessor, Treasurer, Auditor, Recorder); URLs corrected after initial 404 errors |
| Fairfield Public Library website | Web | SUBSTANTIAL | Key public-facing pages crawled |

---

## COMMUNITY ORGANIZATIONS (scraped Feb 2026)

### Education
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Fairfield Community School District | fcsd | 54 | 6 | SURFACE | Site uses Finalsite JS-rendered CMS; 54 pages crawled but most rendered no extractable text |
| Maharishi International University | miu | 74 | 518 | SUBSTANTIAL | Rich content across programs, academics, campus life, sustainability |
| Maharishi School | maharishi-school | 3 | 7 | SURFACE | Most internal links returned errors; only homepage, admissions, and academic office captured |
| Fairfield Education Foundation | fef | 9 | 13 | SURFACE | Small site; directors, awards, and support pages captured |
| ISU Extension Jefferson County | isu-extension | 54 | 87 | SUBSTANTIAL | 4-H youth development, agriculture, community development, family sciences, impact reports |

### Health & Human Services
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Jefferson County Health Center | jchc | 58 | 97 | SUBSTANTIAL | Full services directory, provider profiles, patient info, careers |
| Carry On Bags | carry-on-bags | 6 | 8 | SURFACE | Small nonprofit site; about, donate, and volunteer pages captured |

### Arts, Culture & Media
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Fairfield Arts & Convention Center | facc | 6 | 7 | SURFACE | JS-rendered site; only homepage, about, events listing, gallery, and programs captured — no detailed event or program text |
| Fairfield Media Center | fmc | 14 | 30 | SURFACE | Static pages only; includes two pages containing some city council and county supervisors meeting content published by the Media Center — NOT a comprehensive council meeting archive |
| Iowa Source | iowa-source | 76 | 217 | SUBSTANTIAL | Rich article archive spanning 2012–2026; community news, arts, culture, food, environment |
| Fairfield Cultural Alliance | fairfield-cultural-alliance | 48 | 138 | SUBSTANTIAL | Heritage site documentation, Blue Zone materials, gala/awards coverage, cultural district directory, news archive 2012–2018 |
| Fairfield First Fridays Art Walk | fairfield-first-fridays | 12 | 10 | SURFACE | Wix site with limited static content; homepage, about, contact, and a few blog posts captured |

### Youth Sports
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Fairfield National Little League | fnll | 2 | 3 | SURFACE | Homepage and news page only; most subpages had no extractable content |
| Fairfield Atlantic Little League | fall | 1 | 1 | SURFACE | Homepage only; all subpages returned no extractable content |
| Jefferson County Little League | jcll | 2 | 3 | SURFACE | Homepage and registration page only |

### Tourism
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Visit Fairfield Iowa (CVB) | visit-fairfield | 62 | 97 | SUBSTANTIAL | Dining, lodging, attractions, itineraries, blog posts, business listings, community identity stories |

### Faith & Community
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| First United Methodist Church | fumc | 37 | 26 | SURFACE | Site pages are brief; ministries, staff, beliefs, and events captured but pages contain limited body text |
| Fairfield Friends Church | ffc | 7 | 7 | SURFACE | Small site; homepage and a few ministry/leadership pages captured |

### Conservation
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Jefferson County Conservation | jc-conservation | 78 | 92 | SUBSTANTIAL | Parks, trails, camping, hunting, fishing, programs, land stewardship projects, events, news archive |
| Jefferson County Trails Council | jc-trails | 91 | 187 | SUBSTANTIAL | Trail history, Matkin Bridge documentation, BNSF corridor, park-by-park trail guides, news archive 2009–2020 |

### Business
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Fairfield Area Chamber of Commerce | fairfield-chamber | 116 | 325 | SUBSTANTIAL | News archive, Main Street materials, calendar (165k chars), community pages, board/ambassadors, Chamber Bucks, member spotlight |

### Heritage
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Jefferson County Heritage Foundation | jc-heritage | 6 | 8 | SURFACE | Carnegie Museum, Maasdam Barns, Bonnifield Cabin, McElhinney House pages captured; support-carnegie, parsons-alumni, elm-grove-school returned errors |

### Civic
| Org | orgId | Pages | Chunks | Coverage | Notes |
|-----|-------|-------|--------|----------|-------|
| Greater Jefferson County Foundation | gjcf | 25 | 40 | SUBSTANTIAL | Grants program, scholarship listings, board history, what-we-do, GJCF history, pool project |
| Jefferson County Fair | jc-fair | 2 | 5 | SURFACE | Seasonal site; only about and schedule pages had extractable content |

---

## Iowa Dance Collective
| Source | Type | Coverage | Notes |
|--------|------|----------|-------|
| IDC website + PDFs (14 PDFs + 6 text files) | Mixed | SUBSTANTIAL | 126 chunks; PDFs include programs, bios, and event materials |

---

## NOT INDEXED (by design)
- **Iowa Code chapters** — Too large (150+ chapters); relevance dilution risk; Claude already knows general Iowa law framework. Script preserved at `iowa-code-processor.js` but not executed.
- **KRUU-LP 100.1 FM** — Station has shut down; website contains only farewell posts.
- **City Council meeting minutes/videos** — Not yet indexed. Fairfield Media Center site contains a small amount of council content but this is NOT a comprehensive archive. Full indexing of council meetings is a planned future expansion via YouTube transcript processing.


