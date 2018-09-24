# ngx-jsonld

Angular shim for the jsonld.js library. Inject an Angular provider to perform compact, flatten, expand, normalize, etc., algorithms on string, RDF, JSON, and JSON-LD inputs.

## Installation

```npm install ng-jsonld```

## Usage

Register the ```JsonLdService``` in ```app.module.ts```.
```
import { JsonLdService } from 'ng-jsonld';

providers: JsonLdService
```

Then you can inject ```JsonLdService``` and use it anywhere in your application.
```
import { JsonLdService } from 'ng-jsonld';

class foo {
    constructor(private jsonld: JsonLdService) {
        const example = 'some RDF string';
        jsonld.fromRDF(example).then(res => console.log(res));
    }
}
```
## Related

See also the JSON-LD command line tool [jldc](https://github.com/Aaron-Sterling/jldc). Both ng-jsonld and jldc have as a dependency the official JSON-LD Javascript library [jsonld.js](https://github.com/digitalbazaar/jsonld.js/), written and supported by DigitalBazaar.

## Types

## API
"# ngx-jsonld" 
