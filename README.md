# telefonilo.js 

[![Build Status](https://travis-ci.org/Fcmam5/telefonilo.js.svg?branch=develop)](https://travis-ci.org/Fcmam5/telefonilo.js) [![GitHub license](https://img.shields.io/github/license/Fcmam5/telefonilo.js.svg)](https://github.com/Fcmam5/telefonilo.js/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/telefonilo.js.png)](https://www.npmjs.com/package/telefonilo.js)
[![Open Source Helpers](https://www.codetriage.com/fcmam5/telefonilo.js/badges/users.svg)](https://www.codetriage.com/fcmam5/telefonilo.js)


Tiny JavaScript library, for making **Phone call links**, for modern mobile web browsers, this library is not needed, phone numbers are automatically detected, but on older ones, it's not, and if you manage to add a `<a href='tel:XXX'>` it may be clickable by non-mobile users and the link will lead to a wrong web page.

The name is from `telefonillo` means `Call him` (in Algerian dialect), and I found that it means `Door Phone` in [Spanish](https://en.wikipedia.org/wiki/Door_phone).

> ***TLDR:** JS library for creating "click to call" links for mobile users.*

### Features

* Replaces a selector containing the phone number with a clickable `<a href=tel://###>` if the visitor is on mobile device.
* Accepts a decryption functions, you can write a crypted phone numbers in your markup to avoid crawlers, then pass your decryption function to Telefonilo contructor so it decrypt the phone number. `Have an issue? A better trick? Open an issue, we'd like to hear from you!`
* Have an option of **Automatically detects phone numbers on the pages** (might be needed for older versions of mobile browsers, the modern browsers already have this feauture). [On progress](#todo)

## Usage

1. Inlude the `telefonilo.js` script in you HTML.
2. Instantiate Telefonilo by calling `Telefonilo();`. you can pass a selector of the tags containing phone numbers (ex: `Telefonilo('#my-phone-number')` or `Telefonilo('.phone-numbers')`) By default Telefonilo lookup for `.phone-num` classes.

### Example

```html
<div class="container">
    <p>
        If you're on a mobile phone you should click on<span class="phone">0123456789</span>
    </p>
</div>
<script src="../dist/telefonilo.js"></script>
<script>Telefonilo('.phone'); </script>
```
### Using an encryption method

To avoid spam and crawlers, you may want to encrypt phone numbers on your web pages. For example, you're using `encryptionFct` to encrypt phone numbers when rendering your page:

```javascript
function encryptionFct(str){
    return str.split('').map(n => (n.charCodeAt(0)+5)).join('-')
}
// encryptionFct('0123456789') Will return "53-54-55-56-57-58-59-60-61-62"
```

```html
    <p>
        If you're on a mobile phone you should click on
        <span class="phone">53-54-55-56-57-58-59-60-61-62</span>
    </p>
```

Then you can load `Telefonilo` and pass you decryption function, for example

```html
    <p>
        If you're on a mobile phone you should click on
        <span class="phone">53-54-55-56-57-58-59-60-61-62</span>
    </p>

    <script src="../dist/telefonilo.js"></script>
    <script>
        var decrypTionFct = function(str) {
            return str.split('-').map(n => String.fromCharCode(n-5)).join('');
        }

        // Initialize Telefonilo inside a captcha-check callback, or after a certain time/event to avoid crawlers
        Telefonilo('.phone', true, decrypTionFct);
    </script>
```

### Try Telephonilo.js

* Open [examples/example.html](https://fcmam5.github.io/telefonilo.js/examples/example.html) in any web browser.
* If you're not on mobile, you should see the phone number as a normal test.
* Press `Ctrl+Shift+M`, you should switch to the mobile view, you should see that the phone number became a clickable.

#### Output
* Desktop users will see the output as you markup should render
>  <p>If you're on a mobile phone you should click on <span class="phone">0123456789</span></p>

* Mobile users will see a `<a href="tel://xxxx">` link to your phone number
>  <p>If you're on a mobile phone you should click on <span class="phone"><a href="tel://0123456789">0123456789</a></span></p>
 
 ```html
  <p>If you're on a mobile phone you should click on <span class="phone"><a href="tel://0123456789">0123456789</a></span></p> 
  ```

## Building and testing

### Tests

```bash
# Running unit tests with Jest
$ npm test # Or: npm run watch-tests

# Getting the test coverage, it creates a [./coverage] directory
$ npm run coverage
```

### Build

The file [src/telefonilo.js](./src/telefonilo.js) is not production-ready, it exports the private functions in order to test them. To use Telefonilo, you can find two files (minified and unminified verion) in [dist/](./dist/). 

```bash
# Build with Gulp, it generates two files
$ npm run build
```

The generated `dist/telefonilo.js` is a copy of `src/telefonilo.js` without that peice of code that exports the private functions. To verify run:

```bash
$ diff src/telefonilo.js dist/telefonilo.js
```

## TODO

- [ ] Write tests. `Doing...`
- [x] Setup a test API: Export private functions in developement mode, and strip that piece of code when building the minified function for  production usage
- [x] Accept phone number decryption functions as parameter for decrypting phone numbers (Might be a anti-crawlers solution).
- [ ] Add option: Detect phone numbers automatically `Doing...`.

## License

This project is licensed under the GNU GPL v3.0 License - see the [LICENSE](./LICENSE) file for details
