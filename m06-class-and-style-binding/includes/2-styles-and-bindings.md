Our sample project is a fictitious travel agency for booking space travel. We want to add a highlight on the thumbnail image that is represented in the large featured photo. We also want to change both the "behavior" and "look" of the **Remove Item** button whenever the cart value is 0. We accomplish these tasks using style bindings.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. Product name and description are displayed on the right, with two paragraphs of text. Below this are unordered lists for Passenger Rates and Group Discounts. At the bottom are two buttons labeled "Book a Cruise" and "Remove Item".](../media/m06-start.png)

## Add a background highlight to the selected thumbnail image

Suppose we have decided that users should have a visual clue to indicate which of the 4 thumbnail objects is currently being displayed in the larger image view above. For this purpose we want to add a yellow highlight background on the thumbnail image whenever it is the same as the `selectedProdImg`.

We can use the `v-bind` directive for this purpose. Vue provides special enhancements when `v-bind` is used with class and style. When using attribute bindings, classes are a special case because we can pass additional data to Vue to specify when to apply specific classes and behaviors. Let's start by adding a new `.highlight` class to our **styles.css** file that we will use for this purpose.

- Add a highlight class in `styles.css` (`assets` folder) below the comment that reads `/* TODO: Add a highlight class */`
  - Set the background color to light yellow

```css
/* TODO: Add a highlight class */
.highlight {
  background-color: rgb(250, 250, 133);
}
```

In our **main.js** file we will set a boolean data property that lets us tell Vue when to apply our highlight style. We need to establish separate properties for each thumbnail object, because at any given time we want only one property to evaluate to `true` while the other three properties evaluate to `false`. That way only one thumbnail will have a yellow background highlight at any given time. We set the first image property to `true` in the data declaration section so that the default thumbnail image will be highlighted as soon as the HTML page loads.

Next we need a way to trigger a change in the status of all 4 properties based on the currently selected image. We already have a method established for changing the `src` property of the `selectedProdImg` whenever each thumbnail image is clicked. Within each of these methods we can add the appropriate boolean value for the 4 new data properties.

- In **main.js** create `data properties` for each feature below the comment that reads `//TODO: create boolean data property for each thumbnail`.
  - Set `isSelectedCruise` to `true`
  - Set remaining 3 properties to `false`
- In **main.js** `methods` set the same 4 data properties for each `feature` method
  - Set the data property to `true` for the feature that matches the image
  - Set the data property to `false` for all other features in that method

```Javascript
//TODO: set boolean values for all thumbnails
featureBookCruise() {
    this.selectedProdImg = './assets/images/space-4888643_1284x856.jpg';
    this.isSelectedCruise = true;
    this.isSelectedAsteroid = false;
    this.isSelectedBullet = false;
    this.isSelectedAlien = false;
    },
featureAsteroid() {
    this.selectedProdImg = './assets/images/asteroid-5737398_1284x856.jpg';
    this.isSelectedCruise = false;
    this.isSelectedAsteroid = true;
    this.isSelectedBullet = false;
    this.isSelectedAlien = false;
    },
featureBulletTrain() {
    this.selectedProdImg = './assets/images/fantasy-5732286_1284x856.jpg';
    this.isSelectedCruise = false;
    this.isSelectedAsteroid = false;
    this.isSelectedBullet = true;
    this.isSelectedAlien = false;
    },
featureAlienShip() {
    this.selectedProdImg = './assets/images/spaceship-5730066_1284x856.jpg';
    this.isSelectedCruise = false;
    this.isSelectedAsteroid = false;
    this.isSelectedBullet = false;
    this.isSelectedAlien = true;
    },
```

## Add style bindings to thumbnail images

The last step of this process is to add the appropriate directives to each `<img>` tag in our **index.html** file. The variables are changed interactively by the `v-on:click` directive that executes a specific method, but we also have to set the highlight style for each image by adding the `v-bind:class` directive. Using `v-bind:class` allows us to specify that the class will be applied only if the specified data property is `true`.

- Set the `v-bind:class` directive for each thumbnail image below the comment that reads `TODO: Bind a class to each image`.
  - Bind the `.highlight` class to the data property that will be set to `true` after execution of the `method` called by `v-on:click`

```html
<div style="text-align:left; padding-top:0; height:200px;">
  <!-- TODO: Bind a class to each image -->
  <img src="./assets/images/space-4888643_1284x856.jpg" @click="featureBookCruise" :class="{ highlight: isSelectedCruise }" style="width:12%; margin-right:0px;">
  <img src="./assets/images/asteroid-5737398_1284x856.jpg" @click="featureAsteroid" :class="{ highlight: isSelectedAsteroid }" style="width:12%; margin-left:12px; margin-right:0px;">
  <img src="./assets/images/fantasy-5732286_1284x856.jpg" @click="featureBulletTrain" :class="{ highlight: isSelectedBullet }" style="width:12%; margin-left:12px; margin-right:0px;">
  <img src="./assets/images/spaceship-5730066_1284x856.jpg" @click="featureAlienShip" :class="{ highlight: isSelectedAlien }" style="width:12%; margin-left:12px; margin-right:0px;">
</div>
```

Notice that we are able to use several types of Vue directives on each `<img>` tag. We have applied a `v-on:click` directive to call a method that executes multiple actions on different element tags in our HTML page. We are also using the `v-bind:class` directive to dynamically change the background style of each image based on a condition. In addition, we are able to simultaneously apply several inline style settings to each `<img>` tag.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The thumbnail on the far left is highlighted with a yellow background. Product name and description are displayed on the right, with two paragraphs of text. Below this are unordered lists for Passenger Rates and Group Discounts. At the bottom are two buttons labeled "Book a Cruise" and "Remove Item".](../media/m06-thumbnail-highlight.png)

- The selected product image is indicated by the highlight on the matching thumbnail image
- Clicking a thumbnail will change the large image to match the thumbnail image, and the highlight background will be moved to the clicked thumbnail image
