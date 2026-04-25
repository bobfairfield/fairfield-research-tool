/**
 * test-metadata-schema.js
 *
 * Smoke-test for lib/metadata-schema.js. Run from ~/fairfield-research-tool/:
 *   node test-metadata-schema.js
 *
 * Exits 0 if all tests pass, 1 if any fail. Pure unit test — makes no
 * network calls and touches no real data.
 */

const { validateMetadata, MetadataSchemaError } = require('./lib/metadata-schema');

let passed = 0;
let failed = 0;

function ok(label, fn) {
  try {
    fn();
    console.log(`  ✓ ${label}`);
    passed++;
  } catch (e) {
    console.error(`  ✗ ${label}\n      unexpected error: ${e.message}`);
    failed++;
  }
}

function throws(label, fn, expectedSubstring) {
  try {
    fn();
    console.error(`  ✗ ${label}\n      expected throw, got nothing`);
    failed++;
  } catch (e) {
    if (!(e instanceof MetadataSchemaError)) {
      console.error(`  ✗ ${label}\n      threw wrong error type: ${e.name}: ${e.message}`);
      failed++;
      return;
    }
    if (expectedSubstring && !e.message.includes(expectedSubstring)) {
      console.error(`  ✗ ${label}\n      message missing "${expectedSubstring}":\n      ${e.message}`);
      failed++;
      return;
    }
    console.log(`  ✓ ${label}`);
    passed++;
  }
}

console.log('=== validateMetadata smoke tests ===\n');

console.log('Happy path:');
ok('minimal valid metadata', () => validateMetadata({
  text: 'hello world',
  source: 'cityoffairfieldiowa.com',
  chunkIndex: 0,
}, { context: 'test' }));

ok('chunkIndex zero is valid', () => validateMetadata({
  text: 'x',
  source: 'y',
  chunkIndex: 0,
}, { context: 'test' }));

ok('full canonical metadata', () => validateMetadata({
  text: 'hello',
  source: 'cityoffairfieldiowa.com',
  sourceUrl: 'https://cityoffairfieldiowa.com/permits',
  filename: 'permits.pdf',
  chunkIndex: 5,
  orgId: 'fairfield-city',
  type: 'civic_info',
}, { context: 'test' }));

ok('arbitrary extra fields pass through (permissive mode)', () => validateMetadata({
  text: 'x',
  source: 'y',
  chunkIndex: 0,
  yearFolder: '2023-2024',
  totalChunks: 42,
  category: 'government',
  subcategory: 'minutes',
}, { context: 'test' }));

console.log('\nLegacy field rejection:');
throws('rejects "file"', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0, file: 'foo.pdf',
}, { context: 'test' }), '"file"');

throws('rejects "fileName"', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0, fileName: 'foo.pdf',
}, { context: 'test' }), '"fileName"');

throws('rejects "chunk_index"', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0, chunk_index: 0,
}, { context: 'test' }), '"chunk_index"');

throws('rejects "chunkNum"', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0, chunkNum: 0,
}, { context: 'test' }), '"chunkNum"');

throws('rejects "url"', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0, url: 'https://x.com',
}, { context: 'test' }), '"url"');

throws('rejects "source_url"', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0, source_url: 'https://x.com',
}, { context: 'test' }), '"source_url"');

throws('reports all legacy fields at once', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0,
  file: 'a.pdf', url: 'b.com', chunk_index: 0,
}, { context: 'test' }), 'Legacy metadata field');

console.log('\nRequired field violations:');
throws('missing text', () => validateMetadata({
  source: 'y', chunkIndex: 0,
}, { context: 'test' }), 'text');

throws('missing source', () => validateMetadata({
  text: 'x', chunkIndex: 0,
}, { context: 'test' }), 'source');

throws('missing chunkIndex', () => validateMetadata({
  text: 'x', source: 'y',
}, { context: 'test' }), 'chunkIndex');

console.log('\nType-validation:');
throws('chunkIndex must be number', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: '0',
}, { context: 'test' }), 'chunkIndex');

throws('chunkIndex must be non-negative', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: -1,
}, { context: 'test' }), 'chunkIndex');

throws('chunkIndex must be integer', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 1.5,
}, { context: 'test' }), 'chunkIndex');

throws('text must be non-empty', () => validateMetadata({
  text: '', source: 'y', chunkIndex: 0,
}, { context: 'test' }), 'text');

throws('source must be string', () => validateMetadata({
  text: 'x', source: 123, chunkIndex: 0,
}, { context: 'test' }), 'source');

throws('filename must be string if present', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0, filename: 123,
}, { context: 'test' }), 'filename');

throws('sourceUrl must be string if present', () => validateMetadata({
  text: 'x', source: 'y', chunkIndex: 0, sourceUrl: false,
}, { context: 'test' }), 'sourceUrl');

throws('rejects null input', () => validateMetadata(null, { context: 'test' }), 'object');

throws('rejects array input', () => validateMetadata([], { context: 'test' }), 'array');

console.log(`\n=== ${passed} passed, ${failed} failed ===`);
process.exit(failed > 0 ? 1 : 0);
