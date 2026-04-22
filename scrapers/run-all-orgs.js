#!/usr/bin/env node
/**
 * scrapers/run-all-orgs.js
 * Runs all 14 community org scrapers in sequence.
 * Reports per-org and overall totals at the end.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/run-all-orgs.js
 *
 * To run a single category:
 *   node scrapers/run-all-orgs.js education
 *   node scrapers/run-all-orgs.js health
 *   node scrapers/run-all-orgs.js arts
 *   node scrapers/run-all-orgs.js youth-sports
 *   node scrapers/run-all-orgs.js tourism
 *   node scrapers/run-all-orgs.js faith
 */

require('dotenv').config({ path: '.env.local' });
const path = require('path');

const SCRAPERS = [
  // Education
  { category: 'education',     script: 'education/fairfield-schools.js',    label: 'Fairfield Community School District' },
  { category: 'education',     script: 'education/miu.js',                  label: 'Maharishi International University' },
  { category: 'education',     script: 'education/maharishi-school.js',     label: 'Maharishi School' },

  // Health & Human Services
  { category: 'health',        script: 'health/jefferson-county-health.js', label: 'Jefferson County Health Center' },
  { category: 'health',        script: 'health/carry-on-bags.js',           label: 'Carry On Bags' },

  // Arts, Culture & Media
  { category: 'arts',          script: 'arts/fairfield-acc.js',             label: 'Fairfield Arts & Convention Center' },
  { category: 'arts',          script: 'arts/fairfield-media-center.js',    label: 'Fairfield Media Center' },
  { category: 'arts',          script: 'arts/iowa-source.js',               label: 'Iowa Source' },

  // Youth Sports
  { category: 'youth-sports',  script: 'youth-sports/fairfield-national-ll.js',  label: 'Fairfield National Little League' },
  { category: 'youth-sports',  script: 'youth-sports/fairfield-atlantic-ll.js',  label: 'Fairfield Atlantic Little League' },
  { category: 'youth-sports',  script: 'youth-sports/jefferson-county-ll.js',    label: 'Jefferson County Little League' },

  // Tourism
  { category: 'tourism',       script: 'tourism/visit-fairfield.js',        label: 'Visit Fairfield CVB' },

  // Faith
  { category: 'faith',         script: 'faith/first-umc.js',                label: 'First United Methodist Church' },
  { category: 'faith',         script: 'faith/fairfield-friends.js',        label: 'Fairfield Friends Church' },
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  // Optional category filter from CLI arg
  const filterCategory = process.argv[2] || null;
  const toRun = filterCategory
    ? SCRAPERS.filter(s => s.category === filterCategory)
    : SCRAPERS;

  if (toRun.length === 0) {
    console.error(`No scrapers found for category: ${filterCategory}`);
    console.error(`Available: education, health, arts, youth-sports, tourism, faith`);
    process.exit(1);
  }

  console.log(`\n${'█'.repeat(60)}`);
  console.log(`  Fairfield Community Orgs — Pinecone Indexer`);
  console.log(`  Running ${toRun.length} scrapers${filterCategory ? ` (${filterCategory})` : ''}`);
  console.log(`${'█'.repeat(60)}\n`);

  const startTime = Date.now();
  const results = [];

  for (const s of toRun) {
    console.log(`\n► Starting: ${s.label}`);
    try {
      // Each scraper script calls runScraper() internally.
      // We require() it here so we run them in-process sequentially.
      // (Each script has its own require('../scraper-base') relative path,
      //  so we need to resolve from the scrapers/ directory.)
      const scriptPath = path.resolve(__dirname, s.script);

      // We can't re-require cleanly if they auto-run — so we use child_process
      // to run each as a subprocess instead.
      const { execSync } = require('child_process');
      execSync(`node ${scriptPath}`, {
        stdio: 'inherit',
        cwd: process.cwd(),
        env: process.env
      });

      results.push({ label: s.label, status: '✅' });
    } catch (e) {
      console.error(`\n❌ ${s.label} failed: ${e.message}`);
      results.push({ label: s.label, status: '❌', error: e.message });
    }

    // Brief pause between orgs
    await sleep(2000);
  }

  // Summary
  const elapsed = ((Date.now() - startTime) / 60000).toFixed(1);
  console.log(`\n\n${'█'.repeat(60)}`);
  console.log(`  Run Complete — ${elapsed} minutes`);
  console.log(`${'─'.repeat(60)}`);
  for (const r of results) {
    const err = r.error ? `  ← ${r.error.slice(0, 50)}` : '';
    console.log(`  ${r.status}  ${r.label}${err}`);
  }
  console.log(`${'█'.repeat(60)}\n`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});

// ── Auto-deploy to Vercel ──────────────────────────────────────────────────
{
  const { execSync } = require('child_process');
  try {
    execSync('node deploy.js "Update knowledge base — scraper run"', {
      stdio: 'inherit',
      cwd: __dirname + '/..'
    });
  } catch (err) {
    console.error('Deploy failed:', err.message);
    process.exit(1);
  }
}

