Our sample project is a fictitious travel agency for booking space travel. We want to allow a customer to add a cruise to their cart. We'll do this by creating a section on the page to display the number of items currently in the cart, and then a button for them to add an item.

## Add the cart display

Open **index.html** either from the [starter code](link), or your existing project if you are following along from prior modules.

- Add a `<div>` for the cart below the comment that reads `TODO: Add cart div`
  - Set the `class` for the `div` to **cart**
  - Set the text to **Cart ({{ cart }})**

```html
<!-- TODO: Add cart div -->
<div class="cart">Cart ({{ cart }})</div>
```

`cart` is the variable used to store the number of items currently in the cart. It is stored in the data we registered with Vue.js in the **main.js** file. By using the `{{ }}` syntax (sometimes known as handlebars), we are instructing Vue.js to display the value.

- Add a `button` to allow someone to book a cruise below the comment that reads `TODO: Add book cruise button`
  - Set the `class` to **button**
  - Set the text to **Book a Cruise**

```html
<!-- TODO: Add book cruise button -->
<button class="button">Book a Cruise</button>
```

To see if this value displays accurately, you can temporarily change the value of cart in your **main.js** file and render your HTML page in the browser to see if the cart correctly displays your new value.

## Add the book cruise button

Now we need to enable the button to change the value of the art dynamically when the user clicks it. We do this by adding a **listener** that will change the value of cart whenever a click action occurs. This is accomplished in Vue by adding the `v-on` directive to our button element.

- Add a `button` below the comment that reads `TODO: Add book cruise button`
  - Set the `class` to **button**
  - Set the `v-on:click` attribute to **cart += 1**

```html
<!-- TODO: Add book cruise button -->
<button class="button" v-on:click="cart += 1">Book a Cruise</button>
```

In the code example above, `v-on` is the Vue directive, `click` is the event we are listening for, and `cart += 1` is the expression we are using to calculate the value of `cart` whenever the `click` event occurs. The expression can be any valid JavaScript or, as we'll see in the next unit, the name of a function.

After you add the `v-on` directive to the button element in your HTML file, launch it and render it in the browser, you should be able to click the button multiple times and watch the number displayed in the cart object increment by a value of 1 for each click.
