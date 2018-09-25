import { Injectable } from '@angular/core';
import { promises as jsonld, JsonLd,
  CompactOptions, FlattenOptions, ExpandOptions, FrameOptions, NormalizeOptions,
  ToRdfOptions, FromRdfOptions, registerRDFParser as registerParser, RDFParser } from 'jsonld';
import { DEFAULT_COMPACT_OPTIONS, DEFAULT_FLATTEN_OPTIONS, DEFAULT_EXPAND_OPTIONS,
         DEFAULT_FRAME_OPTIONS, DEFAULT_NORMALIZE_OPTIONS, DEFAULT_TO_RDF_OPTIONS,
         DEFAULT_FROM_RDF_OPTIONS } from './defaults';
import { JsonLdDocument } from './jsonld-document-model';

@Injectable({
  providedIn: 'root'
})
export class NgxJsonLdProvider {

  private compactOptions: CompactOptions = DEFAULT_COMPACT_OPTIONS;
  private flattenOptions: FlattenOptions = DEFAULT_FLATTEN_OPTIONS;
  private expandOptions: ExpandOptions = DEFAULT_EXPAND_OPTIONS;
  private frameOptions: FrameOptions = DEFAULT_FRAME_OPTIONS;
  private normalizeOptions: NormalizeOptions = DEFAULT_NORMALIZE_OPTIONS;
  private toRdfOptions: ToRdfOptions = DEFAULT_TO_RDF_OPTIONS;
  private fromRdfOptions: FromRdfOptions = DEFAULT_FROM_RDF_OPTIONS;

  // JsonLd Methods

  compact(documentToCompact: JsonLdDocument, context: JsonLdDocument, options = this.compactOptions): Promise<JsonLd> {
     return jsonld.compact(documentToCompact, context, options);
  }

  expand(documentToExpand: JsonLdDocument, options = this.expandOptions): Promise<JsonLd> {
    return jsonld.expand(documentToExpand, options);
  }

  flatten(jsonldToFlatten: JsonLd, options = this.flattenOptions): Promise<JsonLd> {
    return jsonld.flatten(jsonldToFlatten, options);
  }

  frame(jsonldToFrame: JsonLd, frameToUse: JsonLd, options = this.frameOptions): Promise<JsonLd> {
    return jsonld.frame(jsonldToFrame, frameToUse, options);
  }

  normalize(jsonldToNormalize: JsonLd, options = this.normalizeOptions): Promise<JsonLd> {
    return jsonld.normalize(jsonldToNormalize, options);
  }

  toRDF(jsonLdToTranslate: JsonLd, options = this.toRdfOptions): Promise<string> {
    return jsonld.toRDF(jsonLdToTranslate, options);
  }

  fromRDF(rdf: string, options = this.fromRdfOptions): Promise<JsonLd> {
    return jsonld.fromRDF(rdf, options);
  }

  registerRDFParser(contentType: string, parser: RDFParser) {
    registerParser(contentType, parser);
  }

  // method options setters and getters

  setCompactOptions(newOptions: CompactOptions) {
    this.compactOptions = newOptions;
  }

  getCompactOptions(): CompactOptions {
    return this.compactOptions;
  }

  setExpandOptions(newOptions: ExpandOptions) {
    this.expandOptions = newOptions;
  }

  getExpandOptions(): ExpandOptions {
    return this.expandOptions;
  }

  setFlattenOptions(newOptions: FlattenOptions) {
    this.flattenOptions = newOptions;
  }

  getFlattenOptions(): FlattenOptions {
    return this.flattenOptions;
  }

  setFrameOptions(newOptions: FrameOptions) {
    this.frameOptions = newOptions;
  }

  getFrameOptions(): FrameOptions {
    return this.frameOptions;
  }

  setToRdfOptions(newOptions: ToRdfOptions) {
    this.toRdfOptions = newOptions;
  }

  getToRdfOptions(): ToRdfOptions {
    return this.toRdfOptions;
  }

  setFromRdfOptions(newOptions: FromRdfOptions) {
    this.fromRdfOptions = newOptions;
  }

  getFromRdfOptions(): FromRdfOptions {
    return this.fromRdfOptions;
  }
}

