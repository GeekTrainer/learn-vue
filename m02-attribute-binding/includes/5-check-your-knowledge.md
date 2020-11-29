Choose the best response for each of the questions below. Then select **Check your answers**.

## quiz title: Check your knowledge

## Multiple Choice
Which of the following represents the correct way to dynamically bind an attribute to an expression within an HTML interface?

()`<img v-bind src="selected_prod_img">`.{{Incorrect. While v-bind is the correct directive for dynamically binding an attribute to an expression, you must use the colon (:) between v-bind and the name of the attribute. The correct answer is `<img v-bind:src="selected_prod_img">`.}}
()`<img src="{{ selected_prod_img }}">`.{{Incorrect. While placing the data object name within curly braces is the correct way to tell Vue to print the data inside an HTML tag, you must use the v-bind directive to bind application data to an attribute for an HTML tag. The correct answer is: `<img v-bind:src="selected_prod_img">`.}}
(x)`<img v-bind:src="selected_prod_img">`{{Correct! While placing the data object name within curly braces is the correct way to tell Vue to print the data within an HTML tag, you must use the v-bind directive to bind application data to an attribute for an HTML tag. Include a colon (:) between v-bind and the name of the attribute.}}
