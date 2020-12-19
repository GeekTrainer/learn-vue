## Event handling using methods for more complex logic

It is likely that we will need to perform additional complex operations with regard to contents of the cart, so trying to track all of the changes and computations using inline properties can become awkward and potentially confusing. In our Vue app we can use a `method` instead of a `data property` to trigger more complex logic operations.

## Create method to increment value of cart

Open **index.html** either from the [starter code](link), or your existing project if you are following along from prior modules.

- Add a `comma` following the curly brace below the comment that reads `//TODO: Add a comma`
- Add a `method` named `addItemToCart` below the comment that reads `//TODO: Increment value of cart`
  - Increment the value of cart by 1

```javascript
...
    //TODO: Add a comma
    },
    //TODO: Increment value of cart
    methods: {
        addItemToCart() {
            this.cart += 1
        }
    },
})
```

>[!NOTE]
>Note that the punctuation structure when defining a method is distinctly different from the structure for defining a data property.

## Apply method to button

Now change the button in your HTML file to use the `addToCart` method instead of the data expression used previously. Notice that we are still using the `v-on:click` directive. The name of the method is inserted between quotation marks to replace the mathematical expression we used previously.

- Add `v-on:click` directive to Book a Cruise button below the comment that reads `TODO: Add item to cart`

```html
...
<!-- TODO: Add item to cart -->
<button class="button" v-on:click="addItemToCart">Book a Cruise</button>
...
```

If you render the HTML file now, the cart should behave the same way it did when using the data expression. Clicking the "Book a Cruise" button should increment the number in the cart by 1 every time you click it because the `v-on` directive is still listening for that click event.

## Shorthand notation for v-on directive

You should also be aware that Vue allows a shorthand notation when using the `v-on` directive. You can use the "at" symbol (@) in place of `v-on:`, as shown below.

```html
...
<button class="button" @click="addItemToCart">Book a Cruise</button>
...
```

## Change selected product image when thumbnail is clicked

Now you can make a change that you have probably been waiting to execute. Let's make the selected image change to display a larger image in a thumbnail whenever the thumbnail image is clicked.

Rather than using a data property for this purpose, we should use a method because in later modules we will want to execute additional actions whenever each thumbnail is clicked (e.g., changing the text in the product description area in addition to changing the selected product image.) For now, add four new methods in your **main.js** file, as shown in the code snippet below.

Then use the `v-on:click` directive in your **index.html** file to execute the action in the appropriate method when each thumbnail image is clicked.

- Add 4 methods in **main.js** below the comment `//TODO: Change selected image`
  - set `selectedProdImg` path in each method
- Apply `v-on:click` directive in **index.html** below the comment `TODO: Change selected image`

```javascript
...
//TODO: Change selected image
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
<!-- TODO: Change selected image -->
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

![Screenshot showing the HTML page with a selected produce image on the left and 4 thumbnail images below it. Product name and description are displayed on the right, with two paragraphs of text. Below this are unordered lists for Passenger Rates and Group Discounts](../media/thumbnails_cart_button.png)
- Change the selected product image when a thumbnail image is clicked
- Increment the value of cart when "Book a Cruise" button is clicked

When testing your **index.html** file in the browser, it may seem like the method is not executing properly if you click the first thumbnail image on the far left. That's because this thumbnail is for the "Book a Cruise to the Moon" feature, which is displayed by default when the page initially loads. Try clicking any other thumbnail, and then click the first thumbnail again to set the selected image back to the default image.
