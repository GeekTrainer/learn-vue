Notice that we have an active button that allows users to "Book a Cruise", which increments the cart by a value of 1. We have another live button that removes an item from the cart, essentially decreasing the value of the cart by 1. Since we don't want the cart to have a negative balance, we have already specified in our **main.js** method that the "Remove Item" button will not actually decrease the cart number unless it is greater than or equal to 1.

Now we want to disable that button visibly so that the cursor will not be active when the user hovers a mouse over it. We also want to make it "appear" to be disabled (i.e., not clickable) if there are no items in the cart.

We already have a `.disabledButton` class in our **styles.css** file that sets the background color to grey and sets the cursor as "not allowed." This will change the appearance of the button. We also need to change the "behavior" of the button in order to control the cursor display. To accomplish both of these objectives we are using two `v-bind` directives on the `<button>` element:

- 1 directive to specify when the "disabled" behavior should be applied
- 1 directive to specify when to set the `disabledButton` class style

```html
...
<button class="button" @click="addItemToCart">Book a Cruise</button>
<!-- //TODO: Disable Remove Item button -->
<button class="button" :disabled="cart==0" :class="{ disabledButton:cart==0 }" @click="removeItemFromCart">Remove Item</button>
...
```

When viewed in a live browser your HTML page should look like the image below. When you click the "Book a Cruise" button, the "Remove Item" button will immediately become active. If you click the "Remove Item" button the number of cart items will decrease by 1 until the number of cart items reaches 0, at which point that button will again be disabled.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The thumbnail on the far left is highlighted with a yellow background. Product name and description are displayed on the right, with two paragraphs of text. Below this are unordered lists for Passenger Rates and Group Discounts. At the bottom are two buttons labeled "Book a Cruise" and "Remove Item". The value of cart is 0 and the "Remove Item" button is disabled.](../media/m06-end.png)
