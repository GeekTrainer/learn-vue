In this module you learned about conditional rendering with Vue, which allows you to place multiple HTML elements in your interface and instruct the browser to show those items only under conditions that you specify in the Vue application. A boolean data property is easy to implement, and it performs efficiently if you only need to make a decision based on one of two conditions; i.e., a property is either true or false. For more complicated decision-making you will want to use a numeric property so you can compute mathematical decisions for multiple conditions. The `v-if`, `v-else-if`, and `v-else` directives allow you to manage complicated, layered decisions for conditional rendering.

Some Vue directives such as `v-if` actually remove HTML elements from the DOM, while other directives such as `v-show` will leave those elements in the DOM and write an inline CSS style in the HTML tag to prevent it from being displayed in the browser. The `v-show` option may be a more efficient processing method for any item where you want to toggle its visibility multiple times.

## Coding Challenge

Now it's your turn! Armed with the information presented in Module 3, you should now be able to perform the following task on your own.

- add a paragraph below the **Sold Out** paragraph that lets users know when the next shuttle flight will be available for booking (if `num_seats_available` is 0)