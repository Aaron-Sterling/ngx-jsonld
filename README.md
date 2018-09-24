# ngx-jsonld

Angular shim for the jsonld.js library. Inject an Angular provider to perform compact, flatten, expand, normalize, etc., algorithms on string, RDF, JSON, and JSON-LD inputs.

## Installation

```npm install ngx-jsonld```

## Usage

Register ```NgxJsonLd``` in ```app.module.ts```.
```
import { NgxJsonLd } from 'ngx-jsonld';

providers: NgxJsonLd
```

Then you can inject ```NgxJsonLd``` and use it anywhere in your application.
```
import { NgxJsonLd } from 'ng-jsonld';

class foo {
    constructor(private jsonld: NgxJsonLd) {
        const example = 'some RDF string';
        this.jsonld.fromRDF(example).then(res => console.log(res));
    }
}
```
## Related

See also the JSON-LD command line tool [jldc](https://github.com/Aaron-Sterling/jldc). Both ngx-jsonld and jldc have as a dependency the official JSON-LD Javascript library [jsonld.js](https://github.com/digitalbazaar/jsonld.js/), written and supported by DigitalBazaar.

## API

### Types

```
interface JsonLdObject {
  [key: string]: JsonLdPrimitive | JsonLdPrimitive[];
}

type JsonLdPrimitive = string | number | boolean | JsonLd;

type JsonLd = JsonLdObject | JsonLdObject[];

type JsonLdDocument = string | JsonLd | JsonLdObject;
```
In addition to the above types, there are several "options" types available, with names like ```CompactOptions``` and ```FrameOptions```. However, while these exist, ```jsonld.js``` currently does not document support for most of the properties of these types. Therefore, we won't include them in our documentation here, because we think it would be misleading. We may change this later, if the core functionality expands in scope.

### JSON-LD operations

```compact(documentToCompact: JsonLdDocument, context: JsonLdDocument, options?: CompactOptions): Promise<JsonLd>```

Runs the JSON-LD compact algorithm on ```documentToCompact```, using the context in ```context```. Default value for ```options``` is ```{}```.

```expand(documentToExpand: JsonLdDocument, options?: ExpandOptions): Promise<JsonLd>```

Run the JSON-LD expand algorithm on ```documentToExpand```. Default value for ```options``` is ```{}```.

```flatten(jsonldToFlatten: JsonLd, options?: FlattenOptions): Promise<JsonLd>```

Run the JSON-LD flatten algorithm on ```documentToFlatten```. Default value for ```options``` is ```{}```.

```frame(jsonldToFrame: JsonLd, frameToUse: JsonLd, options?: FrameOptions): Promise<JsonLd>```

Runs the JSON-LD frame algorithm on ```documentToFrame```, using the frame in ```frameToUse```. Default value for ```options``` is ```{}```.

```normalize(jsonldToNormalize: JsonLd, options?: NormalizeOptions): Promise<JsonLd>```

Run the JSON-LD normalize algorithm (also called the canonize algorithm) on ```jsonldToNormalize```. Default value for ```options``` is ```{format: 'application/n-quads'}```.

```toRDF(jsonLdToTranslate: JsonLd, options?: ToRdfOptions): Promise<string>```

Converts the JSON-LD in ```jsonLdToTranslate``` to an RDF string. Default value for ```options``` is ```{format: 'application/n-quads'}```.

```fromRDF(rdf: string, options?: FromRdfOptions): Promise<JsonLd>```

Converts the RDf string in ```rdf``` to JSON-LD. Default value for ```options``` is ```{format: 'application/n-quads'}```

```registerRDFParser(contentType: string, parser: RDFParser)```

Registers an RDF parser separate from the default parser. Please see the jsonld.js documentation for details.

### Options getters

All of the following getters return the current value for the relevant options. You can set the options using the setters in the next section, or, if you only want to change the options for a single operation, you can use the optional options parameter of the method you call.
```
getCompactOptions(): CompactOptions
getExpandOptions(): ExpandOptions
getFlattenOptions(): FlattenOptions
getFrameOptions(): FrameOptions
getToRdfOptions(): ToRdfOptions
getFromRdfOptions(): FromRdfOptions
```

### Options setters

The following setters allow you to programmatically change the default value of the relevant options. (A cold restart will reset the options value to the defaults described in these API.)

```
setCompactOptions(newOptions: CompactOptions)
setExpandOptions(newOptions: ExpandOptions)
setFlattenOptions(newOptions: FlattenOptions)
setFrameOptions(newOptions: FrameOptions)
setToRdfOptions(newOptions: ToRdfOptions)
setFromRdfOptions(newOptions: FromRdfOptions)
```