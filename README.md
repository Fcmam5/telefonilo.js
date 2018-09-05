# telefonilo.js

Tiny JavaScript library, for making **Phone call links**, for modern mobile web browsers, this library is not needed, phone numbers are automatically detected, but on older ones, it's not, and if you manage to add a `<a href='tel:XXX'>` it may be clickable by non-mobile users and the link will lead to a wrong web page.

The name is from `telefonillo` means `Call him` (in Algerian dialect), and I found that it means `Door Phone` in [Spanish](https://en.wikipedia.org/wiki/Door_phone).

> ***TLDR:** JS library for creating "click to call" links for mobile users.*

## Usage

1. Inlude the `telefonilo.js` script in you HTML.
2. Instantiate Telefonilo by calling `Telefonilo();`, you can pass a selector of the tags containing phone numbers (ex: `Telefonilo('#my-phone-number')` or `Telefonilo('.phone-numbers')`) By default Telefonilo lookup for `.phone-num` classes.

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

### Try Telephonilo.js

* Open [examples/example.html](https://fcmam5.github.io/telefonilo.js/examples/example.html) in any web browser.
* If you're not on mobile, you should see the phone number as a normal test.
* Press `Ctrl +Shift+M`, you should switch to the mobile view, you should see that the phone number became a clickable.

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
$ npm test

# Getting the test coverage, it creates a [./coverage] directory
$ npm run coverage
```

### Build

The file [./src/telefonilo.js](./src/telefonilo.js) is not production-ready, it exports the private functions in order to test them. To use Telefonilo, you can find two files (minified and unminified verion) in [dist/](./dist/). 

```bash
# Build with Gulp, it generates two files
$ npm run build
```

The generated `dist/telefonilo.js` is a copy of `src/telefonilo.js` without that peice of code that exports the private functions. To verify run:

```bash
$ diff src/telefonilo.js dist/telefonilo.js
```

## TODO

- [ ] Write tests
- [ ] Setup a test API: Export private functions in developement mode, and strip that piece of code when building the minified function for  production usage
- [ ] Accept phone number decryption functions as parameter for decrypting phone numbers (Might be a anti-crawlers solution).
- [ ] Add a method of auto phone numbers detection feature.

## License

This project is licensed under the GNU GPL v3.0 License - see the [LICENSE](./LICENSE) file for details
