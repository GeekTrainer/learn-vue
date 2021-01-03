Our sample project is a fictitious travel agency for booking space travel. Our cruise around the Galaxy will take several days, so we will need to feed our passengers during the trip. We want to know which passengers have particular food sensitivities or allergies, so we need to create a form that allows people to submit this information.

Our application already uses `v-bind`, which provides one-way binding of the data in our **main.js** file to our HTML interface, which is often referred to as the **template**. In this module you will add a form to the **Food Preferences** component that is located of the bottom left of the HTML template.

When working with forms, one-way binding is not enough. We also have to provide binding from the template to the Vue data properties in our **main.js** file. When a user enters information into a form we want to record that information and store the data in Vue. In this module you will learn how to create forms that implement two-way data binding using `v-model`.

If you completed the prior exercises, your HTML file should look like the image below when viewed in a browser. You can continue to build upon your own files, or you can use the files in our [`starting code`](link).

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The first thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right. Two components are located at the bottom left. Two components are shown at the bottom left of the screen: "Food Preferences" and "Welcome Back to the Galaxy!" is shown only if this person is a previous passenger on a Galaxy Tour.](../media/m09_start.png)
- "Food Preferences" component displays "Room Service Fee" at no charge for customers who have booked a First class passage with sleeping berth; a service fee is displayed for passengers who have booked at any of the non-berth rates.
- "Welcome Back to the Galaxy!" component is shown only if the user has been a passenger on a previous Galaxy Tour.

## Learning Objectives

Upon completion of this module you will:

- Add a form to the "Food Preferences" component, and the data properties to be captured when the form is submitted
- Use `v-model` on each form element to create two-way data binding between the form and Vue data properties
  - Add a method that will be executed when the Submit button is clicked
  - Add a listener to the form to execute the mthod
  - Add a listener to the HTML template to receive the data from the form using `$emit`
  - Clear out the fields in the form after submission so the form can be re-used
- Display the saved data within the HTML template