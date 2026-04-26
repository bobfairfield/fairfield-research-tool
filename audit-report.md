# Civic Intelligence Hub — RAG Audit Report

**Generated**: 2026-04-26T03:22:52.302Z
**Duration**: 98 seconds
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
| url | 979 | `https://www.area15rpc.com/single-post/fall-2025-regional-planning-news-thriving-communities-and-local-development-initiatives`, `https://www.carryonbags.org/thank-you`, `http://www.area15rpc.com/rhtf` |
| hyphenatedKey | 4 | `jefferson-county`, `fcsd-board-minutes`, `fairfield-acc` |
| freeform | 10 | `City of Fairfield Website`, `Fairfield Area Chamber of Commerce`, `Fairfield Public Library` |
| other | 7 | `maharishi_school`, `singing_cedars_school`, `miu` |

### Suspected aliased metadata fields

_None detected in the common alias groups checked._

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

- 979 source(s) use full URLs as the `source` key instead of short hyphenated keys.
- 10 source(s) use freeform/capitalized labels as the `source` key.
- 5 distinct vector ID patterns in use across the index.

---

## Full Per-Source Detail

All 1013 sources, sorted by vector count (descending). Metadata-field stats are based on a sample of up to 10 vectors per source.

### `cityoffairfieldiowa.com`

- **Vector count**: 3,373
- **Sample IDs**: `fairfield-building-permits_chunk_2`, `fairfield-building-permits_chunk_4`, `fairfield-building-permits_chunk_1`
- **ID patterns**: `filename_chunk_N` (2320), `filename.pdf-chunk-N` (1053)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/10 (50%) | government |
| `chunkIndex` | 10/10 (100%) | 2 |
| `filename` | 10/10 (100%) | fairfield-building-permits.txt |
| `org` | 5/10 (50%) | City of Fairfield |
| `source` | 10/10 (100%) | cityoffairfieldiowa.com |
| `text` | 10/10 (100%) | ee Info Sheet, downloadable from: cityoffairfieldiowa.com/190/City-Forms-Info-Sh... |
| `type` | 5/10 (50%) | civic_info |

### `https://archive.org/details/historyofjeffers01fult`

- **Vector count**: 1,672
- **Sample IDs**: `jefferson-county-history-2e30a65c4d9b87658736a835-0`, `jefferson-county-history-2e30a65c4d9b87658736a835-10`, `jefferson-county-history-2e30a65c4d9b87658736a835-1`
- **ID patterns**: `other` (1672)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 0 |
| `filename` | 10/10 (100%) | historyofjeffers01fult_djvuFullText.txt |
| `orgId` | 10/10 (100%) | jefferson-county-history |
| `source` | 10/10 (100%) | https://archive.org/details/historyofjeffers01fult |
| `text` | 10/10 (100%) | NYPL  RESEARCH  LIBRARIES    3  3433  08192053  4    Um    ,HH    iHliiil    mm ... |
| `totalChunks` | 10/10 (100%) | 1672 |
| `type` | 10/10 (100%) | history |

### `https://www.fairfield.ia.us/walton-lake-bridge`

- **Vector count**: 1,506
- **Sample IDs**: `walton-lake-bridge-18a7a4254eb51276fb708368-4`, `walton-lake-bridge-18a7a4254eb51276fb708368-3`, `walton-lake-bridge-0fc9683bc6d46795c8f95648-4`
- **ID patterns**: `other` (1506)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 4 |
| `filename` | 10/10 (100%) | Walton_Club_2025_Lease_Agreement_Revised (002) 12.15.25.pdf |
| `orgId` | 10/10 (100%) | walton-lake-bridge |
| `source` | 10/10 (100%) | https://www.fairfield.ia.us/walton-lake-bridge |
| `text` | 10/10 (100%) | es that are adjacent to said clubhouse, golf course, reservoir and subdivision, ... |
| `totalChunks` | 10/10 (100%) | 13 |
| `type` | 10/10 (100%) | government |

### `City of Fairfield`

- **Vector count**: 716
- **Sample IDs**: `2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf-chunk-11`, `2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf-chunk-15`, `2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf-chunk-13`
- **ID patterns**: `filename.pdf-chunk-N` (716)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | 2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf |
| `source` | 10/10 (100%) | City of Fairfield |
| `text` | 10/10 (100%) | ition to collecting demographic  and economic information, the survey asked resp... |
| `type` | 10/10 (100%) | city_plan |
| `year` | 10/10 (100%) | 2023 |

### `https://www.fairfield.k12.ia.us/board-of-education/board-meeting-minutes`

- **Vector count**: 569
- **Sample IDs**: `fcsd-board-minutes-046bc9b8b9541d38e856b1f0-0`, `fcsd-board-minutes-2b8dc9262239ee3ad269faa3-1`, `fcsd-board-minutes-192ec80352dc2b20bb94dfba-5`
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
- **Sample IDs**: `01_county_history_chunk_4`, `01_county_history_chunk_6`, `01_county_history_chunk_9`
- **ID patterns**: `prefix_name_chunk_N` (506)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | county_government |
| `chunkIndex` | 10/10 (100%) | 4 |
| `filename` | 10/10 (100%) | 01_county_history.txt |
| `source` | 10/10 (100%) | jeffersoncounty.iowa.gov |
| `subcategory` | 10/10 (100%) | county_history |
| `text` | 10/10 (100%) | eople, leading to increased trade and the growth of towns along the railway rout... |

### `jeffersoncountyhealthcenter.org`

- **Vector count**: 369
- **Sample IDs**: `jchc_07_foundation_chunk_1`, `jchc_04_leadership_chunk_9`, `jchc_06_news_chunk_1`
- **ID patterns**: `prefix_name_chunk_N` (289), `filename.pdf-chunk-N` (80)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | healthcare |
| `chunkIndex` | 10/10 (100%) | 1 |
| `filename` | 10/10 (100%) | jchc_07_foundation.txt |
| `source` | 10/10 (100%) | jeffersoncountyhealthcenter.org |
| `subcategory` | 10/10 (100%) | about |
| `text` | 10/10 (100%) | General CV Submission    Non-Physician CV Submission    Contact Us    Public ... |

### `fairfield-history-series`

- **Vector count**: 300
- **Sample IDs**: `fairfield-history-series-001c85e24c4dcf5b-2`, `fairfield-history-series-001c85e24c4dcf5b-36`, `fairfield-history-series-001c85e24c4dcf5b-3`
- **ID patterns**: `other` (300)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `source` | 10/10 (100%) | fairfield-history-series |
| `sourceUrl` | 10/10 (100%) | https://www.youtube.com/@fair_field_productions |
| `text` | 10/10 (100%) | of the evidence for dinosaur life in Jefferson County or Iowa for that matter ca... |
| `title` | 10/10 (100%) | Life Before Fairfield Transcript  |
| `type` | 10/10 (100%) | history_transcript |

### `Fairfield Public Library`

- **Vector count**: 262
- **Sample IDs**: `01_Services_Overview.pdf-chunk-2`, `01_Search_Federal_Sites.pdf-chunk-1`, `01_Digital_Library_Overview.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (262)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | Education |
| `filename` | 10/10 (100%) | 01_Services_Overview.pdf |
| `source` | 10/10 (100%) | Fairfield Public Library |
| `subcategory` | 10/10 (100%) | Services |
| `text` | 10/10 (100%) | a.us/services/proctoring-service) Wireless Internet ()     Upcoming Events View ... |
| `type` | 10/10 (100%) | web page |

### `maharishi_school`

- **Vector count**: 255
- **Sample IDs**: `01_home.pdf-chunk-8`, `01_home.pdf-chunk-6`, `01_home.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (255)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | educational_institutions |
| `filename` | 10/10 (100%) | 01_home.pdf |
| `source` | 10/10 (100%) | maharishi_school |
| `sourceUrl` | 10/10 (100%) | https://maharishischool.org |
| `subcategory` | 10/10 (100%) | maharishi_school |
| `text` | 10/10 (100%) | t Maharishi SchoolThinking Deeply at Maharishi School I A C A D E M I C   L E A ... |

### `fairfieldiowa.com`

- **Vector count**: 168
- **Sample IDs**: `chamber_01_home_chunk_10`, `chamber_01_home_chunk_12`, `chamber_01_home_chunk_14`
- **ID patterns**: `prefix_name_chunk_N` (168)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | community_organizations |
| `chunkIndex` | 10/10 (100%) | 10 |
| `filename` | 10/10 (100%) | chamber_01_home.txt |
| `source` | 10/10 (100%) | fairfieldiowa.com |
| `subcategory` | 10/10 (100%) | chamber_of_commerce |
| `text` | 10/10 (100%) | ation that strengthen community confidence.    Registration details will be ann... |

### `jeffersoncountyconservation.com`

- **Vector count**: 157
- **Sample IDs**: `jcc_03_board_chunk_2`, `jcc_01_about_chunk_4`, `jcc_03_board_chunk_4`
- **ID patterns**: `prefix_name_chunk_N` (157)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | parks_recreation |
| `chunkIndex` | 10/10 (100%) | 2 |
| `filename` | 10/10 (100%) | jcc_03_board.txt |
| `source` | 10/10 (100%) | jeffersoncountyconservation.com |
| `subcategory` | 10/10 (100%) | board |
| `text` | 10/10 (100%) | ts. From this idea, the first attempt was made in 1942 to pass enabling legislat... |

### `https://jeffersoncounty.iowa.gov/code`

- **Vector count**: 150
- **Sample IDs**: `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-16`, `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-27`, `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-13`
- **ID patterns**: `other` (150)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/code |
| `org` | 10/10 (100%) | Jefferson County Iowa Government |
| `source` | 10/10 (100%) | https://jeffersoncounty.iowa.gov/code |
| `text` | 10/10 (100%) | SECTION 3. Bond. Before such Disposal System Contractor’s license shall be issue... |
| `type` | 10/10 (100%) | community_org |

### `City of Fairfield Website`

- **Vector count**: 146
- **Sample IDs**: `01_Community_Overview.pdf-chunk-2`, `01_Administration.pdf-chunk-2`, `01_Administration.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (146)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | City Records |
| `filename` | 10/10 (100%) | 01_Community_Overview.pdf |
| `source` | 10/10 (100%) | City of Fairfield Website |
| `subcategory` | 10/10 (100%) | Community |
| `text` | 10/10 (100%) | Stay Whether you're in town visiting friends and family, doing business, or just... |
| `type` | 10/10 (100%) | web page |

### `miu`

- **Vector count**: 141
- **Sample IDs**: `02_mission_core_values.pdf-chunk-3`, `02_mission_core_values.pdf-chunk-0`, `02_mission_core_values.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (141)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | educational_institutions |
| `filename` | 10/10 (100%) | 02_mission_core_values.pdf |
| `source` | 10/10 (100%) | miu |
| `sourceUrl` | 10/10 (100%) | https://www.miu.edu |
| `subcategory` | 10/10 (100%) | maharishi_international_university |
| `text` | 10/10 (100%) | ? 2/25/26, 10:29 AMMission and Core Values \| Maharishi University https://www.mi... |

### `Iowa Dance Collective`

- **Vector count**: 126
- **Sample IDs**: `01_board_of_trustees.pdf-chunk-0`, `01_idc_overview_and_facility_chunk_2`, `01_board_of_trustees.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (85), `prefix_name_chunk_N` (41)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | Arts Organizations & Education |
| `chunkIndex` | 4/10 (40%) | 2 |
| `filename` | 10/10 (100%) | 01_board_of_trustees.pdf |
| `source` | 10/10 (100%) | Iowa Dance Collective |
| `sourceUrl` | 10/10 (100%) | https://iowadancecollective.com |
| `subcategory` | 10/10 (100%) | Dance School |
| `text` | 10/10 (100%) |   Download the IDC app: Board of Trustees Eli Lieb, Chairman Elizabeth Estey, Vi... |

### `https://www.youtube.com/@fair_field_productions`

- **Vector count**: 113
- **Sample IDs**: `fairfield-history-series-24a00663a2abace0fa1fb596-4`, `fairfield-history-series-2bac65fd2a98531dcd8f7fc7-2`, `fairfield-history-series-2bac65fd2a98531dcd8f7fc7-3`
- **ID patterns**: `other` (113)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 4 |
| `filename` | 10/10 (100%) | Big_River_Connectivity_Wildlife_Crossings_Project_Transcript.pdf |
| `orgId` | 10/10 (100%) | fairfield-history-series |
| `source` | 10/10 (100%) | https://www.youtube.com/@fair_field_productions |
| `text` | 10/10 (100%) | th a rating for that and  2:37  that rating  2:38  tells us the overall quality ... |
| `totalChunks` | 10/10 (100%) | 7 |
| `type` | 10/10 (100%) | history |

### `Grow Fairfield`

- **Vector count**: 101
- **Sample IDs**: `02_Staff.pdf-chunk-1`, `02_Staff.pdf-chunk-2`, `02_Staff.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (101)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | Community Organizations |
| `filename` | 10/10 (100%) | 02_Staff.pdf |
| `source` | 10/10 (100%) | Grow Fairfield |
| `text` | 10/10 (100%) | ector where he hopes to continue developing the Fairfield Community into one of ... |
| `type` | 10/10 (100%) | web page |

### `fran`

- **Vector count**: 82
- **Sample IDs**: `FRAN_03_community-connections-survey_chunk_0`, `FRAN_01_about_chunk_7`, `FRAN_01_about_chunk_6`
- **ID patterns**: `other` (82)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | community-organizations |
| `chunkIndex` | 10/10 (100%) | 0 |
| `filename` | 10/10 (100%) | FRAN_03_community-connections-survey.txt |
| `source` | 10/10 (100%) | fran |
| `subcategory` | 10/10 (100%) | fran |
| `text` | 10/10 (100%) | Title: Community Connections Survey URL: https://franiowa.org/cc-survey/ Type: p... |

### `fairfield_community_school_district`

- **Vector count**: 81
- **Sample IDs**: `02_why_fairfield_schools.pdf-chunk-1`, `02_why_fairfield_schools.pdf-chunk-0`, `02_why_fairfield_schools.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (81)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | educational_institutions |
| `filename` | 10/10 (100%) | 02_why_fairfield_schools.pdf |
| `source` | 10/10 (100%) | fairfield_community_school_district |
| `sourceUrl` | 10/10 (100%) | https://www.fairfieldsfuture.org |
| `subcategory` | 10/10 (100%) | fairfield_community_school_district |
| `text` | 10/10 (100%) |  age (for employment), marital status (for programs), sexual orientation, gender... |

### `jchc`

- **Vector count**: 80
- **Sample IDs**: `JCHC_08_about-jchc-foundation.pdf-chunk-2`, `JCHC_05_about-leadership-team.pdf-chunk-1`, `JCHC_04_about-board-of-trustees.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (80)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | jefferson-county |
| `filename` | 10/10 (100%) | JCHC_08_about-jchc-foundation.pdf |
| `source` | 10/10 (100%) | jchc |
| `subcategory` | 10/10 (100%) | health-center |
| `text` | 10/10 (100%) | the health and well being of the community. THE GIFT OF HEALTH By making a donat... |

### `https://www.youtube.com/watch?v=HsOQIzMwF5c`

- **Vector count**: 78
- **Sample IDs**: `yt-transcript-HsOQIzMwF5c-chunk-13`, `yt-transcript-HsOQIzMwF5c-chunk-12`, `yt-transcript-HsOQIzMwF5c-chunk-11`
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
- **Sample IDs**: `01_public_health.pdf-chunk-4`, `01_Board_of_Supervisors.pdf-chunk-0`, `01_Assessor.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (75)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | county-government |
| `filename` | 10/10 (100%) | 01_public_health.pdf |
| `source` | 10/10 (100%) | jefferson-county |
| `subcategory` | 10/10 (100%) | conservation |
| `text` | 10/10 (100%) | ns include: Communicable disease follow-up Emergency preparedness in the county ... |

### `https://www.youtube.com/watch?v=EZjCGlJ6kY8`

- **Vector count**: 69
- **Sample IDs**: `yt-transcript-EZjCGlJ6kY8-chunk-16`, `yt-transcript-EZjCGlJ6kY8-chunk-17`, `yt-transcript-EZjCGlJ6kY8-chunk-21`
- **ID patterns**: `other` (69)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 16 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=EZjCGlJ6kY8 |
| `text` | 10/10 (100%) | famous across southeast Iowa. All these point to excellent lake health. 15 speci... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | EZjCGlJ6kY8 |

### `https://www.youtube.com/watch?v=7OPfNhx4bOk`

- **Vector count**: 67
- **Sample IDs**: `yt-transcript-7OPfNhx4bOk-chunk-60`, `yt-transcript-7OPfNhx4bOk-chunk-51`, `yt-transcript-7OPfNhx4bOk-chunk-3`
- **ID patterns**: `other` (67)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 60 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=7OPfNhx4bOk |
| `text` | 10/10 (100%) | aren't out of the households out there. So, I don't think this is a unanimous gr... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | 7OPfNhx4bOk |

### `https://www.youtube.com/watch?v=5L3TBYbPunM`

- **Vector count**: 60
- **Sample IDs**: `yt-transcript-5L3TBYbPunM-chunk-18`, `yt-transcript-5L3TBYbPunM-chunk-46`, `yt-transcript-5L3TBYbPunM-chunk-0`
- **ID patterns**: `other` (60)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 18 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=5L3TBYbPunM |
| `text` | 10/10 (100%) | in the shallows of a quiet lake or felt the rush of a bald eagle's wings as it l... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | 5L3TBYbPunM |

### `https://www.youtube.com/watch?v=f2l-WpTgHyE`

- **Vector count**: 60
- **Sample IDs**: `yt-transcript-f2l-WpTgHyE-chunk-47`, `yt-transcript-f2l-WpTgHyE-chunk-27`, `yt-transcript-f2l-WpTgHyE-chunk-30`
- **ID patterns**: `other` (60)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 47 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=f2l-WpTgHyE |
| `text` | 10/10 (100%) | disposal. Success is a collective effort. We rely on one another just as we depe... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | f2l-WpTgHyE |

### `https://www.youtube.com/watch?v=4ID7bF8f7xE`

- **Vector count**: 59
- **Sample IDs**: `fc-council-4ID7bF8f7xE-26`, `fc-council-4ID7bF8f7xE-18`, `fc-council-4ID7bF8f7xE-23`
- **ID patterns**: `other` (59)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=4ID7bF8f7xE |
| `text` | 10/10 (100%) | Also, if we close in January, it could be, you know, this much snow on the groun... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 11.24.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=lWW6pNBe1BY`

- **Vector count**: 59
- **Sample IDs**: `yt-transcript-lWW6pNBe1BY-chunk-19`, `yt-transcript-lWW6pNBe1BY-chunk-1`, `yt-transcript-lWW6pNBe1BY-chunk-18`
- **ID patterns**: `other` (59)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 19 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=lWW6pNBe1BY |
| `text` | 10/10 (100%) | the flood plane of Cro Creek. So there would be that uh permission that the city... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | lWW6pNBe1BY |

### `https://www.youtube.com/watch?v=GVDXFre7hWU`

- **Vector count**: 57
- **Sample IDs**: `yt-transcript-GVDXFre7hWU-chunk-32`, `yt-transcript-GVDXFre7hWU-chunk-7`, `yt-transcript-GVDXFre7hWU-chunk-18`
- **ID patterns**: `other` (57)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 32 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=GVDXFre7hWU |
| `text` | 10/10 (100%) | a sewer backup that's going to come in to dispatch and dispatch will then um fol... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | GVDXFre7hWU |

### `https://www.fairfieldiowa.com/calendar`

- **Vector count**: 56
- **Sample IDs**: `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-29`, `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-39`, `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-45`
- **ID patterns**: `other` (56)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | business |
| `filename` | 10/10 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/calendar |
| `org` | 10/10 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 10/10 (100%) | https://www.fairfieldiowa.com/calendar |
| `text` | 10/10 (100%) | If you need assistance to attend the sale due to a disability, please contact th... |
| `type` | 10/10 (100%) | community_org |

### `https://www.youtube.com/watch?v=W6fEWkbepqk`

- **Vector count**: 55
- **Sample IDs**: `fc-council-W6fEWkbepqk-12`, `fc-council-W6fEWkbepqk-10`, `fc-council-W6fEWkbepqk-15`
- **ID patterns**: `other` (55)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=W6fEWkbepqk |
| `text` | 10/10 (100%) | So, um if it is something that's going to be giving somebody addresses, um we ne... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 2.9.26 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=kqXlg9YIuPI`

- **Vector count**: 55
- **Sample IDs**: `fc-council-kqXlg9YIuPI-17`, `fc-council-kqXlg9YIuPI-2`, `fc-council-kqXlg9YIuPI-12`
- **ID patterns**: `other` (55)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 5... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=kqXlg9YIuPI |
| `text` | 10/10 (100%) | You just scroll down the first page to the calendar. You can see right there wha... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 5.27.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=V8PWx4fz1a4`

- **Vector count**: 55
- **Sample IDs**: `yt-transcript-V8PWx4fz1a4-chunk-32`, `yt-transcript-V8PWx4fz1a4-chunk-19`, `yt-transcript-V8PWx4fz1a4-chunk-15`
- **ID patterns**: `other` (55)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 32 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=V8PWx4fz1a4 |
| `text` | 10/10 (100%) | are things that really we haven't discussed yet, but they are out there. I have ... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | V8PWx4fz1a4 |

### `https://www.youtube.com/watch?v=zR9ME41lUKM`

- **Vector count**: 54
- **Sample IDs**: `yt-transcript-zR9ME41lUKM-chunk-1`, `yt-transcript-zR9ME41lUKM-chunk-0`, `yt-transcript-zR9ME41lUKM-chunk-43`
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
- **Sample IDs**: `fc-council-ZRc6jD147Kw-40`, `fc-council-ZRc6jD147Kw-26`, `fc-council-ZRc6jD147Kw-34`
- **ID patterns**: `other` (53)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 5... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=ZRc6jD147Kw |
| `text` | 10/10 (100%) | section 8. Um in our um rightaway ordinance with our landscaping um we had treat... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 5.12.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=nVnA6dt3lMI`

- **Vector count**: 53
- **Sample IDs**: `fc-council-nVnA6dt3lMI-17`, `fc-council-nVnA6dt3lMI-35`, `fc-council-nVnA6dt3lMI-20`
- **ID patterns**: `other` (53)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=nVnA6dt3lMI |
| `text` | 10/10 (100%) | They killed it. Amazing. So in addition to maintaining public spaces, we also di... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 12.15.25 |
| `type` | 10/10 (100%) | council_meeting |

### `singing_cedars_school`

- **Vector count**: 52
- **Sample IDs**: `01_home.pdf-chunk-1`, `01_home.pdf-chunk-3`, `01_home.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (52)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | educational_institutions |
| `filename` | 10/10 (100%) | 01_home.pdf |
| `source` | 10/10 (100%) | singing_cedars_school |
| `sourceUrl` | 10/10 (100%) | https://www.singingcedars.com |
| `subcategory` | 10/10 (100%) | singing_cedars_school |
| `text` | 10/10 (100%) | ntsProgramsGivingCon 2/25/26, 11:02 AMHome https://www.singingcedars.com/home3/5... |

### `https://www.youtube.com/watch?v=HiVoasoFNoI`

- **Vector count**: 52
- **Sample IDs**: `fc-council-HiVoasoFNoI-34`, `fc-council-HiVoasoFNoI-45`, `fc-council-HiVoasoFNoI-36`
- **ID patterns**: `other` (52)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=HiVoasoFNoI |
| `text` | 10/10 (100%) | You can't >> you can't take them to court to get them to pay the taxes if they g... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 1.12.26 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IcVpObZ-Puw`

- **Vector count**: 52
- **Sample IDs**: `fc-council-IcVpObZ-Puw-0`, `fc-council-IcVpObZ-Puw-26`, `fc-council-IcVpObZ-Puw-39`
- **ID patterns**: `other` (52)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=IcVpObZ-Puw |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Study S... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 10.27.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=mDgaUVpvVqA`

- **Vector count**: 52
- **Sample IDs**: `yt-transcript-mDgaUVpvVqA-chunk-32`, `yt-transcript-mDgaUVpvVqA-chunk-7`, `yt-transcript-mDgaUVpvVqA-chunk-41`
- **ID patterns**: `other` (52)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `chunkIndex` | 10/10 (100%) | 32 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=mDgaUVpvVqA |
| `text` | 10/10 (100%) | that we move um the ordinance consideration of amendment to grass vegetation fro... |
| `type` | 10/10 (100%) | council_meeting |
| `videoId` | 10/10 (100%) | mDgaUVpvVqA |

### `https://www.youtube.com/watch?v=nkAEUQOJ0KY`

- **Vector count**: 44
- **Sample IDs**: `fc-council-nkAEUQOJ0KY-25`, `fc-council-nkAEUQOJ0KY-4`, `fc-council-nkAEUQOJ0KY-2`
- **ID patterns**: `other` (44)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 4... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=nkAEUQOJ0KY |
| `text` | 10/10 (100%) | Anybody want to add anything or just move it? I make the motion that we move fro... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 4.28.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wm-MVrXLrIo`

- **Vector count**: 44
- **Sample IDs**: `fc-council-wm-MVrXLrIo-30`, `fc-council-wm-MVrXLrIo-26`, `fc-council-wm-MVrXLrIo-21`
- **ID patterns**: `other` (44)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 4-22-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=wm-MVrXLrIo |
| `text` | 10/10 (100%) | So and that's that's where the discussion has to be held with the county as far ... |
| `title` | 10/10 (100%) | Fairfield City Council 4-22-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=gZHFUb0P1VM`

- **Vector count**: 43
- **Sample IDs**: `fc-council-gZHFUb0P1VM-26`, `fc-council-gZHFUb0P1VM-22`, `fc-council-gZHFUb0P1VM-17`
- **ID patterns**: `other` (43)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 8... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=gZHFUb0P1VM |
| `text` | 10/10 (100%) | I guess if you got somebody with a riding mower on a >> on a smaller trailer tha... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 8.11.25 |
| `type` | 10/10 (100%) | council_meeting |

### `jefferson.iowaassessors.com`

- **Vector count**: 42
- **Sample IDs**: `assessor_05_credits_exemptions_chunk_1`, `assessor_02_duties_chunk_4`, `assessor_05_credits_exemptions_chunk_10`
- **ID patterns**: `prefix_name_chunk_N` (42)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | county_government |
| `chunkIndex` | 10/10 (100%) | 1 |
| `filename` | 10/10 (100%) | assessor_05_credits_exemptions.txt |
| `source` | 10/10 (100%) | jefferson.iowaassessors.com |
| `subcategory` | 10/10 (100%) | assessor_exemptions |
| `text` | 10/10 (100%) | ding Search    Assessor's Duties    Reducing Tax Liability    Owner's Legal Resp... |

### `https://www.youtube.com/watch?v=Eusdl4nerzQ`

- **Vector count**: 39
- **Sample IDs**: `fc-council-Eusdl4nerzQ-3`, `fc-council-Eusdl4nerzQ-11`, `fc-council-Eusdl4nerzQ-25`
- **ID patterns**: `other` (39)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-03-09 — Fairfield City Council Meeting |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-03-09 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Eusdl4nerzQ |
| `text` | 10/10 (100%) | Um to make sure that we maintain our heritage and our reputation as an arts comm... |
| `title` | 10/10 (100%) | Fairfield City Council Meeting |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Wh6b2jzugXk`

- **Vector count**: 37
- **Sample IDs**: `fc-council-Wh6b2jzugXk-17`, `fc-council-Wh6b2jzugXk-13`, `fc-council-Wh6b2jzugXk-14`
- **ID patterns**: `other` (37)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Special City Council 3.31.25 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Wh6b2jzugXk |
| `text` | 10/10 (100%) | So, um, you know, it's kind of just one of those that, uh, perception or, you kn... |
| `title` | 10/10 (100%) | City of Fairfield \| Special City Council 3.31.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=d8NKTmdzk90`

- **Vector count**: 35
- **Sample IDs**: `fc-council-d8NKTmdzk90-4`, `fc-council-d8NKTmdzk90-17`, `fc-council-d8NKTmdzk90-10`
- **ID patterns**: `other` (35)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 7... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=d8NKTmdzk90 |
| `text` | 10/10 (100%) | >> I see page page five three enforcement a complaint. Is that right? >> Yeah. >... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 7.28.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EVvKRKPGB1k`

- **Vector count**: 34
- **Sample IDs**: `fc-council-EVvKRKPGB1k-10`, `fc-council-EVvKRKPGB1k-16`, `fc-council-EVvKRKPGB1k-11`
- **ID patterns**: `other` (34)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-02-23 — Fairfield City Council Meeting |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-02-23 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=EVvKRKPGB1k |
| `text` | 10/10 (100%) | >> Uh yeah. >> Have you contacted Andy in other words? >> Yeah. Okay. Great. >> ... |
| `title` | 10/10 (100%) | Fairfield City Council Meeting |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=HStLlFza4eg`

- **Vector count**: 31
- **Sample IDs**: `fc-council-HStLlFza4eg-10`, `fc-council-HStLlFza4eg-1`, `fc-council-HStLlFza4eg-19`
- **ID patterns**: `other` (31)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 5-13-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=HStLlFza4eg |
| `text` | 10/10 (100%) | 5 million dollar issuance will come off in the first three years basically three... |
| `title` | 10/10 (100%) | Fairfield City Council 5-13-13 |
| `type` | 10/10 (100%) | council_meeting |

### `Fairfield Area Chamber of Commerce`

- **Vector count**: 30
- **Sample IDs**: `00_Home_c35cc562_0`, `01_Contact_6fe84329_0`, `00_Home_ed6f61ae_0`
- **ID patterns**: `other` (30)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `captured_date` | 10/10 (100%) | 2026-02-23 |
| `category` | 10/10 (100%) | Community Organizations |
| `chunkIndex` | 10/10 (100%) | 0 |
| `member` | 10/10 (100%) | Werner Elmker Audio-Visual Studio |
| `member_website` | 2/10 (20%) | https://sites.google.com/site/wernerelmker/home |
| `org` | 10/10 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 10/10 (100%) | Fairfield Area Chamber of Commerce |
| `sourceUrl` | 10/10 (100%) | https://sites.google.com/site/wernerelmker/home |
| `subcategory` | 10/10 (100%) | Chamber Members |
| `text` | 10/10 (100%) |  Sign in with your Google Account. This account will be available to other Googl... |
| `total_chunks` | 10/10 (100%) | 1 |
| `type` | 10/10 (100%) | member website |

### `https://www.youtube.com/watch?v=OLjRxJKfbJY`

- **Vector count**: 30
- **Sample IDs**: `fc-council-OLjRxJKfbJY-3`, `fc-council-OLjRxJKfbJY-16`, `fc-council-OLjRxJKfbJY-20`
- **ID patterns**: `other` (30)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-01-28 — Fairfield City Council Wrap-Up |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-01-28 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=OLjRxJKfbJY |
| `text` | 10/10 (100%) | We're not allowed to, you know, take money from one account that you may have. L... |
| `title` | 10/10 (100%) | Fairfield City Council Wrap-Up |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=nVq1kUsCapY`

- **Vector count**: 30
- **Sample IDs**: `fc-council-nVq1kUsCapY-6`, `fc-council-nVq1kUsCapY-29`, `fc-council-nVq1kUsCapY-16`
- **ID patterns**: `other` (30)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| City Council 1.26.26 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=nVq1kUsCapY |
| `text` | 10/10 (100%) | Um, and so then included in your packet is also uh the the gates and um a chain ... |
| `title` | 10/10 (100%) | City of Fairfield \| City Council 1.26.26 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=MHVz7kiKRts`

- **Vector count**: 29
- **Sample IDs**: `traction-thursdays-MHVz7kiKRts-15`, `traction-thursdays-MHVz7kiKRts-22`, `traction-thursdays-MHVz7kiKRts-16`
- **ID patterns**: `other` (29)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Be the Change You Wish to Be! ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=MHVz7kiKRts |
| `text` | 10/10 (100%) | I think I I came across this idea of um creating a a Fairfield honey producing c... |
| `title` | 10/10 (100%) | Traction Thursday \| Be the Change You Wish to Be! Panel Discussion |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=YdNiy_lpuAs`

- **Vector count**: 29
- **Sample IDs**: `traction-thursdays-YdNiy_lpuAs-12`, `traction-thursdays-YdNiy_lpuAs-13`, `traction-thursdays-YdNiy_lpuAs-27`
- **ID patterns**: `other` (29)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
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
- **Sample IDs**: `traction-thursdays-TxDqoKYXGZs-26`, `traction-thursdays-TxDqoKYXGZs-25`, `traction-thursdays-TxDqoKYXGZs-13`
- **ID patterns**: `other` (28)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Bodhi Group, LLC" Ti Liptak |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=TxDqoKYXGZs |
| `text` | 10/10 (100%) | Uh so Moonshot the the base premise behind it as I mentioned is throughout my pa... |
| `title` | 10/10 (100%) | Traction Thursday \| "Bodhi Group, LLC" Ti Liptak |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=pZVsV8FyBBc`

- **Vector count**: 28
- **Sample IDs**: `traction-thursdays-pZVsV8FyBBc-4`, `traction-thursdays-pZVsV8FyBBc-19`, `traction-thursdays-pZVsV8FyBBc-0`
- **ID patterns**: `other` (28)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Dennis Raimondi "The Coffee Le... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=pZVsV8FyBBc |
| `text` | 10/10 (100%) | I went to school with and um and I I got it it was not as hard like I've intervi... |
| `title` | 10/10 (100%) | Traction Thursday \| Dennis Raimondi "The Coffee League" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=EQB9pzPqiFc`

- **Vector count**: 27
- **Sample IDs**: `traction-thursdays-EQB9pzPqiFc-7`, `traction-thursdays-EQB9pzPqiFc-14`, `traction-thursdays-EQB9pzPqiFc-23`
- **ID patterns**: `other` (27)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Telling Your Story Through Fl... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=EQB9pzPqiFc |
| `text` | 10/10 (100%) | you know, there's definitely your plant people, but for me, it was really import... |
| `title` | 10/10 (100%) | Traction Thursday \| "Telling Your Story Through Flowers" Cari Anderson |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=AkMtgE7NWMk`

- **Vector count**: 26
- **Sample IDs**: `fc-council-AkMtgE7NWMk-8`, `fc-council-AkMtgE7NWMk-17`, `fc-council-AkMtgE7NWMk-5`
- **ID patterns**: `other` (26)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 4-14-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=AkMtgE7NWMk |
| `text` | 10/10 (100%) | this is one of the longest winners i can remember we've got two folks over here ... |
| `title` | 10/10 (100%) | City Council 4-14-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=-x2Xx_Qszqo`

- **Vector count**: 26
- **Sample IDs**: `traction-thursdays--x2Xx_Qszqo-24`, `traction-thursdays--x2Xx_Qszqo-9`, `traction-thursdays--x2Xx_Qszqo-12`
- **ID patterns**: `other` (26)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Brent Stinski "Stories Project... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=-x2Xx_Qszqo |
| `text` | 10/10 (100%) | So we're certainly aware of how that's done. Um right now most of our state leve... |
| `title` | 10/10 (100%) | Traction Thursday \| Brent Stinski "Stories Project" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=FsBYlumha50`

- **Vector count**: 26
- **Sample IDs**: `traction-thursdays-FsBYlumha50-19`, `traction-thursdays-FsBYlumha50-14`, `traction-thursdays-FsBYlumha50-0`
- **ID patterns**: `other` (26)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Terry Baker "CVB" 4.24.25 |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=FsBYlumha50 |
| `text` | 10/10 (100%) | And to do that, what we do with with the event that we had with you guys, that t... |
| `title` | 10/10 (100%) | Traction Thursday \| Terry Baker "CVB" 4.24.25 |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=b5N7EfXM7MY`

- **Vector count**: 26
- **Sample IDs**: `traction-thursdays-b5N7EfXM7MY-0`, `traction-thursdays-b5N7EfXM7MY-1`, `traction-thursdays-b5N7EfXM7MY-10`
- **ID patterns**: `other` (26)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Danny Standley "Sitley Consult... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=b5N7EfXM7MY |
| `text` | 10/10 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Da... |
| `title` | 10/10 (100%) | Traction Thursday \| Danny Standley "Sitley Consulting and EOS" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=A04iaCZNz3Y`

- **Vector count**: 25
- **Sample IDs**: `traction-thursdays-A04iaCZNz3Y-16`, `traction-thursdays-A04iaCZNz3Y-21`, `traction-thursdays-A04iaCZNz3Y-14`
- **ID patterns**: `other` (25)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Hotseat Marketing Panel |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=A04iaCZNz3Y |
| `text` | 10/10 (100%) | If you're looking to to uh reach people who are in their 40s and their 30s and t... |
| `title` | 10/10 (100%) | Traction Thursday \| Hotseat Marketing Panel |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=ar9jKsIVszQ`

- **Vector count**: 25
- **Sample IDs**: `traction-thursdays-ar9jKsIVszQ-7`, `traction-thursdays-ar9jKsIVszQ-3`, `traction-thursdays-ar9jKsIVszQ-10`
- **ID patterns**: `other` (25)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Frank Broz "Tokyo Pen Shop" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=ar9jKsIVszQ |
| `text` | 10/10 (100%) | Um, but what they wanted us to do was to give sort of access to our entire datab... |
| `title` | 10/10 (100%) | Traction Thursday \| Frank Broz "Tokyo Pen Shop" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=WDAAMy-JoF8`

- **Vector count**: 24
- **Sample IDs**: `fc-council-WDAAMy-JoF8-22`, `fc-council-WDAAMy-JoF8-11`, `fc-council-WDAAMy-JoF8-14`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=WDAAMy-JoF8 |
| `text` | 10/10 (100%) | They're averaging, they told me that they were going to put in eight panels a da... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 11.10.25 |
| `type` | 10/10 (100%) | council_meeting |

### `http://www.fairfieldculturaldistrict.org/news.htm`

- **Vector count**: 24
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-26`, `fca-aHR0cDovL3d3dy5mYWly-28`, `fca-aHR0cDovL3d3dy5mYWly-14`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | arts |
| `filename` | 10/10 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/news.htm |
| `org` | 10/10 (100%) | Fairfield Cultural Alliance |
| `source` | 10/10 (100%) | http://www.fairfieldculturaldistrict.org/news.htm |
| `text` | 10/10 (100%) | IA 2020 is a two year comprehensive project beginning for us this Saturday, Dec.... |
| `type` | 10/10 (100%) | community_org |

### `https://www.youtube.com/watch?v=EZ2n1BvcSTA`

- **Vector count**: 24
- **Sample IDs**: `traction-thursdays-EZ2n1BvcSTA-4`, `traction-thursdays-EZ2n1BvcSTA-7`, `traction-thursdays-EZ2n1BvcSTA-16`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jim Engle and Carol Lilly \| Ma... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=EZ2n1BvcSTA |
| `text` | 10/10 (100%) | You've got signs that are good, but it doesn't tell me what's in the store. So, ... |
| `title` | 10/10 (100%) | Traction Thursday \| Jim Engle and Carol Lilly \| Mainstreet Program 4.17.25 |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=KpolS1pDysg`

- **Vector count**: 24
- **Sample IDs**: `traction-thursdays-KpolS1pDysg-11`, `traction-thursdays-KpolS1pDysg-1`, `traction-thursdays-KpolS1pDysg-15`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Robert Bell "Intelligent Commu... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=KpolS1pDysg |
| `text` | 10/10 (100%) | Again, looking for the stories that show how a place got from stuck to successfu... |
| `title` | 10/10 (100%) | Traction Thursday \| Robert Bell "Intelligent Community Forum" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=OL6ZKHZ3yWE`

- **Vector count**: 24
- **Sample IDs**: `traction-thursdays-OL6ZKHZ3yWE-4`, `traction-thursdays-OL6ZKHZ3yWE-17`, `traction-thursdays-OL6ZKHZ3yWE-1`
- **ID patterns**: `other` (24)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Avi Maistri "Development Consu... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=OL6ZKHZ3yWE |
| `text` | 10/10 (100%) | um something that was a deep heart's longing for me and that I sought out all ov... |
| `title` | 10/10 (100%) | Traction Thursday \| Avi Maistri "Development Consultant" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=IfzBBMU4CU8`

- **Vector count**: 23
- **Sample IDs**: `fc-council-IfzBBMU4CU8-10`, `fc-council-IfzBBMU4CU8-16`, `fc-council-IfzBBMU4CU8-8`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 6-12-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=IfzBBMU4CU8 |
| `text` | 10/10 (100%) | and their Federal portion is a total of 52 000. so we were looking at a total a ... |
| `title` | 10/10 (100%) | City Council 6-12-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=z8e9z23fc00`

- **Vector count**: 23
- **Sample IDs**: `fc-council-z8e9z23fc00-0`, `fc-council-z8e9z23fc00-3`, `fc-council-z8e9z23fc00-7`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-10-20 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=z8e9z23fc00 |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-10-20  i cal... |
| `title` | 10/10 (100%) | City Council 8-10-20 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=7EQQ8967lSw`

- **Vector count**: 23
- **Sample IDs**: `traction-thursdays-7EQQ8967lSw-16`, `traction-thursdays-7EQQ8967lSw-18`, `traction-thursdays-7EQQ8967lSw-0`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Hotseat Marketing Panel |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=7EQQ8967lSw |
| `text` | 10/10 (100%) | And so I think one of the things is for you to uh offer to some of these people ... |
| `title` | 10/10 (100%) | Traction Thursday \| Hotseat Marketing Panel |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=eShgLBEigmY`

- **Vector count**: 23
- **Sample IDs**: `traction-thursdays-eShgLBEigmY-6`, `traction-thursdays-eShgLBEigmY-18`, `traction-thursdays-eShgLBEigmY-0`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Troy Van Beek "Ideal Energy" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=eShgLBEigmY |
| `text` | 10/10 (100%) | Like we just get our feet under us and then they pull the rug out with tariffs, ... |
| `title` | 10/10 (100%) | Traction Thursday \| Troy Van Beek "Ideal Energy" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=eWhyJHkvIgk`

- **Vector count**: 23
- **Sample IDs**: `traction-thursdays-eWhyJHkvIgk-14`, `traction-thursdays-eWhyJHkvIgk-13`, `traction-thursdays-eWhyJHkvIgk-11`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Paul Carlson 3.20. 25 |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=eWhyJHkvIgk |
| `text` | 10/10 (100%) | Have they already proven that their product is worth something? How important ar... |
| `title` | 10/10 (100%) | Traction Thursday \| Paul Carlson 3.20. 25 |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=wrhu-Dl3-GQ`

- **Vector count**: 23
- **Sample IDs**: `traction-thursdays-wrhu-Dl3-GQ-16`, `traction-thursdays-wrhu-Dl3-GQ-15`, `traction-thursdays-wrhu-Dl3-GQ-8`
- **ID patterns**: `other` (23)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Iowa Dance Collective" Tyler ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=wrhu-Dl3-GQ |
| `text` | 10/10 (100%) | Um and that right now is full like I said fully funded by everybody's Whole Food... |
| `title` | 10/10 (100%) | Traction Thursday \| "Iowa Dance Collective" Tyler Malone |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=3SRubyrkcts`

- **Vector count**: 22
- **Sample IDs**: `fc-council-3SRubyrkcts-15`, `fc-council-3SRubyrkcts-0`, `fc-council-3SRubyrkcts-19`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-03-11 — Fairfield City Council Wrap-Up |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-03-11 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=3SRubyrkcts |
| `text` | 10/10 (100%) | Well, I I I thought, well, maybe it's probably a scheduling conflict and uh so h... |
| `title` | 10/10 (100%) | Fairfield City Council Wrap-Up |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Xveq_41Jpok`

- **Vector count**: 22
- **Sample IDs**: `fc-council-Xveq_41Jpok-7`, `fc-council-Xveq_41Jpok-4`, `fc-council-Xveq_41Jpok-17`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-12-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Xveq_41Jpok |
| `text` | 10/10 (100%) | this means you have seven command to eight officers so 46 of your Workforce is C... |
| `title` | 10/10 (100%) | City Council 12-12-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=1_LplE2bPz8`

- **Vector count**: 22
- **Sample IDs**: `traction-thursdays-1_LplE2bPz8-15`, `traction-thursdays-1_LplE2bPz8-10`, `traction-thursdays-1_LplE2bPz8-9`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Joe Sanchis |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=1_LplE2bPz8 |
| `text` | 10/10 (100%) | Uh maybe I shouldn't include this, but this is you know it doesn't it's not chea... |
| `title` | 10/10 (100%) | Traction Thursday \| Joe Sanchis |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=4w7eVWCic7o`

- **Vector count**: 22
- **Sample IDs**: `traction-thursdays-4w7eVWCic7o-10`, `traction-thursdays-4w7eVWCic7o-0`, `traction-thursdays-4w7eVWCic7o-12`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Cynthia Yockey "Marketing" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=4w7eVWCic7o |
| `text` | 10/10 (100%) | So the urgency was u Google is being mean to you and I will help you sooner is t... |
| `title` | 10/10 (100%) | Traction Thursday \| Cynthia Yockey "Marketing" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=cd0JrCgcP8g`

- **Vector count**: 22
- **Sample IDs**: `traction-thursdays-cd0JrCgcP8g-8`, `traction-thursdays-cd0JrCgcP8g-18`, `traction-thursdays-cd0JrCgcP8g-7`
- **ID patterns**: `other` (22)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Bob Ferguson |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=cd0JrCgcP8g |
| `text` | 10/10 (100%) | you you you you need to go take a look at it and see if it you know if it if it ... |
| `title` | 10/10 (100%) | Traction Thursday \| Bob Ferguson |
| `type` | 10/10 (100%) | traction_thursday |

### `fairfield-acc`

- **Vector count**: 21
- **Sample IDs**: `FACC_03_events.pdf-chunk-3`, `FACC_03_events.pdf-chunk-0`, `FACC_01_home.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (21)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | community-organizations |
| `filename` | 10/10 (100%) | FACC_03_events.pdf |
| `source` | 10/10 (100%) | fairfield-acc |
| `subcategory` | 10/10 (100%) | facc |
| `text` | 10/10 (100%) |  Fairfield Arts & Convention Center 200 North Main St, Fairfield, IA, United Sta... |

### `https://www.youtube.com/watch?v=QTWrIG1bPDw`

- **Vector count**: 21
- **Sample IDs**: `fc-council-QTWrIG1bPDw-18`, `fc-council-QTWrIG1bPDw-10`, `fc-council-QTWrIG1bPDw-20`
- **ID patterns**: `other` (21)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 7-24-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=QTWrIG1bPDw |
| `text` | 10/10 (100%) | so this is establishing a franchise agreement with IDC Midwest LLC this is the t... |
| `title` | 10/10 (100%) | City Council 7-24-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=soTkAyXOF1c`

- **Vector count**: 21
- **Sample IDs**: `fc-council-soTkAyXOF1c-10`, `fc-council-soTkAyXOF1c-11`, `fc-council-soTkAyXOF1c-9`
- **ID patterns**: `other` (21)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-15-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=soTkAyXOF1c |
| `text` | 10/10 (100%) | 75 million dollars in in bonding that we're going to be doing of which 750 000 i... |
| `title` | 10/10 (100%) | City Council 12-15-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IdFpPJ-zOUg`

- **Vector count**: 21
- **Sample IDs**: `traction-thursdays-IdFpPJ-zOUg-11`, `traction-thursdays-IdFpPJ-zOUg-5`, `traction-thursdays-IdFpPJ-zOUg-13`
- **ID patterns**: `other` (21)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Lindsay Bauer "Fairfield Arts ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=IdFpPJ-zOUg |
| `text` | 10/10 (100%) | I I do know that I mean I feel like I know that if we built hotel rooms they wou... |
| `title` | 10/10 (100%) | Traction Thursday \| Lindsay Bauer "Fairfield Arts & Convention Center" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=HIu-D5Oj-O4`

- **Vector count**: 20
- **Sample IDs**: `fc-council-HIu-D5Oj-O4-17`, `fc-council-HIu-D5Oj-O4-11`, `fc-council-HIu-D5Oj-O4-6`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 9-12-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=HIu-D5Oj-O4 |
| `text` | 10/10 (100%) | oh no it's a lot it isn't something new uh when I was a county attorney we had u... |
| `title` | 10/10 (100%) | City Council 9-12-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=DqiaRfk8JjQ`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-DqiaRfk8JjQ-5`, `traction-thursdays-DqiaRfk8JjQ-15`, `traction-thursdays-DqiaRfk8JjQ-11`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Bill Sharp |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=DqiaRfk8JjQ |
| `text` | 10/10 (100%) | So challenges require changes and new community, new economy is the change I'm p... |
| `title` | 10/10 (100%) | Traction Thursday \| Bill Sharp |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=SKBCbNwGYqc`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-SKBCbNwGYqc-2`, `traction-thursdays-SKBCbNwGYqc-1`, `traction-thursdays-SKBCbNwGYqc-4`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Community Accelerator" Bob Fe... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=SKBCbNwGYqc |
| `text` | 10/10 (100%) | Um they were able to be very very thoughtful about how within the purview of the... |
| `title` | 10/10 (100%) | Traction Thursday \| "Community Accelerator" Bob Ferguson |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=e6MQLERq4Gk`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-e6MQLERq4Gk-2`, `traction-thursdays-e6MQLERq4Gk-10`, `traction-thursdays-e6MQLERq4Gk-3`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Arborist Andrew Nash "Sweet Gr... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=e6MQLERq4Gk |
| `text` | 10/10 (100%) | I know about the DNR. Let's just go ahead and order like some hundreds of plants... |
| `title` | 10/10 (100%) | Traction Thursday \| Arborist Andrew Nash "Sweet Green Natives" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=jbpsDG4qrAQ`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-jbpsDG4qrAQ-9`, `traction-thursdays-jbpsDG4qrAQ-17`, `traction-thursdays-jbpsDG4qrAQ-12`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "SILT" Breana Horsey |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=jbpsDG4qrAQ |
| `text` | 10/10 (100%) | We made it to over a 100 events last year and just telling people about silt. Um... |
| `title` | 10/10 (100%) | Traction Thursday \| "SILT" Breana Horsey |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=tjUo41Zessw`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-tjUo41Zessw-11`, `traction-thursdays-tjUo41Zessw-18`, `traction-thursdays-tjUo41Zessw-8`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Ginger Persolus "Pauper MTG" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=tjUo41Zessw |
| `text` | 10/10 (100%) | It is possible that someone else will try to copycat us, but I I think it's a sm... |
| `title` | 10/10 (100%) | Traction Thursday \| Ginger Persolus "Pauper MTG" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=otQk6urFx28`

- **Vector count**: 20
- **Sample IDs**: `traction-thursdays-otQk6urFx28-5`, `traction-thursdays-otQk6urFx28-16`, `traction-thursdays-otQk6urFx28-0`
- **ID patterns**: `other` (20)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Chamber and Beautification Upd... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=otQk6urFx28 |
| `text` | 10/10 (100%) | I could probably go on for days and days about what we do. So anyway, Entrafest.... |
| `title` | 10/10 (100%) | Traction Thursday \| Chamber and Beautification Update |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=BoE0SmGWygU`

- **Vector count**: 19
- **Sample IDs**: `fc-council-BoE0SmGWygU-10`, `fc-council-BoE0SmGWygU-11`, `fc-council-BoE0SmGWygU-12`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 9-11-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=BoE0SmGWygU |
| `text` | 10/10 (100%) | we're close okay so let's move back to the city attorney report all right I was ... |
| `title` | 10/10 (100%) | City Council 9-11-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YPzM3Ywdgas`

- **Vector count**: 19
- **Sample IDs**: `fc-council-YPzM3Ywdgas-18`, `fc-council-YPzM3Ywdgas-11`, `fc-council-YPzM3Ywdgas-6`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-28-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=YPzM3Ywdgas |
| `text` | 10/10 (100%) | t site does not negate the very appropriate and practical advantages of that loc... |
| `title` | 10/10 (100%) | City Council 2-28-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=b2WSVfQST0I`

- **Vector count**: 19
- **Sample IDs**: `fc-council-b2WSVfQST0I-9`, `fc-council-b2WSVfQST0I-2`, `fc-council-b2WSVfQST0I-6`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — CITY COUNCIL 1-24-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=b2WSVfQST0I |
| `text` | 10/10 (100%) | 50 23. 50 for year two and year three years but i also need 1075 for your money ... |
| `title` | 10/10 (100%) | CITY COUNCIL 1-24-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qSQrjtU7wz4`

- **Vector count**: 19
- **Sample IDs**: `fc-council-qSQrjtU7wz4-3`, `fc-council-qSQrjtU7wz4-8`, `fc-council-qSQrjtU7wz4-16`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 6-24-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=qSQrjtU7wz4 |
| `text` | 10/10 (100%) | 2 million on on capital projects that were slated for reimbursement so that's wh... |
| `title` | 10/10 (100%) | Fairfield City Council 6-24-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=-2Sx2jL4y5w`

- **Vector count**: 19
- **Sample IDs**: `traction-thursdays--2Sx2jL4y5w-4`, `traction-thursdays--2Sx2jL4y5w-15`, `traction-thursdays--2Sx2jL4y5w-1`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Lee Searls "Ecologist" |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=-2Sx2jL4y5w |
| `text` | 10/10 (100%) | What are the needs that you cannot meet that are pressing that need this kind of... |
| `title` | 10/10 (100%) | Traction Thursday \| Lee Searls "Ecologist" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=DLThcexNMdg`

- **Vector count**: 19
- **Sample IDs**: `traction-thursdays-DLThcexNMdg-17`, `traction-thursdays-DLThcexNMdg-11`, `traction-thursdays-DLThcexNMdg-5`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Janet Finlayson, Event Coordin... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=DLThcexNMdg |
| `text` | 10/10 (100%) | The rest, just a reminder, SBDC, we're uh free, no cost uh business counseling f... |
| `title` | 10/10 (100%) | Traction Thursday \| Janet Finlayson, Event Coordinator at Newbo.Co |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=qd9bgXpwvno`

- **Vector count**: 19
- **Sample IDs**: `traction-thursdays-qd9bgXpwvno-7`, `traction-thursdays-qd9bgXpwvno-16`, `traction-thursdays-qd9bgXpwvno-8`
- **ID patterns**: `other` (19)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Fairfield Civic Research Tool... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=qd9bgXpwvno |
| `text` | 10/10 (100%) | So, would that have come directly from some sort of source document or did it ju... |
| `title` | 10/10 (100%) | Traction Thursday \| "Fairfield Civic Research Tool" Bob Ferguson |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=dsGg4DojXy4`

- **Vector count**: 18
- **Sample IDs**: `fc-council-dsGg4DojXy4-6`, `fc-council-dsGg4DojXy4-3`, `fc-council-dsGg4DojXy4-16`
- **ID patterns**: `other` (18)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council Work Session 2-12-24 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=dsGg4DojXy4 |
| `text` | 10/10 (100%) | 4 million of industrial valuation growth so that really makes up the bulk of whe... |
| `title` | 10/10 (100%) | City Council Work Session 2-12-24 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=393`

- **Vector count**: 18
- **Sample IDs**: `minutes-393.pdf-chunk-15`, `minutes-393.pdf-chunk-7`, `minutes-393.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (18)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-393.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=393 |
| `text` | 10/10 (100%) | D SOLAR   PROJECT FOR SEVEN (7) CITY LOCATIONS AS    Page 8  Minutes  12/18/17  ... |

### `https://www.youtube.com/watch?v=-zQW4891ab4`

- **Vector count**: 18
- **Sample IDs**: `traction-thursdays--zQW4891ab4-9`, `traction-thursdays--zQW4891ab4-0`, `traction-thursdays--zQW4891ab4-1`
- **ID patterns**: `other` (18)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Greater Purpose Film Festival... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=-zQW4891ab4 |
| `text` | 10/10 (100%) | I have a feeling we could get uh it would be great to have somebody go, I'm in C... |
| `title` | 10/10 (100%) | Traction Thursday \| "Greater Purpose Film Festival" Lee Ross |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=k_Dr8nym40k`

- **Vector count**: 18
- **Sample IDs**: `traction-thursdays-k_Dr8nym40k-14`, `traction-thursdays-k_Dr8nym40k-15`, `traction-thursdays-k_Dr8nym40k-17`
- **ID patterns**: `other` (18)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| The Commons |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=k_Dr8nym40k |
| `text` | 10/10 (100%) | " But who's going to oversee all of it and like make all the um you know the set... |
| `title` | 10/10 (100%) | Traction Thursday \| The Commons |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=1x3hKWWcXRw`

- **Vector count**: 17
- **Sample IDs**: `fc-council-1x3hKWWcXRw-14`, `fc-council-1x3hKWWcXRw-13`, `fc-council-1x3hKWWcXRw-16`
- **ID patterns**: `other` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-22-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=1x3hKWWcXRw |
| `text` | 10/10 (100%) | 75 cents a month that we would give him he said we knew it wasn't hooked up so w... |
| `title` | 10/10 (100%) | City Council 8-22-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=4nX9vGC1di8`

- **Vector count**: 17
- **Sample IDs**: `fc-council-4nX9vGC1di8-7`, `fc-council-4nX9vGC1di8-0`, `fc-council-4nX9vGC1di8-15`
- **ID patterns**: `other` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-24-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=4nX9vGC1di8 |
| `text` | 10/10 (100%) | approve thank you move by gandy second second by ham any other questions or disc... |
| `title` | 10/10 (100%) | City Council 5-24-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=SjDqEeglQ-k`

- **Vector count**: 17
- **Sample IDs**: `fc-council-SjDqEeglQ-k-6`, `fc-council-SjDqEeglQ-k-9`, `fc-council-SjDqEeglQ-k-11`
- **ID patterns**: `other` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 4-10-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=SjDqEeglQ-k |
| `text` | 10/10 (100%) | M people wanting to participate with Floats or other vehicles need to be up at t... |
| `title` | 10/10 (100%) | City Council 4-10-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=466`

- **Vector count**: 17
- **Sample IDs**: `minutes-466.pdf-chunk-11`, `minutes-466.pdf-chunk-5`, `minutes-466.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-466.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=466 |
| `text` | 10/10 (100%) |   Other Community Development and Housing Needs  1. Attraction of new local busi... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=648`

- **Vector count**: 17
- **Sample IDs**: `minutes-648.pdf-chunk-0`, `minutes-648.pdf-chunk-1`, `minutes-648.pdf-chunk-16`
- **ID patterns**: `filename.pdf-chunk-N` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-648.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=648 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING DECEMBER 27, 2021    Th... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=752`

- **Vector count**: 17
- **Sample IDs**: `minutes-752.pdf-chunk-2`, `minutes-752.pdf-chunk-11`, `minutes-752.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-752.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=752 |
| `text` | 10/10 (100%) | y Flournoy, seconded by Gandy   AYES:  Flournoy, Gandy, Estey, Twohill, Ham, Kne... |

### `https://www.youtube.com/watch?v=N0Ybr09tfRA`

- **Vector count**: 17
- **Sample IDs**: `traction-thursdays-N0Ybr09tfRA-5`, `traction-thursdays-N0Ybr09tfRA-12`, `traction-thursdays-N0Ybr09tfRA-15`
- **ID patterns**: `other` (17)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jasia Standley "Graceful Bear ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=N0Ybr09tfRA |
| `text` | 10/10 (100%) | I look at the whole picture and I don't just suggest herbs. I also suggest lifes... |
| `title` | 10/10 (100%) | Traction Thursday \| Jasia Standley "Graceful Bear Wellness" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=FjvRst7mcM4`

- **Vector count**: 16
- **Sample IDs**: `fc-council-FjvRst7mcM4-5`, `fc-council-FjvRst7mcM4-13`, `fc-council-FjvRst7mcM4-11`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-22-17 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=FjvRst7mcM4 |
| `text` | 10/10 (100%) | 75 cents a month for the sewer line coverage six dollars and seventy five cents ... |
| `title` | 10/10 (100%) | City Council 5-22-17 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Y2d2fz572K8`

- **Vector count**: 16
- **Sample IDs**: `fc-council-Y2d2fz572K8-6`, `fc-council-Y2d2fz572K8-7`, `fc-council-Y2d2fz572K8-0`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 7-11-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Y2d2fz572K8 |
| `text` | 10/10 (100%) | 2 in the previous year these indicators are taken into account when adopting the... |
| `title` | 10/10 (100%) | City Council 7-11-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ZUU6JDNIc_E`

- **Vector count**: 16
- **Sample IDs**: `fc-council-ZUU6JDNIc_E-3`, `fc-council-ZUU6JDNIc_E-15`, `fc-council-ZUU6JDNIc_E-1`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 1-13-20 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=ZUU6JDNIc_E |
| `text` | 10/10 (100%) | 5 gigahertz if you would like to see it firsthand it's very interesting to see i... |
| `title` | 10/10 (100%) | City Council 1-13-20 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=672`

- **Vector count**: 16
- **Sample IDs**: `minutes-672.pdf-chunk-7`, `minutes-672.pdf-chunk-8`, `minutes-672.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-672.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=672 |
| `text` | 10/10 (100%) | ROVEMENTS AS FULLY COMPLETE    IN ACCORDANCE WITH THE PLANS, SPECIFICATIONS    A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=754`

- **Vector count**: 16
- **Sample IDs**: `minutes-754.pdf-chunk-0`, `minutes-754.pdf-chunk-10`, `minutes-754.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-754.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=754 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  APRIL 14, 2025    The Fairfield City Co... |

### `cityoffanrfieldiowa.com`

- **Vector count**: 16
- **Sample IDs**: `title9_ch931_mobile_food.pdf-chunk-11`, `title9_ch931_mobile_food.pdf-chunk-1`, `title9_ch931_mobile_food.pdf-chunk-14`
- **ID patterns**: `filename.pdf-chunk-N` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | municipal_code |
| `filename` | 10/10 (100%) | title9_ch931_mobile_food.pdf |
| `source` | 10/10 (100%) | cityoffanrfieldiowa.com |
| `subcategory` | 10/10 (100%) | public_peace |
| `text` | 10/10 (100%) | law, shall be posted on the  mobile food unit or pushcart so as to be readily vi... |
| `title` | 10/10 (100%) | Title 9 Ch 9.31 - Mobile Food Units |

### `https://www.youtube.com/watch?v=kNDv3p0kgdY`

- **Vector count**: 16
- **Sample IDs**: `traction-thursdays-kNDv3p0kgdY-3`, `traction-thursdays-kNDv3p0kgdY-0`, `traction-thursdays-kNDv3p0kgdY-4`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Collective \| Bakehouse \| Bread... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=kNDv3p0kgdY |
| `text` | 10/10 (100%) | starts the um digestion process of the flour, those complex starches, so your bo... |
| `title` | 10/10 (100%) | Traction Thursday \| Collective \| Bakehouse \| Breadtopia |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=fUPiByOER2k`

- **Vector count**: 16
- **Sample IDs**: `traction-thursdays-fUPiByOER2k-10`, `traction-thursdays-fUPiByOER2k-7`, `traction-thursdays-fUPiByOER2k-5`
- **ID patterns**: `other` (16)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Anna Maistri 11.6.25 |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=fUPiByOER2k |
| `text` | 10/10 (100%) | And at the summary, I would love to say say that I know it was a lot of differen... |
| `title` | 10/10 (100%) | Traction Thursday \| Anna Maistri 11.6.25 |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=5ORS5XkQqC4`

- **Vector count**: 15
- **Sample IDs**: `fc-council-5ORS5XkQqC4-4`, `fc-council-5ORS5XkQqC4-9`, `fc-council-5ORS5XkQqC4-12`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-22-16 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=5ORS5XkQqC4 |
| `text` | 10/10 (100%) | I mean there were just some estimates that were made that were overly optimistic... |
| `title` | 10/10 (100%) | City Council 2-22-16 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Dx8IdNBVYGQ`

- **Vector count**: 15
- **Sample IDs**: `fc-council-Dx8IdNBVYGQ-4`, `fc-council-Dx8IdNBVYGQ-9`, `fc-council-Dx8IdNBVYGQ-5`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-25-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Dx8IdNBVYGQ |
| `text` | 10/10 (100%) | 8 million dollars is that right what you're telling us is our architect is what ... |
| `title` | 10/10 (100%) | City Council 8-25-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=KYhEgCEkBTo`

- **Vector count**: 15
- **Sample IDs**: `fc-council-KYhEgCEkBTo-0`, `fc-council-KYhEgCEkBTo-11`, `fc-council-KYhEgCEkBTo-1`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — 2026-03-25 — Fairfield City Council Wrap-Up |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) | 2026-03-25 |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=KYhEgCEkBTo |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — 2026-03-25 Title: Fairfield City Council Wrap-U... |
| `title` | 10/10 (100%) | Fairfield City Council Wrap-Up |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=MIkIBnykGeI`

- **Vector count**: 15
- **Sample IDs**: `fc-council-MIkIBnykGeI-9`, `fc-council-MIkIBnykGeI-13`, `fc-council-MIkIBnykGeI-4`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 6-10-19 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=MIkIBnykGeI |
| `text` | 10/10 (100%) | Scott mentioned earlier that we'll be talking about different section of transpo... |
| `title` | 10/10 (100%) | City Council 6-10-19 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=s0ls9Vj9wNU`

- **Vector count**: 15
- **Sample IDs**: `fc-council-s0ls9Vj9wNU-3`, `fc-council-s0ls9Vj9wNU-0`, `fc-council-s0ls9Vj9wNU-2`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 1-11-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=s0ls9Vj9wNU |
| `text` | 10/10 (100%) | t site site number four was 104 north 2nd street the existing fire station and s... |
| `title` | 10/10 (100%) | City Council 1-11-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=425`

- **Vector count**: 15
- **Sample IDs**: `minutes-425.pdf-chunk-12`, `minutes-425.pdf-chunk-5`, `minutes-425.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-425.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=425 |
| `text` | 10/10 (100%) | t was given by Councilperson Halley.  The Committee met on  two sewer reduction ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=676`

- **Vector count**: 15
- **Sample IDs**: `minutes-676.pdf-chunk-3`, `minutes-676.pdf-chunk-11`, `minutes-676.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-676.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=676 |
| `text` | 10/10 (100%) | D AVE. TO BRIGGS AVE. AND    HEMPSTEAD FROM MAIN STREET TO 2 ND  STREET  FROM 8:... |

### `https://www.youtube.com/watch?v=4epFYQ9220g`

- **Vector count**: 15
- **Sample IDs**: `traction-thursdays-4epFYQ9220g-12`, `traction-thursdays-4epFYQ9220g-10`, `traction-thursdays-4epFYQ9220g-4`
- **ID patterns**: `other` (15)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Chaz Alley |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=4epFYQ9220g |
| `text` | 10/10 (100%) | you know, if there's going to be like this period of of uh I don't know, dryness... |
| `title` | 10/10 (100%) | Traction Thursday \| Chaz Alley |
| `type` | 10/10 (100%) | traction_thursday |

### `City Attorney`

- **Vector count**: 14
- **Sample IDs**: `City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf-chunk-3`, `City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf-chunk-8`, `City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | walton_lake |
| `filename` | 10/10 (100%) | City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf |
| `source` | 10/10 (100%) | City Attorney |
| `text` | 10/10 (100%) | ystem  § Annexation  § Subdivision  § Limit cost by development sales  § Cost-ef... |
| `type` | 10/10 (100%) | city_attorney |

### `https://www.youtube.com/watch?v=FSQvXjrWPPA`

- **Vector count**: 14
- **Sample IDs**: `fc-council-FSQvXjrWPPA-1`, `fc-council-FSQvXjrWPPA-5`, `fc-council-FSQvXjrWPPA-0`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-14-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=FSQvXjrWPPA |
| `text` | 10/10 (100%) | 73 cents so i would take a motion to approve the consent agenda so moved second ... |
| `title` | 10/10 (100%) | City Council 2-14-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IMu6yzip8IA`

- **Vector count**: 14
- **Sample IDs**: `fc-council-IMu6yzip8IA-5`, `fc-council-IMu6yzip8IA-10`, `fc-council-IMu6yzip8IA-7`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-27-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=IMu6yzip8IA |
| `text` | 10/10 (100%) | occurred so maybe it's something that we could consider again I have heard of ot... |
| `title` | 10/10 (100%) | City Council 2-27-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=PCaQslbqYg0`

- **Vector count**: 14
- **Sample IDs**: `fc-council-PCaQslbqYg0-1`, `fc-council-PCaQslbqYg0-7`, `fc-council-PCaQslbqYg0-5`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-8-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=PCaQslbqYg0 |
| `text` | 10/10 (100%) | 84 cents acceptance of the environmental and franchise utility committee minutes... |
| `title` | 10/10 (100%) | City Council 5-8-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Ts0QYH9ljbc`

- **Vector count**: 14
- **Sample IDs**: `fc-council-Ts0QYH9ljbc-0`, `fc-council-Ts0QYH9ljbc-11`, `fc-council-Ts0QYH9ljbc-6`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-13-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Ts0QYH9ljbc |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-13-23  forei... |
| `title` | 10/10 (100%) | City Council 2-13-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YTF6Y8_WhxQ`

- **Vector count**: 14
- **Sample IDs**: `fc-council-YTF6Y8_WhxQ-11`, `fc-council-YTF6Y8_WhxQ-7`, `fc-council-YTF6Y8_WhxQ-0`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-5-16 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=YTF6Y8_WhxQ |
| `text` | 10/10 (100%) | m. on the 15th and Council will consider them at noon on the 15th that they're a... |
| `title` | 10/10 (100%) | City Council 12-5-16 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=euJGLqMWUnM`

- **Vector count**: 14
- **Sample IDs**: `fc-council-euJGLqMWUnM-7`, `fc-council-euJGLqMWUnM-6`, `fc-council-euJGLqMWUnM-5`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 11-28-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=euJGLqMWUnM |
| `text` | 10/10 (100%) | com I'd highly recommend you doing it and just you don't have to scroll very far... |
| `title` | 10/10 (100%) | City Council 11-28-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=haoQbcBCSok`

- **Vector count**: 14
- **Sample IDs**: `fc-council-haoQbcBCSok-0`, `fc-council-haoQbcBCSok-11`, `fc-council-haoQbcBCSok-9`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 8-26-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=haoQbcBCSok |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 8-26... |
| `title` | 10/10 (100%) | Fairfield City Council 8-26-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=vOFylHW6b2g`

- **Vector count**: 14
- **Sample IDs**: `fc-council-vOFylHW6b2g-10`, `fc-council-vOFylHW6b2g-2`, `fc-council-vOFylHW6b2g-5`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 8-12-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=vOFylHW6b2g |
| `text` | 10/10 (100%) | we'll check on that check on the rebate yeah the original original i'm sorry wel... |
| `title` | 10/10 (100%) | Fairfield City Council 8-12-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=467`

- **Vector count**: 14
- **Sample IDs**: `minutes-467.pdf-chunk-1`, `minutes-467.pdf-chunk-3`, `minutes-467.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-467.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=467 |
| `text` | 10/10 (100%) | HE AMOUNT OF $125,067.07.    TO ACCEPT THE LIBRARY BOARD MINUTES.    TO ADOPT RE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=671`

- **Vector count**: 14
- **Sample IDs**: `minutes-671.pdf-chunk-10`, `minutes-671.pdf-chunk-2`, `minutes-671.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-671.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=671 |
| `text` | 10/10 (100%) | ill, Ham, Gandy, Flournoy and Rasmussen    TO ADOPT RESOLUTION NO. 4108 ORDERING... |

### `https://www.youtube.com/watch?v=FuZa3t-tCNA`

- **Vector count**: 14
- **Sample IDs**: `traction-thursdays-FuZa3t-tCNA-4`, `traction-thursdays-FuZa3t-tCNA-12`, `traction-thursdays-FuZa3t-tCNA-13`
- **ID patterns**: `other` (14)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Jenny Sammons "Visual Artist D... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=FuZa3t-tCNA |
| `text` | 10/10 (100%) | And also having galleries reach out to me. Most of the gallery shows that I've d... |
| `title` | 10/10 (100%) | Traction Thursday \| Jenny Sammons "Visual Artist Designer" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=H8ITA1QdVHI`

- **Vector count**: 13
- **Sample IDs**: `fc-council-H8ITA1QdVHI-11`, `fc-council-H8ITA1QdVHI-2`, `fc-council-H8ITA1QdVHI-10`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-11-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=H8ITA1QdVHI |
| `text` | 10/10 (100%) | okay five users then so we're about Midstream in in this round of the local opti... |
| `title` | 10/10 (100%) | City Council 8-11-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=LHEXdzFoZbY`

- **Vector count**: 13
- **Sample IDs**: `fc-council-LHEXdzFoZbY-9`, `fc-council-LHEXdzFoZbY-10`, `fc-council-LHEXdzFoZbY-7`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 6-10-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=LHEXdzFoZbY |
| `text` | 10/10 (100%) | that gives us that much more room so we can get rid of this bottleneck that we h... |
| `title` | 10/10 (100%) | Fairfield City Council 6-10-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=O4fHw0IF6Fc`

- **Vector count**: 13
- **Sample IDs**: `fc-council-O4fHw0IF6Fc-3`, `fc-council-O4fHw0IF6Fc-4`, `fc-council-O4fHw0IF6Fc-6`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 8-23-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=O4fHw0IF6Fc |
| `text` | 10/10 (100%) | 8 it's a little nicer yeah so what they're saying is about one in every 12 peopl... |
| `title` | 10/10 (100%) | City Council 8-23-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QFKKs5ICMe4`

- **Vector count**: 13
- **Sample IDs**: `fc-council-QFKKs5ICMe4-10`, `fc-council-QFKKs5ICMe4-8`, `fc-council-QFKKs5ICMe4-6`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 10-14-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=QFKKs5ICMe4 |
| `text` | 10/10 (100%) | 8 or 9 million costs on a good day you can see that there is a gap funding issue... |
| `title` | 10/10 (100%) | Fairfield City Council 10-14-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=SoZX2HWCykE`

- **Vector count**: 13
- **Sample IDs**: `fc-council-SoZX2HWCykE-1`, `fc-council-SoZX2HWCykE-4`, `fc-council-SoZX2HWCykE-6`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 3-13-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=SoZX2HWCykE |
| `text` | 10/10 (100%) | I move that we approve the consent agenda unless you have something done that we... |
| `title` | 10/10 (100%) | City Council 3-13-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Y2OA0atX8sk`

- **Vector count**: 13
- **Sample IDs**: `fc-council-Y2OA0atX8sk-9`, `fc-council-Y2OA0atX8sk-12`, `fc-council-Y2OA0atX8sk-5`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 1-23-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Y2OA0atX8sk |
| `text` | 10/10 (100%) | 98 code I was in the ballpark um and move it up to a more current year to uh for... |
| `title` | 10/10 (100%) | City Council 1-23-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=f8VJwOumtbc`

- **Vector count**: 13
- **Sample IDs**: `fc-council-f8VJwOumtbc-5`, `fc-council-f8VJwOumtbc-9`, `fc-council-f8VJwOumtbc-6`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 3-27-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=f8VJwOumtbc |
| `text` | 10/10 (100%) | the Historical Museum has bound copies of newspapers going back to 1921 the olde... |
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
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-13-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=heip3ByMbJU |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-13-23  yes A... |
| `title` | 10/10 (100%) | City Council 2-13-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=jT_omqwqbhU`

- **Vector count**: 13
- **Sample IDs**: `fc-council-jT_omqwqbhU-10`, `fc-council-jT_omqwqbhU-5`, `fc-council-jT_omqwqbhU-4`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=jT_omqwqbhU |
| `text` | 10/10 (100%) | 65 %c from it's I know I had I think it's up 97 cents 97 we're at 1668 565 so it... |
| `title` | 10/10 (100%) | City of Fairfield \| Study Session & City Council 2.24.25 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=388`

- **Vector count**: 13
- **Sample IDs**: `minutes-388.pdf-chunk-3`, `minutes-388.pdf-chunk-4`, `minutes-388.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-388.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=388 |
| `text` | 10/10 (100%) |    REDEVELOPMENT, DEVELOPMENT OR A COMBINATION    THEREOF, OF SUCH AREA IS NECES... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=395`

- **Vector count**: 13
- **Sample IDs**: `minutes-395.pdf-chunk-4`, `minutes-395.pdf-chunk-3`, `minutes-395.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-395.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=395 |
| `text` | 10/10 (100%) | econded by Hamilton   AYES:  Thompson, Hamilton, Gandy, Halley and Rasmussen    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=403`

- **Vector count**: 13
- **Sample IDs**: `minutes-403.pdf-chunk-6`, `minutes-403.pdf-chunk-8`, `minutes-403.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-403.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=403 |
| `text` | 10/10 (100%) |  GENERAL OBLIGATION CAPITAL LOAN   NOTES, SERIES 2018, AND LEVYING TAX   TO PAY ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=427`

- **Vector count**: 13
- **Sample IDs**: `minutes-427.pdf-chunk-7`, `minutes-427.pdf-chunk-8`, `minutes-427.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-427.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=427 |
| `text` | 10/10 (100%) | ompson, Rasmussen, Hamilton, and Halley         TO ADOPT RESOLUTION NO. 3681    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=470`

- **Vector count**: 13
- **Sample IDs**: `minutes-470.pdf-chunk-7`, `minutes-470.pdf-chunk-0`, `minutes-470.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-470.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=470 |
| `text` | 10/10 (100%) | AND FINAL  READING OF ORDINANCE NO. 1185   AMENDING ORDINANCE NOS. 1064, 1106, A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=633`

- **Vector count**: 13
- **Sample IDs**: `minutes-633.pdf-chunk-7`, `minutes-633.pdf-chunk-3`, `minutes-633.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-633.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=633 |
| `text` | 10/10 (100%) | lley, Twohill, Ham, Flournoy, Gandy and Rasmussen      TO APPROVE THE APPOINTMEN... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=665`

- **Vector count**: 13
- **Sample IDs**: `minutes-665.pdf-chunk-3`, `minutes-665.pdf-chunk-8`, `minutes-665.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-665.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=665 |
| `text` | 10/10 (100%) | ATION FOR 808  N 12 TH  STREET (HEILMANN).    Mayor Boyer opened a public hearin... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=660`

- **Vector count**: 13
- **Sample IDs**: `minutes-660.pdf-chunk-3`, `minutes-660.pdf-chunk-10`, `minutes-660.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-660.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=660 |
| `text` | 10/10 (100%) | by Anderson, seconded by Flournoy   AYES:  Anderson, Flournoy, Twohill, Ham, Est... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=670`

- **Vector count**: 13
- **Sample IDs**: `minutes-670.pdf-chunk-6`, `minutes-670.pdf-chunk-9`, `minutes-670.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-670.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=670 |
| `text` | 10/10 (100%) | ,    DECEMBER 12, 2022 AT 7:00 PM AS DATE OF     PUBLIC HEARING ON PROPOSED AMEN... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=696`

- **Vector count**: 13
- **Sample IDs**: `minutes-696.pdf-chunk-1`, `minutes-696.pdf-chunk-5`, `minutes-696.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-696.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=696 |
| `text` | 10/10 (100%) | .    TO ACCEPT THE VOLUNTEER CENTER COMMITTEE  MINUTES.    TO ACCEPT THE CARNEGI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=742`

- **Vector count**: 13
- **Sample IDs**: `minutes-742.pdf-chunk-10`, `minutes-742.pdf-chunk-6`, `minutes-742.pdf-chunk-11`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-742.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=742 |
| `text` | 10/10 (100%) | e of lots to FEDA; annual expense for sewer easement; Walton Bridge replacement ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=772`

- **Vector count**: 13
- **Sample IDs**: `minutes-772.pdf-chunk-0`, `minutes-772.pdf-chunk-2`, `minutes-772.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-772.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=772 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  DECEMBER 15, 2025    The Fairfield City... |

### `https://www.youtube.com/watch?v=F2wtfLvntMM`

- **Vector count**: 13
- **Sample IDs**: `traction-thursdays-F2wtfLvntMM-7`, `traction-thursdays-F2wtfLvntMM-9`, `traction-thursdays-F2wtfLvntMM-0`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
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
- **Sample IDs**: `traction-thursdays-MwfBb1rZFMA-10`, `traction-thursdays-MwfBb1rZFMA-11`, `traction-thursdays-MwfBb1rZFMA-9`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Intelligent Community Forum To... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=MwfBb1rZFMA |
| `text` | 10/10 (100%) | You know, they they got that $750,000 uh grant uh grant >> and I think they have... |
| `title` | 10/10 (100%) | Traction Thursday \| Intelligent Community Forum Top 7 Site Visits |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=O7RCI5V-41E`

- **Vector count**: 13
- **Sample IDs**: `traction-thursdays-O7RCI5V-41E-5`, `traction-thursdays-O7RCI5V-41E-12`, `traction-thursdays-O7RCI5V-41E-3`
- **ID patterns**: `other` (13)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| "Dynamic Facilitation and the ... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=O7RCI5V-41E |
| `text` | 10/10 (100%) | And then uh the new collaborations haven't emerged and we have rampant fear and ... |
| `title` | 10/10 (100%) | Traction Thursday \| "Dynamic Facilitation and the Wisdom Council Processes" Greg... |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=7p78YMxf7Ss`

- **Vector count**: 12
- **Sample IDs**: `fc-council-7p78YMxf7Ss-5`, `fc-council-7p78YMxf7Ss-4`, `fc-council-7p78YMxf7Ss-0`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 1-10-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=7p78YMxf7Ss |
| `text` | 10/10 (100%) | the county's responsible for the jail and the sheriff's department right and the... |
| `title` | 10/10 (100%) | City Council 1-10-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=749kqSt3bbA`

- **Vector count**: 12
- **Sample IDs**: `fc-council-749kqSt3bbA-11`, `fc-council-749kqSt3bbA-8`, `fc-council-749kqSt3bbA-6`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 9-27-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=749kqSt3bbA |
| `text` | 10/10 (100%) | 5 feet is the city's right-of-way the second 12. 5 feet of concrete is deeded to... |
| `title` | 10/10 (100%) | City Council 9-27-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=AhsAoUKHwxk`

- **Vector count**: 12
- **Sample IDs**: `fc-council-AhsAoUKHwxk-11`, `fc-council-AhsAoUKHwxk-10`, `fc-council-AhsAoUKHwxk-9`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-14-20 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=AhsAoUKHwxk |
| `text` | 10/10 (100%) | m what day is that that's a saturday so um we'll let you know for sure but okay ... |
| `title` | 10/10 (100%) | City Council 12-14-20 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=PxZgShdjQvQ`

- **Vector count**: 12
- **Sample IDs**: `fc-council-PxZgShdjQvQ-5`, `fc-council-PxZgShdjQvQ-3`, `fc-council-PxZgShdjQvQ-6`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 3-8-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=PxZgShdjQvQ |
| `text` | 10/10 (100%) | and that's our funds majority but we believe in the integrity of that building a... |
| `title` | 10/10 (100%) | City Council 3-8-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=SzSDkFqgUto`

- **Vector count**: 12
- **Sample IDs**: `fc-council-SzSDkFqgUto-6`, `fc-council-SzSDkFqgUto-5`, `fc-council-SzSDkFqgUto-10`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 7-25-22 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=SzSDkFqgUto |
| `text` | 10/10 (100%) | you want to make that motion Katie make a motion to reduce the bill by an additi... |
| `title` | 10/10 (100%) | City Council 7-25-22 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_BuSb50_X9Y`

- **Vector count**: 12
- **Sample IDs**: `fc-council-_BuSb50_X9Y-1`, `fc-council-_BuSb50_X9Y-7`, `fc-council-_BuSb50_X9Y-6`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-11-20 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=_BuSb50_X9Y |
| `text` | 10/10 (100%) | you want to say anything about that Aaron yeah all word what we're doing is at b... |
| `title` | 10/10 (100%) | City Council 5-11-20 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=dUbFQDkV-m8`

- **Vector count**: 12
- **Sample IDs**: `fc-council-dUbFQDkV-m8-3`, `fc-council-dUbFQDkV-m8-2`, `fc-council-dUbFQDkV-m8-0`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council Meeting 1-12-15 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=dUbFQDkV-m8 |
| `text` | 10/10 (100%) | m our roads at night were our roads were not even touched until 7 30 the next mo... |
| `title` | 10/10 (100%) | Fairfield City Council Meeting 1-12-15 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.intelligentcommunity.org/tags/ic_indicators`

- **Vector count**: 12
- **Sample IDs**: `icf-948cd862f578e6a1dd5dbc3b-11`, `icf-948cd862f578e6a1dd5dbc3b-6`, `icf-948cd862f578e6a1dd5dbc3b-2`
- **ID patterns**: `orgId-sha24-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | civic-knowledge |
| `filename` | 10/10 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/tags/ic_indic... |
| `org` | 10/10 (100%) | Intelligent Community Forum |
| `source` | 10/10 (100%) | https://www.intelligentcommunity.org/tags/ic_indicators |
| `text` | 10/10 (100%) | Growing your own knowledge workers is one part of the task. Keeping them and att... |
| `type` | 10/10 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=325`

- **Vector count**: 12
- **Sample IDs**: `minutes-325.pdf-chunk-8`, `minutes-325.pdf-chunk-11`, `minutes-325.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-325.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=325 |
| `text` | 10/10 (100%) |  TO ADOPT RESOLUTION NO. 3376 APPROVING AN     AMENDMENT TO THE RESOLUTION AUTHO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=405`

- **Vector count**: 12
- **Sample IDs**: `minutes-405.pdf-chunk-0`, `minutes-405.pdf-chunk-5`, `minutes-405.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-405.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=405 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    June 11, 2018    The Fairfield City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=442`

- **Vector count**: 12
- **Sample IDs**: `minutes-442.pdf-chunk-7`, `minutes-442.pdf-chunk-0`, `minutes-442.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-442.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=442 |
| `text` | 10/10 (100%) | on, Twohill, Anderson, Rasmussen and Halley      TO ADOPT RESOLUTION NO. 3743   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=445`

- **Vector count**: 12
- **Sample IDs**: `minutes-445.pdf-chunk-3`, `minutes-445.pdf-chunk-9`, `minutes-445.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-445.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=445 |
| `text` | 10/10 (100%) | $775,000 GENERAL OBLIGATION CAPITAL   LOAN NOTES, SERIES 2019, AND LEVYING   A T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=483`

- **Vector count**: 12
- **Sample IDs**: `minutes-483.pdf-chunk-1`, `minutes-483.pdf-chunk-5`, `minutes-483.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-483.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=483 |
| `text` | 10/10 (100%) | JULY 21, 2020 PERSONNEL  COMMITTEE MINUTES.    TO APPROVE OPERATING CLAIMS IN TH... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=666`

- **Vector count**: 12
- **Sample IDs**: `minutes-666.pdf-chunk-0`, `minutes-666.pdf-chunk-8`, `minutes-666.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-666.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=666 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SEPTEMBER 12, 2022      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=675`

- **Vector count**: 12
- **Sample IDs**: `minutes-675.pdf-chunk-1`, `minutes-675.pdf-chunk-10`, `minutes-675.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-675.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=675 |
| `text` | 10/10 (100%) | AND TRANSFERS.    TO ACCEPT THE VOLUNTEER COMMITTEE MINUTES.    TO ACCEPT THE DI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=682`

- **Vector count**: 12
- **Sample IDs**: `minutes-682.pdf-chunk-2`, `minutes-682.pdf-chunk-1`, `minutes-682.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-682.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=682 |
| `text` | 10/10 (100%) | YMENT IN THE PARK & REC DEPARTMENT.     Page 2   Minutes  05/08/23  TO APPROVE A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=684`

- **Vector count**: 12
- **Sample IDs**: `minutes-684.pdf-chunk-3`, `minutes-684.pdf-chunk-7`, `minutes-684.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-684.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=684 |
| `text` | 10/10 (100%) | ibility and more.    Fairfield Arts & Convention Center Director Lindsay Bauer r... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=699`

- **Vector count**: 12
- **Sample IDs**: `minutes-699.pdf-chunk-11`, `minutes-699.pdf-chunk-5`, `minutes-699.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-699.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=699 |
| `text` | 10/10 (100%) | AT 9:04 P.M.     Page 7   Minutes  02/12/24    Submitted by:         Rebekah Lop... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=727`

- **Vector count**: 12
- **Sample IDs**: `minutes-727.pdf-chunk-0`, `minutes-727.pdf-chunk-2`, `minutes-727.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-727.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=727 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  AUGUST 26, 2024    The Fairfield City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=743`

- **Vector count**: 12
- **Sample IDs**: `minutes-743.pdf-chunk-10`, `minutes-743.pdf-chunk-7`, `minutes-743.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-743.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=743 |
| `text` | 10/10 (100%) | REPORTS  City Engineer / Public Works Director Melanie Carlson referred to the L... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=747`

- **Vector count**: 12
- **Sample IDs**: `minutes-747.pdf-chunk-9`, `minutes-747.pdf-chunk-6`, `minutes-747.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-747.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=747 |
| `text` | 10/10 (100%) | y, Flournoy, Ham, Kness, Twohill, Estey and Rowe      TO REFER TO WAYS & MEANS C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=755`

- **Vector count**: 12
- **Sample IDs**: `minutes-755.pdf-chunk-11`, `minutes-755.pdf-chunk-5`, `minutes-755.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-755.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=755 |
| `text` | 10/10 (100%) | y Clerk  |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=759`

- **Vector count**: 12
- **Sample IDs**: `minutes-759.pdf-chunk-3`, `minutes-759.pdf-chunk-10`, `minutes-759.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-759.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=759 |
| `text` | 10/10 (100%) |   maintain lake health.    Ed Hipp, Ward 4, commended ad-hoc committee represent... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=765`

- **Vector count**: 12
- **Sample IDs**: `minutes-765.pdf-chunk-2`, `minutes-765.pdf-chunk-3`, `minutes-765.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-765.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=765 |
| `text` | 10/10 (100%) | E  MINUTES FOR JULY 15, 2025 AND AUGUST 19, 2025.    TO GIVE CONSENT OF PARK USE... |

### `https://www.miu.edu/bachelors-in-creative-writing`

- **Vector count**: 12
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-28`, `miu-aHR0cHM6Ly93d3cubWl1-25`, `miu-aHR0cHM6Ly93d3cubWl1-27`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | education |
| `filename` | 10/10 (100%) | Maharishi International University — https://www.miu.edu/bachelors-in-creative-w... |
| `org` | 10/10 (100%) | Maharishi International University |
| `source` | 10/10 (100%) | https://www.miu.edu/bachelors-in-creative-writing |
| `text` | 10/10 (100%) | The table below is the estimate for a semester during 2026-2027 of a typical new... |
| `type` | 10/10 (100%) | community_org |

### `https://www.youtube.com/watch?v=eqC6j_5soZU`

- **Vector count**: 12
- **Sample IDs**: `traction-thursdays-eqC6j_5soZU-9`, `traction-thursdays-eqC6j_5soZU-4`, `traction-thursdays-eqC6j_5soZU-7`
- **ID patterns**: `other` (12)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | economic |
| `filename` | 10/10 (100%) | Traction Thursday — unknown — Traction Thursday \| Ankhbayar Erdenebaatar "Entrep... |
| `org` | 10/10 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 10/10 (100%) | traction-thursdays |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=eqC6j_5soZU |
| `text` | 10/10 (100%) | So this is not a new idea but uh it has to do with kind of a mastermind group uh... |
| `title` | 10/10 (100%) | Traction Thursday \| Ankhbayar Erdenebaatar "Entrepreneur" |
| `type` | 10/10 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9WnYZ6KF6yw`

- **Vector count**: 11
- **Sample IDs**: `fc-council-9WnYZ6KF6yw-7`, `fc-council-9WnYZ6KF6yw-5`, `fc-council-9WnYZ6KF6yw-1`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-8-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=9WnYZ6KF6yw |
| `text` | 10/10 (100%) | do you feel like that's something that could be done tonight on the council leve... |
| `title` | 10/10 (100%) | City Council 2-8-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=A_3Qtd9qbmw`

- **Vector count**: 11
- **Sample IDs**: `fc-council-A_3Qtd9qbmw-8`, `fc-council-A_3Qtd9qbmw-4`, `fc-council-A_3Qtd9qbmw-7`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-22-23 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=A_3Qtd9qbmw |
| `text` | 10/10 (100%) | so we think that the additional funds for the airport project could come out of ... |
| `title` | 10/10 (100%) | City Council 5-22-23 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Z8OCQ8XWiVA`

- **Vector count**: 11
- **Sample IDs**: `fc-council-Z8OCQ8XWiVA-3`, `fc-council-Z8OCQ8XWiVA-6`, `fc-council-Z8OCQ8XWiVA-1`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 12-27-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=Z8OCQ8XWiVA |
| `text` | 10/10 (100%) | that's correct but and i told them at this meeting that that those expenses came... |
| `title` | 10/10 (100%) | City Council 12-27-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=hC8C2ZdeM1E`

- **Vector count**: 11
- **Sample IDs**: `fc-council-hC8C2ZdeM1E-2`, `fc-council-hC8C2ZdeM1E-7`, `fc-council-hC8C2ZdeM1E-5`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 5-27-14 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=hC8C2ZdeM1E |
| `text` | 10/10 (100%) | wow coming up big hurry yeah so far is early this year yeah yes of course you kn... |
| `title` | 10/10 (100%) | Fairfield City Council 5-27-14 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=tHmmmQuBEDQ`

- **Vector count**: 11
- **Sample IDs**: `fc-council-tHmmmQuBEDQ-0`, `fc-council-tHmmmQuBEDQ-1`, `fc-council-tHmmmQuBEDQ-7`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 4-8-24 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=tHmmmQuBEDQ |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 4-8-24  all ri... |
| `title` | 10/10 (100%) | City Council 4-8-24 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=145`

- **Vector count**: 11
- **Sample IDs**: `minutes-145.pdf-chunk-4`, `minutes-145.pdf-chunk-2`, `minutes-145.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-145.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=145 |
| `text` | 10/10 (100%) | OJECTS; AND ADOPTING THE HIGHWAY #34/WEST    BUSINESS URBAN PLAN.    Moved by Re... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=238`

- **Vector count**: 11
- **Sample IDs**: `minutes-238.pdf-chunk-3`, `minutes-238.pdf-chunk-8`, `minutes-238.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-238.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=238 |
| `text` | 10/10 (100%) | SED CRISIS HOME    SITUATION LOCATED AT 804 WEST BURLINGTON.    Moved by Hammes,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=302`

- **Vector count**: 11
- **Sample IDs**: `minutes-302.pdf-chunk-9`, `minutes-302.pdf-chunk-8`, `minutes-302.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-302.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=302 |
| `text` | 10/10 (100%) |    Moved by Rasmussen, seconded by Flournoy   AYES:  Rasmussen, Flournoy, Hamilt... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=397`

- **Vector count**: 11
- **Sample IDs**: `minutes-397.pdf-chunk-2`, `minutes-397.pdf-chunk-8`, `minutes-397.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-397.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=397 |
| `text` | 10/10 (100%) | rson, Hamilton, Rasmussen, Thompson, Gandy and Halley      TO APPROVE THE VINTAG... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=398`

- **Vector count**: 11
- **Sample IDs**: `minutes-398.pdf-chunk-6`, `minutes-398.pdf-chunk-5`, `minutes-398.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-398.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=398 |
| `text` | 10/10 (100%) | E LINCOLN AVENUE URBAN   RENEWAL AREA, IN THE CITY OF FAIRFIELD,   COUNTY OF JEF... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=401`

- **Vector count**: 11
- **Sample IDs**: `minutes-401.pdf-chunk-4`, `minutes-401.pdf-chunk-0`, `minutes-401.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-401.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=401 |
| `text` | 10/10 (100%) |    Moved by Anderson, seconded by Gandy   AYES:  Anderson, Gandy, Thompson, Flou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=422`

- **Vector count**: 11
- **Sample IDs**: `minutes-422.pdf-chunk-10`, `minutes-422.pdf-chunk-6`, `minutes-422.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-422.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=422 |
| `text` | 10/10 (100%) | nderson and Halley      TO ADJOURN AT 7:48 P.M.    Submitted by:      Rebekah Lo... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=409`

- **Vector count**: 11
- **Sample IDs**: `minutes-409.pdf-chunk-2`, `minutes-409.pdf-chunk-7`, `minutes-409.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-409.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=409 |
| `text` | 10/10 (100%) | easure of potential new trash bins and the  additional costs.    Patrick Bosold ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=443`

- **Vector count**: 11
- **Sample IDs**: `minutes-443.pdf-chunk-10`, `minutes-443.pdf-chunk-5`, `minutes-443.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-443.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=443 |
| `text` | 10/10 (100%) | er from the Wayfinding Commission presented an illustration and answered questio... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=444`

- **Vector count**: 11
- **Sample IDs**: `minutes-444.pdf-chunk-7`, `minutes-444.pdf-chunk-9`, `minutes-444.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-444.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=444 |
| `text` | 10/10 (100%) | RKS,   LODGING HOUSES, HOME OCCUPATIONS   & DEMOLITION PERMITS.    Mayor Pro Tem... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=494`

- **Vector count**: 11
- **Sample IDs**: `minutes-494.pdf-chunk-0`, `minutes-494.pdf-chunk-7`, `minutes-494.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-494.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=494 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    FEBRUARY 8, 2021        The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=634`

- **Vector count**: 11
- **Sample IDs**: `minutes-634.pdf-chunk-0`, `minutes-634.pdf-chunk-2`, `minutes-634.pdf-chunk-10`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-634.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=634 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    JUNE 14, 2021      The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=649`

- **Vector count**: 11
- **Sample IDs**: `minutes-649.pdf-chunk-7`, `minutes-649.pdf-chunk-1`, `minutes-649.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-649.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=649 |
| `text` | 10/10 (100%) | rson Halley reported on their  behalf.  Three items were on the agenda; a reimbu... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=652`

- **Vector count**: 11
- **Sample IDs**: `minutes-652.pdf-chunk-10`, `minutes-652.pdf-chunk-1`, `minutes-652.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-652.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=652 |
| `text` | 10/10 (100%) |  IN CLOSED SESSION.    ADJOURNMENT  Moved by Twohill, seconded by Anderson   AYE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=659`

- **Vector count**: 11
- **Sample IDs**: `minutes-659.pdf-chunk-4`, `minutes-659.pdf-chunk-9`, `minutes-659.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-659.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=659 |
| `text` | 10/10 (100%) | osed.    Moved by Twohill, seconded by Rasmussen   AYES:  Twohill, Rasmussen, Fl... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=677`

- **Vector count**: 11
- **Sample IDs**: `minutes-677.pdf-chunk-4`, `minutes-677.pdf-chunk-10`, `minutes-677.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-677.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=677 |
| `text` | 10/10 (100%) | .    Moved by Anderson, seconded by Gandy   AYES:  Anderson, Gandy, Flournoy, Ra... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=674`

- **Vector count**: 11
- **Sample IDs**: `minutes-674.pdf-chunk-6`, `minutes-674.pdf-chunk-0`, `minutes-674.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-674.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=674 |
| `text` | 10/10 (100%) | ed.     Moved by Anderson, seconded by Gandy   AYES:  Anderson, Gandy, Flournoy,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=691`

- **Vector count**: 11
- **Sample IDs**: `minutes-691.pdf-chunk-9`, `minutes-691.pdf-chunk-0`, `minutes-691.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-691.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=691 |
| `text` | 10/10 (100%) | e public a  portion of the trail is closed for safety reasons due STEP 3 work an... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=690`

- **Vector count**: 11
- **Sample IDs**: `minutes-690.pdf-chunk-0`, `minutes-690.pdf-chunk-9`, `minutes-690.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-690.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=690 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  September 11, 2023    The Fairfield Cit... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=71`

- **Vector count**: 11
- **Sample IDs**: `minutes-71.pdf-chunk-8`, `minutes-71.pdf-chunk-5`, `minutes-71.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-71.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=71 |
| `text` | 10/10 (100%) | cil that the state of Iowa had rejected the previous ward  boundaries map that h... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=746`

- **Vector count**: 11
- **Sample IDs**: `minutes-746.pdf-chunk-8`, `minutes-746.pdf-chunk-1`, `minutes-746.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-746.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=746 |
| `text` | 10/10 (100%) |     Page 5   Minutes  12/16/24      TO APPROVE APPPOINTING TIM KUIKEN AND    RAN... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=758`

- **Vector count**: 11
- **Sample IDs**: `minutes-758.pdf-chunk-1`, `minutes-758.pdf-chunk-6`, `minutes-758.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-758.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=758 |
| `text` | 10/10 (100%) | NNEL.    TO APPROVE A LIQUOR LICENSE FOR THE HIDEAWAY  PUB, LLC.    TO APPROVE A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=770`

- **Vector count**: 11
- **Sample IDs**: `minutes-770.pdf-chunk-1`, `minutes-770.pdf-chunk-2`, `minutes-770.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-770.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=770 |
| `text` | 10/10 (100%) | HE AUGUST FINANCE REPORT   AND TRANSFERS.    TO APPROVE THE SEPTEMBER FINANCE RE... |

### `https://www.miu.edu/online-bachelors-specialization-in-cinematic-arts-and-new-media`

- **Vector count**: 11
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-12`, `miu-aHR0cHM6Ly93d3cubWl1-11`, `miu-aHR0cHM6Ly93d3cubWl1-17`
- **ID patterns**: `other` (11)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | education |
| `filename` | 10/10 (100%) | Maharishi International University — https://www.miu.edu/online-bachelors-specia... |
| `org` | 10/10 (100%) | Maharishi International University |
| `source` | 10/10 (100%) | https://www.miu.edu/online-bachelors-specialization-in-cinematic-arts-and-new-me... |
| `text` | 10/10 (100%) | In this project-based course, the faculty will review the work produced by advan... |
| `type` | 10/10 (100%) | community_org |

### `fcsd-board-minutes`

- **Vector count**: 10
- **Sample IDs**: `August_15__2022_Public_Hearing_and_Regular_Boa.pdf-chunk-4`, `August_15__2022_Public_Hearing_and_Regular_Boa.pdf-chunk-1`, `August_15__2022_Public_Hearing_and_Regular_Boa.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | August_15__2022_Public_Hearing_and_Regular_Boa.pdf |
| `source` | 10/10 (100%) | fcsd-board-minutes |
| `text` | 10/10 (100%) | vide a bell system at the High School. Funds will be  used from SAVE/PPEL. Tai W... |
| `type` | 10/10 (100%) | government |

### `https://www.youtube.com/watch?v=2IThDUKDguE`

- **Vector count**: 10
- **Sample IDs**: `fc-council-2IThDUKDguE-5`, `fc-council-2IThDUKDguE-7`, `fc-council-2IThDUKDguE-3`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 5-10-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=2IThDUKDguE |
| `text` | 10/10 (100%) | second um moved by noise second by two hill aaron do you want to say anything di... |
| `title` | 10/10 (100%) | City Council 5-10-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=8Nkanlu9WZs`

- **Vector count**: 10
- **Sample IDs**: `fc-council-8Nkanlu9WZs-9`, `fc-council-8Nkanlu9WZs-8`, `fc-council-8Nkanlu9WZs-1`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 9-10-18 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=8Nkanlu9WZs |
| `text` | 10/10 (100%) | 75 if you were to keep that levy stable over a period of time not only you know ... |
| `title` | 10/10 (100%) | City Council 9-10-18 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CvlQGLrPtII`

- **Vector count**: 10
- **Sample IDs**: `fc-council-CvlQGLrPtII-2`, `fc-council-CvlQGLrPtII-5`, `fc-council-CvlQGLrPtII-9`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Special City Council Meeting 1-19-15 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=CvlQGLrPtII |
| `text` | 10/10 (100%) | 775 million you see the crosswalk projects which is separate but it's something ... |
| `title` | 10/10 (100%) | Special City Council Meeting 1-19-15 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_PlWtxt9xnc`

- **Vector count**: 10
- **Sample IDs**: `fc-council-_PlWtxt9xnc-0`, `fc-council-_PlWtxt9xnc-5`, `fc-council-_PlWtxt9xnc-7`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 2-23-15 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=_PlWtxt9xnc |
| `text` | 10/10 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-23-15  good ... |
| `title` | 10/10 (100%) | City Council 2-23-15 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=he8YX9YX2iw`

- **Vector count**: 10
- **Sample IDs**: `fc-council-he8YX9YX2iw-5`, `fc-council-he8YX9YX2iw-7`, `fc-council-he8YX9YX2iw-3`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — City Council 6-28-21 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=he8YX9YX2iw |
| `text` | 10/10 (100%) | right it's probably enough i don't know how much preparation a chair would need ... |
| `title` | 10/10 (100%) | City Council 6-28-21 |
| `type` | 10/10 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uccUekMOrgM`

- **Vector count**: 10
- **Sample IDs**: `fc-council-uccUekMOrgM-2`, `fc-council-uccUekMOrgM-0`, `fc-council-uccUekMOrgM-7`
- **ID patterns**: `other` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 10/10 (100%) | government |
| `filename` | 10/10 (100%) | City Council Meeting — null — Fairfield City Council 7-8-13 |
| `org` | 10/10 (100%) | Fairfield City Council |
| `publishedAt` | 10/10 (100%) |  |
| `source` | 10/10 (100%) | https://www.youtube.com/watch?v=uccUekMOrgM |
| `text` | 10/10 (100%) | move to approve move by Hamilton to approve and award the bid oh second second b... |
| `title` | 10/10 (100%) | Fairfield City Council 7-8-13 |
| `type` | 10/10 (100%) | council_meeting |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=226`

- **Vector count**: 10
- **Sample IDs**: `minutes-226.pdf-chunk-5`, `minutes-226.pdf-chunk-6`, `minutes-226.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-226.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=226 |
| `text` | 10/10 (100%) | Revolinski, Hammes, Rasmussen, Flournoy, Halley, Hamilton, Ledger-Kalen     Page... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=289`

- **Vector count**: 10
- **Sample IDs**: `minutes-289.pdf-chunk-4`, `minutes-289.pdf-chunk-5`, `minutes-289.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-289.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=289 |
| `text` | 10/10 (100%) |  written or oral objections, so Malloy declared the meeting closed.    Moved by ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=312`

- **Vector count**: 10
- **Sample IDs**: `minutes-312.pdf-chunk-5`, `minutes-312.pdf-chunk-1`, `minutes-312.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-312.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=312 |
| `text` | 10/10 (100%) | ATEMENT SCHEDULE OF ASSESSMENTS.    Moved by Revolinski, seconded by Flournoy   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=335`

- **Vector count**: 10
- **Sample IDs**: `minutes-335.pdf-chunk-3`, `minutes-335.pdf-chunk-9`, `minutes-335.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-335.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=335 |
| `text` | 10/10 (100%) | S:  Flournoy, Halley, Rasmussen, Revolinski   NAYS:  Anderson, Hamilton      TO ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=387`

- **Vector count**: 10
- **Sample IDs**: `minutes-387.pdf-chunk-5`, `minutes-387.pdf-chunk-9`, `minutes-387.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-387.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=387 |
| `text` | 10/10 (100%) | Malloy announced this was the time and date set for a public hearing of public i... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=464`

- **Vector count**: 10
- **Sample IDs**: `minutes-464.pdf-chunk-6`, `minutes-464.pdf-chunk-1`, `minutes-464.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-464.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=464 |
| `text` | 10/10 (100%) | FIELD, STATE OF IOWA.         Page 5  Minutes  12/16/19    MAYOR REPORT  Mayor M... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=473`

- **Vector count**: 10
- **Sample IDs**: `minutes-473.pdf-chunk-5`, `minutes-473.pdf-chunk-6`, `minutes-473.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-473.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=473 |
| `text` | 10/10 (100%) | URES FOR CONTAGIOUS DISEASE.    MAYOR REPORT  Mayor Boyer stated she would like ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=496`

- **Vector count**: 10
- **Sample IDs**: `minutes-496.pdf-chunk-1`, `minutes-496.pdf-chunk-2`, `minutes-496.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-496.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=496 |
| `text` | 10/10 (100%) | Y FINANCE REPORT.    TO ADOPT RESOLUTION NO. 3920 AUTHORIZING  FUND TRANSFERS.  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=495`

- **Vector count**: 10
- **Sample IDs**: `minutes-495.pdf-chunk-7`, `minutes-495.pdf-chunk-6`, `minutes-495.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-495.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=495 |
| `text` | 10/10 (100%) |  public hearing was closed.    Moved by Halley, seconded by Flournoy   AYES:  Ha... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=491`

- **Vector count**: 10
- **Sample IDs**: `minutes-491.pdf-chunk-2`, `minutes-491.pdf-chunk-4`, `minutes-491.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-491.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=491 |
| `text` | 10/10 (100%) | ILA.    TO APPROVE A LIQUOR LICENSE FOR   LA HACIENDA DE MARIJO.    TO APPROVE A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=642`

- **Vector count**: 10
- **Sample IDs**: `minutes-642.pdf-chunk-7`, `minutes-642.pdf-chunk-2`, `minutes-642.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-642.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=642 |
| `text` | 10/10 (100%) | CARNEGIE MUSEUM  BOARD TO REPLACE STAN PLUM.    Mayor Boyer requested Council co... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=655`

- **Vector count**: 10
- **Sample IDs**: `minutes-655.pdf-chunk-8`, `minutes-655.pdf-chunk-6`, `minutes-655.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-655.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=655 |
| `text` | 10/10 (100%) | tey and Anderson      TO APPROVE THE PURCHASE OF   EQUIPMENT IN THE WATER DEPART... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=653`

- **Vector count**: 10
- **Sample IDs**: `minutes-653.pdf-chunk-3`, `minutes-653.pdf-chunk-5`, `minutes-653.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-653.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=653 |
| `text` | 10/10 (100%) | TAL ASSETS /    IMPROVEMENTS PLAN.    Moved by Gandy, seconded by Flournoy   AYE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=680`

- **Vector count**: 10
- **Sample IDs**: `minutes-680.pdf-chunk-7`, `minutes-680.pdf-chunk-3`, `minutes-680.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-680.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=680 |
| `text` | 10/10 (100%) | BE ISSUED, INCURRED     BY THE CITY IN CONNECTION WITH THE AMENDED     NORTH CAM... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=685`

- **Vector count**: 10
- **Sample IDs**: `minutes-685.pdf-chunk-5`, `minutes-685.pdf-chunk-8`, `minutes-685.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-685.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=685 |
| `text` | 10/10 (100%) |  infers there is a  boundary survey, in which he states he could not find; the p... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=678`

- **Vector count**: 10
- **Sample IDs**: `minutes-678.pdf-chunk-6`, `minutes-678.pdf-chunk-1`, `minutes-678.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-678.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=678 |
| `text` | 10/10 (100%) | ALFORD, IA    IN THE AMOUNT OF $109,300.00.    Moved by Anderson, seconded by Tw... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=679`

- **Vector count**: 10
- **Sample IDs**: `minutes-679.pdf-chunk-3`, `minutes-679.pdf-chunk-5`, `minutes-679.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-679.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=679 |
| `text` | 10/10 (100%) |  Mickunas presented the Library’s annual report.    RESOLUTIONS, ACTION ITEMS & ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=697`

- **Vector count**: 10
- **Sample IDs**: `minutes-697.pdf-chunk-0`, `minutes-697.pdf-chunk-1`, `minutes-697.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-697.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=697 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  January 8, 2024    The Fairfield City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=694`

- **Vector count**: 10
- **Sample IDs**: `minutes-694.pdf-chunk-4`, `minutes-694.pdf-chunk-8`, `minutes-694.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-694.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=694 |
| `text` | 10/10 (100%) | LOPMENT AREA AND THAT THE REHABILITATION,   CONSERVATION, REDEVELOPMENT, DEVELOP... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=695`

- **Vector count**: 10
- **Sample IDs**: `minutes-695.pdf-chunk-6`, `minutes-695.pdf-chunk-2`, `minutes-695.pdf-chunk-9`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-695.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=695 |
| `text` | 10/10 (100%) | wohill, Ham and Rowe    TO PASS THROUGH THE FIRST READING OF ORDINANCE    NO. 12... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=716`

- **Vector count**: 10
- **Sample IDs**: `minutes-716.pdf-chunk-0`, `minutes-716.pdf-chunk-6`, `minutes-716.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-716.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=716 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  MARCH 25, 2024      The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=721`

- **Vector count**: 10
- **Sample IDs**: `minutes-721.pdf-chunk-2`, `minutes-721.pdf-chunk-4`, `minutes-721.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-721.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=721 |
| `text` | 10/10 (100%) | Hazard Mitigation  Planner Gail Thomas and asked for assistance in getting a sur... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=717`

- **Vector count**: 10
- **Sample IDs**: `minutes-717.pdf-chunk-5`, `minutes-717.pdf-chunk-2`, `minutes-717.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-717.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=717 |
| `text` | 10/10 (100%) | bjections, so the public hearing was closed.    Moved by Flournoy, seconded Gand... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=720`

- **Vector count**: 10
- **Sample IDs**: `minutes-720.pdf-chunk-9`, `minutes-720.pdf-chunk-4`, `minutes-720.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-720.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=720 |
| `text` | 10/10 (100%) | d Rowe    TO ADJOURN AT 8:13 P.M.    Submitted by:         Rebekah Loper  City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=740`

- **Vector count**: 10
- **Sample IDs**: `minutes-740.pdf-chunk-9`, `minutes-740.pdf-chunk-6`, `minutes-740.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-740.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=740 |
| `text` | 10/10 (100%) | rsday, September 12 th  and Friday, September 13 th  for staff development; he a... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=744`

- **Vector count**: 10
- **Sample IDs**: `minutes-744.pdf-chunk-0`, `minutes-744.pdf-chunk-3`, `minutes-744.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-744.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=744 |
| `text` | 10/10 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  NOVEMBER 12, 2024    The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=750`

- **Vector count**: 10
- **Sample IDs**: `minutes-750.pdf-chunk-7`, `minutes-750.pdf-chunk-1`, `minutes-750.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-750.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=750 |
| `text` | 10/10 (100%) | ES:  Gandy, Kness, Ham, Rowe, Flournoy, Estey and Twohill      TO REFER BUILDING... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=757`

- **Vector count**: 10
- **Sample IDs**: `minutes-757.pdf-chunk-1`, `minutes-757.pdf-chunk-9`, `minutes-757.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (10)
- **Vectors profiled for metadata**: 10

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 10/10 (100%) | minutes-757.pdf |
| `source` | 10/10 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=757 |
| `text` | 10/10 (100%) |  ACCEPT THE LIBRARY BOARD MINUTES.    TO ADOPT RESOLUTION NO. 4368 AUTHORIZING  ... |

### `golden_magnolia_sanctuary`

- **Vector count**: 9
- **Sample IDs**: `02_volunteer.pdf-chunk-4`, `02_volunteer.pdf-chunk-1`, `02_volunteer.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | community_organizations |
| `filename` | 9/9 (100%) | 02_volunteer.pdf |
| `source` | 9/9 (100%) | golden_magnolia_sanctuary |
| `sourceUrl` | 9/9 (100%) | https://www.goldenmagnoliasanctuary.org |
| `subcategory` | 9/9 (100%) | golden_magnolia_sanctuary |
| `text` | 9/9 (100%) | nteer — Golden Magnolia Sanctuary https://www.goldenmagnoliasanctuary.org/volunt... |

### `https://www.youtube.com/watch?v=02oCsOj4j1M`

- **Vector count**: 9
- **Sample IDs**: `fc-council-02oCsOj4j1M-7`, `fc-council-02oCsOj4j1M-8`, `fc-council-02oCsOj4j1M-5`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 9-13-21 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=02oCsOj4j1M |
| `text` | 9/9 (100%) | 3 um budget includes engineering so okay that's move to approved second move by ... |
| `title` | 9/9 (100%) | City Council 9-13-21 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=1VIPi-GfAFc`

- **Vector count**: 9
- **Sample IDs**: `fc-council-1VIPi-GfAFc-3`, `fc-council-1VIPi-GfAFc-2`, `fc-council-1VIPi-GfAFc-0`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 10-26-20 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=1VIPi-GfAFc |
| `text` | 9/9 (100%) | 150-2 to issue debt to reimburse the city for certain original expenditures paid... |
| `title` | 9/9 (100%) | City Council 10-26-20 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=-Eo5Zt1Q_Lc`

- **Vector count**: 9
- **Sample IDs**: `fc-council--Eo5Zt1Q_Lc-8`, `fc-council--Eo5Zt1Q_Lc-0`, `fc-council--Eo5Zt1Q_Lc-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 3-28-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=-Eo5Zt1Q_Lc |
| `text` | 9/9 (100%) | we spent almost an hour talking about planning and zoning and permits that was a... |
| `title` | 9/9 (100%) | City Council 3-28-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=5t9jbg0r9R0`

- **Vector count**: 9
- **Sample IDs**: `fc-council-5t9jbg0r9R0-7`, `fc-council-5t9jbg0r9R0-3`, `fc-council-5t9jbg0r9R0-8`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 9-22-14 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=5t9jbg0r9R0 |
| `text` | 9/9 (100%) | 89 which was the sewer usage minus her usual and customary monthly sewer charge ... |
| `title` | 9/9 (100%) | City Council 9-22-14 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=4x8OeX8T1pk`

- **Vector count**: 9
- **Sample IDs**: `fc-council-4x8OeX8T1pk-3`, `fc-council-4x8OeX8T1pk-6`, `fc-council-4x8OeX8T1pk-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-28-23 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=4x8OeX8T1pk |
| `text` | 9/9 (100%) | on our finance side you have a General Revenue total and expenditures and you'll... |
| `title` | 9/9 (100%) | City Council 8-28-23 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=63upiLpHZ2I`

- **Vector count**: 9
- **Sample IDs**: `fc-council-63upiLpHZ2I-7`, `fc-council-63upiLpHZ2I-8`, `fc-council-63upiLpHZ2I-1`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 6-13-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=63upiLpHZ2I |
| `text` | 9/9 (100%) | fy 21 fy 22 fiscal year at least we normally spend all the lost money so that wa... |
| `title` | 9/9 (100%) | City Council 6-13-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CFYSeExB4hE`

- **Vector count**: 9
- **Sample IDs**: `fc-council-CFYSeExB4hE-6`, `fc-council-CFYSeExB4hE-2`, `fc-council-CFYSeExB4hE-0`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-13-18 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=CFYSeExB4hE |
| `text` | 9/9 (100%) | and afternoons from 3 to 4 so this is very similar to what we did over on D Stre... |
| `title` | 9/9 (100%) | City Council 8-13-18 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=JLxl1h9FvjY`

- **Vector count**: 9
- **Sample IDs**: `fc-council-JLxl1h9FvjY-4`, `fc-council-JLxl1h9FvjY-0`, `fc-council-JLxl1h9FvjY-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 9-26-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=JLxl1h9FvjY |
| `text` | 9/9 (100%) | 85 rather point three three seven three four seven seven five yeah based off bas... |
| `title` | 9/9 (100%) | City Council 9-26-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=L61dm-qtzjU`

- **Vector count**: 9
- **Sample IDs**: `fc-council-L61dm-qtzjU-8`, `fc-council-L61dm-qtzjU-0`, `fc-council-L61dm-qtzjU-4`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 7-8-24 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=L61dm-qtzjU |
| `text` | 9/9 (100%) | so the truck was uh traveling Westward yeah it was traveling Westward it was tur... |
| `title` | 9/9 (100%) | City Council 7-8-24 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=MlAl2gXU4hk`

- **Vector count**: 9
- **Sample IDs**: `fc-council-MlAl2gXU4hk-6`, `fc-council-MlAl2gXU4hk-1`, `fc-council-MlAl2gXU4hk-0`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 10-24-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=MlAl2gXU4hk |
| `text` | 9/9 (100%) | and I just want to also mention just the vision of the original two parking lots... |
| `title` | 9/9 (100%) | City Council 10-24-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=RgKi5nN45zo`

- **Vector count**: 9
- **Sample IDs**: `fc-council-RgKi5nN45zo-5`, `fc-council-RgKi5nN45zo-3`, `fc-council-RgKi5nN45zo-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 9-9-24 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=RgKi5nN45zo |
| `text` | 9/9 (100%) | m. uh Penny uh V vasc I forget how to say her last name but she's the um represe... |
| `title` | 9/9 (100%) | City Council 9-9-24 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=hGWX395Znas`

- **Vector count**: 9
- **Sample IDs**: `fc-council-hGWX395Znas-2`, `fc-council-hGWX395Znas-7`, `fc-council-hGWX395Znas-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-8-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=hGWX395Znas |
| `text` | 9/9 (100%) | o. t maps and then hopefully google and then hopefully people can get to lamson ... |
| `title` | 9/9 (100%) | City Council 8-8-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=j3Ah7XB5Gk0`

- **Vector count**: 9
- **Sample IDs**: `fc-council-j3Ah7XB5Gk0-3`, `fc-council-j3Ah7XB5Gk0-4`, `fc-council-j3Ah7XB5Gk0-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 1-9-23 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=j3Ah7XB5Gk0 |
| `text` | 9/9 (100%) | yeah so in talking with Terry today and earlier it turns out that that's not inf... |
| `title` | 9/9 (100%) | City Council 1-9-23 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=pcz6ezbwQGQ`

- **Vector count**: 9
- **Sample IDs**: `fc-council-pcz6ezbwQGQ-5`, `fc-council-pcz6ezbwQGQ-2`, `fc-council-pcz6ezbwQGQ-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-24-20 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=pcz6ezbwQGQ |
| `text` | 9/9 (100%) | 34 concerning prohibited parking to additionally limit and restrict various form... |
| `title` | 9/9 (100%) | City Council 8-24-20 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=pyed3ibK4ow`

- **Vector count**: 9
- **Sample IDs**: `fc-council-pyed3ibK4ow-7`, `fc-council-pyed3ibK4ow-1`, `fc-council-pyed3ibK4ow-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 7-24-17 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=pyed3ibK4ow |
| `text` | 9/9 (100%) | so they have approved the higher loan amount the only thing that we're working w... |
| `title` | 9/9 (100%) | City Council 7-24-17 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=tQ3s_stdBO4`

- **Vector count**: 9
- **Sample IDs**: `fc-council-tQ3s_stdBO4-2`, `fc-council-tQ3s_stdBO4-0`, `fc-council-tQ3s_stdBO4-1`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — Fairfield City Council 5-28-13 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=tQ3s_stdBO4 |
| `text` | 9/9 (100%) | 8 million of planning and development srf loan we would be taking which of cours... |
| `title` | 9/9 (100%) | Fairfield City Council 5-28-13 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=syST7SKvPzg`

- **Vector count**: 9
- **Sample IDs**: `fc-council-syST7SKvPzg-4`, `fc-council-syST7SKvPzg-6`, `fc-council-syST7SKvPzg-5`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 7-27-20 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=syST7SKvPzg |
| `text` | 9/9 (100%) | 56 regulating one-way streets this is around washington school melanie yeah um s... |
| `title` | 9/9 (100%) | City Council 7-27-20 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wP-S-nSmw64`

- **Vector count**: 9
- **Sample IDs**: `fc-council-wP-S-nSmw64-0`, `fc-council-wP-S-nSmw64-2`, `fc-council-wP-S-nSmw64-1`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 3-14-22 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=wP-S-nSmw64 |
| `text` | 9/9 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 3-14-22  i'm g... |
| `title` | 9/9 (100%) | City Council 3-14-22 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wObNYlDv6Zk`

- **Vector count**: 9
- **Sample IDs**: `fc-council-wObNYlDv6Zk-6`, `fc-council-wObNYlDv6Zk-3`, `fc-council-wObNYlDv6Zk-8`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 6-26-23 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=wObNYlDv6Zk |
| `text` | 9/9 (100%) | this consists of the high voltage 69 000 bolts up to 345 000 volt transmission p... |
| `title` | 9/9 (100%) | City Council 6-26-23 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=zX0pidnODOU`

- **Vector count**: 9
- **Sample IDs**: `fc-council-zX0pidnODOU-2`, `fc-council-zX0pidnODOU-5`, `fc-council-zX0pidnODOU-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | government |
| `filename` | 9/9 (100%) | City Council Meeting — null — City Council 8-26-24 |
| `org` | 9/9 (100%) | Fairfield City Council |
| `publishedAt` | 9/9 (100%) |  |
| `source` | 9/9 (100%) | https://www.youtube.com/watch?v=zX0pidnODOU |
| `text` | 9/9 (100%) | to 11:45 so if you've got a pickup load at least you can get rid of that here in... |
| `title` | 9/9 (100%) | City Council 8-26-24 |
| `type` | 9/9 (100%) | council_meeting |

### `https://www.greaterjeffersoncountyfoundation.org/scholarships`

- **Vector count**: 9
- **Sample IDs**: `gjcf-aHR0cHM6Ly93d3cuZ3Jl-8`, `gjcf-aHR0cHM6Ly93d3cuZ3Jl-6`, `gjcf-aHR0cHM6Ly93d3cuZ3Jl-4`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | civic |
| `filename` | 9/9 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `org` | 9/9 (100%) | Greater Jefferson County Foundation |
| `source` | 9/9 (100%) | https://www.greaterjeffersoncountyfoundation.org/scholarships |
| `text` | 9/9 (100%) | Mark Shafer was a dedicated educator in the Fairfield Community School District ... |
| `type` | 9/9 (100%) | community_org |

### `https://www.jeffersoncountyhealthcenter.org/patients/confidentiality`

- **Vector count**: 9
- **Sample IDs**: `jchc-aHR0cHM6Ly93d3cuamVm-2`, `jchc-aHR0cHM6Ly93d3cuamVm-3`, `jchc-aHR0cHM6Ly93d3cuamVm-7`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | health |
| `filename` | 9/9 (100%) | Jefferson County Health Center — https://www.jeffersoncountyhealthcenter.org/pat... |
| `org` | 9/9 (100%) | Jefferson County Health Center |
| `source` | 9/9 (100%) | https://www.jeffersoncountyhealthcenter.org/patients/confidentiality |
| `text` | 9/9 (100%) | * To People Assisting in Your Care . JCHC will only disclose medical information... |
| `type` | 9/9 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=122`

- **Vector count**: 9
- **Sample IDs**: `minutes-122.pdf-chunk-1`, `minutes-122.pdf-chunk-8`, `minutes-122.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-122.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=122 |
| `text` | 9/9 (100%) |     STORE.      TO APPROVE A LIQUOR LICENSE FOR    FLAMINGO LANES.      TO APPRO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=192`

- **Vector count**: 9
- **Sample IDs**: `minutes-192.pdf-chunk-1`, `minutes-192.pdf-chunk-4`, `minutes-192.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-192.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=192 |
| `text` | 9/9 (100%) | appeared before the City Council requesting that January be declared as Radon Ac... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=237`

- **Vector count**: 9
- **Sample IDs**: `minutes-237.pdf-chunk-8`, `minutes-237.pdf-chunk-7`, `minutes-237.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-237.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=237 |
| `text` | 9/9 (100%) | urnoy, Ledger-Kalen, Revolinski      TO ENTER BACK INTO OPEN     SESSION AT 8:58... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=252`

- **Vector count**: 9
- **Sample IDs**: `minutes-252.pdf-chunk-0`, `minutes-252.pdf-chunk-4`, `minutes-252.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-252.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=252 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    January 26, 2015      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=305`

- **Vector count**: 9
- **Sample IDs**: `minutes-305.pdf-chunk-2`, `minutes-305.pdf-chunk-6`, `minutes-305.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-305.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=305 |
| `text` | 9/9 (100%) | INANCES  Moved by Hammes, seconded by Ledger-Kalen   AYES:  Hammes, Ledger-Kalen... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=303`

- **Vector count**: 9
- **Sample IDs**: `minutes-303.pdf-chunk-8`, `minutes-303.pdf-chunk-0`, `minutes-303.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-303.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=303 |
| `text` | 9/9 (100%) |  Flournoy, Hammes, Halley, Revolinski, Rasmussen, Ledger-Kalen      TO ADJOURN A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=318`

- **Vector count**: 9
- **Sample IDs**: `minutes-318.pdf-chunk-6`, `minutes-318.pdf-chunk-4`, `minutes-318.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-318.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=318 |
| `text` | 9/9 (100%) | al to M1 Limited Manufacturing.  No one spoke for or against this rezoning  so t... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=331`

- **Vector count**: 9
- **Sample IDs**: `minutes-331.pdf-chunk-7`, `minutes-331.pdf-chunk-4`, `minutes-331.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-331.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=331 |
| `text` | 9/9 (100%) | DOPT RESOLUTION NO. 3392 FOR LAND    ACQUISITION FOR LAND AT 2115 LIBERTYVILLE  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=347`

- **Vector count**: 9
- **Sample IDs**: `minutes-347.pdf-chunk-1`, `minutes-347.pdf-chunk-3`, `minutes-347.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-347.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=347 |
| `text` | 9/9 (100%) | N NO. 3459 APPROVING EMPLOYMENT    IN THE PARK & RECREATION DEPARTMENT.      TO ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=357`

- **Vector count**: 9
- **Sample IDs**: `minutes-357.pdf-chunk-3`, `minutes-357.pdf-chunk-1`, `minutes-357.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-357.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=357 |
| `text` | 9/9 (100%) | CIATES,    INC., ENGINEERS & SURVEYORS OF FAIRFIELD, IA    FOR SANITARY SEWER RE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=342`

- **Vector count**: 9
- **Sample IDs**: `minutes-342.pdf-chunk-1`, `minutes-342.pdf-chunk-6`, `minutes-342.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-342.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=342 |
| `text` | 9/9 (100%) | ACIENDA    DE MARJO.      TO APPROVE A LIQUOR LICENSE FOR FLAMINGO    LANES.    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=341`

- **Vector count**: 9
- **Sample IDs**: `minutes-341.pdf-chunk-6`, `minutes-341.pdf-chunk-2`, `minutes-341.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-341.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=341 |
| `text` | 9/9 (100%) | oup commission charges from Two Rivers Insurance Company for health insurance.  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=386`

- **Vector count**: 9
- **Sample IDs**: `minutes-386.pdf-chunk-0`, `minutes-386.pdf-chunk-5`, `minutes-386.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-386.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=386 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    October 23, 2017      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=399`

- **Vector count**: 9
- **Sample IDs**: `minutes-399.pdf-chunk-7`, `minutes-399.pdf-chunk-5`, `minutes-399.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-399.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=399 |
| `text` | 9/9 (100%) | RE-APPOINT TERRY COCHRAN, TERRI KNESS,    AND RON MULLEN TO THE PARK & RECREATIO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=402`

- **Vector count**: 9
- **Sample IDs**: `minutes-402.pdf-chunk-0`, `minutes-402.pdf-chunk-2`, `minutes-402.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-402.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=402 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    April 23, 2018      The Fairfield Cit... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=406`

- **Vector count**: 9
- **Sample IDs**: `minutes-406.pdf-chunk-3`, `minutes-406.pdf-chunk-4`, `minutes-406.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-406.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=406 |
| `text` | 9/9 (100%) | 6/25/18    Moved by Anderson, seconded by Gandy   AYES: Anderson, Gandy, Hamilto... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=423`

- **Vector count**: 9
- **Sample IDs**: `minutes-423.pdf-chunk-0`, `minutes-423.pdf-chunk-7`, `minutes-423.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-423.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=423 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  September 10, 2018      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=404`

- **Vector count**: 9
- **Sample IDs**: `minutes-404.pdf-chunk-5`, `minutes-404.pdf-chunk-4`, `minutes-404.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-404.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=404 |
| `text` | 9/9 (100%) | Hamilton, Anderson, Flournoy, Halley and Gandy      TO ADOPT RESOLUTION NO. 3609... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=436`

- **Vector count**: 9
- **Sample IDs**: `minutes-436.pdf-chunk-1`, `minutes-436.pdf-chunk-7`, `minutes-436.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-436.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=436 |
| `text` | 9/9 (100%) |  3714  APPROVING EMPLOYMENT IN THE  PARK & RECREATION DEPARTMENT.    TO APPROVE ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=434`

- **Vector count**: 9
- **Sample IDs**: `minutes-434.pdf-chunk-2`, `minutes-434.pdf-chunk-0`, `minutes-434.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-434.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=434 |
| `text` | 9/9 (100%) |  Center to request  closure of N Main Street from Hempstead Ave. to Briggs Ave. ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=429`

- **Vector count**: 9
- **Sample IDs**: `minutes-429.pdf-chunk-6`, `minutes-429.pdf-chunk-0`, `minutes-429.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-429.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=429 |
| `text` | 9/9 (100%) | ON NO. 3696  INSTITUTING PROCEEDINGS TO TAKE  ADDITIONAL ACTION FOR THE  AUTHORI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=426`

- **Vector count**: 9
- **Sample IDs**: `minutes-426.pdf-chunk-3`, `minutes-426.pdf-chunk-4`, `minutes-426.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-426.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=426 |
| `text` | 9/9 (100%) |  (EVERGREEN CEMETARY)    Moved by Anderson, seconded by Gandy   AYES:  Anderson,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=428`

- **Vector count**: 9
- **Sample IDs**: `minutes-428.pdf-chunk-8`, `minutes-428.pdf-chunk-2`, `minutes-428.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-428.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=428 |
| `text` | 9/9 (100%) | PORT.    ADJOURNMENT  Moved by Hamilton, seconded by Anderson   AYES:  Hamilton,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=446`

- **Vector count**: 9
- **Sample IDs**: `minutes-446.pdf-chunk-6`, `minutes-446.pdf-chunk-1`, `minutes-446.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-446.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=446 |
| `text` | 9/9 (100%) | hompson, Gandy, Flournoy, Twohill and Halley      TO APPROVE A JOINT AGREEMENT  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=449`

- **Vector count**: 9
- **Sample IDs**: `minutes-449.pdf-chunk-1`, `minutes-449.pdf-chunk-6`, `minutes-449.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-449.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=449 |
| `text` | 9/9 (100%) | . 3765 FOR   EMPLOYMENT IN THE POLICE DEPARTMENT.    TO ADOPT RESOLUTION NO. 376... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=474`

- **Vector count**: 9
- **Sample IDs**: `minutes-474.pdf-chunk-0`, `minutes-474.pdf-chunk-7`, `minutes-474.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-474.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=474 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    April 27, 2020    The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=477`

- **Vector count**: 9
- **Sample IDs**: `minutes-477.pdf-chunk-2`, `minutes-477.pdf-chunk-1`, `minutes-477.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-477.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=477 |
| `text` | 9/9 (100%) | Lange submitted a request for permission of the Jefferson County Fair Parade Rou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=475`

- **Vector count**: 9
- **Sample IDs**: `minutes-475.pdf-chunk-6`, `minutes-475.pdf-chunk-4`, `minutes-475.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-475.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=475 |
| `text` | 9/9 (100%) |  metropolitans and named Fairfield #35  out of approximately 550 cities.    Mayo... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=482`

- **Vector count**: 9
- **Sample IDs**: `minutes-482.pdf-chunk-7`, `minutes-482.pdf-chunk-1`, `minutes-482.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-482.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=482 |
| `text` | 9/9 (100%) | lournoy, Ham, Twohill, Halley and Rasmussen       CITY COUNCIL WILL REVISIT THE ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=484`

- **Vector count**: 9
- **Sample IDs**: `minutes-484.pdf-chunk-6`, `minutes-484.pdf-chunk-2`, `minutes-484.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-484.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=484 |
| `text` | 9/9 (100%) |  CODE OF IOWA, AND   PROVIDING FOR A METHOD OF PAYMENT OF THE NOTES.    Moved by... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=48`

- **Vector count**: 9
- **Sample IDs**: `minutes-48.pdf-chunk-4`, `minutes-48.pdf-chunk-8`, `minutes-48.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-48.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=48 |
| `text` | 9/9 (100%) | 011.    Moved by Hamilton, seconded by Mottet   AYES:  Hamilton, Mottet, Adam, S... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=490`

- **Vector count**: 9
- **Sample IDs**: `minutes-490.pdf-chunk-3`, `minutes-490.pdf-chunk-6`, `minutes-490.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-490.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=490 |
| `text` | 9/9 (100%) | EPORT.    Moved by Flournoy, seconded by Rasmussen   AYES:  Flournoy, Rasmussen,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=497`

- **Vector count**: 9
- **Sample IDs**: `minutes-497.pdf-chunk-2`, `minutes-497.pdf-chunk-5`, `minutes-497.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-497.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=497 |
| `text` | 9/9 (100%) | nounced this was the date and time set for a public hearing on the matter of the... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=498`

- **Vector count**: 9
- **Sample IDs**: `minutes-498.pdf-chunk-2`, `minutes-498.pdf-chunk-0`, `minutes-498.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-498.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=498 |
| `text` | 9/9 (100%) | Jublilee Celebration on Labor Day weekend.    Moved by Flournoy, seconded by Two... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=645`

- **Vector count**: 9
- **Sample IDs**: `minutes-645.pdf-chunk-8`, `minutes-645.pdf-chunk-2`, `minutes-645.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-645.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=645 |
| `text` | 9/9 (100%) | FOR A SPRING    REFERENDUM ENABLING THE CITY TO    BOND FOR A NEW FIRE STATION. ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=640`

- **Vector count**: 9
- **Sample IDs**: `minutes-640.pdf-chunk-8`, `minutes-640.pdf-chunk-6`, `minutes-640.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-640.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=640 |
| `text` | 9/9 (100%) |  Moved by Twohill, seconded by Flournoy   AYES:  Twohill, Flournoy, Rasmussen, H... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=657`

- **Vector count**: 9
- **Sample IDs**: `minutes-657.pdf-chunk-8`, `minutes-657.pdf-chunk-3`, `minutes-657.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-657.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=657 |
| `text` | 9/9 (100%) | AT 8:39 P.M.    Submitted by:         Rebekah Loper   City Clerk  |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=651`

- **Vector count**: 9
- **Sample IDs**: `minutes-651.pdf-chunk-4`, `minutes-651.pdf-chunk-2`, `minutes-651.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-651.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=651 |
| `text` | 9/9 (100%) | L) FOR YEARS TWO   & THREE FOR THE SUSTAINABILITY  COORDINATOR.    Moved by Flou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=654`

- **Vector count**: 9
- **Sample IDs**: `minutes-654.pdf-chunk-2`, `minutes-654.pdf-chunk-5`, `minutes-654.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-654.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=654 |
| `text` | 9/9 (100%) |  ADOPT RESOLUTION NO. 4038  APPROVING EMPLOYMENT OF   LYLE HANNES AS INTERIM FIR... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=664`

- **Vector count**: 9
- **Sample IDs**: `minutes-664.pdf-chunk-4`, `minutes-664.pdf-chunk-3`, `minutes-664.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-664.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=664 |
| `text` | 9/9 (100%) | EVISION TO THE REGIONAL     PLANNING ADMINISTRATION 15 –    TRANSPORTATION IMPRO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=661`

- **Vector count**: 9
- **Sample IDs**: `minutes-661.pdf-chunk-0`, `minutes-661.pdf-chunk-1`, `minutes-661.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-661.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=661 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  June 27, 2022    The Fairfield City Cou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=683`

- **Vector count**: 9
- **Sample IDs**: `minutes-683.pdf-chunk-2`, `minutes-683.pdf-chunk-4`, `minutes-683.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-683.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=683 |
| `text` | 9/9 (100%) | tivities, as well as a building work progress update.    RESOLUTIONS, ACTION ITE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=686`

- **Vector count**: 9
- **Sample IDs**: `minutes-686.pdf-chunk-1`, `minutes-686.pdf-chunk-6`, `minutes-686.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-686.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=686 |
| `text` | 9/9 (100%) | N    FOR PARK USE PERMIT FOR MAVERICK    MEYER ON AUGUST 12, 2023 FROM     1:30 ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=687`

- **Vector count**: 9
- **Sample IDs**: `minutes-687.pdf-chunk-6`, `minutes-687.pdf-chunk-1`, `minutes-687.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-687.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=687 |
| `text` | 9/9 (100%) | al reading of Ordinance No. 1226 proposing a  franchise agreement with ITC Midwe... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=688`

- **Vector count**: 9
- **Sample IDs**: `minutes-688.pdf-chunk-0`, `minutes-688.pdf-chunk-7`, `minutes-688.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-688.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=688 |
| `text` | 9/9 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  August 14, 2023    The Fairfield City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=692`

- **Vector count**: 9
- **Sample IDs**: `minutes-692.pdf-chunk-2`, `minutes-692.pdf-chunk-4`, `minutes-692.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-692.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=692 |
| `text` | 9/9 (100%) | ANDLER TO DISTRIBUTE    PARTICIPANT PACKET FOR SEWER INTERIM    FINANCING FOR ST... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=689`

- **Vector count**: 9
- **Sample IDs**: `minutes-689.pdf-chunk-1`, `minutes-689.pdf-chunk-8`, `minutes-689.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-689.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=689 |
| `text` | 9/9 (100%) | ning session summary and their fiscal year 2023 annual report.    RESOLUTIONS, A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=719`

- **Vector count**: 9
- **Sample IDs**: `minutes-719.pdf-chunk-5`, `minutes-719.pdf-chunk-4`, `minutes-719.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-719.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=719 |
| `text` | 9/9 (100%) | the public hearing was closed.    Moved by Kness, seconded Twohill   AYES:  Knes... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=722`

- **Vector count**: 9
- **Sample IDs**: `minutes-722.pdf-chunk-8`, `minutes-722.pdf-chunk-1`, `minutes-722.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-722.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=722 |
| `text` | 9/9 (100%) |  Rowe    TO ADJOURN AT 8:10 P.M.    Submitted by:         Rebekah Loper  City Cl... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=741`

- **Vector count**: 9
- **Sample IDs**: `minutes-741.pdf-chunk-3`, `minutes-741.pdf-chunk-1`, `minutes-741.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-741.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=741 |
| `text` | 9/9 (100%) | ll       TO APPROVE THE STATUTORY PARTNERSHIP   AGREEMENT WITH SOUTHERN IOWA ECO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=726`

- **Vector count**: 9
- **Sample IDs**: `minutes-726.pdf-chunk-5`, `minutes-726.pdf-chunk-3`, `minutes-726.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-726.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=726 |
| `text` | 9/9 (100%) | y, Gandy, Kness, Ham and Estey      TO APPROVE PROFESSIONAL SERVICES    Page 4  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=751`

- **Vector count**: 9
- **Sample IDs**: `minutes-751.pdf-chunk-1`, `minutes-751.pdf-chunk-8`, `minutes-751.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-751.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=751 |
| `text` | 9/9 (100%) | EMPTION FOR LIVE ON THE SQUARE  ON JUNE 28, JULY 19, AUGUST 23, AND SEPTEMBER 13... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=749`

- **Vector count**: 9
- **Sample IDs**: `minutes-749.pdf-chunk-3`, `minutes-749.pdf-chunk-6`, `minutes-749.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-749.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=749 |
| `text` | 9/9 (100%) |  AMENDED AND RESTATED URBAN  REVITALIZATION PLAN FOR THE FAIRFIELD  COMMERCIAL/I... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=756`

- **Vector count**: 9
- **Sample IDs**: `minutes-756.pdf-chunk-6`, `minutes-756.pdf-chunk-3`, `minutes-756.pdf-chunk-8`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-756.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=756 |
| `text` | 9/9 (100%) | ES: Flournoy, Twohill, Ham, Kness and Rowe      TO PASS THROUGH THE FIRST READIN... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=763`

- **Vector count**: 9
- **Sample IDs**: `minutes-763.pdf-chunk-5`, `minutes-763.pdf-chunk-0`, `minutes-763.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-763.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=763 |
| `text` | 9/9 (100%) | AL READING   OF ORDINANCE NO. 1269 REZONING NORTH   Page 4   Minutes  08/25/25  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=773`

- **Vector count**: 9
- **Sample IDs**: `minutes-773.pdf-chunk-7`, `minutes-773.pdf-chunk-6`, `minutes-773.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-773.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=773 |
| `text` | 9/9 (100%) |  AND COMMISSIONS AS PRESENTED BY THE  MAYOR.      Councilperson Kness exited the... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=766`

- **Vector count**: 9
- **Sample IDs**: `minutes-766.pdf-chunk-5`, `minutes-766.pdf-chunk-0`, `minutes-766.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-766.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=766 |
| `text` | 9/9 (100%) | n’t come back from the  destruction; she does not think Council should rely on e... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=768`

- **Vector count**: 9
- **Sample IDs**: `minutes-768.pdf-chunk-5`, `minutes-768.pdf-chunk-4`, `minutes-768.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 9/9 (100%) | minutes-768.pdf |
| `source` | 9/9 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=768 |
| `text` | 9/9 (100%) | ctober as Manufacturer’s month;  and asked for Council consent to request the Na... |

### `https://pathfindersrcd.org/what-we-do/community-development/communityresourceguide`

- **Vector count**: 9
- **Sample IDs**: `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-3`, `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-4`, `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-6`
- **ID patterns**: `other` (9)
- **Vectors profiled for metadata**: 9

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 9/9 (100%) | civic |
| `filename` | 9/9 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/what-we-do/community-development/c... |
| `org` | 9/9 (100%) | Pathfinders RC&D |
| `source` | 9/9 (100%) | https://pathfindersrcd.org/what-we-do/community-development/communityresourcegui... |
| `text` | 9/9 (100%) | Assistance with rent, food, utilities, limited medical and burial assistance. Mu... |
| `type` | 9/9 (100%) | community_org |

### `https://www.area15rpc.com/single-post/rpcnewsline-spring2025`

- **Vector count**: 8
- **Sample IDs**: `area15-rpc-aHR0cHM6Ly93d3cuYXJl-5`, `area15-rpc-aHR0cHM6Ly93d3cuYXJl-3`, `area15-rpc-aHR0cHM6Ly93d3cuYXJl-6`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | regional_planning |
| `filename` | 8/8 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/single-post/rpc... |
| `org` | 8/8 (100%) | Area 15 Regional Planning Commission |
| `source` | 8/8 (100%) | https://www.area15rpc.com/single-post/rpcnewsline-spring2025 |
| `text` | 8/8 (100%) | To qualify for the Down-Payment Assistance program, applicants must: Be employed... |
| `type` | 8/8 (100%) | community_org |

### `https://www.youtube.com/watch?v=7ATYDSiJFN0`

- **Vector count**: 8
- **Sample IDs**: `fc-council-7ATYDSiJFN0-6`, `fc-council-7ATYDSiJFN0-0`, `fc-council-7ATYDSiJFN0-3`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — Fairfield City Council 2-24-14 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=7ATYDSiJFN0 |
| `text` | 8/8 (100%) | 6 million dollars is what we're applying for in that application move to approve... |
| `title` | 8/8 (100%) | Fairfield City Council 2-24-14 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=A379Kn1G1UE`

- **Vector count**: 8
- **Sample IDs**: `fc-council-A379Kn1G1UE-5`, `fc-council-A379Kn1G1UE-0`, `fc-council-A379Kn1G1UE-3`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — COVID19 - City of Fairfield Information Update 4-2... |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=A379Kn1G1UE |
| `text` | 8/8 (100%) | Trent said use and Brian said use appropriate resources it is kind of depressing... |
| `title` | 8/8 (100%) | COVID19 - City of Fairfield Information Update 4-2-20 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=DhhyS-Qiwrw`

- **Vector count**: 8
- **Sample IDs**: `fc-council-DhhyS-Qiwrw-6`, `fc-council-DhhyS-Qiwrw-2`, `fc-council-DhhyS-Qiwrw-5`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — Fairfield Town Hall \| Water and Sewer \| 9-26-22 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=DhhyS-Qiwrw |
| `text` | 8/8 (100%) | parts per million hardness then the last stage you're you're right around 130 an... |
| `title` | 8/8 (100%) | Fairfield Town Hall \| Water and Sewer \| 9-26-22 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BvLcsmwBpNM`

- **Vector count**: 8
- **Sample IDs**: `fc-council-BvLcsmwBpNM-5`, `fc-council-BvLcsmwBpNM-7`, `fc-council-BvLcsmwBpNM-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 10-23-17 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=BvLcsmwBpNM |
| `text` | 8/8 (100%) | hearing to move by Flournoy tech second by Hamilton all those in favor signify b... |
| `title` | 8/8 (100%) | City Council 10-23-17 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=H1o85LtFsWs`

- **Vector count**: 8
- **Sample IDs**: `fc-council-H1o85LtFsWs-4`, `fc-council-H1o85LtFsWs-1`, `fc-council-H1o85LtFsWs-0`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — Fairfield City Council 11-25-13 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=H1o85LtFsWs |
| `text` | 8/8 (100%) | 8 million which is 20 percent of the project which has been advised as the maxim... |
| `title` | 8/8 (100%) | Fairfield City Council 11-25-13 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=FyDJRaTBlf4`

- **Vector count**: 8
- **Sample IDs**: `fc-council-FyDJRaTBlf4-1`, `fc-council-FyDJRaTBlf4-3`, `fc-council-FyDJRaTBlf4-4`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 5-9-22 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=FyDJRaTBlf4 |
| `text` | 8/8 (100%) | 62 resolution approving employment in the park and recreation department approva... |
| `title` | 8/8 (100%) | City Council 5-9-22 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QwPf-owNIWM`

- **Vector count**: 8
- **Sample IDs**: `fc-council-QwPf-owNIWM-4`, `fc-council-QwPf-owNIWM-2`, `fc-council-QwPf-owNIWM-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-9-15 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=QwPf-owNIWM |
| `text` | 8/8 (100%) | and maybe you want to tell us a little bit of more what staging means uh I'm not... |
| `title` | 8/8 (100%) | City Council 3-9-15 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QxtNuR4x9cM`

- **Vector count**: 8
- **Sample IDs**: `fc-council-QxtNuR4x9cM-7`, `fc-council-QxtNuR4x9cM-0`, `fc-council-QxtNuR4x9cM-2`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council/Farewell Ed Malloy 12-16-19 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=QxtNuR4x9cM |
| `text` | 8/8 (100%) | Malloy's involvement in the position as mayor enhanced and affirmed the collabor... |
| `title` | 8/8 (100%) | City Council/Farewell Ed Malloy 12-16-19 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=UHI8sH6eh0c`

- **Vector count**: 8
- **Sample IDs**: `fc-council-UHI8sH6eh0c-6`, `fc-council-UHI8sH6eh0c-5`, `fc-council-UHI8sH6eh0c-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-23-15 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=UHI8sH6eh0c |
| `text` | 8/8 (100%) | that makes sense I'll move to approve second move by Halley and second by Flourn... |
| `title` | 8/8 (100%) | City Council 3-23-15 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=UaSigXWUrzs`

- **Vector count**: 8
- **Sample IDs**: `fc-council-UaSigXWUrzs-5`, `fc-council-UaSigXWUrzs-7`, `fc-council-UaSigXWUrzs-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 11.25.24 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=UaSigXWUrzs |
| `text` | 8/8 (100%) | 5 there's another request to strike the sentence which was on page eight about c... |
| `title` | 8/8 (100%) | City Council 11.25.24 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YP0h3Pjzamk`

- **Vector count**: 8
- **Sample IDs**: `fc-council-YP0h3Pjzamk-1`, `fc-council-YP0h3Pjzamk-2`, `fc-council-YP0h3Pjzamk-0`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 7-10-23 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=YP0h3Pjzamk |
| `text` | 8/8 (100%) | I don't know if yeah I think I think we have a representative and maybe he can s... |
| `title` | 8/8 (100%) | City Council 7-10-23 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=XI2vpNS6Flo`

- **Vector count**: 8
- **Sample IDs**: `fc-council-XI2vpNS6Flo-4`, `fc-council-XI2vpNS6Flo-3`, `fc-council-XI2vpNS6Flo-0`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 11-23-15 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=XI2vpNS6Flo |
| `text` | 8/8 (100%) | 1 you're not in danger of that at all the other thing we look at is just your fr... |
| `title` | 8/8 (100%) | City Council 11-23-15 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cllecgu819A`

- **Vector count**: 8
- **Sample IDs**: `fc-council-cllecgu819A-4`, `fc-council-cllecgu819A-6`, `fc-council-cllecgu819A-2`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 12-13-21 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=cllecgu819A |
| `text` | 8/8 (100%) | according to this the their chart we a aaa b i think is or an aab but they have ... |
| `title` | 8/8 (100%) | City Council 12-13-21 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=dqS0amlURMc`

- **Vector count**: 8
- **Sample IDs**: `fc-council-dqS0amlURMc-3`, `fc-council-dqS0amlURMc-4`, `fc-council-dqS0amlURMc-7`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-11-24 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=dqS0amlURMc |
| `text` | 8/8 (100%) | move by floro second second by two Hill any discussion seeing n please call the ... |
| `title` | 8/8 (100%) | City Council 3-11-24 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=kfPGCXxh_WU`

- **Vector count**: 8
- **Sample IDs**: `fc-council-kfPGCXxh_WU-2`, `fc-council-kfPGCXxh_WU-6`, `fc-council-kfPGCXxh_WU-0`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 5-8-17 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=kfPGCXxh_WU |
| `text` | 8/8 (100%) | on Friday May 12 of 2017 Mike would you inform us as to what this would be neces... |
| `title` | 8/8 (100%) | City Council 5-8-17 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=iYL4zyAOL38`

- **Vector count**: 8
- **Sample IDs**: `fc-council-iYL4zyAOL38-7`, `fc-council-iYL4zyAOL38-4`, `fc-council-iYL4zyAOL38-6`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 9-8-14 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=iYL4zyAOL38 |
| `text` | 8/8 (100%) | 8 million for this project and there you are sitting with that legal contract ou... |
| `title` | 8/8 (100%) | City Council 9-8-14 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=lX-anZZiAqY`

- **Vector count**: 8
- **Sample IDs**: `fc-council-lX-anZZiAqY-1`, `fc-council-lX-anZZiAqY-7`, `fc-council-lX-anZZiAqY-2`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — FFCC 3-26-12 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=lX-anZZiAqY |
| `text` | 8/8 (100%) | i didn't add that here because we really haven't you know we're sort of just get... |
| `title` | 8/8 (100%) | FFCC 3-26-12 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=n_DpK5UrL6I`

- **Vector count**: 8
- **Sample IDs**: `fc-council-n_DpK5UrL6I-5`, `fc-council-n_DpK5UrL6I-6`, `fc-council-n_DpK5UrL6I-4`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-23-20 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=n_DpK5UrL6I |
| `text` | 8/8 (100%) | Slocum's request so he doesn't want to see notice then he gets concerned about a... |
| `title` | 8/8 (100%) | City Council 3-23-20 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qs6st9cAt1M`

- **Vector count**: 8
- **Sample IDs**: `fc-council-qs6st9cAt1M-1`, `fc-council-qs6st9cAt1M-6`, `fc-council-qs6st9cAt1M-2`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council \| 2025 Budget Public Presentation 3-2... |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=qs6st9cAt1M |
| `text` | 8/8 (100%) | com genealogy databases for those who prefer ebooks or audiob books we have two ... |
| `title` | 8/8 (100%) | City Council \| 2025 Budget Public Presentation 3-26-24 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uIEoXyCFtzs`

- **Vector count**: 8
- **Sample IDs**: `fc-council-uIEoXyCFtzs-1`, `fc-council-uIEoXyCFtzs-7`, `fc-council-uIEoXyCFtzs-4`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 10-12-20 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=uIEoXyCFtzs |
| `text` | 8/8 (100%) | m and 9 or 10 at the latest one i think they go much later than ten yeah what ti... |
| `title` | 8/8 (100%) | City Council 10-12-20 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=t1ThvsffkgU`

- **Vector count**: 8
- **Sample IDs**: `fc-council-t1ThvsffkgU-6`, `fc-council-t1ThvsffkgU-2`, `fc-council-t1ThvsffkgU-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 3-9-20 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=t1ThvsffkgU |
| `text` | 8/8 (100%) | 1 million budgeted for those in your fiscal year 21 with five point six million ... |
| `title` | 8/8 (100%) | City Council 3-9-20 |
| `type` | 8/8 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=y9pVOIwpLPs`

- **Vector count**: 8
- **Sample IDs**: `fc-council-y9pVOIwpLPs-2`, `fc-council-y9pVOIwpLPs-7`, `fc-council-y9pVOIwpLPs-1`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | City Council Meeting — null — City Council 6-12-17 |
| `org` | 8/8 (100%) | Fairfield City Council |
| `publishedAt` | 8/8 (100%) |  |
| `source` | 8/8 (100%) | https://www.youtube.com/watch?v=y9pVOIwpLPs |
| `text` | 8/8 (100%) | m. to 10:00 p. m. on the 4th till 11:00 p. m. so the hours want to change what t... |
| `title` | 8/8 (100%) | City Council 6-12-17 |
| `type` | 8/8 (100%) | council_meeting |

### `https://jeffersoncounty.iowa.gov/barns/news.htm`

- **Vector count**: 8
- **Sample IDs**: `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-1`, `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-2`, `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-7`
- **ID patterns**: `other` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 8/8 (100%) | government |
| `filename` | 8/8 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/barns/news.h... |
| `org` | 8/8 (100%) | Jefferson County Iowa Government |
| `source` | 8/8 (100%) | https://jeffersoncounty.iowa.gov/barns/news.htm |
| `text` | 8/8 (100%) | Mare Barn Lettering - Mike Pech finished painting the letters on the north side ... |
| `type` | 8/8 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=138`

- **Vector count**: 8
- **Sample IDs**: `minutes-138.pdf-chunk-0`, `minutes-138.pdf-chunk-5`, `minutes-138.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-138.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=138 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    April 8, 2013      The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=161`

- **Vector count**: 8
- **Sample IDs**: `minutes-161.pdf-chunk-5`, `minutes-161.pdf-chunk-2`, `minutes-161.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-161.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=161 |
| `text` | 8/8 (100%) | amilton, Revolinski      TO PASS FROM THE SECOND READING TO THE THIRD    READING... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=146`

- **Vector count**: 8
- **Sample IDs**: `minutes-146.pdf-chunk-6`, `minutes-146.pdf-chunk-7`, `minutes-146.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-146.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=146 |
| `text` | 8/8 (100%) | USING    STUDY AND ACT AS A FISCAL AGENT AND    MAKE A CONTRIBUTION FROM THE CIT... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=221`

- **Vector count**: 8
- **Sample IDs**: `minutes-221.pdf-chunk-0`, `minutes-221.pdf-chunk-2`, `minutes-221.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-221.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=221 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    March 10, 2014        The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=280`

- **Vector count**: 8
- **Sample IDs**: `minutes-280.pdf-chunk-6`, `minutes-280.pdf-chunk-7`, `minutes-280.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-280.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=280 |
| `text` | 8/8 (100%) | YING 40% EFFECTIVE    7-1-15.    Halley also told the City Council that he would... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=273`

- **Vector count**: 8
- **Sample IDs**: `minutes-273.pdf-chunk-7`, `minutes-273.pdf-chunk-4`, `minutes-273.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-273.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=273 |
| `text` | 8/8 (100%) |  21.5 (j)  Moved by Hamilton, seconded by Flournoy   AYES:  Hamilton, Flournoy, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=292`

- **Vector count**: 8
- **Sample IDs**: `minutes-292.pdf-chunk-2`, `minutes-292.pdf-chunk-0`, `minutes-292.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-292.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=292 |
| `text` | 8/8 (100%) |  rent or sell it in  the next 6 months.  The Council asked Bachar if he would wo... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=314`

- **Vector count**: 8
- **Sample IDs**: `minutes-314.pdf-chunk-0`, `minutes-314.pdf-chunk-2`, `minutes-314.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-314.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=314 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    April 25, 2016          The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=323`

- **Vector count**: 8
- **Sample IDs**: `minutes-323.pdf-chunk-3`, `minutes-323.pdf-chunk-6`, `minutes-323.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-323.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=323 |
| `text` | 8/8 (100%) | E.   Page 3  Minutes  6/27/16    Discussion was held concerning a development on... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=346`

- **Vector count**: 8
- **Sample IDs**: `minutes-346.pdf-chunk-2`, `minutes-346.pdf-chunk-3`, `minutes-346.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-346.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=346 |
| `text` | 8/8 (100%) | ification Commission and presented their  annual budget.  Both members have resi... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=355`

- **Vector count**: 8
- **Sample IDs**: `minutes-355.pdf-chunk-1`, `minutes-355.pdf-chunk-2`, `minutes-355.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-355.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=355 |
| `text` | 8/8 (100%) | IDING FULL    TIME EMPLOYMENT IN THE STREET DEPARTMENT.      TO APPROVE RESOLUTI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=359`

- **Vector count**: 8
- **Sample IDs**: `minutes-359.pdf-chunk-3`, `minutes-359.pdf-chunk-1`, `minutes-359.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-359.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=359 |
| `text` | 8/8 (100%) | ublic hearing closed.    Moved by Anderson, seconded by Thompson   AYES:  Anders... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=360`

- **Vector count**: 8
- **Sample IDs**: `minutes-360.pdf-chunk-6`, `minutes-360.pdf-chunk-5`, `minutes-360.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-360.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=360 |
| `text` | 8/8 (100%) | rnoy, Rasmussen, Hamilton, Revolinski, Halley, Thompson      TO PASS THROUGH THE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=365`

- **Vector count**: 8
- **Sample IDs**: `minutes-365.pdf-chunk-3`, `minutes-365.pdf-chunk-7`, `minutes-365.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-365.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=365 |
| `text` | 8/8 (100%) |    Moved by Flournoy, seconded by Hamilton   AYES:  Flournoy, Hamilton, Anderson... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=371`

- **Vector count**: 8
- **Sample IDs**: `minutes-371.pdf-chunk-3`, `minutes-371.pdf-chunk-7`, `minutes-371.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-371.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=371 |
| `text` | 8/8 (100%) | i      TO ADJOURN AND POSTPONE A RESOLUTION DESIGNATING   LOW BIDDER ON THE PUBL... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=396`

- **Vector count**: 8
- **Sample IDs**: `minutes-396.pdf-chunk-3`, `minutes-396.pdf-chunk-0`, `minutes-396.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-396.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=396 |
| `text` | 8/8 (100%) | S TO LANGMAN  CONSTRUCTION INC.    Moved by Anderson, seconded by Gandy   AYES: ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=408`

- **Vector count**: 8
- **Sample IDs**: `minutes-408.pdf-chunk-2`, `minutes-408.pdf-chunk-1`, `minutes-408.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-408.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=408 |
| `text` | 8/8 (100%) | asions where Waste Management has picked up more than two (2) bags without extra... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=437`

- **Vector count**: 8
- **Sample IDs**: `minutes-437.pdf-chunk-0`, `minutes-437.pdf-chunk-5`, `minutes-437.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-437.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=437 |
| `text` | 8/8 (100%) |    MINUTES OF THE FAIRFIELD CITY COUNCIL    April 08, 2019    The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=440`

- **Vector count**: 8
- **Sample IDs**: `minutes-440.pdf-chunk-6`, `minutes-440.pdf-chunk-0`, `minutes-440.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-440.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=440 |
| `text` | 8/8 (100%) | igated reserve from L.O.S.T. as the unobligated has reached its goal laid out in... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=468`

- **Vector count**: 8
- **Sample IDs**: `minutes-468.pdf-chunk-1`, `minutes-468.pdf-chunk-5`, `minutes-468.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-468.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=468 |
| `text` | 8/8 (100%) | E DECEMBER FINANCE REPORT AND   TRANSFERS.    TO ADOPT RESOLUTION NO. 3801 AUTHO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=493`

- **Vector count**: 8
- **Sample IDs**: `minutes-493.pdf-chunk-4`, `minutes-493.pdf-chunk-7`, `minutes-493.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-493.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=493 |
| `text` | 8/8 (100%) | ill, Gandy, Ham and Halley       TO ADOPT RESOLUTION NO. 3909  AUTHORIZING A SUP... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=492`

- **Vector count**: 8
- **Sample IDs**: `minutes-492.pdf-chunk-7`, `minutes-492.pdf-chunk-2`, `minutes-492.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-492.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=492 |
| `text` | 8/8 (100%) |  NEFF, JOE HUNT  AND WERNER ELKMER AS LISTED.    CITY ATTORNEY REPORT  City Atto... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=57`

- **Vector count**: 8
- **Sample IDs**: `minutes-57.pdf-chunk-2`, `minutes-57.pdf-chunk-0`, `minutes-57.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-57.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=57 |
| `text` | 8/8 (100%) | the  park.     Page 2  Minutes  8/8/11      Park & Recreation Director, Derik Wu... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=54`

- **Vector count**: 8
- **Sample IDs**: `minutes-54.pdf-chunk-2`, `minutes-54.pdf-chunk-0`, `minutes-54.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-54.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=54 |
| `text` | 8/8 (100%) | e public hearing closed.    Moved by Gookin, seconded by Hamilton   AYES:  Gooki... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=635`

- **Vector count**: 8
- **Sample IDs**: `minutes-635.pdf-chunk-3`, `minutes-635.pdf-chunk-2`, `minutes-635.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-635.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=635 |
| `text` | 8/8 (100%) | derson. Gandy, Ham, Halley and Rasmussen     TO AWARD EV CHARGING STATION INSTAL... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=639`

- **Vector count**: 8
- **Sample IDs**: `minutes-639.pdf-chunk-3`, `minutes-639.pdf-chunk-2`, `minutes-639.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-639.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=639 |
| `text` | 8/8 (100%) | Moved by Flournoy, seconded by Gandy   AYES:   Flournoy, Gandy, Twohill, Ham, Ha... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=656`

- **Vector count**: 8
- **Sample IDs**: `minutes-656.pdf-chunk-7`, `minutes-656.pdf-chunk-3`, `minutes-656.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-656.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=656 |
| `text` | 8/8 (100%) |  by:         Rebekah Loper   City Clerk  |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=668`

- **Vector count**: 8
- **Sample IDs**: `minutes-668.pdf-chunk-3`, `minutes-668.pdf-chunk-6`, `minutes-668.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-668.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=668 |
| `text` | 8/8 (100%) | am and Anderson      TO ACCEPT IOWA STATE BANK’S BID OF A  4.1% RATE CD FOR THE ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=663`

- **Vector count**: 8
- **Sample IDs**: `minutes-663.pdf-chunk-5`, `minutes-663.pdf-chunk-2`, `minutes-663.pdf-chunk-7`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-663.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=663 |
| `text` | 8/8 (100%) | LL, MARGARITA RUIZ AND NATHANIEL ZHU TO   THE DIVERSITY, EQUITY & INCLUSION COMM... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=667`

- **Vector count**: 8
- **Sample IDs**: `minutes-667.pdf-chunk-4`, `minutes-667.pdf-chunk-0`, `minutes-667.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-667.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=667 |
| `text` | 8/8 (100%) |  Mayor Boyer opened a public hearing on the third and final reading of Ordinance... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=693`

- **Vector count**: 8
- **Sample IDs**: `minutes-693.pdf-chunk-5`, `minutes-693.pdf-chunk-7`, `minutes-693.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-693.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=693 |
| `text` | 8/8 (100%) | on, unknown ward, asked if this would protect the renter or the landlord; Keith ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=715`

- **Vector count**: 8
- **Sample IDs**: `minutes-715.pdf-chunk-2`, `minutes-715.pdf-chunk-6`, `minutes-715.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-715.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=715 |
| `text` | 8/8 (100%) |  OF REVENUE IN THE AMOUNT   OF $12,810.04.    TO APPROVE OPERATING CLAIMS IN THE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=724`

- **Vector count**: 8
- **Sample IDs**: `minutes-724.pdf-chunk-0`, `minutes-724.pdf-chunk-7`, `minutes-724.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-724.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=724 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  JULY 8, 2024    The Fairfield City Coun... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=748`

- **Vector count**: 8
- **Sample IDs**: `minutes-748.pdf-chunk-0`, `minutes-748.pdf-chunk-3`, `minutes-748.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-748.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=748 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  JANUARY 27, 2025    The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=760`

- **Vector count**: 8
- **Sample IDs**: `minutes-760.pdf-chunk-0`, `minutes-760.pdf-chunk-2`, `minutes-760.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-760.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=760 |
| `text` | 8/8 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  JULY 14, 2025    The Fairfield City Cou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=762`

- **Vector count**: 8
- **Sample IDs**: `minutes-762.pdf-chunk-4`, `minutes-762.pdf-chunk-7`, `minutes-762.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-762.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=762 |
| `text` | 8/8 (100%) | GH THE SECOND READING   OF ORDINANCE NO. 1269 REZONING NORTH  CAMPUS RIDGE TO PL... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=767`

- **Vector count**: 8
- **Sample IDs**: `minutes-767.pdf-chunk-7`, `minutes-767.pdf-chunk-0`, `minutes-767.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-767.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=767 |
| `text` | 8/8 (100%) | ed session  expectations and gave an update on the 2 nd  street fence issue.    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=769`

- **Vector count**: 8
- **Sample IDs**: `minutes-769.pdf-chunk-7`, `minutes-769.pdf-chunk-3`, `minutes-769.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-769.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=769 |
| `text` | 8/8 (100%) |  going up at the new Fire Station; additional cameras  have been installed at Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=99`

- **Vector count**: 8
- **Sample IDs**: `minutes-99.pdf-chunk-2`, `minutes-99.pdf-chunk-7`, `minutes-99.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (8)
- **Vectors profiled for metadata**: 8

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 8/8 (100%) | minutes-99.pdf |
| `source` | 8/8 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=99 |
| `text` | 8/8 (100%) | ty Council requesting permission to block of  streets for the All Things Italian... |

### `Fairfield Cares`

- **Vector count**: 7
- **Sample IDs**: `FairfieldCaresResurce.pdf-chunk-2`, `FairfieldCaresResurce.pdf-chunk-1`, `FairfieldCaresResurce.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | FairfieldCaresResurce.pdf |
| `source` | 7/7 (100%) | Fairfield Cares |
| `text` | 7/7 (100%) | . Burlington Avenue.  641-209-6687    The Lord’s Cupboard.  Free food, Program h... |
| `type` | 7/7 (100%) | community_resource |

### `https://www.youtube.com/watch?v=4qwrU5Zg_CI`

- **Vector count**: 7
- **Sample IDs**: `fc-council-4qwrU5Zg_CI-6`, `fc-council-4qwrU5Zg_CI-0`, `fc-council-4qwrU5Zg_CI-1`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 5-29-18 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=4qwrU5Zg_CI |
| `text` | 7/7 (100%) | mayor the property committee met this evening we had present all members of the ... |
| `title` | 7/7 (100%) | City Council 5-29-18 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=AMjdSh8oLyM`

- **Vector count**: 7
- **Sample IDs**: `fc-council-AMjdSh8oLyM-1`, `fc-council-AMjdSh8oLyM-4`, `fc-council-AMjdSh8oLyM-2`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 6-22-20 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=AMjdSh8oLyM |
| `text` | 7/7 (100%) | 3 percent this year for the first increase and then three percent three and a qu... |
| `title` | 7/7 (100%) | City Council 6-22-20 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GzJduwB8Vhw`

- **Vector count**: 7
- **Sample IDs**: `fc-council-GzJduwB8Vhw-5`, `fc-council-GzJduwB8Vhw-0`, `fc-council-GzJduwB8Vhw-4`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 5-13-19 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=GzJduwB8Vhw |
| `text` | 7/7 (100%) | 2 million that was set as a goal for local office sales that we actually have th... |
| `title` | 7/7 (100%) | City Council 5-13-19 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=HBwjUe0Y3pA`

- **Vector count**: 7
- **Sample IDs**: `fc-council-HBwjUe0Y3pA-6`, `fc-council-HBwjUe0Y3pA-1`, `fc-council-HBwjUe0Y3pA-2`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 10-23-23 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=HBwjUe0Y3pA |
| `text` | 7/7 (100%) | 10 Redline version and modifications to chapter 9 that's part of the part of the... |
| `title` | 7/7 (100%) | City Council 10-23-23 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=JMboHDbaX1E`

- **Vector count**: 7
- **Sample IDs**: `fc-council-JMboHDbaX1E-1`, `fc-council-JMboHDbaX1E-6`, `fc-council-JMboHDbaX1E-4`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 7-22-19 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=JMboHDbaX1E |
| `text` | 7/7 (100%) | 91 we have acceptance of the wayfinding commission minutes the library board min... |
| `title` | 7/7 (100%) | City Council 7-22-19 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=MpAv7lNS2OM`

- **Vector count**: 7
- **Sample IDs**: `fc-council-MpAv7lNS2OM-4`, `fc-council-MpAv7lNS2OM-0`, `fc-council-MpAv7lNS2OM-2`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 3... |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=MpAv7lNS2OM |
| `text` | 7/7 (100%) | m. until 1:00 a. m. um to be on the safe side probably 2 just so that way we hav... |
| `title` | 7/7 (100%) | City of Fairfield \| Study Session & City Council 3.10.25 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Oogz4Mjnplg`

- **Vector count**: 7
- **Sample IDs**: `fc-council-Oogz4Mjnplg-4`, `fc-council-Oogz4Mjnplg-5`, `fc-council-Oogz4Mjnplg-6`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 7-10-17 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=Oogz4Mjnplg |
| `text` | 7/7 (100%) | Marcy would be here but Mike this is essentially one that I know we've looked at... |
| `title` | 7/7 (100%) | City Council 7-10-17 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QCB29AVEOuI`

- **Vector count**: 7
- **Sample IDs**: `fc-council-QCB29AVEOuI-5`, `fc-council-QCB29AVEOuI-6`, `fc-council-QCB29AVEOuI-1`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — 4-27-15 City Council Meeting |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=QCB29AVEOuI |
| `text` | 7/7 (100%) | right move approval okay moved by Ray valenski discussion not all those in favor... |
| `title` | 7/7 (100%) | 4-27-15 City Council Meeting |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Rr37NejSLwk`

- **Vector count**: 7
- **Sample IDs**: `fc-council-Rr37NejSLwk-1`, `fc-council-Rr37NejSLwk-0`, `fc-council-Rr37NejSLwk-5`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 8-14-17 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=Rr37NejSLwk |
| `text` | 7/7 (100%) | 90 move approval okay moved by Thompson second by Flournoy any discussion not pl... |
| `title` | 7/7 (100%) | City Council 8-14-17 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_94swjxHxQ4`

- **Vector count**: 7
- **Sample IDs**: `fc-council-_94swjxHxQ4-5`, `fc-council-_94swjxHxQ4-3`, `fc-council-_94swjxHxQ4-1`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 10.28.24 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=_94swjxHxQ4 |
| `text` | 7/7 (100%) | com no who runs it no that's our convention and visitors bureau it is the conven... |
| `title` | 7/7 (100%) | City Council 10.28.24 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=bg4KwH1EPJU`

- **Vector count**: 7
- **Sample IDs**: `fc-council-bg4KwH1EPJU-6`, `fc-council-bg4KwH1EPJU-2`, `fc-council-bg4KwH1EPJU-5`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 4-11-22 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=bg4KwH1EPJU |
| `text` | 7/7 (100%) | and whereas young people experience heightened rates of sexual violence and yout... |
| `title` | 7/7 (100%) | City Council 4-11-22 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=baNOQYMEh7s`

- **Vector count**: 7
- **Sample IDs**: `fc-council-baNOQYMEh7s-2`, `fc-council-baNOQYMEh7s-6`, `fc-council-baNOQYMEh7s-5`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 2-24-20 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=baNOQYMEh7s |
| `text` | 7/7 (100%) | 4 million dollars remaining in that contingency fund unspent which means that we... |
| `title` | 7/7 (100%) | City Council 2-24-20 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=g1aBEl872z0`

- **Vector count**: 7
- **Sample IDs**: `fc-council-g1aBEl872z0-2`, `fc-council-g1aBEl872z0-6`, `fc-council-g1aBEl872z0-4`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 12-17-18 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=g1aBEl872z0 |
| `text` | 7/7 (100%) | accounting for twenty-one thousand deaths annually last January I handed out 50 ... |
| `title` | 7/7 (100%) | City Council 12-17-18 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ytvURDl4X8k`

- **Vector count**: 7
- **Sample IDs**: `fc-council-ytvURDl4X8k-0`, `fc-council-ytvURDl4X8k-6`, `fc-council-ytvURDl4X8k-2`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | government |
| `filename` | 7/7 (100%) | City Council Meeting — null — City Council 7-12-21 |
| `org` | 7/7 (100%) | Fairfield City Council |
| `publishedAt` | 7/7 (100%) |  |
| `source` | 7/7 (100%) | https://www.youtube.com/watch?v=ytvURDl4X8k |
| `text` | 7/7 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 7-12-21  okay ... |
| `title` | 7/7 (100%) | City Council 7-12-21 |
| `type` | 7/7 (100%) | council_meeting |

### `https://www.icon-art.org/The%20Hudson%20Collection.htm`

- **Vector count**: 7
- **Sample IDs**: `icon-aHR0cHM6Ly93d3cuaWNv-8`, `icon-aHR0cHM6Ly93d3cuaWNv-3`, `icon-aHR0cHM6Ly93d3cuaWNv-7`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | arts |
| `filename` | 7/7 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/The%20Hudson%20Collectio... |
| `org` | 7/7 (100%) | ICON — Iowa Contemporary Art |
| `source` | 7/7 (100%) | https://www.icon-art.org/The%20Hudson%20Collection.htm |
| `text` | 7/7 (100%) | , to assemble the collection of 71 Shiva Linga paintings that now form the Hudso... |
| `type` | 7/7 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=110`

- **Vector count**: 7
- **Sample IDs**: `minutes-110.pdf-chunk-2`, `minutes-110.pdf-chunk-4`, `minutes-110.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-110.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=110 |
| `text` | 7/7 (100%) |  ND  STREET RECONSTRUCTION    PROJECT TO SHIPLEY CONTRACTING OF BURLINGTON,    I... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=113`

- **Vector count**: 7
- **Sample IDs**: `minutes-113.pdf-chunk-6`, `minutes-113.pdf-chunk-4`, `minutes-113.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-113.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=113 |
| `text` | 7/7 (100%) | M.      Submitted by:      Joy Messer  City Clerk            |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=166`

- **Vector count**: 7
- **Sample IDs**: `minutes-166.pdf-chunk-0`, `minutes-166.pdf-chunk-4`, `minutes-166.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-166.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=166 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    October 14, 2013      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=163`

- **Vector count**: 7
- **Sample IDs**: `minutes-163.pdf-chunk-3`, `minutes-163.pdf-chunk-2`, `minutes-163.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-163.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=163 |
| `text` | 7/7 (100%) | ONOMIC     DEVELOPMENT AREA, AND THAT THE REHABILITATION,    CONSERVATION, REDEV... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=191`

- **Vector count**: 7
- **Sample IDs**: `minutes-191.pdf-chunk-0`, `minutes-191.pdf-chunk-1`, `minutes-191.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-191.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=191 |
| `text` | 7/7 (100%) |   Minutes of the Fairfield City Council    November 25, 2013        The Fairfiel... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=219`

- **Vector count**: 7
- **Sample IDs**: `minutes-219.pdf-chunk-6`, `minutes-219.pdf-chunk-0`, `minutes-219.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-219.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=219 |
| `text` | 7/7 (100%) | INTO OPEN SESSION AT 8:20 P.M.    Moved by Hamilton, seconded by Flournoy   AYES... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=220`

- **Vector count**: 7
- **Sample IDs**: `minutes-220.pdf-chunk-4`, `minutes-220.pdf-chunk-5`, `minutes-220.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-220.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=220 |
| `text` | 7/7 (100%) | , Ledger-Kalen, Halley, Rasmussen, Hammes, Flournoy, Revolinski      TO APPROVE ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=229`

- **Vector count**: 7
- **Sample IDs**: `minutes-229.pdf-chunk-2`, `minutes-229.pdf-chunk-4`, `minutes-229.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-229.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=229 |
| `text` | 7/7 (100%) | conded by Rasmussen   AYES:  Hamilton, Rasmussen, Ledger-Kalen, Halley, Revolins... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=232`

- **Vector count**: 7
- **Sample IDs**: `minutes-232.pdf-chunk-3`, `minutes-232.pdf-chunk-4`, `minutes-232.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-232.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=232 |
| `text` | 7/7 (100%) |  3120 SETTING    DATES OF A CONSULTATION AND A PUBLIC HEARING    ON A PROPOSED A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=243`

- **Vector count**: 7
- **Sample IDs**: `minutes-243.pdf-chunk-4`, `minutes-243.pdf-chunk-0`, `minutes-243.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-243.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=243 |
| `text` | 7/7 (100%) | E, JULIE HARVEY.      MAYOR REPORT    Moved by Ledger-Kalen, seconded by Halley ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=283`

- **Vector count**: 7
- **Sample IDs**: `minutes-283.pdf-chunk-4`, `minutes-283.pdf-chunk-2`, `minutes-283.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-283.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=283 |
| `text` | 7/7 (100%) | LAND ACQUISITION FROM    HFF LLC (HOLT).    Moved by Revolinski, seconded by Led... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=276`

- **Vector count**: 7
- **Sample IDs**: `minutes-276.pdf-chunk-3`, `minutes-276.pdf-chunk-1`, `minutes-276.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-276.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=276 |
| `text` | 7/7 (100%) |  APPROVE AN AMENDMENT TO DISSEMINATION   AGENT AGREEMENT WITH PIPER JAFFRAY.    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=338`

- **Vector count**: 7
- **Sample IDs**: `minutes-338.pdf-chunk-1`, `minutes-338.pdf-chunk-0`, `minutes-338.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-338.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=338 |
| `text` | 7/7 (100%) | THE    PEP STOP.      TO APPROVE A LIQUOR LICENSE FOR THE    FAIRFIELD ARTS & CO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=354`

- **Vector count**: 7
- **Sample IDs**: `minutes-354.pdf-chunk-2`, `minutes-354.pdf-chunk-5`, `minutes-354.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-354.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=354 |
| `text` | 7/7 (100%) | one spoke for or against the budget so Malloy declared the public hearing closed... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=356`

- **Vector count**: 7
- **Sample IDs**: `minutes-356.pdf-chunk-0`, `minutes-356.pdf-chunk-6`, `minutes-356.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-356.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=356 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    March 27, 2017      The Fairfield Cit... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=400`

- **Vector count**: 7
- **Sample IDs**: `minutes-400.pdf-chunk-1`, `minutes-400.pdf-chunk-0`, `minutes-400.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-400.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=400 |
| `text` | 7/7 (100%) | RARY BOARD MINUTES.    TO ADOPT RESOLUTION NO. 3585 PROVIDING   EMPLOYMENT IN TH... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=424`

- **Vector count**: 7
- **Sample IDs**: `minutes-424.pdf-chunk-0`, `minutes-424.pdf-chunk-3`, `minutes-424.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-424.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=424 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  September 24, 2018      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=407`

- **Vector count**: 7
- **Sample IDs**: `minutes-407.pdf-chunk-4`, `minutes-407.pdf-chunk-2`, `minutes-407.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-407.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=407 |
| `text` | 7/7 (100%) | seconded by Anderson  AYES: Thompson, Anderson, Flournoy, Gandy, Hamilton, Halle... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=439`

- **Vector count**: 7
- **Sample IDs**: `minutes-439.pdf-chunk-5`, `minutes-439.pdf-chunk-4`, `minutes-439.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-439.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=439 |
| `text` | 7/7 (100%) | GBRAI ORDINANCE.    MAYOR REPORT  Mayor Malloy has been working on re-submitting... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=472`

- **Vector count**: 7
- **Sample IDs**: `minutes-472.pdf-chunk-1`, `minutes-472.pdf-chunk-3`, `minutes-472.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-472.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=472 |
| `text` | 7/7 (100%) | RS.    TO ADOPT RESOLUTION NO. 3811 APPROVING  EMPLOYOMENT IN THE PARK & RECREAT... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=471`

- **Vector count**: 7
- **Sample IDs**: `minutes-471.pdf-chunk-0`, `minutes-471.pdf-chunk-3`, `minutes-471.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-471.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=471 |
| `text` | 7/7 (100%) |     MINUTES OF THE FAIRFIELD CITY COUNCIL    March 9, 2020    The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=462`

- **Vector count**: 7
- **Sample IDs**: `minutes-462.pdf-chunk-4`, `minutes-462.pdf-chunk-1`, `minutes-462.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-462.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=462 |
| `text` | 7/7 (100%) |  also stated all endangered plants must have physical barriers put in place.  St... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=485`

- **Vector count**: 7
- **Sample IDs**: `minutes-485.pdf-chunk-0`, `minutes-485.pdf-chunk-3`, `minutes-485.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-485.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=485 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    SEPTEMBER 14, 2020      The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=479`

- **Vector count**: 7
- **Sample IDs**: `minutes-479.pdf-chunk-2`, `minutes-479.pdf-chunk-6`, `minutes-479.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-479.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=479 |
| `text` | 7/7 (100%) | and Twohill   NAYS:  Rasmussen, Flournoy and Ham      TO APPROVE THE CONCEPT OF ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=478`

- **Vector count**: 7
- **Sample IDs**: `minutes-478.pdf-chunk-3`, `minutes-478.pdf-chunk-4`, `minutes-478.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-478.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=478 |
| `text` | 7/7 (100%) | 6/22/20  IMPROVEMENTS – RESURFACING 2020  AS FINAL.    Moved by Flournoy, second... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=487`

- **Vector count**: 7
- **Sample IDs**: `minutes-487.pdf-chunk-5`, `minutes-487.pdf-chunk-2`, `minutes-487.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-487.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=487 |
| `text` | 7/7 (100%) |  501(c)(3) exemptions that may  need to be included in the proposed by-laws.  He... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=488`

- **Vector count**: 7
- **Sample IDs**: `minutes-488.pdf-chunk-0`, `minutes-488.pdf-chunk-2`, `minutes-488.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-488.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=488 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    October 26, 2020      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=489`

- **Vector count**: 7
- **Sample IDs**: `minutes-489.pdf-chunk-2`, `minutes-489.pdf-chunk-6`, `minutes-489.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-489.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=489 |
| `text` | 7/7 (100%) | Gandy   AYES:  Anderson, Gandy, Rasmussen, Flournoy, Twohill, Halley and Ham    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=499`

- **Vector count**: 7
- **Sample IDs**: `minutes-499.pdf-chunk-4`, `minutes-499.pdf-chunk-0`, `minutes-499.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-499.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=499 |
| `text` | 7/7 (100%) | nd Anderson        TO WAIVE THE FIRST READING OF ORDINANCE    NO. 1201 REZONING ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=50`

- **Vector count**: 7
- **Sample IDs**: `minutes-50.pdf-chunk-0`, `minutes-50.pdf-chunk-3`, `minutes-50.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-50.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=50 |
| `text` | 7/7 (100%) |   MINUTES OF THE REGULAR CITY COUNCIL MEETING    February 28, 2011        The Fa... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=638`

- **Vector count**: 7
- **Sample IDs**: `minutes-638.pdf-chunk-1`, `minutes-638.pdf-chunk-3`, `minutes-638.pdf-chunk-6`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-638.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=638 |
| `text` | 7/7 (100%) |  FORUM / APPEARANCES  John Miller address Council regarding signs violating publ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=637`

- **Vector count**: 7
- **Sample IDs**: `minutes-637.pdf-chunk-4`, `minutes-637.pdf-chunk-5`, `minutes-637.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-637.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=637 |
| `text` | 7/7 (100%) |  we already have provisions in place in the  City Code along with what is docume... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=641`

- **Vector count**: 7
- **Sample IDs**: `minutes-641.pdf-chunk-0`, `minutes-641.pdf-chunk-5`, `minutes-641.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-641.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=641 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SEPTEMBER 27, 2021      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=646`

- **Vector count**: 7
- **Sample IDs**: `minutes-646.pdf-chunk-0`, `minutes-646.pdf-chunk-4`, `minutes-646.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-646.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=646 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  NOVEMBER 22, 2021    The Fairfield City... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=636`

- **Vector count**: 7
- **Sample IDs**: `minutes-636.pdf-chunk-4`, `minutes-636.pdf-chunk-6`, `minutes-636.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-636.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=636 |
| `text` | 7/7 (100%) |  Twohill       TO ADOPT RESOLUTON NO. 3967    ACCEPTING A TEMPORARY EASEMENT    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=669`

- **Vector count**: 7
- **Sample IDs**: `minutes-669.pdf-chunk-2`, `minutes-669.pdf-chunk-6`, `minutes-669.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-669.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=669 |
| `text` | 7/7 (100%) | ude  of agencies and businesses in the community.    RESOLUTIONS, ACTION ITEMS &... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=698`

- **Vector count**: 7
- **Sample IDs**: `minutes-698.pdf-chunk-0`, `minutes-698.pdf-chunk-6`, `minutes-698.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-698.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=698 |
| `text` | 7/7 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  January 22, 2024    The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=714`

- **Vector count**: 7
- **Sample IDs**: `minutes-714.pdf-chunk-5`, `minutes-714.pdf-chunk-6`, `minutes-714.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-714.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=714 |
| `text` | 7/7 (100%) |  Rowe      TO CREDIT 105 S 3 RD  STREET IN THE AMOUNT  OF $2,960.39 IN SEWER CHA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=72`

- **Vector count**: 7
- **Sample IDs**: `minutes-72.pdf-chunk-6`, `minutes-72.pdf-chunk-0`, `minutes-72.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-72.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=72 |
| `text` | 7/7 (100%) | that the low bid from Anderson, Larkin & Co. of Ottumwa be  accepted.    Moved b... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=745`

- **Vector count**: 7
- **Sample IDs**: `minutes-745.pdf-chunk-5`, `minutes-745.pdf-chunk-1`, `minutes-745.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-745.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=745 |
| `text` | 7/7 (100%) | AYES:  Estey, Ham, Gandy, Rowe and Kness      TO ALLOW CHRIS SORFLATEN TO FILL O... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=761`

- **Vector count**: 7
- **Sample IDs**: `minutes-761.pdf-chunk-5`, `minutes-761.pdf-chunk-6`, `minutes-761.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-761.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=761 |
| `text` | 7/7 (100%) | .    CITY ATTORNEY REPORT  City Attorney John Morrissey recalled a few articles ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=94`

- **Vector count**: 7
- **Sample IDs**: `minutes-94.pdf-chunk-1`, `minutes-94.pdf-chunk-6`, `minutes-94.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-94.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=94 |
| `text` | 7/7 (100%) | N THE FIRE  DEPARTMENT.    APPEARANCES  Dennis Thomes from the Jefferson County ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=88`

- **Vector count**: 7
- **Sample IDs**: `minutes-88.pdf-chunk-4`, `minutes-88.pdf-chunk-5`, `minutes-88.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 7/7 (100%) | minutes-88.pdf |
| `source` | 7/7 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=88 |
| `text` | 7/7 (100%) | sen, Revolinski      TO ADOPT RESOLUTION NO. 2883    APPROVING A TAX ABATEMENT  ... |

### `https://www.miu.edu/ma-in-enlightenment-leadership`

- **Vector count**: 7
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-0`, `miu-aHR0cHM6Ly93d3cubWl1-3`, `miu-aHR0cHM6Ly93d3cubWl1-1`
- **ID patterns**: `other` (7)
- **Vectors profiled for metadata**: 7

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 7/7 (100%) | education |
| `filename` | 7/7 (100%) | Maharishi International University — https://www.miu.edu/ma-in-enlightenment-lea... |
| `org` | 7/7 (100%) | Maharishi International University |
| `source` | 7/7 (100%) | https://www.miu.edu/ma-in-enlightenment-leadership |
| `text` | 7/7 (100%) | MA in Enlightenment & Leadership \| Maharishi University Open Curriculum - map yo... |
| `type` | 7/7 (100%) | community_org |

### `Fairfield Beautification Commission Weed Team`

- **Vector count**: 6
- **Sample IDs**: `beautification-weed-team_chunk_2`, `beautification-weed-team_chunk_0`, `beautification-weed-team_chunk_4`
- **ID patterns**: `filename_chunk_N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | community |
| `chunkIndex` | 6/6 (100%) | 2 |
| `filename` | 6/6 (100%) | beautification-weed-team.txt |
| `source` | 6/6 (100%) | Fairfield Beautification Commission Weed Team |
| `subcategory` | 6/6 (100%) | beautification |
| `text` | 6/6 (100%) | -up has not cost the city a dime. Other members of the commission have their own... |
| `type` | 6/6 (100%) | community_org |

### `https://www.youtube.com/watch?v=037Oa0eTt7k`

- **Vector count**: 6
- **Sample IDs**: `fc-council-037Oa0eTt7k-3`, `fc-council-037Oa0eTt7k-5`, `fc-council-037Oa0eTt7k-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 11-14-22 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=037Oa0eTt7k |
| `text` | 6/6 (100%) | T permit and the railroad permit is this and this is like 25 Pages if they have ... |
| `title` | 6/6 (100%) | City Council 11-14-22 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=2Vh15JTv-7I`

- **Vector count**: 6
- **Sample IDs**: `fc-council-2Vh15JTv-7I-5`, `fc-council-2Vh15JTv-7I-2`, `fc-council-2Vh15JTv-7I-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 8-27-18 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=2Vh15JTv-7I |
| `text` | 6/6 (100%) | m. to 8:30 a. m. school day afternoons from 3 p. m. to 4 p. m. no changes recomm... |
| `title` | 6/6 (100%) | City Council 8-27-18 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=3ANjEoIdMJI`

- **Vector count**: 6
- **Sample IDs**: `fc-council-3ANjEoIdMJI-0`, `fc-council-3ANjEoIdMJI-4`, `fc-council-3ANjEoIdMJI-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 5-28-24 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=3ANjEoIdMJI |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 5-28-24  I cal... |
| `title` | 6/6 (100%) | City Council 5-28-24 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=3qdmloS_1LM`

- **Vector count**: 6
- **Sample IDs**: `fc-council-3qdmloS_1LM-5`, `fc-council-3qdmloS_1LM-2`, `fc-council-3qdmloS_1LM-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 3-12-18 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=3qdmloS_1LM |
| `text` | 6/6 (100%) | 0 402 x if there's any public comment not seeing any will close the public heari... |
| `title` | 6/6 (100%) | City Council 3-12-18 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9Nqd7Dg9BWs`

- **Vector count**: 6
- **Sample IDs**: `fc-council-9Nqd7Dg9BWs-4`, `fc-council-9Nqd7Dg9BWs-3`, `fc-council-9Nqd7Dg9BWs-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 7-8-19 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=9Nqd7Dg9BWs |
| `text` | 6/6 (100%) | wizard was supposed to send me a invoice so that we could pay prepay for some of... |
| `title` | 6/6 (100%) | City Council 7-8-19 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Az8JxAJKx5Q`

- **Vector count**: 6
- **Sample IDs**: `fc-council-Az8JxAJKx5Q-0`, `fc-council-Az8JxAJKx5Q-4`, `fc-council-Az8JxAJKx5Q-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=Az8JxAJKx5Q |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Study S... |
| `title` | 6/6 (100%) | City of Fairfield \| Study Session & City Council 1.27.25 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9dm2ZsSJm5c`

- **Vector count**: 6
- **Sample IDs**: `fc-council-9dm2ZsSJm5c-1`, `fc-council-9dm2ZsSJm5c-2`, `fc-council-9dm2ZsSJm5c-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 12-18-23 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=9dm2ZsSJm5c |
| `text` | 6/6 (100%) | 2 that says uh prohibited traps anywhere within the city limits is prohibited so... |
| `title` | 6/6 (100%) | City Council 12-18-23 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=DaCHv5e1vXk`

- **Vector count**: 6
- **Sample IDs**: `fc-council-DaCHv5e1vXk-4`, `fc-council-DaCHv5e1vXk-0`, `fc-council-DaCHv5e1vXk-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 7-26-21 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=DaCHv5e1vXk |
| `text` | 6/6 (100%) | o. t buildings in order to help the architect with some of their concerns regard... |
| `title` | 6/6 (100%) | City Council 7-26-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CkxMAcMgEuc`

- **Vector count**: 6
- **Sample IDs**: `fc-council-CkxMAcMgEuc-3`, `fc-council-CkxMAcMgEuc-5`, `fc-council-CkxMAcMgEuc-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — Fairfield Town Hall \| Fairfield Police Dept. \| 1-9... |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=CkxMAcMgEuc |
| `text` | 6/6 (100%) | 9 of time they're great and loving to you and your family but sometimes if they'... |
| `title` | 6/6 (100%) | Fairfield Town Hall \| Fairfield Police Dept. \| 1-9-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EcFSD_olYxo`

- **Vector count**: 6
- **Sample IDs**: `fc-council-EcFSD_olYxo-5`, `fc-council-EcFSD_olYxo-3`, `fc-council-EcFSD_olYxo-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 8-12-19 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=EcFSD_olYxo |
| `text` | 6/6 (100%) | for that meeting as well so entertain a motion to set the workshop in public mee... |
| `title` | 6/6 (100%) | City Council 8-12-19 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GJsaBMKbNbM`

- **Vector count**: 6
- **Sample IDs**: `fc-council-GJsaBMKbNbM-5`, `fc-council-GJsaBMKbNbM-4`, `fc-council-GJsaBMKbNbM-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — 10-28-13 Fairfield City Council Meeting |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=GJsaBMKbNbM |
| `text` | 6/6 (100%) | 5 cents of which we have the discretion in a Year's period of time to use the fu... |
| `title` | 6/6 (100%) | 10-28-13 Fairfield City Council Meeting |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=P47kscrGTmE`

- **Vector count**: 6
- **Sample IDs**: `fc-council-P47kscrGTmE-1`, `fc-council-P47kscrGTmE-5`, `fc-council-P47kscrGTmE-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 9-14-20 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=P47kscrGTmE |
| `text` | 6/6 (100%) | 32 cents motion to approve consent agenda second okay it's been moved by gandhi ... |
| `title` | 6/6 (100%) | City Council 9-14-20 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OLgSKUDV2Ic`

- **Vector count**: 6
- **Sample IDs**: `fc-council-OLgSKUDV2Ic-1`, `fc-council-OLgSKUDV2Ic-2`, `fc-council-OLgSKUDV2Ic-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-18 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=OLgSKUDV2Ic |
| `text` | 6/6 (100%) | 15 acres and a temporary construction easement of 0. 1 3 acres in this area ther... |
| `title` | 6/6 (100%) | City Council 11-13-18 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Pd8Ev4iqtAY`

- **Vector count**: 6
- **Sample IDs**: `fc-council-Pd8Ev4iqtAY-1`, `fc-council-Pd8Ev4iqtAY-5`, `fc-council-Pd8Ev4iqtAY-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 9-12-16 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=Pd8Ev4iqtAY |
| `text` | 6/6 (100%) | 79 for our step one uh conveyance project any questions regarding the consent ag... |
| `title` | 6/6 (100%) | City Council 9-12-16 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=RXKjTnYL1Yo`

- **Vector count**: 6
- **Sample IDs**: `fc-council-RXKjTnYL1Yo-4`, `fc-council-RXKjTnYL1Yo-3`, `fc-council-RXKjTnYL1Yo-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 8-14-23 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=RXKjTnYL1Yo |
| `text` | 6/6 (100%) | 63 cents a month for a hundred thousand dollar house so it's not a very large Le... |
| `title` | 6/6 (100%) | City Council 8-14-23 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=VPGIb2KGwmM`

- **Vector count**: 6
- **Sample IDs**: `fc-council-VPGIb2KGwmM-2`, `fc-council-VPGIb2KGwmM-5`, `fc-council-VPGIb2KGwmM-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 9-28-20 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=VPGIb2KGwmM |
| `text` | 6/6 (100%) | com slash do scarecrows you will find all the information and if you're going to... |
| `title` | 6/6 (100%) | City Council 9-28-20 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=WPKYvk7GGRA`

- **Vector count**: 6
- **Sample IDs**: `fc-council-WPKYvk7GGRA-3`, `fc-council-WPKYvk7GGRA-1`, `fc-council-WPKYvk7GGRA-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — Special City Council Work Session 6-16-21 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=WPKYvk7GGRA |
| `text` | 6/6 (100%) | so uh long story short these things uh they build on each other and there is kin... |
| `title` | 6/6 (100%) | Special City Council Work Session 6-16-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Z4wwMy7UxQU`

- **Vector count**: 6
- **Sample IDs**: `fc-council-Z4wwMy7UxQU-2`, `fc-council-Z4wwMy7UxQU-4`, `fc-council-Z4wwMy7UxQU-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — Fairfield City Council 4-8-13 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=Z4wwMy7UxQU |
| `text` | 6/6 (100%) | m. to 12:00 p. m. then we have fairfest that would like to close down streets fr... |
| `title` | 6/6 (100%) | Fairfield City Council 4-8-13 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ZtotQhZiLBg`

- **Vector count**: 6
- **Sample IDs**: `fc-council-ZtotQhZiLBg-2`, `fc-council-ZtotQhZiLBg-0`, `fc-council-ZtotQhZiLBg-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 4-8-19 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=ZtotQhZiLBg |
| `text` | 6/6 (100%) | 97 which would be their fixed rate and so then you can see the the calculations ... |
| `title` | 6/6 (100%) | City Council 4-8-19 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cKFXXV386m8`

- **Vector count**: 6
- **Sample IDs**: `fc-council-cKFXXV386m8-2`, `fc-council-cKFXXV386m8-5`, `fc-council-cKFXXV386m8-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 7-11-16 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=cKFXXV386m8 |
| `text` | 6/6 (100%) | Mack on behalf of the city and the council great thanks Katie now you did have a... |
| `title` | 6/6 (100%) | City Council 7-11-16 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cBW-57hiEtI`

- **Vector count**: 6
- **Sample IDs**: `fc-council-cBW-57hiEtI-4`, `fc-council-cBW-57hiEtI-3`, `fc-council-cBW-57hiEtI-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 4-24-23 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=cBW-57hiEtI |
| `text` | 6/6 (100%) | foreign so the amendment is and this is a really the product of the our co-compl... |
| `title` | 6/6 (100%) | City Council 4-24-23 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=bSDEZ1Owcro`

- **Vector count**: 6
- **Sample IDs**: `fc-council-bSDEZ1Owcro-1`, `fc-council-bSDEZ1Owcro-3`, `fc-council-bSDEZ1Owcro-5`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 8-9-21 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=bSDEZ1Owcro |
| `text` | 6/6 (100%) | 36 and maxwell construction of 229 take a motion to approve good questions erin ... |
| `title` | 6/6 (100%) | City Council 8-9-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=bmrRb_O34h8`

- **Vector count**: 6
- **Sample IDs**: `fc-council-bmrRb_O34h8-1`, `fc-council-bmrRb_O34h8-2`, `fc-council-bmrRb_O34h8-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 1-27-21 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=bmrRb_O34h8 |
| `text` | 6/6 (100%) | if we don't renew it now when is the expiration date december 22 already expired... |
| `title` | 6/6 (100%) | City Council 1-27-21 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=dmXUwkb_N8E`

- **Vector count**: 6
- **Sample IDs**: `fc-council-dmXUwkb_N8E-0`, `fc-council-dmXUwkb_N8E-5`, `fc-council-dmXUwkb_N8E-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-23 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=dmXUwkb_N8E |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-13-23  call... |
| `title` | 6/6 (100%) | City Council 11-13-23 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=diN0S83q2sk`

- **Vector count**: 6
- **Sample IDs**: `fc-council-diN0S83q2sk-4`, `fc-council-diN0S83q2sk-0`, `fc-council-diN0S83q2sk-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 10-14-24 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=diN0S83q2sk |
| `text` | 6/6 (100%) | 1 million for the infrastructure remember was that high or not could be wrong th... |
| `title` | 6/6 (100%) | City Council 10-14-24 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=eQJO7cCSQL0`

- **Vector count**: 6
- **Sample IDs**: `fc-council-eQJO7cCSQL0-0`, `fc-council-eQJO7cCSQL0-5`, `fc-council-eQJO7cCSQL0-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 11-13-17 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=eQJO7cCSQL0 |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-13-17  good... |
| `title` | 6/6 (100%) | City Council 11-13-17 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=heqpanrJNh4`

- **Vector count**: 6
- **Sample IDs**: `fc-council-heqpanrJNh4-0`, `fc-council-heqpanrJNh4-1`, `fc-council-heqpanrJNh4-3`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 1-27-20 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=heqpanrJNh4 |
| `text` | 6/6 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 1-27-20  well ... |
| `title` | 6/6 (100%) | City Council 1-27-20 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=j1s3tYNsxGE`

- **Vector count**: 6
- **Sample IDs**: `fc-council-j1s3tYNsxGE-3`, `fc-council-j1s3tYNsxGE-2`, `fc-council-j1s3tYNsxGE-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 6-27-22 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=j1s3tYNsxGE |
| `text` | 6/6 (100%) | yes so this was the 30-second over overlay project this project was located on t... |
| `title` | 6/6 (100%) | City Council 6-27-22 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=oO0X7yYPUJo`

- **Vector count**: 6
- **Sample IDs**: `fc-council-oO0X7yYPUJo-5`, `fc-council-oO0X7yYPUJo-0`, `fc-council-oO0X7yYPUJo-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 6-13-16 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=oO0X7yYPUJo |
| `text` | 6/6 (100%) | 64 um we had uh removed the whole section and didn't replace it correctly so thi... |
| `title` | 6/6 (100%) | City Council 6-13-16 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=pHarT2NpbvI`

- **Vector count**: 6
- **Sample IDs**: `fc-council-pHarT2NpbvI-1`, `fc-council-pHarT2NpbvI-2`, `fc-council-pHarT2NpbvI-4`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 4-22-24 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=pHarT2NpbvI |
| `text` | 6/6 (100%) | or something that would see and I don't think that it did last year that was jus... |
| `title` | 6/6 (100%) | City Council 4-22-24 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qTJKDq2rDhM`

- **Vector count**: 6
- **Sample IDs**: `fc-council-qTJKDq2rDhM-1`, `fc-council-qTJKDq2rDhM-5`, `fc-council-qTJKDq2rDhM-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 10.14.24 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=qTJKDq2rDhM |
| `text` | 6/6 (100%) | is there a motion so moved moved by Gandy second second by ham any discussion pl... |
| `title` | 6/6 (100%) | City Council 10.14.24 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=v-qgc-pxM60`

- **Vector count**: 6
- **Sample IDs**: `fc-council-v-qgc-pxM60-5`, `fc-council-v-qgc-pxM60-0`, `fc-council-v-qgc-pxM60-1`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 2-26-18 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=v-qgc-pxM60 |
| `text` | 6/6 (100%) | early on in the process but this is a little sobering but we'll keep working on ... |
| `title` | 6/6 (100%) | City Council 2-26-18 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wMpsZJ8gRRI`

- **Vector count**: 6
- **Sample IDs**: `fc-council-wMpsZJ8gRRI-4`, `fc-council-wMpsZJ8gRRI-3`, `fc-council-wMpsZJ8gRRI-2`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 9-9-19 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=wMpsZJ8gRRI |
| `text` | 6/6 (100%) | Morrissey to see if there was more of the law that I did not know up and I would... |
| `title` | 6/6 (100%) | City Council 9-9-19 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=z7ILbjTZ3Uo`

- **Vector count**: 6
- **Sample IDs**: `fc-council-z7ILbjTZ3Uo-3`, `fc-council-z7ILbjTZ3Uo-2`, `fc-council-z7ILbjTZ3Uo-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | government |
| `filename` | 6/6 (100%) | City Council Meeting — null — City Council 12-18-17 |
| `org` | 6/6 (100%) | Fairfield City Council |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=z7ILbjTZ3Uo |
| `text` | 6/6 (100%) | 50 thank you well any questions counsel I would entertain a motion to approve th... |
| `title` | 6/6 (100%) | City Council 12-18-17 |
| `type` | 6/6 (100%) | council_meeting |

### `https://www.intelligentcommunity.org/thought_leaders`

- **Vector count**: 6
- **Sample IDs**: `icf-ab9623107153a3a1f4446a57-4`, `icf-ab9623107153a3a1f4446a57-1`, `icf-ab9623107153a3a1f4446a57-0`
- **ID patterns**: `orgId-sha24-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | civic-knowledge |
| `filename` | 6/6 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/thought_leade... |
| `org` | 6/6 (100%) | Intelligent Community Forum |
| `source` | 6/6 (100%) | https://www.intelligentcommunity.org/thought_leaders |
| `text` | 6/6 (100%) | Shawn Graham is the 31st Premier of the Province of New Brunswick, Canada. In 20... |
| `type` | 6/6 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=108`

- **Vector count**: 6
- **Sample IDs**: `minutes-108.pdf-chunk-5`, `minutes-108.pdf-chunk-2`, `minutes-108.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-108.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=108 |
| `text` | 6/6 (100%) | D ADOPT ORDINANCE NO. 1088 ADOPTING    A WATER METER OPT-OUT PROGRAM.    ADMINIS... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=135`

- **Vector count**: 6
- **Sample IDs**: `minutes-135.pdf-chunk-5`, `minutes-135.pdf-chunk-0`, `minutes-135.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-135.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=135 |
| `text` | 6/6 (100%) | milton, seconded by Boyer   AYES:  Hamilton, Boyer, Revolinski, Hammes, Rasmusse... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=121`

- **Vector count**: 6
- **Sample IDs**: `minutes-121.pdf-chunk-5`, `minutes-121.pdf-chunk-4`, `minutes-121.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-121.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=121 |
| `text` | 6/6 (100%) | SECTION 21.5 (1)J.       Page 4  Minutes  11/26/12      Moved by Hamilton, secon... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=123`

- **Vector count**: 6
- **Sample IDs**: `minutes-123.pdf-chunk-4`, `minutes-123.pdf-chunk-2`, `minutes-123.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-123.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=123 |
| `text` | 6/6 (100%) | O APPOINT CLYDE CLEVELAND TO THE    PLANNING & ZONING BOARD AS    RECOMMENDED BY... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=112`

- **Vector count**: 6
- **Sample IDs**: `minutes-112.pdf-chunk-5`, `minutes-112.pdf-chunk-3`, `minutes-112.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-112.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=112 |
| `text` | 6/6 (100%) | oved by Hamilton, seconded by Hammes   AYES;  Hamilton, Hammes, Silvers, Halley,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=114`

- **Vector count**: 6
- **Sample IDs**: `minutes-114.pdf-chunk-1`, `minutes-114.pdf-chunk-4`, `minutes-114.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-114.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=114 |
| `text` | 6/6 (100%) |     Moved by Halley, seconded by Boyer   AYES:  Halley, Boyer, Hamilton, Rasmuss... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=144`

- **Vector count**: 6
- **Sample IDs**: `minutes-144.pdf-chunk-1`, `minutes-144.pdf-chunk-0`, `minutes-144.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-144.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=144 |
| `text` | 6/6 (100%) | amilton, seconded by Ledger-Kalen   AYES:  Hamilton, Ledger-Kalen, Hammes, Rasmu... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=164`

- **Vector count**: 6
- **Sample IDs**: `minutes-164.pdf-chunk-4`, `minutes-164.pdf-chunk-2`, `minutes-164.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-164.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=164 |
| `text` | 6/6 (100%) | n, Hammes, Revolinski, Rasmussen, Boyer, Ledger-Kalen, Halley      TO PASS THROU... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=153`

- **Vector count**: 6
- **Sample IDs**: `minutes-153.pdf-chunk-0`, `minutes-153.pdf-chunk-3`, `minutes-153.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-153.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=153 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    July 8, 2013      The Fairfield City ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=154`

- **Vector count**: 6
- **Sample IDs**: `minutes-154.pdf-chunk-0`, `minutes-154.pdf-chunk-5`, `minutes-154.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-154.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=154 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    July 22, 2013        The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=162`

- **Vector count**: 6
- **Sample IDs**: `minutes-162.pdf-chunk-4`, `minutes-162.pdf-chunk-3`, `minutes-162.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-162.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=162 |
| `text` | 6/6 (100%) | E RATE.    Moved by Hamilton, seconded by Hammes   AYES:  Hamilton, Hammes, Boye... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=197`

- **Vector count**: 6
- **Sample IDs**: `minutes-197.pdf-chunk-3`, `minutes-197.pdf-chunk-0`, `minutes-197.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-197.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=197 |
| `text` | 6/6 (100%) | A TAX ABATEMENT FOR    PAUL GLOSSOP AT 53 W. BROADWAY.    MAYOR REPORT  Moved by... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=194`

- **Vector count**: 6
- **Sample IDs**: `minutes-194.pdf-chunk-2`, `minutes-194.pdf-chunk-4`, `minutes-194.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-194.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=194 |
| `text` | 6/6 (100%) | PTEMBER    21, 2014 FOR THE ANNUAL CAR COLLECTOR’S UNLIMITED    CAR  SHOW.    RE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=227`

- **Vector count**: 6
- **Sample IDs**: `minutes-227.pdf-chunk-3`, `minutes-227.pdf-chunk-0`, `minutes-227.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-227.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=227 |
| `text` | 6/6 (100%) | on, Ledger-Kalen, Revolinski      TO ADOPT RESOLUTION NO. 3094    ACCEPTING A LA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=196`

- **Vector count**: 6
- **Sample IDs**: `minutes-196.pdf-chunk-2`, `minutes-196.pdf-chunk-3`, `minutes-196.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-196.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=196 |
| `text` | 6/6 (100%) |  Hammes, Rasmussen, Ledger-Kalen, Hamilton      TO ADOPT RESOLUTION NO. 3058 AME... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=249`

- **Vector count**: 6
- **Sample IDs**: `minutes-249.pdf-chunk-5`, `minutes-249.pdf-chunk-0`, `minutes-249.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-249.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=249 |
| `text` | 6/6 (100%) | len, Halley, Hammes, Flournoy, Rasmussen      TO ENTER INTO CLOSED SESSION AT 9:... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=231`

- **Vector count**: 6
- **Sample IDs**: `minutes-231.pdf-chunk-5`, `minutes-231.pdf-chunk-0`, `minutes-231.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-231.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=231 |
| `text` | 6/6 (100%) | SED SESSION.    ADJOURNMENT  Moved by Hamilton, seconded by Ledger-Kalen   AYES:... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=245`

- **Vector count**: 6
- **Sample IDs**: `minutes-245.pdf-chunk-4`, `minutes-245.pdf-chunk-0`, `minutes-245.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-245.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=245 |
| `text` | 6/6 (100%) | Halley, Rasmussen, Hammes      TO AUTHORIZE THE STEP II SANITARY SEWER PROJECT  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=246`

- **Vector count**: 6
- **Sample IDs**: `minutes-246.pdf-chunk-0`, `minutes-246.pdf-chunk-5`, `minutes-246.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-246.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=246 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CTIY COUNCIL MEETING    November 24, 2014      The Fa... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=270`

- **Vector count**: 6
- **Sample IDs**: `minutes-270.pdf-chunk-0`, `minutes-270.pdf-chunk-2`, `minutes-270.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-270.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=270 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    March 9, 2015        The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=282`

- **Vector count**: 6
- **Sample IDs**: `minutes-282.pdf-chunk-5`, `minutes-282.pdf-chunk-2`, `minutes-282.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-282.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=282 |
| `text` | 6/6 (100%) | nded by Ledger-Kalen   AYES:  Hammes, Ledger-Kalen, Flournoy, Halley, Rasmussen,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=290`

- **Vector count**: 6
- **Sample IDs**: `minutes-290.pdf-chunk-0`, `minutes-290.pdf-chunk-2`, `minutes-290.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-290.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=290 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    August 10, 2015        The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=267`

- **Vector count**: 6
- **Sample IDs**: `minutes-267.pdf-chunk-5`, `minutes-267.pdf-chunk-4`, `minutes-267.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-267.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=267 |
| `text` | 6/6 (100%) | ton, seconded by Revolinski   AYES:  Hamilton, Revolinski, Hammes, Flournoy, Led... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=274`

- **Vector count**: 6
- **Sample IDs**: `minutes-274.pdf-chunk-4`, `minutes-274.pdf-chunk-1`, `minutes-274.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-274.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=274 |
| `text` | 6/6 (100%) | ded by Ledger-Kalen   AYES:  Rasmussen, Ledger-Kalen, Flournoy, Hammes, Hamilton... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=279`

- **Vector count**: 6
- **Sample IDs**: `minutes-279.pdf-chunk-3`, `minutes-279.pdf-chunk-2`, `minutes-279.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-279.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=279 |
| `text` | 6/6 (100%) | es, Halley      TO ADOPT RESOLUTION NO. 3213 APPROVING    THE FAIRFIELD MUNICIPA... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=266`

- **Vector count**: 6
- **Sample IDs**: `minutes-266.pdf-chunk-2`, `minutes-266.pdf-chunk-5`, `minutes-266.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-266.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=266 |
| `text` | 6/6 (100%) | loy announced this was the date and time for a public hearing on the Community R... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=311`

- **Vector count**: 6
- **Sample IDs**: `minutes-311.pdf-chunk-5`, `minutes-311.pdf-chunk-3`, `minutes-311.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-311.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=311 |
| `text` | 6/6 (100%) | y   AYES:  Hamilton, Flournoy, Thompson, Anderson, Revolinski, Halley      TO AD... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=313`

- **Vector count**: 6
- **Sample IDs**: `minutes-313.pdf-chunk-5`, `minutes-313.pdf-chunk-2`, `minutes-313.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-313.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=313 |
| `text` | 6/6 (100%) | olinski, Flournoy, Thompson, Anderson      TO APPOINT LAUREN TOWNE TO THE BEAUTI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=310`

- **Vector count**: 6
- **Sample IDs**: `minutes-310.pdf-chunk-3`, `minutes-310.pdf-chunk-1`, `minutes-310.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-310.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=310 |
| `text` | 6/6 (100%) |  date set for a public hearing on the matter of the  adoption of plans, specific... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=300`

- **Vector count**: 6
- **Sample IDs**: `minutes-300.pdf-chunk-0`, `minutes-300.pdf-chunk-3`, `minutes-300.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-300.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=300 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    October 12, 2015      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=301`

- **Vector count**: 6
- **Sample IDs**: `minutes-301.pdf-chunk-1`, `minutes-301.pdf-chunk-5`, `minutes-301.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-301.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=301 |
| `text` | 6/6 (100%) |  FORUM/APPEARANCES  David Humphries appeared before the City Council to discuss ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=333`

- **Vector count**: 6
- **Sample IDs**: `minutes-333.pdf-chunk-2`, `minutes-333.pdf-chunk-1`, `minutes-333.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-333.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=333 |
| `text` | 6/6 (100%) | rs Bureau and the  City of Fairfield will join forces with the branding concept.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=343`

- **Vector count**: 6
- **Sample IDs**: `minutes-343.pdf-chunk-2`, `minutes-343.pdf-chunk-1`, `minutes-343.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-343.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=343 |
| `text` | 6/6 (100%) | T  RESOLUTION NO. 3435 APPROVING A    BOND COUNSEL ENGAGEMENT AGREEMENT    WITH ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=358`

- **Vector count**: 6
- **Sample IDs**: `minutes-358.pdf-chunk-2`, `minutes-358.pdf-chunk-3`, `minutes-358.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-358.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=358 |
| `text` | 6/6 (100%) | rson, Revolinski, Rasmussen, Thompson, Halley, Flournoy      TO APPROVE THE VINT... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=345`

- **Vector count**: 6
- **Sample IDs**: `minutes-345.pdf-chunk-1`, `minutes-345.pdf-chunk-3`, `minutes-345.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-345.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=345 |
| `text` | 6/6 (100%) |     IN THE AMOUNT OF $80,291.25.      TO APPROVE THE 2017 MOBILE HOME    LICENSE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=364`

- **Vector count**: 6
- **Sample IDs**: `minutes-364.pdf-chunk-4`, `minutes-364.pdf-chunk-5`, `minutes-364.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-364.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=364 |
| `text` | 6/6 (100%) | n, Rasmussen, Flournoy      TO ADOPT RESOLUTION NO. 3523 ENTERING    INTO A 28E ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=370`

- **Vector count**: 6
- **Sample IDs**: `minutes-370.pdf-chunk-2`, `minutes-370.pdf-chunk-4`, `minutes-370.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-370.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=370 |
| `text` | 6/6 (100%) | alley, seconded by Hamilton   AYES:  Halley, Hamilton, Rasmussen, Revolinski, Th... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=361`

- **Vector count**: 6
- **Sample IDs**: `minutes-361.pdf-chunk-4`, `minutes-361.pdf-chunk-1`, `minutes-361.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-361.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=361 |
| `text` | 6/6 (100%) | lton, seconded by Rasmussen   AYES:  Hamilton, Rasmussen, Halley, Anderson, Thom... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=431`

- **Vector count**: 6
- **Sample IDs**: `minutes-431.pdf-chunk-0`, `minutes-431.pdf-chunk-2`, `minutes-431.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-431.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=431 |
| `text` | 6/6 (100%) |     MINUTES OF THE FAIRFIELD CITY COUNCIL    January 28, 2019    The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=435`

- **Vector count**: 6
- **Sample IDs**: `minutes-435.pdf-chunk-1`, `minutes-435.pdf-chunk-3`, `minutes-435.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-435.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=435 |
| `text` | 6/6 (100%) | approached Council on behalf of the Fairfield RAGBRAI Committee to request funds... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=430`

- **Vector count**: 6
- **Sample IDs**: `minutes-430.pdf-chunk-5`, `minutes-430.pdf-chunk-4`, `minutes-430.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-430.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=430 |
| `text` | 6/6 (100%) | ournoy, seconded by Thompson   AYES:  Flournoy, Thompson, Halley, Gandy, Rasmuss... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=441`

- **Vector count**: 6
- **Sample IDs**: `minutes-441.pdf-chunk-0`, `minutes-441.pdf-chunk-2`, `minutes-441.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-441.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=441 |
| `text` | 6/6 (100%) |    MINUTES OF THE FAIRFIELD CITY COUNCIL    May 28, 2019    The Fairfield City C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=447`

- **Vector count**: 6
- **Sample IDs**: `minutes-447.pdf-chunk-0`, `minutes-447.pdf-chunk-5`, `minutes-447.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-447.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=447 |
| `text` | 6/6 (100%) |    MINUTES OF THE FAIRFIELD CITY COUNCIL    August 26, 2019    The Fairfield Cit... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=476`

- **Vector count**: 6
- **Sample IDs**: `minutes-476.pdf-chunk-0`, `minutes-476.pdf-chunk-1`, `minutes-476.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-476.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=476 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    May 26, 2020    The Fairfield City Co... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=486`

- **Vector count**: 6
- **Sample IDs**: `minutes-486.pdf-chunk-0`, `minutes-486.pdf-chunk-3`, `minutes-486.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-486.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=486 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    September 28, 2020      The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=49`

- **Vector count**: 6
- **Sample IDs**: `minutes-49.pdf-chunk-0`, `minutes-49.pdf-chunk-1`, `minutes-49.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-49.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=49 |
| `text` | 6/6 (100%) |   MINUTES OF THE REGULAR CITY COUNCIL MEETING    February 14, 2011      The Fair... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=55`

- **Vector count**: 6
- **Sample IDs**: `minutes-55.pdf-chunk-5`, `minutes-55.pdf-chunk-3`, `minutes-55.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-55.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=55 |
| `text` | 6/6 (100%) | ottet      TO ADOPT AN INTERNATIONAL    BUILDING CODE AND AN    INTERNATIONAL RE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=56`

- **Vector count**: 6
- **Sample IDs**: `minutes-56.pdf-chunk-2`, `minutes-56.pdf-chunk-1`, `minutes-56.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-56.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=56 |
| `text` | 6/6 (100%) | ater Treatment Plant Projects.  There were no written or oral objections, so  Ma... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=500`

- **Vector count**: 6
- **Sample IDs**: `minutes-500.pdf-chunk-2`, `minutes-500.pdf-chunk-1`, `minutes-500.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-500.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=500 |
| `text` | 6/6 (100%) | Gandy, Flournoy, Rasmussen, Twohill, Halley and Ham    TO APPROVE A LIQUOR LICEN... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=643`

- **Vector count**: 6
- **Sample IDs**: `minutes-643.pdf-chunk-2`, `minutes-643.pdf-chunk-4`, `minutes-643.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-643.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=643 |
| `text` | 6/6 (100%) | ESTER #1   REPLACEMENT BID OPENED ON OCTOBER 12, 2021  AND RE-BID OUT THE PROJEC... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=650`

- **Vector count**: 6
- **Sample IDs**: `minutes-650.pdf-chunk-1`, `minutes-650.pdf-chunk-3`, `minutes-650.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-650.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=650 |
| `text` | 6/6 (100%) | OF $135,347.43.    TO ACCEPT THE WAYS AND MEANS COMMITTEE  MEETING MINUTES.    T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=658`

- **Vector count**: 6
- **Sample IDs**: `minutes-658.pdf-chunk-0`, `minutes-658.pdf-chunk-1`, `minutes-658.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-658.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=658 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  May 9, 2022      The Fairfield City Cou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=681`

- **Vector count**: 6
- **Sample IDs**: `minutes-681.pdf-chunk-2`, `minutes-681.pdf-chunk-5`, `minutes-681.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-681.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=681 |
| `text` | 6/6 (100%) | ons,  form  of  contract  and  estimate  of  costs  for  the  reconstruction  T-... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=723`

- **Vector count**: 6
- **Sample IDs**: `minutes-723.pdf-chunk-5`, `minutes-723.pdf-chunk-1`, `minutes-723.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-723.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=723 |
| `text` | 6/6 (100%) | orized by Council; and the upcoming Public Safety & Transportation Committee mee... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=725`

- **Vector count**: 6
- **Sample IDs**: `minutes-725.pdf-chunk-3`, `minutes-725.pdf-chunk-0`, `minutes-725.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-725.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=725 |
| `text` | 6/6 (100%) | f funding allows; directing staff to  Increase efforts in removing site distance... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=82`

- **Vector count**: 6
- **Sample IDs**: `minutes-82.pdf-chunk-2`, `minutes-82.pdf-chunk-1`, `minutes-82.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-82.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=82 |
| `text` | 6/6 (100%) |  PERMISSION TO BLOCK    OFF CITY STREETS FOR THE    COLLECTOR CARS UNLIMITED    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=89`

- **Vector count**: 6
- **Sample IDs**: `minutes-89.pdf-chunk-1`, `minutes-89.pdf-chunk-5`, `minutes-89.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-89.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=89 |
| `text` | 6/6 (100%) |   BANK AND ADD MARTHA RASMUSSEN AND   MICHAEL HALLEY.    TO ADOPT RESOLUTION NO.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=91`

- **Vector count**: 6
- **Sample IDs**: `minutes-91.pdf-chunk-2`, `minutes-91.pdf-chunk-1`, `minutes-91.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-91.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=91 |
| `text` | 6/6 (100%) |  THE    FAIRFIELD HIGH SCHOOL PROM ON    APRIL 14.    RESOLUTION, ACTION ITEMS &... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=87`

- **Vector count**: 6
- **Sample IDs**: `minutes-87.pdf-chunk-4`, `minutes-87.pdf-chunk-0`, `minutes-87.pdf-chunk-5`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-87.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=87 |
| `text` | 6/6 (100%) | Board.    Moved by Revolinski, seconded by Hamilton   AYES:  Revolinski, Hamilto... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=90`

- **Vector count**: 6
- **Sample IDs**: `minutes-90.pdf-chunk-1`, `minutes-90.pdf-chunk-0`, `minutes-90.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-90.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=90 |
| `text` | 6/6 (100%) |       TO APPROVE OPERATING CLAIMS IN    THE AMOUNT OF $696,567.33.      TO APPRO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=92`

- **Vector count**: 6
- **Sample IDs**: `minutes-92.pdf-chunk-0`, `minutes-92.pdf-chunk-5`, `minutes-92.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 6/6 (100%) | minutes-92.pdf |
| `source` | 6/6 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=92 |
| `text` | 6/6 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    April 9, 2012        The Fairfield Ci... |

### `https://www.youtube.com/watch?v=JG83-JPrt9A`

- **Vector count**: 6
- **Sample IDs**: `traction-thursdays-JG83-JPrt9A-2`, `traction-thursdays-JG83-JPrt9A-3`, `traction-thursdays-JG83-JPrt9A-0`
- **ID patterns**: `other` (6)
- **Vectors profiled for metadata**: 6

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 6/6 (100%) | economic |
| `filename` | 6/6 (100%) | Traction Thursday — unknown — Traction Thursday 5-23-24 |
| `org` | 6/6 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 6/6 (100%) | traction-thursdays |
| `publishedAt` | 6/6 (100%) |  |
| `source` | 6/6 (100%) | https://www.youtube.com/watch?v=JG83-JPrt9A |
| `text` | 6/6 (100%) | com and I'm working on a number of long-term projects but I'm also interested in... |
| `title` | 6/6 (100%) | Traction Thursday 5-23-24 |
| `type` | 6/6 (100%) | traction_thursday |

### `Fairfield Beautification Commission 2025 Volunteers`

- **Vector count**: 5
- **Sample IDs**: `beautification-volunteers-2025_chunk_4`, `beautification-volunteers-2025_chunk_0`, `beautification-volunteers-2025_chunk_2`
- **ID patterns**: `filename_chunk_N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | community |
| `chunkIndex` | 5/5 (100%) | 4 |
| `filename` | 5/5 (100%) | beautification-volunteers-2025.txt |
| `source` | 5/5 (100%) | Fairfield Beautification Commission 2025 Volunteers |
| `subcategory` | 5/5 (100%) | beautification |
| `text` | 5/5 (100%) | ommission board member) - The Weed Team covers a nine-block section of downtown ... |
| `type` | 5/5 (100%) | community_org |

### `ffcolab.com`

- **Vector count**: 5
- **Sample IDs**: `fairfield_colab_chunk_3`, `fairfield_colab_chunk_4`, `fairfield_colab_chunk_1`
- **ID patterns**: `prefix_name_chunk_N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | economic_development |
| `chunkIndex` | 5/5 (100%) | 3 |
| `filename` | 5/5 (100%) | fairfield_colab.txt |
| `source` | 5/5 (100%) | ffcolab.com |
| `subcategory` | 5/5 (100%) | entrepreneurship |
| `text` | 5/5 (100%) | mber - Flex Light (pay per day): $10/day — amenities access during business hour... |

### `https://www.youtube.com/watch?v=20HtEsUUVVk`

- **Vector count**: 5
- **Sample IDs**: `fc-council-20HtEsUUVVk-3`, `fc-council-20HtEsUUVVk-1`, `fc-council-20HtEsUUVVk-2`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 5-13-24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=20HtEsUUVVk |
| `text` | 5/5 (100%) | on July 26th too so I don't so would be midnight the day they arrive right so th... |
| `title` | 5/5 (100%) | City Council 5-13-24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=7_nhS_M42M8`

- **Vector count**: 5
- **Sample IDs**: `fc-council-7_nhS_M42M8-3`, `fc-council-7_nhS_M42M8-2`, `fc-council-7_nhS_M42M8-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 2-22-21 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=7_nhS_M42M8 |
| `text` | 5/5 (100%) | 63 Levy we're looking at of we're at 63 to go to 67 right sounds that four oh ye... |
| `title` | 5/5 (100%) | City Council 2-22-21 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BOPdwniwmN4`

- **Vector count**: 5
- **Sample IDs**: `fc-council-BOPdwniwmN4-0`, `fc-council-BOPdwniwmN4-3`, `fc-council-BOPdwniwmN4-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 12-15-16 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=BOPdwniwmN4 |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 12-15-16  coul... |
| `title` | 5/5 (100%) | City Council 12-15-16 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ELVg6M20tko`

- **Vector count**: 5
- **Sample IDs**: `fc-council-ELVg6M20tko-0`, `fc-council-ELVg6M20tko-4`, `fc-council-ELVg6M20tko-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 11-22-21 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=ELVg6M20tko |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-22-21  call... |
| `title` | 5/5 (100%) | City Council 11-22-21 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GVWAqZdX-es`

- **Vector count**: 5
- **Sample IDs**: `fc-council-GVWAqZdX-es-2`, `fc-council-GVWAqZdX-es-4`, `fc-council-GVWAqZdX-es-0`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 4-26-21 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=GVWAqZdX-es |
| `text` | 5/5 (100%) | 15 million uh we've been seeing a lot of discrepancies in the concrete prices so... |
| `title` | 5/5 (100%) | City Council 4-26-21 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=I8HmMXXeaFg`

- **Vector count**: 5
- **Sample IDs**: `fc-council-I8HmMXXeaFg-3`, `fc-council-I8HmMXXeaFg-1`, `fc-council-I8HmMXXeaFg-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield Town Hall \| Assessor's Office \| 12-6-21 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=I8HmMXXeaFg |
| `text` | 5/5 (100%) | now i know sometimes there's certainly or at least that's what i've heard when p... |
| `title` | 5/5 (100%) | Fairfield Town Hall \| Assessor's Office \| 12-6-21 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OKlGEzR-E1w`

- **Vector count**: 5
- **Sample IDs**: `fc-council-OKlGEzR-E1w-2`, `fc-council-OKlGEzR-E1w-3`, `fc-council-OKlGEzR-E1w-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 4-28-14 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=OKlGEzR-E1w |
| `text` | 5/5 (100%) | yeah well i guess i can't really ask for more than yours so i would recommend th... |
| `title` | 5/5 (100%) | Fairfield City Council 4-28-14 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=RwkmHw2SpTg`

- **Vector count**: 5
- **Sample IDs**: `fc-council-RwkmHw2SpTg-0`, `fc-council-RwkmHw2SpTg-2`, `fc-council-RwkmHw2SpTg-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 7-14-14 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=RwkmHw2SpTg |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 7-14... |
| `title` | 5/5 (100%) | Fairfield City Council 7-14-14 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YxrFzpFWnRI`

- **Vector count**: 5
- **Sample IDs**: `fc-council-YxrFzpFWnRI-4`, `fc-council-YxrFzpFWnRI-0`, `fc-council-YxrFzpFWnRI-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 11-10-14 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=YxrFzpFWnRI |
| `text` | 5/5 (100%) | 5 we're going to know we're going to need to know what our limits are yeah the f... |
| `title` | 5/5 (100%) | City Council 11-10-14 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=e-64p8PKtRE`

- **Vector count**: 5
- **Sample IDs**: `fc-council-e-64p8PKtRE-3`, `fc-council-e-64p8PKtRE-0`, `fc-council-e-64p8PKtRE-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 10-8-18 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=e-64p8PKtRE |
| `text` | 5/5 (100%) | Flores the first 807 North Beach Street there is actually the only expense invol... |
| `title` | 5/5 (100%) | City Council 10-8-18 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=gwlcWqtIDTg`

- **Vector count**: 5
- **Sample IDs**: `fc-council-gwlcWqtIDTg-3`, `fc-council-gwlcWqtIDTg-1`, `fc-council-gwlcWqtIDTg-0`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 6-26-17 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=gwlcWqtIDTg |
| `text` | 5/5 (100%) | and his life jo-ann's permanent temporary easement agreements and we need a reso... |
| `title` | 5/5 (100%) | City Council 6-26-17 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=gfxl9t1cn8c`

- **Vector count**: 5
- **Sample IDs**: `fc-council-gfxl9t1cn8c-1`, `fc-council-gfxl9t1cn8c-3`, `fc-council-gfxl9t1cn8c-0`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 4-23-18 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=gfxl9t1cn8c |
| `text` | 5/5 (100%) | 19 of which nine hundred thirteen thousand four hundred and seventy six dollars ... |
| `title` | 5/5 (100%) | City Council 4-23-18 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=kUA8_wD2AP0`

- **Vector count**: 5
- **Sample IDs**: `fc-council-kUA8_wD2AP0-1`, `fc-council-kUA8_wD2AP0-3`, `fc-council-kUA8_wD2AP0-2`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council meeting on 12-17-12 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=kUA8_wD2AP0 |
| `text` | 5/5 (100%) | 5 picocuries um or greater but of the 43 percent that was high 34 percent had mi... |
| `title` | 5/5 (100%) | Fairfield City Council meeting on 12-17-12 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=jVHsxLf6R1c`

- **Vector count**: 5
- **Sample IDs**: `fc-council-jVHsxLf6R1c-3`, `fc-council-jVHsxLf6R1c-2`, `fc-council-jVHsxLf6R1c-0`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 2-26-24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=jVHsxLf6R1c |
| `text` | 5/5 (100%) | got the next morning for pancakes everybody else is there about five so I I get ... |
| `title` | 5/5 (100%) | City Council 2-26-24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=hziN90N_mvM`

- **Vector count**: 5
- **Sample IDs**: `fc-council-hziN90N_mvM-0`, `fc-council-hziN90N_mvM-4`, `fc-council-hziN90N_mvM-1`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 6-27-16 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=hziN90N_mvM |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 6-27-16  good ... |
| `title` | 5/5 (100%) | City Council 6-27-16 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=iTqcOmrcFcg`

- **Vector count**: 5
- **Sample IDs**: `fc-council-iTqcOmrcFcg-0`, `fc-council-iTqcOmrcFcg-4`, `fc-council-iTqcOmrcFcg-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 12.16.24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=iTqcOmrcFcg |
| `text` | 5/5 (100%) | 24  going to call the meeting to order Rebecca will you please call the RO ham h... |
| `title` | 5/5 (100%) | City Council 12.16.24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=p8vpZl-YIew`

- **Vector count**: 5
- **Sample IDs**: `fc-council-p8vpZl-YIew-4`, `fc-council-p8vpZl-YIew-2`, `fc-council-p8vpZl-YIew-0`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 9-23-13 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=p8vpZl-YIew |
| `text` | 5/5 (100%) | com good great well thanks thanks for that report Ron no doubt all positive any ... |
| `title` | 5/5 (100%) | Fairfield City Council 9-23-13 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=sHzU1bQ41R4`

- **Vector count**: 5
- **Sample IDs**: `fc-council-sHzU1bQ41R4-0`, `fc-council-sHzU1bQ41R4-2`, `fc-council-sHzU1bQ41R4-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 8-24-15 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=sHzU1bQ41R4 |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 8-24... |
| `title` | 5/5 (100%) | Fairfield City Council 8-24-15 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=sBp5dG-yLd8`

- **Vector count**: 5
- **Sample IDs**: `fc-council-sBp5dG-yLd8-3`, `fc-council-sBp5dG-yLd8-0`, `fc-council-sBp5dG-yLd8-4`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 1... |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=sBp5dG-yLd8 |
| `text` | 5/5 (100%) | m. our Waste Management representative will be there to ask all kinds of questio... |
| `title` | 5/5 (100%) | City of Fairfield \| Study Session & City Council 1.13.25 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=wQ_0zcv-VuY`

- **Vector count**: 5
- **Sample IDs**: `fc-council-wQ_0zcv-VuY-0`, `fc-council-wQ_0zcv-VuY-4`, `fc-council-wQ_0zcv-VuY-3`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — Fairfield City Council 7-22-13 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=wQ_0zcv-VuY |
| `text` | 5/5 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 7-22... |
| `title` | 5/5 (100%) | Fairfield City Council 7-22-13 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=w6NJktUjd70`

- **Vector count**: 5
- **Sample IDs**: `fc-council-w6NJktUjd70-4`, `fc-council-w6NJktUjd70-1`, `fc-council-w6NJktUjd70-2`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 1-8-24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=w6NJktUjd70 |
| `text` | 5/5 (100%) | 2 million move by floro is there a second second second by two Hill do we need t... |
| `title` | 5/5 (100%) | City Council 1-8-24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ynZl30PFOmo`

- **Vector count**: 5
- **Sample IDs**: `fc-council-ynZl30PFOmo-4`, `fc-council-ynZl30PFOmo-1`, `fc-council-ynZl30PFOmo-0`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | government |
| `filename` | 5/5 (100%) | City Council Meeting — null — City Council 3-25-24 |
| `org` | 5/5 (100%) | Fairfield City Council |
| `publishedAt` | 5/5 (100%) |  |
| `source` | 5/5 (100%) | https://www.youtube.com/watch?v=ynZl30PFOmo |
| `text` | 5/5 (100%) | 60 we recommend a reduction uh to 51569 and we recommend a reduction in the bill... |
| `title` | 5/5 (100%) | City Council 3-25-24 |
| `type` | 5/5 (100%) | council_meeting |

### `https://www.fairfieldmediacenter.com/fairfieldcitycouncil`

- **Vector count**: 5
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-9`, `fmc-aHR0cHM6Ly93d3cuZmFp-7`, `fmc-aHR0cHM6Ly93d3cuZmFp-8`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | arts-culture |
| `filename` | 5/5 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/fairfieldcitycounc... |
| `org` | 5/5 (100%) | Fairfield Media Center |
| `source` | 5/5 (100%) | https://www.fairfieldmediacenter.com/fairfieldcitycouncil |
| `text` | 5/5 (100%) | Join FMC Director Jason Strong and City of Fairfield Iowa Mayor Connie Boyer as ... |
| `type` | 5/5 (100%) | community_org |

### `https://www.intelligentcommunity.org/blog`

- **Vector count**: 5
- **Sample IDs**: `icf-cd06bf3b23db3a6043f4d44d-0`, `icf-cd06bf3b23db3a6043f4d44d-2`, `icf-cd06bf3b23db3a6043f4d44d-4`
- **ID patterns**: `orgId-sha24-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | civic-knowledge |
| `filename` | 5/5 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/blog |
| `org` | 5/5 (100%) | Intelligent Community Forum |
| `source` | 5/5 (100%) | https://www.intelligentcommunity.org/blog |
| `text` | 5/5 (100%) | Posted on News & Media by John G. Jung January 14, 2026 6:31 PM The towns, citie... |
| `type` | 5/5 (100%) | community_org |

### `https://www.intelligentcommunity.org/smart21`

- **Vector count**: 5
- **Sample IDs**: `icf-fa7447057ff1472afc7cf551-1`, `icf-fa7447057ff1472afc7cf551-4`, `icf-fa7447057ff1472afc7cf551-0`
- **ID patterns**: `orgId-sha24-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | civic-knowledge |
| `filename` | 5/5 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/smart21 |
| `org` | 5/5 (100%) | Intelligent Community Forum |
| `source` | 5/5 (100%) | https://www.intelligentcommunity.org/smart21 |
| `text` | 5/5 (100%) | Adelaide, South Australia, Australia City of Maple Ridge, British Columbia, Cana... |
| `type` | 5/5 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=100`

- **Vector count**: 5
- **Sample IDs**: `minutes-100.pdf-chunk-4`, `minutes-100.pdf-chunk-1`, `minutes-100.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-100.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=100 |
| `text` | 5/5 (100%) | vers, Halley, Rasmussen, Hammes, Hamilton, Revolinski      TO ADOPT RESOLUTION N... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=128`

- **Vector count**: 5
- **Sample IDs**: `minutes-128.pdf-chunk-3`, `minutes-128.pdf-chunk-2`, `minutes-128.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-128.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=128 |
| `text` | 5/5 (100%) | gan act as designee to continue discussions  with Carl A. Nelson regarding the i... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=139`

- **Vector count**: 5
- **Sample IDs**: `minutes-139.pdf-chunk-2`, `minutes-139.pdf-chunk-0`, `minutes-139.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-139.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=139 |
| `text` | 5/5 (100%) | milton, seconded by Rasmussen   AYES:  Hamilton, Rasmussen, Halley, Boyer, Revol... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=147`

- **Vector count**: 5
- **Sample IDs**: `minutes-147.pdf-chunk-3`, `minutes-147.pdf-chunk-2`, `minutes-147.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-147.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=147 |
| `text` | 5/5 (100%) | en, Revolinski, Halley, Hammes, Ledger-Kalen, Boyer      TO ADOPT RESOLUTION NO.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=190`

- **Vector count**: 5
- **Sample IDs**: `minutes-190.pdf-chunk-0`, `minutes-190.pdf-chunk-2`, `minutes-190.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-190.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=190 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    November 12, 2013    Mayor Pro Tem ca... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=189`

- **Vector count**: 5
- **Sample IDs**: `minutes-189.pdf-chunk-3`, `minutes-189.pdf-chunk-1`, `minutes-189.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-189.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=189 |
| `text` | 5/5 (100%) | ke in favor of this amendment stating that deer have wreaked havoc on gardens an... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=150`

- **Vector count**: 5
- **Sample IDs**: `minutes-150.pdf-chunk-1`, `minutes-150.pdf-chunk-3`, `minutes-150.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-150.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=150 |
| `text` | 5/5 (100%) |   TO APPROVE A LIQUOR LICENSE FOR CASEY’S    GENERAL STORE #1714.      TO APPROV... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=228`

- **Vector count**: 5
- **Sample IDs**: `minutes-228.pdf-chunk-4`, `minutes-228.pdf-chunk-3`, `minutes-228.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-228.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=228 |
| `text` | 5/5 (100%) |    AYES:  Hamilton, Ledger-Kalen, Halley, Flournoy, Rasmussen, Revolinski      T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=224`

- **Vector count**: 5
- **Sample IDs**: `minutes-224.pdf-chunk-1`, `minutes-224.pdf-chunk-4`, `minutes-224.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-224.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=224 |
| `text` | 5/5 (100%) | G.    Moved by Halley, seconded by Flournoy   AYES:  Halley, Flournoy, Hamilton,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=230`

- **Vector count**: 5
- **Sample IDs**: `minutes-230.pdf-chunk-3`, `minutes-230.pdf-chunk-0`, `minutes-230.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-230.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=230 |
| `text` | 5/5 (100%) | nday, June 23 and to re-advertise in more newspapers.    Moved by Ledger-Kalen, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=250`

- **Vector count**: 5
- **Sample IDs**: `minutes-250.pdf-chunk-0`, `minutes-250.pdf-chunk-3`, `minutes-250.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-250.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=250 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CTIY COUNCIL    January 12, 2015      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=241`

- **Vector count**: 5
- **Sample IDs**: `minutes-241.pdf-chunk-3`, `minutes-241.pdf-chunk-0`, `minutes-241.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-241.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=241 |
| `text` | 5/5 (100%) | ooms, and flooring  for the indoor gymnasium.    Moved by Halley, seconded by Le... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=236`

- **Vector count**: 5
- **Sample IDs**: `minutes-236.pdf-chunk-1`, `minutes-236.pdf-chunk-0`, `minutes-236.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-236.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=236 |
| `text` | 5/5 (100%) |  TO ADOPT RESOLUTION NO. 3122 DECLARING    AN OFFICIAL INTENT UNDER TREASURY    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=291`

- **Vector count**: 5
- **Sample IDs**: `minutes-291.pdf-chunk-0`, `minutes-291.pdf-chunk-2`, `minutes-291.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-291.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=291 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    August 24, 2015        The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=308`

- **Vector count**: 5
- **Sample IDs**: `minutes-308.pdf-chunk-3`, `minutes-308.pdf-chunk-4`, `minutes-308.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-308.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=308 |
| `text` | 5/5 (100%) | would like to set a work session for Saturday, February 6, 2016 from 9:00  a.m. ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=309`

- **Vector count**: 5
- **Sample IDs**: `minutes-309.pdf-chunk-2`, `minutes-309.pdf-chunk-1`, `minutes-309.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-309.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=309 |
| `text` | 5/5 (100%) | nderson      TO ADOPT RESOLUTION NO. 3309 WHICH IS    A TAX ABATEMENT APPLICATIO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=307`

- **Vector count**: 5
- **Sample IDs**: `minutes-307.pdf-chunk-0`, `minutes-307.pdf-chunk-2`, `minutes-307.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-307.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=307 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL     January 11, 2016        The Fairfiel... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=316`

- **Vector count**: 5
- **Sample IDs**: `minutes-316.pdf-chunk-0`, `minutes-316.pdf-chunk-2`, `minutes-316.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-316.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=316 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    May 23, 2016          The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=315`

- **Vector count**: 5
- **Sample IDs**: `minutes-315.pdf-chunk-3`, `minutes-315.pdf-chunk-1`, `minutes-315.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-315.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=315 |
| `text` | 5/5 (100%) | TO ADOPT RESOLUTION NO. 3343 ADOPTING    A DELINQUENT UTILITY ACCOUNTS POLICY.  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=326`

- **Vector count**: 5
- **Sample IDs**: `minutes-326.pdf-chunk-2`, `minutes-326.pdf-chunk-3`, `minutes-326.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-326.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=326 |
| `text` | 5/5 (100%) | PT THE CAMBRIDGE SPORTSPLEX    BID PACKAGE #5 ROOFING & SHEET METAL    AS FINAL.... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=324`

- **Vector count**: 5
- **Sample IDs**: `minutes-324.pdf-chunk-1`, `minutes-324.pdf-chunk-0`, `minutes-324.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-324.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=324 |
| `text` | 5/5 (100%) | IC FORUM/APPEARANCES  Doug Bachar appeared before the City Council stating he ha... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=344`

- **Vector count**: 5
- **Sample IDs**: `minutes-344.pdf-chunk-2`, `minutes-344.pdf-chunk-1`, `minutes-344.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-344.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=344 |
| `text` | 5/5 (100%) |  COST FOR THE SANITARY SEWER CONVEYANCE    IMPROVEMENTS – ADDITION TO STEP 1.   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=383`

- **Vector count**: 5
- **Sample IDs**: `minutes-383.pdf-chunk-2`, `minutes-383.pdf-chunk-3`, `minutes-383.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-383.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=383 |
| `text` | 5/5 (100%) |  ADOPT RESOLUTION NO. 3545 ADOPTING    A REGIONAL PLANNING ASSOCIATION 15    PUB... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=363`

- **Vector count**: 5
- **Sample IDs**: `minutes-363.pdf-chunk-0`, `minutes-363.pdf-chunk-1`, `minutes-363.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-363.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=363 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    July 10, 2017        The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=366`

- **Vector count**: 5
- **Sample IDs**: `minutes-366.pdf-chunk-3`, `minutes-366.pdf-chunk-2`, `minutes-366.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-366.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=366 |
| `text` | 5/5 (100%) | A; Consented to   STEP II Sanitary Sewer Improvement Project alignment recommend... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=433`

- **Vector count**: 5
- **Sample IDs**: `minutes-433.pdf-chunk-1`, `minutes-433.pdf-chunk-3`, `minutes-433.pdf-chunk-4`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-433.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=433 |
| `text` | 5/5 (100%) |  seconded by Gandy   AYES:  Flournoy, Gandy, Halley, Anderson and Twohill    TO ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=469`

- **Vector count**: 5
- **Sample IDs**: `minutes-469.pdf-chunk-0`, `minutes-469.pdf-chunk-2`, `minutes-469.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-469.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=469 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING FEBRUARY 10, 2020      ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=463`

- **Vector count**: 5
- **Sample IDs**: `minutes-463.pdf-chunk-2`, `minutes-463.pdf-chunk-1`, `minutes-463.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-463.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=463 |
| `text` | 5/5 (100%) | nd Halley       TO ACCEPT THE FY19 ANNUAL  URBAN RENEWAL REPORT.    Moved by And... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=47`

- **Vector count**: 5
- **Sample IDs**: `minutes-47.pdf-chunk-1`, `minutes-47.pdf-chunk-3`, `minutes-47.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-47.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=47 |
| `text` | 5/5 (100%) |     HEARING OF THOSE REQUESTING TO ADDRESS THE COUNCIL  Steve Beeman appeared be... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=662`

- **Vector count**: 5
- **Sample IDs**: `minutes-662.pdf-chunk-4`, `minutes-662.pdf-chunk-1`, `minutes-662.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-662.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=662 |
| `text` | 5/5 (100%) | acation he also noted more masking policies and also a  number of public buildin... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=75`

- **Vector count**: 5
- **Sample IDs**: `minutes-75.pdf-chunk-0`, `minutes-75.pdf-chunk-1`, `minutes-75.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-75.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=75 |
| `text` | 5/5 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL MEETING    October 24, 2011      The Fai... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=79`

- **Vector count**: 5
- **Sample IDs**: `minutes-79.pdf-chunk-2`, `minutes-79.pdf-chunk-0`, `minutes-79.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 5/5 (100%) | minutes-79.pdf |
| `source` | 5/5 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=79 |
| `text` | 5/5 (100%) | r and city council at this time.    RESOLUTIONS, ACTION ITEMS & ORDINANCES  Move... |

### `https://www.miu.edu/bachelors-in-ayurveda-wellness-and-integrative-health`

- **Vector count**: 5
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-32`, `miu-aHR0cHM6Ly93d3cubWl1-34`, `miu-aHR0cHM6Ly93d3cubWl1-36`
- **ID patterns**: `other` (5)
- **Vectors profiled for metadata**: 5

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 5/5 (100%) | education |
| `filename` | 5/5 (100%) | Maharishi International University — https://www.miu.edu/bachelors-in-ayurveda-w... |
| `org` | 5/5 (100%) | Maharishi International University |
| `source` | 5/5 (100%) | https://www.miu.edu/bachelors-in-ayurveda-wellness-and-integrative-health |
| `text` | 5/5 (100%) | Payments are lower at first and then increase, usually every two years, and are ... |
| `type` | 5/5 (100%) | community_org |

### `https://www.youtube.com/watch?v=5w85WvJRzuI`

- **Vector count**: 4
- **Sample IDs**: `fc-council-5w85WvJRzuI-0`, `fc-council-5w85WvJRzuI-1`, `fc-council-5w85WvJRzuI-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 8-10-15 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=5w85WvJRzuI |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 8-10... |
| `title` | 4/4 (100%) | Fairfield City Council 8-10-15 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Dnz7Wm5hqO4`

- **Vector count**: 4
- **Sample IDs**: `fc-council-Dnz7Wm5hqO4-2`, `fc-council-Dnz7Wm5hqO4-3`, `fc-council-Dnz7Wm5hqO4-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 6-10-24 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=Dnz7Wm5hqO4 |
| `text` | 4/4 (100%) | 3 million and the amount of borrowing anticipated is 5 million and our estimated... |
| `title` | 4/4 (100%) | City Council 6-10-24 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=GS2WcDpKlhw`

- **Vector count**: 4
- **Sample IDs**: `fc-council-GS2WcDpKlhw-1`, `fc-council-GS2WcDpKlhw-3`, `fc-council-GS2WcDpKlhw-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 1-22-18 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=GS2WcDpKlhw |
| `text` | 4/4 (100%) | Brown is now the owner and agree so it looks like he has a list of West View and... |
| `title` | 4/4 (100%) | City Council 1-22-18 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=I8DDy8thKwA`

- **Vector count**: 4
- **Sample IDs**: `fc-council-I8DDy8thKwA-3`, `fc-council-I8DDy8thKwA-2`, `fc-council-I8DDy8thKwA-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 10-10-22 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=I8DDy8thKwA |
| `text` | 4/4 (100%) | said eight to ten foreign like what exactly is he going to be doing he's going t... |
| `title` | 4/4 (100%) | City Council 10-10-22 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=JQ1_VKGzEs0`

- **Vector count**: 4
- **Sample IDs**: `fc-council-JQ1_VKGzEs0-0`, `fc-council-JQ1_VKGzEs0-1`, `fc-council-JQ1_VKGzEs0-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 10-27-14 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=JQ1_VKGzEs0 |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-27-14  good... |
| `title` | 4/4 (100%) | City Council 10-27-14 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=LbpoQQ39a-E`

- **Vector count**: 4
- **Sample IDs**: `fc-council-LbpoQQ39a-E-3`, `fc-council-LbpoQQ39a-E-0`, `fc-council-LbpoQQ39a-E-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 7-23-18 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=LbpoQQ39a-E |
| `text` | 4/4 (100%) | 1 million dollars right now excluding the roughly million dollars of contingency... |
| `title` | 4/4 (100%) | City Council 7-23-18 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=NOp2kjWrJnA`

- **Vector count**: 4
- **Sample IDs**: `fc-council-NOp2kjWrJnA-1`, `fc-council-NOp2kjWrJnA-0`, `fc-council-NOp2kjWrJnA-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council \| Care Ambulance, LLC \| 12-27-22 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=NOp2kjWrJnA |
| `text` | 4/4 (100%) | m uh over the petition for injunctive Relief It also says that the defendant sha... |
| `title` | 4/4 (100%) | City Council \| Care Ambulance, LLC \| 12-27-22 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=NrNwZeUEWGM`

- **Vector count**: 4
- **Sample IDs**: `fc-council-NrNwZeUEWGM-2`, `fc-council-NrNwZeUEWGM-3`, `fc-council-NrNwZeUEWGM-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 11.12.24 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=NrNwZeUEWGM |
| `text` | 4/4 (100%) | m. and setting a public hearing on urban renewal plan Monday December 16 2024 at... |
| `title` | 4/4 (100%) | City Council 11.12.24 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=QYQLA90BRn0`

- **Vector count**: 4
- **Sample IDs**: `fc-council-QYQLA90BRn0-1`, `fc-council-QYQLA90BRn0-0`, `fc-council-QYQLA90BRn0-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 3-14-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=QYQLA90BRn0 |
| `text` | 4/4 (100%) | m. in the council chambers and then uh that should be tabulated for your April m... |
| `title` | 4/4 (100%) | City Council 3-14-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Seo1uXiCgtA`

- **Vector count**: 4
- **Sample IDs**: `fc-council-Seo1uXiCgtA-3`, `fc-council-Seo1uXiCgtA-0`, `fc-council-Seo1uXiCgtA-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council Meeting 2-9-15 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=Seo1uXiCgtA |
| `text` | 4/4 (100%) | 08 is the Ada section the Americans with Disabilities Act so Ada prohibits discr... |
| `title` | 4/4 (100%) | City Council Meeting 2-9-15 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=RYivRsbS73s`

- **Vector count**: 4
- **Sample IDs**: `fc-council-RYivRsbS73s-2`, `fc-council-RYivRsbS73s-3`, `fc-council-RYivRsbS73s-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 1-22-24 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=RYivRsbS73s |
| `text` | 4/4 (100%) | 3 megaw that's how they calculated the size of the project if we add on more nee... |
| `title` | 4/4 (100%) | City Council 1-22-24 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=V081K7mBOb4`

- **Vector count**: 4
- **Sample IDs**: `fc-council-V081K7mBOb4-0`, `fc-council-V081K7mBOb4-3`, `fc-council-V081K7mBOb4-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 12-16-13 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=V081K7mBOb4 |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 12-1... |
| `title` | 4/4 (100%) | Fairfield City Council 12-16-13 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=WCDCUudgktA`

- **Vector count**: 4
- **Sample IDs**: `fc-council-WCDCUudgktA-2`, `fc-council-WCDCUudgktA-0`, `fc-council-WCDCUudgktA-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 5-23-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=WCDCUudgktA |
| `text` | 4/4 (100%) | y since it's ten percent more white why did he decide you sure the easements are... |
| `title` | 4/4 (100%) | City Council 5-23-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=XdHUrZ70KNg`

- **Vector count**: 4
- **Sample IDs**: `fc-council-XdHUrZ70KNg-3`, `fc-council-XdHUrZ70KNg-0`, `fc-council-XdHUrZ70KNg-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City of Fairfield \| Special City Council Meeting 1... |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=XdHUrZ70KNg |
| `text` | 4/4 (100%) | Um next is city uh committee assignments which we passed out and I'll read them ... |
| `title` | 4/4 (100%) | City of Fairfield \| Special City Council Meeting 1.2.26 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Xm9jGvs6-8s`

- **Vector count**: 4
- **Sample IDs**: `fc-council-Xm9jGvs6-8s-2`, `fc-council-Xm9jGvs6-8s-0`, `fc-council-Xm9jGvs6-8s-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 11-27-17 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=Xm9jGvs6-8s |
| `text` | 4/4 (100%) | mean there is something else probably right yes sir that would be then I have a ... |
| `title` | 4/4 (100%) | City Council 11-27-17 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=bQwarKpdJK8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-bQwarKpdJK8-0`, `fc-council-bQwarKpdJK8-2`, `fc-council-bQwarKpdJK8-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council meeting on 1-29-13 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=bQwarKpdJK8 |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council meet... |
| `title` | 4/4 (100%) | Fairfield City Council meeting on 1-29-13 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=aP9tzam-FPI`

- **Vector count**: 4
- **Sample IDs**: `fc-council-aP9tzam-FPI-2`, `fc-council-aP9tzam-FPI-1`, `fc-council-aP9tzam-FPI-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 4-11-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=aP9tzam-FPI |
| `text` | 4/4 (100%) | 77 5 which we thought was going to be Tiff and it just took a while and it it di... |
| `title` | 4/4 (100%) | City Council 4-11-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=aOjwy72lP6E`

- **Vector count**: 4
- **Sample IDs**: `fc-council-aOjwy72lP6E-2`, `fc-council-aOjwy72lP6E-1`, `fc-council-aOjwy72lP6E-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 10-22-18 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=aOjwy72lP6E |
| `text` | 4/4 (100%) | 09 hundreds of an acre it's a nominal sum that we're dealing with on that but a ... |
| `title` | 4/4 (100%) | City Council 10-22-18 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cCNfxzQ4nN8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-cCNfxzQ4nN8-1`, `fc-council-cCNfxzQ4nN8-3`, `fc-council-cCNfxzQ4nN8-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council Meeting 1-26-15 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=cCNfxzQ4nN8 |
| `text` | 4/4 (100%) | 93 entertain a motion to approve those consent agenda items so so move move by r... |
| `title` | 4/4 (100%) | City Council Meeting 1-26-15 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=cX4NWiDKltI`

- **Vector count**: 4
- **Sample IDs**: `fc-council-cX4NWiDKltI-2`, `fc-council-cX4NWiDKltI-3`, `fc-council-cX4NWiDKltI-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 9-25-17 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=cX4NWiDKltI |
| `text` | 4/4 (100%) | okay move by Florida to set November 13th as a date for the public hearing secon... |
| `title` | 4/4 (100%) | City Council 9-25-17 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=eVWD5eY3Ai8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-eVWD5eY3Ai8-2`, `fc-council-eVWD5eY3Ai8-3`, `fc-council-eVWD5eY3Ai8-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council 6-9-14 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=eVWD5eY3Ai8 |
| `text` | 4/4 (100%) | 7 million dollars a little above that so we seem to be right about where you wou... |
| `title` | 4/4 (100%) | Fairfield City Council 6-9-14 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=exIyNDdYFX8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-exIyNDdYFX8-2`, `fc-council-exIyNDdYFX8-0`, `fc-council-exIyNDdYFX8-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 2-10-14 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=exIyNDdYFX8 |
| `text` | 4/4 (100%) | 8 million there are still some private funds that will need to be raised also bu... |
| `title` | 4/4 (100%) | City Council 2-10-14 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=lrao1KZZ_L8`

- **Vector count**: 4
- **Sample IDs**: `fc-council-lrao1KZZ_L8-3`, `fc-council-lrao1KZZ_L8-2`, `fc-council-lrao1KZZ_L8-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 2-8-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=lrao1KZZ_L8 |
| `text` | 4/4 (100%) | 3 the tenth revision parts per billion you know part for me of course we'll leav... |
| `title` | 4/4 (100%) | City Council 2-8-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=maB8bIVAszk`

- **Vector count**: 4
- **Sample IDs**: `fc-council-maB8bIVAszk-1`, `fc-council-maB8bIVAszk-3`, `fc-council-maB8bIVAszk-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 7-22-24 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=maB8bIVAszk |
| `text` | 4/4 (100%) | the barricade and the purpose of it is to help enforce the oneway and School sta... |
| `title` | 4/4 (100%) | City Council 7-22-24 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=rKGPqhpgE6E`

- **Vector count**: 4
- **Sample IDs**: `fc-council-rKGPqhpgE6E-0`, `fc-council-rKGPqhpgE6E-2`, `fc-council-rKGPqhpgE6E-1`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council Meeting 7-23-12 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=rKGPqhpgE6E |
| `text` | 4/4 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council Meet... |
| `title` | 4/4 (100%) | Fairfield City Council Meeting 7-23-12 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=rDpna4rFS1s`

- **Vector count**: 4
- **Sample IDs**: `fc-council-rDpna4rFS1s-1`, `fc-council-rDpna4rFS1s-3`, `fc-council-rDpna4rFS1s-0`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — City Council 9-24-18 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=rDpna4rFS1s |
| `text` | 4/4 (100%) | 24 jefferson county treasurer of two hundred thirteen thousand seven hundred eig... |
| `title` | 4/4 (100%) | City Council 9-24-18 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=v_41RoxLup0`

- **Vector count**: 4
- **Sample IDs**: `fc-council-v_41RoxLup0-1`, `fc-council-v_41RoxLup0-0`, `fc-council-v_41RoxLup0-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | government |
| `filename` | 4/4 (100%) | City Council Meeting — null — Fairfield City Council Meeting 1-11-16 |
| `org` | 4/4 (100%) | Fairfield City Council |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=v_41RoxLup0 |
| `text` | 4/4 (100%) | mayor she she called twice over a holiday weekend with the complaint was that th... |
| `title` | 4/4 (100%) | Fairfield City Council Meeting 1-11-16 |
| `type` | 4/4 (100%) | council_meeting |

### `https://www.intelligentcommunity.org/free_downloads`

- **Vector count**: 4
- **Sample IDs**: `icf-412dbeca94afca8cdbc4e0c2-0`, `icf-412dbeca94afca8cdbc4e0c2-2`, `icf-412dbeca94afca8cdbc4e0c2-3`
- **ID patterns**: `orgId-sha24-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | civic-knowledge |
| `filename` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/free_download... |
| `org` | 4/4 (100%) | Intelligent Community Forum |
| `source` | 4/4 (100%) | https://www.intelligentcommunity.org/free_downloads |
| `text` | 4/4 (100%) | Free Downloads - Intelligent Community Forum Building Success for Your Municipal... |
| `type` | 4/4 (100%) | community_org |

### `https://www.intelligentcommunity.org/fredericton_new_brunswick_canada_a_connected_capital_building_an_inclusive_intelligent_future`

- **Vector count**: 4
- **Sample IDs**: `icf-aabb97db69d9dcfd421e6775-3`, `icf-aabb97db69d9dcfd421e6775-0`, `icf-aabb97db69d9dcfd421e6775-1`
- **ID patterns**: `orgId-sha24-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | civic-knowledge |
| `filename` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/fredericton_n... |
| `org` | 4/4 (100%) | Intelligent Community Forum |
| `source` | 4/4 (100%) | https://www.intelligentcommunity.org/fredericton_new_brunswick_canada_a_connecte... |
| `text` | 4/4 (100%) | Fredericton isn’t just adapting to the future — it’s designing it through smart ... |
| `type` | 4/4 (100%) | community_org |

### `https://www.intelligentcommunity.org/press_releases`

- **Vector count**: 4
- **Sample IDs**: `icf-f35da2c950690d2c6a294088-1`, `icf-f35da2c950690d2c6a294088-2`, `icf-f35da2c950690d2c6a294088-0`
- **ID patterns**: `orgId-sha24-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | civic-knowledge |
| `filename` | 4/4 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/press_release... |
| `org` | 4/4 (100%) | Intelligent Community Forum |
| `source` | 4/4 (100%) | https://www.intelligentcommunity.org/press_releases |
| `text` | 4/4 (100%) | The Yunlin County, Taiwan delegation at the Top7 Conference & Announcement in La... |
| `type` | 4/4 (100%) | community_org |

### `https://www.jeffersoncofair.com/schedule`

- **Vector count**: 4
- **Sample IDs**: `jc-fair-aHR0cHM6Ly93d3cuamVm-1`, `jc-fair-aHR0cHM6Ly93d3cuamVm-3`, `jc-fair-aHR0cHM6Ly93d3cuamVm-2`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | civic |
| `filename` | 4/4 (100%) | Jefferson County Fair — https://www.jeffersoncofair.com/schedule |
| `org` | 4/4 (100%) | Jefferson County Fair |
| `source` | 4/4 (100%) | https://www.jeffersoncofair.com/schedule |
| `text` | 4/4 (100%) | 5:00 PM - 9:00 PM Vendors in McCleary Building Open 5:30 PM Open Class Auction P... |
| `type` | 4/4 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=106`

- **Vector count**: 4
- **Sample IDs**: `minutes-106.pdf-chunk-2`, `minutes-106.pdf-chunk-0`, `minutes-106.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-106.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=106 |
| `text` | 4/4 (100%) | ssen, Boyer, Silvers, Hammes, Halley, Revolinski      TO PASS FROM THE FIRST REA... |

### `opportunityiowa.gov`

- **Vector count**: 4
- **Sample IDs**: `mainstreet_fairfield_chunk_0`, `mainstreet_fairfield_chunk_3`, `mainstreet_fairfield_chunk_1`
- **ID patterns**: `prefix_name_chunk_N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | economic_development |
| `chunkIndex` | 4/4 (100%) | 0 |
| `filename` | 4/4 (100%) | mainstreet_fairfield.txt |
| `source` | 4/4 (100%) | opportunityiowa.gov |
| `subcategory` | 4/4 (100%) | downtown_revitalization |
| `text` | 4/4 (100%) | Main Street Fairfield / Main Street Iowa Sources: opportunityiowa.gov/community/... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=109`

- **Vector count**: 4
- **Sample IDs**: `minutes-109.pdf-chunk-3`, `minutes-109.pdf-chunk-0`, `minutes-109.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-109.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=109 |
| `text` | 4/4 (100%) | Halley, Hammes, Rasmussen, Silvers, Revolinski      TO ADJOURN AT 8:21  P.M.    ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=119`

- **Vector count**: 4
- **Sample IDs**: `minutes-119.pdf-chunk-2`, `minutes-119.pdf-chunk-0`, `minutes-119.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-119.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=119 |
| `text` | 4/4 (100%) | sen, Hammes, Revolinski, Silvers      TO APPOINT ROBERT SMITH TO THE FAIRFIELD  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=116`

- **Vector count**: 4
- **Sample IDs**: `minutes-116.pdf-chunk-3`, `minutes-116.pdf-chunk-0`, `minutes-116.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-116.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=116 |
| `text` | 4/4 (100%) | istrict are planning a mock disaster drill on Saturday, October 6.  The drill wi... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=120`

- **Vector count**: 4
- **Sample IDs**: `minutes-120.pdf-chunk-3`, `minutes-120.pdf-chunk-1`, `minutes-120.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-120.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=120 |
| `text` | 4/4 (100%) | MATSON.           Page 3  Minutes  11/13/12        ADJOURNMENT  Moved by Hamilto... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=126`

- **Vector count**: 4
- **Sample IDs**: `minutes-126.pdf-chunk-2`, `minutes-126.pdf-chunk-3`, `minutes-126.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-126.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=126 |
| `text` | 4/4 (100%) | ning a 28E agreement for Vedic City Police Services Agreement at this time.   Je... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=148`

- **Vector count**: 4
- **Sample IDs**: `minutes-148.pdf-chunk-1`, `minutes-148.pdf-chunk-0`, `minutes-148.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-148.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=148 |
| `text` | 4/4 (100%) | 95 RATIFYING, CONFIRMING,    AND APPROVING PUBLICATIONS OF NOTICE OF    PUBLIC H... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=239`

- **Vector count**: 4
- **Sample IDs**: `minutes-239.pdf-chunk-1`, `minutes-239.pdf-chunk-3`, `minutes-239.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-239.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=239 |
| `text` | 4/4 (100%) | ject.    Dr. Richard Fursman from Brimeyer Fursman, LLC gave a presentation at t... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=281`

- **Vector count**: 4
- **Sample IDs**: `minutes-281.pdf-chunk-3`, `minutes-281.pdf-chunk-0`, `minutes-281.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-281.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=281 |
| `text` | 4/4 (100%) | 8/15    Moved by Hammes, seconded by Ledger-Kalen   AYES:  Hammes, Ledger-Kalen,... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=369`

- **Vector count**: 4
- **Sample IDs**: `minutes-369.pdf-chunk-1`, `minutes-369.pdf-chunk-2`, `minutes-369.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-369.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=369 |
| `text` | 4/4 (100%) |      TO ACCEPT THE MINUTES OF THE JULY 17,    2017 LIBRARY BOARD MEETING.      T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=362`

- **Vector count**: 4
- **Sample IDs**: `minutes-362.pdf-chunk-1`, `minutes-362.pdf-chunk-3`, `minutes-362.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-362.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=362 |
| `text` | 4/4 (100%) | , Rasmussen      TO ADOPT RESOLUTION NO. 3518 SUPPORTING    AND LOCAL MATCH FOR ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=394`

- **Vector count**: 4
- **Sample IDs**: `minutes-394.pdf-chunk-0`, `minutes-394.pdf-chunk-1`, `minutes-394.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-394.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=394 |
| `text` | 4/4 (100%) |     MINUTES OF THE FAIRFIELD CITY COUNCIL    January 2, 2018        The Fairfiel... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=465`

- **Vector count**: 4
- **Sample IDs**: `minutes-465.pdf-chunk-3`, `minutes-465.pdf-chunk-0`, `minutes-465.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-465.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=465 |
| `text` | 4/4 (100%) | D OF CONSTRUCTION  CONTRACT ON THE PUBLIC IMPROVEMENT   PROJECT DESIGNATED PROPO... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=51`

- **Vector count**: 4
- **Sample IDs**: `minutes-51.pdf-chunk-1`, `minutes-51.pdf-chunk-2`, `minutes-51.pdf-chunk-3`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-51.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=51 |
| `text` | 4/4 (100%) | on to close East  Broadway Street from Chatauqua Park to D Street from 7:00 to 9... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=52`

- **Vector count**: 4
- **Sample IDs**: `minutes-52.pdf-chunk-2`, `minutes-52.pdf-chunk-0`, `minutes-52.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-52.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=52 |
| `text` | 4/4 (100%) | .    Moved by Adam, seconded by Silvers   AYES:  Adam, Silvers, Halley, Mottet, ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=53`

- **Vector count**: 4
- **Sample IDs**: `minutes-53.pdf-chunk-3`, `minutes-53.pdf-chunk-0`, `minutes-53.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-53.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=53 |
| `text` | 4/4 (100%) |  2828    SETTING A PUBLIC HEARING ON    JUNE 13 TH  FOR AN URBAN RENEWAL    DIST... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=771`

- **Vector count**: 4
- **Sample IDs**: `minutes-771.pdf-chunk-2`, `minutes-771.pdf-chunk-1`, `minutes-771.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 4/4 (100%) | minutes-771.pdf |
| `source` | 4/4 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=771 |
| `text` | 4/4 (100%) | ON, Estey, Rowe     Page 2  Minutes  1/2/26    Public Safety & Trans: KNESS, Tho... |

### `https://www.youtube.com/watch?v=vIEigsx_s_E`

- **Vector count**: 4
- **Sample IDs**: `traction-thursdays-vIEigsx_s_E-0`, `traction-thursdays-vIEigsx_s_E-1`, `traction-thursdays-vIEigsx_s_E-3`
- **ID patterns**: `other` (4)
- **Vectors profiled for metadata**: 4

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 4/4 (100%) | economic |
| `filename` | 4/4 (100%) | Traction Thursday — unknown — Traction Thursday \| Mendy McAdams "Fairfield Area ... |
| `org` | 4/4 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 4/4 (100%) | traction-thursdays |
| `publishedAt` | 4/4 (100%) |  |
| `source` | 4/4 (100%) | https://www.youtube.com/watch?v=vIEigsx_s_E |
| `text` | 4/4 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Me... |
| `title` | 4/4 (100%) | Traction Thursday \| Mendy McAdams "Fairfield Area Chamber of Commerce" |
| `type` | 4/4 (100%) | traction_thursday |

### `https://www.carryonbags.org/thank-you`

- **Vector count**: 3
- **Sample IDs**: `carry-on-bags-aHR0cHM6Ly93d3cuY2Fy-2`, `carry-on-bags-aHR0cHM6Ly93d3cuY2Fy-1`, `carry-on-bags-aHR0cHM6Ly93d3cuY2Fy-3`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | human-services |
| `filename` | 3/3 (100%) | Carry On Bags — https://www.carryonbags.org/thank-you |
| `org` | 3/3 (100%) | Carry On Bags |
| `source` | 3/3 (100%) | https://www.carryonbags.org/thank-you |
| `text` | 3/3 (100%) | We are very grateful for the wonderful help we received this afternoon from FHS ... |
| `type` | 3/3 (100%) | community_org |

### `https://fairfieldiowafarmersmarket.farm/guidelines-rules-for-merchants`

- **Vector count**: 3
- **Sample IDs**: `fairfield-farmers-market-aHR0cHM6Ly9mYWlyZmll-1`, `fairfield-farmers-market-aHR0cHM6Ly9mYWlyZmll-3`, `fairfield-farmers-market-aHR0cHM6Ly9mYWlyZmll-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | community |
| `filename` | 3/3 (100%) | Fairfield Farmers Market — https://fairfieldiowafarmersmarket.farm/guidelines-ru... |
| `org` | 3/3 (100%) | Fairfield Farmers Market |
| `source` | 3/3 (100%) | https://fairfieldiowafarmersmarket.farm/guidelines-rules-for-merchants |
| `text` | 3/3 (100%) | Spaces will be pre assigned. The vendor must set up by 8:00 am. If not the space... |
| `type` | 3/3 (100%) | community_org |

### `https://www.youtube.com/watch?v=-1Kg795WeLI`

- **Vector count**: 3
- **Sample IDs**: `fc-council--1Kg795WeLI-1`, `fc-council--1Kg795WeLI-2`, `fc-council--1Kg795WeLI-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council Work Session 2-26-24 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=-1Kg795WeLI |
| `text` | 3/3 (100%) | 68565 we done what page are you on but it's also worth Notting noting the valuat... |
| `title` | 3/3 (100%) | City Council Work Session 2-26-24 |
| `type` | 3/3 (100%) | council_meeting |

### `sustainablelivingcoalition.org`

- **Vector count**: 3
- **Sample IDs**: `fairfield_community_garden_chunk_0`, `fairfield_community_garden_chunk_2`, `fairfield_community_garden_chunk_1`
- **ID patterns**: `prefix_name_chunk_N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | community_organizations |
| `chunkIndex` | 3/3 (100%) | 0 |
| `filename` | 3/3 (100%) | fairfield_community_garden.txt |
| `source` | 3/3 (100%) | sustainablelivingcoalition.org |
| `subcategory` | 3/3 (100%) | food_security |
| `text` | 3/3 (100%) | Fairfield Community Garden Sustainable Living Coalition \| https://sustainableliv... |

### `https://www.youtube.com/watch?v=4sXOdNccTaA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-4sXOdNccTaA-0`, `fc-council-4sXOdNccTaA-2`, `fc-council-4sXOdNccTaA-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 4-27-20 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=4sXOdNccTaA |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 4-27-20  call ... |
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
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 2-25-19 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=5msEmMYeEks |
| `text` | 3/3 (100%) | Goodman's request to allow for signs to be placed in that area even for a design... |
| `title` | 3/3 (100%) | City Council 2-25-19 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=8eVSY9CsBZA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-8eVSY9CsBZA-1`, `fc-council-8eVSY9CsBZA-0`, `fc-council-8eVSY9CsBZA-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 3-25-13 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=8eVSY9CsBZA |
| `text` | 3/3 (100%) | um so I always love coming back to Fairfield and seeing so many people I recogni... |
| `title` | 3/3 (100%) | Fairfield City Council 3-25-13 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9Lh-7HnZABE`

- **Vector count**: 3
- **Sample IDs**: `fc-council-9Lh-7HnZABE-2`, `fc-council-9Lh-7HnZABE-0`, `fc-council-9Lh-7HnZABE-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City of Fairfield \| Proposed Fire Station Forum 2-... |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=9Lh-7HnZABE |
| `text` | 3/3 (100%) | t site that we purchased because we don't have room in our station the other sid... |
| `title` | 3/3 (100%) | City of Fairfield \| Proposed Fire Station Forum 2-7-22 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=6BW0BgiYmuo`

- **Vector count**: 3
- **Sample IDs**: `fc-council-6BW0BgiYmuo-0`, `fc-council-6BW0BgiYmuo-1`, `fc-council-6BW0BgiYmuo-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 2-11-13 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=6BW0BgiYmuo |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 2-11... |
| `title` | 3/3 (100%) | Fairfield City Council 2-11-13 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=7ENcGqpvz8s`

- **Vector count**: 3
- **Sample IDs**: `fc-council-7ENcGqpvz8s-1`, `fc-council-7ENcGqpvz8s-2`, `fc-council-7ENcGqpvz8s-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
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
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-11-21 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=BgKbiB7jRGo |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-11-21  i'm ... |
| `title` | 3/3 (100%) | City Council 10-11-21 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9yT6eBvgGrU`

- **Vector count**: 3
- **Sample IDs**: `fc-council-9yT6eBvgGrU-1`, `fc-council-9yT6eBvgGrU-0`, `fc-council-9yT6eBvgGrU-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-9-17 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=9yT6eBvgGrU |
| `text` | 3/3 (100%) | 5 said they currently do not have any problems and then lastly we were asked abo... |
| `title` | 3/3 (100%) | City Council 10-9-17 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=CWeY8f7gtHA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-CWeY8f7gtHA-2`, `fc-council-CWeY8f7gtHA-0`, `fc-council-CWeY8f7gtHA-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 11-27-23 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=CWeY8f7gtHA |
| `text` | 3/3 (100%) | so moved by ham second second by floi any discussion same none pleas call the wa... |
| `title` | 3/3 (100%) | City Council 11-27-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EDMZ863Vj9A`

- **Vector count**: 3
- **Sample IDs**: `fc-council-EDMZ863Vj9A-1`, `fc-council-EDMZ863Vj9A-2`, `fc-council-EDMZ863Vj9A-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City of Fairfield \| Residential Landlord Meeting 1... |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=EDMZ863Vj9A |
| `text` | 3/3 (100%) | however there's not a lot of changes except for technology related changes and I... |
| `title` | 3/3 (100%) | City of Fairfield \| Residential Landlord Meeting 1-30-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=EloJd71UJ_c`

- **Vector count**: 3
- **Sample IDs**: `fc-council-EloJd71UJ_c-0`, `fc-council-EloJd71UJ_c-2`, `fc-council-EloJd71UJ_c-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 9-23-24 (AUDIO ONLY) |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=EloJd71UJ_c |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 9-23-24 (AUDIO... |
| `title` | 3/3 (100%) | City Council 9-23-24 (AUDIO ONLY) |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IS9BMHPZtQE`

- **Vector count**: 3
- **Sample IDs**: `fc-council-IS9BMHPZtQE-2`, `fc-council-IS9BMHPZtQE-1`, `fc-council-IS9BMHPZtQE-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 1-13-14 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=IS9BMHPZtQE |
| `text` | 3/3 (100%) | 4 million project now with the the cost that they came out with this last week a... |
| `title` | 3/3 (100%) | Fairfield City Council 1-13-14 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=IF1Va40zgWM`

- **Vector count**: 3
- **Sample IDs**: `fc-council-IF1Va40zgWM-2`, `fc-council-IF1Va40zgWM-0`, `fc-council-IF1Va40zgWM-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield City Council 10-22-12 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=IF1Va40zgWM |
| `text` | 3/3 (100%) | M for the vacation of the water and sewer easement and it's in the Roosevelt Edi... |
| `title` | 3/3 (100%) | Fairfield City Council 10-22-12 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=M4TX6Fjn9GQ`

- **Vector count**: 3
- **Sample IDs**: `fc-council-M4TX6Fjn9GQ-0`, `fc-council-M4TX6Fjn9GQ-2`, `fc-council-M4TX6Fjn9GQ-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 7-28-14 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=M4TX6Fjn9GQ |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 7-28-14  good ... |
| `title` | 3/3 (100%) | City Council 7-28-14 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=KthDzThmUYY`

- **Vector count**: 3
- **Sample IDs**: `fc-council-KthDzThmUYY-0`, `fc-council-KthDzThmUYY-1`, `fc-council-KthDzThmUYY-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 2-10-20 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=KthDzThmUYY |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-10-20  what ... |
| `title` | 3/3 (100%) | City Council 2-10-20 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=On1_eonhDeA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-On1_eonhDeA-1`, `fc-council-On1_eonhDeA-2`, `fc-council-On1_eonhDeA-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-14-19 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=On1_eonhDeA |
| `text` | 3/3 (100%) | 63 any questions counsel regarding those consent agenda items not entertain a mo... |
| `title` | 3/3 (100%) | City Council 10-14-19 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=U7dB1dj-jz0`

- **Vector count**: 3
- **Sample IDs**: `fc-council-U7dB1dj-jz0-0`, `fc-council-U7dB1dj-jz0-2`, `fc-council-U7dB1dj-jz0-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 6-24-19 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=U7dB1dj-jz0 |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 6-24-19  good ... |
| `title` | 3/3 (100%) | City Council 6-24-19 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=YEa_0X248j8`

- **Vector count**: 3
- **Sample IDs**: `fc-council-YEa_0X248j8-1`, `fc-council-YEa_0X248j8-0`, `fc-council-YEa_0X248j8-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 7-27-15 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=YEa_0X248j8 |
| `text` | 3/3 (100%) | resolution resolution yes second okay approved a motion by Hamilton and second b... |
| `title` | 3/3 (100%) | City Council 7-27-15 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=_eg-ceWqT4Q`

- **Vector count**: 3
- **Sample IDs**: `fc-council-_eg-ceWqT4Q-2`, `fc-council-_eg-ceWqT4Q-0`, `fc-council-_eg-ceWqT4Q-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 5-9-16 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=_eg-ceWqT4Q |
| `text` | 3/3 (100%) | 9 acre area right there we would we would be on the South Side toward Pilot Grov... |
| `title` | 3/3 (100%) | City Council 5-9-16 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=mVqwbluduI0`

- **Vector count**: 3
- **Sample IDs**: `fc-council-mVqwbluduI0-2`, `fc-council-mVqwbluduI0-1`, `fc-council-mVqwbluduI0-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 011419 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=mVqwbluduI0 |
| `text` | 3/3 (100%) | Lewis to have the hole filled in by today and how many times if we set dates for... |
| `title` | 3/3 (100%) | City Council 011419 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=nHznaeLNmms`

- **Vector count**: 3
- **Sample IDs**: `fc-council-nHznaeLNmms-0`, `fc-council-nHznaeLNmms-2`, `fc-council-nHznaeLNmms-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — Fairfield Town Hall \| Capital Improvements Reserve... |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=nHznaeLNmms |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield Town Hall \| Capit... |
| `title` | 3/3 (100%) | Fairfield Town Hall \| Capital Improvements Reserve Fund Levy 10-16-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=nBMzUBdFuzY`

- **Vector count**: 3
- **Sample IDs**: `fc-council-nBMzUBdFuzY-2`, `fc-council-nBMzUBdFuzY-0`, `fc-council-nBMzUBdFuzY-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 6-11-18 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=nBMzUBdFuzY |
| `text` | 3/3 (100%) | on June 21st which puts you in line for considering an award for the contract at... |
| `title` | 3/3 (100%) | City Council 6-11-18 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=m2UdXrq8n90`

- **Vector count**: 3
- **Sample IDs**: `fc-council-m2UdXrq8n90-1`, `fc-council-m2UdXrq8n90-2`, `fc-council-m2UdXrq8n90-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 9-23-19 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=m2UdXrq8n90 |
| `text` | 3/3 (100%) | 4 cents of which PKG contracting amount is 249 thousand eight hundred thirty-sev... |
| `title` | 3/3 (100%) | City Council 9-23-19 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=mDOIUA_dOyA`

- **Vector count**: 3
- **Sample IDs**: `fc-council-mDOIUA_dOyA-0`, `fc-council-mDOIUA_dOyA-2`, `fc-council-mDOIUA_dOyA-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — FFCC 3-12-12 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=mDOIUA_dOyA |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: FFCC 3-12-12  joy we call a... |
| `title` | 3/3 (100%) | FFCC 3-12-12 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=puBTo-i3lm8`

- **Vector count**: 3
- **Sample IDs**: `fc-council-puBTo-i3lm8-2`, `fc-council-puBTo-i3lm8-0`, `fc-council-puBTo-i3lm8-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 4-25-22 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=puBTo-i3lm8 |
| `text` | 3/3 (100%) | uh the well was there we serviced the house and it's been servicing the house un... |
| `title` | 3/3 (100%) | City Council 4-25-22 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qkGhlVsJwy4`

- **Vector count**: 3
- **Sample IDs**: `fc-council-qkGhlVsJwy4-2`, `fc-council-qkGhlVsJwy4-0`, `fc-council-qkGhlVsJwy4-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 9-25-23 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=qkGhlVsJwy4 |
| `text` | 3/3 (100%) | okay I was looking at the wrong date I got it now yeah so I would do a motion ap... |
| `title` | 3/3 (100%) | City Council 9-25-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=qQPrs9e6zZ4`

- **Vector count**: 3
- **Sample IDs**: `fc-council-qQPrs9e6zZ4-2`, `fc-council-qQPrs9e6zZ4-0`, `fc-council-qQPrs9e6zZ4-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 11-26-18 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=qQPrs9e6zZ4 |
| `text` | 3/3 (100%) | so entertain a motion to set that date salute second floor annoy second by Ander... |
| `title` | 3/3 (100%) | City Council 11-26-18 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uBsaTARDaBU`

- **Vector count**: 3
- **Sample IDs**: `fc-council-uBsaTARDaBU-0`, `fc-council-uBsaTARDaBU-2`, `fc-council-uBsaTARDaBU-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-9-23 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=uBsaTARDaBU |
| `text` | 3/3 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-9-23  I'm g... |
| `title` | 3/3 (100%) | City Council 10-9-23 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=tP0mvGmdJtQ`

- **Vector count**: 3
- **Sample IDs**: `fc-council-tP0mvGmdJtQ-2`, `fc-council-tP0mvGmdJtQ-0`, `fc-council-tP0mvGmdJtQ-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | government |
| `filename` | 3/3 (100%) | City Council Meeting — null — City Council 10-25-21 |
| `org` | 3/3 (100%) | Fairfield City Council |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=tP0mvGmdJtQ |
| `text` | 3/3 (100%) | m with your approval this was the sole item on the economic economic development... |
| `title` | 3/3 (100%) | City Council 10-25-21 |
| `type` | 3/3 (100%) | council_meeting |

### `https://www.greaterjeffersoncountyfoundation.org/grants/annual-community-grant`

- **Vector count**: 3
- **Sample IDs**: `gjcf-aHR0cHM6Ly93d3cuZ3Jl-3`, `gjcf-aHR0cHM6Ly93d3cuZ3Jl-2`, `gjcf-aHR0cHM6Ly93d3cuZ3Jl-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic |
| `filename` | 3/3 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `org` | 3/3 (100%) | Greater Jefferson County Foundation |
| `source` | 3/3 (100%) | https://www.greaterjeffersoncountyfoundation.org/grants/annual-community-grant |
| `text` | 3/3 (100%) | Please be advised that there are a number of organizations online that might als... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/2026_smart21_and_smart_city_expo_in_curitiba_brazil`

- **Vector count**: 3
- **Sample IDs**: `icf-50215ac9246742ca1520e55f-2`, `icf-50215ac9246742ca1520e55f-0`, `icf-50215ac9246742ca1520e55f-1`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/2026_smart21_... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/2026_smart21_and_smart_city_expo_in_curitib... |
| `text` | 3/3 (100%) | Curitiba has become one of the first Brazilian cities to offer TIM 5G based on a... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/top7`

- **Vector count**: 3
- **Sample IDs**: `icf-94686ea2934f15e4941b5842-2`, `icf-94686ea2934f15e4941b5842-0`, `icf-94686ea2934f15e4941b5842-1`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/top7 |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/top7 |
| `text` | 3/3 (100%) | Congratulations to all! I’ve been to some of these communities they are indeed o... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/strategic_advisors`

- **Vector count**: 3
- **Sample IDs**: `icf-95671d29ba36fe0b3d4dbcb2-2`, `icf-95671d29ba36fe0b3d4dbcb2-0`, `icf-95671d29ba36fe0b3d4dbcb2-1`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/strategic_adv... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/strategic_advisors |
| `text` | 3/3 (100%) | The partnership is the first of its kind and leverages the Intelligent Community... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/2025_intelligent_community_of_the_year`

- **Vector count**: 3
- **Sample IDs**: `icf-377de382a0596e876a812ad3-0`, `icf-377de382a0596e876a812ad3-1`, `icf-377de382a0596e876a812ad3-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/2025_intellig... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/2025_intelligent_community_of_the_year |
| `text` | 3/3 (100%) | Durham Region, Ontario, Canada Named the 2025 Intelligent Community of the Year ... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/advisory`

- **Vector count**: 3
- **Sample IDs**: `icf-aef7ffc9fd388f1c2dbd0493-1`, `icf-aef7ffc9fd388f1c2dbd0493-0`, `icf-aef7ffc9fd388f1c2dbd0493-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/advisory |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/advisory |
| `text` | 3/3 (100%) | A regional government provided shared services to multiple municipalities, from ... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/privacy_policy`

- **Vector count**: 3
- **Sample IDs**: `icf-33081e8ebc8af5ebb040dd41-2`, `icf-33081e8ebc8af5ebb040dd41-1`, `icf-33081e8ebc8af5ebb040dd41-0`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/privacy_polic... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/privacy_policy |
| `text` | 3/3 (100%) | Your personal data is securely retained in our membership database, and other da... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_member_news`

- **Vector count**: 3
- **Sample IDs**: `icf-7e696713d03a54d61e51e7ef-2`, `icf-7e696713d03a54d61e51e7ef-0`, `icf-7e696713d03a54d61e51e7ef-1`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_member_ne... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/icf_member_news |
| `text` | 3/3 (100%) | Innovation and creativity serve as a driving force for sustainable development a... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/our_team`

- **Vector count**: 3
- **Sample IDs**: `icf-b0f1505c9fd2a2e629c65764-0`, `icf-b0f1505c9fd2a2e629c65764-2`, `icf-b0f1505c9fd2a2e629c65764-1`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/our_team |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/our_team |
| `text` | 3/3 (100%) | Robert heads ICF’s research, analysis and content development activities. He dir... |
| `type` | 3/3 (100%) | community_org |

### `https://www.extension.iastate.edu/legal`

- **Vector count**: 3
- **Sample IDs**: `isu-extension-aHR0cHM6Ly93d3cuZXh0-3`, `isu-extension-aHR0cHM6Ly93d3cuZXh0-4`, `isu-extension-aHR0cHM6Ly93d3cuZXh0-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | education |
| `filename` | 3/3 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/legal |
| `org` | 3/3 (100%) | ISU Extension Jefferson County |
| `source` | 3/3 (100%) | https://www.extension.iastate.edu/legal |
| `text` | 3/3 (100%) | Healthcare Provider Disability Documentation (PDF) If you, a colleague, particip... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/news_coverage`

- **Vector count**: 3
- **Sample IDs**: `icf-fa388a8fde332ca12fb4f8e1-1`, `icf-fa388a8fde332ca12fb4f8e1-0`, `icf-fa388a8fde332ca12fb4f8e1-2`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/news_coverage |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/news_coverage |
| `text` | 3/3 (100%) | Posted on News & Media by Victoria Krisman July 30, 2025 1:49 PM 1 reaction The ... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_2026_top7_conference_announcement`

- **Vector count**: 3
- **Sample IDs**: `icf-fda5d8776f22ea3d73c7c4ba-2`, `icf-fda5d8776f22ea3d73c7c4ba-1`, `icf-fda5d8776f22ea3d73c7c4ba-0`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_2026_top7... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/icf_2026_top7_conference_announcement |
| `text` | 3/3 (100%) | The VIP Extended Delegation participants will travel by train to Eindhoven, chec... |
| `type` | 3/3 (100%) | community_org |

### `https://www.iowasource.com/2018/01/05/events-calendar`

- **Vector count**: 3
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-9`, `iowa-source-aHR0cHM6Ly93d3cuaW93-8`, `iowa-source-aHR0cHM6Ly93d3cuaW93-7`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | media |
| `filename` | 3/3 (100%) | Iowa Source — https://www.iowasource.com/2018/01/05/events-calendar |
| `org` | 3/3 (100%) | Iowa Source |
| `source` | 3/3 (100%) | https://www.iowasource.com/2018/01/05/events-calendar |
| `text` | 3/3 (100%) | I would like to receive news and special offers. Our site uses cookies. Learn mo... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/looking_back_on_2025_and_forward_to_2026`

- **Vector count**: 3
- **Sample IDs**: `icf-e4505b7a8e197782329f66b9-2`, `icf-e4505b7a8e197782329f66b9-1`, `icf-e4505b7a8e197782329f66b9-0`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/looking_back_... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/looking_back_on_2025_and_forward_to_2026 |
| `text` | 3/3 (100%) | After a pause of 12 years, we welcomed back beautiful Kingston in Ontario, a cit... |
| `type` | 3/3 (100%) | community_org |

### `https://www.extension.iastate.edu/jefferson/newsetter/jefferson-county-extension-newsletter-0`

- **Vector count**: 3
- **Sample IDs**: `isu-extension-aHR0cHM6Ly93d3cuZXh0-7`, `isu-extension-aHR0cHM6Ly93d3cuZXh0-6`, `isu-extension-aHR0cHM6Ly93d3cuZXh0-5`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | education |
| `filename` | 3/3 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/new... |
| `org` | 3/3 (100%) | ISU Extension Jefferson County |
| `source` | 3/3 (100%) | https://www.extension.iastate.edu/jefferson/newsetter/jefferson-county-extension... |
| `text` | 3/3 (100%) | The Iowa Poultry and Egg Scholarship Foundation offers scholarships to graduatin... |
| `type` | 3/3 (100%) | community_org |

### `https://www.intelligentcommunity.org/intelligent_community_forum_and_exxas_announce_partnership_to_support_brazilian_communities`

- **Vector count**: 3
- **Sample IDs**: `icf-bf30942860d804ab27ca7634-2`, `icf-bf30942860d804ab27ca7634-1`, `icf-bf30942860d804ab27ca7634-0`
- **ID patterns**: `orgId-sha24-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | civic-knowledge |
| `filename` | 3/3 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/intelligent_c... |
| `org` | 3/3 (100%) | Intelligent Community Forum |
| `source` | 3/3 (100%) | https://www.intelligentcommunity.org/intelligent_community_forum_and_exxas_annou... |
| `text` | 3/3 (100%) | About EXXAS Specialized in innovation governance, EXXAS ( www.exxas.com.br ) pro... |
| `type` | 3/3 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/b-bn/bnsf.htm`

- **Vector count**: 3
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-4`, `jctc-aHR0cDovL3d3dy5qZWZm-3`, `jctc-aHR0cDovL3d3dy5qZWZm-5`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | conservation |
| `filename` | 3/3 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/b-bn/bnsf... |
| `org` | 3/3 (100%) | Jefferson County Trails Council |
| `source` | 3/3 (100%) | http://www.jeffersoncountytrails.org/b-bn/bnsf.htm |
| `text` | 3/3 (100%) | The trail must be built up to meet the end of the bridge. The first load of dirt... |
| `type` | 3/3 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/news2009.htm`

- **Vector count**: 3
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-8`, `jctc-aHR0cDovL3d3dy5qZWZm-10`, `jctc-aHR0cDovL3d3dy5qZWZm-9`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | conservation |
| `filename` | 3/3 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/news2009.... |
| `org` | 3/3 (100%) | Jefferson County Trails Council |
| `source` | 3/3 (100%) | http://www.jeffersoncountytrails.org/news2009.htm |
| `text` | 3/3 (100%) | Sept 19... October 5th is set for the Dedication ceremony for the Carl Zillman B... |
| `type` | 3/3 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=125`

- **Vector count**: 3
- **Sample IDs**: `minutes-125.pdf-chunk-0`, `minutes-125.pdf-chunk-2`, `minutes-125.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-125.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=125 |
| `text` | 3/3 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL   January 28, 2013      The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=124`

- **Vector count**: 3
- **Sample IDs**: `minutes-124.pdf-chunk-2`, `minutes-124.pdf-chunk-1`, `minutes-124.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-124.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=124 |
| `text` | 3/3 (100%) | T  Moved by Revolinski, seconded by Boyer   AYES:  Revolinski, Boyer, Halley, Le... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=115`

- **Vector count**: 3
- **Sample IDs**: `minutes-115.pdf-chunk-2`, `minutes-115.pdf-chunk-1`, `minutes-115.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-115.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=115 |
| `text` | 3/3 (100%) | N    ECONOMIC DEVELOPMENT AGREEMENT.    ADJOURNMENT  Moved by Hamilton, seconded... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=222`

- **Vector count**: 3
- **Sample IDs**: `minutes-222.pdf-chunk-2`, `minutes-222.pdf-chunk-1`, `minutes-222.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-222.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=222 |
| `text` | 3/3 (100%) | ossibly both projects  could be cut in order to get them built in 2015.  They al... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=244`

- **Vector count**: 3
- **Sample IDs**: `minutes-244.pdf-chunk-0`, `minutes-244.pdf-chunk-1`, `minutes-244.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-244.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=244 |
| `text` | 3/3 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL     October 27, 2014      The Fairfield ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=248`

- **Vector count**: 3
- **Sample IDs**: `minutes-248.pdf-chunk-0`, `minutes-248.pdf-chunk-1`, `minutes-248.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-248.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=248 |
| `text` | 3/3 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    December 6, 2014            The... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=293`

- **Vector count**: 3
- **Sample IDs**: `minutes-293.pdf-chunk-2`, `minutes-293.pdf-chunk-1`, `minutes-293.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-293.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=293 |
| `text` | 3/3 (100%) | member voted by all council members.    A ballot was passed around and it was un... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=306`

- **Vector count**: 3
- **Sample IDs**: `minutes-306.pdf-chunk-1`, `minutes-306.pdf-chunk-2`, `minutes-306.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-306.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=306 |
| `text` | 3/3 (100%) | TH MONDAY OF EACH    MONTH FOR CITY COUNCIL MEETINGS.    Moved by Revolinski, se... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=334`

- **Vector count**: 3
- **Sample IDs**: `minutes-334.pdf-chunk-2`, `minutes-334.pdf-chunk-0`, `minutes-334.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-334.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=334 |
| `text` | 3/3 (100%) | G    THE SALE OF CITY OWNED LAND SEGMENT ADJACENT TO     WALTON LAKE.    Moved b... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=332`

- **Vector count**: 3
- **Sample IDs**: `minutes-332.pdf-chunk-1`, `minutes-332.pdf-chunk-2`, `minutes-332.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-332.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=332 |
| `text` | 3/3 (100%) | d by Halley   AYES:  Flournoy, Halley, Hamilton, Thompson      TO ADOPT RESOLUTI... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=336`

- **Vector count**: 3
- **Sample IDs**: `minutes-336.pdf-chunk-0`, `minutes-336.pdf-chunk-2`, `minutes-336.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-336.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=336 |
| `text` | 3/3 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    November 2, 2016      The Fairfield C... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=438`

- **Vector count**: 3
- **Sample IDs**: `minutes-438.pdf-chunk-1`, `minutes-438.pdf-chunk-0`, `minutes-438.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-438.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=438 |
| `text` | 3/3 (100%) | ion was held concerning the least preferable locations (Small Cell Guidelines,  ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=644`

- **Vector count**: 3
- **Sample IDs**: `minutes-644.pdf-chunk-1`, `minutes-644.pdf-chunk-2`, `minutes-644.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-644.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=644 |
| `text` | 3/3 (100%) | ced himself to Council.  As there were no  written or verbal objections, Mayor c... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=647`

- **Vector count**: 3
- **Sample IDs**: `minutes-647.pdf-chunk-1`, `minutes-647.pdf-chunk-0`, `minutes-647.pdf-chunk-2`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-647.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=647 |
| `text` | 3/3 (100%) | ertified was to pay for the 23 rd  street reconstruction     A motion was made b... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=673`

- **Vector count**: 3
- **Sample IDs**: `minutes-673.pdf-chunk-2`, `minutes-673.pdf-chunk-0`, `minutes-673.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-673.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=673 |
| `text` | 3/3 (100%) |  THE REMAINING AMBULANCE    CONTRACT WITH CARE AMBULANCE.    ADJOURNMENT  Moved ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=753`

- **Vector count**: 3
- **Sample IDs**: `minutes-753.pdf-chunk-1`, `minutes-753.pdf-chunk-2`, `minutes-753.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-753.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=753 |
| `text` | 3/3 (100%) | s to have a joint meeting on budgets. Jennifer questioned the size of the police... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=76`

- **Vector count**: 3
- **Sample IDs**: `minutes-76.pdf-chunk-2`, `minutes-76.pdf-chunk-0`, `minutes-76.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-76.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=76 |
| `text` | 3/3 (100%) |  ADJOURNMENT  Moved by Hamilton, seconded by Boyer   AYES:  Hamilton, Boyer, Ada... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=77`

- **Vector count**: 3
- **Sample IDs**: `minutes-77.pdf-chunk-2`, `minutes-77.pdf-chunk-0`, `minutes-77.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 3/3 (100%) | minutes-77.pdf |
| `source` | 3/3 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=77 |
| `text` | 3/3 (100%) | ton, seconded by Silvers   AYES:  Hamilton, Silvers, Boyer, Revolinski, Mottet, ... |

### `growfairfield.com`

- **Vector count**: 3
- **Sample IDs**: `newboco_fairfield_addendum_chunk_0`, `newboco_fairfield_addendum_chunk_2`, `newboco_fairfield_addendum_chunk_1`
- **ID patterns**: `prefix_name_chunk_N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic_development |
| `chunkIndex` | 3/3 (100%) | 0 |
| `filename` | 3/3 (100%) | newboco_fairfield_addendum.txt |
| `source` | 3/3 (100%) | growfairfield.com |
| `subcategory` | 3/3 (100%) | entrepreneurship |
| `text` | 3/3 (100%) | NewBoCo / Fairfield Entrepreneur in Residence - Additional Details Source: growf... |

### `thewelliowa.org`

- **Vector count**: 3
- **Sample IDs**: `the_well_fairfield_chunk_2`, `the_well_fairfield_chunk_1`, `the_well_fairfield_chunk_0`
- **ID patterns**: `prefix_name_chunk_N` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | community_organizations |
| `chunkIndex` | 3/3 (100%) | 2 |
| `filename` | 3/3 (100%) | the_well_fairfield.txt |
| `source` | 3/3 (100%) | thewelliowa.org |
| `subcategory` | 3/3 (100%) | social_services |
| `text` | 3/3 (100%) | Fairfield, IA 52556. - Employment inquiries: 641-819-4044 \| info@thewelliowa.org... |

### `https://www.youtube.com/watch?v=4CMjpRsJe4M`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-4CMjpRsJe4M-1`, `traction-thursdays-4CMjpRsJe4M-2`, `traction-thursdays-4CMjpRsJe4M-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dee Sandquist "Niman Ranch Far... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=4CMjpRsJe4M |
| `text` | 3/3 (100%) | com and it's under impact statement but they uh worked with Iowa state two three... |
| `title` | 3/3 (100%) | Traction Thursday \| Dee Sandquist "Niman Ranch Farmer" |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=26gLWhpNgrE`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-26gLWhpNgrE-1`, `traction-thursdays-26gLWhpNgrE-2`, `traction-thursdays-26gLWhpNgrE-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr. Eric Schaeffer & Dr. Apala... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=26gLWhpNgrE |
| `text` | 3/3 (100%) | "  welcome everybody to traction Thursday it's my pleasure to introduce Dr Eric ... |
| `title` | 3/3 (100%) | Traction Thursday \| Dr. Eric Schaeffer & Dr. Apala Lahiri "Human Factors Int." |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9b_KeQ8bYeE`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-9b_KeQ8bYeE-0`, `traction-thursdays-9b_KeQ8bYeE-1`, `traction-thursdays-9b_KeQ8bYeE-2`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Christina Moffatt "Strategist ... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=9b_KeQ8bYeE |
| `text` | 3/3 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ch... |
| `title` | 3/3 (100%) | Traction Thursday \| Christina Moffatt "Strategist of Customer Growth" |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9oiCHpvdKcI`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-9oiCHpvdKcI-2`, `traction-thursdays-9oiCHpvdKcI-0`, `traction-thursdays-9oiCHpvdKcI-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursdays \| Ron Doetch "Solutions in the ... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=9oiCHpvdKcI |
| `text` | 3/3 (100%) | 2 to one for every dollar of turn uh we have some people that want to pretend it... |
| `title` | 3/3 (100%) | Traction Thursdays \| Ron Doetch "Solutions in the Land, Agronomist, and Whole Sy... |
| `type` | 3/3 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=5mvL7q_isxI`

- **Vector count**: 3
- **Sample IDs**: `traction-thursdays-5mvL7q_isxI-0`, `traction-thursdays-5mvL7q_isxI-2`, `traction-thursdays-5mvL7q_isxI-1`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Kellen Gracey of Revata Consul... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=5mvL7q_isxI |
| `text` | 3/3 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ke... |
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
- **Sample IDs**: `traction-thursdays-lwww9MmVza4-2`, `traction-thursdays-lwww9MmVza4-1`, `traction-thursdays-lwww9MmVza4-0`
- **ID patterns**: `other` (3)
- **Vectors profiled for metadata**: 3

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 3/3 (100%) | economic |
| `filename` | 3/3 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr. Eric Schaffer and Dr.  Apa... |
| `org` | 3/3 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 3/3 (100%) | traction-thursdays |
| `publishedAt` | 3/3 (100%) |  |
| `source` | 3/3 (100%) | https://www.youtube.com/watch?v=lwww9MmVza4 |
| `text` | 3/3 (100%) | 2 billion do yeah and this is how they did it they did a survey and they asked p... |
| `title` | 3/3 (100%) | Traction Thursday \| Dr. Eric Schaffer and Dr.  Apala Lahiri "HFI Laboratories" |
| `type` | 3/3 (100%) | traction_thursday |

### `http://www.area15rpc.com/rhtf`

- **Vector count**: 2
- **Sample IDs**: `area15-rpc-aHR0cDovL3d3dy5hcmVh-0`, `area15-rpc-aHR0cDovL3d3dy5hcmVh-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | regional_planning |
| `filename` | 2/2 (100%) | Area 15 Regional Planning Commission — http://www.area15rpc.com/rhtf |
| `org` | 2/2 (100%) | Area 15 Regional Planning Commission |
| `source` | 2/2 (100%) | http://www.area15rpc.com/rhtf |
| `text` | 2/2 (100%) | The mission of the AHEAD Regional Housing Trust Fund (RHTF) is to promote the cr... |
| `type` | 2/2 (100%) | community_org |

### `https://www.fairfieldiowa.com/news/2025_barnyard_bash_recap`

- **Vector count**: 2
- **Sample IDs**: `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-1`, `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | business |
| `filename` | 2/2 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/news/2025_bar... |
| `org` | 2/2 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 2/2 (100%) | https://www.fairfieldiowa.com/news/2025_barnyard_bash_recap |
| `text` | 2/2 (100%) | Shop Local This February & Win with the Fairfield Chamber Bucks Giveaway Fairfie... |
| `type` | 2/2 (100%) | community_org |

### `https://www.fairfieldiowa.com/news/10_intentional_ways_to_get_a_jump_start_on_holiday_revenue`

- **Vector count**: 2
- **Sample IDs**: `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-3`, `fairfield-chamber-aHR0cHM6Ly93d3cuZmFp-2`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | business |
| `filename` | 2/2 (100%) | Fairfield Area Chamber of Commerce — https://www.fairfieldiowa.com/news/10_inten... |
| `org` | 2/2 (100%) | Fairfield Area Chamber of Commerce |
| `source` | 2/2 (100%) | https://www.fairfieldiowa.com/news/10_intentional_ways_to_get_a_jump_start_on_ho... |
| `text` | 2/2 (100%) | ✨ Big Reveal: Introducing the 2025 Chamber Awards Garden Tea Party Theme ✨ Sho... |
| `type` | 2/2 (100%) | community_org |

### `https://www.youtube.com/watch?v=-ddNSZ88MAU`

- **Vector count**: 2
- **Sample IDs**: `fc-council--ddNSZ88MAU-1`, `fc-council--ddNSZ88MAU-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — FFCC 6-11-12 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=-ddNSZ88MAU |
| `text` | 2/2 (100%) | 67 per hour and also claims in the $691,000 it used to be clo in the summertime ... |
| `title` | 2/2 (100%) | FFCC 6-11-12 |
| `type` | 2/2 (100%) | council_meeting |

### `wildspiritsfarm.com`

- **Vector count**: 2
- **Sample IDs**: `fairfield_garden_initiative_chunk_1`, `fairfield_garden_initiative_chunk_0`
- **ID patterns**: `prefix_name_chunk_N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | community_organizations |
| `chunkIndex` | 2/2 (100%) | 1 |
| `filename` | 2/2 (100%) | fairfield_garden_initiative.txt |
| `source` | 2/2 (100%) | wildspiritsfarm.com |
| `subcategory` | 2/2 (100%) | food_security |
| `text` | 2/2 (100%) | rs mental and emotional well-being, strengthens family connections, and builds r... |

### `https://www.youtube.com/watch?v=7ReqsPFz_j4`

- **Vector count**: 2
- **Sample IDs**: `fc-council-7ReqsPFz_j4-0`, `fc-council-7ReqsPFz_j4-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 1-27-14 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=7ReqsPFz_j4 |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 1-27... |
| `title` | 2/2 (100%) | Fairfield City Council 1-27-14 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9JwzE0q6-qQ`

- **Vector count**: 2
- **Sample IDs**: `fc-council-9JwzE0q6-qQ-1`, `fc-council-9JwzE0q6-qQ-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council - Special Meeting 4-12-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=9JwzE0q6-qQ |
| `text` | 2/2 (100%) | Peggy yeah come to the microphone okay so I wanted to I wanted to express my app... |
| `title` | 2/2 (100%) | City Council - Special Meeting 4-12-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=69GL23lpNew`

- **Vector count**: 2
- **Sample IDs**: `fc-council-69GL23lpNew-1`, `fc-council-69GL23lpNew-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 8-8-16 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=69GL23lpNew |
| `text` | 2/2 (100%) | Louis now okay it's out of a tongue whoa but people we contact you're out of see... |
| `title` | 2/2 (100%) | City Council 8-8-16 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=9PalXMP3PHA`

- **Vector count**: 2
- **Sample IDs**: `fc-council-9PalXMP3PHA-1`, `fc-council-9PalXMP3PHA-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 11-12-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=9PalXMP3PHA |
| `text` | 2/2 (100%) | m. and I guess once you scroll to the bottom first before I get too far into thi... |
| `title` | 2/2 (100%) | City Council 11-12-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Enwg542Nt40`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Enwg542Nt40-1`, `fc-council-Enwg542Nt40-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 6-24-24 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Enwg542Nt40 |
| `text` | 2/2 (100%) | org yes you can post the link there I'll do that great maybe also include to whe... |
| `title` | 2/2 (100%) | City Council 6-24-24 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=G-pysTaF1Ck`

- **Vector count**: 2
- **Sample IDs**: `fc-council-G-pysTaF1Ck-1`, `fc-council-G-pysTaF1Ck-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 8-12-24 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=G-pysTaF1Ck |
| `text` | 2/2 (100%) | 25 for the toing second how many how many cars were towed do you know do you kno... |
| `title` | 2/2 (100%) | City Council 8-12-24 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=H0W6jfCbHHQ`

- **Vector count**: 2
- **Sample IDs**: `fc-council-H0W6jfCbHHQ-0`, `fc-council-H0W6jfCbHHQ-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City of Fairfield \| Study Session & City Council 2... |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=H0W6jfCbHHQ |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City of Fairfield \| Study S... |
| `title` | 2/2 (100%) | City of Fairfield \| Study Session & City Council 2.10.25 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=KQ9CU7Haums`

- **Vector count**: 2
- **Sample IDs**: `fc-council-KQ9CU7Haums-1`, `fc-council-KQ9CU7Haums-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 3-10-14 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=KQ9CU7Haums |
| `text` | 2/2 (100%) | 5 Cent um Capital Improvement Reserve fund surf Levy and um the uh the millage t... |
| `title` | 2/2 (100%) | Fairfield City Council 3-10-14 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=LZ-RiBV7hVY`

- **Vector count**: 2
- **Sample IDs**: `fc-council-LZ-RiBV7hVY-0`, `fc-council-LZ-RiBV7hVY-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council Work Session 11.12.24 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=LZ-RiBV7hVY |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council Work Session 1... |
| `title` | 2/2 (100%) | City Council Work Session 11.12.24 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Kec-CbbG_Bg`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Kec-CbbG_Bg-0`, `fc-council-Kec-CbbG_Bg-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 9-11-17 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Kec-CbbG_Bg |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 9-11-17  good ... |
| `title` | 2/2 (100%) | City Council 9-11-17 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OrCp21Eg0ZI`

- **Vector count**: 2
- **Sample IDs**: `fc-council-OrCp21Eg0ZI-1`, `fc-council-OrCp21Eg0ZI-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 3-24-14 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=OrCp21Eg0ZI |
| `text` | 2/2 (100%) | 7% of people in Iowa work from their home in Fairfield it's a little over 12% an... |
| `title` | 2/2 (100%) | Fairfield City Council 3-24-14 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OoZ7WvjPPQ0`

- **Vector count**: 2
- **Sample IDs**: `fc-council-OoZ7WvjPPQ0-0`, `fc-council-OoZ7WvjPPQ0-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — FFCC 7-9-12 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=OoZ7WvjPPQ0 |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: FFCC 7-9-12  good evening e... |
| `title` | 2/2 (100%) | FFCC 7-9-12 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OaEWVA3Va6A`

- **Vector count**: 2
- **Sample IDs**: `fc-council-OaEWVA3Va6A-1`, `fc-council-OaEWVA3Va6A-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 8-13-12 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=OaEWVA3Va6A |
| `text` | 2/2 (100%) | 5 million bored and it was and we only got three it should have we we were short... |
| `title` | 2/2 (100%) | Fairfield City Council 8-13-12 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=R0UCvZ4SMbU`

- **Vector count**: 2
- **Sample IDs**: `fc-council-R0UCvZ4SMbU-1`, `fc-council-R0UCvZ4SMbU-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
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
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 3-25-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Q32QhJdpsKg |
| `text` | 2/2 (100%) | 98 of which PKG contracting is being awarded 1 million 37 thousand four hundred ... |
| `title` | 2/2 (100%) | City Council 3-25-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Tgk8rZsXcl8`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Tgk8rZsXcl8-1`, `fc-council-Tgk8rZsXcl8-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 6-14-21 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Tgk8rZsXcl8 |
| `text` | 2/2 (100%) | 80 we had no claims over 75 000 motion to approve consent agenda second move by ... |
| `title` | 2/2 (100%) | City Council 6-14-21 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=VrmnaYOaVwY`

- **Vector count**: 2
- **Sample IDs**: `fc-council-VrmnaYOaVwY-1`, `fc-council-VrmnaYOaVwY-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 10-28-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=VrmnaYOaVwY |
| `text` | 2/2 (100%) | only while school is in session and that'll be on the north side of Madison from... |
| `title` | 2/2 (100%) | City Council 10-28-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Vt_QLjY9qmI`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Vt_QLjY9qmI-1`, `fc-council-Vt_QLjY9qmI-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 3 -26-18 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Vt_QLjY9qmI |
| `text` | 2/2 (100%) | Rasmussen was mayor Meyer and John Brown was our city council member we were one... |
| `title` | 2/2 (100%) | City Council 3 -26-18 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=WQKpxQ79_Jo`

- **Vector count**: 2
- **Sample IDs**: `fc-council-WQKpxQ79_Jo-1`, `fc-council-WQKpxQ79_Jo-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 11-9-20 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=WQKpxQ79_Jo |
| `text` | 2/2 (100%) | 43% uh obviously very low uh last week we tested 274 patients and our positivity... |
| `title` | 2/2 (100%) | City Council 11-9-20 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=Xx2H8te6OuI`

- **Vector count**: 2
- **Sample IDs**: `fc-council-Xx2H8te6OuI-0`, `fc-council-Xx2H8te6OuI-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — 5-11-15 City Council Meeting |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Xx2H8te6OuI |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: 5-11-15 City Council Meetin... |
| `title` | 2/2 (100%) | 5-11-15 City Council Meeting |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=X_gtD8Iptus`

- **Vector count**: 2
- **Sample IDs**: `fc-council-X_gtD8Iptus-0`, `fc-council-X_gtD8Iptus-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 4-13-15 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=X_gtD8Iptus |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 4-13-15  good ... |
| `title` | 2/2 (100%) | City Council 4-13-15 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ZXIEBfiPZ-U`

- **Vector count**: 2
- **Sample IDs**: `fc-council-ZXIEBfiPZ-U-1`, `fc-council-ZXIEBfiPZ-U-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 4-22-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=ZXIEBfiPZ-U |
| `text` | 2/2 (100%) | Fagan about the spacing of which I think most people took as the antennas and wh... |
| `title` | 2/2 (100%) | City Council 4-22-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=aWSBXkdR_eg`

- **Vector count**: 2
- **Sample IDs**: `fc-council-aWSBXkdR_eg-0`, `fc-council-aWSBXkdR_eg-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — FFCC 5-14-12 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=aWSBXkdR_eg |
| `text` | 2/2 (100%) | Fairfield City Council Meeting — date unknown Title: FFCC 5-14-12  good evening ... |
| `title` | 2/2 (100%) | FFCC 5-14-12 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=aE6SMfsMWNo`

- **Vector count**: 2
- **Sample IDs**: `fc-council-aE6SMfsMWNo-1`, `fc-council-aE6SMfsMWNo-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield City Council 11-12-13 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=aE6SMfsMWNo |
| `text` | 2/2 (100%) | 75 I bet can't do that again um so I would entertain a motion to approve the con... |
| `title` | 2/2 (100%) | Fairfield City Council 11-12-13 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=oznxOBaGOh0`

- **Vector count**: 2
- **Sample IDs**: `fc-council-oznxOBaGOh0-1`, `fc-council-oznxOBaGOh0-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 7-25-16 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=oznxOBaGOh0 |
| `text` | 2/2 (100%) | 5 million of Grant funds to construct the portion of step two that runs through ... |
| `title` | 2/2 (100%) | City Council 7-25-16 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=sss-p-VN-o4`

- **Vector count**: 2
- **Sample IDs**: `fc-council-sss-p-VN-o4-1`, `fc-council-sss-p-VN-o4-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — Fairfield Town Hall \| Mans Best Friend \| 4-25-22 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=sss-p-VN-o4 |
| `text` | 2/2 (100%) | i'm on my second golden retriever and since i've retired i walk about 50 miles a... |
| `title` | 2/2 (100%) | Fairfield Town Hall \| Mans Best Friend \| 4-25-22 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=uotEv7rUQAU`

- **Vector count**: 2
- **Sample IDs**: `fc-council-uotEv7rUQAU-1`, `fc-council-uotEv7rUQAU-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — Special City Council 1-2-20 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=uotEv7rUQAU |
| `text` | 2/2 (100%) | m. so I'd like to entertain a motion so move there second second okay so it's be... |
| `title` | 2/2 (100%) | Special City Council 1-2-20 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=xuSQm6D4u5A`

- **Vector count**: 2
- **Sample IDs**: `fc-council-xuSQm6D4u5A-1`, `fc-council-xuSQm6D4u5A-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — City Council 5-28-19 |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=xuSQm6D4u5A |
| `text` | 2/2 (100%) | so moves move by Gandy to approve the second second by Rasmussen all those in fa... |
| `title` | 2/2 (100%) | City Council 5-28-19 |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=x4YGj5uI5as`

- **Vector count**: 2
- **Sample IDs**: `fc-council-x4YGj5uI5as-1`, `fc-council-x4YGj5uI5as-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | City Council Meeting — null — 6-22-15 City Council Meeting |
| `org` | 2/2 (100%) | Fairfield City Council |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=x4YGj5uI5as |
| `text` | 2/2 (100%) | m. move to approve so moved by love jekalyn second by flournoy all those in favo... |
| `title` | 2/2 (100%) | 6-22-15 City Council Meeting |
| `type` | 2/2 (100%) | council_meeting |

### `https://www.fairfieldmediacenter.com/chambertalk`

- **Vector count**: 2
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-4`, `fmc-aHR0cHM6Ly93d3cuZmFp-3`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | arts-culture |
| `filename` | 2/2 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/chambertalk |
| `org` | 2/2 (100%) | Fairfield Media Center |
| `source` | 2/2 (100%) | https://www.fairfieldmediacenter.com/chambertalk |
| `text` | 2/2 (100%) | www.fairfieldmediacenter.com www.facebook.com/fairfieldmediacenter www.twitter.c... |
| `type` | 2/2 (100%) | community_org |

### `https://fairfieldeducationfoundation.com/directors`

- **Vector count**: 2
- **Sample IDs**: `fef-aHR0cHM6Ly9mYWlyZmll-2`, `fef-aHR0cHM6Ly9mYWlyZmll-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | education |
| `filename` | 2/2 (100%) | Fairfield Education Foundation — https://fairfieldeducationfoundation.com/direct... |
| `org` | 2/2 (100%) | Fairfield Education Foundation |
| `source` | 2/2 (100%) | https://fairfieldeducationfoundation.com/directors |
| `text` | 2/2 (100%) | is a Buyer at Dexter Laundry and an active member of the Fairfield community. He... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/what_is_an_intelligent_community`

- **Vector count**: 2
- **Sample IDs**: `icf-7f6a284c265bdef21e2e8ad9-1`, `icf-7f6a284c265bdef21e2e8ad9-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/what_is_an_in... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/what_is_an_intelligent_community |
| `text` | 2/2 (100%) | The challenges are less visible but more profound. The digital revolution has cr... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/learn`

- **Vector count**: 2
- **Sample IDs**: `icf-2119e30735bd87b41dd5ca36-1`, `icf-2119e30735bd87b41dd5ca36-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/learn |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/learn |
| `text` | 2/2 (100%) | Learn How to Build an Intelligent Community Learn from the Best Practices of 200... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_2026_vip_delegation_to_taiwan_smart_city_summit_expo`

- **Vector count**: 2
- **Sample IDs**: `icf-9174c6cde7050cd3067352be-1`, `icf-9174c6cde7050cd3067352be-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_2026_vip_... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/icf_2026_vip_delegation_to_taiwan_smart_cit... |
| `text` | 2/2 (100%) | Being Asia’s largest hybrid smart city tradeshow featuring IoT solutions, Smart ... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/solutions`

- **Vector count**: 2
- **Sample IDs**: `icf-bafe3e7e27642ef8bc7e8a73-0`, `icf-bafe3e7e27642ef8bc7e8a73-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/solutions |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/solutions |
| `text` | 2/2 (100%) | ICF attracts high-quality providers of services and product that contribute to t... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/compete`

- **Vector count**: 2
- **Sample IDs**: `icf-a6e47eb8970b953ae372334b-0`, `icf-a6e47eb8970b953ae372334b-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/compete |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/compete |
| `text` | 2/2 (100%) | The Intelligent Community Awards Program® honors the achievements of Intelligent... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/books`

- **Vector count**: 2
- **Sample IDs**: `icf-14a053121a10d7ec4c4e5c7f-0`, `icf-14a053121a10d7ec4c4e5c7f-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/books |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/books |
| `text` | 2/2 (100%) | The ICF Method for economic, social and cultural growth in the digital age Growt... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_partner_events`

- **Vector count**: 2
- **Sample IDs**: `icf-17d564bf06f314ff26b64339-0`, `icf-17d564bf06f314ff26b64339-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_partner_e... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/icf_partner_events |
| `text` | 2/2 (100%) | ICF Partner Events - Intelligent Community Forum Dentons Smart Cities & Connecte... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/accelerator_training`

- **Vector count**: 2
- **Sample IDs**: `icf-ada4fa5a1b9963b9ec9b2ab3-0`, `icf-ada4fa5a1b9963b9ec9b2ab3-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/accelerator_t... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/accelerator_training |
| `text` | 2/2 (100%) | Learn from the Best Practices of 200 Cities and Regions - Intelligent Community ... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_podcast`

- **Vector count**: 2
- **Sample IDs**: `icf-5083a4beb91eaf3a8a8fa321-1`, `icf-5083a4beb91eaf3a8a8fa321-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_podcast |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/icf_podcast |
| `text` | 2/2 (100%) | "Robot for Mayor" A Conversation with Dr. Norman Jacknis, Part 2 “Robot for Mayo... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_global_summits`

- **Vector count**: 2
- **Sample IDs**: `icf-583317ab16c4a84778114a8c-1`, `icf-583317ab16c4a84778114a8c-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_global_su... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/icf_global_summits |
| `text` | 2/2 (100%) | International Opportunities. McKinsey estimates that 80% of the world’s trade wi... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/speakers`

- **Vector count**: 2
- **Sample IDs**: `icf-1e66ce73592f5e19f4a6fae8-1`, `icf-1e66ce73592f5e19f4a6fae8-0`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/speakers |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/speakers |
| `text` | 2/2 (100%) | Dr. Norman Jacknis is currently Senior Fellow at the Intelligent Community Forum... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/advocacy`

- **Vector count**: 2
- **Sample IDs**: `icf-fe55b5afea434a61855c450f-0`, `icf-fe55b5afea434a61855c450f-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/advocacy |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/advocacy |
| `text` | 2/2 (100%) | Engagement organizes and powers every other factor of the Accelerator Strategy E... |
| `type` | 2/2 (100%) | community_org |

### `https://www.iowasource.com/2015/11/06/fairfield2015_11`

- **Vector count**: 2
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-1`, `iowa-source-aHR0cHM6Ly93d3cuaW93-2`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | media |
| `filename` | 2/2 (100%) | Iowa Source — https://www.iowasource.com/2015/11/06/fairfield2015_11 |
| `org` | 2/2 (100%) | Iowa Source |
| `source` | 2/2 (100%) | https://www.iowasource.com/2015/11/06/fairfield2015_11 |
| `text` | 2/2 (100%) | “There’s been a lot of community openness and engagement,” says board member Min... |
| `type` | 2/2 (100%) | community_org |

### `https://www.iowasource.com/2017/11/28/laura-ingalls-wilder`

- **Vector count**: 2
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-5`, `iowa-source-aHR0cHM6Ly93d3cuaW93-6`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | media |
| `filename` | 2/2 (100%) | Iowa Source — https://www.iowasource.com/2017/11/28/laura-ingalls-wilder |
| `org` | 2/2 (100%) | Iowa Source |
| `source` | 2/2 (100%) | https://www.iowasource.com/2017/11/28/laura-ingalls-wilder |
| `text` | 2/2 (100%) | Wilder adored her father, and the feeling was clearly mutual. Laura’s sister Mar... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/innovation`

- **Vector count**: 2
- **Sample IDs**: `icf-c8614b54a89ea3a34fa0bd77-0`, `icf-c8614b54a89ea3a34fa0bd77-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/innovation |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/innovation |
| `text` | 2/2 (100%) | Developing new ideas and technology fuels economic growth Developing new ideas a... |
| `type` | 2/2 (100%) | community_org |

### `https://www.intelligentcommunity.org/your_intelligent_community_journey`

- **Vector count**: 2
- **Sample IDs**: `icf-d3ac770eb385060d7c22b177-0`, `icf-d3ac770eb385060d7c22b177-1`
- **ID patterns**: `orgId-sha24-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic-knowledge |
| `filename` | 2/2 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/your_intellig... |
| `org` | 2/2 (100%) | Intelligent Community Forum |
| `source` | 2/2 (100%) | https://www.intelligentcommunity.org/your_intelligent_community_journey |
| `text` | 2/2 (100%) | Your Intelligent Community Journey - Intelligent Community Forum It is a journey... |
| `type` | 2/2 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/treasurer`

- **Vector count**: 2
- **Sample IDs**: `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-3`, `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-4`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | government |
| `filename` | 2/2 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/treasurer |
| `org` | 2/2 (100%) | Jefferson County Code of Ordinances |
| `source` | 2/2 (100%) | https://jeffersoncounty.iowa.gov/treasurer |
| `text` | 2/2 (100%) | How do I order personalized/vanity license plates? Personalized license plates c... |
| `type` | 2/2 (100%) | community_org |

### `http://jeffersoncountyconservation.com`

- **Vector count**: 2
- **Sample IDs**: `jcc-aHR0cDovL2plZmZlcnNv-0`, `jcc-aHR0cDovL2plZmZlcnNv-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | conservation |
| `filename` | 2/2 (100%) | Jefferson County Conservation — http://jeffersoncountyconservation.com |
| `org` | 2/2 (100%) | Jefferson County Conservation |
| `source` | 2/2 (100%) | http://jeffersoncountyconservation.com |
| `text` | 2/2 (100%) | Jefferson County Conservation – The Jefferson County Conservation Board manages ... |
| `type` | 2/2 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/sep09/matkin-bridge.htm`

- **Vector count**: 2
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-7`, `jctc-aHR0cDovL3d3dy5qZWZm-6`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | conservation |
| `filename` | 2/2 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/sep09/mat... |
| `org` | 2/2 (100%) | Jefferson County Trails Council |
| `source` | 2/2 (100%) | http://www.jeffersoncountytrails.org/sep09/matkin-bridge.htm |
| `text` | 2/2 (100%) | The bridge finish is a natural rust, which protects the steel. No maintenance is... |
| `type` | 2/2 (100%) | community_org |

### `https://www.jeffersoncountylittleleague.com/registration`

- **Vector count**: 2
- **Sample IDs**: `jcll-aHR0cHM6Ly93d3cuamVm-0`, `jcll-aHR0cHM6Ly93d3cuamVm-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | youth-sports |
| `filename` | 2/2 (100%) | Jefferson County Little League — https://www.jeffersoncountylittleleague.com/reg... |
| `org` | 2/2 (100%) | Jefferson County Little League |
| `source` | 2/2 (100%) | https://www.jeffersoncountylittleleague.com/registration |
| `text` | 2/2 (100%) | Home League Information Coaching Resources Store Login Home League Information C... |
| `type` | 2/2 (100%) | community_org |

### `https://www.maharishischool.org`

- **Vector count**: 2
- **Sample IDs**: `maharishi-school-aHR0cHM6Ly93d3cubWFo-2`, `maharishi-school-aHR0cHM6Ly93d3cubWFo-3`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | education |
| `filename` | 2/2 (100%) | Maharishi School — https://www.maharishischool.org |
| `org` | 2/2 (100%) | Maharishi School |
| `source` | 2/2 (100%) | https://www.maharishischool.org |
| `text` | 2/2 (100%) | Director of Preschool & Lower School lshirai@maharishischool.org Discover the tr... |
| `type` | 2/2 (100%) | community_org |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=111`

- **Vector count**: 2
- **Sample IDs**: `minutes-111.pdf-chunk-0`, `minutes-111.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-111.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=111 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL SPECIAL MEETING  August 6, 2012         ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=165`

- **Vector count**: 2
- **Sample IDs**: `minutes-165.pdf-chunk-0`, `minutes-165.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-165.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=165 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL SPECIAL MEETING    October 1, 2013      ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=149`

- **Vector count**: 2
- **Sample IDs**: `minutes-149.pdf-chunk-0`, `minutes-149.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-149.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=149 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    June 18, 2013      The Fairfiel... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=225`

- **Vector count**: 2
- **Sample IDs**: `minutes-225.pdf-chunk-1`, `minutes-225.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-225.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=225 |
| `text` | 2/2 (100%) | i, Ledger-Kalen, Rasmussen      TO ACCEPT THE RESIGNATION OF KEVIN    FLANAGAN A... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=193`

- **Vector count**: 2
- **Sample IDs**: `minutes-193.pdf-chunk-1`, `minutes-193.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-193.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=193 |
| `text` | 2/2 (100%) | MEETINGS.    Moved by Revolinski, seconded by Flournoy   AYES:  Revolinski, Flou... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=195`

- **Vector count**: 2
- **Sample IDs**: `minutes-195.pdf-chunk-1`, `minutes-195.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-195.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=195 |
| `text` | 2/2 (100%) | EFFORT.    Moved by Hamilton, seconded by Rasmussen   AYES:  Hamilton, Rasmussen... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=242`

- **Vector count**: 2
- **Sample IDs**: `minutes-242.pdf-chunk-0`, `minutes-242.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-242.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=242 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    September 29, 2014    The Fairf... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=240`

- **Vector count**: 2
- **Sample IDs**: `minutes-240.pdf-chunk-1`, `minutes-240.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-240.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=240 |
| `text` | 2/2 (100%) | by Hammes, seconded by Halley   AYES:  Hammes, Halley, Flournoy, Revolinski, Ras... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=251`

- **Vector count**: 2
- **Sample IDs**: `minutes-251.pdf-chunk-0`, `minutes-251.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-251.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=251 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    Monday, January 19, 2015       ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=247`

- **Vector count**: 2
- **Sample IDs**: `minutes-247.pdf-chunk-0`, `minutes-247.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-247.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=247 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL COUNCIL MEETING    November 13, 2014      The Fairfield... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=234`

- **Vector count**: 2
- **Sample IDs**: `minutes-234.pdf-chunk-0`, `minutes-234.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-234.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=234 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL    June 30, 2014        The Fairfield Ci... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=271`

- **Vector count**: 2
- **Sample IDs**: `minutes-271.pdf-chunk-1`, `minutes-271.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-271.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=271 |
| `text` | 2/2 (100%) | ley   NAY: Hamilton & Ledger-Kalen      TO AUTHORIZE FOUR ADDITIONAL RETRACTABLE... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=304`

- **Vector count**: 2
- **Sample IDs**: `minutes-304.pdf-chunk-0`, `minutes-304.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-304.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=304 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD SPECIAL COUNCIL MEETING    December 1, 2015        Th... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=294`

- **Vector count**: 2
- **Sample IDs**: `minutes-294.pdf-chunk-0`, `minutes-294.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-294.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=294 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL SPECIAL MEETING    September 21, 2015   ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=320`

- **Vector count**: 2
- **Sample IDs**: `minutes-320.pdf-chunk-0`, `minutes-320.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-320.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=320 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  May 4, 2016    The Fairfield City Counc... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=317`

- **Vector count**: 2
- **Sample IDs**: `minutes-317.pdf-chunk-1`, `minutes-317.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-317.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=317 |
| `text` | 2/2 (100%) | PATION PROJECT NOTE,    SERIES 2016.    Moved by Thompson, seconded by Hamilton ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=330`

- **Vector count**: 2
- **Sample IDs**: `minutes-330.pdf-chunk-0`, `minutes-330.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-330.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=330 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    September 2, 2016          The ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=368`

- **Vector count**: 2
- **Sample IDs**: `minutes-368.pdf-chunk-0`, `minutes-368.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-368.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=368 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    September 19, 2017            T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=384`

- **Vector count**: 2
- **Sample IDs**: `minutes-384.pdf-chunk-1`, `minutes-384.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-384.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=384 |
| `text` | 2/2 (100%) | smussen, Anderson, Thompson and Revolinski      TO ENTER BACK INTO OPEN SESSION ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=367`

- **Vector count**: 2
- **Sample IDs**: `minutes-367.pdf-chunk-1`, `minutes-367.pdf-chunk-0`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-367.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=367 |
| `text` | 2/2 (100%) | ubmitted by:        Rebekah Loper  |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=385`

- **Vector count**: 2
- **Sample IDs**: `minutes-385.pdf-chunk-0`, `minutes-385.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-385.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=385 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL CITY COUNCIL MEETING    October 18, 2017      The Fairf... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=718`

- **Vector count**: 2
- **Sample IDs**: `minutes-718.pdf-chunk-0`, `minutes-718.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-718.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=718 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING    APRIL 12, 2024      ... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=764`

- **Vector count**: 2
- **Sample IDs**: `minutes-764.pdf-chunk-0`, `minutes-764.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-764.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=764 |
| `text` | 2/2 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING  SEPTEMBER 3, 2025    T... |

### `https://cityoffairfieldiowa.com/Archive.aspx?ADID=80`

- **Vector count**: 2
- **Sample IDs**: `minutes-80.pdf-chunk-0`, `minutes-80.pdf-chunk-1`
- **ID patterns**: `filename.pdf-chunk-N` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `filename` | 2/2 (100%) | minutes-80.pdf |
| `source` | 2/2 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=80 |
| `text` | 2/2 (100%) |   MINUTES OF THE SPECIAL COUNCIL MEETING    Tuesday, December 27, 2011        Th... |

### `https://www.miu.edu/ma-in-consciousness-and-human-potential`

- **Vector count**: 2
- **Sample IDs**: `miu-aHR0cHM6Ly93d3cubWl1-8`, `miu-aHR0cHM6Ly93d3cubWl1-7`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | education |
| `filename` | 2/2 (100%) | Maharishi International University — https://www.miu.edu/ma-in-consciousness-and... |
| `org` | 2/2 (100%) | Maharishi International University |
| `source` | 2/2 (100%) | https://www.miu.edu/ma-in-consciousness-and-human-potential |
| `text` | 2/2 (100%) | Part-time on-campus students will spend 10-12 hours per week. How long will it t... |
| `type` | 2/2 (100%) | community_org |

### `https://pathfindersrcd.org/producer-inventory-map`

- **Vector count**: 2
- **Sample IDs**: `pathfinders-rcd-guide-aHR0cHM6Ly9wYXRoZmlu-3`, `pathfinders-rcd-guide-aHR0cHM6Ly9wYXRoZmlu-2`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | civic |
| `filename` | 2/2 (100%) | Pathfinders RC&D Community Resource Guide — https://pathfindersrcd.org/producer-... |
| `org` | 2/2 (100%) | Pathfinders RC&D Community Resource Guide |
| `source` | 2/2 (100%) | https://pathfindersrcd.org/producer-inventory-map |
| `text` | 2/2 (100%) | The compilation of this inventory was paid for by a Conservation Innovation Gran... |
| `type` | 2/2 (100%) | community_org |

### `https://www.youtube.com/watch?v=48yUfl9u0N8`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-48yUfl9u0N8-1`, `traction-thursdays-48yUfl9u0N8-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Jeff Geert 8-22-24 |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=48yUfl9u0N8 |
| `text` | 2/2 (100%) | half to $4 million project actually only ended up spending about three and a hal... |
| `title` | 2/2 (100%) | Traction Thursday \| Jeff Geert 8-22-24 |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=7bt63528Qe4`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-7bt63528Qe4-0`, `traction-thursdays-7bt63528Qe4-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Bill Hickey |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=7bt63528Qe4 |
| `text` | 2/2 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Bi... |
| `title` | 2/2 (100%) | Traction Thursday \| Bill Hickey |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9kOuvq46Boo`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-9kOuvq46Boo-0`, `traction-thursdays-9kOuvq46Boo-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Corey Morrow "Fairsight Societ... |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=9kOuvq46Boo |
| `text` | 2/2 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Co... |
| `title` | 2/2 (100%) | Traction Thursday \| Corey Morrow "Fairsight Society" |
| `type` | 2/2 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=NFOPEgNTQRk`

- **Vector count**: 2
- **Sample IDs**: `traction-thursdays-NFOPEgNTQRk-0`, `traction-thursdays-NFOPEgNTQRk-1`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \|  Kelly Prickett & Kaitlin Bye... |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=NFOPEgNTQRk |
| `text` | 2/2 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \|  ... |
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
- **Sample IDs**: `traction-thursdays-Z52l6XKPfQI-1`, `traction-thursdays-Z52l6XKPfQI-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursday \| Ken Roseboro "The Organic & No... |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=Z52l6XKPfQI |
| `text` | 2/2 (100%) | 25% or something like that they can't guarantee it's going to be completely zero... |
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
- **Sample IDs**: `traction-thursdays-lzpRkm4ZhtI-1`, `traction-thursdays-lzpRkm4ZhtI-0`
- **ID patterns**: `other` (2)
- **Vectors profiled for metadata**: 2

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 2/2 (100%) | economic |
| `filename` | 2/2 (100%) | Traction Thursday — unknown — Traction Thursdays \| Kevin Riley "CoLab" 3-7-24 |
| `org` | 2/2 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 2/2 (100%) | traction-thursdays |
| `publishedAt` | 2/2 (100%) |  |
| `source` | 2/2 (100%) | https://www.youtube.com/watch?v=lzpRkm4ZhtI |
| `text` | 2/2 (100%) | org that's all take a look at the paper I think you'll be surprised I wonderful ... |
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
| `filename` | 1/1 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/single-post/fal... |
| `org` | 1/1 (100%) | Area 15 Regional Planning Commission |
| `source` | 1/1 (100%) | https://www.area15rpc.com/single-post/fall-2025-regional-planning-news-thriving-... |
| `text` | 1/1 (100%) | Your membership makes a real difference. It allows our staff to be available whe... |
| `type` | 1/1 (100%) | community_org |

### `https://www.area15rpc.com/blog`

- **Vector count**: 1
- **Sample IDs**: `area15-rpc-aHR0cHM6Ly93d3cuYXJl-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | regional_planning |
| `filename` | 1/1 (100%) | Area 15 Regional Planning Commission — https://www.area15rpc.com/blog |
| `org` | 1/1 (100%) | Area 15 Regional Planning Commission |
| `source` | 1/1 (100%) | https://www.area15rpc.com/blog |
| `text` | 1/1 (100%) | New Grants, New Rules, and Big Wins for Area 15 Communities Big opportunities ar... |
| `type` | 1/1 (100%) | community_org |

### `https://www.carryonbags.org/sign-up-sheet`

- **Vector count**: 1
- **Sample IDs**: `carry-on-bags-aHR0cHM6Ly93d3cuY2Fy-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | human-services |
| `filename` | 1/1 (100%) | Carry On Bags — https://www.carryonbags.org/sign-up-sheet |
| `org` | 1/1 (100%) | Carry On Bags |
| `source` | 1/1 (100%) | https://www.carryonbags.org/sign-up-sheet |
| `text` | 1/1 (100%) | Click on the PDF Document icon above and print out the form. Please fill in all ... |
| `type` | 1/1 (100%) | community_org |

### `http://www.fairfieldiowa.com/join`

- **Vector count**: 1
- **Sample IDs**: `fairfield-chamber-aHR0cDovL3d3dy5mYWly-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | business |
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
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 9-10-12 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=-v9R9pl6Mbo |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 9-10... |
| `title` | 1/1 (100%) | Fairfield City Council 9-10-12 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.fairfieldatlanticlittleleague.org`

- **Vector count**: 1
- **Sample IDs**: `fall-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | youth-sports |
| `filename` | 1/1 (100%) | Fairfield Atlantic Little League — https://www.fairfieldatlanticlittleleague.org |
| `org` | 1/1 (100%) | Fairfield Atlantic Little League |
| `source` | 1/1 (100%) | https://www.fairfieldatlanticlittleleague.org |
| `text` | 1/1 (100%) | Home About Us Locations Our Staff Registration Info Available Programs Scorekeep... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=-mauGgrzWCY`

- **Vector count**: 1
- **Sample IDs**: `fc-council--mauGgrzWCY-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 11-8-21 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=-mauGgrzWCY |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-8-21  i'm g... |
| `title` | 1/1 (100%) | City Council 11-8-21 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=4P0PLmBLWT0`

- **Vector count**: 1
- **Sample IDs**: `fc-council-4P0PLmBLWT0-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 2-11-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=4P0PLmBLWT0 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-11-19  good ... |
| `title` | 1/1 (100%) | City Council 2-11-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=5NCxK-eaxqU`

- **Vector count**: 1
- **Sample IDs**: `fc-council-5NCxK-eaxqU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 10-8-12 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=5NCxK-eaxqU |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-8-12  third... |
| `title` | 1/1 (100%) | City Council 10-8-12 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=5yWjY_lHXmU`

- **Vector count**: 1
- **Sample IDs**: `fc-council-5yWjY_lHXmU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 1-14-13 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=5yWjY_lHXmU |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 1-14... |
| `title` | 1/1 (100%) | Fairfield City Council 1-14-13 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=63DXQ6FMd94`

- **Vector count**: 1
- **Sample IDs**: `fc-council-63DXQ6FMd94-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 10-13-14 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=63DXQ6FMd94 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 10-13-14  good... |
| `title` | 1/1 (100%) | City Council 10-13-14 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=6JuNsrZ8Qug`

- **Vector count**: 1
- **Sample IDs**: `fc-council-6JuNsrZ8Qug-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield Town Hall \| Building & Zoning Permits \| ... |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=6JuNsrZ8Qug |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield Town Hall \| Build... |
| `title` | 1/1 (100%) | Fairfield Town Hall \| Building & Zoning Permits \| 3-28-22 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=6GILQZDdrSo`

- **Vector count**: 1
- **Sample IDs**: `fc-council-6GILQZDdrSo-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 7-9-18 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=6GILQZDdrSo |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 7-9-18  good e... |
| `title` | 1/1 (100%) | City Council 7-9-18 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BdZicyyIOiM`

- **Vector count**: 1
- **Sample IDs**: `fc-council-BdZicyyIOiM-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 5-14-18 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=BdZicyyIOiM |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 5-14-18  good ... |
| `title` | 1/1 (100%) | City Council 5-14-18 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BBFpEs_eCZw`

- **Vector count**: 1
- **Sample IDs**: `fc-council-BBFpEs_eCZw-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 5-26-20 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=BBFpEs_eCZw |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 5-26-20  candy... |
| `title` | 1/1 (100%) | City Council 5-26-20 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BCEEocjXQkA`

- **Vector count**: 1
- **Sample IDs**: `fc-council-BCEEocjXQkA-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 4-13-20 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=BCEEocjXQkA |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 4-13-20  I'm e... |
| `title` | 1/1 (100%) | City Council 4-13-20 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=ATJD8rPxgG8`

- **Vector count**: 1
- **Sample IDs**: `fc-council-ATJD8rPxgG8-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 2-12-24 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=ATJD8rPxgG8 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 2-12-24  I'm g... |
| `title` | 1/1 (100%) | City Council 2-12-24 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=BTTOcJJz_dw`

- **Vector count**: 1
- **Sample IDs**: `fc-council-BTTOcJJz_dw-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
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
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 7-13-15 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=GKkxUiqmr9U |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 7-13-15  she g... |
| `title` | 1/1 (100%) | City Council 7-13-15 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=NMNQbINXW-A`

- **Vector count**: 1
- **Sample IDs**: `fc-council-NMNQbINXW-A-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
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
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 11-23-20 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=N48XR0ifuow |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-23-20  okay... |
| `title` | 1/1 (100%) | City Council 11-23-20 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=LU_YR0bL-wc`

- **Vector count**: 1
- **Sample IDs**: `fc-council-LU_YR0bL-wc-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 5-12-14 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=LU_YR0bL-wc |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 5-12... |
| `title` | 1/1 (100%) | Fairfield City Council 5-12-14 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=PcVTiAtSfn8`

- **Vector count**: 1
- **Sample IDs**: `fc-council-PcVTiAtSfn8-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — Fairfield City Council 6-30-14 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=PcVTiAtSfn8 |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Fairfield City Council 6-30... |
| `title` | 1/1 (100%) | Fairfield City Council 6-30-14 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OYVj52O58Ls`

- **Vector count**: 1
- **Sample IDs**: `fc-council-OYVj52O58Ls-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — Special Council Meeting 2-10-20 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=OYVj52O58Ls |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: Special Council Meeting 2-1... |
| `title` | 1/1 (100%) | Special Council Meeting 2-10-20 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=OyRBwpqV8rc`

- **Vector count**: 1
- **Sample IDs**: `fc-council-OyRBwpqV8rc-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — 5-26-15 City Council Meeting |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=OyRBwpqV8rc |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: 5-26-15 City Council Meetin... |
| `title` | 1/1 (100%) | 5-26-15 City Council Meeting |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=SumcTMqdngU`

- **Vector count**: 1
- **Sample IDs**: `fc-council-SumcTMqdngU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
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
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 11-25-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=evfonuhfXVQ |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 11-25-19  yes ... |
| `title` | 1/1 (100%) | City Council 11-25-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=duYxwx0OVVI`

- **Vector count**: 1
- **Sample IDs**: `fc-council-duYxwx0OVVI-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 3-11-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=duYxwx0OVVI |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 3-11-19  good ... |
| `title` | 1/1 (100%) | City Council 3-11-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=eh8UDJBqnAA`

- **Vector count**: 1
- **Sample IDs**: `fc-council-eh8UDJBqnAA-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
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
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council 8-26-19 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=dbsBlnH-qRU |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council 8-26-19  good ... |
| `title` | 1/1 (100%) | City Council 8-26-19 |
| `type` | 1/1 (100%) | council_meeting |

### `https://www.youtube.com/watch?v=g_GggZUEewg`

- **Vector count**: 1
- **Sample IDs**: `fc-council-g_GggZUEewg-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
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
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council Work Session 11.25.24 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=uy-M5iP2TOc |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council Work Session 1... |
| `title` | 1/1 (100%) | City Council Work Session 11.25.24 |
| `type` | 1/1 (100%) | council_meeting |

### `http://www.fairfieldculturaldistrict.org/2017gala/2017gala.htm`

- **Vector count**: 1
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-3`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
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
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/heritage/new-sweden.htm |
| `text` | 1/1 (100%) | A Swedish Baptist congregation was formed in 1854, but did not remain active ver... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldsfuture.org/page/elementary-parent-group`

- **Vector count**: 1
- **Sample IDs**: `fcsd-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
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
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/heritage/sitelist.htm |
| `text` | 1/1 (100%) | (54) New Sweden, Iowa , history of the settlement (Jefferson County, north of Lo... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=y987gAC7FSQ`

- **Vector count**: 1
- **Sample IDs**: `fc-council-y987gAC7FSQ-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | City Council Meeting — null — City Council \| Special Meeting 3-25-24 |
| `org` | 1/1 (100%) | Fairfield City Council |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=y987gAC7FSQ |
| `text` | 1/1 (100%) | Fairfield City Council Meeting — date unknown Title: City Council \| Special Meet... |
| `title` | 1/1 (100%) | City Council \| Special Meeting 3-25-24 |
| `type` | 1/1 (100%) | council_meeting |

### `http://www.fairfieldculturaldistrict.org/heritage/ps-elks.htm`

- **Vector count**: 1
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/heritage/... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/heritage/ps-elks.htm |
| `text` | 1/1 (100%) | Elks Lodge Ventilator-Fairfield Heritage Tour The Elks Lodge on the West Side of... |
| `type` | 1/1 (100%) | community_org |

### `http://www.fairfieldculturaldistrict.org/photos.htm`

- **Vector count**: 1
- **Sample IDs**: `fca-aHR0cDovL3d3dy5mYWly-4`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | Fairfield Cultural Alliance — http://www.fairfieldculturaldistrict.org/photos.ht... |
| `org` | 1/1 (100%) | Fairfield Cultural Alliance |
| `source` | 1/1 (100%) | http://www.fairfieldculturaldistrict.org/photos.htm |
| `text` | 1/1 (100%) | Note the pestle-and-morter on the top of the drugstore, built in 1851 (no longer... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldmediacenter.com/copy-of-buddha-at-the-gas-pump`

- **Vector count**: 1
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
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
| `filename` | 1/1 (100%) | Fairfield National Little League — https://www.fnll.org/news |
| `org` | 1/1 (100%) | Fairfield National Little League |
| `source` | 1/1 (100%) | https://www.fnll.org/news |
| `text` | 1/1 (100%) | Home About Us Contact Info League Bylaws Fields Registration Info Available Prog... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fnll.org`

- **Vector count**: 1
- **Sample IDs**: `fnll-aHR0cHM6Ly93d3cuZm5s-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | youth-sports |
| `filename` | 1/1 (100%) | Fairfield National Little League — https://www.fnll.org |
| `org` | 1/1 (100%) | Fairfield National Little League |
| `source` | 1/1 (100%) | https://www.fnll.org |
| `text` | 1/1 (100%) | Fairfield has two Little Leagues, National and American. The National League bou... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldmethodistchurch.org/users/steve-swanson`

- **Vector count**: 1
- **Sample IDs**: `fumc-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | faith-community |
| `filename` | 1/1 (100%) | First United Methodist Church Fairfield — https://www.fairfieldmethodistchurch.o... |
| `org` | 1/1 (100%) | First United Methodist Church Fairfield |
| `source` | 1/1 (100%) | https://www.fairfieldmethodistchurch.org/users/steve-swanson |
| `text` | 1/1 (100%) | Subscribe to receive email updates with the latest news. 2026 First United Metho... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldmediacenter.com/copy-of-great-taste`

- **Vector count**: 1
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `filename` | 1/1 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/copy-of-great-tast... |
| `org` | 1/1 (100%) | Fairfield Media Center |
| `source` | 1/1 (100%) | https://www.fairfieldmediacenter.com/copy-of-great-taste |
| `text` | 1/1 (100%) | One of the Midwest's major landscape painters, John Preston continues to find ne... |
| `type` | 1/1 (100%) | community_org |

### `https://www.greaterjeffersoncountyfoundation.org/what-we-do`

- **Vector count**: 1
- **Sample IDs**: `gjcf-aHR0cHM6Ly93d3cuZ3Jl-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
| `filename` | 1/1 (100%) | Greater Jefferson County Foundation — https://www.greaterjeffersoncountyfoundati... |
| `org` | 1/1 (100%) | Greater Jefferson County Foundation |
| `source` | 1/1 (100%) | https://www.greaterjeffersoncountyfoundation.org/what-we-do |
| `text` | 1/1 (100%) | What We Do - Greater Jefferson County Foundation What We Do Home What We Do For ... |
| `type` | 1/1 (100%) | community_org |

### `https://fairfieldfirstfridays.org/about-us`

- **Vector count**: 1
- **Sample IDs**: `fff-aHR0cHM6Ly9mYWlyZmll-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | Fairfield First Fridays Art Walk — https://fairfieldfirstfridays.org/about-us |
| `org` | 1/1 (100%) | Fairfield First Fridays Art Walk |
| `source` | 1/1 (100%) | https://fairfieldfirstfridays.org/about-us |
| `text` | 1/1 (100%) | The event was such a success that Hurlin and the Fairfield Arts Community were i... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldmediacenter.com/jeffersoncountysupervisors`

- **Vector count**: 1
- **Sample IDs**: `fmc-aHR0cHM6Ly93d3cuZmFp-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `filename` | 1/1 (100%) | Fairfield Media Center — https://www.fairfieldmediacenter.com/jeffersoncountysup... |
| `org` | 1/1 (100%) | Fairfield Media Center |
| `source` | 1/1 (100%) | https://www.fairfieldmediacenter.com/jeffersoncountysupervisors |
| `text` | 1/1 (100%) | The Board of Supervisors scheduled meeting time is 8:30 a.m. on most Mondays. Th... |
| `type` | 1/1 (100%) | community_org |

### `https://www.fairfieldfriendschurch.org/connect`

- **Vector count**: 1
- **Sample IDs**: `ffc-aHR0cHM6Ly93d3cuZmFp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | faith-community |
| `filename` | 1/1 (100%) | Fairfield Friends Church — https://www.fairfieldfriendschurch.org/connect |
| `org` | 1/1 (100%) | Fairfield Friends Church |
| `source` | 1/1 (100%) | https://www.fairfieldfriendschurch.org/connect |
| `text` | 1/1 (100%) | 1209 South 6th St Fairfield, IA 52556 Email: fairfield.ia.friends@gmail.com Phon... |
| `type` | 1/1 (100%) | community_org |

### `https://fairfieldfirstfridays.org/blog/f.rss`

- **Vector count**: 1
- **Sample IDs**: `fff-aHR0cHM6Ly9mYWlyZmll-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | Fairfield First Fridays Art Walk — https://fairfieldfirstfridays.org/blog/f.rss |
| `org` | 1/1 (100%) | Fairfield First Fridays Art Walk |
| `source` | 1/1 (100%) | https://fairfieldfirstfridays.org/blog/f.rss |
| `text` | 1/1 (100%) | Fairfield First Fridays Art Walk https://fairfieldfirstfridays.org Fairfield Fir... |
| `type` | 1/1 (100%) | community_org |

### `https://fairfieldeducationfoundation.com/contact`

- **Vector count**: 1
- **Sample IDs**: `fef-aHR0cHM6Ly9mYWlyZmll-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `filename` | 1/1 (100%) | Fairfield Education Foundation — https://fairfieldeducationfoundation.com/contac... |
| `org` | 1/1 (100%) | Fairfield Education Foundation |
| `source` | 1/1 (100%) | https://fairfieldeducationfoundation.com/contact |
| `text` | 1/1 (100%) | Please enable JavaScript in your browser to complete this form. 403 South 20th S... |
| `type` | 1/1 (100%) | community_org |

### `https://freeformartgallery.com/product-category/jewelry`

- **Vector count**: 1
- **Sample IDs**: `freeform-gallery-aHR0cHM6Ly9mcmVlZm9y-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts-culture |
| `filename` | 1/1 (100%) | Freeform Art Gallery — https://freeformartgallery.com/product-category/jewelry |
| `org` | 1/1 (100%) | Freeform Art Gallery |
| `source` | 1/1 (100%) | https://freeformartgallery.com/product-category/jewelry |
| `text` | 1/1 (100%) | Default sorting Sort by popularity Sort by average rating Sort by latest Sort by... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_eindhoven_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-6d6a1db2a69158af6587fedf-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_eindhoven... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_eindhoven_accelerated |
| `text` | 1/1 (100%) | How did a city rebuild after its biggest employer moved out? How did a city rebu... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/audio_and_video_content`

- **Vector count**: 1
- **Sample IDs**: `icf-7274ed322124a821bc35eed6-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/audio_and_vid... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/audio_and_video_content |
| `text` | 1/1 (100%) | Audio and Video Content - Intelligent Community Forum No Place BUT Home How Comm... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/sustainability`

- **Vector count**: 1
- **Sample IDs**: `icf-62bc8b844436798a61fce581-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/sustainabilit... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/sustainability |
| `text` | 1/1 (100%) | Making local changes to preserve what we cherish most Making local changes to pr... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_chattanooga_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-1216a6d42f589f680e5b7e5a-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_chattanoo... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_chattanooga_accelerated |
| `text` | 1/1 (100%) | Chattanooga - Intelligent Community Forum How did a polluted city become a hot t... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/content`

- **Vector count**: 1
- **Sample IDs**: `icf-5eb24cf0598eda81a5571dee-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/content |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/content |
| `text` | 1/1 (100%) | Learn more about becoming an Intelligent Community Learn more about becoming an ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/the_network`

- **Vector count**: 1
- **Sample IDs**: `icf-38156e367805900112bd01ed-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/the_network |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/the_network |
| `text` | 1/1 (100%) | Engage with other Intelligent Communities around the world Engage with other Int... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/connect_with_communities`

- **Vector count**: 1
- **Sample IDs**: `icf-7c5fe17ea041ff73d5c648f7-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/connect_with_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/connect_with_communities |
| `text` | 1/1 (100%) | Local governments, not-for-profits and for-profit businesses join ICF to gain be... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/participate`

- **Vector count**: 1
- **Sample IDs**: `icf-03e0aa6b26066e3d100478db-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/participate |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/participate |
| `text` | 1/1 (100%) | Participate - Intelligent Community Forum We invite you to engage with ICF as a ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/events`

- **Vector count**: 1
- **Sample IDs**: `icf-5a4428c7af06515721fa67a3-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/events |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/events |
| `text` | 1/1 (100%) | ICF 2026 VIP Delegation to Taiwan Smart City Summit & Expo ICF 2026 Smart21 Anno... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/accelerator`

- **Vector count**: 1
- **Sample IDs**: `icf-56e3426fd83bbcfea160af3c-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/accelerator |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/accelerator |
| `text` | 1/1 (100%) | Community Accelerator - Intelligent Community Forum Learn How to Build an Intell... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/tags/video`

- **Vector count**: 1
- **Sample IDs**: `icf-180963ca36c5807ea7abefad-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/tags/video |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/tags/video |
| `text` | 1/1 (100%) | What does the Intelligent Community Forum do? Posted on News & Media by Robert B... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_fredericton_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-0c995efb0154797f08991362-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_frederict... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_fredericton_accelerated |
| `text` | 1/1 (100%) | Fredericton - Intelligent Community Forum How did a declining city create a boom... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/assess`

- **Vector count**: 1
- **Sample IDs**: `icf-51e2a5dff1b29c5f11c36063-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/assess |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/assess |
| `text` | 1/1 (100%) | You can find consultants to measure how Smart your city or county is and tell yo... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/benefit_from_network`

- **Vector count**: 1
- **Sample IDs**: `icf-b43a3002a533529558d54c42-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/benefit_from_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/benefit_from_network |
| `text` | 1/1 (100%) | How to Benefit from the Network - Intelligent Community Forum What do ICF member... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/broadband`

- **Vector count**: 1
- **Sample IDs**: `icf-8c3e5fa2d769d055f5e7ccf5-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/broadband |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/broadband |
| `text` | 1/1 (100%) | Broadband connectivity is critical for economic growth Broadband connectivity is... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/our_mission`

- **Vector count**: 1
- **Sample IDs**: `icf-8168ff237c14a493a4cba87e-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/our_mission |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/our_mission |
| `text` | 1/1 (100%) | Starting in 2000 with a research project comparing cities in various nations, IC... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/certification`

- **Vector count**: 1
- **Sample IDs**: `icf-68b276e6d7b60e32dae37aea-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/certification |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/certification |
| `text` | 1/1 (100%) | Certification - Intelligent Community Forum Join ICF's Growing List of Certified... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/knowledge_workforce`

- **Vector count**: 1
- **Sample IDs**: `icf-7395a6998b97a44564e4e73e-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/knowledge_wor... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/knowledge_workforce |
| `text` | 1/1 (100%) | A knowledge-based economy needs a digitally savvy workforce A knowledge-based ec... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/reports`

- **Vector count**: 1
- **Sample IDs**: `icf-2a460a1431912711aaa754a7-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/reports |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/reports |
| `text` | 1/1 (100%) | Community Accelerator Reports Starting with a research project comparing cities ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/contact_us`

- **Vector count**: 1
- **Sample IDs**: `icf-0011a2ffe459d013d39727a6-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/contact_us |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/contact_us |
| `text` | 1/1 (100%) | Intelligent Community Forum 250 Park Avenue, 7th Floor, New York, NY 10177 USA +... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_columbus_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-62b24a5b392e9df1c9fb3d56-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_columbus_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_columbus_accelerated |
| `text` | 1/1 (100%) | How did an old Rust Belt city spark new economic growth? How did an old Rust Bel... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/start_nomination`

- **Vector count**: 1
- **Sample IDs**: `icf-24ae52a568008b38647cce1e-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/start_nominat... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/start_nomination |
| `text` | 1/1 (100%) | Start Your Nomination - Intelligent Community Forum Learn How to Build an Intell... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/members`

- **Vector count**: 1
- **Sample IDs**: `icf-b887093203b6777445e0d0bc-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/members |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/members |
| `text` | 1/1 (100%) | BABLE Smart Cities accelerates cities, towns, regions, and businesses with data-... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_institutes`

- **Vector count**: 1
- **Sample IDs**: `icf-7ff2f10dd4b121df8529f059-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_institute... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/icf_institutes |
| `text` | 1/1 (100%) | Intelligent Community Institutes - Intelligent Community Forum An Intelligent Co... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/webinar_events`

- **Vector count**: 1
- **Sample IDs**: `icf-5744a3381df74ca448e72afc-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
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
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/connect |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/connect |
| `text` | 1/1 (100%) | Local governments, not-for-profits and for-profit businesses join ICF to gain be... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/use_cases`

- **Vector count**: 1
- **Sample IDs**: `icf-6005d76c2498c7a01ddfac09-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/use_cases |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/use_cases |
| `text` | 1/1 (100%) | Intelligent Community Use Cases - Intelligent Community Forum ICF’s Community Ac... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/top7_announcements`

- **Vector count**: 1
- **Sample IDs**: `icf-a1550c9414e20e2bd58392d3-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/top7_announce... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/top7_announcements |
| `text` | 1/1 (100%) | Top7 Announcements - Intelligent Community Forum Each year, after the Smart21 Co... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/smart21_announcements`

- **Vector count**: 1
- **Sample IDs**: `icf-d36b63c0fc5f09c4d7f67518-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/smart21_annou... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/smart21_announcements |
| `text` | 1/1 (100%) | Smart21 Announcements - Intelligent Community Forum Each year, the Intelligent C... |
| `type` | 1/1 (100%) | community_org |

### `https://www.icon-art.org/arc-specialevents`

- **Vector count**: 1
- **Sample IDs**: `icon-aHR0cHM6Ly93d3cuaWNv-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/arc-specialevents |
| `org` | 1/1 (100%) | ICON — Iowa Contemporary Art |
| `source` | 1/1 (100%) | https://www.icon-art.org/arc-specialevents |
| `text` | 1/1 (100%) | Grand Opening of New Gallery on the Square April 6, 2007 After six months of ren... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/intelligent_community_network`

- **Vector count**: 1
- **Sample IDs**: `icf-f8a0f1d8b4a3068a0c9ddf12-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/intelligent_c... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/intelligent_community_network |
| `text` | 1/1 (100%) | Intelligent Community Network - Intelligent Community Forum The Intelligent Comm... |
| `type` | 1/1 (100%) | community_org |

### `https://www.extension.iastate.edu/jefferson/powerful-tools-caregivers-series-begins-february-10`

- **Vector count**: 1
- **Sample IDs**: `isu-extension-aHR0cHM6Ly93d3cuZXh0-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `filename` | 1/1 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/pow... |
| `org` | 1/1 (100%) | ISU Extension Jefferson County |
| `source` | 1/1 (100%) | https://www.extension.iastate.edu/jefferson/powerful-tools-caregivers-series-beg... |
| `text` | 1/1 (100%) | Powerful Tools for Caregivers Series Begins February 10 \| Iowa State University ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/who_we_are`

- **Vector count**: 1
- **Sample IDs**: `icf-c810bba160daafd0ceb1a9ab-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/who_we_are |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/who_we_are |
| `text` | 1/1 (100%) | For cities, counties and regions around the world, ICF charts new paths to econo... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/digital_equality`

- **Vector count**: 1
- **Sample IDs**: `icf-cdf2dabe56ebc1efea300e32-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/digital_equal... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/digital_equality |
| `text` | 1/1 (100%) | Communities thrive when more citizens can participate in the digital economy Com... |
| `type` | 1/1 (100%) | community_org |

### `https://www.extension.iastate.edu/jefferson/iowa-state-university-extension-and-outreach-host-2026-dairy-days-across-iowa`

- **Vector count**: 1
- **Sample IDs**: `isu-extension-aHR0cHM6Ly93d3cuZXh0-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `filename` | 1/1 (100%) | ISU Extension Jefferson County — https://www.extension.iastate.edu/jefferson/iow... |
| `org` | 1/1 (100%) | ISU Extension Jefferson County |
| `source` | 1/1 (100%) | https://www.extension.iastate.edu/jefferson/iowa-state-university-extension-and-... |
| `text` | 1/1 (100%) | Jan. 29: Jones Dairy — 2680 250th Avenue, Spencer (farm tour at 9 a.m.) Feb. 3: ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/improve`

- **Vector count**: 1
- **Sample IDs**: `icf-ee3ab2b1a89a05896a0bd98e-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/improve |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/improve |
| `text` | 1/1 (100%) | Improve Your Community - Intelligent Community Forum The American author Mark Tw... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/barns/findus.htm`

- **Vector count**: 1
- **Sample IDs**: `jc-gov-site-aHR0cHM6Ly9qZWZmZXJz-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | Jefferson County Iowa Government — https://jeffersoncounty.iowa.gov/barns/findus... |
| `org` | 1/1 (100%) | Jefferson County Iowa Government |
| `source` | 1/1 (100%) | https://jeffersoncounty.iowa.gov/barns/findus.htm |
| `text` | 1/1 (100%) | The Evergreen Ridge Stock Farm is located about 1-mile south of the Fairfield Sq... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_stratford_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-e823b4a4d5b7211872cab429-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_stratford... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_stratford_accelerated |
| `text` | 1/1 (100%) | How did a small city attract the data centers of big-city banks? How did a small... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_taichung_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-df6de79091d346226f327631-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_taichung_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_taichung_accelerated |
| `text` | 1/1 (100%) | How did a city help its small manufacturers win big contracts? How did a city he... |
| `type` | 1/1 (100%) | community_org |

### `https://www.iowasource.com/2012/12/05/fairfield2012_12_gisella`

- **Vector count**: 1
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-4`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | media |
| `filename` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2012/12/05/fairfield2012_12_gisella |
| `org` | 1/1 (100%) | Iowa Source |
| `source` | 1/1 (100%) | https://www.iowasource.com/2012/12/05/fairfield2012_12_gisella |
| `text` | 1/1 (100%) | Gisella made it safely to Fairfield, IA, after her NYC adventure. See Gisella’s ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.iowasource.com/2012/12/06/food2012_12_gisella`

- **Vector count**: 1
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-3`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | media |
| `filename` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2012/12/06/food2012_12_gisella |
| `org` | 1/1 (100%) | Iowa Source |
| `source` | 1/1 (100%) | https://www.iowasource.com/2012/12/06/food2012_12_gisella |
| `text` | 1/1 (100%) | The difference in traditional foods according to region and how those foods chan... |
| `type` | 1/1 (100%) | community_org |

### `https://www.iowasource.com/2017/11/15/fire-ritual-dance-siudy-flamenco-dance-theater-joins-the-des-moines-symphony`

- **Vector count**: 1
- **Sample IDs**: `iowa-source-aHR0cHM6Ly93d3cuaW93-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | media |
| `filename` | 1/1 (100%) | Iowa Source — https://www.iowasource.com/2017/11/15/fire-ritual-dance-siudy-flam... |
| `org` | 1/1 (100%) | Iowa Source |
| `source` | 1/1 (100%) | https://www.iowasource.com/2017/11/15/fire-ritual-dance-siudy-flamenco-dance-the... |
| `text` | 1/1 (100%) | Fire Ritual Dance: Siudy Flamenco Dance Theater Joins the Des Moines Symphony - ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_dundee_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-f0464bdac4d98387d706d83c-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_dundee_ac... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_dundee_accelerated |
| `text` | 1/1 (100%) | How did a dying city leap to leadership in video gaming? How did a dying city le... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/what_we_do`

- **Vector count**: 1
- **Sample IDs**: `icf-c9edd91c7498b34da100f965-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/what_we_do |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/what_we_do |
| `text` | 1/1 (100%) | ICF provides training, consulting, assessment, certification and award programs.... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/delegations`

- **Vector count**: 1
- **Sample IDs**: `icf-ea1b753d09f0d03902e7008d-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/delegations |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/delegations |
| `text` | 1/1 (100%) | VIP Delegations - Intelligent Community Forum ICF VIP Delegations are curated ec... |
| `type` | 1/1 (100%) | community_org |

### `https://www.icon-art.org/currentevents`

- **Vector count**: 1
- **Sample IDs**: `icon-aHR0cHM6Ly93d3cuaWNv-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | ICON — Iowa Contemporary Art — https://www.icon-art.org/currentevents |
| `org` | 1/1 (100%) | ICON — Iowa Contemporary Art |
| `source` | 1/1 (100%) | https://www.icon-art.org/currentevents |
| `text` | 1/1 (100%) | ONGOING SPECIAL EVENTS ONGOING ICON PROGRAMS ICON THURSDAYS Every Thursday ICON ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/icf_nations`

- **Vector count**: 1
- **Sample IDs**: `icf-fd492551e51f382b4328b7aa-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/icf_nations |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/icf_nations |
| `text` | 1/1 (100%) | ICF Nations - Intelligent Community Forum ICF charters nonprofit organizations t... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org`

- **Vector count**: 1
- **Sample IDs**: `icf-d79322de2217fe1988b2ad38-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org |
| `text` | 1/1 (100%) | The 2025 Intelligent Community of the Year Nominate Your Community for the ICF A... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/news`

- **Vector count**: 1
- **Sample IDs**: `icf-df0990768229dfc20a54b717-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/news |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/news |
| `text` | 1/1 (100%) | News & Media - Intelligent Community Forum Intelligent Community Forum and EXXAS... |
| `type` | 1/1 (100%) | community_org |

### `https://www.intelligentcommunity.org/how_sunshine_coast_accelerated`

- **Vector count**: 1
- **Sample IDs**: `icf-c4166c94a5ee7280562a59a5-0`
- **ID patterns**: `orgId-sha24-N` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic-knowledge |
| `filename` | 1/1 (100%) | Intelligent Community Forum — https://www.intelligentcommunity.org/how_sunshine_... |
| `org` | 1/1 (100%) | Intelligent Community Forum |
| `source` | 1/1 (100%) | https://www.intelligentcommunity.org/how_sunshine_coast_accelerated |
| `text` | 1/1 (100%) | Sunshine Coast - Intelligent Community Forum How did a sleepy tourist town devel... |
| `type` | 1/1 (100%) | community_org |

### `https://www.jeffersoncountyheritage.org/events`

- **Vector count**: 1
- **Sample IDs**: `jc-heritage-aHR0cHM6Ly93d3cuamVm-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | heritage |
| `filename` | 1/1 (100%) | Jefferson County Heritage Foundation — https://www.jeffersoncountyheritage.org/e... |
| `org` | 1/1 (100%) | Jefferson County Heritage Foundation |
| `source` | 1/1 (100%) | https://www.jeffersoncountyheritage.org/events |
| `text` | 1/1 (100%) | Events from September 22, 2023 – October 7, 2023 – Jefferson County Heritage Lea... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/road-equipment-operator`

- **Vector count**: 1
- **Sample IDs**: `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/road-equi... |
| `org` | 1/1 (100%) | Jefferson County Code of Ordinances |
| `source` | 1/1 (100%) | https://jeffersoncounty.iowa.gov/road-equipment-operator |
| `text` | 1/1 (100%) | Temporary Polling Location Change: Fairfield 2nd Ward will vote at the County En... |
| `type` | 1/1 (100%) | community_org |

### `https://www.jeffersoncountyheritage.org/maasdam-barns`

- **Vector count**: 1
- **Sample IDs**: `jc-heritage-aHR0cHM6Ly93d3cuamVm-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | heritage |
| `filename` | 1/1 (100%) | Jefferson County Heritage Foundation — https://www.jeffersoncountyheritage.org/m... |
| `org` | 1/1 (100%) | Jefferson County Heritage Foundation |
| `source` | 1/1 (100%) | https://www.jeffersoncountyheritage.org/maasdam-barns |
| `text` | 1/1 (100%) | As the Iowa DOT began planning the by-pass and purchases the Leathers farm in 20... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/2023-jefferson-county-sheriffs-office-end-of-year-report`

- **Vector count**: 1
- **Sample IDs**: `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/2023-jeff... |
| `org` | 1/1 (100%) | Jefferson County Code of Ordinances |
| `source` | 1/1 (100%) | https://jeffersoncounty.iowa.gov/2023-jefferson-county-sheriffs-office-end-of-ye... |
| `text` | 1/1 (100%) | 2023 Jefferson County Sheriff's Office End of Year Report - Jefferson County Iow... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncounty.iowa.gov/auditor/elections`

- **Vector count**: 1
- **Sample IDs**: `jc-ordinances-aHR0cHM6Ly9qZWZmZXJz-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | government |
| `filename` | 1/1 (100%) | Jefferson County Code of Ordinances — https://jeffersoncounty.iowa.gov/auditor/e... |
| `org` | 1/1 (100%) | Jefferson County Code of Ordinances |
| `source` | 1/1 (100%) | https://jeffersoncounty.iowa.gov/auditor/elections |
| `text` | 1/1 (100%) | Notice: County Courthouse Offices will be closed New Year's Day, Thursday, Janua... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncountyconservation.com/event/camouflage-camp`

- **Vector count**: 1
- **Sample IDs**: `jcc-aHR0cHM6Ly9qZWZmZXJz-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
| `filename` | 1/1 (100%) | Jefferson County Conservation — https://jeffersoncountyconservation.com/event/ca... |
| `org` | 1/1 (100%) | Jefferson County Conservation |
| `source` | 1/1 (100%) | https://jeffersoncountyconservation.com/event/camouflage-camp |
| `text` | 1/1 (100%) | Camouflage Camp – Jefferson County Conservation Many animals use camouflage to h... |
| `type` | 1/1 (100%) | community_org |

### `https://jeffersoncountyconservation.com/round-prairie-park-change-of-use-proposal`

- **Vector count**: 1
- **Sample IDs**: `jcc-aHR0cHM6Ly9qZWZmZXJz-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
| `filename` | 1/1 (100%) | Jefferson County Conservation — https://jeffersoncountyconservation.com/round-pr... |
| `org` | 1/1 (100%) | Jefferson County Conservation |
| `source` | 1/1 (100%) | https://jeffersoncountyconservation.com/round-prairie-park-change-of-use-proposa... |
| `text` | 1/1 (100%) | Jefferson County Conservation is located in southeast Iowa and currently manages... |
| `type` | 1/1 (100%) | community_org |

### `https://www.jeffersoncountyhealthcenter.org/patients/release-of-information-request-form`

- **Vector count**: 1
- **Sample IDs**: `jchc-aHR0cHM6Ly93d3cuamVm-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | health |
| `filename` | 1/1 (100%) | Jefferson County Health Center — https://www.jeffersoncountyhealthcenter.org/pat... |
| `org` | 1/1 (100%) | Jefferson County Health Center |
| `source` | 1/1 (100%) | https://www.jeffersoncountyhealthcenter.org/patients/release-of-information-requ... |
| `text` | 1/1 (100%) | Download the Release of Information Request Form Warning! Your browser is extrem... |
| `type` | 1/1 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/news/bridge.htm`

- **Vector count**: 1
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
| `filename` | 1/1 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/news/brid... |
| `org` | 1/1 (100%) | Jefferson County Trails Council |
| `source` | 1/1 (100%) | http://www.jeffersoncountytrails.org/news/bridge.htm |
| `text` | 1/1 (100%) | Walking-Trail Bridge-Fairfield Loop Trail A new wetlands was created just east o... |
| `type` | 1/1 (100%) | community_org |

### `http://www.jeffersoncountytrails.org/news/waltonbridge.htm`

- **Vector count**: 1
- **Sample IDs**: `jctc-aHR0cDovL3d3dy5qZWZm-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | conservation |
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
| `filename` | 1/1 (100%) | Jefferson County Trails Council — http://www.jeffersoncountytrails.org/b-cvt/cvt... |
| `org` | 1/1 (100%) | Jefferson County Trails Council |
| `source` | 1/1 (100%) | http://www.jeffersoncountytrails.org/b-cvt/cvt-fall.htm |
| `text` | 1/1 (100%) | The project was made possible by a grant from the National Endowment for the Art... |
| `type` | 1/1 (100%) | community_org |

### `http://www.kufnerart.com/new-products`

- **Vector count**: 1
- **Sample IDs**: `kufner-art-aHR0cDovL3d3dy5rdWZu-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | Kufner Art Gallery — http://www.kufnerart.com/new-products |
| `org` | 1/1 (100%) | Kufner Art Gallery |
| `source` | 1/1 (100%) | http://www.kufnerart.com/new-products |
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
| `filename` | 1/1 (100%) | Maharishi School — https://www.maharishischool.org/admissions |
| `org` | 1/1 (100%) | Maharishi School |
| `source` | 1/1 (100%) | https://www.maharishischool.org/admissions |
| `text` | 1/1 (100%) | Families may opt to use our monthly payment plan or pay for each semester in ful... |
| `type` | 1/1 (100%) | community_org |

### `https://www.maharishischool.org/academic-office`

- **Vector count**: 1
- **Sample IDs**: `maharishi-school-aHR0cHM6Ly93d3cubWFo-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `filename` | 1/1 (100%) | Maharishi School — https://www.maharishischool.org/academic-office |
| `org` | 1/1 (100%) | Maharishi School |
| `source` | 1/1 (100%) | https://www.maharishischool.org/academic-office |
| `text` | 1/1 (100%) | (866) 472-6723 Admissions@MaharishiSchool.org The Academic Office at Maharishi S... |
| `type` | 1/1 (100%) | community_org |

### `https://www.kufnerart.com/new-products`

- **Vector count**: 1
- **Sample IDs**: `kufner-art-aHR0cHM6Ly93d3cua3Vm-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | Kufner Art Gallery — https://www.kufnerart.com/new-products |
| `org` | 1/1 (100%) | Kufner Art Gallery |
| `source` | 1/1 (100%) | https://www.kufnerart.com/new-products |
| `text` | 1/1 (100%) | For any questions or comments on Christopher's work, or to inquire about commiss... |
| `type` | 1/1 (100%) | community_org |

### `http://www.kufnerart.com/about`

- **Vector count**: 1
- **Sample IDs**: `kufner-art-aHR0cDovL3d3dy5rdWZu-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
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
| `filename` | 1/1 (100%) | minutes-410.pdf |
| `source` | 1/1 (100%) | https://cityoffairfieldiowa.com/Archive.aspx?ADID=410 |
| `text` | 1/1 (100%) |   MINUTES OF THE FAIRFIELD CITY COUNCIL  SPECIAL MEETING AUGUST 7, 2018      The... |

### `https://pathfindersrcd.org/community-guide/american-homefinding-association`

- **Vector count**: 1
- **Sample IDs**: `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
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
| `filename` | 1/1 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/news-events |
| `org` | 1/1 (100%) | Pathfinders RC&D |
| `source` | 1/1 (100%) | https://pathfindersrcd.org/news-events |
| `text` | 1/1 (100%) | Minden, Perry, West Branch and a collection of towns in southeast Iowa have been... |
| `type` | 1/1 (100%) | community_org |

### `https://pathfindersrcd.org/se-iowa-watershed-partnership-rcpp-2448`

- **Vector count**: 1
- **Sample IDs**: `pathfinders-rcd-aHR0cHM6Ly9wYXRoZmlu-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
| `filename` | 1/1 (100%) | Pathfinders RC&D — https://pathfindersrcd.org/se-iowa-watershed-partnership-rcpp... |
| `org` | 1/1 (100%) | Pathfinders RC&D |
| `source` | 1/1 (100%) | https://pathfindersrcd.org/se-iowa-watershed-partnership-rcpp-2448 |
| `text` | 1/1 (100%) | ADDITIONAL QUESTIONS: The Statement of Work then says to follow: “NRCS Title 450... |
| `type` | 1/1 (100%) | community_org |

### `https://pathfindersrcd.org/what-we-do/mine-land-reclamation`

- **Vector count**: 1
- **Sample IDs**: `pathfinders-rcd-guide-aHR0cHM6Ly9wYXRoZmlu-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | civic |
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
| `filename` | 1/1 (100%) | Pathfinders RC&D Community Resource Guide — https://pathfindersrcd.org/research-... |
| `org` | 1/1 (100%) | Pathfinders RC&D Community Resource Guide |
| `source` | 1/1 (100%) | https://pathfindersrcd.org/research-on-grassfed-beef |
| `text` | 1/1 (100%) | Understanding Factors Effecting Meat Quality. Powerpoint by Susan K. Duckett . T... |
| `type` | 1/1 (100%) | community_org |

### `https://www.tm.org/images/favicons/site.webmanifest`

- **Vector count**: 1
- **Sample IDs**: `tm-southeast-iowa-aHR0cHM6Ly93d3cudG0u-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
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
| `filename` | 1/1 (100%) | TM Southeast Iowa Center — https://www.tm.org/en-us/tm-course |
| `org` | 1/1 (100%) | TM Southeast Iowa Center |
| `source` | 1/1 (100%) | https://www.tm.org/en-us/tm-course |
| `text` | 1/1 (100%) | After the 4 days of learning, there are two additional sessions that are part of... |
| `type` | 1/1 (100%) | community_org |

### `https://www.tm.org/en-us/benefits`

- **Vector count**: 1
- **Sample IDs**: `tm-southeast-iowa-aHR0cHM6Ly93d3cudG0u-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | education |
| `filename` | 1/1 (100%) | TM Southeast Iowa Center — https://www.tm.org/en-us/benefits |
| `org` | 1/1 (100%) | TM Southeast Iowa Center |
| `source` | 1/1 (100%) | https://www.tm.org/en-us/benefits |
| `text` | 1/1 (100%) | The TM technique for improved relationships When we are calmer and more centered... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=3NX7FLSxIkM`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-3NX7FLSxIkM-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Meghan Dowd "Cado Ice Cream" |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=3NX7FLSxIkM |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Me... |
| `title` | 1/1 (100%) | Traction Thursday \| Meghan Dowd "Cado Ice Cream" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=8iNGauyAX6c`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-8iNGauyAX6c-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Ravi Bhattarai 6-13-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=8iNGauyAX6c |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| R... |
| `title` | 1/1 (100%) | Traction Thursdays \| Ravi Bhattarai 6-13-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=CYbmHUSHB_4`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-CYbmHUSHB_4-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Jai Purdy & Stephen Cardinal ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=CYbmHUSHB_4 |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| J... |
| `title` | 1/1 (100%) | Traction Thursdays \| Jai Purdy & Stephen Cardinal 6-20-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=669_lKkME8M`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-669_lKkME8M-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Kim Strubell "Charity Seeds" 8... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=669_lKkME8M |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ki... |
| `title` | 1/1 (100%) | Traction Thursday \| Kim Strubell "Charity Seeds" 8-8-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=8st5UpaU-5M`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-8st5UpaU-5M-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Mendy McAdams "Downtown Fairfi... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=8st5UpaU-5M |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Me... |
| `title` | 1/1 (100%) | Traction Thursday \| Mendy McAdams "Downtown Fairfield" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=9dpKiXwDwNI`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-9dpKiXwDwNI-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Dr.  Sean Stokes "Research Dir... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=9dpKiXwDwNI |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Dr... |
| `title` | 1/1 (100%) | Traction Thursday \| Dr.  Sean Stokes "Research Director Rodale Organic Center" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=E9blyWhxUE8`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-E9blyWhxUE8-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Danny Standly "Revata Consulti... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=E9blyWhxUE8 |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Da... |
| `title` | 1/1 (100%) | Traction Thursday \| Danny Standly "Revata Consulting" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=GeyByyiWPmY`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-GeyByyiWPmY-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Jim Belilove 3-28-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=GeyByyiWPmY |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| J... |
| `title` | 1/1 (100%) | Traction Thursdays \| Jim Belilove 3-28-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=FzO0EMlhrMA`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-FzO0EMlhrMA-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
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
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Deborah Williamson "Chairwoman... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=H0dVVyUWtDw |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| De... |
| `title` | 1/1 (100%) | Traction Thursday \| Deborah Williamson "Chairwoman, Fairfield Beautification Com... |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=HZ52R7YvGHQ`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-HZ52R7YvGHQ-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Phyllis Khare "Email Marketing... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=HZ52R7YvGHQ |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ph... |
| `title` | 1/1 (100%) | Traction Thursday \| Phyllis Khare "Email Marketing" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=KZR25ThHWmc`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-KZR25ThHWmc-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Michael Lesniak "AiLo" 2-15-2... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=KZR25ThHWmc |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| M... |
| `title` | 1/1 (100%) | Traction Thursdays \| Michael Lesniak "AiLo" 2-15-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=PdXtS42ce1c`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-PdXtS42ce1c-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Clarissa Schmidt "Yinja Moves ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=PdXtS42ce1c |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Cl... |
| `title` | 1/1 (100%) | Traction Thursday \| Clarissa Schmidt "Yinja Moves and Rissa's Healthy Delights" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=MqBHtflIufs`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-MqBHtflIufs-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Rae Guillermo "Desert Mixologi... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=MqBHtflIufs |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ra... |
| `title` | 1/1 (100%) | Traction Thursday \| Rae Guillermo "Desert Mixologist" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=QluMOeU-40w`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-QluMOeU-40w-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Araya and Akira Uehara "Front... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=QluMOeU-40w |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| A... |
| `title` | 1/1 (100%) | Traction Thursdays \| Araya and Akira Uehara "Frontier Freight and Foods" 2-9-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=ZkQLGE8dulA`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-ZkQLGE8dulA-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Andrew Nash "Sweet Green Arbor... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=ZkQLGE8dulA |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| An... |
| `title` | 1/1 (100%) | Traction Thursday \| Andrew Nash "Sweet Green Arbor and Native Plants" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=UivWUK_x0mU`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-UivWUK_x0mU-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
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
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Dave Eastburn 4-11-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=Up3DnK7NtOE |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Da... |
| `title` | 1/1 (100%) | Traction Thursday \| Dave Eastburn 4-11-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=YKJiPJ6Mf9Q`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-YKJiPJ6Mf9Q-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Eric Shaffer and Apala Lahiri ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=YKJiPJ6Mf9Q |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Er... |
| `title` | 1/1 (100%) | Traction Thursday \| Eric Shaffer and Apala Lahiri "HFI Framework" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=cctzxDz-24U`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-cctzxDz-24U-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
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
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Jeff Topel 4-4-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=i3SzyDBDfe4 |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Je... |
| `title` | 1/1 (100%) | Traction Thursday \| Jeff Topel 4-4-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=fp4FNx91-3g`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-fp4FNx91-3g-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Faith Reeves "The RAC" |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=fp4FNx91-3g |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Fa... |
| `title` | 1/1 (100%) | Traction Thursday \| Faith Reeves "The RAC" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=fXiSXShCXkw`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-fXiSXShCXkw-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| Frank Cicela 6-5-24 |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=fXiSXShCXkw |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| F... |
| `title` | 1/1 (100%) | Traction Thursdays \| Frank Cicela 6-5-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=ord3FOp1dkE`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-ord3FOp1dkE-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Jordi Quevedo Valls "The PARE ... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=ord3FOp1dkE |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Jo... |
| `title` | 1/1 (100%) | Traction Thursday \| Jordi Quevedo Valls "The PARE Group" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=pMKXJl0DC7Q`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-pMKXJl0DC7Q-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Phyllis Khare "Co Founded Soci... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=pMKXJl0DC7Q |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Ph... |
| `title` | 1/1 (100%) | Traction Thursday \| Phyllis Khare "Co Founded Social Media Manager School" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=sn7WeDjwUfY`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-sn7WeDjwUfY-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Tom Morgan "Morgan Intercultur... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=sn7WeDjwUfY |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| To... |
| `title` | 1/1 (100%) | Traction Thursday \| Tom Morgan "Morgan Intercultural" |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.youtube.com/watch?v=rNp-8qLuwDo`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-rNp-8qLuwDo-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursday \| Food Market Maker Update |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=rNp-8qLuwDo |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursday \| Fo... |
| `title` | 1/1 (100%) | Traction Thursday \| Food Market Maker Update |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.visitfairfieldiowa.com/business/wege-center-for-the-arts`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/business/wege-ce... |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/business/wege-center-for-the-arts |
| `text` | 1/1 (100%) | Wege Center for the Arts - Fairfield, Iowa - Tune into our Vibe! Located on the ... |
| `type` | 1/1 (100%) | community_org |

### `https://www.visitfairfieldiowa.com/blog-posts/the-best-day-trip-from-des-moines`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-3`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog-posts/the-b... |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/blog-posts/the-best-day-trip-from-des-moines |
| `text` | 1/1 (100%) | Looking for a little escape from the hustle and bustle of city life? Fairfield i... |
| `type` | 1/1 (100%) | community_org |

### `https://www.youtube.com/watch?v=yWChypUQCAQ`

- **Vector count**: 1
- **Sample IDs**: `traction-thursdays-yWChypUQCAQ-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | economic |
| `filename` | 1/1 (100%) | Traction Thursday — unknown — Traction Thursdays \| "Agile Circles" Collaborative... |
| `org` | 1/1 (100%) | Traction Thursdays — Fairfield CoLab |
| `orgId` | 1/1 (100%) | traction-thursdays |
| `publishedAt` | 1/1 (100%) |  |
| `source` | 1/1 (100%) | https://www.youtube.com/watch?v=yWChypUQCAQ |
| `text` | 1/1 (100%) | Traction Thursday — Fairfield, Iowa — date unknown Title: Traction Thursdays \| "... |
| `title` | 1/1 (100%) | Traction Thursdays \| "Agile Circles" Collaborative Solutions 7-18-24 |
| `type` | 1/1 (100%) | traction_thursday |

### `https://www.visitfairfieldiowa.com/blog-posts/whats-new-in-fairfield-feb-2026`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-2`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog-posts/whats... |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/blog-posts/whats-new-in-fairfield-feb-2026 |
| `text` | 1/1 (100%) | Looking for a little escape from the hustle and bustle of city life? Fairfield i... |
| `type` | 1/1 (100%) | community_org |

### `http://www.visitfairfieldiowa.com`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cDovL3d3dy52aXNp-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
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
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/blog |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/blog |
| `text` | 1/1 (100%) | Click to open Dancing (or Just Listening) in the Streets Dancing (or Just Listen... |
| `type` | 1/1 (100%) | community_org |

### `https://www.visitfairfieldiowa.com/business/hudson-collection`

- **Vector count**: 1
- **Sample IDs**: `visit-fairfield-aHR0cHM6Ly93d3cudmlz-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | tourism |
| `filename` | 1/1 (100%) | Visit Fairfield Iowa (CVB) — https://www.visitfairfieldiowa.com/business/hudson-... |
| `org` | 1/1 (100%) | Visit Fairfield Iowa (CVB) |
| `source` | 1/1 (100%) | https://www.visitfairfieldiowa.com/business/hudson-collection |
| `text` | 1/1 (100%) | Despite their expression of an unbroken, centuries-old tradition, the works that... |
| `type` | 1/1 (100%) | community_org |

### `https://www.wegecenter.org/ferrigno/lombard`

- **Vector count**: 1
- **Sample IDs**: `wege-center-aHR0cHM6Ly93d3cud2Vn-1`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
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
| `filename` | 1/1 (100%) | Wege Center for the Arts — https://www.wegecenter.org/legup |
| `org` | 1/1 (100%) | Wege Center for the Arts |
| `source` | 1/1 (100%) | https://www.wegecenter.org/legup |
| `text` | 1/1 (100%) | LAUREL FARRIN / WAYNE KOESTENBAUM LEG UP SEPTEMBER 8 - OCTOBER 20, 2023 OPENING ... |
| `type` | 1/1 (100%) | community_org |

### `http://www.wegecenter.org/past`

- **Vector count**: 1
- **Sample IDs**: `wege-center-aHR0cDovL3d3dy53ZWdl-0`
- **ID patterns**: `other` (1)
- **Vectors profiled for metadata**: 1

| Metadata field | Presence | Example |
|---|---:|---|
| `category` | 1/1 (100%) | arts |
| `filename` | 1/1 (100%) | Wege Center for the Arts — http://www.wegecenter.org/past |
| `org` | 1/1 (100%) | Wege Center for the Arts |
| `source` | 1/1 (100%) | http://www.wegecenter.org/past |
| `text` | 1/1 (100%) | SUE HETTMANSPERGER / STO LEN / LILLY MCELROY THROUGH A NARROW WINDOW KYLE AGNEW ... |
| `type` | 1/1 (100%) | community_org |
