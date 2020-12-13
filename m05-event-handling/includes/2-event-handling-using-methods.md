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
