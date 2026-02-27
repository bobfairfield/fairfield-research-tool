#!/bin/bash
BASE="/Users/mac/Desktop/Fairfield_RAG_Knowledge_Base"
PROCESSOR="/Users/mac/fairfield-research-tool/document-processor.js"

echo "=== Starting batch upload ==="

run() {
  echo "Uploading: $1"
  node "$PROCESSOR" "$1" "$2"
}

# City Attorney
run "$BASE/01_City_Records/01_City_of_Fairfield/City Attorney/Memo from John Morrissey re ICE policy.pdf" '{"type":"city_attorney","source":"City Attorney"}'

# Walton Lake
run "$BASE/01_City_Records/01_City_of_Fairfield/City Attorney/Walton Lake/City of Fairfield Brief.pdf" '{"type":"city_attorney","source":"City Attorney","category":"walton_lake"}'
run "$BASE/01_City_Records/01_City_of_Fairfield/City Attorney/Walton Lake/City Review on Walton Lake Response to Drain Lake 2025.06.05.pdf" '{"type":"city_attorney","source":"City Attorney","category":"walton_lake"}'
run "$BASE/01_City_Records/01_City_of_Fairfield/City Attorney/Walton Lake/DNR Brief.pdf" '{"type":"city_attorney","source":"City Attorney","category":"walton_lake"}'
run "$BASE/01_City_Records/01_City_of_Fairfield/City Attorney/Walton Lake/Motions.pdf" '{"type":"city_attorney","source":"City Attorney","category":"walton_lake"}'

# City Budgets (trailing space in folder name)
run "$BASE/01_City_Records/01_City_of_Fairfield/City budgets /CITY OF FAIRFIELD AUDIT REPORT.pdf" '{"type":"city_budget","source":"City of Fairfield"}'

# Plans
run "$BASE/01_City_Records/01_City_of_Fairfield/Plans/2023-Fairfield-Iowa-Rural-Housing-Needs-Assessment-Housing-Study.pdf" '{"type":"city_plan","source":"City of Fairfield","year":"2023"}'
run "$BASE/01_City_Records/01_City_of_Fairfield/Plans/Copy of WhatsthePlan (2).pdf" '{"type":"city_plan","source":"City of Fairfield"}'
run "$BASE/01_City_Records/01_City_of_Fairfield/Plans/Fairfield Forever Comp Plan 2020-02-18 (1).pdf" '{"type":"city_plan","source":"City of Fairfield","year":"2020"}'
run "$BASE/01_City_Records/01_City_of_Fairfield/Plans/Fairfield_DowntownAssessmentReport_2024 (1).pdf" '{"type":"city_plan","source":"City of Fairfield","year":"2024"}'

# Community Organizations
run "$BASE/02_Community_Organizations/FairfieldCaresResurce.pdf" '{"type":"community_resource","source":"Fairfield Cares"}'
run "$BASE/02_Community_Organizations/Copy of WhatsthePlan (2).pdf" '{"type":"community_plan","source":"Community Organizations"}'

# Supplementary Resources (trailing space in folder name)
run "$BASE/06_Supplementary_resources /Fairfield Brand Guidelines.pdf" '{"type":"brand_guidelines","source":"City of Fairfield"}'

echo "=== Batch upload complete ==="
