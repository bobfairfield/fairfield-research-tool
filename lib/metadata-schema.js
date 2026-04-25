/**
 * lib/metadata-schema.js
 *
 * Canonical metadata schema for all Pinecone vector uploads in this project.
 *
 * Why this exists:
 *   Before April 25, 2026, six different upload scripts wrote metadata with
 *   inconsistent field names (`file` vs `fileName` vs `filename`, `url` vs
 *   `source_url` vs `sourceUrl`, etc). The diagnostic audit on April 25
 *   identified this as a root cause of RAG confusion. This module is the
 *   single source of truth for what canonical metadata looks like, and
 *   `validateMetadata()` is the gatekeeper that enforces it.
 *
 * Required: text, source, chunkIndex
 * Optional canonical: sourceUrl, filename, orgId, type
 * Forbidden (throws): file, fileName, chunk_index, chunkNum, url, source_url
 * Anything else: passes through (caller's choice)
 */

const CANONICAL_FIELDS = [
  'text',
  'source',
  'sourceUrl',
  'filename',
  'chunkIndex',
  'orgId',
  'type',
];

const REQUIRED_FIELDS = ['text', 'source', 'chunkIndex'];

// Map of legacy field name -> canonical replacement, for error messages.
const LEGACY_FIELDS = {
  file:        'filename',
  fileName:    'filename',
  chunk_index: 'chunkIndex',
  chunkNum:    'chunkIndex',
  url:         'sourceUrl',
  source_url:  'sourceUrl',
};

class MetadataSchemaError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = 'MetadataSchemaError';
    this.details = details;
  }
}

/**
 * Throws MetadataSchemaError if metadata violates canonical schema.
 * Returns the metadata object unchanged on success (so it can be chained).
 *
 * @param {object} meta - the metadata object intended for Pinecone upsert
 * @param {object} [opts]
 * @param {string} [opts.context] - caller name, included in errors
 *                                  (e.g. 'document-processor.js')
 */
function validateMetadata(meta, opts = {}) {
  const { context = 'unknown caller' } = opts;

  if (!meta || typeof meta !== 'object' || Array.isArray(meta)) {
    throw new MetadataSchemaError(
      `validateMetadata expected an object, got ${Array.isArray(meta) ? 'array' : typeof meta} (caller: ${context})`,
      { context }
    );
  }

  // 1. Reject legacy field names — loudly.
  const legacyViolations = [];
  for (const [legacy, canonical] of Object.entries(LEGACY_FIELDS)) {
    if (legacy in meta) {
      legacyViolations.push(`  - "${legacy}" is forbidden — use "${canonical}" instead`);
    }
  }
  if (legacyViolations.length > 0) {
    throw new MetadataSchemaError(
      `Legacy metadata field(s) detected (caller: ${context}):\n${legacyViolations.join('\n')}\n` +
      `See lib/metadata-schema.js for the canonical schema.`,
      { context, legacyFields: legacyViolations }
    );
  }

  // 2. Required fields must be present.
  const missing = REQUIRED_FIELDS.filter(f => !(f in meta));
  if (missing.length > 0) {
    throw new MetadataSchemaError(
      `Missing required metadata field(s) (caller: ${context}): ${missing.join(', ')}`,
      { context, missingFields: missing }
    );
  }

  // 3. Type checks for canonical fields.
  if (typeof meta.text !== 'string' || meta.text.length === 0) {
    throw new MetadataSchemaError(
      `metadata.text must be a non-empty string (caller: ${context})`,
      { context }
    );
  }
  if (typeof meta.source !== 'string' || meta.source.length === 0) {
    throw new MetadataSchemaError(
      `metadata.source must be a non-empty string (caller: ${context})`,
      { context }
    );
  }
  if (
    typeof meta.chunkIndex !== 'number' ||
    !Number.isInteger(meta.chunkIndex) ||
    meta.chunkIndex < 0
  ) {
    throw new MetadataSchemaError(
      `metadata.chunkIndex must be a non-negative integer (caller: ${context}, got: ${JSON.stringify(meta.chunkIndex)})`,
      { context }
    );
  }
  if (meta.filename !== undefined && (typeof meta.filename !== 'string' || meta.filename.length === 0)) {
    throw new MetadataSchemaError(
      `metadata.filename must be a non-empty string if present (caller: ${context})`,
      { context }
    );
  }
  if (meta.sourceUrl !== undefined && (typeof meta.sourceUrl !== 'string' || meta.sourceUrl.length === 0)) {
    throw new MetadataSchemaError(
      `metadata.sourceUrl must be a non-empty string if present (caller: ${context})`,
      { context }
    );
  }
  if (meta.orgId !== undefined && (typeof meta.orgId !== 'string' || meta.orgId.length === 0)) {
    throw new MetadataSchemaError(
      `metadata.orgId must be a non-empty string if present (caller: ${context})`,
      { context }
    );
  }
  if (meta.type !== undefined && typeof meta.type !== 'string') {
    throw new MetadataSchemaError(
      `metadata.type must be a string if present (caller: ${context})`,
      { context }
    );
  }

  return meta;
}

module.exports = {
  CANONICAL_FIELDS,
  REQUIRED_FIELDS,
  LEGACY_FIELDS,
  MetadataSchemaError,
  validateMetadata,
};
