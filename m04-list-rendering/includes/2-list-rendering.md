If you completed the prior exercises, your HTML file should look like the image below when viewed in a browser. You can continue to build upon your own files, or you can use the the files in our [`starting code`](link). If the `data()` property setting for `numSeatsAvailable` is set to `0`, the text in the product detail section will inform users that this cruise is "Sold out!", and will ask them to check back in February, 2051 to book seats on the next cruise shuttle.

![Screenshot showing the HTML page with a selected product image on the left; product name and description are shown on the right, followed by two paragraphs that read "Sold out! Please check back for our next available shuttle." and "Bookings for our next cruise shuttle will be available in February, 2051.](../media/m4-html-start.png)

## List Arrays

Now we want to add information about the pricing of different seats available on the cruise shuttle, and it only makes sense to display that information if it is possible to book a cruise, so change the value of `numSeatsAvailable` to 75 in your **main.js** file. The information display will now reveal more appropriate information, as shown below.

![Screenshot showing the HTML page with a selected product image on the left; product name, product description and expected paragraphs displayed are based on a value of 75 for numSeatsAvailable. The paragraphs read "Reservations available" and "Early Bird discount 12% if you book by June 30, 2051!"](../media/conditional-paragraphs-at-75-seats.png)

Note that we changed the date for the Early Bird discount paragraph to account for the change in cruise dates. We now want to offer the discount if people book a cruise by **June 30, 2051**, but only while fewer than 12 seats are available for booking.

First, add an array data property in your **main.js** file with a list of available Passenger Rates, which are shown in the code snippet below. Array properties have the following characteristics:

- an array is a set of multiple items assigned as the values for a single property
- each item in this array is surrounded by quotes because the array elements are text values
- each array item is separated from the next with a comma (,)

```javascript
...
//TODO: Add an array of values to display available passenger rates
passengerRates: ['$125,000 - Coach class', '$150,000 - Business class', '$250,000 - First class', '$400,000 - First class with sleeping berth'],
...
```

Now that our list array is defined in the VueJS application, it is a very simple matter to display these elements on our HTML page in either an ordered list `<ol>` tag or an unordered list tag.

Add an unordered list tag `<ul>` in your **index.html** file to display passenger rates. The list should not be displayed unless seats are available for booking.

Also add an `<h3>` tag above the `<ul>` tag to serve as a heading that defines this list as "Passenger Rates". As with the list of rates, the heading should not be displayed unless seats are available for booking.

We will use the `v-for` directive to iterate through the list of Passenger Rates defined in the **main.js** file. It is common practice to define array variables with a plural word because by definition an array will contain more than one item. For this purpose we named our property `passengerRates`. Then, when we refer to a single item within that array, we use the singular version of that same word - in this case `passengerRate`.

```html
...
<!-- Add an <h3> tag to serve as a label for the list of values. The heading should not be displayed if no seats are available for booking. -->
<h3 v-show="numSeatsAvailable > 0">Passenger Rates</h3>
<!-- Add a <ul> tag to display the list of values in an unordered array. The list should not be displayed if no seats are available for booking. -->
<ul v-show="numSeatsAvailable > 0">
  <li v-for="passengerRate in passengerRates">{{ passengerRate }}</li>
</ul>
...
```

The `v-for` directive tells the browser to loop through the array by listing each `passengerRate` in the `passengerRates` array. Notice that this directive is placed in the `<li>` tag, rather than the `<ul>` tag. Vue will list the first item in the array within the `{{ passengerRate }}` display area, then create an additional `<li>` tag for the next item in the array, and so on until the array items are fully listed.

Your HTML page should now display content as shown in the image below. It may not look like Passenger Rates are being displayed in an unordered list because we don't see the typical bullet object preceding each item in the list. This is because we have defined the `ul` element in our stylesheet with `list-style-type: none;`.

![Screenshot showing the HTML page with product name and description on the right, followed by paragraphs that read "Reservations available" and "Early Bird discount 12% if you book by June 30, 2051. Below that is a heading titled "Passenger Rates", and below that is the unordered list array of passenger rates.](../media/m4-html-unordered-list-array.png)

If you display an ordered list instead of an unordered list (by changing the `<ul>` tag to an `<ol>` tag, your browser will display content like the image shown below.

![Screenshot showing the HTML page with product name and description on the right, followed by paragraphs that read "Reservations available" and "Early Bird discount 12% if you book by June 30, 2051. Below that is a heading titled "Passenger Rates", and below that is the ordered list array of passenger rates.](../media/m4-html-ordered-list-array.png)

>[!TIP]
>If you switch to an ordered list, don't forget to change both the opening and closing `<ul>` tags.
