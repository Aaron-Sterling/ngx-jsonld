// Defaults

import { CompactOptions, FlattenOptions, ExpandOptions, FrameOptions,
    NormalizeOptions, ToRdfOptions, FromRdfOptions } from 'jsonld';

export const DEFAULT_COMPACT_OPTIONS: CompactOptions = {};
export const DEFAULT_FLATTEN_OPTIONS: FlattenOptions = {};
export const DEFAULT_EXPAND_OPTIONS: ExpandOptions = {};
export const DEFAULT_FRAME_OPTIONS: FrameOptions = {};
export const DEFAULT_NORMALIZE_OPTIONS: NormalizeOptions = {format: 'application/n-quads'};
export const DEFAULT_TO_RDF_OPTIONS: ToRdfOptions = {format: 'application/n-quads'};
export const DEFAULT_FROM_RDF_OPTIONS: FromRdfOptions = {format: 'application/n-quads'};
