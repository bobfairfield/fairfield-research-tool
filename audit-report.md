# Civic Intelligence Hub — RAG Audit Report

**Generated**: 2026-04-25T20:04:37.294Z
**Duration**: 94 seconds
**Index**: `fairfield-civic-docs`

## Executive Summary

- **Total vectors**: 18,752
- **Distinct sources**: 1,013
- **Orphan vectors** (no `source` field): 0

### Vector ID pattern distribution

| Pattern | Count | % of total |
|---|---:|---:|
| `other` | 8,974 | 47.9% |
| `filename.pdf-chunk-N` | 6,078 | 32.4% |
| `filename_chunk_N` | 2,331 | 12.4% |
| `prefix_name_chunk_N` | 1,223 | 6.5% |
| `orgId-sha24-N` | 146 | 0.8% |

### Source-key style distribution

| Style | Count | Examples |
|---|---:|---|
| rootDomain | 13 | `jeffersoncounty.iowa.gov`, `jefferson.iowaassessors.com`, `fairfieldiowa.com` |
| url | 979 | `http://www.area15rpc.com/rhtf`, `https://www.area15rpc.com/single-post/fall-2025-regional-planning-news-thriving-communities-and-local-development-initiatives`, `https://www.area15rpc.com/single-post/rpcnewsline-spring2025` |
| hyphenatedKey | 4 | `jefferson-county`, `fcsd-board-minutes`, `fairfield-acc` |
| freeform | 10 | `Fairfield Area Chamber of Commerce`, `Fairfield Public Library`, `Iowa Dance Collective` |
| other | 7 | `maharishi_school`, `singing_cedars_school`, `miu` |

### Suspected aliased metadata fields

These field groups likely mean the same thing but are spelled differently across sources:

- **file / fileName / filename** — both used: `file`, `fileName`, `filename`
- **url / sourceUrl / source_url** — both used: `url`, `sourceUrl`, `source_url`
- **chunkIndex / chunk_index / chunkNum** — both used: `chunkIndex`, `chunk_index`

### Top 10 sources by vector count

| Source | Vectors | ID pattern(s) |
|---|---:|---|
| `cityoffairfieldiowa.com` | 3,373 | filename_chunk_N (2320), filename.pdf-chunk-N (1053) |
| `https://archive.org/details/historyofjeffers01fult` | 1,672 | other (1672) |
| `https://www.fairfield.ia.us/walton-lake-bridge` | 1,506 | other (1506) |
| `City of Fairfield` | 716 | filename.pdf-chunk-N (716) |
| `https://www.fairfield.k12.ia.us/board-of-education/board-meeting-minutes` | 569 | other (569) |
| `jeffersoncounty.iowa.gov` | 506 | prefix_name_chunk_N (506) |
| `jeffersoncountyhealthcenter.org` | 369 | prefix_name_chunk_N (289), filename.pdf-chunk-N (80) |
| `fairfield-history-series` | 300 | other (300) |
| `Fairfield Public Library` | 262 | filename.pdf-chunk-N (262) |
| `maharishi_school` | 255 | filename.pdf-chunk-N (255) |

### Key findings

- 3 field-name alias group(s) detected — metadata schema is not consistent across uploads.
- 979 source(s) use full URLs as the `source` key instead of short hyphenated keys.
- 10 source(s) use freeform/capitalized labels as the `source` key.
- 5 distinct vector ID patterns in use across the index.

---

## Full Per-Source Detail

All 1013 sources, sorted by vector count (descending). Metadata-field stats are based on a sample of up to 10 vectors per source.

### `cityoffairfieldiowa.com`

- **Vector count**: 3,373
- **Sample IDs**: `fairfield-building-permits_chunk_0`, `fairfield-building-permits_chunk_2`, `fairfield-building-permits_chunk_4`
- **ID patterns**: `filename_chunk_N` (2320), `filename.pdf-chunk-N` (1053)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/10 (50%) | government |
| `chunkIndex` | 10/10 (100%) | 0 |
| `file` | 5/10 (50%) | fairfield-building-permits.txt |
| `fileName` | 10/10 (100%) | fairfield-building-permits.txt |
| `filename` | 10/10 (100%) | fairfield-building-permits.txt |
| `org` | 5/10 (50%) | City of Fairfield |
| `source` | 10/10 (100%) | cityoffairfieldiowa.com |
| `text` | 10/10 (100%) | Fairfield Building & Zoning Permits — How to Apply Source: cityoffairfieldiowa.c... |
| `type` | 5/10 (50%) | civic_info |

### `https://archive.org/details/historyofjeffers01fult`

- **Vector count**: 1,672
- **Sample IDs**: `jefferson-county-history-2e30a65c4d9b87658736a835-1`, `jefferson-county-history-2e30a65c4d9b87658736a835-10`, `jefferson-county-history-2e30a65c4d9b87658736a835-0`
- **ID patterns**: `other` (1672)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 1 |
| `filename` | 10/10 (100%) | historyofjeffers01fult_djvuFullText.txt |
| `orgId` | 10/10 (100%) | jefferson-county-history |
| `source` | 10/10 (100%) | https://archive.org/details/historyofjeffers01fult |
| `text` | 10/10 (100%) | Y 13   CHAPTER  VI  JEFFERSON   COUNTY:  THE  LAND 19   CHAPTER  VII  THE   INDI... |
| `totalChunks` | 10/10 (100%) | 1672 |
| `type` | 10/10 (100%) | history |

### `https://www.fairfield.ia.us/walton-lake-bridge`

- **Vector count**: 1,506
- **Sample IDs**: `walton-lake-bridge-0fc9683bc6d46795c8f95648-15`, `walton-lake-bridge-0fc9683bc6d46795c8f95648-14`, `walton-lake-bridge-0fc9683bc6d46795c8f95648-7`
- **ID patterns**: `other` (1506)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 15 |
| `filename` | 10/10 (100%) | Walton Lake Contract Documents (2).pdf |
| `orgId` | 10/10 (100%) | walton-lake-bridge |
| `source` | 10/10 (100%) | https://www.fairfield.ia.us/walton-lake-bridge |
| `text` | 10/10 (100%) | and attach the seal of the Company thereto, bonds  and undertakings, recognizanc... |
| `totalChunks` | 10/10 (100%) | 32 |
| `type` | 10/10 (100%) | government |

### `City of Fairfield`

- **Vector count**: 716
- **Sample IDs**: `2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf-chunk-13`, `2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf-chunk-11`, `2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf-chunk-14`
- **ID patterns**: `filename.pdf-chunk-N` (716)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | 2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf |
| `filename` | 10/10 (100%) | 2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf |
| `source` | 10/10 (100%) | City of Fairfield |
| `text` | 10/10 (100%) | and standards. 10. Property taxes are too high. 11.  There is interest in tiny h... |
| `type` | 10/10 (100%) | city_plan |
| `year` | 10/10 (100%) | 2023 |

### `https://www.fairfield.k12.ia.us/board-of-education/board-meeting-minutes`

- **Vector count**: 569
- **Sample IDs**: `fcsd-board-minutes-046bc9b8b9541d38e856b1f0-0`, `fcsd-board-minutes-11a85383fcb3b84273abd0e5-0`, `fcsd-board-minutes-106cf259ebc28ef65d6d1e60-2`
- **ID patterns**: `other` (569)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 0 |
| `filename` | 10/10 (100%) | 03_14_22_Public_Hearing__Special_meeting_and_C.pdf |
| `orgId` | 10/10 (100%) | fcsd-board-minutes |
| `source` | 10/10 (100%) | https://www.fairfield.k12.ia.us/board-of-education/board-meeting-minutes |
| `text` | 10/10 (100%) | FAIRFIELD COMMUNITY SCHOOL DISTRICT FAIRFIELD, IOWA  BOARD OF DIRECTORS  ACT Bui... |
| `totalChunks` | 10/10 (100%) | 3 |
| `type` | 10/10 (100%) | government |
| `yearFolder` | 10/10 (100%) | 2021-2022 |

### `jeffersoncounty.iowa.gov`

- **Vector count**: 506
- **Sample IDs**: `01_county_history_chunk_9`, `01_county_history_chunk_1`, `01_county_history_chunk_8`
- **ID patterns**: `prefix_name_chunk_N` (506)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | county_government |
| `chunkIndex` | 10/10 (100%) | 9 |
| `fileName` | 10/10 (100%) | 01_county_history.txt |
| `filename` | 10/10 (100%) | 01_county_history.txt |
| `source` | 10/10 (100%) | jeffersoncounty.iowa.gov |
| `subcategory` | 10/10 (100%) | county_history |
| `text` | 10/10 (100%) | ind any issues or just want to provide some feedback. Name Email Address Message... |

### `jeffersoncountyhealthcenter.org`

- **Vector count**: 369
- **Sample IDs**: `jchc_11_ambulatory_care_chunk_1`, `jchc_02_ceo_welcome_chunk_2`, `jchc_12_cardiac_rehab_chunk_1`
- **ID patterns**: `prefix_name_chunk_N` (289), `filename.pdf-chunk-N` (80)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | healthcare |
| `chunkIndex` | 10/10 (100%) | 1 |
| `fileName` | 10/10 (100%) | jchc_11_ambulatory_care.txt |
| `filename` | 10/10 (100%) | jchc_11_ambulatory_care.txt |
| `source` | 10/10 (100%) | jeffersoncountyhealthcenter.org |
| `subcategory` | 10/10 (100%) | services |
| `text` | 10/10 (100%) | ician General CV Submission    Non-Physician CV Submission    Contact Us    P... |

### `fairfield-history-series`

- **Vector count**: 300
- **Sample IDs**: `fairfield-history-series-001c85e24c4dcf5b-3`, `fairfield-history-series-001c85e24c4dcf5b-28`, `fairfield-history-series-001c85e24c4dcf5b-35`
- **ID patterns**: `other` (300)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `source` | 10/10 (100%) | fairfield-history-series |
| `sourceUrl` | 10/10 (100%) | https://www.youtube.com/@fair_field_productions |
| `text` | 10/10 (100%) | dn't leave their Mark in, Iowa. The ice ages. This ice ages started about 1.6 mi... |
| `title` | 10/10 (100%) | Life Before Fairfield Transcript  |
| `type` | 10/10 (100%) | history_transcript |
| `url` | 10/10 (100%) | https://www.youtube.com/@fair_field_productions |

### `Fairfield Public Library`

- **Vector count**: 262
- **Sample IDs**: `01_Digital_Library_Overview.pdf-chunk-5`, `01_Services_Overview.pdf-chunk-2`, `01_Digital_Library_Overview.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (262)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | Education |
| `file` | 10/10 (100%) | 01_Digital_Library_Overview.pdf |
| `filename` | 10/10 (100%) | 01_Digital_Library_Overview.pdf |
| `source` | 10/10 (100%) | Fairfield Public Library |
| `subcategory` | 10/10 (100%) | Digital_Library |
| `text` | 10/10 (100%) | sm (https://www.visitfairfieldiowa.com/) Fairfield Community School District (ht... |
| `type` | 10/10 (100%) | web page |

### `maharishi_school`

- **Vector count**: 255
- **Sample IDs**: `01_home.pdf-chunk-4`, `01_home.pdf-chunk-12`, `01_home.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (255)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | educational_institutions |
| `file` | 10/10 (100%) | 01_home.pdf |
| `filename` | 10/10 (100%) | 01_home.pdf |
| `source` | 10/10 (100%) | maharishi_school |
| `sourceUrl` | 10/10 (100%) | https://maharishischool.org |
| `subcategory` | 10/10 (100%) | maharishi_school |
| `text` | 10/10 (100%) | 4 AMMaharishi School Home - Maharishi School https://maharishischool.org/6/22  P... |
| `url` | 10/10 (100%) | https://maharishischool.org |

### `fairfieldiowa.com`

- **Vector count**: 168
- **Sample IDs**: `chamber_01_home_chunk_1`, `chamber_01_home_chunk_17`, `chamber_01_home_chunk_20`
- **ID patterns**: `prefix_name_chunk_N` (168)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | community_organizations |
| `chunkIndex` | 10/10 (100%) | 1 |
| `fileName` | 10/10 (100%) | chamber_01_home.txt |
| `filename` | 10/10 (100%) | chamber_01_home.txt |
| `source` | 10/10 (100%) | fairfieldiowa.com |
| `subcategory` | 10/10 (100%) | chamber_of_commerce |
| `text` | 10/10 (100%) | p Exhibit posted 2/24/26    More News & Blogs Subscribe to our e-Newsletter    U... |

### `jeffersoncountyconservation.com`

- **Vector count**: 157
- **Sample IDs**: `jcc_06_news_chunk_7`, `jcc_11_bonnifield_lake_chunk_2`, `jcc_03_board_chunk_4`
- **ID patterns**: `prefix_name_chunk_N` (157)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | parks_recreation |
| `chunkIndex` | 10/10 (100%) | 7 |
| `fileName` | 10/10 (100%) | jcc_06_news.txt |
| `filename` | 10/10 (100%) | jcc_06_news.txt |
| `source` | 10/10 (100%) | jeffersoncountyconservation.com |
| `subcategory` | 10/10 (100%) | news |
| `text` | 10/10 (100%) | more   April 29, 2024 / by Naturalist     https://jeffersoncountyconservation.co... |

### `https://jeffersoncounty.iowa.gov/code`

- **Vector count**: 150
- **Sample IDs**: `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-10`, `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-18`, `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-16`
- **ID patterns**: `other` (150)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/code |
| `filename` | 10/10 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/code |
| `org` | 10/10 (100%) | Jefferson County Iowa Government |
| `source` | 10/10 (100%) | https://jeffersoncounty.iowa.gov/code |
| `text` | 10/10 (100%) | SECTION 3. Specific Requirements Reference: All rules and regulations, as amende... |
| `type` | 10/10 (100%) | community_org |

### `City of Fairfield Website`

- **Vector count**: 146
- **Sample IDs**: `01_Boards_Overview.pdf-chunk-0`, `01_The_City_Overview.pdf-chunk-0`, `01_The_City_Overview.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (146)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | City Records |
| `file` | 10/10 (100%) | 01_Boards_Overview.pdf |
| `filename` | 10/10 (100%) | 01_Boards_Overview.pdf |
| `source` | 10/10 (100%) | City of Fairfield Website |
| `subcategory` | 10/10 (100%) | Boards_and_Commissions |
| `text` | 10/10 (100%) |   Boards & Commissions City Boards & Commissions The City of Fairfield, Iowa, is... |
| `type` | 10/10 (100%) | web page |

### `miu`

- **Vector count**: 141
- **Sample IDs**: `02_mission_core_values.pdf-chunk-0`, `02_mission_core_values.pdf-chunk-2`, `02_mission_core_values.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (141)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | educational_institutions |
| `file` | 10/10 (100%) | 02_mission_core_values.pdf |
| `filename` | 10/10 (100%) | 02_mission_core_values.pdf |
| `source` | 10/10 (100%) | miu |
| `sourceUrl` | 10/10 (100%) | https://www.miu.edu |
| `subcategory` | 10/10 (100%) | maharishi_international_university |
| `text` | 10/10 (100%) |   Founded by Maharishi Mahesh Yogi DonateMIU NewsAthleticsStudentsServices Facul... |
| `url` | 10/10 (100%) | https://www.miu.edu |

### `Iowa Dance Collective`

- **Vector count**: 126
- **Sample IDs**: `01_idc_overview_and_facility_chunk_1`, `01_board_of_trustees.pdf-chunk-0`, `01_idc_overview_and_facility_chunk_3`
- **ID patterns**: `prefix_name_chunk_N` (41), `filename.pdf-chunk-N` (85)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | Arts Organizations & Education |
| `chunkIndex` | 6/10 (60%) | 1 |
| `file` | 4/10 (40%) | 01_board_of_trustees.pdf |
| `fileName` | 6/10 (60%) | 01_idc_overview_and_facility.txt |
| `filename` | 10/10 (100%) | 01_idc_overview_and_facility.txt |
| `source` | 10/10 (100%) | Iowa Dance Collective |
| `sourceUrl` | 10/10 (100%) | https://iowadancecollective.com |
| `subcategory` | 10/10 (100%) | Dance School |
| `text` | 10/10 (100%) | and individualized instruction, IDC programs nurture dancers from their first st... |
| `url` | 10/10 (100%) | https://iowadancecollective.com |

### `https://www.youtube.com/@fair_field_productions`

- **Vector count**: 113
- **Sample IDs**: `fairfield-history-series-24a00663a2abace0fa1fb596-2`, `fairfield-history-series-24a00663a2abace0fa1fb596-3`, `fairfield-history-series-2bac65fd2a98531dcd8f7fc7-1`
- **ID patterns**: `other` (113)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 2 |
| `filename` | 10/10 (100%) | Big_River_Connectivity_Wildlife_Crossings_Project_Transcript.pdf |
| `orgId` | 10/10 (100%) | fairfield-history-series |
| `source` | 10/10 (100%) | https://www.youtube.com/@fair_field_productions |
| `text` | 10/10 (100%) | study that is to look  1:02  at every bridge and every culvert as a  1:05  poten... |
| `totalChunks` | 10/10 (100%) | 7 |
| `type` | 10/10 (100%) | history |

### `Grow Fairfield`

- **Vector count**: 101
- **Sample IDs**: `02_Staff.pdf-chunk-0`, `02_Staff.pdf-chunk-2`, `02_Staff.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (101)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | Community Organizations |
| `file` | 10/10 (100%) | 02_Staff.pdf |
| `filename` | 10/10 (100%) | 02_Staff.pdf |
| `source` | 10/10 (100%) | Grow Fairfield |
| `text` | 10/10 (100%) |   ABOUT GROW FAIRFIELD PAGES: About Staff Board of Directors Strategic Plan 2025... |
| `type` | 10/10 (100%) | web page |

### `fran`

- **Vector count**: 82
- **Sample IDs**: `FRAN_05_enterprise-solutions-community-connections_chunk_2`, `FRAN_02_buildings-038-energy_chunk_0`, `FRAN_01_about_chunk_0`
- **ID patterns**: `other` (82)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | community-organizations |
| `chunkIndex` | 10/10 (100%) | 2 |
| `fileName` | 10/10 (100%) | FRAN_05_enterprise-solutions-community-connections.txt |
| `filename` | 10/10 (100%) | FRAN_05_enterprise-solutions-community-connections.txt |
| `source` | 10/10 (100%) | fran |
| `subcategory` | 10/10 (100%) | fran |
| `text` | 10/10 (100%) | s in order to inform more coordinated, accessible, and community-driven informat... |

### `fairfield_community_school_district`

- **Vector count**: 81
- **Sample IDs**: `02_why_fairfield_schools.pdf-chunk-1`, `02_why_fairfield_schools.pdf-chunk-0`, `02_why_fairfield_schools.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (81)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | educational_institutions |
| `file` | 10/10 (100%) | 02_why_fairfield_schools.pdf |
| `filename` | 10/10 (100%) | 02_why_fairfield_schools.pdf |
| `source` | 10/10 (100%) | fairfield_community_school_district |
| `sourceUrl` | 10/10 (100%) | https://www.fairfieldsfuture.org |
| `subcategory` | 10/10 (100%) | fairfield_community_school_district |
| `text` | 10/10 (100%) |  age (for employment), marital status (for programs), sexual orientation, gender... |
| `url` | 10/10 (100%) | https://www.fairfieldsfuture.org |

### `jchc`

- **Vector count**: 80
- **Sample IDs**: `JCHC_10_services.pdf-chunk-3`, `JCHC_04_about-board-of-trustees.pdf-chunk-0`, `JCHC_19_providers.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (80)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | jefferson-county |
| `file` | 10/10 (100%) | JCHC_10_services.pdf |
| `filename` | 10/10 (100%) | JCHC_10_services.pdf |
| `source` | 10/10 (100%) | jchc |
| `subcategory` | 10/10 (100%) | health-center |
| `text` | 10/10 (100%) | b Mobile Stereotactic Breast Biopsies Numerous Surgical Procedures Mobile Servic... |

### `https://www.youtube.com/watch?v=HsOQIzMwF5c`

- **Vector count**: 78
- **Sample IDs**: `yt-transcript-HsOQIzMwF5c-chunk-13`, `yt-transcript-HsOQIzMwF5c-chunk-0`, `yt-transcript-HsOQIzMwF5c-chunk-11`
- **ID patterns**: `other` (78)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 13 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=HsOQIzMwF5c |
| `text` | 10/10 (100%) | Treatment Services. Um Jefferson County is one of my 10. I've been in this posit... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | HsOQIzMwF5c |

### `jefferson-county`

- **Vector count**: 75
- **Sample IDs**: `01_public_health.pdf-chunk-4`, `01_Assessor.pdf-chunk-1`, `01_public_health.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (75)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | county-government |
| `file` | 10/10 (100%) | 01_public_health.pdf |
| `filename` | 10/10 (100%) | 01_public_health.pdf |
| `source` | 10/10 (100%) | jefferson-county |
| `subcategory` | 10/10 (100%) | conservation |
| `text` | 10/10 (100%) | ns include: Communicable disease follow-up Emergency preparedness in the county ... |

### `https://www.youtube.com/watch?v=EZjCGlJ6kY8`

- **Vector count**: 69
- **Sample IDs**: `yt-transcript-EZjCGlJ6kY8-chunk-12`, `yt-transcript-EZjCGlJ6kY8-chunk-26`, `yt-transcript-EZjCGlJ6kY8-chunk-15`
- **ID patterns**: `other` (69)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 12 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=EZjCGlJ6kY8 |
| `text` | 10/10 (100%) | 2025 special payroll in the amount of 923 2034. Approval of the June 20th, 2025 ... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | EZjCGlJ6kY8 |

### `https://www.youtube.com/watch?v=7OPfNhx4bOk`

- **Vector count**: 67
- **Sample IDs**: `yt-transcript-7OPfNhx4bOk-chunk-25`, `yt-transcript-7OPfNhx4bOk-chunk-20`, `yt-transcript-7OPfNhx4bOk-chunk-7`
- **ID patterns**: `other` (67)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 25 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=7OPfNhx4bOk |
| `text` | 10/10 (100%) | time. But if you let the city hall know that you got a tenant, the tenants suppo... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | 7OPfNhx4bOk |

### `https://www.youtube.com/watch?v=5L3TBYbPunM`

- **Vector count**: 60
- **Sample IDs**: `yt-transcript-5L3TBYbPunM-chunk-20`, `yt-transcript-5L3TBYbPunM-chunk-19`, `yt-transcript-5L3TBYbPunM-chunk-37`
- **ID patterns**: `other` (60)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 20 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=5L3TBYbPunM |
| `text` | 10/10 (100%) | need to be drained, leaving the wildlife undisturbed and allowing residents to e... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | 5L3TBYbPunM |

### `https://www.youtube.com/watch?v=f2l-WpTgHyE`

- **Vector count**: 60
- **Sample IDs**: `yt-transcript-f2l-WpTgHyE-chunk-9`, `yt-transcript-f2l-WpTgHyE-chunk-5`, `yt-transcript-f2l-WpTgHyE-chunk-17`
- **ID patterns**: `other` (60)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 9 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=f2l-WpTgHyE |
| `text` | 10/10 (100%) | Communications Center has contact with the front office in the event of emergenc... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | f2l-WpTgHyE |

### `https://www.youtube.com/watch?v=4ID7bF8f7xE`

- **Vector count**: 59
- **Sample IDs**: `fc-council-4ID7bF8f7xE-25`, `fc-council-4ID7bF8f7xE-27`, `fc-council-4ID7bF8f7xE-17`
- **ID patterns**: `other` (59)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=4ID7bF8f7xE |
| `text` | 10/10 (100%) | Um it's um it's been um full of junk for quite a while. That's not any insult to... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 11.24.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=lWW6pNBe1BY`

- **Vector count**: 59
- **Sample IDs**: `yt-transcript-lWW6pNBe1BY-chunk-13`, `yt-transcript-lWW6pNBe1BY-chunk-18`, `yt-transcript-lWW6pNBe1BY-chunk-19`
- **ID patterns**: `other` (59)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 13 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=lWW6pNBe1BY |
| `text` | 10/10 (100%) | them, well 7, which is the one we use the most, is dropping at 7 and 1/2 ft a ye... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | lWW6pNBe1BY |

### `https://www.youtube.com/watch?v=GVDXFre7hWU`

- **Vector count**: 57
- **Sample IDs**: `yt-transcript-GVDXFre7hWU-chunk-37`, `yt-transcript-GVDXFre7hWU-chunk-35`, `yt-transcript-GVDXFre7hWU-chunk-43`
- **ID patterns**: `other` (57)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 37 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=GVDXFre7hWU |
| `text` | 10/10 (100%) | of the lake um are important uh to that. So um what we what is proposed in front... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | GVDXFre7hWU |

### `https://www.fairfieldiowa.com/calendar`

- **Vector count**: 56
- **Sample IDs**: `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-18`, `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-40`, `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-33`
- **ID patterns**: `other` (56)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | business |
| `file` | 10/10 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/calendar |
| `filename` | 10/10 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/calendar |
| `org` | 10/10 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 10/10 (100%) | https://www.fairfieldiowa.com/calendar |
| `text` | 10/10 (100%) | Get ready to be blown away as the dedicated dancers of HTDA's Storm Competition ... |
| `type` | 10/10 (100%) | community_org |

### `https://www.youtube.com/watch?v=W6fEWkbepqk`

- **Vector count**: 55
- **Sample IDs**: `fc-council-W6fEWkbepqk-14`, `fc-council-W6fEWkbepqk-0`, `fc-council-W6fEWkbepqk-1`
- **ID patterns**: `other` (55)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=W6fEWkbepqk |
| `text` | 10/10 (100%) | We have Chris Sorflaten speaking to source water program. Thank Hello, good even... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 2.9.26 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=kqXlg9YIuPI`

- **Vector count**: 55
- **Sample IDs**: `fc-council-kqXlg9YIuPI-10`, `fc-council-kqXlg9YIuPI-16`, `fc-council-kqXlg9YIuPI-12`
- **ID patterns**: `other` (55)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 5... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 5... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=kqXlg9YIuPI |
| `text` | 10/10 (100%) | I mean, next meeting we can do that since we don't have it on the agenda tonight... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 5.27.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=V8PWx4fz1a4`

- **Vector count**: 55
- **Sample IDs**: `yt-transcript-V8PWx4fz1a4-chunk-23`, `yt-transcript-V8PWx4fz1a4-chunk-30`, `yt-transcript-V8PWx4fz1a4-chunk-28`
- **ID patterns**: `other` (55)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 23 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=V8PWx4fz1a4 |
| `text` | 10/10 (100%) | 7 p.m. Um, so the one thing I want to point out to the council is typically we h... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | V8PWx4fz1a4 |

### `https://www.youtube.com/watch?v=zR9ME41lUKM`

- **Vector count**: 54
- **Sample IDs**: `yt-transcript-zR9ME41lUKM-chunk-1`, `yt-transcript-zR9ME41lUKM-chunk-0`, `yt-transcript-zR9ME41lUKM-chunk-10`
- **ID patterns**: `other` (54)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 1 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=zR9ME41lUKM |
| `text` | 10/10 (100%) | you start and see how it goes. I don't as long as I I just don't it's not that i... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | zR9ME41lUKM |

### `https://www.youtube.com/watch?v=ZRc6jD147Kw`

- **Vector count**: 53
- **Sample IDs**: `fc-council-ZRc6jD147Kw-31`, `fc-council-ZRc6jD147Kw-16`, `fc-council-ZRc6jD147Kw-18`
- **ID patterns**: `other` (53)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 5... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 5... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=ZRc6jD147Kw |
| `text` | 10/10 (100%) | So at this point do we know you I mean you probably don't know but maybe they co... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 5.12.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=nVnA6dt3lMI`

- **Vector count**: 53
- **Sample IDs**: `fc-council-nVnA6dt3lMI-0`, `fc-council-nVnA6dt3lMI-22`, `fc-council-nVnA6dt3lMI-16`
- **ID patterns**: `other` (53)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=nVnA6dt3lMI |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Study S... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 12.15.25 |
| `type` | 10/10 (100%) | council_meeting |

### `singing_cedars_school`

- **Vector count**: 52
- **Sample IDs**: `01_home.pdf-chunk-1`, `01_home.pdf-chunk-0`, `01_home.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (52)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | educational_institutions |
| `file` | 10/10 (100%) | 01_home.pdf |
| `filename` | 10/10 (100%) | 01_home.pdf |
| `source` | 10/10 (100%) | singing_cedars_school |
| `sourceUrl` | 10/10 (100%) | https://www.singingcedars.com |
| `subcategory` | 10/10 (100%) | singing_cedars_school |
| `text` | 10/10 (100%) | ntsProgramsGivingCon 2/25/26, 11:02 AMHome https://www.singingcedars.com/home3/5... |
| `url` | 10/10 (100%) | https://www.singingcedars.com |

### `https://www.youtube.com/watch?v=HiVoasoFNoI`

- **Vector count**: 52
- **Sample IDs**: `fc-council-HiVoasoFNoI-3`, `fc-council-HiVoasoFNoI-46`, `fc-council-HiVoasoFNoI-42`
- **ID patterns**: `other` (52)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=HiVoasoFNoI |
| `text` | 10/10 (100%) | Work sessions are set by the mayor and typically on Saturday which is defined uh... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 1.12.26 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IcVpObZ-Puw`

- **Vector count**: 52
- **Sample IDs**: `fc-council-IcVpObZ-Puw-0`, `fc-council-IcVpObZ-Puw-31`, `fc-council-IcVpObZ-Puw-42`
- **ID patterns**: `other` (52)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=IcVpObZ-Puw |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Study S... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 10.27.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=mDgaUVpvVqA`

- **Vector count**: 52
- **Sample IDs**: `yt-transcript-mDgaUVpvVqA-chunk-12`, `yt-transcript-mDgaUVpvVqA-chunk-45`, `yt-transcript-mDgaUVpvVqA-chunk-41`
- **ID patterns**: `other` (52)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 12 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=mDgaUVpvVqA |
| `text` | 10/10 (100%) | It has to do with the uh the May 7th notes kept by the city that uh they had wen... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | mDgaUVpvVqA |

### `https://www.youtube.com/watch?v=nkAEUQOJ0KY`

- **Vector count**: 44
- **Sample IDs**: `fc-council-nkAEUQOJ0KY-42`, `fc-council-nkAEUQOJ0KY-38`, `fc-council-nkAEUQOJ0KY-36`
- **ID patterns**: `other` (44)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 4... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 4... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=nkAEUQOJ0KY |
| `text` | 10/10 (100%) | All righty. No more questions. Okay. city administrator report. I want to segue ... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 4.28.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wm-MVrXLrIo`

- **Vector count**: 44
- **Sample IDs**: `fc-council-wm-MVrXLrIo-35`, `fc-council-wm-MVrXLrIo-14`, `fc-council-wm-MVrXLrIo-13`
- **ID patterns**: `other` (44)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 4-22-13 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 4-22-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=wm-MVrXLrIo |
| `text` | 10/10 (100%) | Some of them are in pretty good shape on a on a visible um a $60,000 gap next ye... |
| `title` | 10/10 (100%) | Fairfield City Council 4-22-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=gZHFUb0P1VM`

- **Vector count**: 43
- **Sample IDs**: `fc-council-gZHFUb0P1VM-1`, `fc-council-gZHFUb0P1VM-20`, `fc-council-gZHFUb0P1VM-26`
- **ID patterns**: `other` (43)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 8... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 8... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=gZHFUb0P1VM |
| `text` | 10/10 (100%) | So, we were approached by um Iowa State University Extension and Outreach, and t... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 8.11.25 |
| `type` | 10/10 (100%) | council_meeting |

### `jefferson.iowaassessors.com`

- **Vector count**: 42
- **Sample IDs**: `assessor_02_duties_chunk_16`, `assessor_04_owners_responsibility_chunk_2`, `assessor_02_duties_chunk_12`
- **ID patterns**: `prefix_name_chunk_N` (42)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | county_government |
| `chunkIndex` | 10/10 (100%) | 16 |
| `fileName` | 10/10 (100%) | assessor_02_duties.txt |
| `filename` | 10/10 (100%) | assessor_02_duties.txt |
| `source` | 10/10 (100%) | jefferson.iowaassessors.com |
| `subcategory` | 10/10 (100%) | assessor |
| `text` | 10/10 (100%) | or Treasurer.     Questions relating to taxes should be addressed to the local c... |

### `https://www.youtube.com/watch?v=Eusdl4nerzQ`

- **Vector count**: 39
- **Sample IDs**: `fc-council-Eusdl4nerzQ-25`, `fc-council-Eusdl4nerzQ-20`, `fc-council-Eusdl4nerzQ-19`
- **ID patterns**: `other` (39)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — 2026-03-09 — Fairfield City Council Meeting |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-03-09 — Fairfield City Council Meeting |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-03-09 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Eusdl4nerzQ |
| `text` | 10/10 (100%) | We're dealing we're working on new housing with the Sunrise uh trail division, b... |
| `title` | 10/10 (100%) | Fairfield City Council Meeting |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Wh6b2jzugXk`

- **Vector count**: 37
- **Sample IDs**: `fc-council-Wh6b2jzugXk-12`, `fc-council-Wh6b2jzugXk-22`, `fc-council-Wh6b2jzugXk-2`
- **ID patterns**: `other` (37)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Special City Council 3.31.25 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Special City Council 3.31.25 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Wh6b2jzugXk |
| `text` | 10/10 (100%) | You know, I just think I'm not saying that's we have to think outside the box be... |
| `title` | 10/10 (100%) | City of Fairfield \| Special City Council 3.31.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=d8NKTmdzk90`

- **Vector count**: 35
- **Sample IDs**: `fc-council-d8NKTmdzk90-34`, `fc-council-d8NKTmdzk90-17`, `fc-council-d8NKTmdzk90-9`
- **ID patterns**: `other` (35)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 7... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 7... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=d8NKTmdzk90 |
| `text` | 10/10 (100%) | However, you know, again, we always have some exceptions because we are small an... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 7.28.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EVvKRKPGB1k`

- **Vector count**: 34
- **Sample IDs**: `fc-council-EVvKRKPGB1k-11`, `fc-council-EVvKRKPGB1k-18`, `fc-council-EVvKRKPGB1k-1`
- **ID patterns**: `other` (34)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — 2026-02-23 — Fairfield City Council Meeting |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-02-23 — Fairfield City Council Meeting |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-02-23 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=EVvKRKPGB1k |
| `text` | 10/10 (100%) | Um, no other questions. Please call the role. Estie, >> Two Hill, >> yes. Althou... |
| `title` | 10/10 (100%) | Fairfield City Council Meeting |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=HStLlFza4eg`

- **Vector count**: 31
- **Sample IDs**: `fc-council-HStLlFza4eg-12`, `fc-council-HStLlFza4eg-10`, `fc-council-HStLlFza4eg-15`
- **ID patterns**: `other` (31)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 5-13-13 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 5-13-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=HStLlFza4eg |
| `text` | 10/10 (100%) | 2 million roughly in abatements a year from just what we're doing already and mo... |
| `title` | 10/10 (100%) | Fairfield City Council 5-13-13 |
| `type` | 10/10 (100%) | council_meeting |

### `Fairfield Area Chamber of Commerce`

- **Vector count**: 30
- **Sample IDs**: `01_Community_5f9979de_2`, `01_Community_5f9979de_0`, `01_Community_5f9979de_3`
- **ID patterns**: `other` (30)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `captured_date` | 10/10 (100%) | 2026-02-23 |
| `category` | 10/10 (100%) | Community Organizations |
| `chunkIndex` | 10/10 (100%) | 2 |
| `chunk_index` | 10/10 (100%) | 2 |
| `member` | 10/10 (100%) |  |
| `member_website` | 1/10 (10%) | https://sites.google.com/site/wernerelmker/home |
| `org` | 10/10 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 10/10 (100%) | Fairfield Area Chamber of Commerce |
| `sourceUrl` | 10/10 (100%) | https://www.fairfieldiowa.com/community/ |
| `source_url` | 10/10 (100%) | https://www.fairfieldiowa.com/community/ |
| `subcategory` | 10/10 (100%) | Chamber Website/Community |
| `text` | 10/10 (100%) | small towns, libraries play an important role in communities. We are proud to ha... |
| `total_chunks` | 10/10 (100%) | 4 |
| `type` | 10/10 (100%) | web page |

### `https://www.youtube.com/watch?v=OLjRxJKfbJY`

- **Vector count**: 30
- **Sample IDs**: `fc-council-OLjRxJKfbJY-17`, `fc-council-OLjRxJKfbJY-5`, `fc-council-OLjRxJKfbJY-4`
- **ID patterns**: `other` (30)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — 2026-01-28 — Fairfield City Council Wrap-Up |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-01-28 — Fairfield City Council Wrap-Up |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-01-28 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=OLjRxJKfbJY |
| `text` | 10/10 (100%) | We we actually have you know we go around and collect mulch and then we we also ... |
| `title` | 10/10 (100%) | Fairfield City Council Wrap-Up |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=nVq1kUsCapY`

- **Vector count**: 30
- **Sample IDs**: `fc-council-nVq1kUsCapY-26`, `fc-council-nVq1kUsCapY-21`, `fc-council-nVq1kUsCapY-0`
- **ID patterns**: `other` (30)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| City Council 1.26.26 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| City Council 1.26.26 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=nVq1kUsCapY |
| `text` | 10/10 (100%) | So, so in any case, uh or in to to add to that and maybe to repeat myself, uh we... |
| `title` | 10/10 (100%) | City of Fairfield \| City Council 1.26.26 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=MHVz7kiKRts`

- **Vector count**: 29
- **Sample IDs**: `traction-thursdays-MHVz7kiKRts-2`, `traction-thursdays-MHVz7kiKRts-22`, `traction-thursdays-MHVz7kiKRts-20`
- **ID patterns**: `other` (29)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Be the Change You Wish to Be! ... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Be the Change You Wish to Be! ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=MHVz7kiKRts |
| `text` | 10/10 (100%) | Kingston, Ontario returns to the top seven list for 2025 for the second time, 11... |
| `title` | 10/10 (100%) | Traction Thursday \| Be the Change You Wish to Be! Panel Discussion |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=YdNiy_lpuAs`

- **Vector count**: 29
- **Sample IDs**: `traction-thursdays-YdNiy_lpuAs-12`, `traction-thursdays-YdNiy_lpuAs-13`, `traction-thursdays-YdNiy_lpuAs-3`
- **ID patterns**: `other` (29)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Fox and Mare Farmstead |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Fox and Mare Farmstead |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=YdNiy_lpuAs |
| `text` | 10/10 (100%) | >> It was a a [laughter] really diverse mix that each each little piece had had ... |
| `title` | 10/10 (100%) | Traction Thursday \| Fox and Mare Farmstead |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=TxDqoKYXGZs`

- **Vector count**: 28
- **Sample IDs**: `traction-thursdays-TxDqoKYXGZs-2`, `traction-thursdays-TxDqoKYXGZs-18`, `traction-thursdays-TxDqoKYXGZs-1`
- **ID patterns**: `other` (28)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Bodhi Group, LLC" Ti Liptak |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Bodhi Group, LLC" Ti Liptak |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=TxDqoKYXGZs |
| `text` | 10/10 (100%) | Done quite a few Fortune 500 clients and everything in between. And it's been a ... |
| `title` | 10/10 (100%) | Traction Thursday \| "Bodhi Group, LLC" Ti Liptak |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=pZVsV8FyBBc`

- **Vector count**: 28
- **Sample IDs**: `traction-thursdays-pZVsV8FyBBc-13`, `traction-thursdays-pZVsV8FyBBc-17`, `traction-thursdays-pZVsV8FyBBc-20`
- **ID patterns**: `other` (28)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Dennis Raimondi "The Coffee Le... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Dennis Raimondi "The Coffee Le... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=pZVsV8FyBBc |
| `text` | 10/10 (100%) | " So, in any event, um yeah, so I I think you can check on that and and go by yo... |
| `title` | 10/10 (100%) | Traction Thursday \| Dennis Raimondi "The Coffee League" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=EQB9pzPqiFc`

- **Vector count**: 27
- **Sample IDs**: `traction-thursdays-EQB9pzPqiFc-23`, `traction-thursdays-EQB9pzPqiFc-0`, `traction-thursdays-EQB9pzPqiFc-6`
- **ID patterns**: `other` (27)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Telling Your Story Through Fl... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Telling Your Story Through Fl... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=EQB9pzPqiFc |
| `text` | 10/10 (100%) | Like, I have these cute little hat boxes and I've been doing some of that on a l... |
| `title` | 10/10 (100%) | Traction Thursday \| "Telling Your Story Through Flowers" Cari Anderson |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=AkMtgE7NWMk`

- **Vector count**: 26
- **Sample IDs**: `fc-council-AkMtgE7NWMk-12`, `fc-council-AkMtgE7NWMk-10`, `fc-council-AkMtgE7NWMk-16`
- **ID patterns**: `other` (26)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 4-14-14 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 4-14-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=AkMtgE7NWMk |
| `text` | 10/10 (100%) | good thank you okay any other questions all those in favor signify by saying aye... |
| `title` | 10/10 (100%) | City Council 4-14-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=-x2Xx_Qszqo`

- **Vector count**: 26
- **Sample IDs**: `traction-thursdays--x2Xx_Qszqo-11`, `traction-thursdays--x2Xx_Qszqo-4`, `traction-thursdays--x2Xx_Qszqo-1`
- **ID patterns**: `other` (26)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Brent Stinski "Stories Project... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Brent Stinski "Stories Project... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=-x2Xx_Qszqo |
| `text` | 10/10 (100%) | So let's say mega donor says you have 24 hours to design a museum and you can st... |
| `title` | 10/10 (100%) | Traction Thursday \| Brent Stinski "Stories Project" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=FsBYlumha50`

- **Vector count**: 26
- **Sample IDs**: `traction-thursdays-FsBYlumha50-17`, `traction-thursdays-FsBYlumha50-15`, `traction-thursdays-FsBYlumha50-1`
- **ID patterns**: `other` (26)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Terry Baker "CVB" 4.24.25 |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Terry Baker "CVB" 4.24.25 |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=FsBYlumha50 |
| `text` | 10/10 (100%) | Who I'd love to look at their model. Okay. Well, we'll we'll get together. We'll... |
| `title` | 10/10 (100%) | Traction Thursday \| Terry Baker "CVB" 4.24.25 |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=b5N7EfXM7MY`

- **Vector count**: 26
- **Sample IDs**: `traction-thursdays-b5N7EfXM7MY-10`, `traction-thursdays-b5N7EfXM7MY-1`, `traction-thursdays-b5N7EfXM7MY-11`
- **ID patterns**: `other` (26)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Danny Standley "Sitley Consult... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Danny Standley "Sitley Consult... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=b5N7EfXM7MY |
| `text` | 10/10 (100%) | some giant order that comes in that's going to take up a lot of the team you kno... |
| `title` | 10/10 (100%) | Traction Thursday \| Danny Standley "Sitley Consulting and EOS" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=A04iaCZNz3Y`

- **Vector count**: 25
- **Sample IDs**: `traction-thursdays-A04iaCZNz3Y-23`, `traction-thursdays-A04iaCZNz3Y-14`, `traction-thursdays-A04iaCZNz3Y-7`
- **ID patterns**: `other` (25)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Hotseat Marketing Panel |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Hotseat Marketing Panel |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=A04iaCZNz3Y |
| `text` | 10/10 (100%) | >> So like that's so I still this is just I just want people to have a laugh and... |
| `title` | 10/10 (100%) | Traction Thursday \| Hotseat Marketing Panel |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=ar9jKsIVszQ`

- **Vector count**: 25
- **Sample IDs**: `traction-thursdays-ar9jKsIVszQ-14`, `traction-thursdays-ar9jKsIVszQ-17`, `traction-thursdays-ar9jKsIVszQ-6`
- **ID patterns**: `other` (25)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Frank Broz "Tokyo Pen Shop" |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Frank Broz "Tokyo Pen Shop" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=ar9jKsIVszQ |
| `text` | 10/10 (100%) | I think um a lot of our customers are are journalers or they really into their d... |
| `title` | 10/10 (100%) | Traction Thursday \| Frank Broz "Tokyo Pen Shop" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=WDAAMy-JoF8`

- **Vector count**: 24
- **Sample IDs**: `fc-council-WDAAMy-JoF8-17`, `fc-council-WDAAMy-JoF8-12`, `fc-council-WDAAMy-JoF8-22`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=WDAAMy-JoF8 |
| `text` | 10/10 (100%) | >> Second by Candy. Any discussion? Seeing none, call the role, please. >> Kess,... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 11.10.25 |
| `type` | 10/10 (100%) | council_meeting |

### `http://www.fairfieldculturaldistrict.org/news.htm`

- **Vector count**: 24
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-23`, `fca-aHR0cDovL3d3dy5mYWly-10`, `fca-aHR0cDovL3d3dy5mYWly-27`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | arts |
| `file` | 10/10 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/news.htm |
| `filename` | 10/10 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/news.htm |
| `org` | 10/10 (100%) | Fairfield Cultural Alliance |
| `source` | 10/10 (100%) | http://www.fairfieldculturaldistrict.org/news.htm |
| `text` | 10/10 (100%) | The highlight of the evening came when Ms. Rusch announced that there would be t... |
| `type` | 10/10 (100%) | community_org |

### `https://www.youtube.com/watch?v=EZ2n1BvcSTA`

- **Vector count**: 24
- **Sample IDs**: `traction-thursdays-EZ2n1BvcSTA-21`, `traction-thursdays-EZ2n1BvcSTA-12`, `traction-thursdays-EZ2n1BvcSTA-23`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jim Engle and Carol Lilly \| Ma... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jim Engle and Carol Lilly \| Ma... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=EZ2n1BvcSTA |
| `text` | 10/10 (100%) | Per year. That's an average budget. Now I I saw on um on Facebook the goal that ... |
| `title` | 10/10 (100%) | Traction Thursday \| Jim Engle and Carol Lilly \| Mainstreet Program 4.17.25 |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=KpolS1pDysg`

- **Vector count**: 24
- **Sample IDs**: `traction-thursdays-KpolS1pDysg-10`, `traction-thursdays-KpolS1pDysg-11`, `traction-thursdays-KpolS1pDysg-8`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Robert Bell "Intelligent Commu... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Robert Bell "Intelligent Commu... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=KpolS1pDysg |
| `text` | 10/10 (100%) | Uh we have a a a what we call the the assessment questionnaire which is very muc... |
| `title` | 10/10 (100%) | Traction Thursday \| Robert Bell "Intelligent Community Forum" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=OL6ZKHZ3yWE`

- **Vector count**: 24
- **Sample IDs**: `traction-thursdays-OL6ZKHZ3yWE-11`, `traction-thursdays-OL6ZKHZ3yWE-20`, `traction-thursdays-OL6ZKHZ3yWE-13`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Avi Maistri "Development Consu... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Avi Maistri "Development Consu... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=OL6ZKHZ3yWE |
| `text` | 10/10 (100%) | So Peter Si talks about you could have a team of however many of us there are in... |
| `title` | 10/10 (100%) | Traction Thursday \| Avi Maistri "Development Consultant" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=IfzBBMU4CU8`

- **Vector count**: 23
- **Sample IDs**: `fc-council-IfzBBMU4CU8-10`, `fc-council-IfzBBMU4CU8-18`, `fc-council-IfzBBMU4CU8-7`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 6-12-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 6-12-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=IfzBBMU4CU8 |
| `text` | 10/10 (100%) | and their Federal portion is a total of 52 000. so we were looking at a total a ... |
| `title` | 10/10 (100%) | City Council 6-12-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=z8e9z23fc00`

- **Vector count**: 23
- **Sample IDs**: `fc-council-z8e9z23fc00-17`, `fc-council-z8e9z23fc00-12`, `fc-council-z8e9z23fc00-2`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 8-10-20 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-10-20 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=z8e9z23fc00 |
| `text` | 10/10 (100%) | what is it 20 that they pay in the first 30 days sir then it goes up to 40 i thi... |
| `title` | 10/10 (100%) | City Council 8-10-20 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=7EQQ8967lSw`

- **Vector count**: 23
- **Sample IDs**: `traction-thursdays-7EQQ8967lSw-10`, `traction-thursdays-7EQQ8967lSw-18`, `traction-thursdays-7EQQ8967lSw-0`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Hotseat Marketing Panel |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Hotseat Marketing Panel |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=7EQQ8967lSw |
| `text` | 10/10 (100%) | >> Yeah. I and I think you can also go to associations, you know, if you don't w... |
| `title` | 10/10 (100%) | Traction Thursday \| Hotseat Marketing Panel |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=eWhyJHkvIgk`

- **Vector count**: 23
- **Sample IDs**: `traction-thursdays-eWhyJHkvIgk-14`, `traction-thursdays-eWhyJHkvIgk-13`, `traction-thursdays-eWhyJHkvIgk-0`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Paul Carlson 3.20. 25 |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Paul Carlson 3.20. 25 |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=eWhyJHkvIgk |
| `text` | 10/10 (100%) | Have they already proven that their product is worth something? How important ar... |
| `title` | 10/10 (100%) | Traction Thursday \| Paul Carlson 3.20. 25 |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=eShgLBEigmY`

- **Vector count**: 23
- **Sample IDs**: `traction-thursdays-eShgLBEigmY-20`, `traction-thursdays-eShgLBEigmY-9`, `traction-thursdays-eShgLBEigmY-18`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Troy Van Beek "Ideal Energy" |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Troy Van Beek "Ideal Energy" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=eShgLBEigmY |
| `text` | 10/10 (100%) | So, Alliance's going to fight that tooth and nail. They would rather control the... |
| `title` | 10/10 (100%) | Traction Thursday \| Troy Van Beek "Ideal Energy" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=wrhu-Dl3-GQ`

- **Vector count**: 23
- **Sample IDs**: `traction-thursdays-wrhu-Dl3-GQ-6`, `traction-thursdays-wrhu-Dl3-GQ-3`, `traction-thursdays-wrhu-Dl3-GQ-16`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Iowa Dance Collective" Tyler ... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Iowa Dance Collective" Tyler ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=wrhu-Dl3-GQ |
| `text` | 10/10 (100%) | It's just it's a free funnel of new new enrollment coming in. So every year we h... |
| `title` | 10/10 (100%) | Traction Thursday \| "Iowa Dance Collective" Tyler Malone |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=3SRubyrkcts`

- **Vector count**: 22
- **Sample IDs**: `fc-council-3SRubyrkcts-18`, `fc-council-3SRubyrkcts-7`, `fc-council-3SRubyrkcts-6`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — 2026-03-11 — Fairfield City Council Wrap-Up |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-03-11 — Fairfield City Council Wrap-Up |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-03-11 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=3SRubyrkcts |
| `text` | 10/10 (100%) | I mean Connie our mayor was I mean she is aware of the situation swore in as as ... |
| `title` | 10/10 (100%) | Fairfield City Council Wrap-Up |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Xveq_41Jpok`

- **Vector count**: 22
- **Sample IDs**: `fc-council-Xveq_41Jpok-15`, `fc-council-Xveq_41Jpok-20`, `fc-council-Xveq_41Jpok-6`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 12-12-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-12-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Xveq_41Jpok |
| `text` | 10/10 (100%) | we gave you yours in March or April because we know you've been working hard to ... |
| `title` | 10/10 (100%) | City Council 12-12-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=1_LplE2bPz8`

- **Vector count**: 22
- **Sample IDs**: `traction-thursdays-1_LplE2bPz8-13`, `traction-thursdays-1_LplE2bPz8-6`, `traction-thursdays-1_LplE2bPz8-15`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Joe Sanchis |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Joe Sanchis |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=1_LplE2bPz8 |
| `text` | 10/10 (100%) | So, people inhale it and another one for um like calm and stress relaxation and ... |
| `title` | 10/10 (100%) | Traction Thursday \| Joe Sanchis |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=4w7eVWCic7o`

- **Vector count**: 22
- **Sample IDs**: `traction-thursdays-4w7eVWCic7o-1`, `traction-thursdays-4w7eVWCic7o-10`, `traction-thursdays-4w7eVWCic7o-11`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Cynthia Yockey "Marketing" |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Cynthia Yockey "Marketing" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=4w7eVWCic7o |
| `text` | 10/10 (100%) | U that makes it feel like a physical product and it it helps position it in peop... |
| `title` | 10/10 (100%) | Traction Thursday \| Cynthia Yockey "Marketing" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=cd0JrCgcP8g`

- **Vector count**: 22
- **Sample IDs**: `traction-thursdays-cd0JrCgcP8g-11`, `traction-thursdays-cd0JrCgcP8g-9`, `traction-thursdays-cd0JrCgcP8g-13`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Bob Ferguson |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Bob Ferguson |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=cd0JrCgcP8g |
| `text` | 10/10 (100%) | And if you look in the the Strong Towns PDX picture, if you see in the back like... |
| `title` | 10/10 (100%) | Traction Thursday \| Bob Ferguson |
| `type` | 10/10 (100%) | traction_thursday |

### `fairfield-acc`

- **Vector count**: 21
- **Sample IDs**: `FACC_03_events.pdf-chunk-0`, `FACC_02_about.pdf-chunk-4`, `FACC_02_about.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (21)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | community-organizations |
| `file` | 10/10 (100%) | FACC_03_events.pdf |
| `filename` | 10/10 (100%) | FACC_03_events.pdf |
| `source` | 10/10 (100%) | fairfield-acc |
| `subcategory` | 10/10 (100%) | facc |
| `text` | 10/10 (100%) |   February 2026 February 24 @ 7:00 pm - 9:15 pm Sentimental Value Fairfield Arts... |

### `https://www.youtube.com/watch?v=QTWrIG1bPDw`

- **Vector count**: 21
- **Sample IDs**: `fc-council-QTWrIG1bPDw-17`, `fc-council-QTWrIG1bPDw-1`, `fc-council-QTWrIG1bPDw-16`
- **ID patterns**: `other` (21)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 7-24-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 7-24-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=QTWrIG1bPDw |
| `text` | 10/10 (100%) | business 34 no 34 I was meeting the bypass bypass okay yes yes can do you mean c... |
| `title` | 10/10 (100%) | City Council 7-24-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=soTkAyXOF1c`

- **Vector count**: 21
- **Sample IDs**: `fc-council-soTkAyXOF1c-6`, `fc-council-soTkAyXOF1c-14`, `fc-council-soTkAyXOF1c-5`
- **ID patterns**: `other` (21)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 12-15-14 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-15-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=soTkAyXOF1c |
| `text` | 10/10 (100%) | okay and i have a question from melanie just on the site if you don't mind uh um... |
| `title` | 10/10 (100%) | City Council 12-15-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IdFpPJ-zOUg`

- **Vector count**: 21
- **Sample IDs**: `traction-thursdays-IdFpPJ-zOUg-10`, `traction-thursdays-IdFpPJ-zOUg-18`, `traction-thursdays-IdFpPJ-zOUg-5`
- **ID patterns**: `other` (21)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Lindsay Bauer "Fairfield Arts ... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Lindsay Bauer "Fairfield Arts ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=IdFpPJ-zOUg |
| `text` | 10/10 (100%) | So, let's think a little bit in terms of that. All right. You hate everything th... |
| `title` | 10/10 (100%) | Traction Thursday \| Lindsay Bauer "Fairfield Arts & Convention Center" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=HIu-D5Oj-O4`

- **Vector count**: 20
- **Sample IDs**: `fc-council-HIu-D5Oj-O4-15`, `fc-council-HIu-D5Oj-O4-13`, `fc-council-HIu-D5Oj-O4-2`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 9-12-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 9-12-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=HIu-D5Oj-O4 |
| `text` | 10/10 (100%) | 78 so moved second move by Gandy second by two Hill any other please call the ro... |
| `title` | 10/10 (100%) | City Council 9-12-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=DqiaRfk8JjQ`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-DqiaRfk8JjQ-13`, `traction-thursdays-DqiaRfk8JjQ-14`, `traction-thursdays-DqiaRfk8JjQ-15`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Bill Sharp |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Bill Sharp |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=DqiaRfk8JjQ |
| `text` | 10/10 (100%) | So I'm bringing a lot to this and when we talk about emergency one, you know, I ... |
| `title` | 10/10 (100%) | Traction Thursday \| Bill Sharp |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=SKBCbNwGYqc`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-SKBCbNwGYqc-17`, `traction-thursdays-SKBCbNwGYqc-18`, `traction-thursdays-SKBCbNwGYqc-11`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Community Accelerator" Bob Fe... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Community Accelerator" Bob Fe... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=SKBCbNwGYqc |
| `text` | 10/10 (100%) | We want to spend it in the right place. >> Great, Joe. Thank you. >> Very good. ... |
| `title` | 10/10 (100%) | Traction Thursday \| "Community Accelerator" Bob Ferguson |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=e6MQLERq4Gk`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-e6MQLERq4Gk-10`, `traction-thursdays-e6MQLERq4Gk-3`, `traction-thursdays-e6MQLERq4Gk-8`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Arborist Andrew Nash "Sweet Gr... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Arborist Andrew Nash "Sweet Gr... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=e6MQLERq4Gk |
| `text` | 10/10 (100%) | Um I have I generally have one to two um employees or employee contractors that ... |
| `title` | 10/10 (100%) | Traction Thursday \| Arborist Andrew Nash "Sweet Green Natives" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=jbpsDG4qrAQ`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-jbpsDG4qrAQ-7`, `traction-thursdays-jbpsDG4qrAQ-9`, `traction-thursdays-jbpsDG4qrAQ-4`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "SILT" Breana Horsey |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "SILT" Breana Horsey |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=jbpsDG4qrAQ |
| `text` | 10/10 (100%) | And then, um, and, you know, not included on here is ASAP Ale. It's the fourth w... |
| `title` | 10/10 (100%) | Traction Thursday \| "SILT" Breana Horsey |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=tjUo41Zessw`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-tjUo41Zessw-0`, `traction-thursdays-tjUo41Zessw-6`, `traction-thursdays-tjUo41Zessw-7`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Ginger Persolus "Pauper MTG" |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Ginger Persolus "Pauper MTG" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=tjUo41Zessw |
| `text` | 10/10 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Gi... |
| `title` | 10/10 (100%) | Traction Thursday \| Ginger Persolus "Pauper MTG" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=otQk6urFx28`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-otQk6urFx28-9`, `traction-thursdays-otQk6urFx28-2`, `traction-thursdays-otQk6urFx28-0`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Chamber and Beautification Upd... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Chamber and Beautification Upd... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=otQk6urFx28 |
| `text` | 10/10 (100%) | And those gnarly alleys, oh my gosh, yesterday we had a we had a um special day ... |
| `title` | 10/10 (100%) | Traction Thursday \| Chamber and Beautification Update |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=BoE0SmGWygU`

- **Vector count**: 19
- **Sample IDs**: `fc-council-BoE0SmGWygU-12`, `fc-council-BoE0SmGWygU-1`, `fc-council-BoE0SmGWygU-11`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 9-11-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 9-11-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=BoE0SmGWygU |
| `text` | 10/10 (100%) | S District Court named our local Magistrate Judge Weston McKee myself Dave Thoma... |
| `title` | 10/10 (100%) | City Council 9-11-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YPzM3Ywdgas`

- **Vector count**: 19
- **Sample IDs**: `fc-council-YPzM3Ywdgas-9`, `fc-council-YPzM3Ywdgas-4`, `fc-council-YPzM3Ywdgas-11`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 2-28-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-28-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=YPzM3Ywdgas |
| `text` | 10/10 (100%) | m so that's our next meeting so moved moved by gandhi second by florinoy any oth... |
| `title` | 10/10 (100%) | City Council 2-28-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=b2WSVfQST0I`

- **Vector count**: 19
- **Sample IDs**: `fc-council-b2WSVfQST0I-11`, `fc-council-b2WSVfQST0I-2`, `fc-council-b2WSVfQST0I-6`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — CITY COUNCIL 1-24-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — CITY COUNCIL 1-24-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=b2WSVfQST0I |
| `text` | 10/10 (100%) | 50 for years two and three yeah yeah and that would be that would come off the 1... |
| `title` | 10/10 (100%) | CITY COUNCIL 1-24-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qSQrjtU7wz4`

- **Vector count**: 19
- **Sample IDs**: `fc-council-qSQrjtU7wz4-16`, `fc-council-qSQrjtU7wz4-11`, `fc-council-qSQrjtU7wz4-15`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 6-24-13 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 6-24-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=qSQrjtU7wz4 |
| `text` | 10/10 (100%) | yeah okay it actually went up a little bit yeah oh that's the distinction okay y... |
| `title` | 10/10 (100%) | Fairfield City Council 6-24-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=-2Sx2jL4y5w`

- **Vector count**: 19
- **Sample IDs**: `traction-thursdays--2Sx2jL4y5w-13`, `traction-thursdays--2Sx2jL4y5w-4`, `traction-thursdays--2Sx2jL4y5w-11`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Lee Searls "Ecologist" |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Lee Searls "Ecologist" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=-2Sx2jL4y5w |
| `text` | 10/10 (100%) | So, he's catching all the organic runoff uh including bacteria uh from that beef... |
| `title` | 10/10 (100%) | Traction Thursday \| Lee Searls "Ecologist" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=DLThcexNMdg`

- **Vector count**: 19
- **Sample IDs**: `traction-thursdays-DLThcexNMdg-12`, `traction-thursdays-DLThcexNMdg-10`, `traction-thursdays-DLThcexNMdg-18`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Janet Finlayson, Event Coordin... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Janet Finlayson, Event Coordin... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=DLThcexNMdg |
| `text` | 10/10 (100%) | Uh we're testing that in Clinton with the area high schools and it is geared tow... |
| `title` | 10/10 (100%) | Traction Thursday \| Janet Finlayson, Event Coordinator at Newbo.Co |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=qd9bgXpwvno`

- **Vector count**: 19
- **Sample IDs**: `traction-thursdays-qd9bgXpwvno-16`, `traction-thursdays-qd9bgXpwvno-6`, `traction-thursdays-qd9bgXpwvno-18`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Fairfield Civic Research Tool... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Fairfield Civic Research Tool... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=qd9bgXpwvno |
| `text` | 10/10 (100%) | Basically, what can small communities do and I gave Ed the transcript and we're ... |
| `title` | 10/10 (100%) | Traction Thursday \| "Fairfield Civic Research Tool" Bob Ferguson |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=dsGg4DojXy4`

- **Vector count**: 18
- **Sample IDs**: `fc-council-dsGg4DojXy4-13`, `fc-council-dsGg4DojXy4-2`, `fc-council-dsGg4DojXy4-9`
- **ID patterns**: `other` (18)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council Work Session 2-12-24 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council Work Session 2-12-24 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=dsGg4DojXy4 |
| `text` | 10/10 (100%) | 36 million or about 2. 36 million of interest if you decided to pay for it over ... |
| `title` | 10/10 (100%) | City Council Work Session 2-12-24 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=393`

- **Vector count**: 18
- **Sample IDs**: `minutes-393.pdf-chunk-4`, `minutes-393.pdf-chunk-13`, `minutes-393.pdf-chunk-14`
- **ID patterns**: `filename.pdf-chunk-N` (18)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-393.pdf |
| `filename` | 10/10 (100%) | minutes-393.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=393 |
| `text` | 10/10 (100%) | ITION OF    AGRICULTURAL LAND.    Mayor Malloy announced this was the time and d... |

### `https://www.youtube.com/watch?v=-zQW4891ab4`

- **Vector count**: 18
- **Sample IDs**: `traction-thursdays--zQW4891ab4-4`, `traction-thursdays--zQW4891ab4-5`, `traction-thursdays--zQW4891ab4-13`
- **ID patterns**: `other` (18)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Greater Purpose Film Festival... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Greater Purpose Film Festival... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=-zQW4891ab4 |
| `text` | 10/10 (100%) | it's going to be bigger and um the growth uh hasn't happened quite the way I tho... |
| `title` | 10/10 (100%) | Traction Thursday \| "Greater Purpose Film Festival" Lee Ross |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=k_Dr8nym40k`

- **Vector count**: 18
- **Sample IDs**: `traction-thursdays-k_Dr8nym40k-13`, `traction-thursdays-k_Dr8nym40k-1`, `traction-thursdays-k_Dr8nym40k-7`
- **ID patterns**: `other` (18)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| The Commons |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| The Commons |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=k_Dr8nym40k |
| `text` | 10/10 (100%) | We just would like to facilitate and get people thinking along those lines. Othe... |
| `title` | 10/10 (100%) | Traction Thursday \| The Commons |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=1x3hKWWcXRw`

- **Vector count**: 17
- **Sample IDs**: `fc-council-1x3hKWWcXRw-7`, `fc-council-1x3hKWWcXRw-4`, `fc-council-1x3hKWWcXRw-15`
- **ID patterns**: `other` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 8-22-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-22-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=1x3hKWWcXRw |
| `text` | 10/10 (100%) | 78 i believe that sound right do we have the whole table on there for all so i'l... |
| `title` | 10/10 (100%) | City Council 8-22-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=4nX9vGC1di8`

- **Vector count**: 17
- **Sample IDs**: `fc-council-4nX9vGC1di8-4`, `fc-council-4nX9vGC1di8-9`, `fc-council-4nX9vGC1di8-11`
- **ID patterns**: `other` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 5-24-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-24-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=4nX9vGC1di8 |
| `text` | 10/10 (100%) | we'll just be bringing stuff back inside any questions council any additional qu... |
| `title` | 10/10 (100%) | City Council 5-24-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=SjDqEeglQ-k`

- **Vector count**: 17
- **Sample IDs**: `fc-council-SjDqEeglQ-k-12`, `fc-council-SjDqEeglQ-k-4`, `fc-council-SjDqEeglQ-k-14`
- **ID patterns**: `other` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 4-10-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 4-10-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=SjDqEeglQ-k |
| `text` | 10/10 (100%) | um and so by then this final step of uh awarding it then you'd authorize Rebecca... |
| `title` | 10/10 (100%) | City Council 4-10-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=466`

- **Vector count**: 17
- **Sample IDs**: `minutes-466.pdf-chunk-6`, `minutes-466.pdf-chunk-14`, `minutes-466.pdf-chunk-13`
- **ID patterns**: `filename.pdf-chunk-N` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-466.pdf |
| `filename` | 10/10 (100%) | minutes-466.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=466 |
| `text` | 10/10 (100%) |  hearing on the matter on the authorization to submit a grant application  to Io... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=648`

- **Vector count**: 17
- **Sample IDs**: `minutes-648.pdf-chunk-0`, `minutes-648.pdf-chunk-1`, `minutes-648.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-648.pdf |
| `filename` | 10/10 (100%) | minutes-648.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=648 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING DECEMBER 27, 2021    Th... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=752`

- **Vector count**: 17
- **Sample IDs**: `minutes-752.pdf-chunk-13`, `minutes-752.pdf-chunk-3`, `minutes-752.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-752.pdf |
| `filename` | 10/10 (100%) | minutes-752.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=752 |
| `text` | 10/10 (100%) |  relayed to Council  the grand prize winner of “If I Were A Mayor” contest is Ka... |

### `https://www.youtube.com/watch?v=N0Ybr09tfRA`

- **Vector count**: 17
- **Sample IDs**: `traction-thursdays-N0Ybr09tfRA-10`, `traction-thursdays-N0Ybr09tfRA-12`, `traction-thursdays-N0Ybr09tfRA-3`
- **ID patterns**: `other` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jasia Standley "Graceful Bear ... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jasia Standley "Graceful Bear ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=N0Ybr09tfRA |
| `text` | 10/10 (100%) | So all calls go to them and they're the ones that say, "Well, there's only a $50... |
| `title` | 10/10 (100%) | Traction Thursday \| Jasia Standley "Graceful Bear Wellness" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=FjvRst7mcM4`

- **Vector count**: 16
- **Sample IDs**: `fc-council-FjvRst7mcM4-5`, `fc-council-FjvRst7mcM4-14`, `fc-council-FjvRst7mcM4-13`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 5-22-17 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-22-17 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=FjvRst7mcM4 |
| `text` | 10/10 (100%) | 75 cents a month for the sewer line coverage six dollars and seventy five cents ... |
| `title` | 10/10 (100%) | City Council 5-22-17 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Y2d2fz572K8`

- **Vector count**: 16
- **Sample IDs**: `fc-council-Y2d2fz572K8-11`, `fc-council-Y2d2fz572K8-5`, `fc-council-Y2d2fz572K8-13`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 7-11-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 7-11-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Y2d2fz572K8 |
| `text` | 10/10 (100%) | 3 of the code requires the city council keep minutes of all its meetings showing... |
| `title` | 10/10 (100%) | City Council 7-11-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ZUU6JDNIc_E`

- **Vector count**: 16
- **Sample IDs**: `fc-council-ZUU6JDNIc_E-4`, `fc-council-ZUU6JDNIc_E-13`, `fc-council-ZUU6JDNIc_E-6`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 1-13-20 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 1-13-20 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=ZUU6JDNIc_E |
| `text` | 10/10 (100%) | we have the completion date set at June 15th and there we'll be a two-year warra... |
| `title` | 10/10 (100%) | City Council 1-13-20 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=672`

- **Vector count**: 16
- **Sample IDs**: `minutes-672.pdf-chunk-2`, `minutes-672.pdf-chunk-10`, `minutes-672.pdf-chunk-14`
- **ID patterns**: `filename.pdf-chunk-N` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-672.pdf |
| `filename` | 10/10 (100%) | minutes-672.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=672 |
| `text` | 10/10 (100%) | CLAIMS IN THE   AMOUNT OF $571,251.11 CONTINGENT  UPON ACCEPTING PROJECTS AS FIN... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=754`

- **Vector count**: 16
- **Sample IDs**: `minutes-754.pdf-chunk-1`, `minutes-754.pdf-chunk-0`, `minutes-754.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-754.pdf |
| `filename` | 10/10 (100%) | minutes-754.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=754 |
| `text` | 10/10 (100%) | F THE MARCH 24,    2025 CITY COUNCIL MEETING.      TO APPROVE THE MARCH 28, 2025... |

### `cityoffanrfieldiowa.com`

- **Vector count**: 16
- **Sample IDs**: `title9_ch931_mobile_food.pdf-chunk-3`, `title9_ch931_mobile_food.pdf-chunk-0`, `title9_ch931_mobile_food.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | municipal_code |
| `file` | 10/10 (100%) | title9_ch931_mobile_food.pdf |
| `filename` | 10/10 (100%) | title9_ch931_mobile_food.pdf |
| `source` | 10/10 (100%) | cityoffanrfieldiowa.com |
| `subcategory` | 10/10 (100%) | public_peace |
| `text` | 10/10 (100%) | hin the City without having first obtained a parking permit to operate as such. ... |
| `title` | 10/10 (100%) | Title 9 Ch 9.31 - Mobile Food Units |

### `https://www.youtube.com/watch?v=kNDv3p0kgdY`

- **Vector count**: 16
- **Sample IDs**: `traction-thursdays-kNDv3p0kgdY-5`, `traction-thursdays-kNDv3p0kgdY-10`, `traction-thursdays-kNDv3p0kgdY-4`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Collective \| Bakehouse \| Bread... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Collective \| Bakehouse \| Bread... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=kNDv3p0kgdY |
| `text` | 10/10 (100%) | Um it is incredibly expensive and it it basically is it's hard to work that pric... |
| `title` | 10/10 (100%) | Traction Thursday \| Collective \| Bakehouse \| Breadtopia |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=fUPiByOER2k`

- **Vector count**: 16
- **Sample IDs**: `traction-thursdays-fUPiByOER2k-12`, `traction-thursdays-fUPiByOER2k-4`, `traction-thursdays-fUPiByOER2k-14`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Anna Maistri 11.6.25 |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Anna Maistri 11.6.25 |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=fUPiByOER2k |
| `text` | 10/10 (100%) | And I I really another like when I thinking about this school uh one another med... |
| `title` | 10/10 (100%) | Traction Thursday \| Anna Maistri 11.6.25 |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=5ORS5XkQqC4`

- **Vector count**: 15
- **Sample IDs**: `fc-council-5ORS5XkQqC4-7`, `fc-council-5ORS5XkQqC4-6`, `fc-council-5ORS5XkQqC4-0`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 2-22-16 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-22-16 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=5ORS5XkQqC4 |
| `text` | 10/10 (100%) | 25 million 0. 1. 9 million of that is new and the other is to try and obtain a l... |
| `title` | 10/10 (100%) | City Council 2-22-16 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Dx8IdNBVYGQ`

- **Vector count**: 15
- **Sample IDs**: `fc-council-Dx8IdNBVYGQ-1`, `fc-council-Dx8IdNBVYGQ-8`, `fc-council-Dx8IdNBVYGQ-10`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 8-25-14 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-25-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Dx8IdNBVYGQ |
| `text` | 10/10 (100%) | my prime candidates that i would have normally recruited are already at that sal... |
| `title` | 10/10 (100%) | City Council 8-25-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=KYhEgCEkBTo`

- **Vector count**: 15
- **Sample IDs**: `fc-council-KYhEgCEkBTo-1`, `fc-council-KYhEgCEkBTo-0`, `fc-council-KYhEgCEkBTo-11`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — 2026-03-25 — Fairfield City Council Wrap-Up |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-03-25 — Fairfield City Council Wrap-Up |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-03-25 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=KYhEgCEkBTo |
| `text` | 10/10 (100%) | And um yes, we still have a committee meeting here and there when we want to get... |
| `title` | 10/10 (100%) | Fairfield City Council Wrap-Up |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=MIkIBnykGeI`

- **Vector count**: 15
- **Sample IDs**: `fc-council-MIkIBnykGeI-3`, `fc-council-MIkIBnykGeI-12`, `fc-council-MIkIBnykGeI-5`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 6-10-19 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 6-10-19 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=MIkIBnykGeI |
| `text` | 10/10 (100%) | 5 million dollar investment in the facilities so that's not including the equipm... |
| `title` | 10/10 (100%) | City Council 6-10-19 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=s0ls9Vj9wNU`

- **Vector count**: 15
- **Sample IDs**: `fc-council-s0ls9Vj9wNU-11`, `fc-council-s0ls9Vj9wNU-13`, `fc-council-s0ls9Vj9wNU-0`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 1-11-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 1-11-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=s0ls9Vj9wNU |
| `text` | 10/10 (100%) | t site where the alleys at a higher grade than the street and the possibility wo... |
| `title` | 10/10 (100%) | City Council 1-11-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=425`

- **Vector count**: 15
- **Sample IDs**: `minutes-425.pdf-chunk-0`, `minutes-425.pdf-chunk-14`, `minutes-425.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-425.pdf |
| `filename` | 10/10 (100%) | minutes-425.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=425 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  October 8, 2018      The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=676`

- **Vector count**: 15
- **Sample IDs**: `minutes-676.pdf-chunk-7`, `minutes-676.pdf-chunk-2`, `minutes-676.pdf-chunk-12`
- **ID patterns**: `filename.pdf-chunk-N` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-676.pdf |
| `filename` | 10/10 (100%) | minutes-676.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=676 |
| `text` | 10/10 (100%) | E PROPERTY AT 700 W JEFFERSON    AVENUE TO COME INTO COMPLIANCE    WITH CITY COD... |

### `https://www.youtube.com/watch?v=4epFYQ9220g`

- **Vector count**: 15
- **Sample IDs**: `traction-thursdays-4epFYQ9220g-2`, `traction-thursdays-4epFYQ9220g-12`, `traction-thursdays-4epFYQ9220g-9`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Chaz Alley |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Chaz Alley |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=4epFYQ9220g |
| `text` | 10/10 (100%) | uh, so those are pretty cool. I kind of like those, but that's just >> Well, I a... |
| `title` | 10/10 (100%) | Traction Thursday \| Chaz Alley |
| `type` | 10/10 (100%) | traction_thursday |

### `City Attorney`

- **Vector count**: 14
- **Sample IDs**: `City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf-chunk-13`, `City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf-chunk-7`, `City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | walton_lake |
| `file` | 10/10 (100%) | City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf |
| `filename` | 10/10 (100%) | City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf |
| `source` | 10/10 (100%) | City Attorney |
| `text` | 10/10 (100%) | onfidence in the decision-makers that deserve the credit for 100 years of  Walto... |
| `type` | 10/10 (100%) | city_attorney |

### `https://www.youtube.com/watch?v=FSQvXjrWPPA`

- **Vector count**: 14
- **Sample IDs**: `fc-council-FSQvXjrWPPA-12`, `fc-council-FSQvXjrWPPA-3`, `fc-council-FSQvXjrWPPA-13`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 2-14-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-14-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=FSQvXjrWPPA |
| `text` | 10/10 (100%) | m move by florinoy second by rasmussen any other discussion will we be ready to ... |
| `title` | 10/10 (100%) | City Council 2-14-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IMu6yzip8IA`

- **Vector count**: 14
- **Sample IDs**: `fc-council-IMu6yzip8IA-8`, `fc-council-IMu6yzip8IA-3`, `fc-council-IMu6yzip8IA-6`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 2-27-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-27-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=IMu6yzip8IA |
| `text` | 10/10 (100%) | 28 uh there were as I said there were three bids in total the other uh two bids ... |
| `title` | 10/10 (100%) | City Council 2-27-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=PCaQslbqYg0`

- **Vector count**: 14
- **Sample IDs**: `fc-council-PCaQslbqYg0-9`, `fc-council-PCaQslbqYg0-7`, `fc-council-PCaQslbqYg0-12`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 5-8-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-8-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=PCaQslbqYg0 |
| `text` | 10/10 (100%) | is what you'll request or what they will award that would be the budget of the g... |
| `title` | 10/10 (100%) | City Council 5-8-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Ts0QYH9ljbc`

- **Vector count**: 14
- **Sample IDs**: `fc-council-Ts0QYH9ljbc-5`, `fc-council-Ts0QYH9ljbc-7`, `fc-council-Ts0QYH9ljbc-10`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 2-13-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-13-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Ts0QYH9ljbc |
| `text` | 10/10 (100%) | 5 um million dollars can be used to pay for the right-of-way search technically ... |
| `title` | 10/10 (100%) | City Council 2-13-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YTF6Y8_WhxQ`

- **Vector count**: 14
- **Sample IDs**: `fc-council-YTF6Y8_WhxQ-11`, `fc-council-YTF6Y8_WhxQ-13`, `fc-council-YTF6Y8_WhxQ-9`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 12-5-16 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-5-16 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=YTF6Y8_WhxQ |
| `text` | 10/10 (100%) | m. on the 15th and Council will consider them at noon on the 15th that they're a... |
| `title` | 10/10 (100%) | City Council 12-5-16 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=euJGLqMWUnM`

- **Vector count**: 14
- **Sample IDs**: `fc-council-euJGLqMWUnM-11`, `fc-council-euJGLqMWUnM-1`, `fc-council-euJGLqMWUnM-4`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 11-28-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 11-28-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=euJGLqMWUnM |
| `text` | 10/10 (100%) | and the same with home care if you are having someone other than a family member... |
| `title` | 10/10 (100%) | City Council 11-28-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=haoQbcBCSok`

- **Vector count**: 14
- **Sample IDs**: `fc-council-haoQbcBCSok-13`, `fc-council-haoQbcBCSok-2`, `fc-council-haoQbcBCSok-12`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 8-26-13 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 8-26-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=haoQbcBCSok |
| `text` | 10/10 (100%) | 85 for minimum service fee to 17. 82 cents per month and it would also increase ... |
| `title` | 10/10 (100%) | Fairfield City Council 8-26-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=vOFylHW6b2g`

- **Vector count**: 14
- **Sample IDs**: `fc-council-vOFylHW6b2g-0`, `fc-council-vOFylHW6b2g-12`, `fc-council-vOFylHW6b2g-11`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 8-12-13 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 8-12-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=vOFylHW6b2g |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 8-12... |
| `title` | 10/10 (100%) | Fairfield City Council 8-12-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=467`

- **Vector count**: 14
- **Sample IDs**: `minutes-467.pdf-chunk-13`, `minutes-467.pdf-chunk-9`, `minutes-467.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-467.pdf |
| `filename` | 10/10 (100%) | minutes-467.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=467 |
| `text` | 10/10 (100%) | TRANSPORTATION ELECTRICAL VEHICLE    CHARGING STATION GRANT APPLICATION TO   ECO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=671`

- **Vector count**: 14
- **Sample IDs**: `minutes-671.pdf-chunk-7`, `minutes-671.pdf-chunk-1`, `minutes-671.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-671.pdf |
| `filename` | 10/10 (100%) | minutes-671.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=671 |
| `text` | 10/10 (100%) | d  Bob  Ferguson,  whom  both  spoke  in  support  of  the  project.    There  w... |

### `https://www.youtube.com/watch?v=FuZa3t-tCNA`

- **Vector count**: 14
- **Sample IDs**: `traction-thursdays-FuZa3t-tCNA-13`, `traction-thursdays-FuZa3t-tCNA-7`, `traction-thursdays-FuZa3t-tCNA-1`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jenny Sammons "Visual Artist D... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jenny Sammons "Visual Artist D... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=FuZa3t-tCNA |
| `text` | 10/10 (100%) | Well, to to edit what you said, I don't spend 90% of my time on the business sid... |
| `title` | 10/10 (100%) | Traction Thursday \| Jenny Sammons "Visual Artist Designer" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=H8ITA1QdVHI`

- **Vector count**: 13
- **Sample IDs**: `fc-council-H8ITA1QdVHI-2`, `fc-council-H8ITA1QdVHI-12`, `fc-council-H8ITA1QdVHI-4`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 8-11-14 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-11-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=H8ITA1QdVHI |
| `text` | 10/10 (100%) | everything's available to you if you want it those cities don't want all that I ... |
| `title` | 10/10 (100%) | City Council 8-11-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=LHEXdzFoZbY`

- **Vector count**: 13
- **Sample IDs**: `fc-council-LHEXdzFoZbY-9`, `fc-council-LHEXdzFoZbY-10`, `fc-council-LHEXdzFoZbY-6`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 6-10-13 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 6-10-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=LHEXdzFoZbY |
| `text` | 10/10 (100%) | that gives us that much more room so we can get rid of this bottleneck that we h... |
| `title` | 10/10 (100%) | Fairfield City Council 6-10-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=O4fHw0IF6Fc`

- **Vector count**: 13
- **Sample IDs**: `fc-council-O4fHw0IF6Fc-3`, `fc-council-O4fHw0IF6Fc-5`, `fc-council-O4fHw0IF6Fc-7`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 8-23-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-23-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=O4fHw0IF6Fc |
| `text` | 10/10 (100%) | 8 it's a little nicer yeah so what they're saying is about one in every 12 peopl... |
| `title` | 10/10 (100%) | City Council 8-23-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QFKKs5ICMe4`

- **Vector count**: 13
- **Sample IDs**: `fc-council-QFKKs5ICMe4-3`, `fc-council-QFKKs5ICMe4-7`, `fc-council-QFKKs5ICMe4-5`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 10-14-13 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 10-14-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=QFKKs5ICMe4 |
| `text` | 10/10 (100%) | um I the task force and and me personally I'm thrilled with what the city did in... |
| `title` | 10/10 (100%) | Fairfield City Council 10-14-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=SoZX2HWCykE`

- **Vector count**: 13
- **Sample IDs**: `fc-council-SoZX2HWCykE-1`, `fc-council-SoZX2HWCykE-8`, `fc-council-SoZX2HWCykE-12`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 3-13-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 3-13-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=SoZX2HWCykE |
| `text` | 10/10 (100%) | I move that we approve the consent agenda unless you have something done that we... |
| `title` | 10/10 (100%) | City Council 3-13-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Y2OA0atX8sk`

- **Vector count**: 13
- **Sample IDs**: `fc-council-Y2OA0atX8sk-4`, `fc-council-Y2OA0atX8sk-1`, `fc-council-Y2OA0atX8sk-6`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 1-23-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 1-23-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Y2OA0atX8sk |
| `text` | 10/10 (100%) | 6801 because I feel like they're very large nuisances and that gave Don Davis th... |
| `title` | 10/10 (100%) | City Council 1-23-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=f8VJwOumtbc`

- **Vector count**: 13
- **Sample IDs**: `fc-council-f8VJwOumtbc-3`, `fc-council-f8VJwOumtbc-5`, `fc-council-f8VJwOumtbc-12`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 3-27-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 3-27-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=f8VJwOumtbc |
| `text` | 10/10 (100%) | today I'm happy to announce that we have already increased our active membership... |
| `title` | 10/10 (100%) | City Council 3-27-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=heip3ByMbJU`

- **Vector count**: 13
- **Sample IDs**: `fc-council-heip3ByMbJU-0`, `fc-council-heip3ByMbJU-1`, `fc-council-heip3ByMbJU-12`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 2-13-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-13-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=heip3ByMbJU |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-13-23  yes A... |
| `title` | 10/10 (100%) | City Council 2-13-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=jT_omqwqbhU`

- **Vector count**: 13
- **Sample IDs**: `fc-council-jT_omqwqbhU-3`, `fc-council-jT_omqwqbhU-0`, `fc-council-jT_omqwqbhU-10`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=jT_omqwqbhU |
| `text` | 10/10 (100%) | oh 2025 I'm sorry oh yeah right I just completely read that and didn't uh blink ... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 2.24.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=388`

- **Vector count**: 13
- **Sample IDs**: `minutes-388.pdf-chunk-0`, `minutes-388.pdf-chunk-10`, `minutes-388.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-388.pdf |
| `filename` | 10/10 (100%) | minutes-388.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=388 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    November 27, 2017      The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=395`

- **Vector count**: 13
- **Sample IDs**: `minutes-395.pdf-chunk-4`, `minutes-395.pdf-chunk-0`, `minutes-395.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-395.pdf |
| `filename` | 10/10 (100%) | minutes-395.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=395 |
| `text` | 10/10 (100%) | econded by Hamilton   AYES:  Thompson, Hamilton, Gandy, Halley and Rasmussen    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=403`

- **Vector count**: 13
- **Sample IDs**: `minutes-403.pdf-chunk-8`, `minutes-403.pdf-chunk-10`, `minutes-403.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-403.pdf |
| `filename` | 10/10 (100%) | minutes-403.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=403 |
| `text` | 10/10 (100%) | ursing Home Week earlier in the day.    Moved by Halley, seconded by Flournoy   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=427`

- **Vector count**: 13
- **Sample IDs**: `minutes-427.pdf-chunk-2`, `minutes-427.pdf-chunk-12`, `minutes-427.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-427.pdf |
| `filename` | 10/10 (100%) | minutes-427.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=427 |
| `text` | 10/10 (100%) | o written or verbal objections, so the public hearing closed.    Moved by Rasmus... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=470`

- **Vector count**: 13
- **Sample IDs**: `minutes-470.pdf-chunk-9`, `minutes-470.pdf-chunk-10`, `minutes-470.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-470.pdf |
| `filename` | 10/10 (100%) | minutes-470.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=470 |
| `text` | 10/10 (100%) | ,  which included solar array placement, recycling and solid waste contract / RF... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=633`

- **Vector count**: 13
- **Sample IDs**: `minutes-633.pdf-chunk-6`, `minutes-633.pdf-chunk-9`, `minutes-633.pdf-chunk-12`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-633.pdf |
| `filename` | 10/10 (100%) | minutes-633.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=633 |
| `text` | 10/10 (100%) |     TABLES PROJECT.     Moved by Rasmussen, seconded by Gandy   AYES:  Rasmussen... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=665`

- **Vector count**: 13
- **Sample IDs**: `minutes-665.pdf-chunk-3`, `minutes-665.pdf-chunk-8`, `minutes-665.pdf-chunk-12`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-665.pdf |
| `filename` | 10/10 (100%) | minutes-665.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=665 |
| `text` | 10/10 (100%) | ATION FOR 808  N 12 TH  STREET (HEILMANN).    Mayor Boyer opened a public hearin... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=660`

- **Vector count**: 13
- **Sample IDs**: `minutes-660.pdf-chunk-3`, `minutes-660.pdf-chunk-7`, `minutes-660.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-660.pdf |
| `filename` | 10/10 (100%) | minutes-660.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=660 |
| `text` | 10/10 (100%) | by Anderson, seconded by Flournoy   AYES:  Anderson, Flournoy, Twohill, Ham, Est... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=670`

- **Vector count**: 13
- **Sample IDs**: `minutes-670.pdf-chunk-11`, `minutes-670.pdf-chunk-5`, `minutes-670.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-670.pdf |
| `filename` | 10/10 (100%) | minutes-670.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=670 |
| `text` | 10/10 (100%) |  Means Committee.    Moved by Estey, seconded by Twohill   AYES:  Estey, Twohill... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=696`

- **Vector count**: 13
- **Sample IDs**: `minutes-696.pdf-chunk-4`, `minutes-696.pdf-chunk-8`, `minutes-696.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-696.pdf |
| `filename` | 10/10 (100%) | minutes-696.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=696 |
| `text` | 10/10 (100%) |   Moved by Anderson, seconded Flournoy   AYES:  Anderson, Flournoy, Gandy, Twohi... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=742`

- **Vector count**: 13
- **Sample IDs**: `minutes-742.pdf-chunk-4`, `minutes-742.pdf-chunk-11`, `minutes-742.pdf-chunk-12`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-742.pdf |
| `filename` | 10/10 (100%) | minutes-742.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=742 |
| `text` | 10/10 (100%) | TH  STREET TO   GROW FAIRFIELD ECONOMIC DEVELOPMENT   ASSOCIATION IN THE AMOUNT ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=772`

- **Vector count**: 13
- **Sample IDs**: `minutes-772.pdf-chunk-3`, `minutes-772.pdf-chunk-8`, `minutes-772.pdf-chunk-11`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-772.pdf |
| `filename` | 10/10 (100%) | minutes-772.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=772 |
| `text` | 10/10 (100%) | nt to Doug McCollough, an auditor  for Intelligent Communities Forum, for his ai... |

### `https://www.youtube.com/watch?v=F2wtfLvntMM`

- **Vector count**: 13
- **Sample IDs**: `traction-thursdays-F2wtfLvntMM-7`, `traction-thursdays-F2wtfLvntMM-1`, `traction-thursdays-F2wtfLvntMM-9`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jacob and Kayla Sladewski "Kin... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jacob and Kayla Sladewski "Kin... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=F2wtfLvntMM |
| `text` | 10/10 (100%) | >> Well, the next three months, as we don't have our homebased kitchen license y... |
| `title` | 10/10 (100%) | Traction Thursday \| Jacob and Kayla Sladewski "Kind Earth Co " |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=MwfBb1rZFMA`

- **Vector count**: 13
- **Sample IDs**: `traction-thursdays-MwfBb1rZFMA-5`, `traction-thursdays-MwfBb1rZFMA-7`, `traction-thursdays-MwfBb1rZFMA-8`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Intelligent Community Forum To... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Intelligent Community Forum To... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=MwfBb1rZFMA |
| `text` | 10/10 (100%) | I mean I think Ann Walton and having faith there would be really awesome to just... |
| `title` | 10/10 (100%) | Traction Thursday \| Intelligent Community Forum Top 7 Site Visits |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=O7RCI5V-41E`

- **Vector count**: 13
- **Sample IDs**: `traction-thursdays-O7RCI5V-41E-6`, `traction-thursdays-O7RCI5V-41E-12`, `traction-thursdays-O7RCI5V-41E-4`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Dynamic Facilitation and the ... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Dynamic Facilitation and the ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=O7RCI5V-41E |
| `text` | 10/10 (100%) | Trying the same thing >> with no results over and over again. I don't I forgot t... |
| `title` | 10/10 (100%) | Traction Thursday \| "Dynamic Facilitation and the Wisdom Council Processes" Greg... |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=7p78YMxf7Ss`

- **Vector count**: 12
- **Sample IDs**: `fc-council-7p78YMxf7Ss-5`, `fc-council-7p78YMxf7Ss-7`, `fc-council-7p78YMxf7Ss-3`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 1-10-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 1-10-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=7p78YMxf7Ss |
| `text` | 10/10 (100%) | the county's responsible for the jail and the sheriff's department right and the... |
| `title` | 10/10 (100%) | City Council 1-10-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=749kqSt3bbA`

- **Vector count**: 12
- **Sample IDs**: `fc-council-749kqSt3bbA-5`, `fc-council-749kqSt3bbA-11`, `fc-council-749kqSt3bbA-0`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 9-27-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 9-27-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=749kqSt3bbA |
| `text` | 10/10 (100%) | m but other than that there's no specific days to this permit so if somebody bou... |
| `title` | 10/10 (100%) | City Council 9-27-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=AhsAoUKHwxk`

- **Vector count**: 12
- **Sample IDs**: `fc-council-AhsAoUKHwxk-3`, `fc-council-AhsAoUKHwxk-7`, `fc-council-AhsAoUKHwxk-6`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 12-14-20 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-14-20 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=AhsAoUKHwxk |
| `text` | 10/10 (100%) | t fund okay and how long do you think the project would take to be completed nat... |
| `title` | 10/10 (100%) | City Council 12-14-20 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=PxZgShdjQvQ`

- **Vector count**: 12
- **Sample IDs**: `fc-council-PxZgShdjQvQ-2`, `fc-council-PxZgShdjQvQ-5`, `fc-council-PxZgShdjQvQ-9`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 3-8-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 3-8-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=PxZgShdjQvQ |
| `text` | 10/10 (100%) | okay you should have stopped me well no because i think it's important because w... |
| `title` | 10/10 (100%) | City Council 3-8-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=SzSDkFqgUto`

- **Vector count**: 12
- **Sample IDs**: `fc-council-SzSDkFqgUto-10`, `fc-council-SzSDkFqgUto-2`, `fc-council-SzSDkFqgUto-8`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 7-25-22 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 7-25-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=SzSDkFqgUto |
| `text` | 10/10 (100%) | 25 percent which is what we normally do but I think that's a little bit inaccura... |
| `title` | 10/10 (100%) | City Council 7-25-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_BuSb50_X9Y`

- **Vector count**: 12
- **Sample IDs**: `fc-council-_BuSb50_X9Y-1`, `fc-council-_BuSb50_X9Y-5`, `fc-council-_BuSb50_X9Y-3`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 5-11-20 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-11-20 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=_BuSb50_X9Y |
| `text` | 10/10 (100%) | you want to say anything about that Aaron yeah all word what we're doing is at b... |
| `title` | 10/10 (100%) | City Council 5-11-20 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=dUbFQDkV-m8`

- **Vector count**: 12
- **Sample IDs**: `fc-council-dUbFQDkV-m8-1`, `fc-council-dUbFQDkV-m8-10`, `fc-council-dUbFQDkV-m8-11`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council Meeting 1-12-15 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council Meeting 1-12-15 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=dUbFQDkV-m8 |
| `text` | 10/10 (100%) | 61 cents any questions regarding those items quick question about the um superin... |
| `title` | 10/10 (100%) | Fairfield City Council Meeting 1-12-15 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.intelligentcommunity.org/tags/ic_indicators`

- **Vector count**: 12
- **Sample IDs**: `icf-948cd862f578e6a1dd5dbc3b-1`, `icf-948cd862f578e6a1dd5dbc3b-5`, `icf-948cd862f578e6a1dd5dbc3b-9`
- **ID patterns**: `orgId-sha24-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | civic-knowledge |
| `file` | 10/10 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/tags/ic_indic... |
| `filename` | 10/10 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/tags/ic_indic... |
| `org` | 10/10 (100%) | Intelligent Community Forum |
| `source` | 10/10 (100%) | https://www.intelligentcommunity.org/tags/ic_indicators |
| `text` | 10/10 (100%) | Posted on ICF Method by Victoria Krisman March 31, 2016 11:16 AM This infographi... |
| `type` | 10/10 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=325`

- **Vector count**: 12
- **Sample IDs**: `minutes-325.pdf-chunk-10`, `minutes-325.pdf-chunk-7`, `minutes-325.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-325.pdf |
| `filename` | 10/10 (100%) | minutes-325.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=325 |
| `text` | 10/10 (100%) | ed by Rasmussen   AYES:  Thompson, Rasmussen, Halley, Anderson, Hamilton, Flourn... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=405`

- **Vector count**: 12
- **Sample IDs**: `minutes-405.pdf-chunk-6`, `minutes-405.pdf-chunk-9`, `minutes-405.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-405.pdf |
| `filename` | 10/10 (100%) | minutes-405.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=405 |
| `text` | 10/10 (100%) | E AN ECONOMIC  DEVELOPMENT AREA, AND THAT THE   REHABILITATION, CONSERVATION, RE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=445`

- **Vector count**: 12
- **Sample IDs**: `minutes-445.pdf-chunk-8`, `minutes-445.pdf-chunk-10`, `minutes-445.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-445.pdf |
| `filename` | 10/10 (100%) | minutes-445.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=445 |
| `text` | 10/10 (100%) | everal items and  recommend to Council a sanitary sewer dedication from FEDA;  w... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=442`

- **Vector count**: 12
- **Sample IDs**: `minutes-442.pdf-chunk-1`, `minutes-442.pdf-chunk-8`, `minutes-442.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-442.pdf |
| `filename` | 10/10 (100%) | minutes-442.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=442 |
| `text` | 10/10 (100%) | 6.30.    TO APPROVE THE MAY TRANSFERS   AND FINANCE REPORT.    TO APPROVE USDA S... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=483`

- **Vector count**: 12
- **Sample IDs**: `minutes-483.pdf-chunk-7`, `minutes-483.pdf-chunk-6`, `minutes-483.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-483.pdf |
| `filename` | 10/10 (100%) | minutes-483.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=483 |
| `text` | 10/10 (100%) |     Moved by Anderson, seconded by Flournoy   AYES:  Anderson, Flournoy, Twohill... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=666`

- **Vector count**: 12
- **Sample IDs**: `minutes-666.pdf-chunk-0`, `minutes-666.pdf-chunk-1`, `minutes-666.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-666.pdf |
| `filename` | 10/10 (100%) | minutes-666.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=666 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SEPTEMBER 12, 2022      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=675`

- **Vector count**: 12
- **Sample IDs**: `minutes-675.pdf-chunk-5`, `minutes-675.pdf-chunk-4`, `minutes-675.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-675.pdf |
| `filename` | 10/10 (100%) | minutes-675.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=675 |
| `text` | 10/10 (100%) |    Minutes  01/23/23    Moved by Flournoy, seconded by Anderson   AYES:  Flourno... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=682`

- **Vector count**: 12
- **Sample IDs**: `minutes-682.pdf-chunk-11`, `minutes-682.pdf-chunk-1`, `minutes-682.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-682.pdf |
| `filename` | 10/10 (100%) | minutes-682.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=682 |
| `text` | 10/10 (100%) | Estey, Gandy and Twohill      TO TABLE MAY 1, 2023 DEADLINE    FOR PROPERTY LOCA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=684`

- **Vector count**: 12
- **Sample IDs**: `minutes-684.pdf-chunk-2`, `minutes-684.pdf-chunk-4`, `minutes-684.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-684.pdf |
| `filename` | 10/10 (100%) | minutes-684.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=684 |
| `text` | 10/10 (100%) |     TO APPROVE A LIQUOR LICENSE FOR  THE LUNCHBOX.    TO APPROVE A LIQUOR LICENS... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=699`

- **Vector count**: 12
- **Sample IDs**: `minutes-699.pdf-chunk-2`, `minutes-699.pdf-chunk-6`, `minutes-699.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-699.pdf |
| `filename` | 10/10 (100%) | minutes-699.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=699 |
| `text` | 10/10 (100%) | STORE #985.    TO APPROVE ACH PAYMENT TO IOWA DEPT.  OF REVENUE IN THE AMOUNT OF... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=727`

- **Vector count**: 12
- **Sample IDs**: `minutes-727.pdf-chunk-11`, `minutes-727.pdf-chunk-4`, `minutes-727.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-727.pdf |
| `filename` | 10/10 (100%) | minutes-727.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=727 |
| `text` | 10/10 (100%) | ty Clerk  |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=743`

- **Vector count**: 12
- **Sample IDs**: `minutes-743.pdf-chunk-6`, `minutes-743.pdf-chunk-9`, `minutes-743.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-743.pdf |
| `filename` | 10/10 (100%) | minutes-743.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=743 |
| `text` | 10/10 (100%) | g to the  Vietnam conflict where troops were instructed to listen to the people ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=747`

- **Vector count**: 12
- **Sample IDs**: `minutes-747.pdf-chunk-3`, `minutes-747.pdf-chunk-6`, `minutes-747.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-747.pdf |
| `filename` | 10/10 (100%) | minutes-747.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=747 |
| `text` | 10/10 (100%) | ness, seconded by Ham   AYES:  Kness, Ham, Gandy, Twohill, Rowe, Flournoy and Es... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=755`

- **Vector count**: 12
- **Sample IDs**: `minutes-755.pdf-chunk-7`, `minutes-755.pdf-chunk-2`, `minutes-755.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-755.pdf |
| `filename` | 10/10 (100%) | minutes-755.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=755 |
| `text` | 10/10 (100%) | ness, Flournoy, Twohill, Estey, Ham and Gandy      TO PASS THROUGH THE THIRD AND... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=759`

- **Vector count**: 12
- **Sample IDs**: `minutes-759.pdf-chunk-4`, `minutes-759.pdf-chunk-0`, `minutes-759.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-759.pdf |
| `filename` | 10/10 (100%) | minutes-759.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=759 |
| `text` | 10/10 (100%) | rnoy  AYES:  Gandy, Flournoy, Rowe, Twohill, Kness and Estey      TO APPROVE THE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=765`

- **Vector count**: 12
- **Sample IDs**: `minutes-765.pdf-chunk-4`, `minutes-765.pdf-chunk-1`, `minutes-765.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-765.pdf |
| `filename` | 10/10 (100%) | minutes-765.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=765 |
| `text` | 10/10 (100%) | ached Council to request parking along North B Street on October 18 th .    Move... |

### `https://www.miu.edu/bachelors-in-creative-writing`

- **Vector count**: 12
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-25`, `miu-aHR0cHM6Ly93d3cubWl1-30`, `miu-aHR0cHM6Ly93d3cubWl1-31`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | education |
| `file` | 10/10 (100%) | Maharishi International University — https://www.miu.edu/bachelors-in-creative-w... |
| `filename` | 10/10 (100%) | Maharishi International University — https://www.miu.edu/bachelors-in-creative-w... |
| `org` | 10/10 (100%) | Maharishi International University |
| `source` | 10/10 (100%) | https://www.miu.edu/bachelors-in-creative-writing |
| `text` | 10/10 (100%) | In this course, we watch a set of excellent films from the past three decades. O... |
| `type` | 10/10 (100%) | community_org |

### `https://www.youtube.com/watch?v=eqC6j_5soZU`

- **Vector count**: 12
- **Sample IDs**: `traction-thursdays-eqC6j_5soZU-11`, `traction-thursdays-eqC6j_5soZU-6`, `traction-thursdays-eqC6j_5soZU-3`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `file` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Ankhbayar Erdenebaatar "Entrep... |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Ankhbayar Erdenebaatar "Entrep... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=eqC6j_5soZU |
| `text` | 10/10 (100%) | So creating a platform and an um a network of networks where everyone can do tha... |
| `title` | 10/10 (100%) | Traction Thursday \| Ankhbayar Erdenebaatar "Entrepreneur" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9WnYZ6KF6yw`

- **Vector count**: 11
- **Sample IDs**: `fc-council-9WnYZ6KF6yw-10`, `fc-council-9WnYZ6KF6yw-8`, `fc-council-9WnYZ6KF6yw-6`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 2-8-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-8-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=9WnYZ6KF6yw |
| `text` | 10/10 (100%) | and then in 1949 president harry truman recognized national freedom day and urge... |
| `title` | 10/10 (100%) | City Council 2-8-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=A_3Qtd9qbmw`

- **Vector count**: 11
- **Sample IDs**: `fc-council-A_3Qtd9qbmw-1`, `fc-council-A_3Qtd9qbmw-2`, `fc-council-A_3Qtd9qbmw-10`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 5-22-23 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-22-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=A_3Qtd9qbmw |
| `text` | 10/10 (100%) | m it looks like they're just doing service projects but I I mean I guess this is... |
| `title` | 10/10 (100%) | City Council 5-22-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Z8OCQ8XWiVA`

- **Vector count**: 11
- **Sample IDs**: `fc-council-Z8OCQ8XWiVA-6`, `fc-council-Z8OCQ8XWiVA-3`, `fc-council-Z8OCQ8XWiVA-4`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 12-27-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-27-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Z8OCQ8XWiVA |
| `text` | 10/10 (100%) | that's now but what did you have before yeah i don't know did you narrow i narro... |
| `title` | 10/10 (100%) | City Council 12-27-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=hC8C2ZdeM1E`

- **Vector count**: 11
- **Sample IDs**: `fc-council-hC8C2ZdeM1E-5`, `fc-council-hC8C2ZdeM1E-7`, `fc-council-hC8C2ZdeM1E-0`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 5-27-14 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 5-27-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=hC8C2ZdeM1E |
| `text` | 10/10 (100%) | has a deck in the back and a covered porch on the front it's a modular home pref... |
| `title` | 10/10 (100%) | Fairfield City Council 5-27-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=tHmmmQuBEDQ`

- **Vector count**: 11
- **Sample IDs**: `fc-council-tHmmmQuBEDQ-2`, `fc-council-tHmmmQuBEDQ-6`, `fc-council-tHmmmQuBEDQ-1`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 4-8-24 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 4-8-24 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=tHmmmQuBEDQ |
| `text` | 10/10 (100%) | m. on the 26 for the RB committee second okay any more questions or discussion I... |
| `title` | 10/10 (100%) | City Council 4-8-24 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=145`

- **Vector count**: 11
- **Sample IDs**: `minutes-145.pdf-chunk-9`, `minutes-145.pdf-chunk-1`, `minutes-145.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-145.pdf |
| `filename` | 10/10 (100%) | minutes-145.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=145 |
| `text` | 10/10 (100%) | Kalen, Hammes, Halley      TO ENTER BACK INTO OPEN SESSION AT    9:59 P.M.    Mo... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=238`

- **Vector count**: 11
- **Sample IDs**: `minutes-238.pdf-chunk-0`, `minutes-238.pdf-chunk-8`, `minutes-238.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-238.pdf |
| `filename` | 10/10 (100%) | minutes-238.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=238 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    August 25, 2014        The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=302`

- **Vector count**: 11
- **Sample IDs**: `minutes-302.pdf-chunk-10`, `minutes-302.pdf-chunk-5`, `minutes-302.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-302.pdf |
| `filename` | 10/10 (100%) | minutes-302.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=302 |
| `text` | 10/10 (100%) | dger-Kalen, Halley, Flournoy, Revolinski      TO ENTER INTO OPEN SESSION AT 8:53... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=401`

- **Vector count**: 11
- **Sample IDs**: `minutes-401.pdf-chunk-7`, `minutes-401.pdf-chunk-9`, `minutes-401.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-401.pdf |
| `filename` | 10/10 (100%) | minutes-401.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=401 |
| `text` | 10/10 (100%) | y   AYES:  Anderson, Flournoy, Thompson, Rasmussen, Hamilton, Gandy and Halley  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=397`

- **Vector count**: 11
- **Sample IDs**: `minutes-397.pdf-chunk-3`, `minutes-397.pdf-chunk-0`, `minutes-397.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-397.pdf |
| `filename` | 10/10 (100%) | minutes-397.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=397 |
| `text` | 10/10 (100%) | rson   AYES:  Flournoy, Anderson, Rasmussen, Gandy, Hamilton, Halley and Thompso... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=398`

- **Vector count**: 11
- **Sample IDs**: `minutes-398.pdf-chunk-7`, `minutes-398.pdf-chunk-0`, `minutes-398.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-398.pdf |
| `filename` | 10/10 (100%) | minutes-398.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=398 |
| `text` | 10/10 (100%) |  ATH TO THE BOARD OF ADJUSTMENT.    Moved by Anderson, seconded by Hamilton   AY... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=422`

- **Vector count**: 11
- **Sample IDs**: `minutes-422.pdf-chunk-0`, `minutes-422.pdf-chunk-5`, `minutes-422.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-422.pdf |
| `filename` | 10/10 (100%) | minutes-422.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=422 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  August 27, 2018      The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=409`

- **Vector count**: 11
- **Sample IDs**: `minutes-409.pdf-chunk-3`, `minutes-409.pdf-chunk-6`, `minutes-409.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-409.pdf |
| `filename` | 10/10 (100%) | minutes-409.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=409 |
| `text` | 10/10 (100%) | er had an  accident in the street and he was inquiring as to the process of how ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=444`

- **Vector count**: 11
- **Sample IDs**: `minutes-444.pdf-chunk-10`, `minutes-444.pdf-chunk-4`, `minutes-444.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-444.pdf |
| `filename` | 10/10 (100%) | minutes-444.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=444 |
| `text` | 10/10 (100%) | process and the street lighting  project.      City Hall will be closed to foot ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=443`

- **Vector count**: 11
- **Sample IDs**: `minutes-443.pdf-chunk-8`, `minutes-443.pdf-chunk-3`, `minutes-443.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-443.pdf |
| `filename` | 10/10 (100%) | minutes-443.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=443 |
| `text` | 10/10 (100%) | DE 11.12 BLOCKING  STREETS AND 11.32 SNOW REMOVAL.    Mayor Malloy opened a publ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=494`

- **Vector count**: 11
- **Sample IDs**: `minutes-494.pdf-chunk-5`, `minutes-494.pdf-chunk-7`, `minutes-494.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-494.pdf |
| `filename` | 10/10 (100%) | minutes-494.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=494 |
| `text` | 10/10 (100%) | AGE FROM SEVEN HUNDRED   TWENTY (720) TO SEVEN HUNDRED   (700) SPECIFIED IN SECT... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=634`

- **Vector count**: 11
- **Sample IDs**: `minutes-634.pdf-chunk-2`, `minutes-634.pdf-chunk-0`, `minutes-634.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-634.pdf |
| `filename` | 10/10 (100%) | minutes-634.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=634 |
| `text` | 10/10 (100%) | NTER (OUTDOOR).    TO APPROVE A LIQUOR LICENSE FOR VERAISON  WINE BAR (OUTDOOR).... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=652`

- **Vector count**: 11
- **Sample IDs**: `minutes-652.pdf-chunk-9`, `minutes-652.pdf-chunk-10`, `minutes-652.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-652.pdf |
| `filename` | 10/10 (100%) | minutes-652.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=652 |
| `text` | 10/10 (100%) | mic Development Committee, but has been static since.  Carlson requested each Co... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=649`

- **Vector count**: 11
- **Sample IDs**: `minutes-649.pdf-chunk-4`, `minutes-649.pdf-chunk-0`, `minutes-649.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-649.pdf |
| `filename` | 10/10 (100%) | minutes-649.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=649 |
| `text` | 10/10 (100%) | EGARDING   REDISTRICTING WARDS FOR     MONDAY, DECEMBER 27, 2021    AT 5:00 PM. ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=659`

- **Vector count**: 11
- **Sample IDs**: `minutes-659.pdf-chunk-2`, `minutes-659.pdf-chunk-9`, `minutes-659.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-659.pdf |
| `filename` | 10/10 (100%) | minutes-659.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=659 |
| `text` | 10/10 (100%) | OARD MINUTES.    TO ADOPT RESOLUTION NO. 4058 APPROVING   EMPLOYMENT IN THE PARK... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=674`

- **Vector count**: 11
- **Sample IDs**: `minutes-674.pdf-chunk-8`, `minutes-674.pdf-chunk-6`, `minutes-674.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-674.pdf |
| `filename` | 10/10 (100%) | minutes-674.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=674 |
| `text` | 10/10 (100%) | oved by Anderson, seconded by Twohill   AYES:  Anderson, Twohill, Rasmussen, Ham... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=677`

- **Vector count**: 11
- **Sample IDs**: `minutes-677.pdf-chunk-1`, `minutes-677.pdf-chunk-7`, `minutes-677.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-677.pdf |
| `filename` | 10/10 (100%) | minutes-677.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=677 |
| `text` | 10/10 (100%) | JUNE  10, 2023 FROM 10:00 AM – 2:00 PM.    CONSENT OF NOISE EXEMPTION FOR FAIRFI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=690`

- **Vector count**: 11
- **Sample IDs**: `minutes-690.pdf-chunk-9`, `minutes-690.pdf-chunk-7`, `minutes-690.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-690.pdf |
| `filename` | 10/10 (100%) | minutes-690.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=690 |
| `text` | 10/10 (100%) | lperson Flournoy reported on behalf of the Personnel Committee; they gave the Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=691`

- **Vector count**: 11
- **Sample IDs**: `minutes-691.pdf-chunk-2`, `minutes-691.pdf-chunk-10`, `minutes-691.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-691.pdf |
| `filename` | 10/10 (100%) | minutes-691.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=691 |
| `text` | 10/10 (100%) |  Gandy, Flournoy, Twohill, Ham, and Rasmussen      TO ACCEPT 2022 SEWER LINING P... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=71`

- **Vector count**: 11
- **Sample IDs**: `minutes-71.pdf-chunk-3`, `minutes-71.pdf-chunk-6`, `minutes-71.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-71.pdf |
| `filename` | 10/10 (100%) | minutes-71.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=71 |
| `text` | 10/10 (100%) |       TO DESIGNATE BALL PARK #3 IN O.B.    NELSON PARK AS A TEMPORARY DOG     PA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=746`

- **Vector count**: 11
- **Sample IDs**: `minutes-746.pdf-chunk-9`, `minutes-746.pdf-chunk-3`, `minutes-746.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-746.pdf |
| `filename` | 10/10 (100%) | minutes-746.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=746 |
| `text` | 10/10 (100%) | reat deal of information and other uses the card could provide.       City Admin... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=758`

- **Vector count**: 11
- **Sample IDs**: `minutes-758.pdf-chunk-9`, `minutes-758.pdf-chunk-2`, `minutes-758.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-758.pdf |
| `filename` | 10/10 (100%) | minutes-758.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=758 |
| `text` | 10/10 (100%) | c hearing on the first reading of an Ordinance amending certain sewer  fees.  Th... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=770`

- **Vector count**: 11
- **Sample IDs**: `minutes-770.pdf-chunk-1`, `minutes-770.pdf-chunk-2`, `minutes-770.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-770.pdf |
| `filename` | 10/10 (100%) | minutes-770.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=770 |
| `text` | 10/10 (100%) | HE AUGUST FINANCE REPORT   AND TRANSFERS.    TO APPROVE THE SEPTEMBER FINANCE RE... |

### `https://www.miu.edu/online-bachelors-specialization-in-cinematic-arts-and-new-media`

- **Vector count**: 11
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-14`, `miu-aHR0cHM6Ly93d3cubWl1-11`, `miu-aHR0cHM6Ly93d3cubWl1-19`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | education |
| `file` | 10/10 (100%) | Maharishi International University — https://www.miu.edu/online-bachelors-specia... |
| `filename` | 10/10 (100%) | Maharishi International University — https://www.miu.edu/online-bachelors-specia... |
| `org` | 10/10 (100%) | Maharishi International University |
| `source` | 10/10 (100%) | https://www.miu.edu/online-bachelors-specialization-in-cinematic-arts-and-new-me... |
| `text` | 10/10 (100%) | Exploring Consciousness This course is your entryway into MIU and Consciousness-... |
| `type` | 10/10 (100%) | community_org |

### `fcsd-board-minutes`

- **Vector count**: 10
- **Sample IDs**: `August_15__2022_Public_Hearing_and_Regular_Boa.pdf-chunk-3`, `August_15__2022_Public_Hearing_and_Regular_Boa.pdf-chunk-5`, `August_15__2022_Public_Hearing_and_Regular_Boa.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | August_15__2022_Public_Hearing_and_Regular_Boa.pdf |
| `filename` | 10/10 (100%) | August_15__2022_Public_Hearing_and_Regular_Boa.pdf |
| `source` | 10/10 (100%) | fcsd-board-minutes |
| `text` | 10/10 (100%) | hers for the 2022-2023 school year, including  a stipend of $2000 and 80 additio... |
| `type` | 10/10 (100%) | government |

### `https://www.youtube.com/watch?v=2IThDUKDguE`

- **Vector count**: 10
- **Sample IDs**: `fc-council-2IThDUKDguE-5`, `fc-council-2IThDUKDguE-6`, `fc-council-2IThDUKDguE-4`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 5-10-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-10-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=2IThDUKDguE |
| `text` | 10/10 (100%) | second um moved by noise second by two hill aaron do you want to say anything di... |
| `title` | 10/10 (100%) | City Council 5-10-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=8Nkanlu9WZs`

- **Vector count**: 10
- **Sample IDs**: `fc-council-8Nkanlu9WZs-8`, `fc-council-8Nkanlu9WZs-6`, `fc-council-8Nkanlu9WZs-0`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 9-10-18 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 9-10-18 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=8Nkanlu9WZs |
| `text` | 10/10 (100%) | 50 before but we'll put together a rate now I have that information back on the ... |
| `title` | 10/10 (100%) | City Council 9-10-18 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CvlQGLrPtII`

- **Vector count**: 10
- **Sample IDs**: `fc-council-CvlQGLrPtII-2`, `fc-council-CvlQGLrPtII-7`, `fc-council-CvlQGLrPtII-5`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Special City Council Meeting 1-19-15 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Special City Council Meeting 1-19-15 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=CvlQGLrPtII |
| `text` | 10/10 (100%) | 775 million you see the crosswalk projects which is separate but it's something ... |
| `title` | 10/10 (100%) | Special City Council Meeting 1-19-15 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_PlWtxt9xnc`

- **Vector count**: 10
- **Sample IDs**: `fc-council-_PlWtxt9xnc-5`, `fc-council-_PlWtxt9xnc-3`, `fc-council-_PlWtxt9xnc-8`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 2-23-15 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-23-15 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=_PlWtxt9xnc |
| `text` | 10/10 (100%) | m so moved by hamilton second second by florinoy all those in favor signify by s... |
| `title` | 10/10 (100%) | City Council 2-23-15 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=he8YX9YX2iw`

- **Vector count**: 10
- **Sample IDs**: `fc-council-he8YX9YX2iw-2`, `fc-council-he8YX9YX2iw-4`, `fc-council-he8YX9YX2iw-1`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — City Council 6-28-21 |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 6-28-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=he8YX9YX2iw |
| `text` | 10/10 (100%) | 55 million dollars in the interest from the high school bond that you approved s... |
| `title` | 10/10 (100%) | City Council 6-28-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uccUekMOrgM`

- **Vector count**: 10
- **Sample IDs**: `fc-council-uccUekMOrgM-4`, `fc-council-uccUekMOrgM-1`, `fc-council-uccUekMOrgM-3`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `file` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 7-8-13 |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 7-8-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=uccUekMOrgM |
| `text` | 10/10 (100%) | 75 percent and so that's appreciable 275 thousand dollars over the next I guess ... |
| `title` | 10/10 (100%) | Fairfield City Council 7-8-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=226`

- **Vector count**: 10
- **Sample IDs**: `minutes-226.pdf-chunk-4`, `minutes-226.pdf-chunk-2`, `minutes-226.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-226.pdf |
| `filename` | 10/10 (100%) | minutes-226.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=226 |
| `text` | 10/10 (100%) |  Moved by Halley, seconded by Flournoy   AYES:  Halley, Flournoy, Revolinski, Ra... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=289`

- **Vector count**: 10
- **Sample IDs**: `minutes-289.pdf-chunk-1`, `minutes-289.pdf-chunk-9`, `minutes-289.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-289.pdf |
| `filename` | 10/10 (100%) | minutes-289.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=289 |
| `text` | 10/10 (100%) | OVE A LIQUOR LICENSE FOR AMORE MIO.      TO APPROVE OPERATING CLAIMS IN THE AMOU... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=312`

- **Vector count**: 10
- **Sample IDs**: `minutes-312.pdf-chunk-6`, `minutes-312.pdf-chunk-3`, `minutes-312.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-312.pdf |
| `filename` | 10/10 (100%) | minutes-312.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=312 |
| `text` | 10/10 (100%) | clared the public hearing closed.    Moved by Anderson, seconded by Revolinski  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=335`

- **Vector count**: 10
- **Sample IDs**: `minutes-335.pdf-chunk-8`, `minutes-335.pdf-chunk-4`, `minutes-335.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-335.pdf |
| `filename` | 10/10 (100%) | minutes-335.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=335 |
| `text` | 10/10 (100%) | ECEMBER    12 AT 7:00 P.M.      CLOSED SESSION  Moved by Revolinski, seconded by... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=387`

- **Vector count**: 10
- **Sample IDs**: `minutes-387.pdf-chunk-8`, `minutes-387.pdf-chunk-7`, `minutes-387.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-387.pdf |
| `filename` | 10/10 (100%) | minutes-387.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=387 |
| `text` | 10/10 (100%) | CIL MEETING IN THE    MONTH OF DECEMBER, 2017.    COMMITTEE & BOARD REPORTS  Cou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=464`

- **Vector count**: 10
- **Sample IDs**: `minutes-464.pdf-chunk-7`, `minutes-464.pdf-chunk-8`, `minutes-464.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-464.pdf |
| `filename` | 10/10 (100%) | minutes-464.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=464 |
| `text` | 10/10 (100%) | ARNEGIE HISTORICAL MUSEUM BOARD:     DAVE NEFF TO REPLACE MARY HILL     CHRIS SM... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=473`

- **Vector count**: 10
- **Sample IDs**: `minutes-473.pdf-chunk-7`, `minutes-473.pdf-chunk-8`, `minutes-473.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-473.pdf |
| `filename` | 10/10 (100%) | minutes-473.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=473 |
| `text` | 10/10 (100%) | ity  service accounts.    Moved by Flournoy, seconded by Gandy   AYES:  Flournoy... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=495`

- **Vector count**: 10
- **Sample IDs**: `minutes-495.pdf-chunk-3`, `minutes-495.pdf-chunk-0`, `minutes-495.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-495.pdf |
| `filename` | 10/10 (100%) | minutes-495.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=495 |
| `text` | 10/10 (100%) | /22/21    Mayor Boyer opened a public hearing on the S 32 nd  Street Resurfacing... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=491`

- **Vector count**: 10
- **Sample IDs**: `minutes-491.pdf-chunk-7`, `minutes-491.pdf-chunk-9`, `minutes-491.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-491.pdf |
| `filename` | 10/10 (100%) | minutes-491.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=491 |
| `text` | 10/10 (100%) |  BE ISSUED, INCURRED BY THE CITY IN   CONNECTION WITH THE LINCOLN AVENUE URBAN  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=496`

- **Vector count**: 10
- **Sample IDs**: `minutes-496.pdf-chunk-0`, `minutes-496.pdf-chunk-1`, `minutes-496.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-496.pdf |
| `filename` | 10/10 (100%) | minutes-496.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=496 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    MARCH 8, 2021        The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=642`

- **Vector count**: 10
- **Sample IDs**: `minutes-642.pdf-chunk-4`, `minutes-642.pdf-chunk-2`, `minutes-642.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-642.pdf |
| `filename` | 10/10 (100%) | minutes-642.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=642 |
| `text` | 10/10 (100%) |  OF GRAND PARK DRIVE  IN THE AMOUNT OF $26,000.00.    Moved by Rasmussen, second... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=653`

- **Vector count**: 10
- **Sample IDs**: `minutes-653.pdf-chunk-8`, `minutes-653.pdf-chunk-1`, `minutes-653.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-653.pdf |
| `filename` | 10/10 (100%) | minutes-653.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=653 |
| `text` | 10/10 (100%) | RST NATIONAL    BANK AND CONTINUE ON WITH    MIDWEST ONE BANK WHEN THE    PURCHA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=655`

- **Vector count**: 10
- **Sample IDs**: `minutes-655.pdf-chunk-5`, `minutes-655.pdf-chunk-1`, `minutes-655.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-655.pdf |
| `filename` | 10/10 (100%) | minutes-655.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=655 |
| `text` | 10/10 (100%) | RMATIVE  FAIR HOUSING STRATEGIES, CITIZEN PARTICIPATION   REQUIREMENTS, PROCUREM... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=680`

- **Vector count**: 10
- **Sample IDs**: `minutes-680.pdf-chunk-2`, `minutes-680.pdf-chunk-3`, `minutes-680.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-680.pdf |
| `filename` | 10/10 (100%) | minutes-680.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=680 |
| `text` | 10/10 (100%) | uncil regarding closing off streets for the  annual parade and rally on Saturday... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=679`

- **Vector count**: 10
- **Sample IDs**: `minutes-679.pdf-chunk-9`, `minutes-679.pdf-chunk-8`, `minutes-679.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-679.pdf |
| `filename` | 10/10 (100%) | minutes-679.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=679 |
| `text` | 10/10 (100%) | n the injunctive lawsuit.    COMMITTEE & BOARD REPORTS  Economic Development Cha... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=678`

- **Vector count**: 10
- **Sample IDs**: `minutes-678.pdf-chunk-5`, `minutes-678.pdf-chunk-6`, `minutes-678.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-678.pdf |
| `filename` | 10/10 (100%) | minutes-678.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=678 |
| `text` | 10/10 (100%) | d by Twohill, seconded by Ham   AYES:  Twohill, Ham, Anderson, Flournoy, Rasmuss... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=685`

- **Vector count**: 10
- **Sample IDs**: `minutes-685.pdf-chunk-8`, `minutes-685.pdf-chunk-2`, `minutes-685.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-685.pdf |
| `filename` | 10/10 (100%) | minutes-685.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=685 |
| `text` | 10/10 (100%) | DEPARTMENT REPORTS  City Administrator Doug Reinert apprised Council on items he... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=694`

- **Vector count**: 10
- **Sample IDs**: `minutes-694.pdf-chunk-1`, `minutes-694.pdf-chunk-6`, `minutes-694.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-694.pdf |
| `filename` | 10/10 (100%) | minutes-694.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=694 |
| `text` | 10/10 (100%) | HE AUGUST FINANCE REPORT    AND TRANSFERS.    CONSENT OF NOISE EXEMPTION FOR IOW... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=697`

- **Vector count**: 10
- **Sample IDs**: `minutes-697.pdf-chunk-0`, `minutes-697.pdf-chunk-6`, `minutes-697.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-697.pdf |
| `filename` | 10/10 (100%) | minutes-697.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=697 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  January 8, 2024    The Fairfield City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=695`

- **Vector count**: 10
- **Sample IDs**: `minutes-695.pdf-chunk-3`, `minutes-695.pdf-chunk-5`, `minutes-695.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-695.pdf |
| `filename` | 10/10 (100%) | minutes-695.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=695 |
| `text` | 10/10 (100%) | MBER 18, 2023 AT 7:00 PM.    Mayor Boyer announced this was the date and time se... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=717`

- **Vector count**: 10
- **Sample IDs**: `minutes-717.pdf-chunk-0`, `minutes-717.pdf-chunk-3`, `minutes-717.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-717.pdf |
| `filename` | 10/10 (100%) | minutes-717.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=717 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  APRIL 8, 2024      The Fairfield City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=721`

- **Vector count**: 10
- **Sample IDs**: `minutes-721.pdf-chunk-1`, `minutes-721.pdf-chunk-4`, `minutes-721.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-721.pdf |
| `filename` | 10/10 (100%) | minutes-721.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=721 |
| `text` | 10/10 (100%) | HE WATER DEPARTMENT.    TO ADOPT RESOLUTION NO. 4263 APPROVING    EMPLOYMENT IN ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=720`

- **Vector count**: 10
- **Sample IDs**: `minutes-720.pdf-chunk-9`, `minutes-720.pdf-chunk-7`, `minutes-720.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-720.pdf |
| `filename` | 10/10 (100%) | minutes-720.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=720 |
| `text` | 10/10 (100%) | d Rowe    TO ADJOURN AT 8:13 P.M.    Submitted by:         Rebekah Loper  City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=716`

- **Vector count**: 10
- **Sample IDs**: `minutes-716.pdf-chunk-9`, `minutes-716.pdf-chunk-6`, `minutes-716.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-716.pdf |
| `filename` | 10/10 (100%) | minutes-716.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=716 |
| `text` | 10/10 (100%) | MITTEE.    City Administrator Doug Reinert stated the primary objective of the F... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=740`

- **Vector count**: 10
- **Sample IDs**: `minutes-740.pdf-chunk-0`, `minutes-740.pdf-chunk-4`, `minutes-740.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-740.pdf |
| `filename` | 10/10 (100%) | minutes-740.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=740 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SEPTEMBER 9, 2024    The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=744`

- **Vector count**: 10
- **Sample IDs**: `minutes-744.pdf-chunk-0`, `minutes-744.pdf-chunk-3`, `minutes-744.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-744.pdf |
| `filename` | 10/10 (100%) | minutes-744.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=744 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  NOVEMBER 12, 2024    The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=750`

- **Vector count**: 10
- **Sample IDs**: `minutes-750.pdf-chunk-6`, `minutes-750.pdf-chunk-0`, `minutes-750.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-750.pdf |
| `filename` | 10/10 (100%) | minutes-750.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=750 |
| `text` | 10/10 (100%) | MENT APPLICATION FOR 1100 W  HEMPSTEAD AVENUE.    Moved by Kness, seconded by Ga... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=757`

- **Vector count**: 10
- **Sample IDs**: `minutes-757.pdf-chunk-0`, `minutes-757.pdf-chunk-8`, `minutes-757.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 10/10 (100%) | minutes-757.pdf |
| `filename` | 10/10 (100%) | minutes-757.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=757 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  MAY 27, 2025    The Fairfield City Coun... |

### `golden_magnolia_sanctuary`

- **Vector count**: 9
- **Sample IDs**: `02_volunteer.pdf-chunk-3`, `02_volunteer.pdf-chunk-4`, `02_volunteer.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | community_organizations |
| `file` | 9/9 (100%) | 02_volunteer.pdf |
| `filename` | 9/9 (100%) | 02_volunteer.pdf |
| `source` | 9/9 (100%) | golden_magnolia_sanctuary |
| `sourceUrl` | 9/9 (100%) | https://www.goldenmagnoliasanctuary.org |
| `subcategory` | 9/9 (100%) | golden_magnolia_sanctuary |
| `text` | 9/9 (100%) |  - Sat, Mar 14, 2026 8:30 PM  0 Wednesday Prep Day Wednesday, Mar 18 2026 1:00 ... |
| `url` | 9/9 (100%) | https://www.goldenmagnoliasanctuary.org |

### `https://www.youtube.com/watch?v=02oCsOj4j1M`

- **Vector count**: 9
- **Sample IDs**: `fc-council-02oCsOj4j1M-8`, `fc-council-02oCsOj4j1M-4`, `fc-council-02oCsOj4j1M-5`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 9-13-21 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 9-13-21 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=02oCsOj4j1M |
| `text` | 9/9 (100%) | 66 um to cover the appraisals and which you said was already budgeted for yes ye... |
| `title` | 9/9 (100%) | City Council 9-13-21 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=-Eo5Zt1Q_Lc`

- **Vector count**: 9
- **Sample IDs**: `fc-council--Eo5Zt1Q_Lc-3`, `fc-council--Eo5Zt1Q_Lc-2`, `fc-council--Eo5Zt1Q_Lc-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 3-28-22 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 3-28-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=-Eo5Zt1Q_Lc |
| `text` | 9/9 (100%) | t is going to be resurfacing from fillmore to burlington um so last year and the... |
| `title` | 9/9 (100%) | City Council 3-28-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=1VIPi-GfAFc`

- **Vector count**: 9
- **Sample IDs**: `fc-council-1VIPi-GfAFc-1`, `fc-council-1VIPi-GfAFc-5`, `fc-council-1VIPi-GfAFc-0`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 10-26-20 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 10-26-20 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=1VIPi-GfAFc |
| `text` | 9/9 (100%) | 84 cents resolution authorizing fund transfers acceptance of the library board m... |
| `title` | 9/9 (100%) | City Council 10-26-20 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=5t9jbg0r9R0`

- **Vector count**: 9
- **Sample IDs**: `fc-council-5t9jbg0r9R0-4`, `fc-council-5t9jbg0r9R0-8`, `fc-council-5t9jbg0r9R0-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 9-22-14 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 9-22-14 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=5t9jbg0r9R0 |
| `text` | 9/9 (100%) | 26 so the retainage of around five thousand five hundred dollars would be paid 3... |
| `title` | 9/9 (100%) | City Council 9-22-14 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=4x8OeX8T1pk`

- **Vector count**: 9
- **Sample IDs**: `fc-council-4x8OeX8T1pk-0`, `fc-council-4x8OeX8T1pk-8`, `fc-council-4x8OeX8T1pk-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 8-28-23 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-28-23 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=4x8OeX8T1pk |
| `text` | 9/9 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-28-23  forei... |
| `title` | 9/9 (100%) | City Council 8-28-23 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=63upiLpHZ2I`

- **Vector count**: 9
- **Sample IDs**: `fc-council-63upiLpHZ2I-2`, `fc-council-63upiLpHZ2I-5`, `fc-council-63upiLpHZ2I-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 6-13-22 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 6-13-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=63upiLpHZ2I |
| `text` | 9/9 (100%) | 39 could you explain a bit more what that is the 11 that was a correction for th... |
| `title` | 9/9 (100%) | City Council 6-13-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CFYSeExB4hE`

- **Vector count**: 9
- **Sample IDs**: `fc-council-CFYSeExB4hE-5`, `fc-council-CFYSeExB4hE-2`, `fc-council-CFYSeExB4hE-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 8-13-18 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-13-18 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=CFYSeExB4hE |
| `text` | 9/9 (100%) | Knoll and the administrative staff of the school district through that meeting t... |
| `title` | 9/9 (100%) | City Council 8-13-18 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=JLxl1h9FvjY`

- **Vector count**: 9
- **Sample IDs**: `fc-council-JLxl1h9FvjY-3`, `fc-council-JLxl1h9FvjY-0`, `fc-council-JLxl1h9FvjY-2`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 9-26-22 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 9-26-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=JLxl1h9FvjY |
| `text` | 9/9 (100%) | 75 for 12 months yep okay did uh in this thank you I can ask a question to City ... |
| `title` | 9/9 (100%) | City Council 9-26-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=L61dm-qtzjU`

- **Vector count**: 9
- **Sample IDs**: `fc-council-L61dm-qtzjU-8`, `fc-council-L61dm-qtzjU-7`, `fc-council-L61dm-qtzjU-0`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 7-8-24 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 7-8-24 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=L61dm-qtzjU |
| `text` | 9/9 (100%) | so the truck was uh traveling Westward yeah it was traveling Westward it was tur... |
| `title` | 9/9 (100%) | City Council 7-8-24 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=MlAl2gXU4hk`

- **Vector count**: 9
- **Sample IDs**: `fc-council-MlAl2gXU4hk-5`, `fc-council-MlAl2gXU4hk-0`, `fc-council-MlAl2gXU4hk-1`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 10-24-22 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 10-24-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=MlAl2gXU4hk |
| `text` | 9/9 (100%) | gov is that right said so many times I probably got a Packard but yep flirting t... |
| `title` | 9/9 (100%) | City Council 10-24-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=RgKi5nN45zo`

- **Vector count**: 9
- **Sample IDs**: `fc-council-RgKi5nN45zo-2`, `fc-council-RgKi5nN45zo-7`, `fc-council-RgKi5nN45zo-8`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 9-9-24 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 9-9-24 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=RgKi5nN45zo |
| `text` | 9/9 (100%) | m to go across corner from uh Broadway and Maine on the uh Southwest side to the... |
| `title` | 9/9 (100%) | City Council 9-9-24 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=hGWX395Znas`

- **Vector count**: 9
- **Sample IDs**: `fc-council-hGWX395Znas-0`, `fc-council-hGWX395Znas-7`, `fc-council-hGWX395Znas-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 8-8-22 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-8-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=hGWX395Znas |
| `text` | 9/9 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-8-22  i'll c... |
| `title` | 9/9 (100%) | City Council 8-8-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=j3Ah7XB5Gk0`

- **Vector count**: 9
- **Sample IDs**: `fc-council-j3Ah7XB5Gk0-5`, `fc-council-j3Ah7XB5Gk0-8`, `fc-council-j3Ah7XB5Gk0-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 1-9-23 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 1-9-23 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=j3Ah7XB5Gk0 |
| `text` | 9/9 (100%) | did I write that down right five million 775. 99 okay motion to approve okay mov... |
| `title` | 9/9 (100%) | City Council 1-9-23 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=pyed3ibK4ow`

- **Vector count**: 9
- **Sample IDs**: `fc-council-pyed3ibK4ow-5`, `fc-council-pyed3ibK4ow-2`, `fc-council-pyed3ibK4ow-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 7-24-17 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 7-24-17 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=pyed3ibK4ow |
| `text` | 9/9 (100%) | 75 for the next three years that gets you through the position of where you have... |
| `title` | 9/9 (100%) | City Council 7-24-17 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=pcz6ezbwQGQ`

- **Vector count**: 9
- **Sample IDs**: `fc-council-pcz6ezbwQGQ-1`, `fc-council-pcz6ezbwQGQ-2`, `fc-council-pcz6ezbwQGQ-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 8-24-20 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-24-20 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=pcz6ezbwQGQ |
| `text` | 9/9 (100%) | and we just thought we would stop in and let you know that we are still on we're... |
| `title` | 9/9 (100%) | City Council 8-24-20 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=syST7SKvPzg`

- **Vector count**: 9
- **Sample IDs**: `fc-council-syST7SKvPzg-8`, `fc-council-syST7SKvPzg-0`, `fc-council-syST7SKvPzg-2`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 7-27-20 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 7-27-20 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=syST7SKvPzg |
| `text` | 9/9 (100%) | so right but you have to wait for the five year review to be finished yep and i ... |
| `title` | 9/9 (100%) | City Council 7-27-20 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=tQ3s_stdBO4`

- **Vector count**: 9
- **Sample IDs**: `fc-council-tQ3s_stdBO4-0`, `fc-council-tQ3s_stdBO4-3`, `fc-council-tQ3s_stdBO4-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — Fairfield City Council 5-28-13 |
| `filename` | 9/9 (100%) | City Council Meeting — null — Fairfield City Council 5-28-13 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=tQ3s_stdBO4 |
| `text` | 9/9 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 5-28... |
| `title` | 9/9 (100%) | Fairfield City Council 5-28-13 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wObNYlDv6Zk`

- **Vector count**: 9
- **Sample IDs**: `fc-council-wObNYlDv6Zk-4`, `fc-council-wObNYlDv6Zk-3`, `fc-council-wObNYlDv6Zk-1`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 6-26-23 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 6-26-23 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=wObNYlDv6Zk |
| `text` | 9/9 (100%) | we could authorize the 2080 to transfer contingent upon like the valuation of th... |
| `title` | 9/9 (100%) | City Council 6-26-23 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wP-S-nSmw64`

- **Vector count**: 9
- **Sample IDs**: `fc-council-wP-S-nSmw64-8`, `fc-council-wP-S-nSmw64-6`, `fc-council-wP-S-nSmw64-4`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 3-14-22 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 3-14-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=wP-S-nSmw64 |
| `text` | 9/9 (100%) | and even i would say what we agreed to do right the letter is good and the spiri... |
| `title` | 9/9 (100%) | City Council 3-14-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=zX0pidnODOU`

- **Vector count**: 9
- **Sample IDs**: `fc-council-zX0pidnODOU-0`, `fc-council-zX0pidnODOU-2`, `fc-council-zX0pidnODOU-4`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `file` | 9/9 (100%) | City Council Meeting — null — City Council 8-26-24 |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-26-24 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=zX0pidnODOU |
| `text` | 9/9 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-26-24  and I... |
| `title` | 9/9 (100%) | City Council 8-26-24 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.greaterjeffersoncountyfoundation.org/scholarships`

- **Vector count**: 9
- **Sample IDs**: `gjcf-aHR0cHM6Ly93d3cuZ3Jl-8`, `gjcf-aHR0cHM6Ly93d3cuZ3Jl-5`, `gjcf-aHR0cHM6Ly93d3cuZ3Jl-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | civic |
| `file` | 9/9 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `filename` | 9/9 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `org` | 9/9 (100%) | Greater Jefferson County Foundation |
| `source` | 9/9 (100%) | https://www.greaterjeffersoncountyfoundation.org/scholarships |
| `text` | 9/9 (100%) | Mark Shafer was a dedicated educator in the Fairfield Community School District ... |
| `type` | 9/9 (100%) | community_org |

### `https://www.jeffersoncountyhealthcenter.org/patients/confidentiality`

- **Vector count**: 9
- **Sample IDs**: `jchc-aHR0cHM6Ly93d3cuamVm-7`, `jchc-aHR0cHM6Ly93d3cuamVm-8`, `jchc-aHR0cHM6Ly93d3cuamVm-4`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | health |
| `file` | 9/9 (100%) | Jefferson County Health Center — https://www.jeffersoncountyhealthcenter.org/pat... |
| `filename` | 9/9 (100%) | Jefferson County Health Center — https://www.jeffersoncountyhealthcenter.org/pat... |
| `org` | 9/9 (100%) | Jefferson County Health Center |
| `source` | 9/9 (100%) | https://www.jeffersoncountyhealthcenter.org/patients/confidentiality |
| `text` | 9/9 (100%) | - Is not part of the information which you would be permitted to inspect and cop... |
| `type` | 9/9 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=122`

- **Vector count**: 9
- **Sample IDs**: `minutes-122.pdf-chunk-0`, `minutes-122.pdf-chunk-7`, `minutes-122.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-122.pdf |
| `filename` | 9/9 (100%) | minutes-122.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=122 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    December 17, 2012      The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=192`

- **Vector count**: 9
- **Sample IDs**: `minutes-192.pdf-chunk-4`, `minutes-192.pdf-chunk-8`, `minutes-192.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-192.pdf |
| `filename` | 9/9 (100%) | minutes-192.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=192 |
| `text` | 9/9 (100%) | amilton, seconded by Ledger-Kalen   AYES:  Hamilton, Ledger-Kalen, Boyer, Hammes... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=252`

- **Vector count**: 9
- **Sample IDs**: `minutes-252.pdf-chunk-3`, `minutes-252.pdf-chunk-5`, `minutes-252.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-252.pdf |
| `filename` | 9/9 (100%) | minutes-252.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=252 |
| `text` | 9/9 (100%) | ATION FOR 2237 GLASGOW    ROAD. (NORM’S RENTAL & STORAGE LLC)    Moved by Hamilt... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=237`

- **Vector count**: 9
- **Sample IDs**: `minutes-237.pdf-chunk-0`, `minutes-237.pdf-chunk-2`, `minutes-237.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-237.pdf |
| `filename` | 9/9 (100%) | minutes-237.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=237 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    August 11, 2014        The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=305`

- **Vector count**: 9
- **Sample IDs**: `minutes-305.pdf-chunk-4`, `minutes-305.pdf-chunk-1`, `minutes-305.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-305.pdf |
| `filename` | 9/9 (100%) | minutes-305.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=305 |
| `text` | 9/9 (100%) |  OBLIGATION CAPITAL LOAN    NOTES, SERIES 2015, AND LEVYING A TAX TO PAY    SAID... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=303`

- **Vector count**: 9
- **Sample IDs**: `minutes-303.pdf-chunk-6`, `minutes-303.pdf-chunk-7`, `minutes-303.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-303.pdf |
| `filename` | 9/9 (100%) | minutes-303.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=303 |
| `text` | 9/9 (100%) | ton, Revolinski      TO ADOPT RESOLUTION NO. 3293 OF INTENT    OF ENTER INTO AN ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=318`

- **Vector count**: 9
- **Sample IDs**: `minutes-318.pdf-chunk-0`, `minutes-318.pdf-chunk-7`, `minutes-318.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-318.pdf |
| `filename` | 9/9 (100%) | minutes-318.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=318 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    June 13, 2016      The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=331`

- **Vector count**: 9
- **Sample IDs**: `minutes-331.pdf-chunk-0`, `minutes-331.pdf-chunk-2`, `minutes-331.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-331.pdf |
| `filename` | 9/9 (100%) | minutes-331.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=331 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    September 12, 2016      The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=357`

- **Vector count**: 9
- **Sample IDs**: `minutes-357.pdf-chunk-8`, `minutes-357.pdf-chunk-7`, `minutes-357.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-357.pdf |
| `filename` | 9/9 (100%) | minutes-357.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=357 |
| `text` | 9/9 (100%) | asmussen, Flournoy      TO ENTER INTO CLOSED SESSION AT    8:53 P.M.       Page ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=347`

- **Vector count**: 9
- **Sample IDs**: `minutes-347.pdf-chunk-3`, `minutes-347.pdf-chunk-4`, `minutes-347.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-347.pdf |
| `filename` | 9/9 (100%) | minutes-347.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=347 |
| `text` | 9/9 (100%) | E HENRY    COUNTY SHERIFF’S OFFICE.    Moved by Rasmussen, seconded by Hamilton ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=341`

- **Vector count**: 9
- **Sample IDs**: `minutes-341.pdf-chunk-4`, `minutes-341.pdf-chunk-0`, `minutes-341.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-341.pdf |
| `filename` | 9/9 (100%) | minutes-341.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=341 |
| `text` | 9/9 (100%) | econded by Anderson   AYES:  Revolinski, Anderson, Thompson, Rasmussen, Hamilton... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=342`

- **Vector count**: 9
- **Sample IDs**: `minutes-342.pdf-chunk-4`, `minutes-342.pdf-chunk-1`, `minutes-342.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-342.pdf |
| `filename` | 9/9 (100%) | minutes-342.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=342 |
| `text` | 9/9 (100%) | y Flournoy   AYES:  Hamilton, Flournoy, Anderson, Halley, Thompson, Rasmussen   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=386`

- **Vector count**: 9
- **Sample IDs**: `minutes-386.pdf-chunk-6`, `minutes-386.pdf-chunk-1`, `minutes-386.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-386.pdf |
| `filename` | 9/9 (100%) | minutes-386.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=386 |
| `text` | 9/9 (100%) | Anderson, Flournoy, Hamilton, Rasmussen, Thompson, Halley and Revolinski      TO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=399`

- **Vector count**: 9
- **Sample IDs**: `minutes-399.pdf-chunk-0`, `minutes-399.pdf-chunk-2`, `minutes-399.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-399.pdf |
| `filename` | 9/9 (100%) | minutes-399.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=399 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    March 12, 2018    The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=402`

- **Vector count**: 9
- **Sample IDs**: `minutes-402.pdf-chunk-0`, `minutes-402.pdf-chunk-2`, `minutes-402.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-402.pdf |
| `filename` | 9/9 (100%) | minutes-402.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=402 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    April 23, 2018      The Fairfield Cit... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=423`

- **Vector count**: 9
- **Sample IDs**: `minutes-423.pdf-chunk-5`, `minutes-423.pdf-chunk-1`, `minutes-423.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-423.pdf |
| `filename` | 9/9 (100%) | minutes-423.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=423 |
| `text` | 9/9 (100%) | STATEMENT.    Mayor Malloy opened a public hearing on the third and final readin... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=406`

- **Vector count**: 9
- **Sample IDs**: `minutes-406.pdf-chunk-5`, `minutes-406.pdf-chunk-2`, `minutes-406.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-406.pdf |
| `filename` | 9/9 (100%) | minutes-406.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=406 |
| `text` | 9/9 (100%) | t Energy.  There were no written or verbal objections, so the  public hearing wa... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=404`

- **Vector count**: 9
- **Sample IDs**: `minutes-404.pdf-chunk-6`, `minutes-404.pdf-chunk-8`, `minutes-404.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-404.pdf |
| `filename` | 9/9 (100%) | minutes-404.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=404 |
| `text` | 9/9 (100%) | ng and providing for  speed limits on Hwy #1. There were no written or verbal ob... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=436`

- **Vector count**: 9
- **Sample IDs**: `minutes-436.pdf-chunk-3`, `minutes-436.pdf-chunk-1`, `minutes-436.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-436.pdf |
| `filename` | 9/9 (100%) | minutes-436.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=436 |
| `text` | 9/9 (100%) | ENT (PHASE 1).    Mayor Malloy announced this was the time and date set for a pu... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=426`

- **Vector count**: 9
- **Sample IDs**: `minutes-426.pdf-chunk-2`, `minutes-426.pdf-chunk-5`, `minutes-426.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-426.pdf |
| `filename` | 9/9 (100%) | minutes-426.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=426 |
| `text` | 9/9 (100%) | osed.    Moved by Hamilton, seconded by Anderson   AYES:  Hamilton, Anderson, Ga... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=434`

- **Vector count**: 9
- **Sample IDs**: `minutes-434.pdf-chunk-4`, `minutes-434.pdf-chunk-6`, `minutes-434.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-434.pdf |
| `filename` | 9/9 (100%) | minutes-434.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=434 |
| `text` | 9/9 (100%) |  SET A PUBLIC HEARING FOR THE  FISCAL YEAR 2020 BUDGET FOR MONDAY,  MARCH 11 TH ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=429`

- **Vector count**: 9
- **Sample IDs**: `minutes-429.pdf-chunk-4`, `minutes-429.pdf-chunk-5`, `minutes-429.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-429.pdf |
| `filename` | 9/9 (100%) | minutes-429.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=429 |
| `text` | 9/9 (100%) | NO. 3694   AUTHORIZING THE INSTALLATION  OF THREE STREET LIGHTS.    Michael Hall... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=428`

- **Vector count**: 9
- **Sample IDs**: `minutes-428.pdf-chunk-3`, `minutes-428.pdf-chunk-4`, `minutes-428.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-428.pdf |
| `filename` | 9/9 (100%) | minutes-428.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=428 |
| `text` | 9/9 (100%) | L REPORT.   Page 3  Minutes  11/26/18    Moved by Hamilton, seconded by Thompson... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=446`

- **Vector count**: 9
- **Sample IDs**: `minutes-446.pdf-chunk-4`, `minutes-446.pdf-chunk-1`, `minutes-446.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-446.pdf |
| `filename` | 9/9 (100%) | minutes-446.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=446 |
| `text` | 9/9 (100%) | MAIN ST./    HWY 1 CORRIDOR IMPROVEMENTS.    Moved by Rasmussen, seconded by Gan... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=449`

- **Vector count**: 9
- **Sample IDs**: `minutes-449.pdf-chunk-5`, `minutes-449.pdf-chunk-1`, `minutes-449.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-449.pdf |
| `filename` | 9/9 (100%) | minutes-449.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=449 |
| `text` | 9/9 (100%) | FROM THE FIRST TO THE  THIRD READING.    Moved by Anderson, seconded by Gandy   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=482`

- **Vector count**: 9
- **Sample IDs**: `minutes-482.pdf-chunk-8`, `minutes-482.pdf-chunk-3`, `minutes-482.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-482.pdf |
| `filename` | 9/9 (100%) | minutes-482.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=482 |
| `text` | 9/9 (100%) |  Burlington Avenue.    ADJOURNMENT  Moved by Twohill, seconded by Flournoy   AYE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=484`

- **Vector count**: 9
- **Sample IDs**: `minutes-484.pdf-chunk-8`, `minutes-484.pdf-chunk-5`, `minutes-484.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-484.pdf |
| `filename` | 9/9 (100%) | minutes-484.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=484 |
| `text` | 9/9 (100%) | Moved by Twohill, seconded by Ham   AYES:  Twohill, Ham, Anderson Flournoy, Gand... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=475`

- **Vector count**: 9
- **Sample IDs**: `minutes-475.pdf-chunk-1`, `minutes-475.pdf-chunk-6`, `minutes-475.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-475.pdf |
| `filename` | 9/9 (100%) | minutes-475.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=475 |
| `text` | 9/9 (100%) | PROVING  EMPLOYMENT IN THE WATER DEPARTMENT.    TO ACCEPT THE APRIL 27, 2020 ECO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=48`

- **Vector count**: 9
- **Sample IDs**: `minutes-48.pdf-chunk-4`, `minutes-48.pdf-chunk-2`, `minutes-48.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-48.pdf |
| `filename` | 9/9 (100%) | minutes-48.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=48 |
| `text` | 9/9 (100%) | 011.    Moved by Hamilton, seconded by Mottet   AYES:  Hamilton, Mottet, Adam, S... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=474`

- **Vector count**: 9
- **Sample IDs**: `minutes-474.pdf-chunk-2`, `minutes-474.pdf-chunk-5`, `minutes-474.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-474.pdf |
| `filename` | 9/9 (100%) | minutes-474.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=474 |
| `text` | 9/9 (100%) | HE AMOUNT OF $80,949.88.    Moved by Flournoy, seconded by Ham   AYES:  Flournoy... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=477`

- **Vector count**: 9
- **Sample IDs**: `minutes-477.pdf-chunk-4`, `minutes-477.pdf-chunk-3`, `minutes-477.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-477.pdf |
| `filename` | 9/9 (100%) | minutes-477.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=477 |
| `text` | 9/9 (100%) | THE PROPOSAL FROM WASTE   MANAGEMENT FOR STANDARD SOLID   WASTE & RECYCLING SERV... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=490`

- **Vector count**: 9
- **Sample IDs**: `minutes-490.pdf-chunk-2`, `minutes-490.pdf-chunk-1`, `minutes-490.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-490.pdf |
| `filename` | 9/9 (100%) | minutes-490.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=490 |
| `text` | 9/9 (100%) |  request and a meeting will be scheduled with all parties.    PUBLIC FORUM / APP... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=497`

- **Vector count**: 9
- **Sample IDs**: `minutes-497.pdf-chunk-3`, `minutes-497.pdf-chunk-4`, `minutes-497.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-497.pdf |
| `filename` | 9/9 (100%) | minutes-497.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=497 |
| `text` | 9/9 (100%) | ane; Chris Lassota, 1919 Gear Avenue  spoke in favor of masks at the Recreation ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=498`

- **Vector count**: 9
- **Sample IDs**: `minutes-498.pdf-chunk-0`, `minutes-498.pdf-chunk-1`, `minutes-498.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-498.pdf |
| `filename` | 9/9 (100%) | minutes-498.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=498 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    APRIL 12, 2021        The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=645`

- **Vector count**: 9
- **Sample IDs**: `minutes-645.pdf-chunk-0`, `minutes-645.pdf-chunk-5`, `minutes-645.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-645.pdf |
| `filename` | 9/9 (100%) | minutes-645.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=645 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  NOVEMBER 8, 2021    The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=640`

- **Vector count**: 9
- **Sample IDs**: `minutes-640.pdf-chunk-4`, `minutes-640.pdf-chunk-2`, `minutes-640.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-640.pdf |
| `filename` | 9/9 (100%) | minutes-640.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=640 |
| `text` | 9/9 (100%) | DOPT RESOLUTION NO. 3982  APPROVING A TAX ABATEMENT   APPLICATION FOR 804 N 12 T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=657`

- **Vector count**: 9
- **Sample IDs**: `minutes-657.pdf-chunk-3`, `minutes-657.pdf-chunk-1`, `minutes-657.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-657.pdf |
| `filename` | 9/9 (100%) | minutes-657.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=657 |
| `text` | 9/9 (100%) |  TH ,   WITH STREETS BLOCKED OFF BEGINNING THE   EVENING OF FRIDAY, JUNE 10 TH .... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=651`

- **Vector count**: 9
- **Sample IDs**: `minutes-651.pdf-chunk-5`, `minutes-651.pdf-chunk-3`, `minutes-651.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-651.pdf |
| `filename` | 9/9 (100%) | minutes-651.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=651 |
| `text` | 9/9 (100%) |  TILLY, INC. FOR RECONSTRUCT TAXIWAY   Page 4   Minutes  01/24/22    TO T-HANGAR... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=654`

- **Vector count**: 9
- **Sample IDs**: `minutes-654.pdf-chunk-3`, `minutes-654.pdf-chunk-5`, `minutes-654.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-654.pdf |
| `filename` | 9/9 (100%) | minutes-654.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=654 |
| `text` | 9/9 (100%) | ocal Option Sales Tax funds could be used  to fulfill the requests. There were n... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=661`

- **Vector count**: 9
- **Sample IDs**: `minutes-661.pdf-chunk-8`, `minutes-661.pdf-chunk-6`, `minutes-661.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-661.pdf |
| `filename` | 9/9 (100%) | minutes-661.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=661 |
| `text` | 9/9 (100%) |  Franchise Committee and Economic Development Committee Chairs reported  during ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=664`

- **Vector count**: 9
- **Sample IDs**: `minutes-664.pdf-chunk-6`, `minutes-664.pdf-chunk-0`, `minutes-664.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-664.pdf |
| `filename` | 9/9 (100%) | minutes-664.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=664 |
| `text` | 9/9 (100%) | ussen, Twohill, Gandy, Anderson and Ham      TO PASS THROUGH 1 ST  TO 2 ND  READ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=687`

- **Vector count**: 9
- **Sample IDs**: `minutes-687.pdf-chunk-7`, `minutes-687.pdf-chunk-1`, `minutes-687.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-687.pdf |
| `filename` | 9/9 (100%) | minutes-687.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=687 |
| `text` | 9/9 (100%) | wed  several reduction requests with the City Administrator to establish guideli... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=683`

- **Vector count**: 9
- **Sample IDs**: `minutes-683.pdf-chunk-4`, `minutes-683.pdf-chunk-1`, `minutes-683.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-683.pdf |
| `filename` | 9/9 (100%) | minutes-683.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=683 |
| `text` | 9/9 (100%) |  ADOPT RESOLUTION NO. 4177 AUTHORIZING    GRANT APPLICATION(S) FOR THR PURPOSE O... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=686`

- **Vector count**: 9
- **Sample IDs**: `minutes-686.pdf-chunk-7`, `minutes-686.pdf-chunk-8`, `minutes-686.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-686.pdf |
| `filename` | 9/9 (100%) | minutes-686.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=686 |
| `text` | 9/9 (100%) | noy, Ham, Estey, Gandy and Twohill       TO APPROVE A COMMAND STRUCTURE     THRO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=688`

- **Vector count**: 9
- **Sample IDs**: `minutes-688.pdf-chunk-0`, `minutes-688.pdf-chunk-1`, `minutes-688.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-688.pdf |
| `filename` | 9/9 (100%) | minutes-688.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=688 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  August 14, 2023    The Fairfield City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=689`

- **Vector count**: 9
- **Sample IDs**: `minutes-689.pdf-chunk-2`, `minutes-689.pdf-chunk-5`, `minutes-689.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-689.pdf |
| `filename` | 9/9 (100%) | minutes-689.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=689 |
| `text` | 9/9 (100%) | ohill      TO ADOPT RESOLUTION NO. 4199     AUTHORIZING PLACEMENT OF A     STREE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=692`

- **Vector count**: 9
- **Sample IDs**: `minutes-692.pdf-chunk-4`, `minutes-692.pdf-chunk-6`, `minutes-692.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-692.pdf |
| `filename` | 9/9 (100%) | minutes-692.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=692 |
| `text` | 9/9 (100%) | k to them  again for further discussion.  Mayor Boyer then opened a public heari... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=719`

- **Vector count**: 9
- **Sample IDs**: `minutes-719.pdf-chunk-6`, `minutes-719.pdf-chunk-1`, `minutes-719.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-719.pdf |
| `filename` | 9/9 (100%) | minutes-719.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=719 |
| `text` | 9/9 (100%) | OCOLS TO THE PERSONNEL     COMMITTEE.      COMMITTEE & BOARD REPORTS  Property C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=722`

- **Vector count**: 9
- **Sample IDs**: `minutes-722.pdf-chunk-1`, `minutes-722.pdf-chunk-2`, `minutes-722.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-722.pdf |
| `filename` | 9/9 (100%) | minutes-722.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=722 |
| `text` | 9/9 (100%) | ITTEE MINUTES FROM MARCH 20, 2024  AND MAY 24, 2024.      TO APPROVE A LIQUOR LI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=741`

- **Vector count**: 9
- **Sample IDs**: `minutes-741.pdf-chunk-8`, `minutes-741.pdf-chunk-3`, `minutes-741.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-741.pdf |
| `filename` | 9/9 (100%) | minutes-741.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=741 |
| `text` | 9/9 (100%) | looring  project.    City Administrator Doug Reinert announced the IT RFQ was ou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=726`

- **Vector count**: 9
- **Sample IDs**: `minutes-726.pdf-chunk-4`, `minutes-726.pdf-chunk-3`, `minutes-726.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-726.pdf |
| `filename` | 9/9 (100%) | minutes-726.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=726 |
| `text` | 9/9 (100%) | TO THE WAYS    AND MEANS COMMITTEE.    Moved by Estey, seconded by Flournoy   AY... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=751`

- **Vector count**: 9
- **Sample IDs**: `minutes-751.pdf-chunk-3`, `minutes-751.pdf-chunk-6`, `minutes-751.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-751.pdf |
| `filename` | 9/9 (100%) | minutes-751.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=751 |
| `text` | 9/9 (100%) | ton Club Golf Bridge Project;  there were no written or verbal objections, so th... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=749`

- **Vector count**: 9
- **Sample IDs**: `minutes-749.pdf-chunk-2`, `minutes-749.pdf-chunk-3`, `minutes-749.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-749.pdf |
| `filename` | 9/9 (100%) | minutes-749.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=749 |
| `text` | 9/9 (100%) |      TO ADOPT RESOLUTION NO. 4323 ADOPTING    THE 2024 JEFFERSON COUNTY MULTI-  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=756`

- **Vector count**: 9
- **Sample IDs**: `minutes-756.pdf-chunk-5`, `minutes-756.pdf-chunk-8`, `minutes-756.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-756.pdf |
| `filename` | 9/9 (100%) | minutes-756.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=756 |
| `text` | 9/9 (100%) | NT AND   PROCEDURES AND PENALTIES FOR  NUISANCE AND HOUSING SAFETY  ENFORCEMENT.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=763`

- **Vector count**: 9
- **Sample IDs**: `minutes-763.pdf-chunk-2`, `minutes-763.pdf-chunk-4`, `minutes-763.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-763.pdf |
| `filename` | 9/9 (100%) | minutes-763.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=763 |
| `text` | 9/9 (100%) | search done on finding a replacement for Walton Club Golf Cart Bridge project  w... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=766`

- **Vector count**: 9
- **Sample IDs**: `minutes-766.pdf-chunk-1`, `minutes-766.pdf-chunk-7`, `minutes-766.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-766.pdf |
| `filename` | 9/9 (100%) | minutes-766.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=766 |
| `text` | 9/9 (100%) |  AMOUNT OF $1,000,162.03.     PUBLIC FORUM / APPEARANCES  Paul Stokstad returned... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=773`

- **Vector count**: 9
- **Sample IDs**: `minutes-773.pdf-chunk-8`, `minutes-773.pdf-chunk-7`, `minutes-773.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-773.pdf |
| `filename` | 9/9 (100%) | minutes-773.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=773 |
| `text` | 9/9 (100%) |  ADJOURN AT 8:29 P.M.    Submitted by:       Rebekah Loper  City Clerk  |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=768`

- **Vector count**: 9
- **Sample IDs**: `minutes-768.pdf-chunk-6`, `minutes-768.pdf-chunk-3`, `minutes-768.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 9/9 (100%) | minutes-768.pdf |
| `filename` | 9/9 (100%) | minutes-768.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=768 |
| `text` | 9/9 (100%) | t have been dropped; the City received the new DNR permit for the  Walton Golf C... |

### `https://pathfindersrcd.org/what-we-do/community-development/communityresourceguide`

- **Vector count**: 9
- **Sample IDs**: `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-4`, `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-3`, `pathfinders-rcd-guide-aHR0cHM6Ly9wYXRoZmlu-5`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | civic |
| `file` | 9/9 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/what-we-do/community-development/c... |
| `filename` | 9/9 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/what-we-do/community-development/c... |
| `org` | 9/9 (100%) | Pathfinders RC&D |
| `source` | 9/9 (100%) | https://pathfindersrcd.org/what-we-do/community-development/communityresourcegui... |
| `text` | 9/9 (100%) | Public health is the science of protecting and improving the health of people an... |
| `type` | 9/9 (100%) | community_org |

### `https://www.area15rpc.com/single-post/rpcnewsline-spring2025`

- **Vector count**: 8
- **Sample IDs**: `area15-rpc-aHR0cHM6Ly93d3cuYXJl-4`, `area15-rpc-aHR0cHM6Ly93d3cuYXJl-6`, `area15-rpc-aHR0cHM6Ly93d3cuYXJl-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | regional_planning |
| `file` | 8/8 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/single-post/rpc... |
| `filename` | 8/8 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/single-post/rpc... |
| `org` | 8/8 (100%) | Area 15 Regional Planning Commission |
| `source` | 8/8 (100%) | https://www.area15rpc.com/single-post/rpcnewsline-spring2025 |
| `text` | 8/8 (100%) | Stay tuned for more information as we approach the survey launch this summer. We... |
| `type` | 8/8 (100%) | community_org |

### `https://www.youtube.com/watch?v=7ATYDSiJFN0`

- **Vector count**: 8
- **Sample IDs**: `fc-council-7ATYDSiJFN0-7`, `fc-council-7ATYDSiJFN0-2`, `fc-council-7ATYDSiJFN0-0`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — Fairfield City Council 2-24-14 |
| `filename` | 8/8 (100%) | City Council Meeting — null — Fairfield City Council 2-24-14 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=7ATYDSiJFN0 |
| `text` | 8/8 (100%) | you remember that one that did deal with shrubs or other places in another ordin... |
| `title` | 8/8 (100%) | Fairfield City Council 2-24-14 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=A379Kn1G1UE`

- **Vector count**: 8
- **Sample IDs**: `fc-council-A379Kn1G1UE-1`, `fc-council-A379Kn1G1UE-4`, `fc-council-A379Kn1G1UE-5`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — COVID19 - City of Fairfield Information Update 4-2... |
| `filename` | 8/8 (100%) | City Council Meeting — null — COVID19 - City of Fairfield Information Update 4-2... |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=A379Kn1G1UE |
| `text` | 8/8 (100%) | Tran the county attorney emergency management when schools were closed I decided... |
| `title` | 8/8 (100%) | COVID19 - City of Fairfield Information Update 4-2-20 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BvLcsmwBpNM`

- **Vector count**: 8
- **Sample IDs**: `fc-council-BvLcsmwBpNM-1`, `fc-council-BvLcsmwBpNM-2`, `fc-council-BvLcsmwBpNM-0`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 10-23-17 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 10-23-17 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=BvLcsmwBpNM |
| `text` | 8/8 (100%) | fp that will include containers and at that time the council can vote yes or no ... |
| `title` | 8/8 (100%) | City Council 10-23-17 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=DhhyS-Qiwrw`

- **Vector count**: 8
- **Sample IDs**: `fc-council-DhhyS-Qiwrw-5`, `fc-council-DhhyS-Qiwrw-0`, `fc-council-DhhyS-Qiwrw-3`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — Fairfield Town Hall \| Water and Sewer \| 9-26-22 |
| `filename` | 8/8 (100%) | City Council Meeting — null — Fairfield Town Hall \| Water and Sewer \| 9-26-22 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=DhhyS-Qiwrw |
| `text` | 8/8 (100%) | wow yeah so if you like to be underwater scuba diving but those guys also come i... |
| `title` | 8/8 (100%) | Fairfield Town Hall \| Water and Sewer \| 9-26-22 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=H1o85LtFsWs`

- **Vector count**: 8
- **Sample IDs**: `fc-council-H1o85LtFsWs-7`, `fc-council-H1o85LtFsWs-1`, `fc-council-H1o85LtFsWs-2`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — Fairfield City Council 11-25-13 |
| `filename` | 8/8 (100%) | City Council Meeting — null — Fairfield City Council 11-25-13 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=H1o85LtFsWs |
| `text` | 8/8 (100%) | the way we got those projects accomplished was by having what I would call an in... |
| `title` | 8/8 (100%) | Fairfield City Council 11-25-13 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=FyDJRaTBlf4`

- **Vector count**: 8
- **Sample IDs**: `fc-council-FyDJRaTBlf4-3`, `fc-council-FyDJRaTBlf4-6`, `fc-council-FyDJRaTBlf4-0`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 5-9-22 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 5-9-22 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=FyDJRaTBlf4 |
| `text` | 8/8 (100%) | sorry move we approve the the physician can't we propose street movement project... |
| `title` | 8/8 (100%) | City Council 5-9-22 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QxtNuR4x9cM`

- **Vector count**: 8
- **Sample IDs**: `fc-council-QxtNuR4x9cM-3`, `fc-council-QxtNuR4x9cM-1`, `fc-council-QxtNuR4x9cM-5`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council/Farewell Ed Malloy 12-16-19 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council/Farewell Ed Malloy 12-16-19 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=QxtNuR4x9cM |
| `text` | 8/8 (100%) | m. their attained a motion to set the public hearing so well by Thompson second ... |
| `title` | 8/8 (100%) | City Council/Farewell Ed Malloy 12-16-19 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QwPf-owNIWM`

- **Vector count**: 8
- **Sample IDs**: `fc-council-QwPf-owNIWM-3`, `fc-council-QwPf-owNIWM-4`, `fc-council-QwPf-owNIWM-6`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 3-9-15 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-9-15 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=QwPf-owNIWM |
| `text` | 8/8 (100%) | and then that's a Sunday right that is a Sunday I believe April 5th yeah and the... |
| `title` | 8/8 (100%) | City Council 3-9-15 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=UaSigXWUrzs`

- **Vector count**: 8
- **Sample IDs**: `fc-council-UaSigXWUrzs-0`, `fc-council-UaSigXWUrzs-6`, `fc-council-UaSigXWUrzs-5`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 11.25.24 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 11.25.24 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=UaSigXWUrzs |
| `text` | 8/8 (100%) | 24  and I call the meeting to order Rebecca we please call the RO ham here EST y... |
| `title` | 8/8 (100%) | City Council 11.25.24 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=UHI8sH6eh0c`

- **Vector count**: 8
- **Sample IDs**: `fc-council-UHI8sH6eh0c-3`, `fc-council-UHI8sH6eh0c-1`, `fc-council-UHI8sH6eh0c-7`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 3-23-15 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-23-15 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=UHI8sH6eh0c |
| `text` | 8/8 (100%) | M finish blocking off Hempstead and the locked Court around the courthouse Brigg... |
| `title` | 8/8 (100%) | City Council 3-23-15 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YP0h3Pjzamk`

- **Vector count**: 8
- **Sample IDs**: `fc-council-YP0h3Pjzamk-3`, `fc-council-YP0h3Pjzamk-1`, `fc-council-YP0h3Pjzamk-4`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 7-10-23 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 7-10-23 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=YP0h3Pjzamk |
| `text` | 8/8 (100%) | yep and they're not there's not going to be a hunt going after people that have ... |
| `title` | 8/8 (100%) | City Council 7-10-23 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=XI2vpNS6Flo`

- **Vector count**: 8
- **Sample IDs**: `fc-council-XI2vpNS6Flo-5`, `fc-council-XI2vpNS6Flo-0`, `fc-council-XI2vpNS6Flo-6`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 11-23-15 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 11-23-15 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=XI2vpNS6Flo |
| `text` | 8/8 (100%) | 25 change in rate would over become three percent annual cost inflation and keep... |
| `title` | 8/8 (100%) | City Council 11-23-15 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cllecgu819A`

- **Vector count**: 8
- **Sample IDs**: `fc-council-cllecgu819A-6`, `fc-council-cllecgu819A-5`, `fc-council-cllecgu819A-2`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 12-13-21 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 12-13-21 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=cllecgu819A |
| `text` | 8/8 (100%) | oh that's right you're going to be going immediately i mean i could do it by tel... |
| `title` | 8/8 (100%) | City Council 12-13-21 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=dqS0amlURMc`

- **Vector count**: 8
- **Sample IDs**: `fc-council-dqS0amlURMc-2`, `fc-council-dqS0amlURMc-4`, `fc-council-dqS0amlURMc-7`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 3-11-24 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-11-24 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=dqS0amlURMc |
| `text` | 8/8 (100%) | m. this is uh Martin Brett's piece of the uh Reef grained feed area so that's wh... |
| `title` | 8/8 (100%) | City Council 3-11-24 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=kfPGCXxh_WU`

- **Vector count**: 8
- **Sample IDs**: `fc-council-kfPGCXxh_WU-2`, `fc-council-kfPGCXxh_WU-7`, `fc-council-kfPGCXxh_WU-5`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 5-8-17 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 5-8-17 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=kfPGCXxh_WU |
| `text` | 8/8 (100%) | on Friday May 12 of 2017 Mike would you inform us as to what this would be neces... |
| `title` | 8/8 (100%) | City Council 5-8-17 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=iYL4zyAOL38`

- **Vector count**: 8
- **Sample IDs**: `fc-council-iYL4zyAOL38-6`, `fc-council-iYL4zyAOL38-1`, `fc-council-iYL4zyAOL38-4`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 9-8-14 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 9-8-14 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=iYL4zyAOL38 |
| `text` | 8/8 (100%) | 27 about no mber you know you might have it mid mid October but you know at this... |
| `title` | 8/8 (100%) | City Council 9-8-14 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=lX-anZZiAqY`

- **Vector count**: 8
- **Sample IDs**: `fc-council-lX-anZZiAqY-0`, `fc-council-lX-anZZiAqY-5`, `fc-council-lX-anZZiAqY-7`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — FFCC 3-26-12 |
| `filename` | 8/8 (100%) | City Council Meeting — null — FFCC 3-26-12 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=lX-anZZiAqY |
| `text` | 8/8 (100%) | Fairfield City Council Meeting — date unknown Title: FFCC 3-26-12  that happened... |
| `title` | 8/8 (100%) | FFCC 3-26-12 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=n_DpK5UrL6I`

- **Vector count**: 8
- **Sample IDs**: `fc-council-n_DpK5UrL6I-6`, `fc-council-n_DpK5UrL6I-3`, `fc-council-n_DpK5UrL6I-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 3-23-20 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-23-20 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=n_DpK5UrL6I |
| `text` | 8/8 (100%) | slow clay I've seen coming in with records before you know inches thick on one p... |
| `title` | 8/8 (100%) | City Council 3-23-20 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qs6st9cAt1M`

- **Vector count**: 8
- **Sample IDs**: `fc-council-qs6st9cAt1M-4`, `fc-council-qs6st9cAt1M-3`, `fc-council-qs6st9cAt1M-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council \| 2025 Budget Public Presentation 3-2... |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council \| 2025 Budget Public Presentation 3-2... |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=qs6st9cAt1M |
| `text` | 8/8 (100%) | 1 million gallons a day which feeds all of Fairfield Lockridge Jefferson County ... |
| `title` | 8/8 (100%) | City Council \| 2025 Budget Public Presentation 3-26-24 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=t1ThvsffkgU`

- **Vector count**: 8
- **Sample IDs**: `fc-council-t1ThvsffkgU-6`, `fc-council-t1ThvsffkgU-3`, `fc-council-t1ThvsffkgU-7`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 3-9-20 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-9-20 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=t1ThvsffkgU |
| `text` | 8/8 (100%) | 1 million budgeted for those in your fiscal year 21 with five point six million ... |
| `title` | 8/8 (100%) | City Council 3-9-20 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uIEoXyCFtzs`

- **Vector count**: 8
- **Sample IDs**: `fc-council-uIEoXyCFtzs-7`, `fc-council-uIEoXyCFtzs-3`, `fc-council-uIEoXyCFtzs-2`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 10-12-20 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 10-12-20 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=uIEoXyCFtzs |
| `text` | 8/8 (100%) | m as possible we will get out the announcement of a snow emergency that gives th... |
| `title` | 8/8 (100%) | City Council 10-12-20 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=y9pVOIwpLPs`

- **Vector count**: 8
- **Sample IDs**: `fc-council-y9pVOIwpLPs-0`, `fc-council-y9pVOIwpLPs-5`, `fc-council-y9pVOIwpLPs-2`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | City Council Meeting — null — City Council 6-12-17 |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 6-12-17 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=y9pVOIwpLPs |
| `text` | 8/8 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 6-12-17  good ... |
| `title` | 8/8 (100%) | City Council 6-12-17 |
| `type` | 8/8 (100%) | council_meeting |

### `https://jeffersoncounty.iowa.gov/barns/news.htm`

- **Vector count**: 8
- **Sample IDs**: `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-2`, `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-1`, `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-7`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `file` | 8/8 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/barns/news.h... |
| `filename` | 8/8 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/barns/news.h... |
| `org` | 8/8 (100%) | Jefferson County Iowa Government |
| `source` | 8/8 (100%) | https://jeffersoncounty.iowa.gov/barns/news.htm |
| `text` | 8/8 (100%) | Mare Barn Lettering - Oct 27, 2018 . John Stimson painting the letters on the no... |
| `type` | 8/8 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=138`

- **Vector count**: 8
- **Sample IDs**: `minutes-138.pdf-chunk-5`, `minutes-138.pdf-chunk-0`, `minutes-138.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-138.pdf |
| `filename` | 8/8 (100%) | minutes-138.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=138 |
| `text` | 8/8 (100%) | he public hearing and asked the wish of the Council.               Minutes  4/8/... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=161`

- **Vector count**: 8
- **Sample IDs**: `minutes-161.pdf-chunk-1`, `minutes-161.pdf-chunk-4`, `minutes-161.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-161.pdf |
| `filename` | 8/8 (100%) | minutes-161.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=161 |
| `text` | 8/8 (100%) | ammes, Hamilton, Ledger-Kalen, Revolinski, Halley, Rasmussen      TO APPROVE A C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=146`

- **Vector count**: 8
- **Sample IDs**: `minutes-146.pdf-chunk-0`, `minutes-146.pdf-chunk-1`, `minutes-146.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-146.pdf |
| `filename` | 8/8 (100%) | minutes-146.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=146 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    May 28, 2013      The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=221`

- **Vector count**: 8
- **Sample IDs**: `minutes-221.pdf-chunk-1`, `minutes-221.pdf-chunk-6`, `minutes-221.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-221.pdf |
| `filename` | 8/8 (100%) | minutes-221.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=221 |
| `text` | 8/8 (100%) | HUT.      APPROVING A LIQUOR LICENSE FOR THE    HY-VEE.      APPROVING A LIQUOR ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=280`

- **Vector count**: 8
- **Sample IDs**: `minutes-280.pdf-chunk-7`, `minutes-280.pdf-chunk-6`, `minutes-280.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-280.pdf |
| `filename` | 8/8 (100%) | minutes-280.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=280 |
| `text` | 8/8 (100%) | r  City Clerk                  |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=292`

- **Vector count**: 8
- **Sample IDs**: `minutes-292.pdf-chunk-2`, `minutes-292.pdf-chunk-0`, `minutes-292.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-292.pdf |
| `filename` | 8/8 (100%) | minutes-292.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=292 |
| `text` | 8/8 (100%) |  rent or sell it in  the next 6 months.  The Council asked Bachar if he would wo... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=273`

- **Vector count**: 8
- **Sample IDs**: `minutes-273.pdf-chunk-6`, `minutes-273.pdf-chunk-7`, `minutes-273.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-273.pdf |
| `filename` | 8/8 (100%) | minutes-273.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=273 |
| `text` | 8/8 (100%) | mmes, seconded by Flournoy   AYES:  Hammes, Flournoy, Halley, Hamilton      TO P... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=314`

- **Vector count**: 8
- **Sample IDs**: `minutes-314.pdf-chunk-0`, `minutes-314.pdf-chunk-4`, `minutes-314.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-314.pdf |
| `filename` | 8/8 (100%) | minutes-314.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=314 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    April 25, 2016          The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=323`

- **Vector count**: 8
- **Sample IDs**: `minutes-323.pdf-chunk-2`, `minutes-323.pdf-chunk-6`, `minutes-323.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-323.pdf |
| `filename` | 8/8 (100%) | minutes-323.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=323 |
| `text` | 8/8 (100%) | evolinski   AYES:  Anderson, Revolinski, Rasmussen, Halley, Flournoy, Hamilton, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=346`

- **Vector count**: 8
- **Sample IDs**: `minutes-346.pdf-chunk-5`, `minutes-346.pdf-chunk-7`, `minutes-346.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-346.pdf |
| `filename` | 8/8 (100%) | minutes-346.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=346 |
| `text` | 8/8 (100%) | tract and estimate of cost of bid package No. 2, equalization basin  improvement... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=355`

- **Vector count**: 8
- **Sample IDs**: `minutes-355.pdf-chunk-1`, `minutes-355.pdf-chunk-5`, `minutes-355.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-355.pdf |
| `filename` | 8/8 (100%) | minutes-355.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=355 |
| `text` | 8/8 (100%) | IDING FULL    TIME EMPLOYMENT IN THE STREET DEPARTMENT.      TO APPROVE RESOLUTI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=359`

- **Vector count**: 8
- **Sample IDs**: `minutes-359.pdf-chunk-7`, `minutes-359.pdf-chunk-3`, `minutes-359.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-359.pdf |
| `filename` | 8/8 (100%) | minutes-359.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=359 |
| `text` | 8/8 (100%) |  seconded by Thompson   AYES:  Flournoy, Thompson, Hamilton, Halley, Anderson, R... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=360`

- **Vector count**: 8
- **Sample IDs**: `minutes-360.pdf-chunk-3`, `minutes-360.pdf-chunk-1`, `minutes-360.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-360.pdf |
| `filename` | 8/8 (100%) | minutes-360.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=360 |
| `text` | 8/8 (100%) | ughan, stated he was only asking permission to conduct 2 controlled burnings eac... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=365`

- **Vector count**: 8
- **Sample IDs**: `minutes-365.pdf-chunk-6`, `minutes-365.pdf-chunk-4`, `minutes-365.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-365.pdf |
| `filename` | 8/8 (100%) | minutes-365.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=365 |
| `text` | 8/8 (100%) | GAN    STREET FROM BROADWAY AVENUE TO HEMPSTEAD    AVENUE.    Moved by Anderson,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=371`

- **Vector count**: 8
- **Sample IDs**: `minutes-371.pdf-chunk-1`, `minutes-371.pdf-chunk-7`, `minutes-371.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-371.pdf |
| `filename` | 8/8 (100%) | minutes-371.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=371 |
| `text` | 8/8 (100%) | 3507 APPROVING    ANNUAL CIGARETTE LICENSES.      TO ACCEPT THE MAY, 2017 FINANC... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=396`

- **Vector count**: 8
- **Sample IDs**: `minutes-396.pdf-chunk-4`, `minutes-396.pdf-chunk-3`, `minutes-396.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-396.pdf |
| `filename` | 8/8 (100%) | minutes-396.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=396 |
| `text` | 8/8 (100%) |  CHICAGO   HOUSING PROJECT.    Moved by Anderson, seconded by Hamilton   AYES: A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=408`

- **Vector count**: 8
- **Sample IDs**: `minutes-408.pdf-chunk-5`, `minutes-408.pdf-chunk-3`, `minutes-408.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-408.pdf |
| `filename` | 8/8 (100%) | minutes-408.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=408 |
| `text` | 8/8 (100%) | Committee Chairperson Thompson said the Committee had met previous to the Counci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=437`

- **Vector count**: 8
- **Sample IDs**: `minutes-437.pdf-chunk-0`, `minutes-437.pdf-chunk-7`, `minutes-437.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-437.pdf |
| `filename` | 8/8 (100%) | minutes-437.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=437 |
| `text` | 8/8 (100%) |    MINUTES OF THE FAIRFIELD CITY COUNCIL    April 08, 2019    The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=440`

- **Vector count**: 8
- **Sample IDs**: `minutes-440.pdf-chunk-3`, `minutes-440.pdf-chunk-5`, `minutes-440.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-440.pdf |
| `filename` | 8/8 (100%) | minutes-440.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=440 |
| `text` | 8/8 (100%) | 729    ENTERING INTO AN AGREEMENT (2020-TS-003)   Page 3  Minutes  05/13/19    W... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=468`

- **Vector count**: 8
- **Sample IDs**: `minutes-468.pdf-chunk-3`, `minutes-468.pdf-chunk-6`, `minutes-468.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-468.pdf |
| `filename` | 8/8 (100%) | minutes-468.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=468 |
| `text` | 8/8 (100%) | ATE OF IOWA, CITY OF FAIRFIELD, CONTY OF   JEFFERSON, FAIRFIELD COMMUNITY SCHOOL... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=492`

- **Vector count**: 8
- **Sample IDs**: `minutes-492.pdf-chunk-0`, `minutes-492.pdf-chunk-7`, `minutes-492.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-492.pdf |
| `filename` | 8/8 (100%) | minutes-492.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=492 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    January 11, 2021        The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=493`

- **Vector count**: 8
- **Sample IDs**: `minutes-493.pdf-chunk-1`, `minutes-493.pdf-chunk-3`, `minutes-493.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-493.pdf |
| `filename` | 8/8 (100%) | minutes-493.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=493 |
| `text` | 8/8 (100%) | with the  Property Committee for further discussion.    Moved by Flournoy, secon... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=54`

- **Vector count**: 8
- **Sample IDs**: `minutes-54.pdf-chunk-0`, `minutes-54.pdf-chunk-1`, `minutes-54.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-54.pdf |
| `filename` | 8/8 (100%) | minutes-54.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=54 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL MEETING    June 13, 2011        The Fair... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=57`

- **Vector count**: 8
- **Sample IDs**: `minutes-57.pdf-chunk-4`, `minutes-57.pdf-chunk-5`, `minutes-57.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-57.pdf |
| `filename` | 8/8 (100%) | minutes-57.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=57 |
| `text` | 8/8 (100%) | ee and one-half years into this study.    Daryn Hamilton stated he doesn’t think... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=635`

- **Vector count**: 8
- **Sample IDs**: `minutes-635.pdf-chunk-5`, `minutes-635.pdf-chunk-3`, `minutes-635.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-635.pdf |
| `filename` | 8/8 (100%) | minutes-635.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=635 |
| `text` | 8/8 (100%) | n      TO ALLOW CITY STAFF TO NEGOTIATE  WITH JEFFERSON COUNTY RURAL    WATER RE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=639`

- **Vector count**: 8
- **Sample IDs**: `minutes-639.pdf-chunk-4`, `minutes-639.pdf-chunk-6`, `minutes-639.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-639.pdf |
| `filename` | 8/8 (100%) | minutes-639.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=639 |
| `text` | 8/8 (100%) | d by Gandy, seconded by Flournoy   AYES:  Gandy, Flournoy, Halley, Ham, Anderson... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=656`

- **Vector count**: 8
- **Sample IDs**: `minutes-656.pdf-chunk-6`, `minutes-656.pdf-chunk-1`, `minutes-656.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-656.pdf |
| `filename` | 8/8 (100%) | minutes-656.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=656 |
| `text` | 8/8 (100%) | t for April 23 rd  and requested the time  change to 8:30 AM to 11:30 AM.    CIT... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=663`

- **Vector count**: 8
- **Sample IDs**: `minutes-663.pdf-chunk-1`, `minutes-663.pdf-chunk-7`, `minutes-663.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-663.pdf |
| `filename` | 8/8 (100%) | minutes-663.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=663 |
| `text` | 8/8 (100%) |  IN THE POLICE DEPARTMENT.    TO APPROVE A LIQUOR LICENSE FOR   SOMM WINES.    T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=667`

- **Vector count**: 8
- **Sample IDs**: `minutes-667.pdf-chunk-6`, `minutes-667.pdf-chunk-4`, `minutes-667.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-667.pdf |
| `filename` | 8/8 (100%) | minutes-667.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=667 |
| `text` | 8/8 (100%) | ittee who had met on  a proposal given by United Health Care.  Park & Recreation... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=668`

- **Vector count**: 8
- **Sample IDs**: `minutes-668.pdf-chunk-3`, `minutes-668.pdf-chunk-2`, `minutes-668.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-668.pdf |
| `filename` | 8/8 (100%) | minutes-668.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=668 |
| `text` | 8/8 (100%) | am and Anderson      TO ACCEPT IOWA STATE BANK’S BID OF A  4.1% RATE CD FOR THE ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=693`

- **Vector count**: 8
- **Sample IDs**: `minutes-693.pdf-chunk-0`, `minutes-693.pdf-chunk-6`, `minutes-693.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-693.pdf |
| `filename` | 8/8 (100%) | minutes-693.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=693 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  October 23, 2023    The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=715`

- **Vector count**: 8
- **Sample IDs**: `minutes-715.pdf-chunk-6`, `minutes-715.pdf-chunk-5`, `minutes-715.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-715.pdf |
| `filename` | 8/8 (100%) | minutes-715.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=715 |
| `text` | 8/8 (100%) | he Committee had not made any recommendation regarding the  Airport Management C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=724`

- **Vector count**: 8
- **Sample IDs**: `minutes-724.pdf-chunk-1`, `minutes-724.pdf-chunk-5`, `minutes-724.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-724.pdf |
| `filename` | 8/8 (100%) | minutes-724.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=724 |
| `text` | 8/8 (100%) | E A LIQUOR LICENSE FOR   THE WALTON CLUB.    TO APPROVE NOTE PAYING AGENT FEES  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=748`

- **Vector count**: 8
- **Sample IDs**: `minutes-748.pdf-chunk-0`, `minutes-748.pdf-chunk-4`, `minutes-748.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-748.pdf |
| `filename` | 8/8 (100%) | minutes-748.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=748 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  JANUARY 27, 2025    The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=760`

- **Vector count**: 8
- **Sample IDs**: `minutes-760.pdf-chunk-5`, `minutes-760.pdf-chunk-7`, `minutes-760.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-760.pdf |
| `filename` | 8/8 (100%) | minutes-760.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=760 |
| `text` | 8/8 (100%) | s; City Engineer / Public Works Director Carlson explained  that pertains to rig... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=762`

- **Vector count**: 8
- **Sample IDs**: `minutes-762.pdf-chunk-4`, `minutes-762.pdf-chunk-0`, `minutes-762.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-762.pdf |
| `filename` | 8/8 (100%) | minutes-762.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=762 |
| `text` | 8/8 (100%) | GH THE SECOND READING   OF ORDINANCE NO. 1269 REZONING NORTH  CAMPUS RIDGE TO PL... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=767`

- **Vector count**: 8
- **Sample IDs**: `minutes-767.pdf-chunk-7`, `minutes-767.pdf-chunk-4`, `minutes-767.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-767.pdf |
| `filename` | 8/8 (100%) | minutes-767.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=767 |
| `text` | 8/8 (100%) | ed session  expectations and gave an update on the 2 nd  street fence issue.    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=769`

- **Vector count**: 8
- **Sample IDs**: `minutes-769.pdf-chunk-1`, `minutes-769.pdf-chunk-5`, `minutes-769.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-769.pdf |
| `filename` | 8/8 (100%) | minutes-769.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=769 |
| `text` | 8/8 (100%) | TOBER 21, 2025.    TO ADOPT RESOLUTION NO. 4407 APPROVING  EMPLOYMENT IN THE PAR... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=99`

- **Vector count**: 8
- **Sample IDs**: `minutes-99.pdf-chunk-5`, `minutes-99.pdf-chunk-0`, `minutes-99.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 8/8 (100%) | minutes-99.pdf |
| `filename` | 8/8 (100%) | minutes-99.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=99 |
| `text` | 8/8 (100%) |  seconded by Hamilton   AYES:  Halley, Hamilton, Silvers, Rasmussen, Revolinski,... |

### `Fairfield Cares`

- **Vector count**: 7
- **Sample IDs**: `FairfieldCaresResurce.pdf-chunk-3`, `FairfieldCaresResurce.pdf-chunk-1`, `FairfieldCaresResurce.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | FairfieldCaresResurce.pdf |
| `filename` | 7/7 (100%) | FairfieldCaresResurce.pdf |
| `source` | 7/7 (100%) | Fairfield Cares |
| `text` | 7/7 (100%) | .  505-320-5719.    Diabetes Support Group.  October 14, November 18, December 9... |
| `type` | 7/7 (100%) | community_resource |

### `https://www.youtube.com/watch?v=4qwrU5Zg_CI`

- **Vector count**: 7
- **Sample IDs**: `fc-council-4qwrU5Zg_CI-1`, `fc-council-4qwrU5Zg_CI-6`, `fc-council-4qwrU5Zg_CI-2`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 5-29-18 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 5-29-18 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=4qwrU5Zg_CI |
| `text` | 7/7 (100%) | Larabee's helping out here to want to do movies in Central Park the dates that w... |
| `title` | 7/7 (100%) | City Council 5-29-18 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=AMjdSh8oLyM`

- **Vector count**: 7
- **Sample IDs**: `fc-council-AMjdSh8oLyM-1`, `fc-council-AMjdSh8oLyM-4`, `fc-council-AMjdSh8oLyM-0`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 6-22-20 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 6-22-20 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=AMjdSh8oLyM |
| `text` | 7/7 (100%) | 3 percent this year for the first increase and then three percent three and a qu... |
| `title` | 7/7 (100%) | City Council 6-22-20 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GzJduwB8Vhw`

- **Vector count**: 7
- **Sample IDs**: `fc-council-GzJduwB8Vhw-6`, `fc-council-GzJduwB8Vhw-3`, `fc-council-GzJduwB8Vhw-1`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 5-13-19 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 5-13-19 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=GzJduwB8Vhw |
| `text` | 7/7 (100%) | m. at City Hall public hearing on June 10th at 7 p. m. our first June meeting so... |
| `title` | 7/7 (100%) | City Council 5-13-19 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=HBwjUe0Y3pA`

- **Vector count**: 7
- **Sample IDs**: `fc-council-HBwjUe0Y3pA-4`, `fc-council-HBwjUe0Y3pA-3`, `fc-council-HBwjUe0Y3pA-1`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 10-23-23 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 10-23-23 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=HBwjUe0Y3pA |
| `text` | 7/7 (100%) | 10 Redline version which is a link link to a document next to it it reads third ... |
| `title` | 7/7 (100%) | City Council 10-23-23 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=JMboHDbaX1E`

- **Vector count**: 7
- **Sample IDs**: `fc-council-JMboHDbaX1E-2`, `fc-council-JMboHDbaX1E-6`, `fc-council-JMboHDbaX1E-3`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 7-22-19 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 7-22-19 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=JMboHDbaX1E |
| `text` | 7/7 (100%) | it ends at four yeah yeah if that's okay yep i'm gonna just say noon to five to ... |
| `title` | 7/7 (100%) | City Council 7-22-19 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=MpAv7lNS2OM`

- **Vector count**: 7
- **Sample IDs**: `fc-council-MpAv7lNS2OM-3`, `fc-council-MpAv7lNS2OM-5`, `fc-council-MpAv7lNS2OM-6`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 3... |
| `filename` | 7/7 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 3... |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=MpAv7lNS2OM |
| `text` | 7/7 (100%) | so moved uh moved by esting Gandy uh any discussion all in favor oh go to the ca... |
| `title` | 7/7 (100%) | City of Fairfield \| Study Session & City Council 3.10.25 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Oogz4Mjnplg`

- **Vector count**: 7
- **Sample IDs**: `fc-council-Oogz4Mjnplg-4`, `fc-council-Oogz4Mjnplg-0`, `fc-council-Oogz4Mjnplg-3`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 7-10-17 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 7-10-17 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=Oogz4Mjnplg |
| `text` | 7/7 (100%) | Marcy would be here but Mike this is essentially one that I know we've looked at... |
| `title` | 7/7 (100%) | City Council 7-10-17 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Rr37NejSLwk`

- **Vector count**: 7
- **Sample IDs**: `fc-council-Rr37NejSLwk-3`, `fc-council-Rr37NejSLwk-5`, `fc-council-Rr37NejSLwk-1`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 8-14-17 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 8-14-17 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=Rr37NejSLwk |
| `text` | 7/7 (100%) | mess really brought it loosely is here tonight to answer questions brought it be... |
| `title` | 7/7 (100%) | City Council 8-14-17 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QCB29AVEOuI`

- **Vector count**: 7
- **Sample IDs**: `fc-council-QCB29AVEOuI-6`, `fc-council-QCB29AVEOuI-5`, `fc-council-QCB29AVEOuI-0`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — 4-27-15 City Council Meeting |
| `filename` | 7/7 (100%) | City Council Meeting — null — 4-27-15 City Council Meeting |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=QCB29AVEOuI |
| `text` | 7/7 (100%) | um Mike and I discussed it and did a little research on what type of income we h... |
| `title` | 7/7 (100%) | 4-27-15 City Council Meeting |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_94swjxHxQ4`

- **Vector count**: 7
- **Sample IDs**: `fc-council-_94swjxHxQ4-4`, `fc-council-_94swjxHxQ4-2`, `fc-council-_94swjxHxQ4-3`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 10.28.24 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 10.28.24 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=_94swjxHxQ4 |
| `text` | 7/7 (100%) | com event website where the Huffman are advertising the ho ho ho holiday event y... |
| `title` | 7/7 (100%) | City Council 10.28.24 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=baNOQYMEh7s`

- **Vector count**: 7
- **Sample IDs**: `fc-council-baNOQYMEh7s-3`, `fc-council-baNOQYMEh7s-6`, `fc-council-baNOQYMEh7s-5`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 2-24-20 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 2-24-20 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=baNOQYMEh7s |
| `text` | 7/7 (100%) | 1 million dollar financing package the reason this is an amendment rather than a... |
| `title` | 7/7 (100%) | City Council 2-24-20 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=bg4KwH1EPJU`

- **Vector count**: 7
- **Sample IDs**: `fc-council-bg4KwH1EPJU-5`, `fc-council-bg4KwH1EPJU-1`, `fc-council-bg4KwH1EPJU-2`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 4-11-22 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 4-11-22 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=bg4KwH1EPJU |
| `text` | 7/7 (100%) | this is a 60 i would move approval to submit the application all right thank you... |
| `title` | 7/7 (100%) | City Council 4-11-22 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=g1aBEl872z0`

- **Vector count**: 7
- **Sample IDs**: `fc-council-g1aBEl872z0-3`, `fc-council-g1aBEl872z0-1`, `fc-council-g1aBEl872z0-0`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 12-17-18 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 12-17-18 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=g1aBEl872z0 |
| `text` | 7/7 (100%) | mayor this this was a kind of a strange procedure all around I've leaned on the ... |
| `title` | 7/7 (100%) | City Council 12-17-18 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ytvURDl4X8k`

- **Vector count**: 7
- **Sample IDs**: `fc-council-ytvURDl4X8k-1`, `fc-council-ytvURDl4X8k-6`, `fc-council-ytvURDl4X8k-4`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `file` | 7/7 (100%) | City Council Meeting — null — City Council 7-12-21 |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 7-12-21 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=ytvURDl4X8k |
| `text` | 7/7 (100%) | 71 for our pumper truck loan payment jones contracting corporation for 96 000 28... |
| `title` | 7/7 (100%) | City Council 7-12-21 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.icon-art.org/The%20Hudson%20Collection.htm`

- **Vector count**: 7
- **Sample IDs**: `icon-aHR0cHM6Ly93d3cuaWNv-8`, `icon-aHR0cHM6Ly93d3cuaWNv-5`, `icon-aHR0cHM6Ly93d3cuaWNv-6`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | arts |
| `file` | 7/7 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/The%20Hudson%20Collectio... |
| `filename` | 7/7 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/The%20Hudson%20Collectio... |
| `org` | 7/7 (100%) | ICON — Iowa Contemporary Art |
| `source` | 7/7 (100%) | https://www.icon-art.org/The%20Hudson%20Collection.htm |
| `text` | 7/7 (100%) | , to assemble the collection of 71 Shiva Linga paintings that now form the Hudso... |
| `type` | 7/7 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=110`

- **Vector count**: 7
- **Sample IDs**: `minutes-110.pdf-chunk-0`, `minutes-110.pdf-chunk-4`, `minutes-110.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-110.pdf |
| `filename` | 7/7 (100%) | minutes-110.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=110 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFFIELD CITY COUNCIL  July 23, 2012      The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=113`

- **Vector count**: 7
- **Sample IDs**: `minutes-113.pdf-chunk-1`, `minutes-113.pdf-chunk-6`, `minutes-113.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-113.pdf |
| `filename` | 7/7 (100%) | minutes-113.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=113 |
| `text` | 7/7 (100%) | es   AYES:  Boyer, Hammes, Silvers, Revolinski, Rasmussen, Halley, Hamilton     ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=163`

- **Vector count**: 7
- **Sample IDs**: `minutes-163.pdf-chunk-0`, `minutes-163.pdf-chunk-6`, `minutes-163.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-163.pdf |
| `filename` | 7/7 (100%) | minutes-163.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=163 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL MEETING    September 9, 2013        The ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=166`

- **Vector count**: 7
- **Sample IDs**: `minutes-166.pdf-chunk-0`, `minutes-166.pdf-chunk-6`, `minutes-166.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-166.pdf |
| `filename` | 7/7 (100%) | minutes-166.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=166 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    October 14, 2013      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=191`

- **Vector count**: 7
- **Sample IDs**: `minutes-191.pdf-chunk-1`, `minutes-191.pdf-chunk-0`, `minutes-191.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-191.pdf |
| `filename` | 7/7 (100%) | minutes-191.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=191 |
| `text` | 7/7 (100%) | edger-Kalen, Halley, Revolinski, Rasmussen   ABSTAIN:  Hamilton      TO APPROVE ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=219`

- **Vector count**: 7
- **Sample IDs**: `minutes-219.pdf-chunk-0`, `minutes-219.pdf-chunk-6`, `minutes-219.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-219.pdf |
| `filename` | 7/7 (100%) | minutes-219.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=219 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    February 24, 2014      The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=220`

- **Vector count**: 7
- **Sample IDs**: `minutes-220.pdf-chunk-4`, `minutes-220.pdf-chunk-3`, `minutes-220.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-220.pdf |
| `filename` | 7/7 (100%) | minutes-220.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=220 |
| `text` | 7/7 (100%) | , Ledger-Kalen, Halley, Rasmussen, Hammes, Flournoy, Revolinski      TO APPROVE ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=229`

- **Vector count**: 7
- **Sample IDs**: `minutes-229.pdf-chunk-6`, `minutes-229.pdf-chunk-0`, `minutes-229.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-229.pdf |
| `filename` | 7/7 (100%) | minutes-229.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=229 |
| `text` | 7/7 (100%) |     TO ADOPT RESOLUTION NO. 3110 ACCEPTING    A SERVICES AGREEMENT WITH FRENCH-R... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=232`

- **Vector count**: 7
- **Sample IDs**: `minutes-232.pdf-chunk-4`, `minutes-232.pdf-chunk-6`, `minutes-232.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-232.pdf |
| `filename` | 7/7 (100%) | minutes-232.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=232 |
| `text` | 7/7 (100%) | ammes   AYES:  Hamilton, Hammes, Flournoy, Rasmussen, Ledger-Kalen, Revolinski, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=243`

- **Vector count**: 7
- **Sample IDs**: `minutes-243.pdf-chunk-0`, `minutes-243.pdf-chunk-1`, `minutes-243.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-243.pdf |
| `filename` | 7/7 (100%) | minutes-243.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=243 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    October 13, 2014        The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=276`

- **Vector count**: 7
- **Sample IDs**: `minutes-276.pdf-chunk-1`, `minutes-276.pdf-chunk-2`, `minutes-276.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-276.pdf |
| `filename` | 7/7 (100%) | minutes-276.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=276 |
| `text` | 7/7 (100%) | PPEARANCES  A representative from the Jefferson County Fair Board appeared befor... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=283`

- **Vector count**: 7
- **Sample IDs**: `minutes-283.pdf-chunk-2`, `minutes-283.pdf-chunk-3`, `minutes-283.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-283.pdf |
| `filename` | 7/7 (100%) | minutes-283.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=283 |
| `text` | 7/7 (100%) | FINANCIAL ASSISTANCE TO   DEVELOP WASTEWATER TREATMENT & COLLECTION   IMPROVEMEN... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=338`

- **Vector count**: 7
- **Sample IDs**: `minutes-338.pdf-chunk-0`, `minutes-338.pdf-chunk-1`, `minutes-338.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-338.pdf |
| `filename` | 7/7 (100%) | minutes-338.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=338 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL MEETING     August 22, 2016      The Fai... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=354`

- **Vector count**: 7
- **Sample IDs**: `minutes-354.pdf-chunk-6`, `minutes-354.pdf-chunk-2`, `minutes-354.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-354.pdf |
| `filename` | 7/7 (100%) | minutes-354.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=354 |
| `text` | 7/7 (100%) |  PAY INCREASE ON JULY 1, 2017 AS OTHER    CITY EMPLOYEES AS RECOMMENDED BY THE  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=356`

- **Vector count**: 7
- **Sample IDs**: `minutes-356.pdf-chunk-0`, `minutes-356.pdf-chunk-1`, `minutes-356.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-356.pdf |
| `filename` | 7/7 (100%) | minutes-356.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=356 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    March 27, 2017      The Fairfield Cit... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=400`

- **Vector count**: 7
- **Sample IDs**: `minutes-400.pdf-chunk-4`, `minutes-400.pdf-chunk-5`, `minutes-400.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-400.pdf |
| `filename` | 7/7 (100%) | minutes-400.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=400 |
| `text` | 7/7 (100%) | d reading of Ordinance No. 1164 amending  Municipal Code 9.88 implementing civil... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=407`

- **Vector count**: 7
- **Sample IDs**: `minutes-407.pdf-chunk-2`, `minutes-407.pdf-chunk-0`, `minutes-407.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-407.pdf |
| `filename` | 7/7 (100%) | minutes-407.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=407 |
| `text` | 7/7 (100%) | 4 Bypass  Urban Renewal Plan.  There were no written or verbal objections, so th... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=424`

- **Vector count**: 7
- **Sample IDs**: `minutes-424.pdf-chunk-2`, `minutes-424.pdf-chunk-1`, `minutes-424.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-424.pdf |
| `filename` | 7/7 (100%) | minutes-424.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=424 |
| `text` | 7/7 (100%) | REATMENT PLANT BID  PKG. NO. 1 PROJECT IN THE AMOUNT  OF $36,442.71.      Moved ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=439`

- **Vector count**: 7
- **Sample IDs**: `minutes-439.pdf-chunk-3`, `minutes-439.pdf-chunk-2`, `minutes-439.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-439.pdf |
| `filename` | 7/7 (100%) | minutes-439.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=439 |
| `text` | 7/7 (100%) | S AND  RUNWAY 18/36 PCC PANEL REPLACEMENT (PHASE 1)  AND RECONSTRUCT TAXIWAY TO ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=462`

- **Vector count**: 7
- **Sample IDs**: `minutes-462.pdf-chunk-1`, `minutes-462.pdf-chunk-3`, `minutes-462.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-462.pdf |
| `filename` | 7/7 (100%) | minutes-462.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=462 |
| `text` | 7/7 (100%) | LOCAL OPTION SALES TAX FUNDS FOR    SPECIFIED STREET PROJECTS.    CONSENT AGENDA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=471`

- **Vector count**: 7
- **Sample IDs**: `minutes-471.pdf-chunk-0`, `minutes-471.pdf-chunk-3`, `minutes-471.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-471.pdf |
| `filename` | 7/7 (100%) | minutes-471.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=471 |
| `text` | 7/7 (100%) |     MINUTES OF THE FAIRFIELD CITY COUNCIL    March 9, 2020    The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=472`

- **Vector count**: 7
- **Sample IDs**: `minutes-472.pdf-chunk-1`, `minutes-472.pdf-chunk-0`, `minutes-472.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-472.pdf |
| `filename` | 7/7 (100%) | minutes-472.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=472 |
| `text` | 7/7 (100%) | RS.    TO ADOPT RESOLUTION NO. 3811 APPROVING  EMPLOYOMENT IN THE PARK & RECREAT... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=479`

- **Vector count**: 7
- **Sample IDs**: `minutes-479.pdf-chunk-4`, `minutes-479.pdf-chunk-1`, `minutes-479.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-479.pdf |
| `filename` | 7/7 (100%) | minutes-479.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=479 |
| `text` | 7/7 (100%) | .     Moved by Rasmussen, seconded by Twohill   AYES: Rasmussen, Twohill, Gandy,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=478`

- **Vector count**: 7
- **Sample IDs**: `minutes-478.pdf-chunk-1`, `minutes-478.pdf-chunk-5`, `minutes-478.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-478.pdf |
| `filename` | 7/7 (100%) | minutes-478.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=478 |
| `text` | 7/7 (100%) |  IN THE AMOUNT OF $679,456.25.    TO ACCEPT THE MAY FINANCE REPORT AND   TRANSFE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=485`

- **Vector count**: 7
- **Sample IDs**: `minutes-485.pdf-chunk-0`, `minutes-485.pdf-chunk-5`, `minutes-485.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-485.pdf |
| `filename` | 7/7 (100%) | minutes-485.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=485 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    SEPTEMBER 14, 2020      The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=487`

- **Vector count**: 7
- **Sample IDs**: `minutes-487.pdf-chunk-0`, `minutes-487.pdf-chunk-1`, `minutes-487.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-487.pdf |
| `filename` | 7/7 (100%) | minutes-487.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=487 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    October 12, 2020      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=489`

- **Vector count**: 7
- **Sample IDs**: `minutes-489.pdf-chunk-6`, `minutes-489.pdf-chunk-1`, `minutes-489.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-489.pdf |
| `filename` | 7/7 (100%) | minutes-489.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=489 |
| `text` | 7/7 (100%) | e zoning.     ADMINISTRATOR & DEPARTMENT REPORTS  City Administrator Aaron Kooik... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=488`

- **Vector count**: 7
- **Sample IDs**: `minutes-488.pdf-chunk-4`, `minutes-488.pdf-chunk-2`, `minutes-488.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-488.pdf |
| `filename` | 7/7 (100%) | minutes-488.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=488 |
| `text` | 7/7 (100%) |  THE CITY FOR CERTAIN ORIGINAL EXPENDITURES    PAID IN CONNECTION WITH THE HIGHW... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=50`

- **Vector count**: 7
- **Sample IDs**: `minutes-50.pdf-chunk-0`, `minutes-50.pdf-chunk-6`, `minutes-50.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-50.pdf |
| `filename` | 7/7 (100%) | minutes-50.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=50 |
| `text` | 7/7 (100%) |   MINUTES OF THE REGULAR CITY COUNCIL MEETING    February 28, 2011        The Fa... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=499`

- **Vector count**: 7
- **Sample IDs**: `minutes-499.pdf-chunk-0`, `minutes-499.pdf-chunk-4`, `minutes-499.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-499.pdf |
| `filename` | 7/7 (100%) | minutes-499.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=499 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    APRIL 26, 2021      The Fairfield Cit... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=646`

- **Vector count**: 7
- **Sample IDs**: `minutes-646.pdf-chunk-2`, `minutes-646.pdf-chunk-1`, `minutes-646.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-646.pdf |
| `filename` | 7/7 (100%) | minutes-646.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=646 |
| `text` | 7/7 (100%) | E REPORT.    Moved by Anderson, seconded by Twohill   AYES:  Anderson, Twohill, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=637`

- **Vector count**: 7
- **Sample IDs**: `minutes-637.pdf-chunk-3`, `minutes-637.pdf-chunk-2`, `minutes-637.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-637.pdf |
| `filename` | 7/7 (100%) | minutes-637.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=637 |
| `text` | 7/7 (100%) |  Iowa Farmers Market Week.    Mayor Boyer asked for Council consideration to re-... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=641`

- **Vector count**: 7
- **Sample IDs**: `minutes-641.pdf-chunk-3`, `minutes-641.pdf-chunk-6`, `minutes-641.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-641.pdf |
| `filename` | 7/7 (100%) | minutes-641.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=641 |
| `text` | 7/7 (100%) |  Rasmussen    TO ADOPT RESOLUTION NO. 3988  APPROVING AND AUTHORIZING THE  EXECU... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=638`

- **Vector count**: 7
- **Sample IDs**: `minutes-638.pdf-chunk-5`, `minutes-638.pdf-chunk-1`, `minutes-638.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-638.pdf |
| `filename` | 7/7 (100%) | minutes-638.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=638 |
| `text` | 7/7 (100%) | Cities Conference.    CLOSED SESSION – IOWA CODE 21.5 (c)  Moved by Anderson, se... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=636`

- **Vector count**: 7
- **Sample IDs**: `minutes-636.pdf-chunk-0`, `minutes-636.pdf-chunk-2`, `minutes-636.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-636.pdf |
| `filename` | 7/7 (100%) | minutes-636.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=636 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  JULY 12, 2021    The Fairfield City Cou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=669`

- **Vector count**: 7
- **Sample IDs**: `minutes-669.pdf-chunk-6`, `minutes-669.pdf-chunk-1`, `minutes-669.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-669.pdf |
| `filename` | 7/7 (100%) | minutes-669.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=669 |
| `text` | 7/7 (100%) | O A ONE YEAR AGREEMENT WITH    UNITED HEALTH CARE (UHC) FOR THEIR CLIENTS    TO ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=698`

- **Vector count**: 7
- **Sample IDs**: `minutes-698.pdf-chunk-0`, `minutes-698.pdf-chunk-2`, `minutes-698.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-698.pdf |
| `filename` | 7/7 (100%) | minutes-698.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=698 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  January 22, 2024    The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=72`

- **Vector count**: 7
- **Sample IDs**: `minutes-72.pdf-chunk-0`, `minutes-72.pdf-chunk-3`, `minutes-72.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-72.pdf |
| `filename` | 7/7 (100%) | minutes-72.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=72 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL MEETING    September 26, 2011        The... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=714`

- **Vector count**: 7
- **Sample IDs**: `minutes-714.pdf-chunk-2`, `minutes-714.pdf-chunk-4`, `minutes-714.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-714.pdf |
| `filename` | 7/7 (100%) | minutes-714.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=714 |
| `text` | 7/7 (100%) | e 7 th  & Friday, August 2 nd  for which he will block off  the inside of the sq... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=745`

- **Vector count**: 7
- **Sample IDs**: `minutes-745.pdf-chunk-4`, `minutes-745.pdf-chunk-5`, `minutes-745.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-745.pdf |
| `filename` | 7/7 (100%) | minutes-745.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=745 |
| `text` | 7/7 (100%) |  been submitted and we are awaiting for word  back; she also visited four 7 th  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=761`

- **Vector count**: 7
- **Sample IDs**: `minutes-761.pdf-chunk-1`, `minutes-761.pdf-chunk-5`, `minutes-761.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-761.pdf |
| `filename` | 7/7 (100%) | minutes-761.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=761 |
| `text` | 7/7 (100%) | O APPROVE A LIQUOR LICENSE FOR TORINO’S  PIZZA & STEAKHOUSE.    TO APPROVE A LIQ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=88`

- **Vector count**: 7
- **Sample IDs**: `minutes-88.pdf-chunk-3`, `minutes-88.pdf-chunk-1`, `minutes-88.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-88.pdf |
| `filename` | 7/7 (100%) | minutes-88.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=88 |
| `text` | 7/7 (100%) |   TO APPROVE A LIQUOR LICENSE    FOR DOLLAR GENERAL #7142,    ARANDAS MEXICAN RE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=94`

- **Vector count**: 7
- **Sample IDs**: `minutes-94.pdf-chunk-0`, `minutes-94.pdf-chunk-1`, `minutes-94.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 7/7 (100%) | minutes-94.pdf |
| `filename` | 7/7 (100%) | minutes-94.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=94 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL     April 23, 2012      The Fairfield Ci... |

### `https://www.miu.edu/ma-in-enlightenment-leadership`

- **Vector count**: 7
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-0`, `miu-aHR0cHM6Ly93d3cubWl1-6`, `miu-aHR0cHM6Ly93d3cubWl1-1`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | education |
| `file` | 7/7 (100%) | Maharishi International University — https://www.miu.edu/ma-in-enlightenment-lea... |
| `filename` | 7/7 (100%) | Maharishi International University — https://www.miu.edu/ma-in-enlightenment-lea... |
| `org` | 7/7 (100%) | Maharishi International University |
| `source` | 7/7 (100%) | https://www.miu.edu/ma-in-enlightenment-leadership |
| `text` | 7/7 (100%) | MA in Enlightenment & Leadership \| Maharishi University Open Curriculum - map yo... |
| `type` | 7/7 (100%) | community_org |

### `Fairfield Beautification Commission Weed Team`

- **Vector count**: 6
- **Sample IDs**: `beautification-weed-team_chunk_3`, `beautification-weed-team_chunk_1`, `beautification-weed-team_chunk_0`
- **ID patterns**: `filename_chunk_N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | community |
| `chunkIndex` | 6/6 (100%) | 3 |
| `fileName` | 6/6 (100%) | beautification-weed-team.txt |
| `filename` | 6/6 (100%) | beautification-weed-team.txt |
| `source` | 6/6 (100%) | Fairfield Beautification Commission Weed Team |
| `subcategory` | 6/6 (100%) | beautification |
| `text` | 6/6 (100%) | more efficient way of doing it, and sought to rid the whole nine-block area of s... |
| `type` | 6/6 (100%) | community_org |

### `https://www.youtube.com/watch?v=037Oa0eTt7k`

- **Vector count**: 6
- **Sample IDs**: `fc-council-037Oa0eTt7k-2`, `fc-council-037Oa0eTt7k-3`, `fc-council-037Oa0eTt7k-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 11-14-22 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 11-14-22 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=037Oa0eTt7k |
| `text` | 6/6 (100%) | T and the railroad and Rebecca because we have insurance issues so you know it's... |
| `title` | 6/6 (100%) | City Council 11-14-22 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=3ANjEoIdMJI`

- **Vector count**: 6
- **Sample IDs**: `fc-council-3ANjEoIdMJI-4`, `fc-council-3ANjEoIdMJI-5`, `fc-council-3ANjEoIdMJI-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 5-28-24 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 5-28-24 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=3ANjEoIdMJI |
| `text` | 6/6 (100%) | 35 have they requested a reduction before uh if they have not this particular ad... |
| `title` | 6/6 (100%) | City Council 5-28-24 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=2Vh15JTv-7I`

- **Vector count**: 6
- **Sample IDs**: `fc-council-2Vh15JTv-7I-5`, `fc-council-2Vh15JTv-7I-0`, `fc-council-2Vh15JTv-7I-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 8-27-18 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 8-27-18 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=2Vh15JTv-7I |
| `text` | 6/6 (100%) | m. to 8:30 a. m. school day afternoons from 3 p. m. to 4 p. m. no changes recomm... |
| `title` | 6/6 (100%) | City Council 8-27-18 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=3qdmloS_1LM`

- **Vector count**: 6
- **Sample IDs**: `fc-council-3qdmloS_1LM-3`, `fc-council-3qdmloS_1LM-0`, `fc-council-3qdmloS_1LM-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 3-12-18 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 3-12-18 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=3qdmloS_1LM |
| `text` | 6/6 (100%) | Morrisey and he was okay with the changes as is presented on the board there so ... |
| `title` | 6/6 (100%) | City Council 3-12-18 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9Nqd7Dg9BWs`

- **Vector count**: 6
- **Sample IDs**: `fc-council-9Nqd7Dg9BWs-3`, `fc-council-9Nqd7Dg9BWs-0`, `fc-council-9Nqd7Dg9BWs-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 7-8-19 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 7-8-19 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=9Nqd7Dg9BWs |
| `text` | 6/6 (100%) | our engineers estimate was one hundred and thirty three thousand dollars for the... |
| `title` | 6/6 (100%) | City Council 7-8-19 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Az8JxAJKx5Q`

- **Vector count**: 6
- **Sample IDs**: `fc-council-Az8JxAJKx5Q-0`, `fc-council-Az8JxAJKx5Q-1`, `fc-council-Az8JxAJKx5Q-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `filename` | 6/6 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=Az8JxAJKx5Q |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Study S... |
| `title` | 6/6 (100%) | City of Fairfield \| Study Session & City Council 1.27.25 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9dm2ZsSJm5c`

- **Vector count**: 6
- **Sample IDs**: `fc-council-9dm2ZsSJm5c-2`, `fc-council-9dm2ZsSJm5c-0`, `fc-council-9dm2ZsSJm5c-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 12-18-23 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 12-18-23 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=9dm2ZsSJm5c |
| `text` | 6/6 (100%) | 2 correct so yeah so i' who the money that the state had that the county was hol... |
| `title` | 6/6 (100%) | City Council 12-18-23 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CkxMAcMgEuc`

- **Vector count**: 6
- **Sample IDs**: `fc-council-CkxMAcMgEuc-3`, `fc-council-CkxMAcMgEuc-4`, `fc-council-CkxMAcMgEuc-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — Fairfield Town Hall \| Fairfield Police Dept. \| 1-9... |
| `filename` | 6/6 (100%) | City Council Meeting — null — Fairfield Town Hall \| Fairfield Police Dept. \| 1-9... |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=CkxMAcMgEuc |
| `text` | 6/6 (100%) | 9 of time they're great and loving to you and your family but sometimes if they'... |
| `title` | 6/6 (100%) | Fairfield Town Hall \| Fairfield Police Dept. \| 1-9-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=DaCHv5e1vXk`

- **Vector count**: 6
- **Sample IDs**: `fc-council-DaCHv5e1vXk-1`, `fc-council-DaCHv5e1vXk-2`, `fc-council-DaCHv5e1vXk-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 7-26-21 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 7-26-21 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=DaCHv5e1vXk |
| `text` | 6/6 (100%) | 3 percent interest um to note the two two loans that were refinancing uh one was... |
| `title` | 6/6 (100%) | City Council 7-26-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EcFSD_olYxo`

- **Vector count**: 6
- **Sample IDs**: `fc-council-EcFSD_olYxo-5`, `fc-council-EcFSD_olYxo-2`, `fc-council-EcFSD_olYxo-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 8-12-19 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 8-12-19 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=EcFSD_olYxo |
| `text` | 6/6 (100%) | for that meeting as well so entertain a motion to set the workshop in public mee... |
| `title` | 6/6 (100%) | City Council 8-12-19 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GJsaBMKbNbM`

- **Vector count**: 6
- **Sample IDs**: `fc-council-GJsaBMKbNbM-1`, `fc-council-GJsaBMKbNbM-0`, `fc-council-GJsaBMKbNbM-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — 10-28-13 Fairfield City Council Meeting |
| `filename` | 6/6 (100%) | City Council Meeting — null — 10-28-13 Fairfield City Council Meeting |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=GJsaBMKbNbM |
| `text` | 6/6 (100%) | one of the things you get is this and I want you to notice this award is preside... |
| `title` | 6/6 (100%) | 10-28-13 Fairfield City Council Meeting |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=P47kscrGTmE`

- **Vector count**: 6
- **Sample IDs**: `fc-council-P47kscrGTmE-4`, `fc-council-P47kscrGTmE-5`, `fc-council-P47kscrGTmE-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 9-14-20 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 9-14-20 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=P47kscrGTmE |
| `text` | 6/6 (100%) | 34 concerning prohibited parking to additionally limit and restrict various form... |
| `title` | 6/6 (100%) | City Council 9-14-20 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Pd8Ev4iqtAY`

- **Vector count**: 6
- **Sample IDs**: `fc-council-Pd8Ev4iqtAY-2`, `fc-council-Pd8Ev4iqtAY-5`, `fc-council-Pd8Ev4iqtAY-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 9-12-16 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 9-12-16 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=Pd8Ev4iqtAY |
| `text` | 6/6 (100%) | for those of you I'm going to pass these pictures of artist alley from the north... |
| `title` | 6/6 (100%) | City Council 9-12-16 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OLgSKUDV2Ic`

- **Vector count**: 6
- **Sample IDs**: `fc-council-OLgSKUDV2Ic-4`, `fc-council-OLgSKUDV2Ic-0`, `fc-council-OLgSKUDV2Ic-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-18 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-18 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=OLgSKUDV2Ic |
| `text` | 6/6 (100%) | 91 of temporary easement for a price of twenty-seven thousand two hundred dollar... |
| `title` | 6/6 (100%) | City Council 11-13-18 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=RXKjTnYL1Yo`

- **Vector count**: 6
- **Sample IDs**: `fc-council-RXKjTnYL1Yo-1`, `fc-council-RXKjTnYL1Yo-4`, `fc-council-RXKjTnYL1Yo-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 8-14-23 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 8-14-23 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=RXKjTnYL1Yo |
| `text` | 6/6 (100%) | 23 713 23 7 19 23 acceptance of the arbor committee minutes acceptance of the li... |
| `title` | 6/6 (100%) | City Council 8-14-23 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=VPGIb2KGwmM`

- **Vector count**: 6
- **Sample IDs**: `fc-council-VPGIb2KGwmM-1`, `fc-council-VPGIb2KGwmM-4`, `fc-council-VPGIb2KGwmM-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 9-28-20 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 9-28-20 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=VPGIb2KGwmM |
| `text` | 6/6 (100%) | uh jefferson county health center 81 000 316 67 for an ambulance and pkg contrac... |
| `title` | 6/6 (100%) | City Council 9-28-20 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=WPKYvk7GGRA`

- **Vector count**: 6
- **Sample IDs**: `fc-council-WPKYvk7GGRA-5`, `fc-council-WPKYvk7GGRA-4`, `fc-council-WPKYvk7GGRA-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — Special City Council Work Session 6-16-21 |
| `filename` | 6/6 (100%) | City Council Meeting — null — Special City Council Work Session 6-16-21 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=WPKYvk7GGRA |
| `text` | 6/6 (100%) | we we added to the report uh brett added to the report i think it was almost 900... |
| `title` | 6/6 (100%) | Special City Council Work Session 6-16-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Z4wwMy7UxQU`

- **Vector count**: 6
- **Sample IDs**: `fc-council-Z4wwMy7UxQU-0`, `fc-council-Z4wwMy7UxQU-4`, `fc-council-Z4wwMy7UxQU-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — Fairfield City Council 4-8-13 |
| `filename` | 6/6 (100%) | City Council Meeting — null — Fairfield City Council 4-8-13 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=Z4wwMy7UxQU |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 4-8-... |
| `title` | 6/6 (100%) | Fairfield City Council 4-8-13 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ZtotQhZiLBg`

- **Vector count**: 6
- **Sample IDs**: `fc-council-ZtotQhZiLBg-0`, `fc-council-ZtotQhZiLBg-2`, `fc-council-ZtotQhZiLBg-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 4-8-19 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 4-8-19 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=ZtotQhZiLBg |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 4-8-19  good e... |
| `title` | 6/6 (100%) | City Council 4-8-19 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=bmrRb_O34h8`

- **Vector count**: 6
- **Sample IDs**: `fc-council-bmrRb_O34h8-5`, `fc-council-bmrRb_O34h8-4`, `fc-council-bmrRb_O34h8-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 1-27-21 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 1-27-21 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=bmrRb_O34h8 |
| `text` | 6/6 (100%) | so we'll continue the attorneys will continue to look at that um but regardless ... |
| `title` | 6/6 (100%) | City Council 1-27-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cBW-57hiEtI`

- **Vector count**: 6
- **Sample IDs**: `fc-council-cBW-57hiEtI-2`, `fc-council-cBW-57hiEtI-4`, `fc-council-cBW-57hiEtI-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 4-24-23 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 4-24-23 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=cBW-57hiEtI |
| `text` | 6/6 (100%) | M and uh Jason can you open the attachment we're should we just can you scroll u... |
| `title` | 6/6 (100%) | City Council 4-24-23 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=bSDEZ1Owcro`

- **Vector count**: 6
- **Sample IDs**: `fc-council-bSDEZ1Owcro-0`, `fc-council-bSDEZ1Owcro-3`, `fc-council-bSDEZ1Owcro-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 8-9-21 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 8-9-21 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=bSDEZ1Owcro |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-9-21  meetin... |
| `title` | 6/6 (100%) | City Council 8-9-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cKFXXV386m8`

- **Vector count**: 6
- **Sample IDs**: `fc-council-cKFXXV386m8-3`, `fc-council-cKFXXV386m8-5`, `fc-council-cKFXXV386m8-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 7-11-16 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 7-11-16 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=cKFXXV386m8 |
| `text` | 6/6 (100%) | mayor yes I understand so after the meeting in August bring the new contract bac... |
| `title` | 6/6 (100%) | City Council 7-11-16 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=eQJO7cCSQL0`

- **Vector count**: 6
- **Sample IDs**: `fc-council-eQJO7cCSQL0-0`, `fc-council-eQJO7cCSQL0-3`, `fc-council-eQJO7cCSQL0-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-17 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-17 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=eQJO7cCSQL0 |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-13-17  good... |
| `title` | 6/6 (100%) | City Council 11-13-17 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=dmXUwkb_N8E`

- **Vector count**: 6
- **Sample IDs**: `fc-council-dmXUwkb_N8E-2`, `fc-council-dmXUwkb_N8E-4`, `fc-council-dmXUwkb_N8E-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-23 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-23 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=dmXUwkb_N8E |
| `text` | 6/6 (100%) | second move by Anderson second by floro any discussion now please call the roll ... |
| `title` | 6/6 (100%) | City Council 11-13-23 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=diN0S83q2sk`

- **Vector count**: 6
- **Sample IDs**: `fc-council-diN0S83q2sk-5`, `fc-council-diN0S83q2sk-0`, `fc-council-diN0S83q2sk-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 10-14-24 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 10-14-24 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=diN0S83q2sk |
| `text` | 6/6 (100%) | 8 in there right now um but they have an EDR project coming up um and a generato... |
| `title` | 6/6 (100%) | City Council 10-14-24 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=heqpanrJNh4`

- **Vector count**: 6
- **Sample IDs**: `fc-council-heqpanrJNh4-4`, `fc-council-heqpanrJNh4-1`, `fc-council-heqpanrJNh4-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 1-27-20 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 1-27-20 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=heqpanrJNh4 |
| `text` | 6/6 (100%) | any other discussion if not Anderson yes Lauren oi yes Hallie yep - okay that pa... |
| `title` | 6/6 (100%) | City Council 1-27-20 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=j1s3tYNsxGE`

- **Vector count**: 6
- **Sample IDs**: `fc-council-j1s3tYNsxGE-4`, `fc-council-j1s3tYNsxGE-1`, `fc-council-j1s3tYNsxGE-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 6-27-22 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 6-27-22 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=j1s3tYNsxGE |
| `text` | 6/6 (100%) | and i'll say the company was great to work with i after they had talked with cal... |
| `title` | 6/6 (100%) | City Council 6-27-22 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=pHarT2NpbvI`

- **Vector count**: 6
- **Sample IDs**: `fc-council-pHarT2NpbvI-0`, `fc-council-pHarT2NpbvI-3`, `fc-council-pHarT2NpbvI-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 4-22-24 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 4-22-24 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=pHarT2NpbvI |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 4-22-24  meeti... |
| `title` | 6/6 (100%) | City Council 4-22-24 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=oO0X7yYPUJo`

- **Vector count**: 6
- **Sample IDs**: `fc-council-oO0X7yYPUJo-1`, `fc-council-oO0X7yYPUJo-0`, `fc-council-oO0X7yYPUJo-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 6-13-16 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 6-13-16 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=oO0X7yYPUJo |
| `text` | 6/6 (100%) | 4 uh million amount okay thank you Mike you're welcome any questions regarding t... |
| `title` | 6/6 (100%) | City Council 6-13-16 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qTJKDq2rDhM`

- **Vector count**: 6
- **Sample IDs**: `fc-council-qTJKDq2rDhM-2`, `fc-council-qTJKDq2rDhM-4`, `fc-council-qTJKDq2rDhM-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 10.14.24 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 10.14.24 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=qTJKDq2rDhM |
| `text` | 6/6 (100%) | 75 for the next year any other discussion seeing none please call the RO estd ye... |
| `title` | 6/6 (100%) | City Council 10.14.24 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wMpsZJ8gRRI`

- **Vector count**: 6
- **Sample IDs**: `fc-council-wMpsZJ8gRRI-0`, `fc-council-wMpsZJ8gRRI-1`, `fc-council-wMpsZJ8gRRI-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 9-9-19 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 9-9-19 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=wMpsZJ8gRRI |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 9-9-19  good e... |
| `title` | 6/6 (100%) | City Council 9-9-19 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=v-qgc-pxM60`

- **Vector count**: 6
- **Sample IDs**: `fc-council-v-qgc-pxM60-1`, `fc-council-v-qgc-pxM60-0`, `fc-council-v-qgc-pxM60-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 2-26-18 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 2-26-18 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=v-qgc-pxM60 |
| `text` | 6/6 (100%) | 59 approval of the February 23rd payroll of one hundred seventeen thousand four ... |
| `title` | 6/6 (100%) | City Council 2-26-18 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=z7ILbjTZ3Uo`

- **Vector count**: 6
- **Sample IDs**: `fc-council-z7ILbjTZ3Uo-4`, `fc-council-z7ILbjTZ3Uo-1`, `fc-council-z7ILbjTZ3Uo-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `file` | 6/6 (100%) | City Council Meeting — null — City Council 12-18-17 |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 12-18-17 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=z7ILbjTZ3Uo |
| `text` | 6/6 (100%) | Mary's Church area that Gail and Buzz have turned around pretty amazingly over t... |
| `title` | 6/6 (100%) | City Council 12-18-17 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.intelligentcommunity.org/thought_leaders`

- **Vector count**: 6
- **Sample IDs**: `icf-ab9623107153a3a1f4446a57-4`, `icf-ab9623107153a3a1f4446a57-0`, `icf-ab9623107153a3a1f4446a57-2`
- **ID patterns**: `orgId-sha24-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | civic-knowledge |
| `file` | 6/6 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/thought_leade... |
| `filename` | 6/6 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/thought_leade... |
| `org` | 6/6 (100%) | Intelligent Community Forum |
| `source` | 6/6 (100%) | https://www.intelligentcommunity.org/thought_leaders |
| `text` | 6/6 (100%) | Shawn Graham is the 31st Premier of the Province of New Brunswick, Canada. In 20... |
| `type` | 6/6 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=108`

- **Vector count**: 6
- **Sample IDs**: `minutes-108.pdf-chunk-2`, `minutes-108.pdf-chunk-5`, `minutes-108.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-108.pdf |
| `filename` | 6/6 (100%) | minutes-108.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=108 |
| `text` | 6/6 (100%) |  Specs.  There were no written or oral objections, therefore the public hearing ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=112`

- **Vector count**: 6
- **Sample IDs**: `minutes-112.pdf-chunk-1`, `minutes-112.pdf-chunk-3`, `minutes-112.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-112.pdf |
| `filename` | 6/6 (100%) | minutes-112.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=112 |
| `text` | 6/6 (100%) | MS IN THE AMOUNT    OF $866,175.78.    PUBLIC FORUM-APPEARANCES  Moved by Hamilt... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=135`

- **Vector count**: 6
- **Sample IDs**: `minutes-135.pdf-chunk-4`, `minutes-135.pdf-chunk-0`, `minutes-135.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-135.pdf |
| `filename` | 6/6 (100%) | minutes-135.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=135 |
| `text` | 6/6 (100%) | PPROVING A TAX ABATEMENT APPLICATION    FOR 502 W. KIRKWOOD.    Moved by Halley,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=121`

- **Vector count**: 6
- **Sample IDs**: `minutes-121.pdf-chunk-2`, `minutes-121.pdf-chunk-0`, `minutes-121.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-121.pdf |
| `filename` | 6/6 (100%) | minutes-121.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=121 |
| `text` | 6/6 (100%) | smussen   AYES:  Hamilton, Rasmussen, Hammes, Boyer, Revolinski, Halley      TO ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=144`

- **Vector count**: 6
- **Sample IDs**: `minutes-144.pdf-chunk-1`, `minutes-144.pdf-chunk-0`, `minutes-144.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-144.pdf |
| `filename` | 6/6 (100%) | minutes-144.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=144 |
| `text` | 6/6 (100%) | amilton, seconded by Ledger-Kalen   AYES:  Hamilton, Ledger-Kalen, Hammes, Rasmu... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=114`

- **Vector count**: 6
- **Sample IDs**: `minutes-114.pdf-chunk-4`, `minutes-114.pdf-chunk-2`, `minutes-114.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-114.pdf |
| `filename` | 6/6 (100%) | minutes-114.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=114 |
| `text` | 6/6 (100%) | r pit and the meter was running  continuously.  Ms. Heriott stated that if an em... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=123`

- **Vector count**: 6
- **Sample IDs**: `minutes-123.pdf-chunk-1`, `minutes-123.pdf-chunk-0`, `minutes-123.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-123.pdf |
| `filename` | 6/6 (100%) | minutes-123.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=123 |
| `text` | 6/6 (100%) | AL MOBILE HOME PERMITS      TO APPROVE A LIQUOR LICENSE FOR UNIVERSITY AMOCO.   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=162`

- **Vector count**: 6
- **Sample IDs**: `minutes-162.pdf-chunk-5`, `minutes-162.pdf-chunk-3`, `minutes-162.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-162.pdf |
| `filename` | 6/6 (100%) | minutes-162.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=162 |
| `text` | 6/6 (100%) | y, Ledger-Kalen, Hammes      TO ADJOURN AT 8:35 P.M.          Submitted by:     ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=153`

- **Vector count**: 6
- **Sample IDs**: `minutes-153.pdf-chunk-5`, `minutes-153.pdf-chunk-2`, `minutes-153.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-153.pdf |
| `filename` | 6/6 (100%) | minutes-153.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=153 |
| `text` | 6/6 (100%) | 4    REZONING 809 WEST TAYLOR AVENUE FROM    A R-2 TO A R-3 (MAPLEWOOD APTS LLC)... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=164`

- **Vector count**: 6
- **Sample IDs**: `minutes-164.pdf-chunk-3`, `minutes-164.pdf-chunk-0`, `minutes-164.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-164.pdf |
| `filename` | 6/6 (100%) | minutes-164.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=164 |
| `text` | 6/6 (100%) | M COOK APPRAISAL    FOR SERVICES/STEP 1 SANITARY SEWER PROJECT.    Moved by Hamm... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=154`

- **Vector count**: 6
- **Sample IDs**: `minutes-154.pdf-chunk-4`, `minutes-154.pdf-chunk-5`, `minutes-154.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-154.pdf |
| `filename` | 6/6 (100%) | minutes-154.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=154 |
| `text` | 6/6 (100%) | asmussen   AYES:  Hamilton, Rasmussen, Halley, Ledger-Kalen, Hammes, Boyer, Revo... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=196`

- **Vector count**: 6
- **Sample IDs**: `minutes-196.pdf-chunk-5`, `minutes-196.pdf-chunk-0`, `minutes-196.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-196.pdf |
| `filename` | 6/6 (100%) | minutes-196.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=196 |
| `text` | 6/6 (100%) | ty Clerk          |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=197`

- **Vector count**: 6
- **Sample IDs**: `minutes-197.pdf-chunk-1`, `minutes-197.pdf-chunk-2`, `minutes-197.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-197.pdf |
| `filename` | 6/6 (100%) | minutes-197.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=197 |
| `text` | 6/6 (100%) |   WAL-MART STORE #985.      TO APPROVE OPERATING CLAIMS IN THE    AMOUNT OF $363... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=194`

- **Vector count**: 6
- **Sample IDs**: `minutes-194.pdf-chunk-0`, `minutes-194.pdf-chunk-3`, `minutes-194.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-194.pdf |
| `filename` | 6/6 (100%) | minutes-194.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=194 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    January 13, 2014          The Fairfie... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=227`

- **Vector count**: 6
- **Sample IDs**: `minutes-227.pdf-chunk-1`, `minutes-227.pdf-chunk-5`, `minutes-227.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-227.pdf |
| `filename` | 6/6 (100%) | minutes-227.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=227 |
| `text` | 6/6 (100%) | close the alley next to  his business on June 21 for Fairfest.  He stated he has... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=249`

- **Vector count**: 6
- **Sample IDs**: `minutes-249.pdf-chunk-1`, `minutes-249.pdf-chunk-4`, `minutes-249.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-249.pdf |
| `filename` | 6/6 (100%) | minutes-249.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=249 |
| `text` | 6/6 (100%) |    $961,458.60.    PUBLIC FORUM/APPEARANCES  Dan Miller appeared before the City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=246`

- **Vector count**: 6
- **Sample IDs**: `minutes-246.pdf-chunk-1`, `minutes-246.pdf-chunk-0`, `minutes-246.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-246.pdf |
| `filename` | 6/6 (100%) | minutes-246.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=246 |
| `text` | 6/6 (100%) | NG    PART TIME EMPLOYMENT IN THE PARK & RECREATION    DEPARTMENT.      TO APPRO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=245`

- **Vector count**: 6
- **Sample IDs**: `minutes-245.pdf-chunk-5`, `minutes-245.pdf-chunk-0`, `minutes-245.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-245.pdf |
| `filename` | 6/6 (100%) | minutes-245.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=245 |
| `text` | 6/6 (100%) | mmes, Rasmussen, Flournoy, Halley, Revolinski      TO ADJOURN AT 7:43 P.M.      ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=231`

- **Vector count**: 6
- **Sample IDs**: `minutes-231.pdf-chunk-2`, `minutes-231.pdf-chunk-3`, `minutes-231.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-231.pdf |
| `filename` | 6/6 (100%) | minutes-231.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=231 |
| `text` | 6/6 (100%) | ncil accept the low bid.    Moved by Ledger-Kalen, seconded by Rasmussen   AYES:... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=267`

- **Vector count**: 6
- **Sample IDs**: `minutes-267.pdf-chunk-2`, `minutes-267.pdf-chunk-4`, `minutes-267.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-267.pdf |
| `filename` | 6/6 (100%) | minutes-267.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=267 |
| `text` | 6/6 (100%) | , Flournoy      TO ADOPT RESOLUTION NO. 3188 AWARDING    THE COMMUNITY RECREATIO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=266`

- **Vector count**: 6
- **Sample IDs**: `minutes-266.pdf-chunk-2`, `minutes-266.pdf-chunk-4`, `minutes-266.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-266.pdf |
| `filename` | 6/6 (100%) | minutes-266.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=266 |
| `text` | 6/6 (100%) | loy announced this was the date and time for a public hearing on the Community R... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=279`

- **Vector count**: 6
- **Sample IDs**: `minutes-279.pdf-chunk-4`, `minutes-279.pdf-chunk-0`, `minutes-279.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-279.pdf |
| `filename` | 6/6 (100%) | minutes-279.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=279 |
| `text` | 6/6 (100%) | , Halley, Flournoy, Rasmussen, Ledger-Kalen, Revolinski      TO PASS FROM THE SE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=274`

- **Vector count**: 6
- **Sample IDs**: `minutes-274.pdf-chunk-2`, `minutes-274.pdf-chunk-3`, `minutes-274.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-274.pdf |
| `filename` | 6/6 (100%) | minutes-274.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=274 |
| `text` | 6/6 (100%) | her residence.  City attorney, John Morrissey, stated that this property was due... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=282`

- **Vector count**: 6
- **Sample IDs**: `minutes-282.pdf-chunk-0`, `minutes-282.pdf-chunk-5`, `minutes-282.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-282.pdf |
| `filename` | 6/6 (100%) | minutes-282.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=282 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    June 22, 2015      The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=290`

- **Vector count**: 6
- **Sample IDs**: `minutes-290.pdf-chunk-1`, `minutes-290.pdf-chunk-5`, `minutes-290.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-290.pdf |
| `filename` | 6/6 (100%) | minutes-290.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=290 |
| `text` | 6/6 (100%) | ssion to use the city square and block off certain  streets for the upcoming Kiw... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=270`

- **Vector count**: 6
- **Sample IDs**: `minutes-270.pdf-chunk-2`, `minutes-270.pdf-chunk-4`, `minutes-270.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-270.pdf |
| `filename` | 6/6 (100%) | minutes-270.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=270 |
| `text` | 6/6 (100%) |  hearing on the FY15-16  budget.  There were no written or oral comments, so the... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=300`

- **Vector count**: 6
- **Sample IDs**: `minutes-300.pdf-chunk-0`, `minutes-300.pdf-chunk-4`, `minutes-300.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-300.pdf |
| `filename` | 6/6 (100%) | minutes-300.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=300 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    October 12, 2015      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=301`

- **Vector count**: 6
- **Sample IDs**: `minutes-301.pdf-chunk-5`, `minutes-301.pdf-chunk-1`, `minutes-301.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-301.pdf |
| `filename` | 6/6 (100%) | minutes-301.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=301 |
| `text` | 6/6 (100%) | dger-Kalen      TO ADOPT RESOLUTION NO. 3278    AMENDING THE FINANCIAL POLICY   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=311`

- **Vector count**: 6
- **Sample IDs**: `minutes-311.pdf-chunk-5`, `minutes-311.pdf-chunk-3`, `minutes-311.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-311.pdf |
| `filename` | 6/6 (100%) | minutes-311.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=311 |
| `text` | 6/6 (100%) | y   AYES:  Hamilton, Flournoy, Thompson, Anderson, Revolinski, Halley      TO AD... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=310`

- **Vector count**: 6
- **Sample IDs**: `minutes-310.pdf-chunk-1`, `minutes-310.pdf-chunk-3`, `minutes-310.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-310.pdf |
| `filename` | 6/6 (100%) | minutes-310.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=310 |
| `text` | 6/6 (100%) |  FORUM/APPEARANCES  Rustin Lippincott from the Fairfield Arts & Convention Cente... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=313`

- **Vector count**: 6
- **Sample IDs**: `minutes-313.pdf-chunk-5`, `minutes-313.pdf-chunk-4`, `minutes-313.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-313.pdf |
| `filename` | 6/6 (100%) | minutes-313.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=313 |
| `text` | 6/6 (100%) | olinski, Flournoy, Thompson, Anderson      TO APPOINT LAUREN TOWNE TO THE BEAUTI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=333`

- **Vector count**: 6
- **Sample IDs**: `minutes-333.pdf-chunk-1`, `minutes-333.pdf-chunk-0`, `minutes-333.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-333.pdf |
| `filename` | 6/6 (100%) | minutes-333.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=333 |
| `text` | 6/6 (100%) | RANSFER    DIRECTED BY THE STATE AUDITOR’S OFFICE.      TO ADOPT RESOLUTION NO. ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=343`

- **Vector count**: 6
- **Sample IDs**: `minutes-343.pdf-chunk-1`, `minutes-343.pdf-chunk-0`, `minutes-343.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-343.pdf |
| `filename` | 6/6 (100%) | minutes-343.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=343 |
| `text` | 6/6 (100%) | LD AERIE    NO. 1927 FRATERNAL ORDER OF EAGLES.      TO APPROVE OPERATING CLAIMS... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=345`

- **Vector count**: 6
- **Sample IDs**: `minutes-345.pdf-chunk-0`, `minutes-345.pdf-chunk-2`, `minutes-345.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-345.pdf |
| `filename` | 6/6 (100%) | minutes-345.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=345 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    January 9, 2017        The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=358`

- **Vector count**: 6
- **Sample IDs**: `minutes-358.pdf-chunk-0`, `minutes-358.pdf-chunk-3`, `minutes-358.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-358.pdf |
| `filename` | 6/6 (100%) | minutes-358.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=358 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    April 24, 2017        The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=370`

- **Vector count**: 6
- **Sample IDs**: `minutes-370.pdf-chunk-3`, `minutes-370.pdf-chunk-5`, `minutes-370.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-370.pdf |
| `filename` | 6/6 (100%) | minutes-370.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=370 |
| `text` | 6/6 (100%) | ey, Thompson     Page 3  Minutes  9/25/17        TO SET A DATE OF NOVEMBER 6, 20... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=364`

- **Vector count**: 6
- **Sample IDs**: `minutes-364.pdf-chunk-3`, `minutes-364.pdf-chunk-0`, `minutes-364.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-364.pdf |
| `filename` | 6/6 (100%) | minutes-364.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=364 |
| `text` | 6/6 (100%) | Flournoy, Anderson, Hamilton, Halley, Rasmussen, Thompson      TO ADOPT RESOLUTI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=361`

- **Vector count**: 6
- **Sample IDs**: `minutes-361.pdf-chunk-4`, `minutes-361.pdf-chunk-2`, `minutes-361.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-361.pdf |
| `filename` | 6/6 (100%) | minutes-361.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=361 |
| `text` | 6/6 (100%) | lton, seconded by Rasmussen   AYES:  Hamilton, Rasmussen, Halley, Anderson, Thom... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=431`

- **Vector count**: 6
- **Sample IDs**: `minutes-431.pdf-chunk-1`, `minutes-431.pdf-chunk-3`, `minutes-431.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-431.pdf |
| `filename` | 6/6 (100%) | minutes-431.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=431 |
| `text` | 6/6 (100%) | E 2019 MOBILE HOME LICENSES.    TO APPROVE A PARK USE PERMIT FOR RELAY  FOR LIFE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=435`

- **Vector count**: 6
- **Sample IDs**: `minutes-435.pdf-chunk-2`, `minutes-435.pdf-chunk-0`, `minutes-435.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-435.pdf |
| `filename` | 6/6 (100%) | minutes-435.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=435 |
| `text` | 6/6 (100%) |  by Rasmussen   AYES: Thompson, Rasmussen, Anderson, Gandy, Twohill, Halley and ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=430`

- **Vector count**: 6
- **Sample IDs**: `minutes-430.pdf-chunk-0`, `minutes-430.pdf-chunk-4`, `minutes-430.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-430.pdf |
| `filename` | 6/6 (100%) | minutes-430.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=430 |
| `text` | 6/6 (100%) |     MINUTES OF THE FAIRFIELD CITY COUNCIL    January 14, 2019    The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=447`

- **Vector count**: 6
- **Sample IDs**: `minutes-447.pdf-chunk-2`, `minutes-447.pdf-chunk-0`, `minutes-447.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-447.pdf |
| `filename` | 6/6 (100%) | minutes-447.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=447 |
| `text` | 6/6 (100%) | . Bettin would like permission  to close the 100 block of W Broadway Avenue and ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=441`

- **Vector count**: 6
- **Sample IDs**: `minutes-441.pdf-chunk-1`, `minutes-441.pdf-chunk-3`, `minutes-441.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-441.pdf |
| `filename` | 6/6 (100%) | minutes-441.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=441 |
| `text` | 6/6 (100%) |    RECREATION DEPARTMENT.    TO ADOPT RESOLUTION NO. 3734 FOR   EMPLOYMENT IN TH... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=476`

- **Vector count**: 6
- **Sample IDs**: `minutes-476.pdf-chunk-2`, `minutes-476.pdf-chunk-5`, `minutes-476.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-476.pdf |
| `filename` | 6/6 (100%) | minutes-476.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=476 |
| `text` | 6/6 (100%) | ET  AMENDMENT.    Moved by Anderson, seconded by Rasmussen   AYES:  Anderson, Ra... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=49`

- **Vector count**: 6
- **Sample IDs**: `minutes-49.pdf-chunk-2`, `minutes-49.pdf-chunk-0`, `minutes-49.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-49.pdf |
| `filename` | 6/6 (100%) | minutes-49.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=49 |
| `text` | 6/6 (100%) |  MONDAY, FEBRUARY 28 ON    PROPOSED DRAWINGS, SPECS,    FORM OF CONTRACT, AND   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=486`

- **Vector count**: 6
- **Sample IDs**: `minutes-486.pdf-chunk-1`, `minutes-486.pdf-chunk-3`, `minutes-486.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-486.pdf |
| `filename` | 6/6 (100%) | minutes-486.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=486 |
| `text` | 6/6 (100%) |  ECONOMIC DEVELOPMENT   COMMITTEE MINUTES OF SEPTEMBER 14, 2020.    TO ACCEPT TH... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=56`

- **Vector count**: 6
- **Sample IDs**: `minutes-56.pdf-chunk-4`, `minutes-56.pdf-chunk-1`, `minutes-56.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-56.pdf |
| `filename` | 6/6 (100%) | minutes-56.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=56 |
| `text` | 6/6 (100%) | evolinski, Halley      TO APPROVE RESOLUTION NO. 2846    ANNEXING AMHURST ADDITI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=500`

- **Vector count**: 6
- **Sample IDs**: `minutes-500.pdf-chunk-1`, `minutes-500.pdf-chunk-0`, `minutes-500.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-500.pdf |
| `filename` | 6/6 (100%) | minutes-500.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=500 |
| `text` | 6/6 (100%) | 2,347.72.      TO APPROVE THE APRIL FINANCE REPORT.    TO CONSENT A NOISE EXEMPT... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=55`

- **Vector count**: 6
- **Sample IDs**: `minutes-55.pdf-chunk-2`, `minutes-55.pdf-chunk-5`, `minutes-55.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-55.pdf |
| `filename` | 6/6 (100%) | minutes-55.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=55 |
| `text` | 6/6 (100%) | ESURFACING    PROJECT.    Moved by Hamilton, seconded by Adam   AYES:  Hamilton,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=643`

- **Vector count**: 6
- **Sample IDs**: `minutes-643.pdf-chunk-2`, `minutes-643.pdf-chunk-3`, `minutes-643.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-643.pdf |
| `filename` | 6/6 (100%) | minutes-643.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=643 |
| `text` | 6/6 (100%) | ESTER #1   REPLACEMENT BID OPENED ON OCTOBER 12, 2021  AND RE-BID OUT THE PROJEC... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=650`

- **Vector count**: 6
- **Sample IDs**: `minutes-650.pdf-chunk-5`, `minutes-650.pdf-chunk-4`, `minutes-650.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-650.pdf |
| `filename` | 6/6 (100%) | minutes-650.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=650 |
| `text` | 6/6 (100%) | 2    MAYOR REPORT  On behalf of Mayor Boyer, Mayor Pro Tem Gandy read aloud the ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=658`

- **Vector count**: 6
- **Sample IDs**: `minutes-658.pdf-chunk-1`, `minutes-658.pdf-chunk-0`, `minutes-658.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-658.pdf |
| `filename` | 6/6 (100%) | minutes-658.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=658 |
| `text` | 6/6 (100%) | ENSE FOR   THE WALTON CLUB.    TO APPROVE OPERATING CLAIMS IN THE   AMOUNT OF $5... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=681`

- **Vector count**: 6
- **Sample IDs**: `minutes-681.pdf-chunk-2`, `minutes-681.pdf-chunk-1`, `minutes-681.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-681.pdf |
| `filename` | 6/6 (100%) | minutes-681.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=681 |
| `text` | 6/6 (100%) | ons,  form  of  contract  and  estimate  of  costs  for  the  reconstruction  T-... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=725`

- **Vector count**: 6
- **Sample IDs**: `minutes-725.pdf-chunk-5`, `minutes-725.pdf-chunk-1`, `minutes-725.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-725.pdf |
| `filename` | 6/6 (100%) | minutes-725.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=725 |
| `text` | 6/6 (100%) | .    Ms. Carlson then gave a detailed RAGBRAI update; listing street closures an... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=723`

- **Vector count**: 6
- **Sample IDs**: `minutes-723.pdf-chunk-2`, `minutes-723.pdf-chunk-3`, `minutes-723.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-723.pdf |
| `filename` | 6/6 (100%) | minutes-723.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=723 |
| `text` | 6/6 (100%) | ournoy, Ham, Kness, Rowe, Twohill and Gandy      TO REFER THE MATTER OF AUXILIAR... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=82`

- **Vector count**: 6
- **Sample IDs**: `minutes-82.pdf-chunk-1`, `minutes-82.pdf-chunk-2`, `minutes-82.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-82.pdf |
| `filename` | 6/6 (100%) | minutes-82.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=82 |
| `text` | 6/6 (100%) | n, Hammes, Boyer, Silvers      TO APPROVE LIQUOR LICENSES    FOR UNIVERSITY AMOC... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=89`

- **Vector count**: 6
- **Sample IDs**: `minutes-89.pdf-chunk-5`, `minutes-89.pdf-chunk-2`, `minutes-89.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-89.pdf |
| `filename` | 6/6 (100%) | minutes-89.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=89 |
| `text` | 6/6 (100%) | inski, Silvers, Boyer      TO ADJOURN AT 8:35 P.M.          Submitted by:       ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=92`

- **Vector count**: 6
- **Sample IDs**: `minutes-92.pdf-chunk-2`, `minutes-92.pdf-chunk-5`, `minutes-92.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-92.pdf |
| `filename` | 6/6 (100%) | minutes-92.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=92 |
| `text` | 6/6 (100%) |  for a public hearing on the  South Main Sewer project.  There were no written o... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=91`

- **Vector count**: 6
- **Sample IDs**: `minutes-91.pdf-chunk-5`, `minutes-91.pdf-chunk-3`, `minutes-91.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-91.pdf |
| `filename` | 6/6 (100%) | minutes-91.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=91 |
| `text` | 6/6 (100%) | by Hamilton, seconded by Rasmussen   AYES:  Hamilton, Rasmussen, Hammes, Silvers... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=87`

- **Vector count**: 6
- **Sample IDs**: `minutes-87.pdf-chunk-5`, `minutes-87.pdf-chunk-3`, `minutes-87.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-87.pdf |
| `filename` | 6/6 (100%) | minutes-87.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=87 |
| `text` | 6/6 (100%) | T JOANNE ANCELL TO THE    HISTORICAL MUSEUM BOARD.    Mayor Malloy announced he ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=90`

- **Vector count**: 6
- **Sample IDs**: `minutes-90.pdf-chunk-5`, `minutes-90.pdf-chunk-2`, `minutes-90.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 6/6 (100%) | minutes-90.pdf |
| `filename` | 6/6 (100%) | minutes-90.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=90 |
| `text` | 6/6 (100%) |    TO ADJOURN AT 7:20 P.M.        Submitted by:        Joy Messer  City Clerk   ... |

### `https://www.youtube.com/watch?v=JG83-JPrt9A`

- **Vector count**: 6
- **Sample IDs**: `traction-thursdays-JG83-JPrt9A-0`, `traction-thursdays-JG83-JPrt9A-4`, `traction-thursdays-JG83-JPrt9A-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | economic |
| `file` | 6/6 (100%) | Traction Thursday — unknown — Traction Thursday 5-23-24 |
| `filename` | 6/6 (100%) | Traction Thursday — unknown — Traction Thursday 5-23-24 |
| `org` | 6/6 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 6/6 (100%) | traction-thursdays |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=JG83-JPrt9A |
| `text` | 6/6 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday 5-23... |
| `title` | 6/6 (100%) | Traction Thursday 5-23-24 |
| `type` | 6/6 (100%) | traction_thursday |

### `Fairfield Beautification Commission 2025 Volunteers`

- **Vector count**: 5
- **Sample IDs**: `beautification-volunteers-2025_chunk_3`, `beautification-volunteers-2025_chunk_1`, `beautification-volunteers-2025_chunk_2`
- **ID patterns**: `filename_chunk_N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | community |
| `chunkIndex` | 5/5 (100%) | 3 |
| `fileName` | 5/5 (100%) | beautification-volunteers-2025.txt |
| `filename` | 5/5 (100%) | beautification-volunteers-2025.txt |
| `source` | 5/5 (100%) | Fairfield Beautification Commission 2025 Volunteers |
| `subcategory` | 5/5 (100%) | beautification |
| `text` | 5/5 (100%) | eaning the garden nodes around the square and sprucing up Central Park. The Weed... |
| `type` | 5/5 (100%) | community_org |

### `ffcolab.com`

- **Vector count**: 5
- **Sample IDs**: `fairfield_colab_chunk_4`, `fairfield_colab_chunk_2`, `fairfield_colab_chunk_3`
- **ID patterns**: `prefix_name_chunk_N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | economic_development |
| `chunkIndex` | 5/5 (100%) | 4 |
| `fileName` | 5/5 (100%) | fairfield_colab.txt |
| `filename` | 5/5 (100%) | fairfield_colab.txt |
| `source` | 5/5 (100%) | ffcolab.com |
| `subcategory` | 5/5 (100%) | entrepreneurship |
| `text` | 5/5 (100%) | inars.  The CoLab hosts Traction Thursdays every Thursday at noon — a weekly ent... |

### `https://www.youtube.com/watch?v=20HtEsUUVVk`

- **Vector count**: 5
- **Sample IDs**: `fc-council-20HtEsUUVVk-4`, `fc-council-20HtEsUUVVk-2`, `fc-council-20HtEsUUVVk-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 5-13-24 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 5-13-24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=20HtEsUUVVk |
| `text` | 5/5 (100%) | to what is it 13 13 13m and 3 3:00 p. m. to 1:30 p. m. is the closing time for t... |
| `title` | 5/5 (100%) | City Council 5-13-24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=7_nhS_M42M8`

- **Vector count**: 5
- **Sample IDs**: `fc-council-7_nhS_M42M8-4`, `fc-council-7_nhS_M42M8-0`, `fc-council-7_nhS_M42M8-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 2-22-21 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 2-22-21 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=7_nhS_M42M8 |
| `text` | 5/5 (100%) | 31% increase correct so we're we're right above the 2% allowable growth which is... |
| `title` | 5/5 (100%) | City Council 2-22-21 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BOPdwniwmN4`

- **Vector count**: 5
- **Sample IDs**: `fc-council-BOPdwniwmN4-4`, `fc-council-BOPdwniwmN4-2`, `fc-council-BOPdwniwmN4-0`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 12-15-16 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 12-15-16 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=BOPdwniwmN4 |
| `text` | 5/5 (100%) | 5 on the table when we look at what we're paying and their bid it you know nine ... |
| `title` | 5/5 (100%) | City Council 12-15-16 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ELVg6M20tko`

- **Vector count**: 5
- **Sample IDs**: `fc-council-ELVg6M20tko-1`, `fc-council-ELVg6M20tko-2`, `fc-council-ELVg6M20tko-0`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 11-22-21 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 11-22-21 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=ELVg6M20tko |
| `text` | 5/5 (100%) | 40 resolution authorizing fund transfers approval of the october finance report ... |
| `title` | 5/5 (100%) | City Council 11-22-21 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GVWAqZdX-es`

- **Vector count**: 5
- **Sample IDs**: `fc-council-GVWAqZdX-es-4`, `fc-council-GVWAqZdX-es-0`, `fc-council-GVWAqZdX-es-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 4-26-21 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 4-26-21 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=GVWAqZdX-es |
| `text` | 5/5 (100%) | o. t site and then we'll be looking at touring the existing buildings in mid-jun... |
| `title` | 5/5 (100%) | City Council 4-26-21 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=I8HmMXXeaFg`

- **Vector count**: 5
- **Sample IDs**: `fc-council-I8HmMXXeaFg-0`, `fc-council-I8HmMXXeaFg-1`, `fc-council-I8HmMXXeaFg-2`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — Fairfield Town Hall \| Assessor's Office \| 12-6-21 |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield Town Hall \| Assessor's Office \| 12-6-21 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=I8HmMXXeaFg |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield Town Hall \| Asses... |
| `title` | 5/5 (100%) | Fairfield Town Hall \| Assessor's Office \| 12-6-21 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OKlGEzR-E1w`

- **Vector count**: 5
- **Sample IDs**: `fc-council-OKlGEzR-E1w-4`, `fc-council-OKlGEzR-E1w-2`, `fc-council-OKlGEzR-E1w-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 4-28-14 |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 4-28-14 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=OKlGEzR-E1w |
| `text` | 5/5 (100%) | um spun ranch uh brought their bid portion in at 110 000 and grindline brought t... |
| `title` | 5/5 (100%) | Fairfield City Council 4-28-14 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=RwkmHw2SpTg`

- **Vector count**: 5
- **Sample IDs**: `fc-council-RwkmHw2SpTg-4`, `fc-council-RwkmHw2SpTg-0`, `fc-council-RwkmHw2SpTg-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 7-14-14 |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 7-14-14 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=RwkmHw2SpTg |
| `text` | 5/5 (100%) | m. um Melanie could you give us just a synopsis of who will be at that meeting a... |
| `title` | 5/5 (100%) | Fairfield City Council 7-14-14 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YxrFzpFWnRI`

- **Vector count**: 5
- **Sample IDs**: `fc-council-YxrFzpFWnRI-1`, `fc-council-YxrFzpFWnRI-0`, `fc-council-YxrFzpFWnRI-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 11-10-14 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 11-10-14 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=YxrFzpFWnRI |
| `text` | 5/5 (100%) | 588 cents per cubic foot use of water and it will be increasing that rate to uh ... |
| `title` | 5/5 (100%) | City Council 11-10-14 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=e-64p8PKtRE`

- **Vector count**: 5
- **Sample IDs**: `fc-council-e-64p8PKtRE-4`, `fc-council-e-64p8PKtRE-3`, `fc-council-e-64p8PKtRE-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 10-8-18 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 10-8-18 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=e-64p8PKtRE |
| `text` | 5/5 (100%) | mayor Jefferson County Board the Jefferson County ambulance board met last Tuesd... |
| `title` | 5/5 (100%) | City Council 10-8-18 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=gwlcWqtIDTg`

- **Vector count**: 5
- **Sample IDs**: `fc-council-gwlcWqtIDTg-0`, `fc-council-gwlcWqtIDTg-1`, `fc-council-gwlcWqtIDTg-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 6-26-17 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 6-26-17 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=gwlcWqtIDTg |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 6-26-17  good ... |
| `title` | 5/5 (100%) | City Council 6-26-17 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=gfxl9t1cn8c`

- **Vector count**: 5
- **Sample IDs**: `fc-council-gfxl9t1cn8c-3`, `fc-council-gfxl9t1cn8c-0`, `fc-council-gfxl9t1cn8c-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 4-23-18 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 4-23-18 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=gfxl9t1cn8c |
| `text` | 5/5 (100%) | Glossop to first communicate with accelerated learning because our understanding... |
| `title` | 5/5 (100%) | City Council 4-23-18 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=kUA8_wD2AP0`

- **Vector count**: 5
- **Sample IDs**: `fc-council-kUA8_wD2AP0-4`, `fc-council-kUA8_wD2AP0-1`, `fc-council-kUA8_wD2AP0-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council meeting on 12-17-12 |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council meeting on 12-17-12 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=kUA8_wD2AP0 |
| `text` | 5/5 (100%) | um okay it was it was flexing on the size of the project until we determined the... |
| `title` | 5/5 (100%) | Fairfield City Council meeting on 12-17-12 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=hziN90N_mvM`

- **Vector count**: 5
- **Sample IDs**: `fc-council-hziN90N_mvM-0`, `fc-council-hziN90N_mvM-1`, `fc-council-hziN90N_mvM-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 6-27-16 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 6-27-16 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=hziN90N_mvM |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 6-27-16  good ... |
| `title` | 5/5 (100%) | City Council 6-27-16 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=jVHsxLf6R1c`

- **Vector count**: 5
- **Sample IDs**: `fc-council-jVHsxLf6R1c-4`, `fc-council-jVHsxLf6R1c-1`, `fc-council-jVHsxLf6R1c-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 2-26-24 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 2-26-24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=jVHsxLf6R1c |
| `text` | 5/5 (100%) | m. and just as a side note Rebecca let me know that we have to have a 15minute b... |
| `title` | 5/5 (100%) | City Council 2-26-24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=iTqcOmrcFcg`

- **Vector count**: 5
- **Sample IDs**: `fc-council-iTqcOmrcFcg-2`, `fc-council-iTqcOmrcFcg-1`, `fc-council-iTqcOmrcFcg-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 12.16.24 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 12.16.24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=iTqcOmrcFcg |
| `text` | 5/5 (100%) | 20 a year so $7. 20 a year for for however much mulch you would like to take out... |
| `title` | 5/5 (100%) | City Council 12.16.24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=p8vpZl-YIew`

- **Vector count**: 5
- **Sample IDs**: `fc-council-p8vpZl-YIew-1`, `fc-council-p8vpZl-YIew-0`, `fc-council-p8vpZl-YIew-2`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 9-23-13 |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 9-23-13 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=p8vpZl-YIew |
| `text` | 5/5 (100%) | 5% of the initial construction cost if the cost of the work is 4. 5 million or m... |
| `title` | 5/5 (100%) | Fairfield City Council 9-23-13 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=sHzU1bQ41R4`

- **Vector count**: 5
- **Sample IDs**: `fc-council-sHzU1bQ41R4-1`, `fc-council-sHzU1bQ41R4-2`, `fc-council-sHzU1bQ41R4-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 8-24-15 |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 8-24-15 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=sHzU1bQ41R4 |
| `text` | 5/5 (100%) | here at City Hall that's going to be an open house information session is that r... |
| `title` | 5/5 (100%) | Fairfield City Council 8-24-15 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=sBp5dG-yLd8`

- **Vector count**: 5
- **Sample IDs**: `fc-council-sBp5dG-yLd8-0`, `fc-council-sBp5dG-yLd8-4`, `fc-council-sBp5dG-yLd8-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `filename` | 5/5 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=sBp5dG-yLd8 |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Study S... |
| `title` | 5/5 (100%) | City of Fairfield \| Study Session & City Council 1.13.25 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=w6NJktUjd70`

- **Vector count**: 5
- **Sample IDs**: `fc-council-w6NJktUjd70-2`, `fc-council-w6NJktUjd70-3`, `fc-council-w6NJktUjd70-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 1-8-24 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 1-8-24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=w6NJktUjd70 |
| `text` | 5/5 (100%) | org and that's where people can go to find out about volunteer opportunities and... |
| `title` | 5/5 (100%) | City Council 1-8-24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wQ_0zcv-VuY`

- **Vector count**: 5
- **Sample IDs**: `fc-council-wQ_0zcv-VuY-0`, `fc-council-wQ_0zcv-VuY-3`, `fc-council-wQ_0zcv-VuY-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 7-22-13 |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 7-22-13 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=wQ_0zcv-VuY |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 7-22... |
| `title` | 5/5 (100%) | Fairfield City Council 7-22-13 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ynZl30PFOmo`

- **Vector count**: 5
- **Sample IDs**: `fc-council-ynZl30PFOmo-4`, `fc-council-ynZl30PFOmo-3`, `fc-council-ynZl30PFOmo-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `file` | 5/5 (100%) | City Council Meeting — null — City Council 3-25-24 |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 3-25-24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=ynZl30PFOmo |
| `text` | 5/5 (100%) | 60 we recommend a reduction uh to 51569 and we recommend a reduction in the bill... |
| `title` | 5/5 (100%) | City Council 3-25-24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.fairfieldmediacenter.com/fairfieldcitycouncil`

- **Vector count**: 5
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-6`, `fmc-aHR0cHM6Ly93d3cuZmFp-7`, `fmc-aHR0cHM6Ly93d3cuZmFp-8`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | arts-culture |
| `file` | 5/5 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/fairfieldcitycounc... |
| `filename` | 5/5 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/fairfieldcitycounc... |
| `org` | 5/5 (100%) | Fairfield Media Center |
| `source` | 5/5 (100%) | https://www.fairfieldmediacenter.com/fairfieldcitycouncil |
| `text` | 5/5 (100%) | 30:27 \| CONSENT AGENDA Approval of the minutes of the February 9, 2026 Council m... |
| `type` | 5/5 (100%) | community_org |

### `https://www.intelligentcommunity.org/smart21`

- **Vector count**: 5
- **Sample IDs**: `icf-fa7447057ff1472afc7cf551-3`, `icf-fa7447057ff1472afc7cf551-4`, `icf-fa7447057ff1472afc7cf551-0`
- **ID patterns**: `orgId-sha24-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | civic-knowledge |
| `file` | 5/5 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/smart21 |
| `filename` | 5/5 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/smart21 |
| `org` | 5/5 (100%) | Intelligent Community Forum |
| `source` | 5/5 (100%) | https://www.intelligentcommunity.org/smart21 |
| `text` | 5/5 (100%) | Montreal Metropolitan Area, Quebec, Canada Whanganui, New Zealand Nairobi County... |
| `type` | 5/5 (100%) | community_org |

### `https://www.intelligentcommunity.org/blog`

- **Vector count**: 5
- **Sample IDs**: `icf-cd06bf3b23db3a6043f4d44d-4`, `icf-cd06bf3b23db3a6043f4d44d-3`, `icf-cd06bf3b23db3a6043f4d44d-1`
- **ID patterns**: `orgId-sha24-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | civic-knowledge |
| `file` | 5/5 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/blog |
| `filename` | 5/5 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/blog |
| `org` | 5/5 (100%) | Intelligent Community Forum |
| `source` | 5/5 (100%) | https://www.intelligentcommunity.org/blog |
| `text` | 5/5 (100%) | For the past three years, the Intelligent Community Forum has taken a delegation... |
| `type` | 5/5 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=100`

- **Vector count**: 5
- **Sample IDs**: `minutes-100.pdf-chunk-1`, `minutes-100.pdf-chunk-2`, `minutes-100.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-100.pdf |
| `filename` | 5/5 (100%) | minutes-100.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=100 |
| `text` | 5/5 (100%) | LAIMS IN    THE AMOUNT OF $321,326.00.    APPEARENCES  Tammy Jones, representing... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=128`

- **Vector count**: 5
- **Sample IDs**: `minutes-128.pdf-chunk-0`, `minutes-128.pdf-chunk-2`, `minutes-128.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-128.pdf |
| `filename` | 5/5 (100%) | minutes-128.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=128 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    February 25, 2013      The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=139`

- **Vector count**: 5
- **Sample IDs**: `minutes-139.pdf-chunk-3`, `minutes-139.pdf-chunk-1`, `minutes-139.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-139.pdf |
| `filename` | 5/5 (100%) | minutes-139.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=139 |
| `text` | 5/5 (100%) | Moved by Halley, seconded by Hamilton   AYES:  Halley, Hamilton, Hammes, Rasmuss... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=189`

- **Vector count**: 5
- **Sample IDs**: `minutes-189.pdf-chunk-2`, `minutes-189.pdf-chunk-4`, `minutes-189.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-189.pdf |
| `filename` | 5/5 (100%) | minutes-189.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=189 |
| `text` | 5/5 (100%) | en   AYES:  Hammes, Ledger-Kalen, Rasmussen, Hamilton, Halley, Boyer      TO ADO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=150`

- **Vector count**: 5
- **Sample IDs**: `minutes-150.pdf-chunk-4`, `minutes-150.pdf-chunk-3`, `minutes-150.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-150.pdf |
| `filename` | 5/5 (100%) | minutes-150.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=150 |
| `text` | 5/5 (100%) | D    HEMPSTEAD AVENUE PROJECT TO CROSS    IRON IN THE AMOUNT OF $93,390.00.    M... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=190`

- **Vector count**: 5
- **Sample IDs**: `minutes-190.pdf-chunk-0`, `minutes-190.pdf-chunk-4`, `minutes-190.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-190.pdf |
| `filename` | 5/5 (100%) | minutes-190.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=190 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    November 12, 2013    Mayor Pro Tem ca... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=147`

- **Vector count**: 5
- **Sample IDs**: `minutes-147.pdf-chunk-2`, `minutes-147.pdf-chunk-4`, `minutes-147.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-147.pdf |
| `filename` | 5/5 (100%) | minutes-147.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=147 |
| `text` | 5/5 (100%) | EVENUE CAPITAL LOAN NOTES    OF THE CITY OF FAIRFIELD, IOWA.    Moved by Boyer, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=228`

- **Vector count**: 5
- **Sample IDs**: `minutes-228.pdf-chunk-1`, `minutes-228.pdf-chunk-4`, `minutes-228.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-228.pdf |
| `filename` | 5/5 (100%) | minutes-228.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=228 |
| `text` | 5/5 (100%) | PROVE OPERATING CLAIMS IN THE AMOUNT    OF $$225,027.43.    RESOLUTIONS, ACTION ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=224`

- **Vector count**: 5
- **Sample IDs**: `minutes-224.pdf-chunk-4`, `minutes-224.pdf-chunk-3`, `minutes-224.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-224.pdf |
| `filename` | 5/5 (100%) | minutes-224.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=224 |
| `text` | 5/5 (100%) | oncerning an accounting procedure in the water department be approved to  allow ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=230`

- **Vector count**: 5
- **Sample IDs**: `minutes-230.pdf-chunk-2`, `minutes-230.pdf-chunk-3`, `minutes-230.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-230.pdf |
| `filename` | 5/5 (100%) | minutes-230.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=230 |
| `text` | 5/5 (100%) | r-Kalen   AYES:  Halley, Ledger-Kalen, Flournoy, Hammes, Revolinski, Rasmussen, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=236`

- **Vector count**: 5
- **Sample IDs**: `minutes-236.pdf-chunk-4`, `minutes-236.pdf-chunk-1`, `minutes-236.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-236.pdf |
| `filename` | 5/5 (100%) | minutes-236.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=236 |
| `text` | 5/5 (100%) | lton, Flournoy, Ledger-Kalen, Rasmussen, Revolinski, Halley      TO ADJOURN AT 8... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=250`

- **Vector count**: 5
- **Sample IDs**: `minutes-250.pdf-chunk-3`, `minutes-250.pdf-chunk-4`, `minutes-250.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-250.pdf |
| `filename` | 5/5 (100%) | minutes-250.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=250 |
| `text` | 5/5 (100%) |    Moved by Revolinski, seconded by Flournoy   AYES:  Revolinski, Flournoy, Ledg... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=241`

- **Vector count**: 5
- **Sample IDs**: `minutes-241.pdf-chunk-0`, `minutes-241.pdf-chunk-3`, `minutes-241.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-241.pdf |
| `filename` | 5/5 (100%) | minutes-241.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=241 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    September 22, 2014        The Fairfie... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=291`

- **Vector count**: 5
- **Sample IDs**: `minutes-291.pdf-chunk-3`, `minutes-291.pdf-chunk-1`, `minutes-291.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-291.pdf |
| `filename` | 5/5 (100%) | minutes-291.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=291 |
| `text` | 5/5 (100%) | on, seconded by Flournoy   AYES:  Hamilton, Flournoy, Rasmussen, Halley, Revolin... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=308`

- **Vector count**: 5
- **Sample IDs**: `minutes-308.pdf-chunk-3`, `minutes-308.pdf-chunk-0`, `minutes-308.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-308.pdf |
| `filename` | 5/5 (100%) | minutes-308.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=308 |
| `text` | 5/5 (100%) | would like to set a work session for Saturday, February 6, 2016 from 9:00  a.m. ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=307`

- **Vector count**: 5
- **Sample IDs**: `minutes-307.pdf-chunk-1`, `minutes-307.pdf-chunk-3`, `minutes-307.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-307.pdf |
| `filename` | 5/5 (100%) | minutes-307.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=307 |
| `text` | 5/5 (100%) | PPROVE OPERATING CLAIMS IN THE    AMOUNT OF $669,597.37.    PUBLIC FORUM/APPEARA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=309`

- **Vector count**: 5
- **Sample IDs**: `minutes-309.pdf-chunk-2`, `minutes-309.pdf-chunk-0`, `minutes-309.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-309.pdf |
| `filename` | 5/5 (100%) | minutes-309.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=309 |
| `text` | 5/5 (100%) | nderson      TO ADOPT RESOLUTION NO. 3309 WHICH IS    A TAX ABATEMENT APPLICATIO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=324`

- **Vector count**: 5
- **Sample IDs**: `minutes-324.pdf-chunk-0`, `minutes-324.pdf-chunk-2`, `minutes-324.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-324.pdf |
| `filename` | 5/5 (100%) | minutes-324.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=324 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL MEETING    July 11, 2016      The Fairfi... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=316`

- **Vector count**: 5
- **Sample IDs**: `minutes-316.pdf-chunk-1`, `minutes-316.pdf-chunk-0`, `minutes-316.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-316.pdf |
| `filename` | 5/5 (100%) | minutes-316.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=316 |
| `text` | 5/5 (100%) | T    AND TRANSFERS.      TO APPROVE RESOLUTION NO. 3351 PROVIDING    EMPLOYMENT ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=326`

- **Vector count**: 5
- **Sample IDs**: `minutes-326.pdf-chunk-2`, `minutes-326.pdf-chunk-0`, `minutes-326.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-326.pdf |
| `filename` | 5/5 (100%) | minutes-326.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=326 |
| `text` | 5/5 (100%) | PT THE CAMBRIDGE SPORTSPLEX    BID PACKAGE #5 ROOFING & SHEET METAL    AS FINAL.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=315`

- **Vector count**: 5
- **Sample IDs**: `minutes-315.pdf-chunk-0`, `minutes-315.pdf-chunk-2`, `minutes-315.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-315.pdf |
| `filename` | 5/5 (100%) | minutes-315.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=315 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL MEETING  May 9, 2016    The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=344`

- **Vector count**: 5
- **Sample IDs**: `minutes-344.pdf-chunk-2`, `minutes-344.pdf-chunk-3`, `minutes-344.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-344.pdf |
| `filename` | 5/5 (100%) | minutes-344.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=344 |
| `text` | 5/5 (100%) |  COST FOR THE SANITARY SEWER CONVEYANCE    IMPROVEMENTS – ADDITION TO STEP 1.   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=383`

- **Vector count**: 5
- **Sample IDs**: `minutes-383.pdf-chunk-4`, `minutes-383.pdf-chunk-3`, `minutes-383.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-383.pdf |
| `filename` | 5/5 (100%) | minutes-383.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=383 |
| `text` | 5/5 (100%) |    ADJOURNMENT  Moved by Hamilton, seconded by Flournoy   AYES:  Hamilton, Flour... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=363`

- **Vector count**: 5
- **Sample IDs**: `minutes-363.pdf-chunk-2`, `minutes-363.pdf-chunk-3`, `minutes-363.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-363.pdf |
| `filename` | 5/5 (100%) | minutes-363.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=363 |
| `text` | 5/5 (100%) | ICER JAY ZAISER WITH HIS WEAPON AND BADGE    TO HONOR HIS LONGEVITY AND SERVICE.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=366`

- **Vector count**: 5
- **Sample IDs**: `minutes-366.pdf-chunk-3`, `minutes-366.pdf-chunk-0`, `minutes-366.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-366.pdf |
| `filename` | 5/5 (100%) | minutes-366.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=366 |
| `text` | 5/5 (100%) | A; Consented to   STEP II Sanitary Sewer Improvement Project alignment recommend... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=433`

- **Vector count**: 5
- **Sample IDs**: `minutes-433.pdf-chunk-1`, `minutes-433.pdf-chunk-2`, `minutes-433.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-433.pdf |
| `filename` | 5/5 (100%) | minutes-433.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=433 |
| `text` | 5/5 (100%) |  seconded by Gandy   AYES:  Flournoy, Gandy, Halley, Anderson and Twohill    TO ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=463`

- **Vector count**: 5
- **Sample IDs**: `minutes-463.pdf-chunk-2`, `minutes-463.pdf-chunk-1`, `minutes-463.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-463.pdf |
| `filename` | 5/5 (100%) | minutes-463.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=463 |
| `text` | 5/5 (100%) | nd Halley       TO ACCEPT THE FY19 ANNUAL  URBAN RENEWAL REPORT.    Moved by And... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=47`

- **Vector count**: 5
- **Sample IDs**: `minutes-47.pdf-chunk-4`, `minutes-47.pdf-chunk-2`, `minutes-47.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-47.pdf |
| `filename` | 5/5 (100%) | minutes-47.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=47 |
| `text` | 5/5 (100%) | EFF CLAWSON, TO PRESENT TWO    SEPARATE PROPOSALS AT THE    NEXT JEFFERSON COUNT... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=469`

- **Vector count**: 5
- **Sample IDs**: `minutes-469.pdf-chunk-2`, `minutes-469.pdf-chunk-1`, `minutes-469.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-469.pdf |
| `filename` | 5/5 (100%) | minutes-469.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=469 |
| `text` | 5/5 (100%) | COMPREHENSIVE PLAN.    Moved by Rasmussen, seconded by Flournoy   AYES:  Gandy, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=662`

- **Vector count**: 5
- **Sample IDs**: `minutes-662.pdf-chunk-2`, `minutes-662.pdf-chunk-3`, `minutes-662.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-662.pdf |
| `filename` | 5/5 (100%) | minutes-662.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=662 |
| `text` | 5/5 (100%) | S PRESENTED    BY THE OFFICE OF AUDITOR OF STATE.    Moved by Flournoy, seconded... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=75`

- **Vector count**: 5
- **Sample IDs**: `minutes-75.pdf-chunk-1`, `minutes-75.pdf-chunk-4`, `minutes-75.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-75.pdf |
| `filename` | 5/5 (100%) | minutes-75.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=75 |
| `text` | 5/5 (100%) | T OF $744,120.88.    RESOLUTIONS, ACTION ITEMS & ORDINANCES  Moved by Adam, seco... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=79`

- **Vector count**: 5
- **Sample IDs**: `minutes-79.pdf-chunk-4`, `minutes-79.pdf-chunk-3`, `minutes-79.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 5/5 (100%) | minutes-79.pdf |
| `filename` | 5/5 (100%) | minutes-79.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=79 |
| `text` | 5/5 (100%) | lso swore in newly elected 3 rd  ward councilmember, Anthony  Hammes.    ADJOURN... |

### `https://www.miu.edu/bachelors-in-ayurveda-wellness-and-integrative-health`

- **Vector count**: 5
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-33`, `miu-aHR0cHM6Ly93d3cubWl1-34`, `miu-aHR0cHM6Ly93d3cubWl1-35`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | education |
| `file` | 5/5 (100%) | Maharishi International University — https://www.miu.edu/bachelors-in-ayurveda-w... |
| `filename` | 5/5 (100%) | Maharishi International University — https://www.miu.edu/bachelors-in-ayurveda-w... |
| `org` | 5/5 (100%) | Maharishi International University |
| `source` | 5/5 (100%) | https://www.miu.edu/bachelors-in-ayurveda-wellness-and-integrative-health |
| `text` | 5/5 (100%) | I already have a license in some form of healthcare — what will this program do ... |
| `type` | 5/5 (100%) | community_org |

### `https://www.youtube.com/watch?v=5w85WvJRzuI`

- **Vector count**: 4
- **Sample IDs**: `fc-council-5w85WvJRzuI-0`, `fc-council-5w85WvJRzuI-1`, `fc-council-5w85WvJRzuI-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 8-10-15 |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 8-10-15 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=5w85WvJRzuI |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 8-10... |
| `title` | 4/4 (100%) | Fairfield City Council 8-10-15 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Dnz7Wm5hqO4`

- **Vector count**: 4
- **Sample IDs**: `fc-council-Dnz7Wm5hqO4-1`, `fc-council-Dnz7Wm5hqO4-0`, `fc-council-Dnz7Wm5hqO4-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 6-10-24 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 6-10-24 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=Dnz7Wm5hqO4 |
| `text` | 4/4 (100%) | 15 two to issue debt to reimburse the city for certain original expenditures pai... |
| `title` | 4/4 (100%) | City Council 6-10-24 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GS2WcDpKlhw`

- **Vector count**: 4
- **Sample IDs**: `fc-council-GS2WcDpKlhw-3`, `fc-council-GS2WcDpKlhw-2`, `fc-council-GS2WcDpKlhw-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 1-22-18 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 1-22-18 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=GS2WcDpKlhw |
| `text` | 4/4 (100%) | Hawley and I've been talking about last week with the media is our traffic accid... |
| `title` | 4/4 (100%) | City Council 1-22-18 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=I8DDy8thKwA`

- **Vector count**: 4
- **Sample IDs**: `fc-council-I8DDy8thKwA-0`, `fc-council-I8DDy8thKwA-2`, `fc-council-I8DDy8thKwA-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 10-10-22 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 10-10-22 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=I8DDy8thKwA |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-10-22  I'm ... |
| `title` | 4/4 (100%) | City Council 10-10-22 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=JQ1_VKGzEs0`

- **Vector count**: 4
- **Sample IDs**: `fc-council-JQ1_VKGzEs0-3`, `fc-council-JQ1_VKGzEs0-1`, `fc-council-JQ1_VKGzEs0-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 10-27-14 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 10-27-14 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=JQ1_VKGzEs0 |
| `text` | 4/4 (100%) | we will all meet here i presume we're in the conference room we'll do a phone in... |
| `title` | 4/4 (100%) | City Council 10-27-14 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=NrNwZeUEWGM`

- **Vector count**: 4
- **Sample IDs**: `fc-council-NrNwZeUEWGM-2`, `fc-council-NrNwZeUEWGM-0`, `fc-council-NrNwZeUEWGM-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 11.12.24 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 11.12.24 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=NrNwZeUEWGM |
| `text` | 4/4 (100%) | m. and setting a public hearing on urban renewal plan Monday December 16 2024 at... |
| `title` | 4/4 (100%) | City Council 11.12.24 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=NOp2kjWrJnA`

- **Vector count**: 4
- **Sample IDs**: `fc-council-NOp2kjWrJnA-2`, `fc-council-NOp2kjWrJnA-1`, `fc-council-NOp2kjWrJnA-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council \| Care Ambulance, LLC \| 12-27-22 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council \| Care Ambulance, LLC \| 12-27-22 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=NOp2kjWrJnA |
| `text` | 4/4 (100%) | ultimately it would be 30 000 for the remainder of the contract which is January... |
| `title` | 4/4 (100%) | City Council \| Care Ambulance, LLC \| 12-27-22 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=LbpoQQ39a-E`

- **Vector count**: 4
- **Sample IDs**: `fc-council-LbpoQQ39a-E-2`, `fc-council-LbpoQQ39a-E-3`, `fc-council-LbpoQQ39a-E-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 7-23-18 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 7-23-18 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=LbpoQQ39a-E |
| `text` | 4/4 (100%) | I obtained a motion to approve move to approve move by Hamilton second second by... |
| `title` | 4/4 (100%) | City Council 7-23-18 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QYQLA90BRn0`

- **Vector count**: 4
- **Sample IDs**: `fc-council-QYQLA90BRn0-0`, `fc-council-QYQLA90BRn0-1`, `fc-council-QYQLA90BRn0-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 3-14-16 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 3-14-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=QYQLA90BRn0 |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 3-14-16  we wi... |
| `title` | 4/4 (100%) | City Council 3-14-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=RYivRsbS73s`

- **Vector count**: 4
- **Sample IDs**: `fc-council-RYivRsbS73s-0`, `fc-council-RYivRsbS73s-3`, `fc-council-RYivRsbS73s-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 1-22-24 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 1-22-24 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=RYivRsbS73s |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 1-22-24  do yo... |
| `title` | 4/4 (100%) | City Council 1-22-24 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Seo1uXiCgtA`

- **Vector count**: 4
- **Sample IDs**: `fc-council-Seo1uXiCgtA-0`, `fc-council-Seo1uXiCgtA-1`, `fc-council-Seo1uXiCgtA-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council Meeting 2-9-15 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council Meeting 2-9-15 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=Seo1uXiCgtA |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: City Council Meeting 2-9-15... |
| `title` | 4/4 (100%) | City Council Meeting 2-9-15 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=V081K7mBOb4`

- **Vector count**: 4
- **Sample IDs**: `fc-council-V081K7mBOb4-3`, `fc-council-V081K7mBOb4-1`, `fc-council-V081K7mBOb4-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 12-16-13 |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 12-16-13 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=V081K7mBOb4 |
| `text` | 4/4 (100%) | 37 move to approve move by Hamilton second second by rasmon please call The rool... |
| `title` | 4/4 (100%) | Fairfield City Council 12-16-13 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=WCDCUudgktA`

- **Vector count**: 4
- **Sample IDs**: `fc-council-WCDCUudgktA-3`, `fc-council-WCDCUudgktA-1`, `fc-council-WCDCUudgktA-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 5-23-16 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 5-23-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=WCDCUudgktA |
| `text` | 4/4 (100%) | Anthony we're from the University of Iowa we'd like to thank you all for the inv... |
| `title` | 4/4 (100%) | City Council 5-23-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=XdHUrZ70KNg`

- **Vector count**: 4
- **Sample IDs**: `fc-council-XdHUrZ70KNg-0`, `fc-council-XdHUrZ70KNg-1`, `fc-council-XdHUrZ70KNg-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City of Fairfield \| Special City Council Meeting 1... |
| `filename` | 4/4 (100%) | City Council Meeting — null — City of Fairfield \| Special City Council Meeting 1... |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=XdHUrZ70KNg |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Special... |
| `title` | 4/4 (100%) | City of Fairfield \| Special City Council Meeting 1.2.26 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Xm9jGvs6-8s`

- **Vector count**: 4
- **Sample IDs**: `fc-council-Xm9jGvs6-8s-2`, `fc-council-Xm9jGvs6-8s-1`, `fc-council-Xm9jGvs6-8s-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 11-27-17 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 11-27-17 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=Xm9jGvs6-8s |
| `text` | 4/4 (100%) | mean there is something else probably right yes sir that would be then I have a ... |
| `title` | 4/4 (100%) | City Council 11-27-17 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=aOjwy72lP6E`

- **Vector count**: 4
- **Sample IDs**: `fc-council-aOjwy72lP6E-1`, `fc-council-aOjwy72lP6E-0`, `fc-council-aOjwy72lP6E-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 10-22-18 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 10-22-18 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=aOjwy72lP6E |
| `text` | 4/4 (100%) | motion to approve the public hearing sinneth move by anderson second second by G... |
| `title` | 4/4 (100%) | City Council 10-22-18 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=bQwarKpdJK8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-bQwarKpdJK8-0`, `fc-council-bQwarKpdJK8-2`, `fc-council-bQwarKpdJK8-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council meeting on 1-29-13 |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council meeting on 1-29-13 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=bQwarKpdJK8 |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council meet... |
| `title` | 4/4 (100%) | Fairfield City Council meeting on 1-29-13 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=aP9tzam-FPI`

- **Vector count**: 4
- **Sample IDs**: `fc-council-aP9tzam-FPI-3`, `fc-council-aP9tzam-FPI-0`, `fc-council-aP9tzam-FPI-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 4-11-16 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 4-11-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=aP9tzam-FPI |
| `text` | 4/4 (100%) | 9 was that the short-term borrowing that we did what was the revenue stream to r... |
| `title` | 4/4 (100%) | City Council 4-11-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cX4NWiDKltI`

- **Vector count**: 4
- **Sample IDs**: `fc-council-cX4NWiDKltI-1`, `fc-council-cX4NWiDKltI-0`, `fc-council-cX4NWiDKltI-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 9-25-17 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 9-25-17 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=cX4NWiDKltI |
| `text` | 4/4 (100%) | m. here at City Hall correct that for the open house salute moved by Flournoy se... |
| `title` | 4/4 (100%) | City Council 9-25-17 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cCNfxzQ4nN8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-cCNfxzQ4nN8-3`, `fc-council-cCNfxzQ4nN8-1`, `fc-council-cCNfxzQ4nN8-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council Meeting 1-26-15 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council Meeting 1-26-15 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=cCNfxzQ4nN8 |
| `text` | 4/4 (100%) | 77 5 in general obligation notes but we'll go through each step here uh the firs... |
| `title` | 4/4 (100%) | City Council Meeting 1-26-15 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=exIyNDdYFX8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-exIyNDdYFX8-0`, `fc-council-exIyNDdYFX8-3`, `fc-council-exIyNDdYFX8-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 2-10-14 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 2-10-14 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=exIyNDdYFX8 |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-10-14  good ... |
| `title` | 4/4 (100%) | City Council 2-10-14 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=eVWD5eY3Ai8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-eVWD5eY3Ai8-0`, `fc-council-eVWD5eY3Ai8-1`, `fc-council-eVWD5eY3Ai8-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 6-9-14 |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 6-9-14 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=eVWD5eY3Ai8 |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 6-9-... |
| `title` | 4/4 (100%) | Fairfield City Council 6-9-14 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=maB8bIVAszk`

- **Vector count**: 4
- **Sample IDs**: `fc-council-maB8bIVAszk-1`, `fc-council-maB8bIVAszk-0`, `fc-council-maB8bIVAszk-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 7-22-24 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 7-22-24 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=maB8bIVAszk |
| `text` | 4/4 (100%) | the barricade and the purpose of it is to help enforce the oneway and School sta... |
| `title` | 4/4 (100%) | City Council 7-22-24 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=lrao1KZZ_L8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-lrao1KZZ_L8-2`, `fc-council-lrao1KZZ_L8-1`, `fc-council-lrao1KZZ_L8-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 2-8-16 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 2-8-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=lrao1KZZ_L8 |
| `text` | 4/4 (100%) | mark Fulton with access energy has approached the city with the request to place... |
| `title` | 4/4 (100%) | City Council 2-8-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=rKGPqhpgE6E`

- **Vector count**: 4
- **Sample IDs**: `fc-council-rKGPqhpgE6E-3`, `fc-council-rKGPqhpgE6E-0`, `fc-council-rKGPqhpgE6E-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council Meeting 7-23-12 |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council Meeting 7-23-12 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=rKGPqhpgE6E |
| `text` | 4/4 (100%) | that are not selling yeah we're selling a lot for fifteen thousand dollars and w... |
| `title` | 4/4 (100%) | Fairfield City Council Meeting 7-23-12 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=rDpna4rFS1s`

- **Vector count**: 4
- **Sample IDs**: `fc-council-rDpna4rFS1s-0`, `fc-council-rDpna4rFS1s-2`, `fc-council-rDpna4rFS1s-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — City Council 9-24-18 |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 9-24-18 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=rDpna4rFS1s |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 9-24-18  right... |
| `title` | 4/4 (100%) | City Council 9-24-18 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=v_41RoxLup0`

- **Vector count**: 4
- **Sample IDs**: `fc-council-v_41RoxLup0-3`, `fc-council-v_41RoxLup0-1`, `fc-council-v_41RoxLup0-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `file` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council Meeting 1-11-16 |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council Meeting 1-11-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=v_41RoxLup0 |
| `text` | 4/4 (100%) | 1 percent and an April closing right now so what our bond counsel has advised us... |
| `title` | 4/4 (100%) | Fairfield City Council Meeting 1-11-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.intelligentcommunity.org/fredericton_new_brunswick_canada_a_connected_capital_building_an_inclusive_intelligent_future`

- **Vector count**: 4
- **Sample IDs**: `icf-aabb97db69d9dcfd421e6775-2`, `icf-aabb97db69d9dcfd421e6775-0`, `icf-aabb97db69d9dcfd421e6775-1`
- **ID patterns**: `orgId-sha24-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | civic-knowledge |
| `file` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/fredericton_n... |
| `filename` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/fredericton_n... |
| `org` | 4/4 (100%) | Intelligent Community Forum |
| `source` | 4/4 (100%) | https://www.intelligentcommunity.org/fredericton_new_brunswick_canada_a_connecte... |
| `text` | 4/4 (100%) | The Defence Sector represents another major pillar of future growth. With proxim... |
| `type` | 4/4 (100%) | community_org |

### `https://www.intelligentcommunity.org/free_downloads`

- **Vector count**: 4
- **Sample IDs**: `icf-412dbeca94afca8cdbc4e0c2-2`, `icf-412dbeca94afca8cdbc4e0c2-3`, `icf-412dbeca94afca8cdbc4e0c2-1`
- **ID patterns**: `orgId-sha24-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | civic-knowledge |
| `file` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/free_download... |
| `filename` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/free_download... |
| `org` | 4/4 (100%) | Intelligent Community Forum |
| `source` | 4/4 (100%) | https://www.intelligentcommunity.org/free_downloads |
| `text` | 4/4 (100%) | Broadband: The Essential Utility Broadband is the next essential utility, as vit... |
| `type` | 4/4 (100%) | community_org |

### `https://www.jeffersoncofair.com/schedule`

- **Vector count**: 4
- **Sample IDs**: `jc-fair-aHR0cHM6Ly93d3cuamVm-2`, `jc-fair-aHR0cHM6Ly93d3cuamVm-0`, `jc-fair-aHR0cHM6Ly93d3cuamVm-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | civic |
| `file` | 4/4 (100%) | Jefferson County Fair — https://www.jeffersoncofair.com/schedule |
| `filename` | 4/4 (100%) | Jefferson County Fair — https://www.jeffersoncofair.com/schedule |
| `org` | 4/4 (100%) | Jefferson County Fair |
| `source` | 4/4 (100%) | https://www.jeffersoncofair.com/schedule |
| `text` | 4/4 (100%) | 1:00 PM to 11:00 PM Kenny's Funland Carnival "A Magical Midway" 2:00 PM Clover K... |
| `type` | 4/4 (100%) | community_org |

### `https://www.intelligentcommunity.org/press_releases`

- **Vector count**: 4
- **Sample IDs**: `icf-f35da2c950690d2c6a294088-0`, `icf-f35da2c950690d2c6a294088-3`, `icf-f35da2c950690d2c6a294088-2`
- **ID patterns**: `orgId-sha24-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | civic-knowledge |
| `file` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/press_release... |
| `filename` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/press_release... |
| `org` | 4/4 (100%) | Intelligent Community Forum |
| `source` | 4/4 (100%) | https://www.intelligentcommunity.org/press_releases |
| `text` | 4/4 (100%) | Press Releases at Intelligent Community Forum Durham Region, Ontario, Canada Nam... |
| `type` | 4/4 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=109`

- **Vector count**: 4
- **Sample IDs**: `minutes-109.pdf-chunk-1`, `minutes-109.pdf-chunk-3`, `minutes-109.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-109.pdf |
| `filename` | 4/4 (100%) | minutes-109.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=109 |
| `text` | 4/4 (100%) | ING CLAIMS IN    THE AMOUNT OF $475,293.07.    RESOLUTIONS, ACTION ITEMS & ORDIN... |

### `opportunityiowa.gov`

- **Vector count**: 4
- **Sample IDs**: `mainstreet_fairfield_chunk_2`, `mainstreet_fairfield_chunk_0`, `mainstreet_fairfield_chunk_3`
- **ID patterns**: `prefix_name_chunk_N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | economic_development |
| `chunkIndex` | 4/4 (100%) | 2 |
| `fileName` | 4/4 (100%) | mainstreet_fairfield.txt |
| `filename` | 4/4 (100%) | mainstreet_fairfield.txt |
| `source` | 4/4 (100%) | opportunityiowa.gov |
| `subcategory` | 4/4 (100%) | downtown_revitalization |
| `text` | 4/4 (100%) | ive Director, Fairfield Area Chamber of Commerce), Denise Hall (Chair, Main Stre... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=106`

- **Vector count**: 4
- **Sample IDs**: `minutes-106.pdf-chunk-0`, `minutes-106.pdf-chunk-2`, `minutes-106.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-106.pdf |
| `filename` | 4/4 (100%) | minutes-106.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=106 |
| `text` | 4/4 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    June 11, 2012        The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=126`

- **Vector count**: 4
- **Sample IDs**: `minutes-126.pdf-chunk-0`, `minutes-126.pdf-chunk-1`, `minutes-126.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-126.pdf |
| `filename` | 4/4 (100%) | minutes-126.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=126 |
| `text` | 4/4 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    February 11, 2013      The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=116`

- **Vector count**: 4
- **Sample IDs**: `minutes-116.pdf-chunk-1`, `minutes-116.pdf-chunk-0`, `minutes-116.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-116.pdf |
| `filename` | 4/4 (100%) | minutes-116.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=116 |
| `text` | 4/4 (100%) | TO SUSPEND THE RULES.    Moved by Boyer, seconded by Hamilton   AYES:  Boyer, Ha... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=119`

- **Vector count**: 4
- **Sample IDs**: `minutes-119.pdf-chunk-3`, `minutes-119.pdf-chunk-0`, `minutes-119.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-119.pdf |
| `filename` | 4/4 (100%) | minutes-119.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=119 |
| `text` | 4/4 (100%) | ved by Hamilton, seconded by Hammes   AYES:  Hamilton, Hammes, Revolinski, Boyer... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=120`

- **Vector count**: 4
- **Sample IDs**: `minutes-120.pdf-chunk-0`, `minutes-120.pdf-chunk-2`, `minutes-120.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-120.pdf |
| `filename` | 4/4 (100%) | minutes-120.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=120 |
| `text` | 4/4 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  November 13, 2012      The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=148`

- **Vector count**: 4
- **Sample IDs**: `minutes-148.pdf-chunk-1`, `minutes-148.pdf-chunk-2`, `minutes-148.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-148.pdf |
| `filename` | 4/4 (100%) | minutes-148.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=148 |
| `text` | 4/4 (100%) | 95 RATIFYING, CONFIRMING,    AND APPROVING PUBLICATIONS OF NOTICE OF    PUBLIC H... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=239`

- **Vector count**: 4
- **Sample IDs**: `minutes-239.pdf-chunk-1`, `minutes-239.pdf-chunk-2`, `minutes-239.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-239.pdf |
| `filename` | 4/4 (100%) | minutes-239.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=239 |
| `text` | 4/4 (100%) | ject.    Dr. Richard Fursman from Brimeyer Fursman, LLC gave a presentation at t... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=281`

- **Vector count**: 4
- **Sample IDs**: `minutes-281.pdf-chunk-0`, `minutes-281.pdf-chunk-1`, `minutes-281.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-281.pdf |
| `filename` | 4/4 (100%) | minutes-281.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=281 |
| `text` | 4/4 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL MEETING    June 8, 2015      The Fairfie... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=362`

- **Vector count**: 4
- **Sample IDs**: `minutes-362.pdf-chunk-0`, `minutes-362.pdf-chunk-1`, `minutes-362.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-362.pdf |
| `filename` | 4/4 (100%) | minutes-362.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=362 |
| `text` | 4/4 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNICL    July 17, 2017        The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=369`

- **Vector count**: 4
- **Sample IDs**: `minutes-369.pdf-chunk-2`, `minutes-369.pdf-chunk-0`, `minutes-369.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-369.pdf |
| `filename` | 4/4 (100%) | minutes-369.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=369 |
| `text` | 4/4 (100%) | amilton, Flournoy, Halley, Thompson, Revolinski, Anderson      TO APPROVE CHANGE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=394`

- **Vector count**: 4
- **Sample IDs**: `minutes-394.pdf-chunk-3`, `minutes-394.pdf-chunk-0`, `minutes-394.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-394.pdf |
| `filename` | 4/4 (100%) | minutes-394.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=394 |
| `text` | 4/4 (100%) | SSISTANCE WITH THE UNITED    STATES DEPARTMENT OF     AGRICULTURE, RURAL DEVELOP... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=465`

- **Vector count**: 4
- **Sample IDs**: `minutes-465.pdf-chunk-0`, `minutes-465.pdf-chunk-1`, `minutes-465.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-465.pdf |
| `filename` | 4/4 (100%) | minutes-465.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=465 |
| `text` | 4/4 (100%) |     MINUTES OF THE FAIRFIELD CITY COUNCIL    January 2, 2020        The Fairfiel... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=51`

- **Vector count**: 4
- **Sample IDs**: `minutes-51.pdf-chunk-1`, `minutes-51.pdf-chunk-2`, `minutes-51.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-51.pdf |
| `filename` | 4/4 (100%) | minutes-51.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=51 |
| `text` | 4/4 (100%) | on to close East  Broadway Street from Chatauqua Park to D Street from 7:00 to 9... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=53`

- **Vector count**: 4
- **Sample IDs**: `minutes-53.pdf-chunk-3`, `minutes-53.pdf-chunk-1`, `minutes-53.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-53.pdf |
| `filename` | 4/4 (100%) | minutes-53.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=53 |
| `text` | 4/4 (100%) |  2828    SETTING A PUBLIC HEARING ON    JUNE 13 TH  FOR AN URBAN RENEWAL    DIST... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=52`

- **Vector count**: 4
- **Sample IDs**: `minutes-52.pdf-chunk-3`, `minutes-52.pdf-chunk-1`, `minutes-52.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-52.pdf |
| `filename` | 4/4 (100%) | minutes-52.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=52 |
| `text` | 4/4 (100%) | NG TO THE THIRD READING    OF ORDINANCE NO. 1063 IMPLEMENTING    A PARKING BOOT.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=771`

- **Vector count**: 4
- **Sample IDs**: `minutes-771.pdf-chunk-3`, `minutes-771.pdf-chunk-0`, `minutes-771.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 4/4 (100%) | minutes-771.pdf |
| `filename` | 4/4 (100%) | minutes-771.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=771 |
| `text` | 4/4 (100%) |   AYES:  Estey, Ferguson, Gandy and Thompson      TO ADJOURN AT 12:47 P.M.    Su... |

### `https://www.youtube.com/watch?v=vIEigsx_s_E`

- **Vector count**: 4
- **Sample IDs**: `traction-thursdays-vIEigsx_s_E-1`, `traction-thursdays-vIEigsx_s_E-0`, `traction-thursdays-vIEigsx_s_E-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | economic |
| `file` | 4/4 (100%) | Traction Thursday — unknown — Traction Thursday \| Mendy McAdams "Fairfield Area ... |
| `filename` | 4/4 (100%) | Traction Thursday — unknown — Traction Thursday \| Mendy McAdams "Fairfield Area ... |
| `org` | 4/4 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 4/4 (100%) | traction-thursdays |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=vIEigsx_s_E |
| `text` | 4/4 (100%) | they'll start trickling in a little faster and then about um our our biggest tim... |
| `title` | 4/4 (100%) | Traction Thursday \| Mendy McAdams "Fairfield Area Chamber of Commerce" |
| `type` | 4/4 (100%) | traction_thursday |

### `https://www.carryonbags.org/thank-you`

- **Vector count**: 3
- **Sample IDs**: `carry-on-bags-aHR0cHM6Ly93d3cuY2Fy-1`, `carry-on-bags-aHR0cHM6Ly93d3cuY2Fy-3`, `carry-on-bags-aHR0cHM6Ly93d3cuY2Fy-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | human-services |
| `file` | 3/3 (100%) | Carry On Bags — https://www.carryonbags.org/thank-you |
| `filename` | 3/3 (100%) | Carry On Bags — https://www.carryonbags.org/thank-you |
| `org` | 3/3 (100%) | Carry On Bags |
| `source` | 3/3 (100%) | https://www.carryonbags.org/thank-you |
| `text` | 3/3 (100%) | Carry On Bags thanks Girl Scout Troop 4086 and other volunteers for the excellen... |
| `type` | 3/3 (100%) | community_org |

### `https://fairfieldiowafarmersmarket.farm/guidelines-rules-for-merchants`

- **Vector count**: 3
- **Sample IDs**: `fairfield-farmers-market-aHR0cHM6Ly9mYWlyZmll-2`, `fairfield-farmers-market-aHR0cHM6Ly9mYWlyZmll-1`, `fairfield-farmers-market-aHR0cHM6Ly9mYWlyZmll-3`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | community |
| `file` | 3/3 (100%) | Fairfield Farmers Market — https://fairfieldiowafarmersmarket.farm/guidelines-ru... |
| `filename` | 3/3 (100%) | Fairfield Farmers Market — https://fairfieldiowafarmersmarket.farm/guidelines-ru... |
| `org` | 3/3 (100%) | Fairfield Farmers Market |
| `source` | 3/3 (100%) | https://fairfieldiowafarmersmarket.farm/guidelines-rules-for-merchants |
| `text` | 3/3 (100%) | The following products may be sold at farmers market to consumers without being ... |
| `type` | 3/3 (100%) | community_org |

### `https://www.youtube.com/watch?v=-1Kg795WeLI`

- **Vector count**: 3
- **Sample IDs**: `fc-council--1Kg795WeLI-0`, `fc-council--1Kg795WeLI-1`, `fc-council--1Kg795WeLI-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council Work Session 2-26-24 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council Work Session 2-26-24 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=-1Kg795WeLI |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council Work Session 2... |
| `title` | 3/3 (100%) | City Council Work Session 2-26-24 |
| `type` | 3/3 (100%) | council_meeting |

### `sustainablelivingcoalition.org`

- **Vector count**: 3
- **Sample IDs**: `fairfield_community_garden_chunk_0`, `fairfield_community_garden_chunk_1`, `fairfield_community_garden_chunk_2`
- **ID patterns**: `prefix_name_chunk_N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | community_organizations |
| `chunkIndex` | 3/3 (100%) | 0 |
| `fileName` | 3/3 (100%) | fairfield_community_garden.txt |
| `filename` | 3/3 (100%) | fairfield_community_garden.txt |
| `source` | 3/3 (100%) | sustainablelivingcoalition.org |
| `subcategory` | 3/3 (100%) | food_security |
| `text` | 3/3 (100%) | Fairfield Community Garden Sustainable Living Coalition \| https://sustainableliv... |

### `https://www.youtube.com/watch?v=4sXOdNccTaA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-4sXOdNccTaA-2`, `fc-council-4sXOdNccTaA-1`, `fc-council-4sXOdNccTaA-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 4-27-20 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 4-27-20 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=4sXOdNccTaA |
| `text` | 3/3 (100%) | Mary's Church so now you've got multi residential and then along 4th Street curr... |
| `title` | 3/3 (100%) | City Council 4-27-20 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=5msEmMYeEks`

- **Vector count**: 3
- **Sample IDs**: `fc-council-5msEmMYeEks-1`, `fc-council-5msEmMYeEks-2`, `fc-council-5msEmMYeEks-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 2-25-19 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 2-25-19 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=5msEmMYeEks |
| `text` | 3/3 (100%) | Goodman's request to allow for signs to be placed in that area even for a design... |
| `title` | 3/3 (100%) | City Council 2-25-19 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=6BW0BgiYmuo`

- **Vector count**: 3
- **Sample IDs**: `fc-council-6BW0BgiYmuo-2`, `fc-council-6BW0BgiYmuo-0`, `fc-council-6BW0BgiYmuo-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 2-11-13 |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 2-11-13 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=6BW0BgiYmuo |
| `text` | 3/3 (100%) | m. and that's at the Arts and Convention Center and that'll be at those are 90-m... |
| `title` | 3/3 (100%) | Fairfield City Council 2-11-13 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=8eVSY9CsBZA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-8eVSY9CsBZA-1`, `fc-council-8eVSY9CsBZA-0`, `fc-council-8eVSY9CsBZA-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 3-25-13 |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 3-25-13 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=8eVSY9CsBZA |
| `text` | 3/3 (100%) | um so I always love coming back to Fairfield and seeing so many people I recogni... |
| `title` | 3/3 (100%) | Fairfield City Council 3-25-13 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9Lh-7HnZABE`

- **Vector count**: 3
- **Sample IDs**: `fc-council-9Lh-7HnZABE-0`, `fc-council-9Lh-7HnZABE-2`, `fc-council-9Lh-7HnZABE-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City of Fairfield \| Proposed Fire Station Forum 2-... |
| `filename` | 3/3 (100%) | City Council Meeting — null — City of Fairfield \| Proposed Fire Station Forum 2-... |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=9Lh-7HnZABE |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Propose... |
| `title` | 3/3 (100%) | City of Fairfield \| Proposed Fire Station Forum 2-7-22 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=7ENcGqpvz8s`

- **Vector count**: 3
- **Sample IDs**: `fc-council-7ENcGqpvz8s-1`, `fc-council-7ENcGqpvz8s-0`, `fc-council-7ENcGqpvz8s-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — Special Fairfield City Council Meeting |
| `filename` | 3/3 (100%) | City Council Meeting — null — Special Fairfield City Council Meeting |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=7ENcGqpvz8s |
| `text` | 3/3 (100%) | 6 million 4. 6 all the way down there's there's ample paperwork trail here that ... |
| `title` | 3/3 (100%) | Special Fairfield City Council Meeting |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BgKbiB7jRGo`

- **Vector count**: 3
- **Sample IDs**: `fc-council-BgKbiB7jRGo-0`, `fc-council-BgKbiB7jRGo-2`, `fc-council-BgKbiB7jRGo-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 10-11-21 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-11-21 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=BgKbiB7jRGo |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-11-21  i'm ... |
| `title` | 3/3 (100%) | City Council 10-11-21 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9yT6eBvgGrU`

- **Vector count**: 3
- **Sample IDs**: `fc-council-9yT6eBvgGrU-1`, `fc-council-9yT6eBvgGrU-2`, `fc-council-9yT6eBvgGrU-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 10-9-17 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-9-17 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=9yT6eBvgGrU |
| `text` | 3/3 (100%) | 5 said they currently do not have any problems and then lastly we were asked abo... |
| `title` | 3/3 (100%) | City Council 10-9-17 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EDMZ863Vj9A`

- **Vector count**: 3
- **Sample IDs**: `fc-council-EDMZ863Vj9A-1`, `fc-council-EDMZ863Vj9A-0`, `fc-council-EDMZ863Vj9A-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City of Fairfield \| Residential Landlord Meeting 1... |
| `filename` | 3/3 (100%) | City Council Meeting — null — City of Fairfield \| Residential Landlord Meeting 1... |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=EDMZ863Vj9A |
| `text` | 3/3 (100%) | however there's not a lot of changes except for technology related changes and I... |
| `title` | 3/3 (100%) | City of Fairfield \| Residential Landlord Meeting 1-30-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CWeY8f7gtHA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-CWeY8f7gtHA-1`, `fc-council-CWeY8f7gtHA-2`, `fc-council-CWeY8f7gtHA-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 11-27-23 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 11-27-23 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=CWeY8f7gtHA |
| `text` | 3/3 (100%) | 9 mil uh we just need to up our amount that we were allowed to have that's not t... |
| `title` | 3/3 (100%) | City Council 11-27-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EloJd71UJ_c`

- **Vector count**: 3
- **Sample IDs**: `fc-council-EloJd71UJ_c-0`, `fc-council-EloJd71UJ_c-1`, `fc-council-EloJd71UJ_c-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 9-23-24 (AUDIO ONLY) |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 9-23-24 (AUDIO ONLY) |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=EloJd71UJ_c |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 9-23-24 (AUDIO... |
| `title` | 3/3 (100%) | City Council 9-23-24 (AUDIO ONLY) |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IF1Va40zgWM`

- **Vector count**: 3
- **Sample IDs**: `fc-council-IF1Va40zgWM-0`, `fc-council-IF1Va40zgWM-1`, `fc-council-IF1Va40zgWM-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 10-22-12 |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 10-22-12 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=IF1Va40zgWM |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 10-2... |
| `title` | 3/3 (100%) | Fairfield City Council 10-22-12 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IS9BMHPZtQE`

- **Vector count**: 3
- **Sample IDs**: `fc-council-IS9BMHPZtQE-2`, `fc-council-IS9BMHPZtQE-0`, `fc-council-IS9BMHPZtQE-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 1-13-14 |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 1-13-14 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=IS9BMHPZtQE |
| `text` | 3/3 (100%) | 4 million project now with the the cost that they came out with this last week a... |
| `title` | 3/3 (100%) | Fairfield City Council 1-13-14 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=KthDzThmUYY`

- **Vector count**: 3
- **Sample IDs**: `fc-council-KthDzThmUYY-2`, `fc-council-KthDzThmUYY-0`, `fc-council-KthDzThmUYY-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 2-10-20 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 2-10-20 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=KthDzThmUYY |
| `text` | 3/3 (100%) | for ethics and conflicts of interest training for the council could entertain a ... |
| `title` | 3/3 (100%) | City Council 2-10-20 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=M4TX6Fjn9GQ`

- **Vector count**: 3
- **Sample IDs**: `fc-council-M4TX6Fjn9GQ-2`, `fc-council-M4TX6Fjn9GQ-1`, `fc-council-M4TX6Fjn9GQ-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 7-28-14 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 7-28-14 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=M4TX6Fjn9GQ |
| `text` | 3/3 (100%) | uh and then uh Bley when will can you just uh answer a question up here also on ... |
| `title` | 3/3 (100%) | City Council 7-28-14 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=On1_eonhDeA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-On1_eonhDeA-2`, `fc-council-On1_eonhDeA-0`, `fc-council-On1_eonhDeA-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 10-14-19 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-14-19 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=On1_eonhDeA |
| `text` | 3/3 (100%) | 17 number which is where we started with our original to engineering agreements ... |
| `title` | 3/3 (100%) | City Council 10-14-19 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=U7dB1dj-jz0`

- **Vector count**: 3
- **Sample IDs**: `fc-council-U7dB1dj-jz0-1`, `fc-council-U7dB1dj-jz0-0`, `fc-council-U7dB1dj-jz0-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 6-24-19 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 6-24-19 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=U7dB1dj-jz0 |
| `text` | 3/3 (100%) | 75 we have acceptance of the library Board minutes wave resolution approving cig... |
| `title` | 3/3 (100%) | City Council 6-24-19 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YEa_0X248j8`

- **Vector count**: 3
- **Sample IDs**: `fc-council-YEa_0X248j8-0`, `fc-council-YEa_0X248j8-1`, `fc-council-YEa_0X248j8-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 7-27-15 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 7-27-15 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=YEa_0X248j8 |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 7-27-15  good ... |
| `title` | 3/3 (100%) | City Council 7-27-15 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_eg-ceWqT4Q`

- **Vector count**: 3
- **Sample IDs**: `fc-council-_eg-ceWqT4Q-1`, `fc-council-_eg-ceWqT4Q-2`, `fc-council-_eg-ceWqT4Q-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 5-9-16 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 5-9-16 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=_eg-ceWqT4Q |
| `text` | 3/3 (100%) | 9 Acres there we proposed to buy four acres of that and build two to three units... |
| `title` | 3/3 (100%) | City Council 5-9-16 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=m2UdXrq8n90`

- **Vector count**: 3
- **Sample IDs**: `fc-council-m2UdXrq8n90-1`, `fc-council-m2UdXrq8n90-2`, `fc-council-m2UdXrq8n90-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 9-23-19 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 9-23-19 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=m2UdXrq8n90 |
| `text` | 3/3 (100%) | 4 cents of which PKG contracting amount is 249 thousand eight hundred thirty-sev... |
| `title` | 3/3 (100%) | City Council 9-23-19 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=nBMzUBdFuzY`

- **Vector count**: 3
- **Sample IDs**: `fc-council-nBMzUBdFuzY-0`, `fc-council-nBMzUBdFuzY-2`, `fc-council-nBMzUBdFuzY-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 6-11-18 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 6-11-18 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=nBMzUBdFuzY |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 6-11-18  counc... |
| `title` | 3/3 (100%) | City Council 6-11-18 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=nHznaeLNmms`

- **Vector count**: 3
- **Sample IDs**: `fc-council-nHznaeLNmms-2`, `fc-council-nHznaeLNmms-0`, `fc-council-nHznaeLNmms-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — Fairfield Town Hall \| Capital Improvements Reserve... |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield Town Hall \| Capital Improvements Reserve... |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=nHznaeLNmms |
| `text` | 3/3 (100%) | 84% most recently so overall that was about a 6% increase so not so bad consider... |
| `title` | 3/3 (100%) | Fairfield Town Hall \| Capital Improvements Reserve Fund Levy 10-16-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=mVqwbluduI0`

- **Vector count**: 3
- **Sample IDs**: `fc-council-mVqwbluduI0-1`, `fc-council-mVqwbluduI0-2`, `fc-council-mVqwbluduI0-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 011419 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 011419 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=mVqwbluduI0 |
| `text` | 3/3 (100%) | 28 and a December 28th payroll of one hundred and twelve thousand six hundred tw... |
| `title` | 3/3 (100%) | City Council 011419 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=mDOIUA_dOyA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-mDOIUA_dOyA-0`, `fc-council-mDOIUA_dOyA-1`, `fc-council-mDOIUA_dOyA-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — FFCC 3-12-12 |
| `filename` | 3/3 (100%) | City Council Meeting — null — FFCC 3-12-12 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=mDOIUA_dOyA |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: FFCC 3-12-12  joy we call a... |
| `title` | 3/3 (100%) | FFCC 3-12-12 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=puBTo-i3lm8`

- **Vector count**: 3
- **Sample IDs**: `fc-council-puBTo-i3lm8-0`, `fc-council-puBTo-i3lm8-2`, `fc-council-puBTo-i3lm8-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 4-25-22 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 4-25-22 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=puBTo-i3lm8 |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 4-25-22  call ... |
| `title` | 3/3 (100%) | City Council 4-25-22 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qQPrs9e6zZ4`

- **Vector count**: 3
- **Sample IDs**: `fc-council-qQPrs9e6zZ4-2`, `fc-council-qQPrs9e6zZ4-0`, `fc-council-qQPrs9e6zZ4-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 11-26-18 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 11-26-18 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=qQPrs9e6zZ4 |
| `text` | 3/3 (100%) | so entertain a motion to set that date salute second floor annoy second by Ander... |
| `title` | 3/3 (100%) | City Council 11-26-18 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qkGhlVsJwy4`

- **Vector count**: 3
- **Sample IDs**: `fc-council-qkGhlVsJwy4-0`, `fc-council-qkGhlVsJwy4-1`, `fc-council-qkGhlVsJwy4-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 9-25-23 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 9-25-23 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=qkGhlVsJwy4 |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 9-25-23  we ca... |
| `title` | 3/3 (100%) | City Council 9-25-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uBsaTARDaBU`

- **Vector count**: 3
- **Sample IDs**: `fc-council-uBsaTARDaBU-2`, `fc-council-uBsaTARDaBU-1`, `fc-council-uBsaTARDaBU-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 10-9-23 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-9-23 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=uBsaTARDaBU |
| `text` | 3/3 (100%) | m. and that the public hearing would be Monday November 13th at 7 p. m. so moved... |
| `title` | 3/3 (100%) | City Council 10-9-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=tP0mvGmdJtQ`

- **Vector count**: 3
- **Sample IDs**: `fc-council-tP0mvGmdJtQ-0`, `fc-council-tP0mvGmdJtQ-1`, `fc-council-tP0mvGmdJtQ-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `file` | 3/3 (100%) | City Council Meeting — null — City Council 10-25-21 |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-25-21 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=tP0mvGmdJtQ |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-25-21  than... |
| `title` | 3/3 (100%) | City Council 10-25-21 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.greaterjeffersoncountyfoundation.org/grants/annual-community-grant`

- **Vector count**: 3
- **Sample IDs**: `gjcf-aHR0cHM6Ly93d3cuZ3Jl-2`, `gjcf-aHR0cHM6Ly93d3cuZ3Jl-3`, `gjcf-aHR0cHM6Ly93d3cuZ3Jl-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic |
| `file` | 3/3 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `filename` | 3/3 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `org` | 3/3 (100%) | Greater Jefferson County Foundation |
| `source` | 3/3 (100%) | https://www.greaterjeffersoncountyfoundation.org/grants/annual-community-grant |
| `text` | 3/3 (100%) | The applications are reviewed by the Grant Committee during June/July and recomm... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/strategic_advisors`

- **Vector count**: 3
- **Sample IDs**: `icf-95671d29ba36fe0b3d4dbcb2-0`, `icf-95671d29ba36fe0b3d4dbcb2-1`, `icf-95671d29ba36fe0b3d4dbcb2-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/strategic_adv... |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/strategic_adv... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/strategic_advisors |
| `text` | 3/3 (100%) | New: ICF Announces BABLE and EIPO as its First Two Global Partners, Aiming to Ac... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/2025_intelligent_community_of_the_year`

- **Vector count**: 3
- **Sample IDs**: `icf-377de382a0596e876a812ad3-1`, `icf-377de382a0596e876a812ad3-2`, `icf-377de382a0596e876a812ad3-0`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/2025_intellig... |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/2025_intellig... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/2025_intelligent_community_of_the_year |
| `text` | 3/3 (100%) | The 2025 ICF Global Summit continues tomorrow, as attendees will make site visit... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/2026_smart21_and_smart_city_expo_in_curitiba_brazil`

- **Vector count**: 3
- **Sample IDs**: `icf-50215ac9246742ca1520e55f-2`, `icf-50215ac9246742ca1520e55f-0`, `icf-50215ac9246742ca1520e55f-1`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/2026_smart21_... |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/2026_smart21_... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/2026_smart21_and_smart_city_expo_in_curitib... |
| `text` | 3/3 (100%) | Curitiba has become one of the first Brazilian cities to offer TIM 5G based on a... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/privacy_policy`

- **Vector count**: 3
- **Sample IDs**: `icf-33081e8ebc8af5ebb040dd41-1`, `icf-33081e8ebc8af5ebb040dd41-0`, `icf-33081e8ebc8af5ebb040dd41-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/privacy_polic... |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/privacy_polic... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/privacy_policy |
| `text` | 3/3 (100%) | We also collect, use and share aggregated data, such as statistical or demograph... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/advisory`

- **Vector count**: 3
- **Sample IDs**: `icf-aef7ffc9fd388f1c2dbd0493-1`, `icf-aef7ffc9fd388f1c2dbd0493-0`, `icf-aef7ffc9fd388f1c2dbd0493-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/advisory |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/advisory |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/advisory |
| `text` | 3/3 (100%) | A regional government provided shared services to multiple municipalities, from ... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/our_team`

- **Vector count**: 3
- **Sample IDs**: `icf-b0f1505c9fd2a2e629c65764-1`, `icf-b0f1505c9fd2a2e629c65764-0`, `icf-b0f1505c9fd2a2e629c65764-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/our_team |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/our_team |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/our_team |
| `text` | 3/3 (100%) | Jessica brings a strong background in business administration, operations, and t... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/top7`

- **Vector count**: 3
- **Sample IDs**: `icf-94686ea2934f15e4941b5842-0`, `icf-94686ea2934f15e4941b5842-2`, `icf-94686ea2934f15e4941b5842-1`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/top7 |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/top7 |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/top7 |
| `text` | 3/3 (100%) | The Top7 Intelligent Communities of the Year The Top7 Intelligent Communities of... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_member_news`

- **Vector count**: 3
- **Sample IDs**: `icf-7e696713d03a54d61e51e7ef-1`, `icf-7e696713d03a54d61e51e7ef-0`, `icf-7e696713d03a54d61e51e7ef-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_member_ne... |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_member_ne... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/icf_member_news |
| `text` | 3/3 (100%) | As a global organization committed to building prosperous, inclusive and sustain... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/news_coverage`

- **Vector count**: 3
- **Sample IDs**: `icf-fa388a8fde332ca12fb4f8e1-1`, `icf-fa388a8fde332ca12fb4f8e1-0`, `icf-fa388a8fde332ca12fb4f8e1-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/news_coverage |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/news_coverage |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/news_coverage |
| `text` | 3/3 (100%) | Posted on News & Media by Victoria Krisman July 30, 2025 1:49 PM 1 reaction The ... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/intelligent_community_forum_and_exxas_announce_partnership_to_support_brazilian_communities`

- **Vector count**: 3
- **Sample IDs**: `icf-bf30942860d804ab27ca7634-1`, `icf-bf30942860d804ab27ca7634-0`, `icf-bf30942860d804ab27ca7634-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/intelligent_c... |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/intelligent_c... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/intelligent_community_forum_and_exxas_annou... |
| `text` | 3/3 (100%) | As part of this growing collaboration, EXXAS CEO Giovani Bernardo will participa... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_2026_top7_conference_announcement`

- **Vector count**: 3
- **Sample IDs**: `icf-fda5d8776f22ea3d73c7c4ba-2`, `icf-fda5d8776f22ea3d73c7c4ba-0`, `icf-fda5d8776f22ea3d73c7c4ba-1`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_2026_top7... |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_2026_top7... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/icf_2026_top7_conference_announcement |
| `text` | 3/3 (100%) | The VIP Extended Delegation participants will travel by train to Eindhoven, chec... |
| `type` | 3/3 (100%) | community_org |

### `https://www.iowasource.com/2018/01/05/events-calendar`

- **Vector count**: 3
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-8`, `iowa-source-aHR0cHM6Ly93d3cuaW93-7`, `iowa-source-aHR0cHM6Ly93d3cuaW93-9`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | media |
| `file` | 3/3 (100%) | Iowa Source — https://www.iowasource.com/2018/01/05/events-calendar |
| `filename` | 3/3 (100%) | Iowa Source — https://www.iowasource.com/2018/01/05/events-calendar |
| `org` | 3/3 (100%) | Iowa Source |
| `source` | 3/3 (100%) | https://www.iowasource.com/2018/01/05/events-calendar |
| `text` | 3/3 (100%) | Friday, March 20 • Jerry Tolson Quartet with Delfeayo Marsalis. A night of jazz.... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/looking_back_on_2025_and_forward_to_2026`

- **Vector count**: 3
- **Sample IDs**: `icf-e4505b7a8e197782329f66b9-1`, `icf-e4505b7a8e197782329f66b9-0`, `icf-e4505b7a8e197782329f66b9-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `file` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/looking_back_... |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/looking_back_... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/looking_back_on_2025_and_forward_to_2026 |
| `text` | 3/3 (100%) | Nine of these communities joined the Smart21 for the very first time—proof that ... |
| `type` | 3/3 (100%) | community_org |

### `https://www.extension.iastate.edu/jefferson/newsetter/jefferson-county-extension-newsletter-0`

- **Vector count**: 3
- **Sample IDs**: `isu-extension-aHR0cHM6Ly93d3cuZXh0-5`, `isu-extension-aHR0cHM6Ly93d3cuZXh0-7`, `isu-extension-aHR0cHM6Ly93d3cuZXh0-6`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | education |
| `file` | 3/3 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/new... |
| `filename` | 3/3 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/new... |
| `org` | 3/3 (100%) | ISU Extension Jefferson County |
| `source` | 3/3 (100%) | https://www.extension.iastate.edu/jefferson/newsetter/jefferson-county-extension... |
| `text` | 3/3 (100%) | We are offering two in-person trainings at the Extension Office on Saturday, Apr... |
| `type` | 3/3 (100%) | community_org |

### `https://www.extension.iastate.edu/legal`

- **Vector count**: 3
- **Sample IDs**: `isu-extension-aHR0cHM6Ly93d3cuZXh0-3`, `isu-extension-aHR0cHM6Ly93d3cuZXh0-4`, `isu-extension-aHR0cHM6Ly93d3cuZXh0-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | education |
| `file` | 3/3 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/legal |
| `filename` | 3/3 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/legal |
| `org` | 3/3 (100%) | ISU Extension Jefferson County |
| `source` | 3/3 (100%) | https://www.extension.iastate.edu/legal |
| `text` | 3/3 (100%) | Healthcare Provider Disability Documentation (PDF) If you, a colleague, particip... |
| `type` | 3/3 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/b-bn/bnsf.htm`

- **Vector count**: 3
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-4`, `jctc-aHR0cDovL3d3dy5qZWZm-3`, `jctc-aHR0cDovL3d3dy5qZWZm-5`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | conservation |
| `file` | 3/3 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/b-bn/bnsf... |
| `filename` | 3/3 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/b-bn/bnsf... |
| `org` | 3/3 (100%) | Jefferson County Trails Council |
| `source` | 3/3 (100%) | http://www.jeffersoncountytrails.org/b-bn/bnsf.htm |
| `text` | 3/3 (100%) | The trail must be built up to meet the end of the bridge. The first load of dirt... |
| `type` | 3/3 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/news2009.htm`

- **Vector count**: 3
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-8`, `jctc-aHR0cDovL3d3dy5qZWZm-9`, `jctc-aHR0cDovL3d3dy5qZWZm-10`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | conservation |
| `file` | 3/3 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/news2009.... |
| `filename` | 3/3 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/news2009.... |
| `org` | 3/3 (100%) | Jefferson County Trails Council |
| `source` | 3/3 (100%) | http://www.jeffersoncountytrails.org/news2009.htm |
| `text` | 3/3 (100%) | Sept 19... October 5th is set for the Dedication ceremony for the Carl Zillman B... |
| `type` | 3/3 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=115`

- **Vector count**: 3
- **Sample IDs**: `minutes-115.pdf-chunk-1`, `minutes-115.pdf-chunk-0`, `minutes-115.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-115.pdf |
| `filename` | 3/3 (100%) | minutes-115.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=115 |
| `text` | 3/3 (100%) | AIMS IN THE    AMOUNT OF $474,431.76.    RESOLUTIONS, ACTION ITEMS & ORDINANCES ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=124`

- **Vector count**: 3
- **Sample IDs**: `minutes-124.pdf-chunk-1`, `minutes-124.pdf-chunk-0`, `minutes-124.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-124.pdf |
| `filename` | 3/3 (100%) | minutes-124.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=124 |
| `text` | 3/3 (100%) | ley, Ledger-Kalen, Boyer      TO SPLIT THE DIVIDEND CHECK OF $17,500    THREE WA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=125`

- **Vector count**: 3
- **Sample IDs**: `minutes-125.pdf-chunk-2`, `minutes-125.pdf-chunk-0`, `minutes-125.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-125.pdf |
| `filename` | 3/3 (100%) | minutes-125.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=125 |
| `text` | 3/3 (100%) |  NO. 1095    PERTAINING TO THE TRAIL CROSSING WITH    AMENDMENTS.    Moved by Ha... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=222`

- **Vector count**: 3
- **Sample IDs**: `minutes-222.pdf-chunk-0`, `minutes-222.pdf-chunk-1`, `minutes-222.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-222.pdf |
| `filename` | 3/3 (100%) | minutes-222.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=222 |
| `text` | 3/3 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    March 12, 2014              The... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=248`

- **Vector count**: 3
- **Sample IDs**: `minutes-248.pdf-chunk-2`, `minutes-248.pdf-chunk-0`, `minutes-248.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-248.pdf |
| `filename` | 3/3 (100%) | minutes-248.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=248 |
| `text` | 3/3 (100%) |    TO ALLOW PAT CALLAHAN TO PURSUE    REFERENCES ON THE FINAL CANDIDATES    AND ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=244`

- **Vector count**: 3
- **Sample IDs**: `minutes-244.pdf-chunk-2`, `minutes-244.pdf-chunk-0`, `minutes-244.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-244.pdf |
| `filename` | 3/3 (100%) | minutes-244.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=244 |
| `text` | 3/3 (100%) | OLUTION NO. 3158 DECLARING    AN OFFICIAL INTENT UNDER TREASURY REGULATION    1.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=293`

- **Vector count**: 3
- **Sample IDs**: `minutes-293.pdf-chunk-0`, `minutes-293.pdf-chunk-2`, `minutes-293.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-293.pdf |
| `filename` | 3/3 (100%) | minutes-293.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=293 |
| `text` | 3/3 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    September 28, 2015    The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=306`

- **Vector count**: 3
- **Sample IDs**: `minutes-306.pdf-chunk-2`, `minutes-306.pdf-chunk-1`, `minutes-306.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-306.pdf |
| `filename` | 3/3 (100%) | minutes-306.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=306 |
| `text` | 3/3 (100%) | TY OF FAIRFIELD.    Moved by Halley, seconded by Revolinski   AYES:  Halley, Rev... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=336`

- **Vector count**: 3
- **Sample IDs**: `minutes-336.pdf-chunk-2`, `minutes-336.pdf-chunk-0`, `minutes-336.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-336.pdf |
| `filename` | 3/3 (100%) | minutes-336.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=336 |
| `text` | 3/3 (100%) | y      TO ADJOURN AT 12:25 P.M.        Submitted by:      Joy Messer  City Clerk... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=332`

- **Vector count**: 3
- **Sample IDs**: `minutes-332.pdf-chunk-2`, `minutes-332.pdf-chunk-0`, `minutes-332.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-332.pdf |
| `filename` | 3/3 (100%) | minutes-332.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=332 |
| `text` | 3/3 (100%) | TY-FIVE THOUSAND DOLLARS.   Page 2  Minutes  9/23/16      Moved by Hamilton, sec... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=334`

- **Vector count**: 3
- **Sample IDs**: `minutes-334.pdf-chunk-2`, `minutes-334.pdf-chunk-1`, `minutes-334.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-334.pdf |
| `filename` | 3/3 (100%) | minutes-334.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=334 |
| `text` | 3/3 (100%) | G    THE SALE OF CITY OWNED LAND SEGMENT ADJACENT TO     WALTON LAKE.    Moved b... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=438`

- **Vector count**: 3
- **Sample IDs**: `minutes-438.pdf-chunk-1`, `minutes-438.pdf-chunk-0`, `minutes-438.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-438.pdf |
| `filename` | 3/3 (100%) | minutes-438.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=438 |
| `text` | 3/3 (100%) | ion was held concerning the least preferable locations (Small Cell Guidelines,  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=644`

- **Vector count**: 3
- **Sample IDs**: `minutes-644.pdf-chunk-2`, `minutes-644.pdf-chunk-0`, `minutes-644.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-644.pdf |
| `filename` | 3/3 (100%) | minutes-644.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=644 |
| `text` | 3/3 (100%) |  Anderson and Gandy      TO ADJOURN AT 12:09 PM.    Submitted by:      Rebekah L... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=647`

- **Vector count**: 3
- **Sample IDs**: `minutes-647.pdf-chunk-2`, `minutes-647.pdf-chunk-0`, `minutes-647.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-647.pdf |
| `filename` | 3/3 (100%) | minutes-647.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=647 |
| `text` | 3/3 (100%) | ssed 4-0      ADJOURNMENT  Moved by Twohill, seconded by Flournoy   AYES:  Twohi... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=673`

- **Vector count**: 3
- **Sample IDs**: `minutes-673.pdf-chunk-1`, `minutes-673.pdf-chunk-0`, `minutes-673.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-673.pdf |
| `filename` | 3/3 (100%) | minutes-673.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=673 |
| `text` | 3/3 (100%) |  in partial breach and presented to  Council copies of a petition for immediate ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=753`

- **Vector count**: 3
- **Sample IDs**: `minutes-753.pdf-chunk-2`, `minutes-753.pdf-chunk-1`, `minutes-753.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-753.pdf |
| `filename` | 3/3 (100%) | minutes-753.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=753 |
| `text` | 3/3 (100%) | AT 1:18 PM      Submitted by:            Shelby Ford  Administrative Assistant   |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=76`

- **Vector count**: 3
- **Sample IDs**: `minutes-76.pdf-chunk-1`, `minutes-76.pdf-chunk-0`, `minutes-76.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-76.pdf |
| `filename` | 3/3 (100%) | minutes-76.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=76 |
| `text` | 3/3 (100%) | ICE.      TO ADOPT RESOLUTION NO. 2864 PROMOTING    COLIN SMITH TO LIEUTENANT OF... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=77`

- **Vector count**: 3
- **Sample IDs**: `minutes-77.pdf-chunk-1`, `minutes-77.pdf-chunk-2`, `minutes-77.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 3/3 (100%) | minutes-77.pdf |
| `filename` | 3/3 (100%) | minutes-77.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=77 |
| `text` | 3/3 (100%) | TREASURER’S REPORT AND TRANSFERS.      TO APPROVE THE OCTOBER, 2011    TREASURER... |

### `growfairfield.com`

- **Vector count**: 3
- **Sample IDs**: `newboco_fairfield_addendum_chunk_0`, `newboco_fairfield_addendum_chunk_2`, `newboco_fairfield_addendum_chunk_1`
- **ID patterns**: `prefix_name_chunk_N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic_development |
| `chunkIndex` | 3/3 (100%) | 0 |
| `fileName` | 3/3 (100%) | newboco_fairfield_addendum.txt |
| `filename` | 3/3 (100%) | newboco_fairfield_addendum.txt |
| `source` | 3/3 (100%) | growfairfield.com |
| `subcategory` | 3/3 (100%) | entrepreneurship |
| `text` | 3/3 (100%) | NewBoCo / Fairfield Entrepreneur in Residence - Additional Details Source: growf... |

### `thewelliowa.org`

- **Vector count**: 3
- **Sample IDs**: `the_well_fairfield_chunk_0`, `the_well_fairfield_chunk_1`, `the_well_fairfield_chunk_2`
- **ID patterns**: `prefix_name_chunk_N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | community_organizations |
| `chunkIndex` | 3/3 (100%) | 0 |
| `fileName` | 3/3 (100%) | the_well_fairfield.txt |
| `filename` | 3/3 (100%) | the_well_fairfield.txt |
| `source` | 3/3 (100%) | thewelliowa.org |
| `subcategory` | 3/3 (100%) | social_services |
| `text` | 3/3 (100%) | The Well Resource Center - Fairfield Website: https://thewelliowa.org/fairfield/... |

### `https://www.youtube.com/watch?v=26gLWhpNgrE`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-26gLWhpNgrE-1`, `traction-thursdays-26gLWhpNgrE-2`, `traction-thursdays-26gLWhpNgrE-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `file` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr. Eric Schaeffer & Dr. Apala... |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr. Eric Schaeffer & Dr. Apala... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=26gLWhpNgrE |
| `text` | 3/3 (100%) | "  welcome everybody to traction Thursday it's my pleasure to introduce Dr Eric ... |
| `title` | 3/3 (100%) | Traction Thursday \| Dr. Eric Schaeffer & Dr. Apala Lahiri "Human Factors Int." |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=4CMjpRsJe4M`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-4CMjpRsJe4M-1`, `traction-thursdays-4CMjpRsJe4M-0`, `traction-thursdays-4CMjpRsJe4M-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `file` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dee Sandquist "Niman Ranch Far... |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dee Sandquist "Niman Ranch Far... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=4CMjpRsJe4M |
| `text` | 3/3 (100%) | com and it's under impact statement but they uh worked with Iowa state two three... |
| `title` | 3/3 (100%) | Traction Thursday \| Dee Sandquist "Niman Ranch Farmer" |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9oiCHpvdKcI`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-9oiCHpvdKcI-2`, `traction-thursdays-9oiCHpvdKcI-1`, `traction-thursdays-9oiCHpvdKcI-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `file` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursdays \| Ron Doetch "Solutions in the ... |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursdays \| Ron Doetch "Solutions in the ... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=9oiCHpvdKcI |
| `text` | 3/3 (100%) | 2 to one for every dollar of turn uh we have some people that want to pretend it... |
| `title` | 3/3 (100%) | Traction Thursdays \| Ron Doetch "Solutions in the Land, Agronomist, and Whole Sy... |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9b_KeQ8bYeE`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-9b_KeQ8bYeE-0`, `traction-thursdays-9b_KeQ8bYeE-1`, `traction-thursdays-9b_KeQ8bYeE-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `file` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Christina Moffatt "Strategist ... |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Christina Moffatt "Strategist ... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=9b_KeQ8bYeE |
| `text` | 3/3 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ch... |
| `title` | 3/3 (100%) | Traction Thursday \| Christina Moffatt "Strategist of Customer Growth" |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=5mvL7q_isxI`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-5mvL7q_isxI-1`, `traction-thursdays-5mvL7q_isxI-2`, `traction-thursdays-5mvL7q_isxI-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `file` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Kellen Gracey of Revata Consul... |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Kellen Gracey of Revata Consul... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=5mvL7q_isxI |
| `text` | 3/3 (100%) | 0 and everyone please put uh July Saturday July 27th in their book we'll be conv... |
| `title` | 3/3 (100%) | Traction Thursday \| Kellen Gracey of Revata Consulting 6-27-24 |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=jwVtALLjXQY`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-jwVtALLjXQY-1`, `traction-thursdays-jwVtALLjXQY-0`, `traction-thursdays-jwVtALLjXQY-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `file` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursdays \| Corey Morrows 8-1-24 |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursdays \| Corey Morrows 8-1-24 |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=jwVtALLjXQY |
| `text` | 3/3 (100%) | 2 million back to out 24 hours before and they basically said sorry we're going ... |
| `title` | 3/3 (100%) | Traction Thursdays \| Corey Morrows 8-1-24 |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=lwww9MmVza4`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-lwww9MmVza4-1`, `traction-thursdays-lwww9MmVza4-2`, `traction-thursdays-lwww9MmVza4-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `file` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr. Eric Schaffer and Dr.  Apa... |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr. Eric Schaffer and Dr.  Apa... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=lwww9MmVza4 |
| `text` | 3/3 (100%) | Apala Lahiri "HFI Laboratories"  well thank you all for being here I've been loo... |
| `title` | 3/3 (100%) | Traction Thursday \| Dr. Eric Schaffer and Dr.  Apala Lahiri "HFI Laboratories" |
| `type` | 3/3 (100%) | traction_thursday |

### `http://www.area15rpc.com/rhtf`

- **Vector count**: 2
- **Sample IDs**: `area15-rpc-aHR0cDovL3d3dy5hcmVh-1`, `area15-rpc-aHR0cDovL3d3dy5hcmVh-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | regional_planning |
| `file` | 2/2 (100%) | Area 15 Regional Planning Commission — http://www.area15rpc.com/rhtf |
| `filename` | 2/2 (100%) | Area 15 Regional Planning Commission — http://www.area15rpc.com/rhtf |
| `org` | 2/2 (100%) | Area 15 Regional Planning Commission |
| `source` | 2/2 (100%) | http://www.area15rpc.com/rhtf |
| `text` | 2/2 (100%) | Regional Housing Trust Fund - Owner-Occupied Guidelines Regional Housing Trust F... |
| `type` | 2/2 (100%) | community_org |

### `https://www.fairfieldiowa.com/news/2025_barnyard_bash_recap`

- **Vector count**: 2
- **Sample IDs**: `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-1`, `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | business |
| `file` | 2/2 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/news/2025_bar... |
| `filename` | 2/2 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/news/2025_bar... |
| `org` | 2/2 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 2/2 (100%) | https://www.fairfieldiowa.com/news/2025_barnyard_bash_recap |
| `text` | 2/2 (100%) | Shop Local This February & Win with the Fairfield Chamber Bucks Giveaway Fairfie... |
| `type` | 2/2 (100%) | community_org |

### `https://www.fairfieldiowa.com/news/10_intentional_ways_to_get_a_jump_start_on_holiday_revenue`

- **Vector count**: 2
- **Sample IDs**: `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-2`, `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-3`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | business |
| `file` | 2/2 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/news/10_inten... |
| `filename` | 2/2 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/news/10_inten... |
| `org` | 2/2 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 2/2 (100%) | https://www.fairfieldiowa.com/news/10_intentional_ways_to_get_a_jump_start_on_ho... |
| `text` | 2/2 (100%) | Include photos of gift displays, new arrivals, or holiday d cor to set the mood.... |
| `type` | 2/2 (100%) | community_org |

### `wildspiritsfarm.com`

- **Vector count**: 2
- **Sample IDs**: `fairfield_garden_initiative_chunk_1`, `fairfield_garden_initiative_chunk_0`
- **ID patterns**: `prefix_name_chunk_N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | community_organizations |
| `chunkIndex` | 2/2 (100%) | 1 |
| `fileName` | 2/2 (100%) | fairfield_garden_initiative.txt |
| `filename` | 2/2 (100%) | fairfield_garden_initiative.txt |
| `source` | 2/2 (100%) | wildspiritsfarm.com |
| `subcategory` | 2/2 (100%) | food_security |
| `text` | 2/2 (100%) | rs mental and emotional well-being, strengthens family connections, and builds r... |

### `https://www.youtube.com/watch?v=-ddNSZ88MAU`

- **Vector count**: 2
- **Sample IDs**: `fc-council--ddNSZ88MAU-1`, `fc-council--ddNSZ88MAU-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — FFCC 6-11-12 |
| `filename` | 2/2 (100%) | City Council Meeting — null — FFCC 6-11-12 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=-ddNSZ88MAU |
| `text` | 2/2 (100%) | 67 per hour and also claims in the $691,000 it used to be clo in the summertime ... |
| `title` | 2/2 (100%) | FFCC 6-11-12 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=7ReqsPFz_j4`

- **Vector count**: 2
- **Sample IDs**: `fc-council-7ReqsPFz_j4-0`, `fc-council-7ReqsPFz_j4-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 1-27-14 |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 1-27-14 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=7ReqsPFz_j4 |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 1-27... |
| `title` | 2/2 (100%) | Fairfield City Council 1-27-14 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9JwzE0q6-qQ`

- **Vector count**: 2
- **Sample IDs**: `fc-council-9JwzE0q6-qQ-0`, `fc-council-9JwzE0q6-qQ-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council - Special Meeting 4-12-19 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council - Special Meeting 4-12-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=9JwzE0q6-qQ |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council - Special Meet... |
| `title` | 2/2 (100%) | City Council - Special Meeting 4-12-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9PalXMP3PHA`

- **Vector count**: 2
- **Sample IDs**: `fc-council-9PalXMP3PHA-0`, `fc-council-9PalXMP3PHA-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 11-12-19 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 11-12-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=9PalXMP3PHA |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-12-19  Flou... |
| `title` | 2/2 (100%) | City Council 11-12-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=69GL23lpNew`

- **Vector count**: 2
- **Sample IDs**: `fc-council-69GL23lpNew-0`, `fc-council-69GL23lpNew-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 8-8-16 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 8-8-16 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=69GL23lpNew |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-8-16  good e... |
| `title` | 2/2 (100%) | City Council 8-8-16 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Enwg542Nt40`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Enwg542Nt40-1`, `fc-council-Enwg542Nt40-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 6-24-24 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 6-24-24 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Enwg542Nt40 |
| `text` | 2/2 (100%) | org yes you can post the link there I'll do that great maybe also include to whe... |
| `title` | 2/2 (100%) | City Council 6-24-24 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=H0W6jfCbHHQ`

- **Vector count**: 2
- **Sample IDs**: `fc-council-H0W6jfCbHHQ-1`, `fc-council-H0W6jfCbHHQ-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `filename` | 2/2 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=H0W6jfCbHHQ |
| `text` | 2/2 (100%) | 25  [Music] just in time John I was gonna start without go finance to take you t... |
| `title` | 2/2 (100%) | City of Fairfield \| Study Session & City Council 2.10.25 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=G-pysTaF1Ck`

- **Vector count**: 2
- **Sample IDs**: `fc-council-G-pysTaF1Ck-1`, `fc-council-G-pysTaF1Ck-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 8-12-24 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 8-12-24 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=G-pysTaF1Ck |
| `text` | 2/2 (100%) | 25 for the toing second how many how many cars were towed do you know do you kno... |
| `title` | 2/2 (100%) | City Council 8-12-24 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=KQ9CU7Haums`

- **Vector count**: 2
- **Sample IDs**: `fc-council-KQ9CU7Haums-0`, `fc-council-KQ9CU7Haums-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 3-10-14 |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 3-10-14 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=KQ9CU7Haums |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 3-10... |
| `title` | 2/2 (100%) | Fairfield City Council 3-10-14 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Kec-CbbG_Bg`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Kec-CbbG_Bg-0`, `fc-council-Kec-CbbG_Bg-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 9-11-17 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 9-11-17 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Kec-CbbG_Bg |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 9-11-17  good ... |
| `title` | 2/2 (100%) | City Council 9-11-17 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=LZ-RiBV7hVY`

- **Vector count**: 2
- **Sample IDs**: `fc-council-LZ-RiBV7hVY-0`, `fc-council-LZ-RiBV7hVY-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council Work Session 11.12.24 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council Work Session 11.12.24 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=LZ-RiBV7hVY |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council Work Session 1... |
| `title` | 2/2 (100%) | City Council Work Session 11.12.24 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OrCp21Eg0ZI`

- **Vector count**: 2
- **Sample IDs**: `fc-council-OrCp21Eg0ZI-1`, `fc-council-OrCp21Eg0ZI-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 3-24-14 |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 3-24-14 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=OrCp21Eg0ZI |
| `text` | 2/2 (100%) | 7% of people in Iowa work from their home in Fairfield it's a little over 12% an... |
| `title` | 2/2 (100%) | Fairfield City Council 3-24-14 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OaEWVA3Va6A`

- **Vector count**: 2
- **Sample IDs**: `fc-council-OaEWVA3Va6A-0`, `fc-council-OaEWVA3Va6A-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 8-13-12 |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 8-13-12 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=OaEWVA3Va6A |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 8-13... |
| `title` | 2/2 (100%) | Fairfield City Council 8-13-12 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OoZ7WvjPPQ0`

- **Vector count**: 2
- **Sample IDs**: `fc-council-OoZ7WvjPPQ0-0`, `fc-council-OoZ7WvjPPQ0-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — FFCC 7-9-12 |
| `filename` | 2/2 (100%) | City Council Meeting — null — FFCC 7-9-12 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=OoZ7WvjPPQ0 |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: FFCC 7-9-12  good evening e... |
| `title` | 2/2 (100%) | FFCC 7-9-12 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=R0UCvZ4SMbU`

- **Vector count**: 2
- **Sample IDs**: `fc-council-R0UCvZ4SMbU-1`, `fc-council-R0UCvZ4SMbU-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 11-24-14 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 11-24-14 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=R0UCvZ4SMbU |
| `text` | 2/2 (100%) | to discuss this and so whatever we approved in the past I don't think any of us ... |
| `title` | 2/2 (100%) | City Council 11-24-14 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Q32QhJdpsKg`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Q32QhJdpsKg-1`, `fc-council-Q32QhJdpsKg-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 3-25-19 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 3-25-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Q32QhJdpsKg |
| `text` | 2/2 (100%) | 98 of which PKG contracting is being awarded 1 million 37 thousand four hundred ... |
| `title` | 2/2 (100%) | City Council 3-25-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Vt_QLjY9qmI`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Vt_QLjY9qmI-0`, `fc-council-Vt_QLjY9qmI-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 3 -26-18 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 3 -26-18 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Vt_QLjY9qmI |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 3 -26-18  even... |
| `title` | 2/2 (100%) | City Council 3 -26-18 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=VrmnaYOaVwY`

- **Vector count**: 2
- **Sample IDs**: `fc-council-VrmnaYOaVwY-0`, `fc-council-VrmnaYOaVwY-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 10-28-19 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 10-28-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=VrmnaYOaVwY |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-28-19  good... |
| `title` | 2/2 (100%) | City Council 10-28-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Tgk8rZsXcl8`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Tgk8rZsXcl8-1`, `fc-council-Tgk8rZsXcl8-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 6-14-21 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 6-14-21 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Tgk8rZsXcl8 |
| `text` | 2/2 (100%) | 80 we had no claims over 75 000 motion to approve consent agenda second move by ... |
| `title` | 2/2 (100%) | City Council 6-14-21 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=WQKpxQ79_Jo`

- **Vector count**: 2
- **Sample IDs**: `fc-council-WQKpxQ79_Jo-0`, `fc-council-WQKpxQ79_Jo-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 11-9-20 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 11-9-20 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=WQKpxQ79_Jo |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-9-20  I'll ... |
| `title` | 2/2 (100%) | City Council 11-9-20 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=X_gtD8Iptus`

- **Vector count**: 2
- **Sample IDs**: `fc-council-X_gtD8Iptus-1`, `fc-council-X_gtD8Iptus-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 4-13-15 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 4-13-15 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=X_gtD8Iptus |
| `text` | 2/2 (100%) | E the mental disabilities at that point what we're allowed to do is regulate the... |
| `title` | 2/2 (100%) | City Council 4-13-15 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Xx2H8te6OuI`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Xx2H8te6OuI-1`, `fc-council-Xx2H8te6OuI-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — 5-11-15 City Council Meeting |
| `filename` | 2/2 (100%) | City Council Meeting — null — 5-11-15 City Council Meeting |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Xx2H8te6OuI |
| `text` | 2/2 (100%) | 6 percent share on the federal side fifteen percent share we got a gavi grant fr... |
| `title` | 2/2 (100%) | 5-11-15 City Council Meeting |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=aWSBXkdR_eg`

- **Vector count**: 2
- **Sample IDs**: `fc-council-aWSBXkdR_eg-0`, `fc-council-aWSBXkdR_eg-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — FFCC 5-14-12 |
| `filename` | 2/2 (100%) | City Council Meeting — null — FFCC 5-14-12 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=aWSBXkdR_eg |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: FFCC 5-14-12  good evening ... |
| `title` | 2/2 (100%) | FFCC 5-14-12 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=aE6SMfsMWNo`

- **Vector count**: 2
- **Sample IDs**: `fc-council-aE6SMfsMWNo-0`, `fc-council-aE6SMfsMWNo-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 11-12-13 |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 11-12-13 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=aE6SMfsMWNo |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 11-1... |
| `title` | 2/2 (100%) | Fairfield City Council 11-12-13 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ZXIEBfiPZ-U`

- **Vector count**: 2
- **Sample IDs**: `fc-council-ZXIEBfiPZ-U-1`, `fc-council-ZXIEBfiPZ-U-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 4-22-19 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 4-22-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=ZXIEBfiPZ-U |
| `text` | 2/2 (100%) | Fagan about the spacing of which I think most people took as the antennas and wh... |
| `title` | 2/2 (100%) | City Council 4-22-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=oznxOBaGOh0`

- **Vector count**: 2
- **Sample IDs**: `fc-council-oznxOBaGOh0-1`, `fc-council-oznxOBaGOh0-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 7-25-16 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 7-25-16 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=oznxOBaGOh0 |
| `text` | 2/2 (100%) | 5 million of Grant funds to construct the portion of step two that runs through ... |
| `title` | 2/2 (100%) | City Council 7-25-16 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=sss-p-VN-o4`

- **Vector count**: 2
- **Sample IDs**: `fc-council-sss-p-VN-o4-0`, `fc-council-sss-p-VN-o4-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — Fairfield Town Hall \| Mans Best Friend \| 4-25-22 |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield Town Hall \| Mans Best Friend \| 4-25-22 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=sss-p-VN-o4 |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield Town Hall \| Mans ... |
| `title` | 2/2 (100%) | Fairfield Town Hall \| Mans Best Friend \| 4-25-22 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uotEv7rUQAU`

- **Vector count**: 2
- **Sample IDs**: `fc-council-uotEv7rUQAU-0`, `fc-council-uotEv7rUQAU-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — Special City Council 1-2-20 |
| `filename` | 2/2 (100%) | City Council Meeting — null — Special City Council 1-2-20 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=uotEv7rUQAU |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: Special City Council 1-2-20... |
| `title` | 2/2 (100%) | Special City Council 1-2-20 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=x4YGj5uI5as`

- **Vector count**: 2
- **Sample IDs**: `fc-council-x4YGj5uI5as-1`, `fc-council-x4YGj5uI5as-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — 6-22-15 City Council Meeting |
| `filename` | 2/2 (100%) | City Council Meeting — null — 6-22-15 City Council Meeting |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=x4YGj5uI5as |
| `text` | 2/2 (100%) | m. move to approve so moved by love jekalyn second by flournoy all those in favo... |
| `title` | 2/2 (100%) | 6-22-15 City Council Meeting |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=xuSQm6D4u5A`

- **Vector count**: 2
- **Sample IDs**: `fc-council-xuSQm6D4u5A-0`, `fc-council-xuSQm6D4u5A-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | City Council Meeting — null — City Council 5-28-19 |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 5-28-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=xuSQm6D4u5A |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 5-28-19  ten c... |
| `title` | 2/2 (100%) | City Council 5-28-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://fairfieldeducationfoundation.com/directors`

- **Vector count**: 2
- **Sample IDs**: `fef-aHR0cHM6Ly9mYWlyZmll-1`, `fef-aHR0cHM6Ly9mYWlyZmll-2`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | education |
| `file` | 2/2 (100%) | Fairfield Education Foundation — https://fairfieldeducationfoundation.com/direct... |
| `filename` | 2/2 (100%) | Fairfield Education Foundation — https://fairfieldeducationfoundation.com/direct... |
| `org` | 2/2 (100%) | Fairfield Education Foundation |
| `source` | 2/2 (100%) | https://fairfieldeducationfoundation.com/directors |
| `text` | 2/2 (100%) | I moved to Fairfield in 2004 from the Chicagoland area to raise my children in a... |
| `type` | 2/2 (100%) | community_org |

### `https://www.fairfieldmediacenter.com/chambertalk`

- **Vector count**: 2
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-3`, `fmc-aHR0cHM6Ly93d3cuZmFp-4`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | arts-culture |
| `file` | 2/2 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/chambertalk |
| `filename` | 2/2 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/chambertalk |
| `org` | 2/2 (100%) | Fairfield Media Center |
| `source` | 2/2 (100%) | https://www.fairfieldmediacenter.com/chambertalk |
| `text` | 2/2 (100%) | 00:37:22 \| Proposal that criminalizes library staff for allowing access to curta... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_podcast`

- **Vector count**: 2
- **Sample IDs**: `icf-5083a4beb91eaf3a8a8fa321-1`, `icf-5083a4beb91eaf3a8a8fa321-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_podcast |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_podcast |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/icf_podcast |
| `text` | 2/2 (100%) | "Robot for Mayor" A Conversation with Dr. Norman Jacknis, Part 2 “Robot for Mayo... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/solutions`

- **Vector count**: 2
- **Sample IDs**: `icf-bafe3e7e27642ef8bc7e8a73-0`, `icf-bafe3e7e27642ef8bc7e8a73-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/solutions |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/solutions |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/solutions |
| `text` | 2/2 (100%) | ICF attracts high-quality providers of services and product that contribute to t... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_partner_events`

- **Vector count**: 2
- **Sample IDs**: `icf-17d564bf06f314ff26b64339-0`, `icf-17d564bf06f314ff26b64339-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_partner_e... |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_partner_e... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/icf_partner_events |
| `text` | 2/2 (100%) | ICF Partner Events - Intelligent Community Forum Dentons Smart Cities & Connecte... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/learn`

- **Vector count**: 2
- **Sample IDs**: `icf-2119e30735bd87b41dd5ca36-1`, `icf-2119e30735bd87b41dd5ca36-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/learn |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/learn |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/learn |
| `text` | 2/2 (100%) | Learn How to Build an Intelligent Community Learn from the Best Practices of 200... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/speakers`

- **Vector count**: 2
- **Sample IDs**: `icf-1e66ce73592f5e19f4a6fae8-0`, `icf-1e66ce73592f5e19f4a6fae8-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/speakers |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/speakers |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/speakers |
| `text` | 2/2 (100%) | ICF executives are regular speakers at conferences on economic development, muni... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/accelerator_training`

- **Vector count**: 2
- **Sample IDs**: `icf-ada4fa5a1b9963b9ec9b2ab3-0`, `icf-ada4fa5a1b9963b9ec9b2ab3-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/accelerator_t... |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/accelerator_t... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/accelerator_training |
| `text` | 2/2 (100%) | Learn from the Best Practices of 200 Cities and Regions - Intelligent Community ... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/books`

- **Vector count**: 2
- **Sample IDs**: `icf-14a053121a10d7ec4c4e5c7f-1`, `icf-14a053121a10d7ec4c4e5c7f-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/books |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/books |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/books |
| `text` | 2/2 (100%) | Authored by Albert S., Flournoy D. and LeBrasseur R., this IGI-Global Premier Re... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/compete`

- **Vector count**: 2
- **Sample IDs**: `icf-a6e47eb8970b953ae372334b-0`, `icf-a6e47eb8970b953ae372334b-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/compete |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/compete |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/compete |
| `text` | 2/2 (100%) | The Intelligent Community Awards Program® honors the achievements of Intelligent... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/what_is_an_intelligent_community`

- **Vector count**: 2
- **Sample IDs**: `icf-7f6a284c265bdef21e2e8ad9-0`, `icf-7f6a284c265bdef21e2e8ad9-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/what_is_an_in... |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/what_is_an_in... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/what_is_an_intelligent_community |
| `text` | 2/2 (100%) | What is an Intelligent Community? - Intelligent Community Forum Intelligent Comm... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_2026_vip_delegation_to_taiwan_smart_city_summit_expo`

- **Vector count**: 2
- **Sample IDs**: `icf-9174c6cde7050cd3067352be-0`, `icf-9174c6cde7050cd3067352be-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_2026_vip_... |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_2026_vip_... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/icf_2026_vip_delegation_to_taiwan_smart_cit... |
| `text` | 2/2 (100%) | ICF 2026 VIP Delegation to Taiwan Smart City Summit & Expo - Intelligent Communi... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_global_summits`

- **Vector count**: 2
- **Sample IDs**: `icf-583317ab16c4a84778114a8c-1`, `icf-583317ab16c4a84778114a8c-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_global_su... |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_global_su... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/icf_global_summits |
| `text` | 2/2 (100%) | International Opportunities. McKinsey estimates that 80% of the world’s trade wi... |
| `type` | 2/2 (100%) | community_org |

### `https://www.iowasource.com/2015/11/06/fairfield2015_11`

- **Vector count**: 2
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-1`, `iowa-source-aHR0cHM6Ly93d3cuaW93-2`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | media |
| `file` | 2/2 (100%) | Iowa Source — https://www.iowasource.com/2015/11/06/fairfield2015_11 |
| `filename` | 2/2 (100%) | Iowa Source — https://www.iowasource.com/2015/11/06/fairfield2015_11 |
| `org` | 2/2 (100%) | Iowa Source |
| `source` | 2/2 (100%) | https://www.iowasource.com/2015/11/06/fairfield2015_11 |
| `text` | 2/2 (100%) | “There’s been a lot of community openness and engagement,” says board member Min... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/your_intelligent_community_journey`

- **Vector count**: 2
- **Sample IDs**: `icf-d3ac770eb385060d7c22b177-1`, `icf-d3ac770eb385060d7c22b177-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/your_intellig... |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/your_intellig... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/your_intelligent_community_journey |
| `text` | 2/2 (100%) | Learn How to Build an Intelligent Community Learn from the Best Practices of 200... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/advocacy`

- **Vector count**: 2
- **Sample IDs**: `icf-fe55b5afea434a61855c450f-1`, `icf-fe55b5afea434a61855c450f-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/advocacy |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/advocacy |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/advocacy |
| `text` | 2/2 (100%) | Take an online course on technology and engagement. Learn more → Read our report... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/innovation`

- **Vector count**: 2
- **Sample IDs**: `icf-c8614b54a89ea3a34fa0bd77-1`, `icf-c8614b54a89ea3a34fa0bd77-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `file` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/innovation |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/innovation |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/innovation |
| `text` | 2/2 (100%) | Take an online course on smart city innovation. Learn more → Read our report, In... |
| `type` | 2/2 (100%) | community_org |

### `https://www.iowasource.com/2017/11/28/laura-ingalls-wilder`

- **Vector count**: 2
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-6`, `iowa-source-aHR0cHM6Ly93d3cuaW93-5`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | media |
| `file` | 2/2 (100%) | Iowa Source — https://www.iowasource.com/2017/11/28/laura-ingalls-wilder |
| `filename` | 2/2 (100%) | Iowa Source — https://www.iowasource.com/2017/11/28/laura-ingalls-wilder |
| `org` | 2/2 (100%) | Iowa Source |
| `source` | 2/2 (100%) | https://www.iowasource.com/2017/11/28/laura-ingalls-wilder |
| `text` | 2/2 (100%) | But she also left things out to burnish her story. She could describe vividly an... |
| `type` | 2/2 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/treasurer`

- **Vector count**: 2
- **Sample IDs**: `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-3`, `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-4`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `file` | 2/2 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/treasurer |
| `filename` | 2/2 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/treasurer |
| `org` | 2/2 (100%) | Jefferson County Code of Ordinances |
| `source` | 2/2 (100%) | https://jeffersoncounty.iowa.gov/treasurer |
| `text` | 2/2 (100%) | How do I order personalized/vanity license plates? Personalized license plates c... |
| `type` | 2/2 (100%) | community_org |

### `http://jeffersoncountyconservation.com`

- **Vector count**: 2
- **Sample IDs**: `jcc-aHR0cDovL2plZmZlcnNv-1`, `jcc-aHR0cDovL2plZmZlcnNv-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | conservation |
| `file` | 2/2 (100%) | Jefferson County Conservation — http://jeffersoncountyconservation.com |
| `filename` | 2/2 (100%) | Jefferson County Conservation — http://jeffersoncountyconservation.com |
| `org` | 2/2 (100%) | Jefferson County Conservation |
| `source` | 2/2 (100%) | http://jeffersoncountyconservation.com |
| `text` | 2/2 (100%) | https://jeffersoncountyconservation.com/wp-content/uploads/DSCN6948-scaled.jpg 1... |
| `type` | 2/2 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/sep09/matkin-bridge.htm`

- **Vector count**: 2
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-6`, `jctc-aHR0cDovL3d3dy5qZWZm-7`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | conservation |
| `file` | 2/2 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/sep09/mat... |
| `filename` | 2/2 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/sep09/mat... |
| `org` | 2/2 (100%) | Jefferson County Trails Council |
| `source` | 2/2 (100%) | http://www.jeffersoncountytrails.org/sep09/matkin-bridge.htm |
| `text` | 2/2 (100%) | Plans are afoot to light this structure in the evening hours. Also, a tasteful a... |
| `type` | 2/2 (100%) | community_org |

### `https://www.jeffersoncountylittleleague.com/registration`

- **Vector count**: 2
- **Sample IDs**: `jcll-aHR0cHM6Ly93d3cuamVm-1`, `jcll-aHR0cHM6Ly93d3cuamVm-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | youth-sports |
| `file` | 2/2 (100%) | Jefferson County Little League — https://www.jeffersoncountylittleleague.com/reg... |
| `filename` | 2/2 (100%) | Jefferson County Little League — https://www.jeffersoncountylittleleague.com/reg... |
| `org` | 2/2 (100%) | Jefferson County Little League |
| `source` | 2/2 (100%) | https://www.jeffersoncountylittleleague.com/registration |
| `text` | 2/2 (100%) | LITTLE LEAGUE ® International League Age Calculator League Finder Affiliate Rule... |
| `type` | 2/2 (100%) | community_org |

### `https://www.maharishischool.org`

- **Vector count**: 2
- **Sample IDs**: `maharishi-school-aHR0cHM6Ly93d3cubWFo-3`, `maharishi-school-aHR0cHM6Ly93d3cubWFo-2`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | education |
| `file` | 2/2 (100%) | Maharishi School — https://www.maharishischool.org |
| `filename` | 2/2 (100%) | Maharishi School — https://www.maharishischool.org |
| `org` | 2/2 (100%) | Maharishi School |
| `source` | 2/2 (100%) | https://www.maharishischool.org |
| `text` | 2/2 (100%) | “My daughter has been attending Maharishi School since Preschool and she’s now i... |
| `type` | 2/2 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=111`

- **Vector count**: 2
- **Sample IDs**: `minutes-111.pdf-chunk-0`, `minutes-111.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-111.pdf |
| `filename` | 2/2 (100%) | minutes-111.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=111 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL SPECIAL MEETING  August 6, 2012         ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=149`

- **Vector count**: 2
- **Sample IDs**: `minutes-149.pdf-chunk-1`, `minutes-149.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-149.pdf |
| `filename` | 2/2 (100%) | minutes-149.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=149 |
| `text` | 2/2 (100%) | , and Rasmussen      TO ADJOURN AT 12:55 P.M.      Submitted by:      Joy Messer... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=165`

- **Vector count**: 2
- **Sample IDs**: `minutes-165.pdf-chunk-0`, `minutes-165.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-165.pdf |
| `filename` | 2/2 (100%) | minutes-165.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=165 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL SPECIAL MEETING    October 1, 2013      ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=195`

- **Vector count**: 2
- **Sample IDs**: `minutes-195.pdf-chunk-1`, `minutes-195.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-195.pdf |
| `filename` | 2/2 (100%) | minutes-195.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=195 |
| `text` | 2/2 (100%) | EFFORT.    Moved by Hamilton, seconded by Rasmussen   AYES:  Hamilton, Rasmussen... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=225`

- **Vector count**: 2
- **Sample IDs**: `minutes-225.pdf-chunk-1`, `minutes-225.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-225.pdf |
| `filename` | 2/2 (100%) | minutes-225.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=225 |
| `text` | 2/2 (100%) | i, Ledger-Kalen, Rasmussen      TO ACCEPT THE RESIGNATION OF KEVIN    FLANAGAN A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=193`

- **Vector count**: 2
- **Sample IDs**: `minutes-193.pdf-chunk-0`, `minutes-193.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-193.pdf |
| `filename` | 2/2 (100%) | minutes-193.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=193 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    January 2, 2014        The Fair... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=242`

- **Vector count**: 2
- **Sample IDs**: `minutes-242.pdf-chunk-1`, `minutes-242.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-242.pdf |
| `filename` | 2/2 (100%) | minutes-242.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=242 |
| `text` | 2/2 (100%) | ion for this position.    The Council discussed the salary range and decided wit... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=240`

- **Vector count**: 2
- **Sample IDs**: `minutes-240.pdf-chunk-1`, `minutes-240.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-240.pdf |
| `filename` | 2/2 (100%) | minutes-240.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=240 |
| `text` | 2/2 (100%) | by Hammes, seconded by Halley   AYES:  Hammes, Halley, Flournoy, Revolinski, Ras... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=234`

- **Vector count**: 2
- **Sample IDs**: `minutes-234.pdf-chunk-0`, `minutes-234.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-234.pdf |
| `filename` | 2/2 (100%) | minutes-234.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=234 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    June 30, 2014        The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=251`

- **Vector count**: 2
- **Sample IDs**: `minutes-251.pdf-chunk-0`, `minutes-251.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-251.pdf |
| `filename` | 2/2 (100%) | minutes-251.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=251 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    Monday, January 19, 2015       ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=247`

- **Vector count**: 2
- **Sample IDs**: `minutes-247.pdf-chunk-1`, `minutes-247.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-247.pdf |
| `filename` | 2/2 (100%) | minutes-247.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=247 |
| `text` | 2/2 (100%) |  Submitted by:        Joy Messer  City Clerk          |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=271`

- **Vector count**: 2
- **Sample IDs**: `minutes-271.pdf-chunk-0`, `minutes-271.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-271.pdf |
| `filename` | 2/2 (100%) | minutes-271.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=271 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING  Friday, March 13, 2015    The Fai... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=304`

- **Vector count**: 2
- **Sample IDs**: `minutes-304.pdf-chunk-1`, `minutes-304.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-304.pdf |
| `filename` | 2/2 (100%) | minutes-304.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=304 |
| `text` | 2/2 (100%) | TO ADOPT RESOLUTION NO. 3296 GRANTING    AN EASEMENT WITH APPLEGATE.      Moved ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=294`

- **Vector count**: 2
- **Sample IDs**: `minutes-294.pdf-chunk-1`, `minutes-294.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-294.pdf |
| `filename` | 2/2 (100%) | minutes-294.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=294 |
| `text` | 2/2 (100%) |  by Ledger-Kalen   AYES:  Revolinski, Ledger-Kalen, Halley, Flournoy, Rasmussen,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=320`

- **Vector count**: 2
- **Sample IDs**: `minutes-320.pdf-chunk-1`, `minutes-320.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-320.pdf |
| `filename` | 2/2 (100%) | minutes-320.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=320 |
| `text` | 2/2 (100%) | 5,000 TAXABLE GENERAL OBLIGATION    REFUNDING CAPITAL LOAN NOTES, SERIES 2016B. ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=330`

- **Vector count**: 2
- **Sample IDs**: `minutes-330.pdf-chunk-0`, `minutes-330.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-330.pdf |
| `filename` | 2/2 (100%) | minutes-330.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=330 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    September 2, 2016          The ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=317`

- **Vector count**: 2
- **Sample IDs**: `minutes-317.pdf-chunk-1`, `minutes-317.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-317.pdf |
| `filename` | 2/2 (100%) | minutes-317.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=317 |
| `text` | 2/2 (100%) | PATION PROJECT NOTE,    SERIES 2016.    Moved by Thompson, seconded by Hamilton ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=367`

- **Vector count**: 2
- **Sample IDs**: `minutes-367.pdf-chunk-0`, `minutes-367.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-367.pdf |
| `filename` | 2/2 (100%) | minutes-367.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=367 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    Tuesday, September 12, 2017        Th... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=385`

- **Vector count**: 2
- **Sample IDs**: `minutes-385.pdf-chunk-0`, `minutes-385.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-385.pdf |
| `filename` | 2/2 (100%) | minutes-385.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=385 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    October 18, 2017      The Fairf... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=384`

- **Vector count**: 2
- **Sample IDs**: `minutes-384.pdf-chunk-0`, `minutes-384.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-384.pdf |
| `filename` | 2/2 (100%) | minutes-384.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=384 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    October 14, 2017      The Fairf... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=368`

- **Vector count**: 2
- **Sample IDs**: `minutes-368.pdf-chunk-0`, `minutes-368.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-368.pdf |
| `filename` | 2/2 (100%) | minutes-368.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=368 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    September 19, 2017            T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=718`

- **Vector count**: 2
- **Sample IDs**: `minutes-718.pdf-chunk-0`, `minutes-718.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-718.pdf |
| `filename` | 2/2 (100%) | minutes-718.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=718 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING    APRIL 12, 2024      ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=80`

- **Vector count**: 2
- **Sample IDs**: `minutes-80.pdf-chunk-1`, `minutes-80.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-80.pdf |
| `filename` | 2/2 (100%) | minutes-80.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=80 |
| `text` | 2/2 (100%) | , Boyer      TO AUTHORIZE THE CITY OF    FAIRFIELD TO EXECUTE THE    DOCUMENTATI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=764`

- **Vector count**: 2
- **Sample IDs**: `minutes-764.pdf-chunk-0`, `minutes-764.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 2/2 (100%) | minutes-764.pdf |
| `filename` | 2/2 (100%) | minutes-764.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=764 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING  SEPTEMBER 3, 2025    T... |

### `https://www.miu.edu/ma-in-consciousness-and-human-potential`

- **Vector count**: 2
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-7`, `miu-aHR0cHM6Ly93d3cubWl1-8`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | education |
| `file` | 2/2 (100%) | Maharishi International University — https://www.miu.edu/ma-in-consciousness-and... |
| `filename` | 2/2 (100%) | Maharishi International University — https://www.miu.edu/ma-in-consciousness-and... |
| `org` | 2/2 (100%) | Maharishi International University |
| `source` | 2/2 (100%) | https://www.miu.edu/ma-in-consciousness-and-human-potential |
| `text` | 2/2 (100%) | International Online MA in Consciousness & Human Potential This program is three... |
| `type` | 2/2 (100%) | community_org |

### `https://pathfindersrcd.org/producer-inventory-map`

- **Vector count**: 2
- **Sample IDs**: `pathfinders-rcd-guide-aHR0cHM6Ly9wYXRoZmlu-2`, `pathfinders-rcd-guide-aHR0cHM6Ly9wYXRoZmlu-3`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic |
| `file` | 2/2 (100%) | Pathfinders RC&D Community Resource Guide — https://pathfindersrcd.org/producer-... |
| `filename` | 2/2 (100%) | Pathfinders RC&D Community Resource Guide — https://pathfindersrcd.org/producer-... |
| `org` | 2/2 (100%) | Pathfinders RC&D Community Resource Guide |
| `source` | 2/2 (100%) | https://pathfindersrcd.org/producer-inventory-map |
| `text` | 2/2 (100%) | Yoder’s Natural Farm is an Amish family farm managed with the philosophy that “n... |
| `type` | 2/2 (100%) | community_org |

### `https://www.youtube.com/watch?v=48yUfl9u0N8`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-48yUfl9u0N8-1`, `traction-thursdays-48yUfl9u0N8-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Jeff Geert 8-22-24 |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Jeff Geert 8-22-24 |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=48yUfl9u0N8 |
| `text` | 2/2 (100%) | half to $4 million project actually only ended up spending about three and a hal... |
| `title` | 2/2 (100%) | Traction Thursday \| Jeff Geert 8-22-24 |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9kOuvq46Boo`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-9kOuvq46Boo-0`, `traction-thursdays-9kOuvq46Boo-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Corey Morrow "Fairsight Societ... |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Corey Morrow "Fairsight Societ... |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=9kOuvq46Boo |
| `text` | 2/2 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Co... |
| `title` | 2/2 (100%) | Traction Thursday \| Corey Morrow "Fairsight Society" |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=7bt63528Qe4`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-7bt63528Qe4-1`, `traction-thursdays-7bt63528Qe4-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Bill Hickey |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Bill Hickey |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=7bt63528Qe4 |
| `text` | 2/2 (100%) | 0 and then I came to Miu when I was a a teacher senior faculty in Miu and making... |
| `title` | 2/2 (100%) | Traction Thursday \| Bill Hickey |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=NFOPEgNTQRk`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-NFOPEgNTQRk-1`, `traction-thursdays-NFOPEgNTQRk-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \|  Kelly Prickett & Kaitlin Bye... |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \|  Kelly Prickett & Kaitlin Bye... |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=NFOPEgNTQRk |
| `text` | 2/2 (100%) | 1 I think we're at million lender network uh these are individuals thank you tha... |
| `title` | 2/2 (100%) | Traction Thursdays \|  Kelly Prickett & Kaitlin Byers 3-22-24 |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=T3aBNZQsvT4`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-T3aBNZQsvT4-0`, `traction-thursdays-T3aBNZQsvT4-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \| Stuart Valentine "Centered We... |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \| Stuart Valentine "Centered We... |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=T3aBNZQsvT4 |
| `text` | 2/2 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| S... |
| `title` | 2/2 (100%) | Traction Thursdays \| Stuart Valentine "Centered Wealth" 2-29-24 |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=Z52l6XKPfQI`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-Z52l6XKPfQI-0`, `traction-thursdays-Z52l6XKPfQI-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Ken Roseboro "The Organic & No... |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Ken Roseboro "The Organic & No... |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Z52l6XKPfQI |
| `text` | 2/2 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ke... |
| `title` | 2/2 (100%) | Traction Thursday \| Ken Roseboro "The Organic & Non GMO Report" |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=bklYJwLO4jQ`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-bklYJwLO4jQ-0`, `traction-thursdays-bklYJwLO4jQ-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Carla Heiser "Research Directo... |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Carla Heiser "Research Directo... |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=bklYJwLO4jQ |
| `text` | 2/2 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ca... |
| `title` | 2/2 (100%) | Traction Thursday \| Carla Heiser "Research Director at Triada Group" |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=jf78kHWPDDU`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-jf78kHWPDDU-1`, `traction-thursdays-jf78kHWPDDU-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \| John Huff "Floating Bed" |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \| John Huff "Floating Bed" |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=jf78kHWPDDU |
| `text` | 2/2 (100%) | gov um for any Government Contracting opportunities for your small business if t... |
| `title` | 2/2 (100%) | Traction Thursdays \| John Huff "Floating Bed" |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=lzpRkm4ZhtI`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-lzpRkm4ZhtI-0`, `traction-thursdays-lzpRkm4ZhtI-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `file` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \| Kevin Riley "CoLab" 3-7-24 |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \| Kevin Riley "CoLab" 3-7-24 |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=lzpRkm4ZhtI |
| `text` | 2/2 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| K... |
| `title` | 2/2 (100%) | Traction Thursdays \| Kevin Riley "CoLab" 3-7-24 |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.area15rpc.com/single-post/fall-2025-regional-planning-news-thriving-communities-and-local-development-initiatives`

- **Vector count**: 1
- **Sample IDs**: `area15-rpc-aHR0cHM6Ly93d3cuYXJl-9`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | regional_planning |
| `file` | 1/1 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/single-post/fal... |
| `filename` | 1/1 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/single-post/fal... |
| `org` | 1/1 (100%) | Area 15 Regional Planning Commission |
| `source` | 1/1 (100%) | https://www.area15rpc.com/single-post/fall-2025-regional-planning-news-thriving-... |
| `text` | 1/1 (100%) | Your membership makes a real difference. It allows our staff to be available whe... |
| `type` | 1/1 (100%) | community_org |

### `https://www.carryonbags.org/sign-up-sheet`

- **Vector count**: 1
- **Sample IDs**: `carry-on-bags-aHR0cHM6Ly93d3cuY2Fy-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | human-services |
| `file` | 1/1 (100%) | Carry On Bags — https://www.carryonbags.org/sign-up-sheet |
| `filename` | 1/1 (100%) | Carry On Bags — https://www.carryonbags.org/sign-up-sheet |
| `org` | 1/1 (100%) | Carry On Bags |
| `source` | 1/1 (100%) | https://www.carryonbags.org/sign-up-sheet |
| `text` | 1/1 (100%) | Click on the PDF Document icon above and print out the form. Please fill in all ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.area15rpc.com/blog`

- **Vector count**: 1
- **Sample IDs**: `area15-rpc-aHR0cHM6Ly93d3cuYXJl-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | regional_planning |
| `file` | 1/1 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/blog |
| `filename` | 1/1 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/blog |
| `org` | 1/1 (100%) | Area 15 Regional Planning Commission |
| `source` | 1/1 (100%) | https://www.area15rpc.com/blog |
| `text` | 1/1 (100%) | New Grants, New Rules, and Big Wins for Area 15 Communities Big opportunities ar... |
| `type` | 1/1 (100%) | community_org |

### `http://www.fairfieldiowa.com/join`

- **Vector count**: 1
- **Sample IDs**: `fairfield-chamber-aHR0cDovL3d3dy5mYWly-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | business |
| `file` | 1/1 (100%) | Fairfield Area Chamber of Commerce — http://www.fairfieldiowa.com/join |
| `filename` | 1/1 (100%) | Fairfield Area Chamber of Commerce — http://www.fairfieldiowa.com/join |
| `org` | 1/1 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 1/1 (100%) | http://www.fairfieldiowa.com/join |
| `text` | 1/1 (100%) | Welcome to the Fairfield Area Chamber of Commerce! We re so glad you re here and... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldacc.com/events`

- **Vector count**: 1
- **Sample IDs**: `facc-aHR0cHM6Ly93d3cuZmFp-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `file` | 1/1 (100%) | Fairfield Arts & Convention Center — https://www.fairfieldacc.com/events |
| `filename` | 1/1 (100%) | Fairfield Arts & Convention Center — https://www.fairfieldacc.com/events |
| `org` | 1/1 (100%) | Fairfield Arts & Convention Center |
| `source` | 1/1 (100%) | https://www.fairfieldacc.com/events |
| `text` | 1/1 (100%) | The Fairfield Arts and Convention Center facility is owned by the City of Fairfi... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldacc.com/programs`

- **Vector count**: 1
- **Sample IDs**: `facc-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `file` | 1/1 (100%) | Fairfield Arts & Convention Center — https://www.fairfieldacc.com/programs |
| `filename` | 1/1 (100%) | Fairfield Arts & Convention Center — https://www.fairfieldacc.com/programs |
| `org` | 1/1 (100%) | Fairfield Arts & Convention Center |
| `source` | 1/1 (100%) | https://www.fairfieldacc.com/programs |
| `text` | 1/1 (100%) | Programs - Fairfield Arts & Convention Center You are here: Home 1 / Community 2... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldiowa.com/news/boutique_therapy`

- **Vector count**: 1
- **Sample IDs**: `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-4`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | business |
| `file` | 1/1 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/news/boutique... |
| `filename` | 1/1 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/news/boutique... |
| `org` | 1/1 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 1/1 (100%) | https://www.fairfieldiowa.com/news/boutique_therapy |
| `text` | 1/1 (100%) | Wrap up your day with dinner at Char Steakhouse. Known for classic steakhouse fa... |
| `type` | 1/1 (100%) | community_org |

### `https://fairfieldiowafarmersmarket.farm/contact`

- **Vector count**: 1
- **Sample IDs**: `fairfield-farmers-market-aHR0cHM6Ly9mYWlyZmll-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | community |
| `file` | 1/1 (100%) | Fairfield Farmers Market — https://fairfieldiowafarmersmarket.farm/contact |
| `filename` | 1/1 (100%) | Fairfield Farmers Market — https://fairfieldiowafarmersmarket.farm/contact |
| `org` | 1/1 (100%) | Fairfield Farmers Market |
| `source` | 1/1 (100%) | https://fairfieldiowafarmersmarket.farm/contact |
| `text` | 1/1 (100%) | (641) 919-2963 (Steve McLaskey) ffiowafarmersmarket@gmail.com We Always Welcome ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=-v9R9pl6Mbo`

- **Vector count**: 1
- **Sample IDs**: `fc-council--v9R9pl6Mbo-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 9-10-12 |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 9-10-12 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=-v9R9pl6Mbo |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 9-10... |
| `title` | 1/1 (100%) | Fairfield City Council 9-10-12 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=-mauGgrzWCY`

- **Vector count**: 1
- **Sample IDs**: `fc-council--mauGgrzWCY-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 11-8-21 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 11-8-21 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=-mauGgrzWCY |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-8-21  i'm g... |
| `title` | 1/1 (100%) | City Council 11-8-21 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.fairfieldatlanticlittleleague.org`

- **Vector count**: 1
- **Sample IDs**: `fall-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | youth-sports |
| `file` | 1/1 (100%) | Fairfield Atlantic Little League — https://www.fairfieldatlanticlittleleague.org |
| `filename` | 1/1 (100%) | Fairfield Atlantic Little League — https://www.fairfieldatlanticlittleleague.org |
| `org` | 1/1 (100%) | Fairfield Atlantic Little League |
| `source` | 1/1 (100%) | https://www.fairfieldatlanticlittleleague.org |
| `text` | 1/1 (100%) | Home About Us Locations Our Staff Registration Info Available Programs Scorekeep... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=5NCxK-eaxqU`

- **Vector count**: 1
- **Sample IDs**: `fc-council-5NCxK-eaxqU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 10-8-12 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 10-8-12 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=5NCxK-eaxqU |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-8-12  third... |
| `title` | 1/1 (100%) | City Council 10-8-12 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=4P0PLmBLWT0`

- **Vector count**: 1
- **Sample IDs**: `fc-council-4P0PLmBLWT0-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 2-11-19 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 2-11-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=4P0PLmBLWT0 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-11-19  good ... |
| `title` | 1/1 (100%) | City Council 2-11-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=63DXQ6FMd94`

- **Vector count**: 1
- **Sample IDs**: `fc-council-63DXQ6FMd94-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 10-13-14 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 10-13-14 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=63DXQ6FMd94 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-13-14  good... |
| `title` | 1/1 (100%) | City Council 10-13-14 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=5yWjY_lHXmU`

- **Vector count**: 1
- **Sample IDs**: `fc-council-5yWjY_lHXmU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 1-14-13 |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 1-14-13 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=5yWjY_lHXmU |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 1-14... |
| `title` | 1/1 (100%) | Fairfield City Council 1-14-13 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=6GILQZDdrSo`

- **Vector count**: 1
- **Sample IDs**: `fc-council-6GILQZDdrSo-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 7-9-18 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 7-9-18 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=6GILQZDdrSo |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 7-9-18  good e... |
| `title` | 1/1 (100%) | City Council 7-9-18 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=6JuNsrZ8Qug`

- **Vector count**: 1
- **Sample IDs**: `fc-council-6JuNsrZ8Qug-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Fairfield Town Hall \| Building & Zoning Permits \| ... |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield Town Hall \| Building & Zoning Permits \| ... |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=6JuNsrZ8Qug |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield Town Hall \| Build... |
| `title` | 1/1 (100%) | Fairfield Town Hall \| Building & Zoning Permits \| 3-28-22 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BBFpEs_eCZw`

- **Vector count**: 1
- **Sample IDs**: `fc-council-BBFpEs_eCZw-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 5-26-20 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 5-26-20 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=BBFpEs_eCZw |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 5-26-20  candy... |
| `title` | 1/1 (100%) | City Council 5-26-20 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BdZicyyIOiM`

- **Vector count**: 1
- **Sample IDs**: `fc-council-BdZicyyIOiM-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 5-14-18 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 5-14-18 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=BdZicyyIOiM |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 5-14-18  good ... |
| `title` | 1/1 (100%) | City Council 5-14-18 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ATJD8rPxgG8`

- **Vector count**: 1
- **Sample IDs**: `fc-council-ATJD8rPxgG8-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 2-12-24 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 2-12-24 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=ATJD8rPxgG8 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-12-24  I'm g... |
| `title` | 1/1 (100%) | City Council 2-12-24 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BCEEocjXQkA`

- **Vector count**: 1
- **Sample IDs**: `fc-council-BCEEocjXQkA-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 4-13-20 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 4-13-20 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=BCEEocjXQkA |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 4-13-20  I'm e... |
| `title` | 1/1 (100%) | City Council 4-13-20 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BTTOcJJz_dw`

- **Vector count**: 1
- **Sample IDs**: `fc-council-BTTOcJJz_dw-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 6-25-18 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 6-25-18 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=BTTOcJJz_dw |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 6-25-18  that'... |
| `title` | 1/1 (100%) | City Council 6-25-18 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CYqkSLGf4zg`

- **Vector count**: 1
- **Sample IDs**: `fc-council-CYqkSLGf4zg-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — 6-8-15 City Council Meeting |
| `filename` | 1/1 (100%) | City Council Meeting — null — 6-8-15 City Council Meeting |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=CYqkSLGf4zg |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: 6-8-15 City Council Meeting... |
| `title` | 1/1 (100%) | 6-8-15 City Council Meeting |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EiwiJj2b0rI`

- **Vector count**: 1
- **Sample IDs**: `fc-council-EiwiJj2b0rI-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 9-25-12 |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 9-25-12 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=EiwiJj2b0rI |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 9-25... |
| `title` | 1/1 (100%) | Fairfield City Council 9-25-12 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GKkxUiqmr9U`

- **Vector count**: 1
- **Sample IDs**: `fc-council-GKkxUiqmr9U-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 7-13-15 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 7-13-15 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=GKkxUiqmr9U |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 7-13-15  she g... |
| `title` | 1/1 (100%) | City Council 7-13-15 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=LU_YR0bL-wc`

- **Vector count**: 1
- **Sample IDs**: `fc-council-LU_YR0bL-wc-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 5-12-14 |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 5-12-14 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=LU_YR0bL-wc |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 5-12... |
| `title` | 1/1 (100%) | Fairfield City Council 5-12-14 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=NMNQbINXW-A`

- **Vector count**: 1
- **Sample IDs**: `fc-council-NMNQbINXW-A-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council Work Session 10-21-19 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council Work Session 10-21-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=NMNQbINXW-A |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council Work Session 1... |
| `title` | 1/1 (100%) | City Council Work Session 10-21-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=N48XR0ifuow`

- **Vector count**: 1
- **Sample IDs**: `fc-council-N48XR0ifuow-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 11-23-20 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 11-23-20 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=N48XR0ifuow |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-23-20  okay... |
| `title` | 1/1 (100%) | City Council 11-23-20 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=PcVTiAtSfn8`

- **Vector count**: 1
- **Sample IDs**: `fc-council-PcVTiAtSfn8-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 6-30-14 |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 6-30-14 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=PcVTiAtSfn8 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 6-30... |
| `title` | 1/1 (100%) | Fairfield City Council 6-30-14 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OyRBwpqV8rc`

- **Vector count**: 1
- **Sample IDs**: `fc-council-OyRBwpqV8rc-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — 5-26-15 City Council Meeting |
| `filename` | 1/1 (100%) | City Council Meeting — null — 5-26-15 City Council Meeting |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=OyRBwpqV8rc |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: 5-26-15 City Council Meetin... |
| `title` | 1/1 (100%) | 5-26-15 City Council Meeting |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OYVj52O58Ls`

- **Vector count**: 1
- **Sample IDs**: `fc-council-OYVj52O58Ls-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Special Council Meeting 2-10-20 |
| `filename` | 1/1 (100%) | City Council Meeting — null — Special Council Meeting 2-10-20 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=OYVj52O58Ls |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Special Council Meeting 2-1... |
| `title` | 1/1 (100%) | Special Council Meeting 2-10-20 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=SumcTMqdngU`

- **Vector count**: 1
- **Sample IDs**: `fc-council-SumcTMqdngU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Special City Council 6-29-17 |
| `filename` | 1/1 (100%) | City Council Meeting — null — Special City Council 6-29-17 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=SumcTMqdngU |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Special City Council 6-29-1... |
| `title` | 1/1 (100%) | Special City Council 6-29-17 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=X4tUJJkXBWI`

- **Vector count**: 1
- **Sample IDs**: `fc-council-X4tUJJkXBWI-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City of Fairfield \| Board of Adjustments 3.17.25 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City of Fairfield \| Board of Adjustments 3.17.25 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=X4tUJJkXBWI |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Board o... |
| `title` | 1/1 (100%) | City of Fairfield \| Board of Adjustments 3.17.25 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_TiyW3ylQfE`

- **Vector count**: 1
- **Sample IDs**: `fc-council-_TiyW3ylQfE-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — Pool Gym Project |
| `filename` | 1/1 (100%) | City Council Meeting — null — Pool Gym Project |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=_TiyW3ylQfE |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Pool Gym Project  we'd love... |
| `title` | 1/1 (100%) | Pool Gym Project |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cI0D8khIR48`

- **Vector count**: 1
- **Sample IDs**: `fc-council-cI0D8khIR48-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — FF City Council Meeting 4-23-12 |
| `filename` | 1/1 (100%) | City Council Meeting — null — FF City Council Meeting 4-23-12 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=cI0D8khIR48 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: FF City Council Meeting 4-2... |
| `title` | 1/1 (100%) | FF City Council Meeting 4-23-12 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=evfonuhfXVQ`

- **Vector count**: 1
- **Sample IDs**: `fc-council-evfonuhfXVQ-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 11-25-19 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 11-25-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=evfonuhfXVQ |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-25-19  yes ... |
| `title` | 1/1 (100%) | City Council 11-25-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=eh8UDJBqnAA`

- **Vector count**: 1
- **Sample IDs**: `fc-council-eh8UDJBqnAA-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council Study Session 12.16.24 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council Study Session 12.16.24 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=eh8UDJBqnAA |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council Study Session ... |
| `title` | 1/1 (100%) | City Council Study Session 12.16.24 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=dbsBlnH-qRU`

- **Vector count**: 1
- **Sample IDs**: `fc-council-dbsBlnH-qRU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 8-26-19 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 8-26-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=dbsBlnH-qRU |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-26-19  good ... |
| `title` | 1/1 (100%) | City Council 8-26-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=duYxwx0OVVI`

- **Vector count**: 1
- **Sample IDs**: `fc-council-duYxwx0OVVI-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 3-11-19 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 3-11-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=duYxwx0OVVI |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 3-11-19  good ... |
| `title` | 1/1 (100%) | City Council 3-11-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=g_GggZUEewg`

- **Vector count**: 1
- **Sample IDs**: `fc-council-g_GggZUEewg-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — FFCC 4-9-12 |
| `filename` | 1/1 (100%) | City Council Meeting — null — FFCC 4-9-12 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=g_GggZUEewg |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: FFCC 4-9-12  good evening e... |
| `title` | 1/1 (100%) | FFCC 4-9-12 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=kn1vBAnKNYE`

- **Vector count**: 1
- **Sample IDs**: `fc-council-kn1vBAnKNYE-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 012819 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 012819 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=kn1vBAnKNYE |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 012819  back u... |
| `title` | 1/1 (100%) | City Council 012819 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=s5BR8vaoYbs`

- **Vector count**: 1
- **Sample IDs**: `fc-council-s5BR8vaoYbs-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 8-28-17 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 8-28-17 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=s5BR8vaoYbs |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-28-17  well ... |
| `title` | 1/1 (100%) | City Council 8-28-17 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=t_B-VJvY3mI`

- **Vector count**: 1
- **Sample IDs**: `fc-council-t_B-VJvY3mI-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council 2-12-18 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 2-12-18 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=t_B-VJvY3mI |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-12-18  good ... |
| `title` | 1/1 (100%) | City Council 2-12-18 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uy-M5iP2TOc`

- **Vector count**: 1
- **Sample IDs**: `fc-council-uy-M5iP2TOc-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council Work Session 11.25.24 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council Work Session 11.25.24 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=uy-M5iP2TOc |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council Work Session 1... |
| `title` | 1/1 (100%) | City Council Work Session 11.25.24 |
| `type` | 1/1 (100%) | council_meeting |

### `http://www.fairfieldculturaldistrict.org/photos.htm`

- **Vector count**: 1
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-4`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/photos.ht... |
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/photos.ht... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/photos.htm |
| `text` | 1/1 (100%) | Note the pestle-and-morter on the top of the drugstore, built in 1851 (no longer... |
| `type` | 1/1 (100%) | community_org |

### `http://www.fairfieldculturaldistrict.org/heritage/ps-elks.htm`

- **Vector count**: 1
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/heritage/ps-elks.htm |
| `text` | 1/1 (100%) | Elks Lodge Ventilator-Fairfield Heritage Tour The Elks Lodge on the West Side of... |
| `type` | 1/1 (100%) | community_org |

### `http://www.fairfieldculturaldistrict.org/2017gala/2017gala.htm`

- **Vector count**: 1
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-3`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/2017gala/... |
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/2017gala/... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/2017gala/2017gala.htm |
| `text` | 1/1 (100%) | Here, Elaine told the audience that when she first received a letter saying the ... |
| `type` | 1/1 (100%) | community_org |

### `http://www.fairfieldculturaldistrict.org/heritage/new-sweden.htm`

- **Vector count**: 1
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/heritage/new-sweden.htm |
| `text` | 1/1 (100%) | A Swedish Baptist congregation was formed in 1854, but did not remain active ver... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=y987gAC7FSQ`

- **Vector count**: 1
- **Sample IDs**: `fc-council-y987gAC7FSQ-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | City Council Meeting — null — City Council \| Special Meeting 3-25-24 |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council \| Special Meeting 3-25-24 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=y987gAC7FSQ |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council \| Special Meet... |
| `title` | 1/1 (100%) | City Council \| Special Meeting 3-25-24 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.fairfieldsfuture.org/page/elementary-parent-group`

- **Vector count**: 1
- **Sample IDs**: `fcsd-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | Fairfield Community School District — https://www.fairfieldsfuture.org/page/elem... |
| `filename` | 1/1 (100%) | Fairfield Community School District — https://www.fairfieldsfuture.org/page/elem... |
| `org` | 1/1 (100%) | Fairfield Community School District |
| `source` | 1/1 (100%) | https://www.fairfieldsfuture.org/page/elementary-parent-group |
| `text` | 1/1 (100%) | Elementary Parent Group &#x2F; Trojans Unite PTO \| Fairfield Community School Di... |
| `type` | 1/1 (100%) | community_org |

### `http://www.fairfieldculturaldistrict.org/heritage/sitelist.htm`

- **Vector count**: 1
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/heritage/sitelist.htm |
| `text` | 1/1 (100%) | (54) New Sweden, Iowa , history of the settlement (Jefferson County, north of Lo... |
| `type` | 1/1 (100%) | community_org |

### `https://fairfieldeducationfoundation.com/contact`

- **Vector count**: 1
- **Sample IDs**: `fef-aHR0cHM6Ly9mYWlyZmll-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | Fairfield Education Foundation — https://fairfieldeducationfoundation.com/contac... |
| `filename` | 1/1 (100%) | Fairfield Education Foundation — https://fairfieldeducationfoundation.com/contac... |
| `org` | 1/1 (100%) | Fairfield Education Foundation |
| `source` | 1/1 (100%) | https://fairfieldeducationfoundation.com/contact |
| `text` | 1/1 (100%) | Please enable JavaScript in your browser to complete this form. 403 South 20th S... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fnll.org`

- **Vector count**: 1
- **Sample IDs**: `fnll-aHR0cHM6Ly93d3cuZm5s-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | youth-sports |
| `file` | 1/1 (100%) | Fairfield National Little League — https://www.fnll.org |
| `filename` | 1/1 (100%) | Fairfield National Little League — https://www.fnll.org |
| `org` | 1/1 (100%) | Fairfield National Little League |
| `source` | 1/1 (100%) | https://www.fnll.org |
| `text` | 1/1 (100%) | Fairfield has two Little Leagues, National and American. The National League bou... |
| `type` | 1/1 (100%) | community_org |

### `https://freeformartgallery.com/product-category/jewelry`

- **Vector count**: 1
- **Sample IDs**: `freeform-gallery-aHR0cHM6Ly9mcmVlZm9y-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `file` | 1/1 (100%) | Freeform Art Gallery — https://freeformartgallery.com/product-category/jewelry |
| `filename` | 1/1 (100%) | Freeform Art Gallery — https://freeformartgallery.com/product-category/jewelry |
| `org` | 1/1 (100%) | Freeform Art Gallery |
| `source` | 1/1 (100%) | https://freeformartgallery.com/product-category/jewelry |
| `text` | 1/1 (100%) | Default sorting Sort by popularity Sort by average rating Sort by latest Sort by... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldmediacenter.com/jeffersoncountysupervisors`

- **Vector count**: 1
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `file` | 1/1 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/jeffersoncountysup... |
| `filename` | 1/1 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/jeffersoncountysup... |
| `org` | 1/1 (100%) | Fairfield Media Center |
| `source` | 1/1 (100%) | https://www.fairfieldmediacenter.com/jeffersoncountysupervisors |
| `text` | 1/1 (100%) | The Board of Supervisors scheduled meeting time is 8:30 a.m. on most Mondays. Th... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldmediacenter.com/copy-of-great-taste`

- **Vector count**: 1
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `file` | 1/1 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/copy-of-great-tast... |
| `filename` | 1/1 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/copy-of-great-tast... |
| `org` | 1/1 (100%) | Fairfield Media Center |
| `source` | 1/1 (100%) | https://www.fairfieldmediacenter.com/copy-of-great-taste |
| `text` | 1/1 (100%) | One of the Midwest's major landscape painters, John Preston continues to find ne... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldfriendschurch.org/connect`

- **Vector count**: 1
- **Sample IDs**: `ffc-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | faith-community |
| `file` | 1/1 (100%) | Fairfield Friends Church — https://www.fairfieldfriendschurch.org/connect |
| `filename` | 1/1 (100%) | Fairfield Friends Church — https://www.fairfieldfriendschurch.org/connect |
| `org` | 1/1 (100%) | Fairfield Friends Church |
| `source` | 1/1 (100%) | https://www.fairfieldfriendschurch.org/connect |
| `text` | 1/1 (100%) | 1209 South 6th St Fairfield, IA 52556 Email: fairfield.ia.friends@gmail.com Phon... |
| `type` | 1/1 (100%) | community_org |

### `https://fairfieldfirstfridays.org/about-us`

- **Vector count**: 1
- **Sample IDs**: `fff-aHR0cHM6Ly9mYWlyZmll-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Fairfield First Fridays Art Walk — https://fairfieldfirstfridays.org/about-us |
| `filename` | 1/1 (100%) | Fairfield First Fridays Art Walk — https://fairfieldfirstfridays.org/about-us |
| `org` | 1/1 (100%) | Fairfield First Fridays Art Walk |
| `source` | 1/1 (100%) | https://fairfieldfirstfridays.org/about-us |
| `text` | 1/1 (100%) | The event was such a success that Hurlin and the Fairfield Arts Community were i... |
| `type` | 1/1 (100%) | community_org |

### `https://fairfieldfirstfridays.org/blog/f.rss`

- **Vector count**: 1
- **Sample IDs**: `fff-aHR0cHM6Ly9mYWlyZmll-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Fairfield First Fridays Art Walk — https://fairfieldfirstfridays.org/blog/f.rss |
| `filename` | 1/1 (100%) | Fairfield First Fridays Art Walk — https://fairfieldfirstfridays.org/blog/f.rss |
| `org` | 1/1 (100%) | Fairfield First Fridays Art Walk |
| `source` | 1/1 (100%) | https://fairfieldfirstfridays.org/blog/f.rss |
| `text` | 1/1 (100%) | Fairfield First Fridays Art Walk https://fairfieldfirstfridays.org Fairfield Fir... |
| `type` | 1/1 (100%) | community_org |

### `https://www.greaterjeffersoncountyfoundation.org/what-we-do`

- **Vector count**: 1
- **Sample IDs**: `gjcf-aHR0cHM6Ly93d3cuZ3Jl-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
| `file` | 1/1 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `filename` | 1/1 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `org` | 1/1 (100%) | Greater Jefferson County Foundation |
| `source` | 1/1 (100%) | https://www.greaterjeffersoncountyfoundation.org/what-we-do |
| `text` | 1/1 (100%) | What We Do - Greater Jefferson County Foundation What We Do Home What We Do For ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldmethodistchurch.org/users/steve-swanson`

- **Vector count**: 1
- **Sample IDs**: `fumc-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | faith-community |
| `file` | 1/1 (100%) | First United Methodist Church Fairfield — https://www.fairfieldmethodistchurch.o... |
| `filename` | 1/1 (100%) | First United Methodist Church Fairfield — https://www.fairfieldmethodistchurch.o... |
| `org` | 1/1 (100%) | First United Methodist Church Fairfield |
| `source` | 1/1 (100%) | https://www.fairfieldmethodistchurch.org/users/steve-swanson |
| `text` | 1/1 (100%) | Subscribe to receive email updates with the latest news. 2026 First United Metho... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldmediacenter.com/copy-of-buddha-at-the-gas-pump`

- **Vector count**: 1
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `file` | 1/1 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/copy-of-buddha-at-... |
| `filename` | 1/1 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/copy-of-buddha-at-... |
| `org` | 1/1 (100%) | Fairfield Media Center |
| `source` | 1/1 (100%) | https://www.fairfieldmediacenter.com/copy-of-buddha-at-the-gas-pump |
| `text` | 1/1 (100%) | www.fairfieldmediacenter.com www.facebook.com/fairfieldmediacenter www.twitter.c... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fnll.org/news`

- **Vector count**: 1
- **Sample IDs**: `fnll-aHR0cHM6Ly93d3cuZm5s-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | youth-sports |
| `file` | 1/1 (100%) | Fairfield National Little League — https://www.fnll.org/news |
| `filename` | 1/1 (100%) | Fairfield National Little League — https://www.fnll.org/news |
| `org` | 1/1 (100%) | Fairfield National Little League |
| `source` | 1/1 (100%) | https://www.fnll.org/news |
| `text` | 1/1 (100%) | Home About Us Contact Info League Bylaws Fields Registration Info Available Prog... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/use_cases`

- **Vector count**: 1
- **Sample IDs**: `icf-6005d76c2498c7a01ddfac09-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/use_cases |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/use_cases |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/use_cases |
| `text` | 1/1 (100%) | Intelligent Community Use Cases - Intelligent Community Forum ICF’s Community Ac... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/members`

- **Vector count**: 1
- **Sample IDs**: `icf-b887093203b6777445e0d0bc-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/members |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/members |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/members |
| `text` | 1/1 (100%) | BABLE Smart Cities accelerates cities, towns, regions, and businesses with data-... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/tags/video`

- **Vector count**: 1
- **Sample IDs**: `icf-180963ca36c5807ea7abefad-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/tags/video |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/tags/video |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/tags/video |
| `text` | 1/1 (100%) | What does the Intelligent Community Forum do? Posted on News & Media by Robert B... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/certification`

- **Vector count**: 1
- **Sample IDs**: `icf-68b276e6d7b60e32dae37aea-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/certification |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/certification |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/certification |
| `text` | 1/1 (100%) | Certification - Intelligent Community Forum Join ICF's Growing List of Certified... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/our_mission`

- **Vector count**: 1
- **Sample IDs**: `icf-8168ff237c14a493a4cba87e-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/our_mission |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/our_mission |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/our_mission |
| `text` | 1/1 (100%) | Starting in 2000 with a research project comparing cities in various nations, IC... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_fredericton_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-0c995efb0154797f08991362-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_frederict... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_frederict... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_fredericton_accelerated |
| `text` | 1/1 (100%) | Fredericton - Intelligent Community Forum How did a declining city create a boom... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/reports`

- **Vector count**: 1
- **Sample IDs**: `icf-2a460a1431912711aaa754a7-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/reports |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/reports |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/reports |
| `text` | 1/1 (100%) | Community Accelerator Reports Starting with a research project comparing cities ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/events`

- **Vector count**: 1
- **Sample IDs**: `icf-5a4428c7af06515721fa67a3-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/events |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/events |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/events |
| `text` | 1/1 (100%) | ICF 2026 VIP Delegation to Taiwan Smart City Summit & Expo ICF 2026 Smart21 Anno... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/connect_with_communities`

- **Vector count**: 1
- **Sample IDs**: `icf-7c5fe17ea041ff73d5c648f7-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/connect_with_... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/connect_with_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/connect_with_communities |
| `text` | 1/1 (100%) | Local governments, not-for-profits and for-profit businesses join ICF to gain be... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/audio_and_video_content`

- **Vector count**: 1
- **Sample IDs**: `icf-7274ed322124a821bc35eed6-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/audio_and_vid... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/audio_and_vid... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/audio_and_video_content |
| `text` | 1/1 (100%) | Audio and Video Content - Intelligent Community Forum No Place BUT Home How Comm... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/content`

- **Vector count**: 1
- **Sample IDs**: `icf-5eb24cf0598eda81a5571dee-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/content |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/content |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/content |
| `text` | 1/1 (100%) | Learn more about becoming an Intelligent Community Learn more about becoming an ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/broadband`

- **Vector count**: 1
- **Sample IDs**: `icf-8c3e5fa2d769d055f5e7ccf5-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/broadband |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/broadband |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/broadband |
| `text` | 1/1 (100%) | Broadband connectivity is critical for economic growth Broadband connectivity is... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/contact_us`

- **Vector count**: 1
- **Sample IDs**: `icf-0011a2ffe459d013d39727a6-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/contact_us |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/contact_us |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/contact_us |
| `text` | 1/1 (100%) | Intelligent Community Forum 250 Park Avenue, 7th Floor, New York, NY 10177 USA +... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_chattanooga_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-1216a6d42f589f680e5b7e5a-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_chattanoo... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_chattanoo... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_chattanooga_accelerated |
| `text` | 1/1 (100%) | Chattanooga - Intelligent Community Forum How did a polluted city become a hot t... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/start_nomination`

- **Vector count**: 1
- **Sample IDs**: `icf-24ae52a568008b38647cce1e-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/start_nominat... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/start_nominat... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/start_nomination |
| `text` | 1/1 (100%) | Start Your Nomination - Intelligent Community Forum Learn How to Build an Intell... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/benefit_from_network`

- **Vector count**: 1
- **Sample IDs**: `icf-b43a3002a533529558d54c42-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/benefit_from_... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/benefit_from_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/benefit_from_network |
| `text` | 1/1 (100%) | How to Benefit from the Network - Intelligent Community Forum What do ICF member... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_institutes`

- **Vector count**: 1
- **Sample IDs**: `icf-7ff2f10dd4b121df8529f059-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_institute... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_institute... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/icf_institutes |
| `text` | 1/1 (100%) | Intelligent Community Institutes - Intelligent Community Forum An Intelligent Co... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/top7_announcements`

- **Vector count**: 1
- **Sample IDs**: `icf-a1550c9414e20e2bd58392d3-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/top7_announce... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/top7_announce... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/top7_announcements |
| `text` | 1/1 (100%) | Top7 Announcements - Intelligent Community Forum Each year, after the Smart21 Co... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/knowledge_workforce`

- **Vector count**: 1
- **Sample IDs**: `icf-7395a6998b97a44564e4e73e-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/knowledge_wor... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/knowledge_wor... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/knowledge_workforce |
| `text` | 1/1 (100%) | A knowledge-based economy needs a digitally savvy workforce A knowledge-based ec... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/sustainability`

- **Vector count**: 1
- **Sample IDs**: `icf-62bc8b844436798a61fce581-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/sustainabilit... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/sustainabilit... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/sustainability |
| `text` | 1/1 (100%) | Making local changes to preserve what we cherish most Making local changes to pr... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/accelerator`

- **Vector count**: 1
- **Sample IDs**: `icf-56e3426fd83bbcfea160af3c-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/accelerator |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/accelerator |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/accelerator |
| `text` | 1/1 (100%) | Community Accelerator - Intelligent Community Forum Learn How to Build an Intell... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/the_network`

- **Vector count**: 1
- **Sample IDs**: `icf-38156e367805900112bd01ed-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/the_network |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/the_network |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/the_network |
| `text` | 1/1 (100%) | Engage with other Intelligent Communities around the world Engage with other Int... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/webinar_events`

- **Vector count**: 1
- **Sample IDs**: `icf-5744a3381df74ca448e72afc-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/webinar_event... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/webinar_event... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/webinar_events |
| `text` | 1/1 (100%) | Unlocking Opportunities for Canadian Cities: An Introduction to the Horizon Euro... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/connect`

- **Vector count**: 1
- **Sample IDs**: `icf-0361ab845dfd086f2ec215b6-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/connect |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/connect |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/connect |
| `text` | 1/1 (100%) | Local governments, not-for-profits and for-profit businesses join ICF to gain be... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_columbus_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-62b24a5b392e9df1c9fb3d56-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_columbus_... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_columbus_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_columbus_accelerated |
| `text` | 1/1 (100%) | How did an old Rust Belt city spark new economic growth? How did an old Rust Bel... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/assess`

- **Vector count**: 1
- **Sample IDs**: `icf-51e2a5dff1b29c5f11c36063-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/assess |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/assess |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/assess |
| `text` | 1/1 (100%) | You can find consultants to measure how Smart your city or county is and tell yo... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/participate`

- **Vector count**: 1
- **Sample IDs**: `icf-03e0aa6b26066e3d100478db-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/participate |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/participate |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/participate |
| `text` | 1/1 (100%) | Participate - Intelligent Community Forum We invite you to engage with ICF as a ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_eindhoven_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-6d6a1db2a69158af6587fedf-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_eindhoven... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_eindhoven... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_eindhoven_accelerated |
| `text` | 1/1 (100%) | How did a city rebuild after its biggest employer moved out? How did a city rebu... |
| `type` | 1/1 (100%) | community_org |

### `https://www.extension.iastate.edu/jefferson/powerful-tools-caregivers-series-begins-february-10`

- **Vector count**: 1
- **Sample IDs**: `isu-extension-aHR0cHM6Ly93d3cuZXh0-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/pow... |
| `filename` | 1/1 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/pow... |
| `org` | 1/1 (100%) | ISU Extension Jefferson County |
| `source` | 1/1 (100%) | https://www.extension.iastate.edu/jefferson/powerful-tools-caregivers-series-beg... |
| `text` | 1/1 (100%) | Powerful Tools for Caregivers Series Begins February 10 \| Iowa State University ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org`

- **Vector count**: 1
- **Sample IDs**: `icf-d79322de2217fe1988b2ad38-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org |
| `text` | 1/1 (100%) | The 2025 Intelligent Community of the Year Nominate Your Community for the ICF A... |
| `type` | 1/1 (100%) | community_org |

### `https://www.extension.iastate.edu/jefferson/iowa-state-university-extension-and-outreach-host-2026-dairy-days-across-iowa`

- **Vector count**: 1
- **Sample IDs**: `isu-extension-aHR0cHM6Ly93d3cuZXh0-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/iow... |
| `filename` | 1/1 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/iow... |
| `org` | 1/1 (100%) | ISU Extension Jefferson County |
| `source` | 1/1 (100%) | https://www.extension.iastate.edu/jefferson/iowa-state-university-extension-and-... |
| `text` | 1/1 (100%) | Jan. 29: Jones Dairy — 2680 250th Avenue, Spencer (farm tour at 9 a.m.) Feb. 3: ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/news`

- **Vector count**: 1
- **Sample IDs**: `icf-df0990768229dfc20a54b717-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/news |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/news |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/news |
| `text` | 1/1 (100%) | News & Media - Intelligent Community Forum Intelligent Community Forum and EXXAS... |
| `type` | 1/1 (100%) | community_org |

### `https://www.iowasource.com/2012/12/05/fairfield2012_12_gisella`

- **Vector count**: 1
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-4`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | media |
| `file` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2012/12/05/fairfield2012_12_gisella |
| `filename` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2012/12/05/fairfield2012_12_gisella |
| `org` | 1/1 (100%) | Iowa Source |
| `source` | 1/1 (100%) | https://www.iowasource.com/2012/12/05/fairfield2012_12_gisella |
| `text` | 1/1 (100%) | Gisella made it safely to Fairfield, IA, after her NYC adventure. See Gisella’s ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_taichung_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-df6de79091d346226f327631-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_taichung_... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_taichung_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_taichung_accelerated |
| `text` | 1/1 (100%) | How did a city help its small manufacturers win big contracts? How did a city he... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/intelligent_community_network`

- **Vector count**: 1
- **Sample IDs**: `icf-f8a0f1d8b4a3068a0c9ddf12-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/intelligent_c... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/intelligent_c... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/intelligent_community_network |
| `text` | 1/1 (100%) | Intelligent Community Network - Intelligent Community Forum The Intelligent Comm... |
| `type` | 1/1 (100%) | community_org |

### `https://www.icon-art.org/arc-specialevents`

- **Vector count**: 1
- **Sample IDs**: `icon-aHR0cHM6Ly93d3cuaWNv-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/arc-specialevents |
| `filename` | 1/1 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/arc-specialevents |
| `org` | 1/1 (100%) | ICON — Iowa Contemporary Art |
| `source` | 1/1 (100%) | https://www.icon-art.org/arc-specialevents |
| `text` | 1/1 (100%) | Grand Opening of New Gallery on the Square April 6, 2007 After six months of ren... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_nations`

- **Vector count**: 1
- **Sample IDs**: `icf-fd492551e51f382b4328b7aa-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_nations |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_nations |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/icf_nations |
| `text` | 1/1 (100%) | ICF Nations - Intelligent Community Forum ICF charters nonprofit organizations t... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/barns/findus.htm`

- **Vector count**: 1
- **Sample IDs**: `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/barns/findus... |
| `filename` | 1/1 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/barns/findus... |
| `org` | 1/1 (100%) | Jefferson County Iowa Government |
| `source` | 1/1 (100%) | https://jeffersoncounty.iowa.gov/barns/findus.htm |
| `text` | 1/1 (100%) | The Evergreen Ridge Stock Farm is located about 1-mile south of the Fairfield Sq... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/delegations`

- **Vector count**: 1
- **Sample IDs**: `icf-ea1b753d09f0d03902e7008d-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/delegations |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/delegations |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/delegations |
| `text` | 1/1 (100%) | VIP Delegations - Intelligent Community Forum ICF VIP Delegations are curated ec... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/digital_equality`

- **Vector count**: 1
- **Sample IDs**: `icf-cdf2dabe56ebc1efea300e32-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/digital_equal... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/digital_equal... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/digital_equality |
| `text` | 1/1 (100%) | Communities thrive when more citizens can participate in the digital economy Com... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_sunshine_coast_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-c4166c94a5ee7280562a59a5-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_sunshine_... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_sunshine_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_sunshine_coast_accelerated |
| `text` | 1/1 (100%) | Sunshine Coast - Intelligent Community Forum How did a sleepy tourist town devel... |
| `type` | 1/1 (100%) | community_org |

### `https://www.icon-art.org/currentevents`

- **Vector count**: 1
- **Sample IDs**: `icon-aHR0cHM6Ly93d3cuaWNv-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/currentevents |
| `filename` | 1/1 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/currentevents |
| `org` | 1/1 (100%) | ICON — Iowa Contemporary Art |
| `source` | 1/1 (100%) | https://www.icon-art.org/currentevents |
| `text` | 1/1 (100%) | ONGOING SPECIAL EVENTS ONGOING ICON PROGRAMS ICON THURSDAYS Every Thursday ICON ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/smart21_announcements`

- **Vector count**: 1
- **Sample IDs**: `icf-d36b63c0fc5f09c4d7f67518-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/smart21_annou... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/smart21_annou... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/smart21_announcements |
| `text` | 1/1 (100%) | Smart21 Announcements - Intelligent Community Forum Each year, the Intelligent C... |
| `type` | 1/1 (100%) | community_org |

### `https://www.iowasource.com/2017/11/15/fire-ritual-dance-siudy-flamenco-dance-theater-joins-the-des-moines-symphony`

- **Vector count**: 1
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | media |
| `file` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2017/11/15/fire-ritual-dance-siudy-flam... |
| `filename` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2017/11/15/fire-ritual-dance-siudy-flam... |
| `org` | 1/1 (100%) | Iowa Source |
| `source` | 1/1 (100%) | https://www.iowasource.com/2017/11/15/fire-ritual-dance-siudy-flamenco-dance-the... |
| `text` | 1/1 (100%) | Fire Ritual Dance: Siudy Flamenco Dance Theater Joins the Des Moines Symphony - ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/improve`

- **Vector count**: 1
- **Sample IDs**: `icf-ee3ab2b1a89a05896a0bd98e-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/improve |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/improve |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/improve |
| `text` | 1/1 (100%) | Improve Your Community - Intelligent Community Forum The American author Mark Tw... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_dundee_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-f0464bdac4d98387d706d83c-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_dundee_ac... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_dundee_ac... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_dundee_accelerated |
| `text` | 1/1 (100%) | How did a dying city leap to leadership in video gaming? How did a dying city le... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/who_we_are`

- **Vector count**: 1
- **Sample IDs**: `icf-c810bba160daafd0ceb1a9ab-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/who_we_are |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/who_we_are |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/who_we_are |
| `text` | 1/1 (100%) | For cities, counties and regions around the world, ICF charts new paths to econo... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/what_we_do`

- **Vector count**: 1
- **Sample IDs**: `icf-c9edd91c7498b34da100f965-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/what_we_do |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/what_we_do |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/what_we_do |
| `text` | 1/1 (100%) | ICF provides training, consulting, assessment, certification and award programs.... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_stratford_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-e823b4a4d5b7211872cab429-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `file` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_stratford... |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_stratford... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_stratford_accelerated |
| `text` | 1/1 (100%) | How did a small city attract the data centers of big-city banks? How did a small... |
| `type` | 1/1 (100%) | community_org |

### `https://www.iowasource.com/2012/12/06/food2012_12_gisella`

- **Vector count**: 1
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-3`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | media |
| `file` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2012/12/06/food2012_12_gisella |
| `filename` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2012/12/06/food2012_12_gisella |
| `org` | 1/1 (100%) | Iowa Source |
| `source` | 1/1 (100%) | https://www.iowasource.com/2012/12/06/food2012_12_gisella |
| `text` | 1/1 (100%) | The difference in traditional foods according to region and how those foods chan... |
| `type` | 1/1 (100%) | community_org |

### `https://www.jeffersoncountyheritage.org/maasdam-barns`

- **Vector count**: 1
- **Sample IDs**: `jc-heritage-aHR0cHM6Ly93d3cuamVm-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | heritage |
| `file` | 1/1 (100%) | Jefferson County Heritage Foundation — https://www.jeffersoncountyheritage.org/m... |
| `filename` | 1/1 (100%) | Jefferson County Heritage Foundation — https://www.jeffersoncountyheritage.org/m... |
| `org` | 1/1 (100%) | Jefferson County Heritage Foundation |
| `source` | 1/1 (100%) | https://www.jeffersoncountyheritage.org/maasdam-barns |
| `text` | 1/1 (100%) | As the Iowa DOT began planning the by-pass and purchases the Leathers farm in 20... |
| `type` | 1/1 (100%) | community_org |

### `https://www.jeffersoncountyheritage.org/events`

- **Vector count**: 1
- **Sample IDs**: `jc-heritage-aHR0cHM6Ly93d3cuamVm-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | heritage |
| `file` | 1/1 (100%) | Jefferson County Heritage Foundation — https://www.jeffersoncountyheritage.org/e... |
| `filename` | 1/1 (100%) | Jefferson County Heritage Foundation — https://www.jeffersoncountyheritage.org/e... |
| `org` | 1/1 (100%) | Jefferson County Heritage Foundation |
| `source` | 1/1 (100%) | https://www.jeffersoncountyheritage.org/events |
| `text` | 1/1 (100%) | Events from September 22, 2023 – October 7, 2023 – Jefferson County Heritage Lea... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/auditor/elections`

- **Vector count**: 1
- **Sample IDs**: `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/auditor/e... |
| `filename` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/auditor/e... |
| `org` | 1/1 (100%) | Jefferson County Code of Ordinances |
| `source` | 1/1 (100%) | https://jeffersoncounty.iowa.gov/auditor/elections |
| `text` | 1/1 (100%) | Notice: County Courthouse Offices will be closed New Year's Day, Thursday, Janua... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/2023-jefferson-county-sheriffs-office-end-of-year-report`

- **Vector count**: 1
- **Sample IDs**: `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/2023-jeff... |
| `filename` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/2023-jeff... |
| `org` | 1/1 (100%) | Jefferson County Code of Ordinances |
| `source` | 1/1 (100%) | https://jeffersoncounty.iowa.gov/2023-jefferson-county-sheriffs-office-end-of-ye... |
| `text` | 1/1 (100%) | 2023 Jefferson County Sheriff's Office End of Year Report - Jefferson County Iow... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/road-equipment-operator`

- **Vector count**: 1
- **Sample IDs**: `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `file` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/road-equi... |
| `filename` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/road-equi... |
| `org` | 1/1 (100%) | Jefferson County Code of Ordinances |
| `source` | 1/1 (100%) | https://jeffersoncounty.iowa.gov/road-equipment-operator |
| `text` | 1/1 (100%) | Temporary Polling Location Change: Fairfield 2nd Ward will vote at the County En... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncountyconservation.com/round-prairie-park-change-of-use-proposal`

- **Vector count**: 1
- **Sample IDs**: `jcc-aHR0cHM6Ly9qZWZmZXJz-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
| `file` | 1/1 (100%) | Jefferson County Conservation — https://jeffersoncountyconservation.com/round-pr... |
| `filename` | 1/1 (100%) | Jefferson County Conservation — https://jeffersoncountyconservation.com/round-pr... |
| `org` | 1/1 (100%) | Jefferson County Conservation |
| `source` | 1/1 (100%) | https://jeffersoncountyconservation.com/round-prairie-park-change-of-use-proposa... |
| `text` | 1/1 (100%) | Jefferson County Conservation is located in southeast Iowa and currently manages... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncountyconservation.com/event/camouflage-camp`

- **Vector count**: 1
- **Sample IDs**: `jcc-aHR0cHM6Ly9qZWZmZXJz-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
| `file` | 1/1 (100%) | Jefferson County Conservation — https://jeffersoncountyconservation.com/event/ca... |
| `filename` | 1/1 (100%) | Jefferson County Conservation — https://jeffersoncountyconservation.com/event/ca... |
| `org` | 1/1 (100%) | Jefferson County Conservation |
| `source` | 1/1 (100%) | https://jeffersoncountyconservation.com/event/camouflage-camp |
| `text` | 1/1 (100%) | Camouflage Camp – Jefferson County Conservation Many animals use camouflage to h... |
| `type` | 1/1 (100%) | community_org |

### `https://www.jeffersoncountyhealthcenter.org/patients/release-of-information-request-form`

- **Vector count**: 1
- **Sample IDs**: `jchc-aHR0cHM6Ly93d3cuamVm-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | health |
| `file` | 1/1 (100%) | Jefferson County Health Center — https://www.jeffersoncountyhealthcenter.org/pat... |
| `filename` | 1/1 (100%) | Jefferson County Health Center — https://www.jeffersoncountyhealthcenter.org/pat... |
| `org` | 1/1 (100%) | Jefferson County Health Center |
| `source` | 1/1 (100%) | https://www.jeffersoncountyhealthcenter.org/patients/release-of-information-requ... |
| `text` | 1/1 (100%) | Download the Release of Information Request Form Warning! Your browser is extrem... |
| `type` | 1/1 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/news/waltonbridge.htm`

- **Vector count**: 1
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
| `file` | 1/1 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/news/walt... |
| `filename` | 1/1 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/news/walt... |
| `org` | 1/1 (100%) | Jefferson County Trails Council |
| `source` | 1/1 (100%) | http://www.jeffersoncountytrails.org/news/waltonbridge.htm |
| `text` | 1/1 (100%) | Looking north at Walton Lake. The south pad will be poured soon. (Sat, Nov 23). ... |
| `type` | 1/1 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/b-cvt/cvt-fall.htm`

- **Vector count**: 1
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
| `file` | 1/1 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/b-cvt/cvt... |
| `filename` | 1/1 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/b-cvt/cvt... |
| `org` | 1/1 (100%) | Jefferson County Trails Council |
| `source` | 1/1 (100%) | http://www.jeffersoncountytrails.org/b-cvt/cvt-fall.htm |
| `text` | 1/1 (100%) | The project was made possible by a grant from the National Endowment for the Art... |
| `type` | 1/1 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/news/bridge.htm`

- **Vector count**: 1
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
| `file` | 1/1 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/news/brid... |
| `filename` | 1/1 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/news/brid... |
| `org` | 1/1 (100%) | Jefferson County Trails Council |
| `source` | 1/1 (100%) | http://www.jeffersoncountytrails.org/news/bridge.htm |
| `text` | 1/1 (100%) | Walking-Trail Bridge-Fairfield Loop Trail A new wetlands was created just east o... |
| `type` | 1/1 (100%) | community_org |

### `https://www.maharishischool.org/academic-office`

- **Vector count**: 1
- **Sample IDs**: `maharishi-school-aHR0cHM6Ly93d3cubWFo-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | Maharishi School — https://www.maharishischool.org/academic-office |
| `filename` | 1/1 (100%) | Maharishi School — https://www.maharishischool.org/academic-office |
| `org` | 1/1 (100%) | Maharishi School |
| `source` | 1/1 (100%) | https://www.maharishischool.org/academic-office |
| `text` | 1/1 (100%) | (866) 472-6723 Admissions@MaharishiSchool.org The Academic Office at Maharishi S... |
| `type` | 1/1 (100%) | community_org |

### `http://www.kufnerart.com/new-products`

- **Vector count**: 1
- **Sample IDs**: `kufner-art-aHR0cDovL3d3dy5rdWZu-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Kufner Art Gallery — http://www.kufnerart.com/new-products |
| `filename` | 1/1 (100%) | Kufner Art Gallery — http://www.kufnerart.com/new-products |
| `org` | 1/1 (100%) | Kufner Art Gallery |
| `source` | 1/1 (100%) | http://www.kufnerart.com/new-products |
| `text` | 1/1 (100%) | For any questions or comments on Christopher's work, or to inquire about commiss... |
| `type` | 1/1 (100%) | community_org |

### `https://www.kufnerart.com/new-products`

- **Vector count**: 1
- **Sample IDs**: `kufner-art-aHR0cHM6Ly93d3cua3Vm-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Kufner Art Gallery — https://www.kufnerart.com/new-products |
| `filename` | 1/1 (100%) | Kufner Art Gallery — https://www.kufnerart.com/new-products |
| `org` | 1/1 (100%) | Kufner Art Gallery |
| `source` | 1/1 (100%) | https://www.kufnerart.com/new-products |
| `text` | 1/1 (100%) | For any questions or comments on Christopher's work, or to inquire about commiss... |
| `type` | 1/1 (100%) | community_org |

### `https://www.kufnerart.com/about`

- **Vector count**: 1
- **Sample IDs**: `kufner-art-aHR0cHM6Ly93d3cua3Vm-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Kufner Art Gallery — https://www.kufnerart.com/about |
| `filename` | 1/1 (100%) | Kufner Art Gallery — https://www.kufnerart.com/about |
| `org` | 1/1 (100%) | Kufner Art Gallery |
| `source` | 1/1 (100%) | https://www.kufnerart.com/about |
| `text` | 1/1 (100%) | I enjoy working in different painting styles. I love working symbolism in with t... |
| `type` | 1/1 (100%) | community_org |

### `https://www.maharishischool.org/admissions`

- **Vector count**: 1
- **Sample IDs**: `maharishi-school-aHR0cHM6Ly93d3cubWFo-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | Maharishi School — https://www.maharishischool.org/admissions |
| `filename` | 1/1 (100%) | Maharishi School — https://www.maharishischool.org/admissions |
| `org` | 1/1 (100%) | Maharishi School |
| `source` | 1/1 (100%) | https://www.maharishischool.org/admissions |
| `text` | 1/1 (100%) | Families may opt to use our monthly payment plan or pay for each semester in ful... |
| `type` | 1/1 (100%) | community_org |

### `http://www.kufnerart.com/about`

- **Vector count**: 1
- **Sample IDs**: `kufner-art-aHR0cDovL3d3dy5rdWZu-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Kufner Art Gallery — http://www.kufnerart.com/about |
| `filename` | 1/1 (100%) | Kufner Art Gallery — http://www.kufnerart.com/about |
| `org` | 1/1 (100%) | Kufner Art Gallery |
| `source` | 1/1 (100%) | http://www.kufnerart.com/about |
| `text` | 1/1 (100%) | I enjoy working in different painting styles. I love working symbolism in with t... |
| `type` | 1/1 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=151`

- **Vector count**: 1
- **Sample IDs**: `minutes-151.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 1/1 (100%) | minutes-151.pdf |
| `filename` | 1/1 (100%) | minutes-151.pdf |
| `source` | 1/1 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=151 |
| `text` | 1/1 (100%) |   MINUTES OF A SPECIAL COUNCIL MEETING    June 27, 2013      The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=285`

- **Vector count**: 1
- **Sample IDs**: `minutes-285.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 1/1 (100%) | minutes-285.pdf |
| `filename` | 1/1 (100%) | minutes-285.pdf |
| `source` | 1/1 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=285 |
| `text` | 1/1 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    June 17, 2015      The Fairfiel... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=410`

- **Vector count**: 1
- **Sample IDs**: `minutes-410.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `file` | 1/1 (100%) | minutes-410.pdf |
| `filename` | 1/1 (100%) | minutes-410.pdf |
| `source` | 1/1 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=410 |
| `text` | 1/1 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING AUGUST 7, 2018      The... |

### `https://pathfindersrcd.org/se-iowa-watershed-partnership-rcpp-2448`

- **Vector count**: 1
- **Sample IDs**: `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
| `file` | 1/1 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/se-iowa-watershed-partnership-rcpp... |
| `filename` | 1/1 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/se-iowa-watershed-partnership-rcpp... |
| `org` | 1/1 (100%) | Pathfinders RC&D |
| `source` | 1/1 (100%) | https://pathfindersrcd.org/se-iowa-watershed-partnership-rcpp-2448 |
| `text` | 1/1 (100%) | ADDITIONAL QUESTIONS: The Statement of Work then says to follow: “NRCS Title 450... |
| `type` | 1/1 (100%) | community_org |

### `https://pathfindersrcd.org/community-guide/american-homefinding-association`

- **Vector count**: 1
- **Sample IDs**: `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
| `file` | 1/1 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/community-guide/american-homefindi... |
| `filename` | 1/1 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/community-guide/american-homefindi... |
| `org` | 1/1 (100%) | Pathfinders RC&D |
| `source` | 1/1 (100%) | https://pathfindersrcd.org/community-guide/american-homefinding-association |
| `text` | 1/1 (100%) | American Homefinding Association - Pathfinders RC&D American Home Finding Associ... |
| `type` | 1/1 (100%) | community_org |

### `https://pathfindersrcd.org/news-events`

- **Vector count**: 1
- **Sample IDs**: `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
| `file` | 1/1 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/news-events |
| `filename` | 1/1 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/news-events |
| `org` | 1/1 (100%) | Pathfinders RC&D |
| `source` | 1/1 (100%) | https://pathfindersrcd.org/news-events |
| `text` | 1/1 (100%) | Minden, Perry, West Branch and a collection of towns in southeast Iowa have been... |
| `type` | 1/1 (100%) | community_org |

### `https://pathfindersrcd.org/what-we-do/mine-land-reclamation`

- **Vector count**: 1
- **Sample IDs**: `pathfinders-rcd-guide-aHR0cHM6Ly9wYXRoZmlu-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
| `file` | 1/1 (100%) | Pathfinders RC&D Community Resource Guide — https://pathfindersrcd.org/what-we-d... |
| `filename` | 1/1 (100%) | Pathfinders RC&D Community Resource Guide — https://pathfindersrcd.org/what-we-d... |
| `org` | 1/1 (100%) | Pathfinders RC&D Community Resource Guide |
| `source` | 1/1 (100%) | https://pathfindersrcd.org/what-we-do/mine-land-reclamation |
| `text` | 1/1 (100%) | To learn about our work with abandoned mine lands, watch this short video create... |
| `type` | 1/1 (100%) | community_org |

### `https://pathfindersrcd.org/research-on-grassfed-beef`

- **Vector count**: 1
- **Sample IDs**: `pathfinders-rcd-guide-aHR0cHM6Ly9wYXRoZmlu-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
| `file` | 1/1 (100%) | Pathfinders RC&D Community Resource Guide — https://pathfindersrcd.org/research-... |
| `filename` | 1/1 (100%) | Pathfinders RC&D Community Resource Guide — https://pathfindersrcd.org/research-... |
| `org` | 1/1 (100%) | Pathfinders RC&D Community Resource Guide |
| `source` | 1/1 (100%) | https://pathfindersrcd.org/research-on-grassfed-beef |
| `text` | 1/1 (100%) | Understanding Factors Effecting Meat Quality. Powerpoint by Susan K. Duckett . T... |
| `type` | 1/1 (100%) | community_org |

### `https://www.tm.org/en-us/benefits`

- **Vector count**: 1
- **Sample IDs**: `tm-southeast-iowa-aHR0cHM6Ly93d3cudG0u-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | TM Southeast Iowa Center — https://www.tm.org/en-us/benefits |
| `filename` | 1/1 (100%) | TM Southeast Iowa Center — https://www.tm.org/en-us/benefits |
| `org` | 1/1 (100%) | TM Southeast Iowa Center |
| `source` | 1/1 (100%) | https://www.tm.org/en-us/benefits |
| `text` | 1/1 (100%) | The TM technique for improved relationships When we are calmer and more centered... |
| `type` | 1/1 (100%) | community_org |

### `https://www.tm.org/images/favicons/site.webmanifest`

- **Vector count**: 1
- **Sample IDs**: `tm-southeast-iowa-aHR0cHM6Ly93d3cudG0u-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | TM Southeast Iowa Center — https://www.tm.org/images/favicons/site.webmanifest |
| `filename` | 1/1 (100%) | TM Southeast Iowa Center — https://www.tm.org/images/favicons/site.webmanifest |
| `org` | 1/1 (100%) | TM Southeast Iowa Center |
| `source` | 1/1 (100%) | https://www.tm.org/images/favicons/site.webmanifest |
| `text` | 1/1 (100%) | { "name": "", "short_name": "", "icons": [ { "src": "/images/favicons/android-ch... |
| `type` | 1/1 (100%) | community_org |

### `https://www.tm.org/en-us/tm-course`

- **Vector count**: 1
- **Sample IDs**: `tm-southeast-iowa-aHR0cHM6Ly93d3cudG0u-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `file` | 1/1 (100%) | TM Southeast Iowa Center — https://www.tm.org/en-us/tm-course |
| `filename` | 1/1 (100%) | TM Southeast Iowa Center — https://www.tm.org/en-us/tm-course |
| `org` | 1/1 (100%) | TM Southeast Iowa Center |
| `source` | 1/1 (100%) | https://www.tm.org/en-us/tm-course |
| `text` | 1/1 (100%) | After the 4 days of learning, there are two additional sessions that are part of... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=3NX7FLSxIkM`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-3NX7FLSxIkM-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Meghan Dowd "Cado Ice Cream" |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Meghan Dowd "Cado Ice Cream" |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=3NX7FLSxIkM |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Me... |
| `title` | 1/1 (100%) | Traction Thursday \| Meghan Dowd "Cado Ice Cream" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=669_lKkME8M`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-669_lKkME8M-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Kim Strubell "Charity Seeds" 8... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Kim Strubell "Charity Seeds" 8... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=669_lKkME8M |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ki... |
| `title` | 1/1 (100%) | Traction Thursday \| Kim Strubell "Charity Seeds" 8-8-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=8iNGauyAX6c`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-8iNGauyAX6c-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Ravi Bhattarai 6-13-24 |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Ravi Bhattarai 6-13-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=8iNGauyAX6c |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| R... |
| `title` | 1/1 (100%) | Traction Thursdays \| Ravi Bhattarai 6-13-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9dpKiXwDwNI`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-9dpKiXwDwNI-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr.  Sean Stokes "Research Dir... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr.  Sean Stokes "Research Dir... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=9dpKiXwDwNI |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Dr... |
| `title` | 1/1 (100%) | Traction Thursday \| Dr.  Sean Stokes "Research Director Rodale Organic Center" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=CYbmHUSHB_4`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-CYbmHUSHB_4-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Jai Purdy & Stephen Cardinal ... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Jai Purdy & Stephen Cardinal ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=CYbmHUSHB_4 |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| J... |
| `title` | 1/1 (100%) | Traction Thursdays \| Jai Purdy & Stephen Cardinal 6-20-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=8st5UpaU-5M`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-8st5UpaU-5M-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Mendy McAdams "Downtown Fairfi... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Mendy McAdams "Downtown Fairfi... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=8st5UpaU-5M |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Me... |
| `title` | 1/1 (100%) | Traction Thursday \| Mendy McAdams "Downtown Fairfield" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=E9blyWhxUE8`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-E9blyWhxUE8-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Danny Standly "Revata Consulti... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Danny Standly "Revata Consulti... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=E9blyWhxUE8 |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Da... |
| `title` | 1/1 (100%) | Traction Thursday \| Danny Standly "Revata Consulting" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=FzO0EMlhrMA`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-FzO0EMlhrMA-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Mayor Connie Boyer |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Mayor Connie Boyer |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=FzO0EMlhrMA |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ma... |
| `title` | 1/1 (100%) | Traction Thursday \| Mayor Connie Boyer |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=H0dVVyUWtDw`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-H0dVVyUWtDw-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Deborah Williamson "Chairwoman... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Deborah Williamson "Chairwoman... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=H0dVVyUWtDw |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| De... |
| `title` | 1/1 (100%) | Traction Thursday \| Deborah Williamson "Chairwoman, Fairfield Beautification Com... |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=KZR25ThHWmc`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-KZR25ThHWmc-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Michael Lesniak "AiLo" 2-15-2... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Michael Lesniak "AiLo" 2-15-2... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=KZR25ThHWmc |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| M... |
| `title` | 1/1 (100%) | Traction Thursdays \| Michael Lesniak "AiLo" 2-15-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=GeyByyiWPmY`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-GeyByyiWPmY-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Jim Belilove 3-28-24 |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Jim Belilove 3-28-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=GeyByyiWPmY |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| J... |
| `title` | 1/1 (100%) | Traction Thursdays \| Jim Belilove 3-28-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=HZ52R7YvGHQ`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-HZ52R7YvGHQ-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Phyllis Khare "Email Marketing... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Phyllis Khare "Email Marketing... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=HZ52R7YvGHQ |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ph... |
| `title` | 1/1 (100%) | Traction Thursday \| Phyllis Khare "Email Marketing" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=QluMOeU-40w`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-QluMOeU-40w-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Araya and Akira Uehara "Front... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Araya and Akira Uehara "Front... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=QluMOeU-40w |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| A... |
| `title` | 1/1 (100%) | Traction Thursdays \| Araya and Akira Uehara "Frontier Freight and Foods" 2-9-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=MqBHtflIufs`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-MqBHtflIufs-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Rae Guillermo "Desert Mixologi... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Rae Guillermo "Desert Mixologi... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=MqBHtflIufs |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ra... |
| `title` | 1/1 (100%) | Traction Thursday \| Rae Guillermo "Desert Mixologist" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=PdXtS42ce1c`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-PdXtS42ce1c-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Clarissa Schmidt "Yinja Moves ... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Clarissa Schmidt "Yinja Moves ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=PdXtS42ce1c |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Cl... |
| `title` | 1/1 (100%) | Traction Thursday \| Clarissa Schmidt "Yinja Moves and Rissa's Healthy Delights" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=ZkQLGE8dulA`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-ZkQLGE8dulA-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Andrew Nash "Sweet Green Arbor... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Andrew Nash "Sweet Green Arbor... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=ZkQLGE8dulA |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| An... |
| `title` | 1/1 (100%) | Traction Thursday \| Andrew Nash "Sweet Green Arbor and Native Plants" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=YKJiPJ6Mf9Q`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-YKJiPJ6Mf9Q-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Eric Shaffer and Apala Lahiri ... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Eric Shaffer and Apala Lahiri ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=YKJiPJ6Mf9Q |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Er... |
| `title` | 1/1 (100%) | Traction Thursday \| Eric Shaffer and Apala Lahiri "HFI Framework" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=UivWUK_x0mU`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-UivWUK_x0mU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Gil W. Gillespie, Jr., Ph.D. ... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Gil W. Gillespie, Jr., Ph.D. ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=UivWUK_x0mU |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| G... |
| `title` | 1/1 (100%) | Traction Thursdays \| Gil W. Gillespie, Jr., Ph.D. "Iowa Food System Coalition" 3... |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=WUw9am1jz8I`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-WUw9am1jz8I-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Ed Malloy "FEDA" 2-22-24 |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Ed Malloy "FEDA" 2-22-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=WUw9am1jz8I |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| E... |
| `title` | 1/1 (100%) | Traction Thursdays \| Ed Malloy "FEDA" 2-22-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=Up3DnK7NtOE`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-Up3DnK7NtOE-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Dave Eastburn 4-11-24 |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Dave Eastburn 4-11-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=Up3DnK7NtOE |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Da... |
| `title` | 1/1 (100%) | Traction Thursday \| Dave Eastburn 4-11-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=cctzxDz-24U`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-cctzxDz-24U-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Andy Berks, PhD Organic Chemis... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Andy Berks, PhD Organic Chemis... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=cctzxDz-24U |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| An... |
| `title` | 1/1 (100%) | Traction Thursday \| Andy Berks, PhD Organic Chemistry and Patent Attorney |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=i3SzyDBDfe4`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-i3SzyDBDfe4-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Jeff Topel 4-4-24 |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Jeff Topel 4-4-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=i3SzyDBDfe4 |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Je... |
| `title` | 1/1 (100%) | Traction Thursday \| Jeff Topel 4-4-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=fXiSXShCXkw`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-fXiSXShCXkw-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Frank Cicela 6-5-24 |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Frank Cicela 6-5-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=fXiSXShCXkw |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| F... |
| `title` | 1/1 (100%) | Traction Thursdays \| Frank Cicela 6-5-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=fp4FNx91-3g`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-fp4FNx91-3g-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Faith Reeves "The RAC" |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Faith Reeves "The RAC" |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=fp4FNx91-3g |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Fa... |
| `title` | 1/1 (100%) | Traction Thursday \| Faith Reeves "The RAC" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=rNp-8qLuwDo`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-rNp-8qLuwDo-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Food Market Maker Update |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Food Market Maker Update |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=rNp-8qLuwDo |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Fo... |
| `title` | 1/1 (100%) | Traction Thursday \| Food Market Maker Update |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=ord3FOp1dkE`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-ord3FOp1dkE-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Jordi Quevedo Valls "The PARE ... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Jordi Quevedo Valls "The PARE ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=ord3FOp1dkE |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Jo... |
| `title` | 1/1 (100%) | Traction Thursday \| Jordi Quevedo Valls "The PARE Group" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=sn7WeDjwUfY`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-sn7WeDjwUfY-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Tom Morgan "Morgan Intercultur... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Tom Morgan "Morgan Intercultur... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=sn7WeDjwUfY |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| To... |
| `title` | 1/1 (100%) | Traction Thursday \| Tom Morgan "Morgan Intercultural" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=pMKXJl0DC7Q`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-pMKXJl0DC7Q-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Phyllis Khare "Co Founded Soci... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Phyllis Khare "Co Founded Soci... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=pMKXJl0DC7Q |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ph... |
| `title` | 1/1 (100%) | Traction Thursday \| Phyllis Khare "Co Founded Social Media Manager School" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.visitfairfieldiowa.com/business/wege-center-for-the-arts`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `file` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/business/wege-ce... |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/business/wege-ce... |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/business/wege-center-for-the-arts |
| `text` | 1/1 (100%) | Wege Center for the Arts - Fairfield, Iowa - Tune into our Vibe! Located on the ... |
| `type` | 1/1 (100%) | community_org |

### `http://www.visitfairfieldiowa.com`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cDovL3d3dy52aXNp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `file` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — http://www.visitfairfieldiowa.com |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — http://www.visitfairfieldiowa.com |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | http://www.visitfairfieldiowa.com |
| `text` | 1/1 (100%) | Home - Fairfield, Iowa - Tune into our Vibe! Not what you expected. Exactly what... |
| `type` | 1/1 (100%) | community_org |

### `https://www.visitfairfieldiowa.com/blog`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-4`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `file` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/blog |
| `text` | 1/1 (100%) | Click to open Dancing (or Just Listening) in the Streets Dancing (or Just Listen... |
| `type` | 1/1 (100%) | community_org |

### `https://www.visitfairfieldiowa.com/blog-posts/the-best-day-trip-from-des-moines`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-3`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `file` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog-posts/the-b... |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog-posts/the-b... |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/blog-posts/the-best-day-trip-from-des-moines |
| `text` | 1/1 (100%) | Looking for a little escape from the hustle and bustle of city life? Fairfield i... |
| `type` | 1/1 (100%) | community_org |

### `https://www.visitfairfieldiowa.com/blog-posts/whats-new-in-fairfield-feb-2026`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `file` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog-posts/whats... |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog-posts/whats... |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/blog-posts/whats-new-in-fairfield-feb-2026 |
| `text` | 1/1 (100%) | Looking for a little escape from the hustle and bustle of city life? Fairfield i... |
| `type` | 1/1 (100%) | community_org |

### `https://www.visitfairfieldiowa.com/business/hudson-collection`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `file` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/business/hudson-... |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/business/hudson-... |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/business/hudson-collection |
| `text` | 1/1 (100%) | Despite their expression of an unbroken, centuries-old tradition, the works that... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=yWChypUQCAQ`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-yWChypUQCAQ-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `file` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| "Agile Circles" Collaborative... |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| "Agile Circles" Collaborative... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=yWChypUQCAQ |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| "... |
| `title` | 1/1 (100%) | Traction Thursdays \| "Agile Circles" Collaborative Solutions 7-18-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `http://www.wegecenter.org/past`

- **Vector count**: 1
- **Sample IDs**: `wege-center-aHR0cDovL3d3dy53ZWdl-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Wege Center for the Arts — http://www.wegecenter.org/past |
| `filename` | 1/1 (100%) | Wege Center for the Arts — http://www.wegecenter.org/past |
| `org` | 1/1 (100%) | Wege Center for the Arts |
| `source` | 1/1 (100%) | http://www.wegecenter.org/past |
| `text` | 1/1 (100%) | SUE HETTMANSPERGER / STO LEN / LILLY MCELROY THROUGH A NARROW WINDOW KYLE AGNEW ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.wegecenter.org/ferrigno/lombard`

- **Vector count**: 1
- **Sample IDs**: `wege-center-aHR0cHM6Ly93d3cud2Vn-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Wege Center for the Arts — https://www.wegecenter.org/ferrigno/lombard |
| `filename` | 1/1 (100%) | Wege Center for the Arts — https://www.wegecenter.org/ferrigno/lombard |
| `org` | 1/1 (100%) | Wege Center for the Arts |
| `source` | 1/1 (100%) | https://www.wegecenter.org/ferrigno/lombard |
| `text` | 1/1 (100%) | THE WAY THE LIGHT REFLECTS Richard Siken The paint doesn’t move the way the ligh... |
| `type` | 1/1 (100%) | community_org |

### `https://www.wegecenter.org/legup`

- **Vector count**: 1
- **Sample IDs**: `wege-center-aHR0cHM6Ly93d3cud2Vn-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `file` | 1/1 (100%) | Wege Center for the Arts — https://www.wegecenter.org/legup |
| `filename` | 1/1 (100%) | Wege Center for the Arts — https://www.wegecenter.org/legup |
| `org` | 1/1 (100%) | Wege Center for the Arts |
| `source` | 1/1 (100%) | https://www.wegecenter.org/legup |
| `text` | 1/1 (100%) | LAUREL FARRIN / WAYNE KOESTENBAUM LEG UP SEPTEMBER 8 - OCTOBER 20, 2023 OPENING ... |
| `type` | 1/1 (100%) | community_org |
