# URL Generator

## How it works?
This URL generator module allows you to sanitize any string and generate a URL-friendly version of it.

You can use it to generate a URL-friendly version of any string, and it will remove all non-alphanumeric and special characters, protecting your application from any possible attacks like:
- XSS (Cross-site scripting)
- SQL injection

## Getting started

- Install the module:

```sh
npm i @jorge-salgado/url-generator
```

## Or if you prefer you can use the modules individually

### Sanitizer

```js

const SANITIZER = require('@jorge-salgado/url-generator/modules/sanitizer');

SANITIZER('string to sanitize <script>alert(document.cookie)</script>');

//OUTPUT: 'string to sanitize scriptalertdocumentcookiescript'


```
