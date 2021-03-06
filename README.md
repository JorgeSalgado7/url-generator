# URL Generator

## How it works?
This URL generator module allows you to sanitize any string and generate a URL-friendly version of it.

You can use it to generate a URL-friendly version of any string, and it will remove all non-alphanumeric and special characters, protecting your application from any possible attacks like:
- XSS (Cross-site scripting)
- SQL injection

### The folling characters will be remove:
|°¬!"#$%&/()=?'\¿¡´¨+~{}[]^`,;.:_@<>

## Getting started

- Install the module:

```sh
npm i @jorge-salgado/url-generator
```

- Use the module:

```js

const URL_GENERATOR = require('@jorge-salgado/url-generator');

URL_GENERATOR('String To Sanitize <script>alert(document.cookie)</script>');

//OUTPUT: 'string-to-sanitize-scriptalertdocumentcookiescript'


```

## Or if you prefer it, you can use the modules individually

### Sanitizer

```js

const SANITIZER = require('@jorge-salgado/url-generator/modules/sanitizer');

SANITIZER('string to sanitize <script>alert(document.cookie)</script>');

//OUTPUT: 'string to sanitize scriptalertdocumentcookiescript'


```
### URL Pattern

```js

const URL_PATTERN = require('@jorge-salgado/url-generator/modules/urlPattern');

URL_PATTERN('String To Sanitize');

//OUTPUT: 'string-to-sanitize'


```