Let's start with a simple example to demonstrate conditional rendering. In this section, we will add two `<p>` tags to your HTML page, then direct the browser to display only one of these elements based on whether reservations are still available for a particular product, or whether the product is already booked to capacity.

In your **index.html** file, create an `<h3>` tag under the `<h2>` tag for display of a product description. Next create two new `<p>` tags under the new `<h3>` tag. Example HTML text is shown below.

```html
<h2>{{ product_name }}</h2>
<h3>{{ product_desc }}</h3>
<p style="color:green;">Reservations available</p>
<p><span style="color:red;">Sold out</span> Please check back for our next available shuttle.</p>
```

We only want one of the two new paragraphs to be displayed in our browser, depending on availability of bookings. In order to create a conditional statement based on some sort of logic, we need to set up a few more properites in our application data() object. Add a `seats_available` property in your **main.js** file, and set the value to "true" to initialize it as a boolean.

Also add a `product_desc` property in your **main.js** file that you will use to render a product description inside the new `<h3>` tag. An example is included in the code shown below.

```javascript
seats_available: true,
product_desc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
```

>[!NOTE]
>Notice that text values like `product_desc` must be surrounded with quotation marks in your Vue application, while boolean and numeric values do not need to be entered between quotes.

If you render the HTML file now, you will see the new product description and both new paragraphs will be displayed underneath, as shown in the image below.

![Screenshot showing the HTML page with new product description on the right, and two new paragraphs underneath.](../media/desc-and-two-paragraphs.png)

## v-if and v-else

Now we can apply the combination of directives `v-if` and `v-else` to display the first paragarph if `seatsAvailable` is true, or display the second paragraph if it is false. Modify your HTML file as shown in the code snippet below.

```html
...
 <div class="product-desc">
   <h2>{{ product_name }}</h2>
   <h3>{{ product_desc }}</h3>
   <p v-if="seats_available" style="color:green;">Reservations available</p>
   <p v-else><span style="color: red">Sold out!</span> Please check back for our next available shuttle.</p>
</div>
...
```

>[!NOTE]
>Notice that the `v-if` directive is written as a full name/value pair, with `v-if` as the name of the directive and `seatsAvailable` in quotes following the equal sign to designate the value of that property, which is fetched from the Vue application file. Since the `v-else` directive will function regardless of any other value for that property, we only include the name of the directive in the last paragraph.

It is technically not necessary to use the `v-else` directive if you do not need to display an alternative. You can simply use a `v-if` statement to either display an element or not. However, if you do use the `v-else` directive it must be located directly under the `v-if` directive (i.e., no other HTML tags or lines of code should separate `v-if` and `v-else`).

On the other hand, you could use a simpler `v-show` directive, as explained in the next section.

## v-show

The `v-show` directive provides an easy way to change the visibility of an element rather than completely removing it from the DOM the way `v-if` does. We can toggle an element's `display` attribute off or on. An element on an HTML page can be hidden by using an inline style of `display:none`. The `v-show` directive can be used to change the `display` property.

Let's use a new paragraph of text to illustrate the `v-show` directive. Add the following `<p>` tag under the previous two paragraphs, as shown below.

```html
<p v-show="earlybird" style="color: blue">Early Bird discount 12% if you book by December 20, 2050!</p>
```

We want this new paragraph to be displayed whenever we are running our **Early Bird** special. So we also need to create an earlybird property in the data() component of our Vue app, as shown below:

```javascript
earlybird: true,
```

When you display the page in Live View, you will see that the new paragraph containing text about the **Early Bird Discount** is missing. The Vue `v-show` directive accomplishes this by setting a `style` on the `<p>` tag that instructs the browser not to display that paragraph. It would then appear in the HTML page as shown below.

```html
<p style="display:none">Early Bird discount 12% if you book by December 20, 2050!</p>
```

The paragraph element still exists in the DOM, but it is hidden from display based on that style setting that is added by Vue. This makes `v-show` a good directive to use if you plan to toggle the visibility of an HTML element several times, since it speeds up processing if the element does not need to be removed from the DOM.

## Add layers of conditional logic

Currently our product description area on the right side of our HTML page is structured like the example below:

```html
<div class="product-desc">
  <h2>{{ product_name }}</h2>
  <h3>{{ product_desc }}</h3>
  <p v-if="seats_available" style="color:green;">Reservations available</p>
  <p v-else><span style="color: red">Sold out!</span> Please check back for our next available shuttle.</p>
  <p v-show="earlybird" style="color: blue">Early Bird discount 12% if you book by December 20, 2050!</p>
</div>
```

Suppose we want to implement more complex conditional logic based upon more than the two options that are available to us when using a boolean value (i.e., true or false). To do this, we want to create a property that is based on a numeric value so that we can create a range of options along a mathematical scale. Add a new property in your **main.js** file named `num_seats_available` and set it to a value of 100, as shown below.

```javascript
const app = Vue.createApp({
    data() {
        return {
          ...
          num_seats_available: 100,
				}
    }
})
```

Now we can display 1 of 3 paragraphs in our HTML interface by using a stacked combination of `v-if`, `v-else-if`, and `v-else` directives.

We want to display the first `<p>` tag if more than 12 seats are available for booking; or display a new 2nd paragraph with the text **Almost Sold Out** if there are 12 or fewer seats available (but we are not yet fully booked); or display the **Sold Out** third paragraph if no seats are available on our space shuttle. Furthermore, we might not want to offer the Early Bird discount if there are 12 or fewer seats available for booking.

To accomplish these objectives, change the `<p>` tags in your **index.html** file as shown below. We have also added a condition to our existing paragraph that uses the `v-show` directive. It is important to note that the `v-show` directive is placed below the `v-if` through `v-else` directives.

```html
<div class="product-desc">
  <h2>{{ product_name }}</h2>
  <h3>{{ product_desc }}</h3>
  <p v-if="num_seats_available >= 12" style="color:green;">Reservations available</p>
  <p v-else-if="num_seats_available < 12 && num_seats_available > 0" style="color:red;">Almost Sold Out!</p> 
  <p v-else><span style="color: red">Sold out!</span> Please check back for our next available shuttle.</p>
  <p v-show="earlybird && num_seats_available > 12" style="color: blue">Early Bird discount 12% if you book by December 20, 2050!</p>
</div>
```

You can verify whether your code works as expected by changing the value of the `num_seats_available` property in your **main.js** file and then viewing the HTML output in the browser. If you enter **26 as the value**, you should see a display like the screenshot below, which includes the top `v-if` paragraph and the Early Bird discount.

![Screenshot showing the HTML page with product name, product description and expected paragraphs displayed on the right based on a value of 26 for the variable num_seats_available. The paragraphs should read "Reservations available" and "Early Bird discount 12% if you book by December 20, 2050!"](../media/conditional-paragraphs-at-26-seats.png)

If you enter a **value of 12** for `num_seats_available`, your display should look the image below. The second paragraph `v-else-if` statement is now showing, but the Early Bird paragraph is hidden.

![Screenshot showing the HTML page with product name, product description and expected paragraphs displayed on the right based on a value of 12 for the variable num_seats_available. The only paragraph that should be displayed reads "Almost Sold Out!"](../media/conditional-paragraphs-at-12-seats.png)

If you enter a **value of 0** for `num_seats_available`, your display should look the image below. The third paragraph (`v-else`) statement is now showing, and the Early Bird discount remains hidden.

![Screenshot showing the HTML page with product name, product description and expected paragraphs displayed on the right based on a value of 0 for the variable num_seats_available. The only paragraph that should be displayed reads "Sold Out! Please check back for our next available shuttle."](../media/conditional-paragraphs-at-0-seats.png)