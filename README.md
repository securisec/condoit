# Condoit

Condoit is a JS/TS Node library compitable for the [Phabricator Conduit](https://secure.phabricator.com/conduit/method/) api. All the methods available are named using the same convention as the Conduit endpoints with the sole difference being camel cased instead of using the `.`. The library does offer intellisense for most methods due to development being done in TS. 

This library is being built around Phabricator commit hash `54bcbdaba94a3573e128c6498816dbfa41d3a9cb` pushed on Dec 13th 2019. This library includes most of the frozen methods found here, and future versions of Condoit may deprecate those methods if Phabricator depricates them.

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
