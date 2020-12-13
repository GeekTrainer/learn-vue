## Combine more than one property value in a conditional directive

Suppose we need to implement complex conditional logic based upon more than just the two options that are available to us when using a boolean value (i.e., true or false). Vue allows us to specify more than one condition within a directive. Furthermore, we can control the display more precisely by using our numeric property `numSeatsAvailable`, because it allows us to create conditional logic based upon a mathematical scale of values.

Since we can ask our Vue application to make a decision based on more than one property and more than one value for a given property, we will leave the `v-show=earlybird` condition in place on our Early Bird paragraph. Now add some conditional logic to specify that this paragraph will only be displayed if the Early Bird special is running and more than 12 seats are available for booking. Example code is shown below.

```html
...
<h3>{{ product_desc }}</h3>
<p v-if="seats_available" style="color:green;">Reservations available</p>
<p v-else><span style="color:red;">Sold out</span> Please check back for our next available shuttle.</p>
<!-- //TODO: Expand the logic in the v-show directive to display this <p> if earlybird is "true", but only if more than 12 seats are available for booking -->
<p v-show="earlybird && num_seats_available > 12" style="color: blue">Early Bird discount 12% if you book by December 20, 2050!</p>
...
```

This produces a page display like the one shown below because both conditions are currently being met; i.e., `earlybird` has a value of "true" AND `numSeatsAvailable` is 100, which is greather than 12.

If we then change the `numSeatsAvailable` value to 11, we will still see the "Reservations available" paragraph, but the Early Bird discount will not be displayed. That way our marketing department will not have to worry about changing the value of `earlybird` manually unless they want to disable the discount for other reasons.

![Screenshot showing the HTML page with image on the left. On the right are text fields for product name, product description, and text in green font that reads "Reservations available". Blue text in the paragraph below reads "Early Bird discount 12% if you book by December 20, 2050!".](../media/conditional-paragraphs-at-26-seats.png)

## Layers of Conditional Logic

Now lets display 1 of 3 paragraphs in our HTML interface by using a stacked combination of `v-if`, `v-else-if`, and `v-else` directives based on the **number of seats** available at any given point in time. We want to manage the following conditions:

- Display the first `<p>` tag (Reservations available) if more than 12 seats are available for booking; OR
- Display a NEW 2nd paragraph with the text **Almost Sold Out!** if there are 12 or fewer seats available (but we are not yet fully booked); OR
- Display the **Sold Out!** paragraph if no seats are available on our space shuttle.
- The `v-show` directive on the Early Bird discount paragraph remains, but it must be located at the bottom so that it will not interfere with the `v-if`, `v-else-if`, and `v-else` directives.

To accomplish these objectives, change the `<p>` tag directives in your **index.html** to reflect the appropriate `v-if`, `v-else-if`, `v-else`, and `v-show directives`, as displayed in the code snippet below.

```html
<div class="product-desc">
  <h2>{{ product_name }}</h2>
  <h3>{{ product_desc }}</h3>
  <!-- //TODO: change the <p> tag directives to reflect the appropriate v-if, v-else-if, v-else, and v-show conditions -->
  <p v-if="numSeatsAvailable > 12" style="color:green;">Reservations available</p>
  <p v-else-if="numSeatsAvailable <= 12 && numSeatsAvailable > 0" style="color:red;">Almost Sold Out!</p> 
  <p v-else><span style="color: red">Sold out!</span> Please check back for our next available shuttle.</p>
  <p v-show="earlybird && numSeatsAvailable > 12" style="color: blue">Early Bird discount 12% if you book by December 20, 2050!</p>
</div>
```

In the examples above we have used `>=` or `<` in the mathematical formulas for comparison of the value in `numSeatsAvailable`. It is important to understand that if any of your expressions involve the use of an equals sign, you must use a double equals (`==`) in your expression. For example: `v-show="numSeatsAvailable == 0"`.

You can verify whether your code works as expected by changing the value of the `numSeatsAvailable` property in your **main.js** file and then viewing the HTML output in the browser.

If you enter a **value of 0** for `numSeatsAvailable`, your display should look the image below. The `v-else` statement is showing, and the Early Bird discount is hidden.

![Screenshot showing the HTML page with product name, product description and expected paragraphs displayed on the right based on a value of 0 for the property num_seats_available. The only paragraph that should be displayed reads "Sold Out! Please check back for our next available shuttle."](../media/conditional-paragraphs-at-0-seats.png)

If you enter a **value of 12** for `numSeatsAvailable`, your display should look the image below. The second paragraph `v-else-if` statement is now showing, but the Early Bird paragraph is hidden.

![Screenshot showing the HTML page with product name, product description and expected paragraphs displayed on the right based on a value of 12 for the property numSeatsAvailable. The only paragraph that should be displayed reads "Almost Sold Out!"](../media/conditional-paragraphs-at-12-seats.png)

If you enter **26 as the value**, you should see a display like the screenshot below, which includes the top `v-if` paragraph plus the Early Bird discount statement.

![Screenshot showing the HTML page with product name, product description and expected paragraphs displayed on the right based on a value of 26 for the property num_seats_available. The paragraphs should read "Reservations available" and "Early Bird discount 12% if you book by December 20, 2050!"](../media/conditional-paragraphs-at-26-seats.png)
