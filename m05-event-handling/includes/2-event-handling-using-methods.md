## Event handling using methods for more complex logic

It is likely that we will need to perform additional complex operations with regard to contents of the cart, so trying to track all of the changes and computations using inline properties can become awkward and potentially confusing. In our Vue app we can use a `method` instead of a `data property` to trigger more complex logic operations.

To see how this can be done, let's switch out the data expression we were using to calculate number of items added to our booking cart for a method that we will call `addItemToCart`. Instead of using a property for `data` in our app, we can add a property for `methods`.

Notice we are adding a comma (,) at the end of our data() property before we create the new methods property in our **main.js** file.

```javascript
...
    //TODO: Add a comma (,) following the curly brace that ends the data property
    },
    //TODO: Create a method to calculate items added to the booking cart
    methods: {
        addItemToCart() {
            this.cart += 1
        }
    },
})
```

>[!NOTE]
>Note that the punctuation structure when defining a method is distinctly different from the structure for defining a data property.

Now change the button in your HTML file to use the `addToCart` method instead of the data expression used previously. We are still using the `v-on:click` directive. The name of the method is inserted between quotation marks to replace the mathematical expression we used previously.

```html
...
<!-- //TODO: Add a button that reads "Book a Cruise"-->
<!-- //TODO: Use the v-on:click directive to add 1 to the value of cart each time the button is clicked-->
<button class="button" v-on:click="addItemToCart">Book a Cruise</button>
...
```

If you render the HTML file now, the cart should behave the same way it did when using the data expression. Clicking the "Book a Cruise" button should increment the number in the cart by 1 every time you click it because the `v-on` directive is still listening for that click event.

## Shorthand notation for v-on directive

You should also be aware that Vue allows a shorthand notation when using the `v-on` directive. You can use the "at" symbol (@) instead of `v-on:`. Code the `<button>` tag in your HTML file to use shorthand notation for the `v-on` directive, as shown below.

```html
...
<!-- //TODO: Use shorthand notation for the v-on:click directive -->
<button class="button" @click="addItemToCart">Book a Cruise</button>
...
```

## Change selected product image when thumbnail image is clicked

Now you can make a change that you have probably been waiting to execute. Let's make the selected image change to display the image that is shown in one of the thumbnails below whenever a thumbnail image is clicked.

Rather than using a data property for this purpose, we should use a method because in later modules we will want to execute additional actions whenever each thumbnail is clicked (e.g., changing the text in the product description area in addition to changing the selected product image.) For now, add four new methods in your **main.js** file, as shown in the code snippet below.

Then use the `v-on:click` directive in your **index.html** file to execute the action in the appropriate method when each thumbnail image is clicked.

```javascript
...
//TODO: Create 4 methods (one for each thumbnail image) to change the selected image whenever the thumbnail is clicked
featureBookCruise() {
    this.selectedProdImg = './assets/images/space-4888643_1284x856.jpg'
},
featureAsteroid() {
    this.selectedProdImg = './assets/images/asteroid-5737398_1284x856.jpg'
},
featureBulletTrain() {
    this.selectedProdImg = './assets/images/fantasy-5732286_1284x856.jpg' 
},
featureAlienShip() {
    this.selectedProdImg = './assets/images/spaceship-5730066_1284x856.jpg'
},
...
```

```html
...
<!-- //TODO: Use the Vue v-on:click directive to change the selected image whenever the thumbnail is clicked -->
<div style="text-align:left; padding-top:0; height:200px;">
  <img src="./assets/images/space-4888643_1284x856.jpg" @click="featureBookCruise" style="width:12%; margin-right:0px;">
  <img src="./assets/images/asteroid-5737398_1284x856.jpg" @click="featureAsteroid" style="width:12%; margin-left:12px; margin-right:0px;">
  <img src="./assets/images/fantasy-5732286_1284x856.jpg" @click="featureBulletTrain" style="width:12%; margin-left:12px; margin-right:0px;">
  <img src="./assets/images/spaceship-5730066_1284x856.jpg" @click="featureAlienShip" style="width:12%; margin-left:12px; margin-right:0px;">
</div>
...
```

> [!TIP]
> If you want to have this method execute whenever a user hovers the mouse over a thumbnail image you could use the Vue @mouseover directive instead of @click.

When testing your **index.html** file in the browser, it may seem like the method is not executing properly if you click the first thumbnail image on the far left. That's because this thumbnail is for the "Book a Cruise to the Moon" feature, which is displayed by default when the page initially loads. Try clicking any other thumbnail, and then click the first thumbnail again to set the selected image back to the default image.