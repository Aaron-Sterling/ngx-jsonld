# ngx-jsonld-provider

Angular shim for the jsonld.js library. Inject an Angular provider to perform compact, flatten, expand, normalize, etc., algorithms on string, RDF, JSON, and JSON-LD inputs.

## Installation

### Step 1: Install dependencies

```npm install jsonld ngx-jsonld-provider```

**IMPORTANT: You need Python 2.x (2.7 recommended) in order to build jsonld**, which is a peer dependency of ngx-jsonld-provider. jsonld has the [node-gyp](https://github.com/nodejs/node-gyp) library as a dependency. Building the node-gyp library requires Python 2.x; it *does not work* with Python 3.x. You do not need to know any Python to use this tool; the language is invisible after the build process.

### Step 2: Add polyfill (for Angular 6+)

The jsonld.js library, like many "older" libraries, uses the keyword ```global```, which is no longer supported in Angular 6. A temporary solution for this is to define ```global``` in your polyfills, as follows. Open your project's ```polyfills.ts```. In the APPLICATION IMPORTS section (at the bottom of the file), add the following lines:
```
// For jsonld dependency: Add global to window, assigning the value of window itself.
(window as any).global = window;
```

## Usage

Register ```NgxJsonLd``` in ```app.module.ts```.
```
import { NgxJsonLdProvider } from 'ngx-jsonld-provider';

providers: [ NgxJsonLdProvider ]
```

Then you can inject ```NgxJsonLdProvider``` and use it anywhere in your application.
```
import { NgxJsonLdProvider } from 'ng-jsonld-provider';

class foo {
    constructor(private jsonld: NgxJsonLd) {
        const name = { 'http://schema.org/name': 'John Doe' };
        this.jsonld.expand(name).then(res => console.log(res));
    }
}
```
## Related

See also the JSON-LD NodeJS command line tool [jldc](https://github.com/Aaron-Sterling/jldc). Both ngx-jsonld-provider and jldc have as a dependency the official JSON-LD Javascript library [jsonld.js](https://github.com/digitalbazaar/jsonld.js/), written and supported by DigitalBazaar. Cory Rylan has written [ngx-json-ld](https://github.com/coryrylan/ngx-json-ld), which uses an Angular component (not a provider) to connect to JSON-LD operations; that project is interesting, but appears to be archived and at least temporarily frozen.

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

#### Compact
```compact(documentToCompact: JsonLdDocument, context: JsonLdDocument, options?: CompactOptions): Promise<JsonLd>```

Runs the JSON-LD compact algorithm on ```documentToCompact```, using the context in ```context```. Default value for ```options``` is ```{}```.

#### Expand
```expand(documentToExpand: JsonLdDocument, options?: ExpandOptions): Promise<JsonLd>```

Run the JSON-LD expand algorithm on ```documentToExpand```. Default value for ```options``` is ```{}```.

#### Flatten
```flatten(jsonldToFlatten: JsonLd, options?: FlattenOptions): Promise<JsonLd>```

Run the JSON-LD flatten algorithm on ```documentToFlatten```. Default value for ```options``` is ```{}```.

#### Frame
```frame(jsonldToFrame: JsonLd, frameToUse: JsonLd, options?: FrameOptions): Promise<JsonLd>```

Runs the JSON-LD frame algorithm on ```documentToFrame```, using the frame in ```frameToUse```. Default value for ```options``` is ```{}```.

#### Normalize
```normalize(jsonldToNormalize: JsonLd, options?: NormalizeOptions): Promise<JsonLd>```

Run the JSON-LD normalize algorithm (also called the canonize algorithm) on ```jsonldToNormalize```. Default value for ```options``` is ```{format: 'application/n-quads'}```.

#### ToRDF
```toRDF(jsonLdToTranslate: JsonLd, options?: ToRdfOptions): Promise<string>```

Converts the JSON-LD in ```jsonLdToTranslate``` to an RDF string. Default value for ```options``` is ```{format: 'application/n-quads'}```.

#### FromRDF
```fromRDF(rdf: string, options?: FromRdfOptions): Promise<JsonLd>```

Converts the RDF string in ```rdf``` to JSON-LD. Default value for ```options``` is ```{format: 'application/n-quads'}```

#### Register RDF Parser
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