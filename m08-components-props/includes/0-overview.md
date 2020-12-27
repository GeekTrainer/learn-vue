Our sample project is a fictitious travel agency for booking space travel. Our cruise around the Galaxy will take several days, so we will need to feed our passengers during the trip. We need to know which passengers have particular food sensitivities or allergies, so we want to create a form that allows people to submit this information.

In addition, we plan to offer "free room service" for First Class passengers who book a sleeping berth compartment. We will accomplish these objectives by creating components and props, which we will add in this module. In a later module we demonstrate how to create and add forms.

If you completed the prior exercises, your HTML file should look like the image below when viewed in a browser. You can continue to build upon your own files, or you can use the files in our [`starting code`](link).

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The third thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right, with two paragraphs of text about the Bullet Train Tour. Below this is a computed property displaying Cost and Availability information. At the bottom are two buttons labeled "Add Feature" and "Remove Item". The "Remove Item" button is disabled](../media/m08-start.png)
- Text on the left button will read "Book a Cruise" when the 1st thumbnail image is highlighted
- Text on the left button will read "Add Feature" when any of the other three thumbnails are clicked
- Click the "Add Feature" or "Book a Cruise" button to increment the value in Cart()
- The "Remove Item" button will be inactive until the value of cart is 1 or higher
- Click the "Remove Item" button to decrement the value in Cart() when that button is enabled

## Learning Objectives

Upon completion of this module you will:

- Create components as separate Javascript files
- Add the components to your Vue interface
- Create a prop that emits the new information from your components
- Add listeners for those emits in your app
