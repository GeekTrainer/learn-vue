The image below displays the content we have created so far in this training. If you have not performed the Coding Challenge in the previous module, `//TODO: add an array in your main.js file to display group discounts.`

```javascript
...
//TODO: Add an array of values to display group discount rates
group_discounts: ['$1,000 (each person) - groups of 3-4', '$1,250 (each person) - groups of 5-6', '$1,750 (each person) - groups of 7-10', '$2,500 (each person) - groups of 11 or more'],
...
```

Then `//TODO: add the following <h4> and <ul> tags in your HTML file.` We do not want either of these elements to be displayed unless there are seats available for booking.

```html
...
<!-- Add an <h4> tag to display a heading for a list of group discounts. The heading should not be displayed if no seats are available for booking. -->
<h4 v-show="num_seats_available > 0">Group Discounts</h4>
<!-- Add a <ul> tag to display the list of group discounts. The list should not be displayed if no seats are available for booking. -->
<ul v-show="num_seats_available > 0">
  <li v-for="group_discount in group_discounts">{{ group_discount }}</li>
</ul>
...
```

Your browser should now display content similar to the image below.

![Screenshot showing the HTML page with product name and description on the right, two paragraphs that read "Reservations available" in green text and "Early Bird discount 12% if you book by June 30, 2051" in blue text. Below this are lists for Passenger Rates and Group Discounts](../media/group-disount-array.png)

## Add objects we will use for event handling functionality

Let's add some thumbnail images below the selected product image for additional trip features that are available for booking. `TODO: Add the code snippets shown below to your index.html file`.

```html
...
<div class="product-container">
  <div class="product-images" >
    <a :href="company_url" target="_blank"><img :src="selected_prod_img"></a>
    <!-- //TODO: Add a <div> to contain a row of thumbnail images below the selected product image-->
    <div style="text-align:left; padding-top:0; height:200px;">
      <img src="./assets/images/space-4888643_1284x856.jpg" style="width:12%; margin-right:0px;">
      <img src="./assets/images/asteroid-5737398_1284x856.jpg" style="width:12%; margin-left:12px; margin-right:0px;">
      <img src="./assets/images/fantasy-5732286_1284x856.jpg" style="width:12%; margin-left:12px; margin-right:0px;">
      <img src="./assets/images/spaceship-5730066_1284x856.jpg" style="width:12%; margin-left:12px; margin-right:0px;">
    </div>
  </div>
...
```

`//TODO: Add a <div> for a cart under the navbar <div> at the top of the <body> section`.

```html
...
<div class="nav-bar"></div>
<!-- Add a <div> for a cart object that will display the number of items a user has added to the booking cart -->
<div class="cart">Cart (0)</div>
...
```

`//TODO: Add a button object at the bottom of the product description section that reads "Book a Cruise"`.

```html
...
<ul v-show="num_seats_available > 0">
  <li v-for="group_discount in group_discounts">{{ group_discount }}</li>
</ul>
<!-- Add a button that reads "Book a Cruise" -->
<button class="button">Book a Cruise</button>
...
```

Now that all new objects have been added to the HTML page, it should look like the image shown below.

![Screenshot showing the same HTML page as above, with four thumbnail images now added below the selected product image on the left side. In the product details area on the right side a cart object has been added to the top right corner, with 0 items currently in the car. A button with that reads "Book a Cruise" is displayednow  at the bottom of the product details area.](../media/thumbnails_cart_button.png)

## Event handling using inline data properties

In your **main.js** file `//TODO: add a cart object as a data property, with an initial value of 0.` Let's put it at the top of our data properties listing for easy reference.

```javascript
...
const app = Vue.createApp({
    data() {
        return {
            //TODO: add a cart property with an initial value set to 0
            cart: 0,
            product_name: 'Book a Cruise to the Moon',
...
```

We want to be able to click the button and add a booking item to the cart. Currently we have a value of "0" hard-coded in the Cart display. To make the cart value dynamic, we tell Vue to insert the current value of cart, which will change based on user behaviors.

`//TODO: Enter the cart value placeholder in the cart <div> in your index.html file to replace the literal 0 that we coded there initially`.

```html
...
<!-- //TODO: Enter the cart value placeholder {{ cart }} in the cart <div> to display the current value of cart instead of a hard-coded value. -->
<div class="cart">Cart ({{ cart }})</div>
...
```

To see if this value displays accurately, you can temporarily change the value of cart in your main.js file and render your HTML page in the browser to see if it correctly renders the new value.

Now we need to enable the button to change the value of the art dynamically when the user clicks it. We do this by adding a "listener" that will change the value of cart whenever a click action occurs. This is accomplished in Vue by adding the `v-on` directive to our button element. The syntax would be `v-on:click="cart += 1"`.

`//TODO: Use the v-on:click directive to add 1 to the value of cart when the button is clicked.` An example is shown in the code snippet below.

```html
...
<!-- //TODO: Add a button that reads "Book a Cruise"-->
<!-- //TODO: Use the v-on:click directive to add 1 to the value of cart each time the button is clicked-->
<button class="button" v-on:click="cart += 1">Book a Cruise</button>
...
```

In the code example above, `v-on` is the Vue directive, `click` is the event we are listening for, and `cart += 1` is the expression we are using to calculate the value of `cart` whenever the `click` event occurs.

After you add the `v-on` directive to the button element in your HTML file and render it in the browser, you should be able to click the button multiple times and watch the number displayed in the cart object increment by a value of 1 for each click.
