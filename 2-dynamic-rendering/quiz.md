Choose the best response for each of the questions below. Then select **Check your answers**.

## quiz title: Check your knowledge

## Multiple Choice
Which of the following statements is accurate with respect to the way Vue enables list rendering most efficiently?

()`v-if` should be used to cycle through a list of array items in the browser.{{Incorrect. `v-for` is the simplest way to cycle through a list of array objects. Add the `v-for` directive to an `<li>` tag (rather than the `<ul>` or `<ol>` tag) using syntax like the following: `<li v-for="group_discount in group_discounts">{{ group_discount }}</li>`.}}
()`v-else` should be used to cycle through a list of array items in the browser.{{Incorrect. `v-for` is the simplest way to cycle through a list of array objects. Add the `v-for` directive to an `<li>` tag (rather than the `<ul>` or `<ol>` tag) using syntax like the following: `<li v-for="group_discount in group_discounts">{{ group_discount }}</li>`.}}
(x)`v-for`should be used to cycle through a list of array items in the browser.{{Correct! `v-for` is the simplest way to cycle through a list of array objects. Add the `v-for` directive to an `<li>` tag (rather than the `<ul>` or `<ol>` tag) using syntax like the following: `<li v-for="group_discount in group_discounts">{{ group_discount }}</li>`.}}

## Multiple Choice
Which of the following statements is accurate with respect to the way Vue enables conditional rendering?

()`v-show` removes an HTML element from the DOM temporarily in order to prevent the browser from displaying designated content.{{Incorrect. `v-show` will leave the HTML elements in the DOM and write an inline CSS style in the HTML tag to prevent content from being displayed in the browser. The `v-show` option may be the most efficient processing method for any item where you want to toggle its visibility multiple times.}}
()`v-else` directive must be used in conjunction with `v-if`.{{Incorrect. It is technically not necessary to use the `v-else` directive if you do not need to display an alternative. You can simply use a `v-if` statement to either display an element or not.}}
(x)`v-if`, `v-else-if` and `v-else` can be used to add layers of complexity for conditional rendering {{Correct! For complicated decision-making you can set a numeric property in order to compute mathematical decisions that you can then layer in your HTML interface with a set of `v-if`, `v-else-if` and `v-else` directives to define multiple conditions.}}
