## Unit: Two-way binding

- previously we used v-bind for one-way data binding from the data to the template

- when working with forms we also need binding from the template to the data (two-way binding)

- we record and store values in our data with v-model

## Unit: Create a form component and bind the data

- create a form component for users to review a product

- 3 pieces of data

- Submit button

- add the data option to save the information from the form

- use v-model to bind form input to data

## Unit: Add listener triggered onSubmit

- add a listener triggered onSubmit

- onSubmit create a productReview object containing 3 data elements

- send the data "up" from the form to the product (using $emit to create an event)

  - import reviewForm component into the HTML page

  - listener for the emitted event

## Unit: Push data from form to array

- add the latest review to the ProductDisplay component:

  - add listener to the form

- onSubmit trigger an addReview method

  - collects the data from this review

  - pushes it into the reviews array

## Unit: Display the latest review data

- create a component reviewList

- add a prop to receive the data

- create an HTML template to display all reviews with v-for

  - show this component only if there are reviews

## Unit: Form validation

- add some basic form validation

## Module Summary

## Coding Challenge

- add a question to the form "Would you recommend this product?"

- record and emit the response in the form

## Check Your Knowledge


Choose the best response for each of the questions below. Then select **Check your answers**.
## quiz title: Check your knowledge

## Multiple Choice
Insert the question text in this cell.
()Insert the first incorrect answer text in this cell.{{Insert the first incorrect answer feedback in this cell.}}
()Insert the second incorrect answer text in this cell.{{Insert the second incorrect answer feedback in this cell.}}
(x)Insert the correct answer text in this cell.{{Insert the correct answer feedback in this cell.}}

## Multiple Choice
Insert the question text in this cell.
()Insert the first incorrect answer text in this cell.{{Insert the first incorrect answer feedback in this cell.}}
(x)Insert the correct answer text in this cell.{{Insert the correct answer feedback in this cell.}}
()Insert the second incorrect answer text in this cell.{{Insert the second incorrect answer feedback in this cell.}}

## Multiple Choice
Insert the question text in this cell.
()Insert the second incorrect answer text in this cell.{{Insert the second incorrect answer feedback in this cell.}}
(x)Insert the correct answer text in this cell.{{Insert the correct answer feedback in this cell.}}
()Insert the first incorrect answer text in this cell.{{Insert the first incorrect answer feedback in this cell.}}
