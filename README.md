# Condoit

Condoit is a JS/TS Node library compitable for the [Phabricator Conduit](https://secure.phabricator.com/conduit/method/) api. All the methods available are named using the same convention as the Conduit endpoints with the sole difference being camel cased instead of using the `.`. The library does offer intellisense for most methods due to development being done in TS.

## Installation
```bash
npm install condoit
```

## Usage
All the methods returns a promise. 

### JS
```js
const { Condoit } = require('condoit')

let condoit = new Condoit('https://path/to/phabricator', 'api-token')
condoit.userWhoami().then(data => console.log(data))
```

### TS
```ts
import { Condoit } from 'condoit'

let condoit = new Condoit('https://path/to/phabricator', 'api-token')
condoit.userWhoami().then(data => console.log(data))
```
