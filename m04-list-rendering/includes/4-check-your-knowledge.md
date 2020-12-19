Choose the best response for each of the questions below. Then select **Check your answers**.

## quiz title: Check your knowledge

## Multiple Choice
Which of the following statements is accurate with respect to the way Vue enables list rendering most efficiently?

()`v-if` should be used to cycle through a list of array items in the browser.{{Incorrect. `v-for` is the simplest way to cycle through a list of array objects. Add the `v-for` directive to an `<li>` tag (rather than the `<ul>` or `<ol>` tag) using syntax like the following: `<li v-for="group_discount in group_discounts">{{ group_discount }}</li>`.}}
()`v-else` should be used to cycle through a list of array items in the browser.{{Incorrect. `v-for` is the simplest way to cycle through a list of array objects. Add the `v-for` directive to an `<li>` tag (rather than the `<ul>` or `<ol>` tag) using syntax like the following: `<li v-for="group_discount in group_discounts">{{ group_discount }}</li>`.}}
(x)`v-for`should be used to cycle through a list of array items in the browser.{{Correct! `v-for` is the simplest way to cycle through a list of array objects. Add the `v-for` directive to an `<li>` tag (rather than the `<ul>` or `<ol>` tag) using syntax like the following: `<li v-for="group_discount in group_discounts">{{ group_discount }}</li>`.}}