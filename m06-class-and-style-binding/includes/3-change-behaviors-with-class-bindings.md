Notice that we have an active button that allows users to "Book a Cruise", which increments the cart by a value of 1. We have another live button that removes an item from the cart, essentially decreasing the value of the cart by 1. Since we don't want the cart to have a negative balance, we have already specified in our **main.js** method that the "Remove Item" button will not actually decrease the cart value unless it is greater than or equal to 1.

Now we want to disable that button **visibly** so that the cursor will not be active when the user hovers a mouse over it. We also want to make it **appear disabled** (i.e., not clickable) if there are no items in the cart.

We already have a `disabledButton` class in our **styles.css** file that sets the background color to grey and sets the cursor as "not allowed." This will change the appearance of the button. It also changes the "behavior" of the button (by controlling the cursor display). To accomplish all of our objectives we are using two `v-bind` directives on the `<button>` element:

- Disable the **Remove Item** button in **index.html** under the comment that reads `TODO: Disable Remove Item button`
  - Use the `v-bind:disabled` directive to set the "Remove Item" button to `disabled` behavior when the value of cart is 0
  - Use the `v-bind:class` directive to apply the `disabledButton` class style when the value of cart is 0

```html
...
<button class="button" @click="addItemToCart">Book a Cruise</button>
<!-- TODO: Disable Remove Item button -->
<button class="button" :disabled="cart==0" :class="{ disabledButton:cart==0 }" @click="removeItemFromCart">Remove Item</button>
...
```

When viewed in a live browser your HTML page should look like the image below.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The thumbnail on the far left is highlighted with a yellow background. Product name and description are displayed on the right, with two paragraphs of text. Below this are unordered lists for Passenger Rates and Group Discounts. At the bottom are two buttons labeled "Book a Cruise" and "Remove Item". The value of cart is 0 and the "Remove Item" button is disabled.](../media/m06-end.png)

- Clicking the "Book a Cruise" button will increment the value of cart by 1
- Clicking the "Remove Item" button will decrement the value of cart by 1 (unless the value is 0)
- "Remove Item" button will be active if the value of cart is 1 or higher
- "Remove Item" button will be inactive (and appear disabled) if the value of cart is 0