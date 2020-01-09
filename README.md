[![](https://img.shields.io/badge/Docs-Docs-00a02e?logo=github&style=for-the-badge&color=0000ff)](https://securisec.github.io/condoit/)
![](https://img.shields.io/npm/v/condoit?style=for-the-badge)

# Condoit

Condoit is a Promise based JS/TS Node library compitable for the [Phabricator Conduit](https://secure.phabricator.com/conduit/method/) api. All the methods available are named using the same convention as the Conduit endpoints. The library does offer intellisense for most methods.

This library is being built around Phabricator commit hash `54bcbdaba94a3573e128c6498816dbfa41d3a9cb` pushed on Dec 13th 2019. This library includes most of the frozen methods found here, and future versions of Condoit may deprecate those methods if Phabricator depricates them.

## Installation

```bash
npm install condoit
```

## Usage

All the methods returns a promise.

### JS

```js
const { Condoit } = require('condoit');

let condoit = new Condoit('https://path/to/phabricator', 'api-token');
condoit.user.whoami().then((data) => console.log(data));
```

### TS

```ts
import { Condoit } from 'condoit';

let condoit = new Condoit('https://path/to/phabricator', 'api-token');
condoit.user.whoami().then((data) => console.log(data));
```

### Examples

```js
const { Condoit } = require('condoit');
let condoit = new Condoit('http://phabricator.my.domain/', 'api-token...');
```

#### Create a new project

```js
condoit.project
	.edit({
		transactions: [
			{ type: 'name', value: 'Hello world project' },
			{ type: 'color', value: 'green' }
		]
	})
	.then((res) => {
		console.dir(res, { depth: null });
	})
	.catch((error) => console.log(error));
```

#### Create a new Maniphest task

```js
condoit.maniphest
	.edit({
		transactions: [
			{ type: 'title', value: 'New task' },
			{ type: 'projects.add', value: ['PHID-PROJ-projectid'] }
		]
	})
	.then((res) => {
		console.dir(res);
	})
	.catch((error) => console.log(error));
```

#### Add a token to a task

```js
condoit.token
	.give({ objectPHID: 'PHID-TASK-projectid', token: 'Love' })
	.then((res) => {
		console.dir(res);
	})
	.catch((error) => console.log(error));
```

#### Search for Diffusion commits

```js
condoit.diffusion
	.commitSearch()
	.then((res) => {
		console.dir(res, { depth: null });
	})
	.catch((error) => console.log(error));
```
