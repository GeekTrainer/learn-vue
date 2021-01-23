Choose the best response for each of the questions below. Then select **Check your answers**.

## quiz title: Check your knowledge

## Multiple Choice
Select the correct statement from options listed below.

()Vue applications must make an external call to a back end server that hosts a database application.{{Incorrect. While a Vue application can make use of a back end server and database, it is not necessary because Vue is capable of allowing you to build powerful single-page applications on the front end in an HTML web browser.}}
()In order to create a Vue application, you will need to re-write your existing framework.{{Incorrect. Vue is described as a progressive application, which means it can be added to any existing framework and implemented in a progressive manner. This means you can start with simple functionality and continue to build a more complex application, as needed.}}
(x)A Vue application can be implemented by entering a simple script tag in an HTML document that references the Vue core library.{{Correct! There is no need to use external tools or an external server to build a powerful single-page application in an HTML web browser. The Vue application details can be scripted within the HTML page, or the page can be linked to a separate JavaScript file that contains the Vue application code.}}

## Multiple Choice
Which of the following represents the correct way to dynamically bind an attribute to an expression within an HTML interface?

()`<img v-bind src="selected_prod_img">`.{{Incorrect. While v-bind is the correct directive for dynamically binding an attribute to an expression, you must use the colon (:) between v-bind and the name of the attribute. The correct answer is `<img :src="selected_prod_img">`, which uses a simple colon as shorthand notation for `v-bind:`.}}
()`<img src="{{ selected_prod_img }}">`.{{Incorrect. While placing the data object name within curly braces is the correct way to tell Vue to print the data inside an HTML tag, you must use the v-bind directive to bind application data to an attribute for an HTML tag. The correct answer is: `<img :src="selected_prod_img">`, which uses a simple colon as shorthand notation for `v-bind:`.}}
(x)`<img :src="selected_prod_img">`{{Correct! While placing the data object name within curly braces is the correct way to tell Vue to print the data within an HTML tag, you must use the v-bind directive to bind application data to an attribute for an HTML tag. Include a colon (:) between v-bind and the name of the attribute, or use the colon by itself as a form of Vue shorthand notation.}}

## Multiple Choice
Which of the following statements is correct with regard to the way Vue.js lets you manage style and class bindings?

()Vue allows you to use shorthand notation for `v-on` directives but you cannot use shorthand for `v-bind` when applying class and style bindings.{{Incorrect. Vue allows you to use shorthand notation for `v-on` directives and all `v-bind` directives.}}
()If you want to add several style properties to an HTML element, you need to apply `v-bind` directives using separate in-line styles.{{Incorrect. You can bind to an entire class of styles, including properties that are defined in your application.}}
(x)You can apply multiple style and class bindings simultaneously on one HTML element.{{Correct!.}}
