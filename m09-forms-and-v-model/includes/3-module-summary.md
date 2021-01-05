In this module you learned how to:
- Create a form and data properties to store the value of the form fields.
- Use v-model to create two-way binding from the template to the data.
- Add a listener to the form and emit the event
- Import the form data into the HTML template
- Listen for the emitted form data in the template
- Display the form data in the template
- Add form validation

## Coding Challenge

Now it's your turn! Armed with the information presented in this module, you should now be able to perform the following task on your own.

- Add a new form to the "Welcome Back to the Galaxy! component that allows users to rate a previous **Relecloud Galaxy Tour**.
  - If an element in your form should have a numeric entry, add `.number` following `v-model` (e.g., `v-model.number="rating"`). This will cast the value of that data entry as a `number`.
- Use `v-bind` to create two-way binding of data from the form to the Vue template.
- Add form validation.
- Record and `emit` the response.
- Create a new component to output the data submitted on your form.