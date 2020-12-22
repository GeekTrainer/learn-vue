Our sample project is a fictitious travel agency for booking space travel. The main product we are selling is a cruise to the moon on our space shuttle. When the HTML page loads, the thumnail image at the far left is highlighted and the larger image displays the passenger seats in our space shuttle. The product name and description on the right display appropriate cruise pricing and rates for the basic cruise package.

We currently have our application interface working so that clicking any of the other three thumbnail images will switch the larger image to a view of the selected **feature** that can be added to the trip package. When each of these features is highlighted, the information on the right side of the page should describe that trip "add-on feature" instead of displaying the general cruise information shown in the image below. We will fix that problem now by adding elements to our HTML page and displaying more appropriate content in the product description area. Part of the new content to be displayed in the features area will be derived from computed properties.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The second thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right, with two paragraphs of text. Below this are unordered lists for Passenger Rates and Group Discounts. At the bottom are two buttons labeled "Add Feature" and "Remove Item". The "Remove Item" button is disabled](../media/m07-start.png)

## Add feature information

Start by adding a new class to the **styles.css** file in the `assets` folder. Then add an `<h3>` tag in your **index.html** file for display of a Feature Header.
- Add a class named `featureHeader` below the comment that reads `/* TODO: Add featureHeader class */`
- Add an `<h3>` tag below the comment that reads `<!-- TODO: Create header for features -->`
  - Style the `<h3>` tag with class `featureHeader`
  - Show the `<h3>` tag only when the bookingType is `feature`

```css
...
/* TODO: Add featureHeader class */
.featureHeader {
  margin-top: 44px;
  background-color: #faba7e;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  border-top: dotted;
  border-bottom: dotted;
  border-top-color: #fc810e;
  border-bottom-color: #fc810e;
}
...
```

```html
...
<!-- TODO: Create header for features -->
<h3 class="featureHeader" v-show="bookingType=='feature'">Add Trip Feature</h3>
...
```

The new `<h3>` tag should be displayed now if you view your **index.html** page in a browser and then click any of the 3 feature images to the right of the main thumbnail image. The problem is that we still have information for the main cruise displayed below the new header, so let's clear out that area so we can use that space for feature information when a feature is selected.

- Set the information below the comment that reads `<!-- TODO: Display only for cruises-->` so that all elements will be displayed only when the `bookingType` is set to `cruise`.
  - Do not add this setting to the buttons because they are being managed independently with other application variables.

```html
...
<!-- TODO: Display only for cruises-->
<p v-if="bookingType=='cruise' && numSeatsAvailable > 12" style="color:green;">Reservations available</p>
<p v-else-if="bookingType=='cruise' && numSeatsAvailable <= 12 && numSeatsAvailable > 0" style="color:red;">Almost Sold Out!</p> 
<p v-else-if="bookingType=='cruise'"><span style="color: red">Sold out!</span> Please check back for our next available shuttle.</p>
<p v-show="bookingType=='cruise' && earlybird && numSeatsAvailable > 12" style="color: blue">Early Bird discount 12% if you book by June 30, 2051.</p>
<p v-show="numSeatsAvailable == 0">Bookings for our next cruise shuttle will be available in February, 2051!</p>
<h3 v-show="bookingType=='cruise' && numSeatsAvailable > 0">Passenger Rates</h3>
<ul v-show="bookingType=='cruise' && numSeatsAvailable > 0">
  <li v-for="passengerRate in passengerRates">{{ passengerRate }}</li>
</ul>
<h4 v-show="bookingType=='cruise' && numSeatsAvailable > 0">Group Discounts</h4>
<ul v-show="bookingType=='cruise' && numSeatsAvailable > 0">
  <li v-for="groupDiscount in groupDiscounts">{{ groupDiscount }}</li>
</ul>
...
```

If you display your HTML page now and click any of the feature thumbnails, you should see only the new **Add Trip Feature** heading, the product name, and the product description for any selected feature. Now it's time to add a few more details that are specific to each trip feature so that passengers will want to add these attractions to their basic cruise package.

- Add new properties in the `data()` section of your **main.js** file below the comment that reads `//TODO: Add feature properties`.
- Add new settings to each of the three feature methods below the comment that reads `//TODO: update feature methods`

```javascript
...
//TODO: Add feature properties
featurePrice: 0,
featureQty: 0,
onSale: false,
...
```

```javascript
...
//TODO: update feature methods
featureBookCruise() {
    this.productName = 'Book a Cruise to the Moon'
    this.productDesc = 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.'
    this.id = '1100'
    this.selectedProdImg = './assets/images/space-4888643_1284x856.jpg'
    this.btnTitle = 'Book a Cruise'
    this.bookingType = 'cruise'
    this.isSelectedCruise = true
    this.isSelectedAsteroid = false
    this.isSelectedBullet = false
    this.isSelectedAlien = false
},
featureAsteroid() {
    this.productName = 'Asteroid Fireworks Display'
    this.productDesc = 'As we pass by the planet of Mars, you can watch a special fireworks event from our Viewpoint Star Surround Deck.'
    this.id = '1101'
    this.featurePrice = '12,000'
    this.featureQty = 50
    this.onSale = false
    this.selectedProdImg = './assets/images/asteroid-5737398_1284x856.jpg'
    this.btnTitle = 'Add Feature'
    this.bookingType = 'feature'
    this.isSelectedCruise = false
    this.isSelectedAsteroid = true
    this.isSelectedBullet = false
    this.isSelectedAlien = false
},
featureBulletTrain() {
    this.productName = 'Bullet Train Tour'
    this.productDesc = 'Buy a ticket on our Bullet Train for an exciting whirlwind tour through the center of the Earth.'
    this.id = '1102'
    this.featurePrice = '25,000'
    this.featureQty = 25,
    this.onSale = true
    this.selectedProdImg = './assets/images/fantasy-5732286_1284x856.jpg'
    this.btnTitle = 'Add Feature'
    this.bookingType = 'feature'
    this.isSelectedCruise = false
    this.isSelectedAsteroid = false
    this.isSelectedBullet = true
    this.isSelectedAlien = false
},
featureAlienShip() {
    this.productName = 'Alien Spaceship Ride-a-long'
    this.productDesc = 'Aliens from our sister galaxy have a limited number of seats available for observers to watch Titanium mining operations on the moon.'
    this.id = '1103'
    this.featurePrice = '55,000'
    this.featureQty = 0
    this.onSale = false
    this.selectedProdImg = './assets/images/spaceship-5730066_1284x856.jpg'
    this.btnTitle = 'Add Feature'
    this.bookingType = 'feature'
    this.isSelectedCruise = false
    this.isSelectedAsteroid = false
    this.isSelectedBullet = false
    this.isSelectedAlien = true
},
...
```

## Display new information using computed properties

For each feature, we are going to display a basic heading for **Cost and Availability** information, so we use an `<h3>` tag for that text. This will be followed by information that we want to display using the value of a computed property.

In your **main.js** file, make sure the `featureQty` is set to `0` for the `featureAlienShip` method. Then add a `computed` property below the comment that reads `//TODO: Add computed properties`.

- The computed property involves a simple concatenation of text with two existing property values to create a full sentence that can be rendered by simply using the `{{ featureDetails }}` computed property.
  - Start with a dollar sign in single quotes (because $ is text)
  - Use the plus symbol (+) to concatenate (add) the value of `featurePrice`
  - Use + again to concatenate additional text within single quotes (including leading and trailing spaces where needed)
  - Add the value of `featureQty`
  - Add the text " Tickets remaining"

```javascript
...
//TODO: Add computed properties
computed: {
    featureDetails() {
        return '$' + this.featurePrice + ' (each person) - ' + this.featureQty + ' Tickets remaining'
    },
}
...
```

Finally, add the following new content to your **index.html** file below the comment that reads `<!-- TODO: Create feature contents -->`.
- Create a `<div>` element
  - Set a `v-show` directive so the contents of the `<div>` will only be displayed when the value of `bookingType` is set to `feature`
- Create an `<h3>` tag to display the text title "Cost and Availability"
- Create an `<h4>` tag to display the computed property `featureDetails`
- Create two `<p>` tags
  - Display "Tickets Available" if `featureQty` is greater than 0
  - Else display "Tickets Sold Out!"

```html
...
<!-- TODO: Create feature contents -->
<div v-show="bookingType=='feature'">
  <h3>Cost and Availability</h3>
  <h4>{{ featureDetails }}</h4>
  <p v-if="featureQty > 0"; style="color:green;">Tickets available</p>
  <p v-else><span style="color: red">Tickets Sold Out!</span></p>
  <p v-show="onSale==true" style="color: blue">{{ sale }}</p>
</div>
...
```

You may be wondering why we don't use another computed property to represent whether tickets are available for each feature rather using the inline expression `featureQty > 0`. This is because a computed property cannot change the value of a piece of data. When we need to change data, we must use a method, and a method would need to be fired whenever the data for `featureQty` changes. A computed property is a good choice when you need to change the output display for "existing" data.

Your final rendered interface should look like the screenshots displayed below.

![Screenshot showing the HTML page with a selected feature image on the left and 4 thumbnail images below it. The second thumbnail from the left is highlighted with a yellow background. Feature name, description, cost and number of tickets remaining are displayed on the right for the "Asteroid Fireworks Display." "Tickets Available" is displayed in green text. At the bottom are two buttons labeled "Add Feature" and "Remove Item". The "Remove Item" button is disabled](../media/m07-asteroid-fireworks.png)
- Asteroid Fireworks Display description, price and tickets remaining when thumbnail #2 is clicked
  - "Tickets available" is displayed because `featureQty` computed value is greater than 0.

![Screenshot showing the HTML page with a selected feature image on the left and 4 thumbnail images below it. The second thumbnail from the left is highlighted with a yellow background. Feature name, description, cost and number of tickets remaining are displayed on the right for the "Alien Spaceship Ride-a-long." "Tickets Sold Out!" is displayed in red text. At the bottom are two buttons labeled "Add Feature" and "Remove Item". The "Remove Item" button is disabled](../media/m07-alien-spaceship.png)
- **Alien Spaceship Ride-a-long** description, price and tickets remaining when thumbnail #4 is clicked
  - "Tickets Sold Out!" is displayed because `featureQty` is 0.