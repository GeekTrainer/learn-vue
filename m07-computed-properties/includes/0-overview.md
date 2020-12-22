In this lesson we demonstrate how to concatenate and calculate properties so we can return a single computed property instead of a combination of data properties and expressions. These calculations will be computed, stored, and updated automatically by your Vue application without the need to trigger them by means of an event such as a mouseover or click. This improves the speed and functionality of your interface.

You will also add elements to the Vue application and interface so we can start to create special "feature" content that is displayed in the product description area when a thumbnail feature is selected.

## Learning Objectives

Upon completion of this module you will:

- Concatenate properties (both numeric and character values) into a new "simple" property
- Return one new value (the computed property) rather than multiple properties and expressions
- Add new properties and content for purchase of trip feature "add-ons"
- Display different components of the interface based on computed properties

If you completed the prior exercises, your HTML file should look like the image below when viewed in a browser. You can continue to build upon your own files, or you can use the files in our [`starting code`](link).

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The second thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right, with two paragraphs of text. Below this are unordered lists for Passenger Rates and Group Discounts. At the bottom are two buttons labeled "Add Feature" and "Remove Item". The "Remove Item" button is disabled](../media/m07-start.png)
- Text on the left button will read "Book a Cruise" when the 1st thumbnail image is highlighted
- Text on the left button will read "Add Feature" when any of the other three thumbnails are clicked
- The "Add Feature" button is a different color than the "Book a Cruise" button
- Click the "Add Feature" or "Book a Cruise" button to increment the value in Cart()
- The "Remove Item" button will be inactive until the value of cart is 1 or more
- Click the "Remove Item" button to decrement the value in Cart() when that button is enabled
