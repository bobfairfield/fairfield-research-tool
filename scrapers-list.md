# Community Org Scrapers — Reference List

All 24 scrapers live in `~/fairfield-research-tool/scrapers/`.
Run individually or by category from `~/fairfield-research-tool/`.

## Run Commands
```bash
# Single category:
node scrapers/run-all-orgs.js education

# Single org:
node scrapers/education/miu.js
```

---

## EDUCATION

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `fcsd` | Fairfield Community School District | fairfieldsfuture.org | education/fairfield-schools.js | 60 |
| `miu` | Maharishi International University | miu.edu | education/miu.js | 80 |
| `maharishi-school` | Maharishi School | maharishischool.org | education/maharishi-school.js | 50 |
| `fef` | Fairfield Education Foundation | fairfieldeducationfoundation.com | education/fairfield-education-foundation.js | 20 |
| `isu-extension` | ISU Extension Jefferson County | extension.iastate.edu/jefferson | education/isu-extension-jefferson.js | 60 |

## HEALTH & HUMAN SERVICES

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `jchc` | Jefferson County Health Center | jeffersoncountyhealthcenter.org | health/jefferson-county-health.js | 60 |
| `carry-on-bags` | Carry On Bags | carryonbags.org | health/carry-on-bags.js | 30 |

## ARTS, CULTURE & MEDIA

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `facc` | Fairfield Arts & Convention Center | fairfieldacc.com | arts/fairfield-acc.js | 60 |
| `fmc` | Fairfield Media Center | fairfieldmediacenter.com | arts/fairfield-media-center.js | 40 |
| `iowa-source` | Iowa Source | iowasource.com | arts/iowa-source.js | 80 |
| `fairfield-cultural-alliance` | Fairfield Cultural Alliance | fairfieldculturaldistrict.org | arts/fairfield-cultural-alliance.js | 80 |
| `fairfield-first-fridays` | Fairfield First Fridays Art Walk | fairfieldfirstfridays.org | arts/fairfield-first-fridays.js | 40 |

## YOUTH SPORTS

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `fnll` | Fairfield National Little League | fnll.org | youth-sports/fairfield-national-ll.js | 40 |
| `fall` | Fairfield Atlantic Little League | fairfieldatlanticlittleleague.org | youth-sports/fairfield-atlantic-ll.js | 40 |
| `jcll` | Jefferson County Little League | jeffersoncountylittleleague.com | youth-sports/jefferson-county-ll.js | 40 |

## TOURISM

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `visit-fairfield` | Visit Fairfield Iowa (CVB) | visitfairfieldiowa.com | tourism/visit-fairfield.js | 70 |

## FAITH & COMMUNITY

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `fumc` | First United Methodist Church | fairfieldmethodistchurch.org | faith/first-umc.js | 40 |
| `ffc` | Fairfield Friends Church | fairfieldfriendschurch.org | faith/fairfield-friends.js | 40 |

## CONSERVATION

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `jc-conservation` | Jefferson County Conservation | jeffersoncountyconservation.com | conservation/jefferson-county-conservation.js | 80 |
| `jc-trails` | Jefferson County Trails Council | jeffersoncountytrails.org | conservation/jefferson-county-trails.js | 100 |

## BUSINESS

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `fairfield-chamber` | Fairfield Area Chamber of Commerce | fairfieldiowa.com | business/fairfield-chamber.js | 120 |

## HERITAGE

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `jc-heritage` | Jefferson County Heritage Foundation | jeffersoncountyheritage.org | heritage/jefferson-county-heritage.js | 60 |

## CIVIC

| orgId | Name | URL | Script | Max Pages |
|-------|------|-----|--------|-----------|
| `gjcf` | Greater Jefferson County Foundation | greaterjeffersoncountyfoundation.org | civic/greater-jc-foundation.js | 50 |
| `jc-fair` | Jefferson County Fair | jeffersoncofair.com | civic/jefferson-county-fair.js | 40 |

---

## Notes
- Scrapers are polite crawlers (600–700ms delay between requests)
- Each vector includes metadata: `org`, `category`, `type: 'community_org'`, `source` URL
- Upserts are idempotent — safe to re-run; same URLs overwrite existing vectors
- FCSD site is JS-rendered (Finalsite CMS) — low static content yield expected
- Maharishi School site has limited static pages — low yield expected
- Jefferson County Fair site has minimal static content — seasonal site, low yield expected


