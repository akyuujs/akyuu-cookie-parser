# Akyuu Cookie Parser

Cookie parser for Akyuujs.

> It's based on [cookie-parser](https://www.npmjs.com/package/cookie-parser) of Expressjs.

## Installation

```sh
$ npm install --save -d akyuu-cookie-parser
```

## Usage

Install this package and add configuration section below to your plugins section of configuration in Akyuu.js.

```js
{
    enabled: true,
    secret: "SOME SALT",

    // OTHER OPTIONS
    // refer to
    // https://www.npmjs.com/package/cookie-parser#cookieparsersecret-options
}
```
