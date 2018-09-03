# telefonilo.js

Tiny JavaScript library, for making **Phone call links**, for modern mobile web browsers, this library is not needed, phone numbers are automatically detected, but on older ones, it's not, and if you manage to add a `<a href='tel:XXX'>` it may be clickable by non-mobile users and the link will lead to a wrong web page.

The name is from `telefonillo` means `Call him` (in Algerian dialect), and I found that it means `Door Phone` in [Spanish](https://en.wikipedia.org/wiki/Door_phone).

> ***TLDR:** JS library for creating "click to call" links for mobile users.*

## Usage

1. Inlude the `telefonilo.js` script in you HTML.
2. Instantiate Telefonilo by calling `Telefonilo();`, you can pass a selector of the tags containing phone numbers (ex: `Telefonilo(#my-phone-number)` or `Telefonilo(.phone-numbers)`) By default Telefonilo lookup for `.phone-num` classes.

### Example

```html
<div class="container">
    <p>
        If you're on a mobile phone you should click on<span class="phone">0123456789</span>
    </p>
</div>
<script src="../src/telefonilo.js"></script>
<script>Telefonilo('.phone'); </script>
```

#### Output
* Desktop users will see the output as you markup should render
>  <p>If you're on a mobile phone you should click on <span class="phone">0123456789</span></p>

* Mobile users will see a `<a href="tel://xxxx">` link to your phone number
>  <p>If you're on a mobile phone you should click on <span class="phone"><a href="tel://0123456789">0123456789</a></span></p>
 
 ```html
  <p>If you're on a mobile phone you should click on <span class="phone"><a href="tel://0123456789">0123456789</a></span></p> 
  ```

## License

This project is licensed under the GNU GPL v3.0 License - see the [LICENSE](./LICENSE) file for details
