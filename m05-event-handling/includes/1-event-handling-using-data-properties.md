The HTML file that is available in the code start folder for this module looks like the screenshot below when viewed in your browser.

![Screenshot showing the HTML page with a selected produce image on the left and 4 thumbnail images below it. Product name and description are displayed on the right, with two paragraphs of text. Below this are unordered lists for Passenger Rates and Group Discounts](../media/m05-start.png)

## Add objects we will use for event handling functionality

Now let's create a couple of new objects in the **index.html** file that we can use to implement event handling functionality.
- Add a `<div>` for a cart under the `navbar <div>` at the top of the `<body>` section.
- Then add a button titled **Book a Cruise** to appear at the bottom of the product description area under the **Group Discounts** list.

```html
...
<div class="nav-bar"></div>
<!-- Add a <div> for a cart object that will display the number of items a user has added to the booking cart -->
<div class="cart">Cart (0)</div>
...
<ul v-show="numSeatsAvailable > 0">
  <li v-for="groupDiscount in groupDiscounts">{{ groupDiscount }}</li>
</ul>
<!-- Add a button that reads "Book a Cruise" -->
<button class="button">Book a Cruise</button>
...
```

Now that these new objects have been added to the HTML page, it should look like the image shown below.

![Screenshot showing the same HTML page as above. In the product details area on the right side a cart object has been added at the top right corner, with 0 items currently in the cart. A button that reads "Book a Cruise" is displayed at the bottom of the product details area under the Group Discounts list.](../media/thumbnails_cart_button.png)

## Event handling using inline data properties

We want to be able to click the button and have Vue increment the booking number in the cart. Currently we have a value of "0" hard-coded in the Cart display. To make the cart value dynamic, we tell Vue to insert the current value of `cart`, which will change based on user behaviors.

Enter the `cart value` property in the `cart <div>` in your **index.html** file to replace the literal 0 that we coded there initially. Keep the parentheses () intact, with the value of `cart` in curly braces within them ({ }).

```html
...
<!-- //TODO: Enter the cart value property {{ cart }} in the cart <div> to display the current value of cart instead of a hard-coded value. -->
<div class="cart">Cart ({{ cart }})</div>
...
```

To see if this value displays accurately, you can temporarily change the value of cart in your **main.js** file and render your HTML page in the browser to see if the cart correctly displays your new value.

Now we need to enable the button to change the value of the art dynamically when the user clicks it. We do this by adding a "listener" that will change the value of cart whenever a click action occurs. This is accomplished in Vue by adding the `v-on` directive to our button element. The syntax would be `v-on:click="cart += 1"`. An example is shown in the code snippet below.

```html
...
<!-- //TODO: Add a button that reads "Book a Cruise"-->
<!-- //TODO: Use the v-on:click directive to add 1 to the value of cart each time the button is clicked-->
<button class="button" v-on:click="cart += 1">Book a Cruise</button>
...
```

In the code example above, `v-on` is the Vue directive, `click` is the event we are listening for, and `cart += 1` is the expression we are using to calculate the value of `cart` whenever the `click` event occurs.

After you add the `v-on` directive to the button element in your HTML file and render it in the browser, you should be able to click the button multiple times and watch the number displayed in the cart object increment by a value of 1 for each click.
