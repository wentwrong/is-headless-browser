# is-headless-browser

An ES5-compatible NPM package that uses lightweight heuristics to detect headless browsers and browser automation tools.

## Quick Start

Run

```sh
npm i is-headless-browser
```

And add for your page

```javascript
import { isHeadlessBrowser } from "is-headless-browser";

if (isHeadlessBrowser()) {
  // display content for bots
} else {
  // display content for real users
}
```

See [example.html](./example.html)

## Limitations

This package functions by checking for the presence of well-known properties, such as [navigator.webdriver](https://developer.mozilla.org/docs/Web/API/Navigator/webdriver), which are indicative of browser automation tools. It is designed to be compact and quick to execute while minimizing false positives by leveraging the most reliable indicators of automation.

These checks are not intended to detect sophisticated automation tools that use advanced evasion techniques, such as [Puppeteer with Stealth Plugin](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth). If you need to detect such tools, be prepared for greater complexity and computational overhead, such as intercepting the execution of native browser functions using [Proxy](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy) (like [brotector](https://github.com/kaliiiiiiiiii/brotector)) and such.

## References

- [detect-headless](https://github.com/infosimples/detect-headless)
- [brotector](https://github.com/kaliiiiiiiiii/brotector)
- [commercial-bot-detectors](https://github.com/chris124567/commercial-bot-detectors)
