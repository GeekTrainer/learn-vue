## Forms

Your HTML interface should look similar to the one shown in the screenshot below. In this section we will add a form to the "Food Preferences" component that is located at the bottom left side of the screen.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The first thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right. Two components are located at the bottom left of the screen: "Food Preferences" and "Welcome Back to the Galaxy!"](../media/m09_start.png)
- The "Room Service Fee" in the Food Preferences panel reads **No charge** if the passenger has booked a cruise at the rate for "First class with sleeping berth" (i.e., when `berth` property is `true`).
  - It will read **$24.99** when the `berth` property is `false`.
- If the passenger has previously booked a cruitse with Relecloud Galaxy Tours (i.e., `previous` is `true`), the message in the second box will invite the user to fill out a cruise review form that will be added in this training module.
  - When `previous` is `false` the second box will instead inform users that "Comments are Welcome!"

## Create form and data properties

In this section you will create a `<form>` tag in the **FoodPrefsForm.js** file, which is located under the **components** folder. To bind the form elements to your data, you will also enter `data()` properties in the same file for the data that will be generated when the form is submitted.

- Add the `<form>` element content in the **FoodPrefsForm.js** file below the comment that reads `/* TODO: Add <form> element below last <p> tag */`.
  - The `<form>` element will go below the paragraph that reads "Please fill out this form to let us know your food preferences."
- Add new `data()` properties for the form data that will be generated so we can bind these form elements to the data in our Vue application. The `data()` option should be entered below the comment that reads `/* TODO: Add form data properties and methods */`.
  - Note that the name of each data property must match the name of the `id` for each input field on the form.

```javascript
...
  template: 
  /* TODO: Add <form> element below last <p> tag */
  /*html*/
  `<div class="componentBox">
    <h3 style="text-align:center;">Food Preferences</h3>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>

    <form @submit.prevent="onSubmit">
    <h4>Submit food preferences</h4>
    <label for="passenger">Passenger name:</label>
    <input id="passenger">

    <br>
    <label for="allergies">Do you have food allergies?  </label>
    <select id="allergies">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br>
    <label for="allergydesc">Describe allergies: (enter "None" if not applicable)</label>      
    <textarea id="allergydesc"></textarea>

    <label for="glutenfree">Gluten-free?  </label>
    <select id="glutenfree">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br><br>
    <label for="vegan">Vegan?  </label>
    <select id="vegan">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br>
    <input class="button" type="submit" value="Submit">  

  </form>
  </div>`,
/* TODO: Add form data properties and methods */
  data() {
    return {
      passenger: '',
      allergies: '',
      allergydesc: '',
      glutenfree: '',
      vegan: '',
    }
  },
...
```

## Use v-model to create two-way binding from template to data

Now we need to create a two-way binding between our template and the data in the form we just created. On each form element we add the `v-model` directive, using the same `id` as the element in our `v-model` directive. For example, the tag `<input id="passenger">` becomes `<input id="passenger" v-model="passenger">`.

- Add the `v-model` directive to each form element below the comment that reads `/* TODO: Add <form> element below last <p> tag */`.
- The code in the `template` section of **FoodPrefsForm.js** should now look like the code snippet shown here.

```javascript
...
  template: 
  /* TODO: Add <form> element below last <p> tag */
  /*html*/
  `<div class="componentBox">
    <h3 style="text-align:center;">Food Preferences</h3>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>

    <form @submit.prevent="onSubmit">
    <h4>Submit food preferences</h4>
    <label for="passenger">Passenger name:</label>
    <input id="passenger" v-model="passenger">

    <br>
    <label for="allergies">Do you have food allergies?  </label>
    <select id="allergies" v-model.number="allergies">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br>
    <label for="allergydesc">Describe allergies: (enter "None" if not applicable)</label>      
    <textarea id="allergydesc" v-model="allergydesc"></textarea>

    <label for="glutenfree">Gluten-free?  </label>
    <select id="glutenfree" v-model.number="glutenfree">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br><br>
    <label for="vegan">Vegan?  </label>
    <select id="vegan" v-model="vegan">
      <option>Yes</option>
      <option>No</option>
    </select>

    <br>
    <input class="button" type="submit" value="Submit">  

  </form>
  </div>`,
...
```

## Add a listener to the form to execute an event

We need to add a `listener` to the form in **FoodPrefsForm.js** so that when the user clicks the `Submit` button the form will capture the event and execute a method. We will use `@submit.prevent="onSubmit"` for the listener and place it in the opening `<form>` tag. The **prevent** modifier keeps the browser from refreshing the page so that the user experience remains seemless.

- Add a listener to the opening `<form>` tag below the comment that reads `/* TODO: Add <form> element below last <p> tag */`.
- Add a trigger to the listener so it will execute a method named `onSubmit`.

```javascript
...
  template: 
  /* TODO: Add <form> element below last <p> tag */
  /*html*/
  `<div class="componentBox">
    <h3 style="text-align:center;">Food Preferences</h3>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>

    <form @submit.prevent="onSubmit">
...
```

## Emit the event

Now we need to create the method `onSubmit` to define actions that will be performed when the event occurs, but we have a new problem to address. You already know how to use a `prop` in a `component` to pull down data that is available in the application template for use in your component. We can think of the template as the "parent" component. Now we need to push data "up" from the child component, in this case **FoodPrefsForm.js**, to make our form data available to the parent or to other child components within our Vue application. We can accomplish this using `$emit`.

We will emit our event by assigning it an event name. Then we add a listener for that event in our template, or in any other component that needs to receive information about this event. The listener can, in turn, execute another method to perform specific operations with the data it receives from our form event.

- Create the `onSubmit` method in **FoodPrefsForm.js** for capturing form data and storing it in data properties below the comment that reads `/* TODO: Add methods */`.
  - The method will create a `foodprefanswers` object that will capture the data submitted in the form.
  - Emit a `review-submitted` event that passes the data contained in `foodprefanswers` "up" to the HTML interface.
  - Clear out the form fields so the form can be re-used after the data has been transmitted.

```javascript
...
/* TODO: Add methods */
  methods: {
    onSubmit() {
      let foodprefanswers = {
        passenger: this.passenger,
        allergies: this.allergies,
        allergydesc: this.allergydesc,
        glutenfree: this.glutenfree,
        vegan: this.vegan,
      }

      this.$emit('foodpref-submitted', foodprefanswers);

      this.passenger = '';
      this.allergies = '';
      this.allergydesc = '';
      this.glutenfree = '';
      this.vegan = '';

    },
  },
...
```

## Import the form data into the HTML template

We have already added the **FoodPrefsForm.js** component to the bottom of our **index.html** file by specifying the location of the source script, which is located in the components directory, as shown in the snippet below.

```html
...
<!-- TODO: Import Vue components -->
<script src="./components/FoodPrefsForm.js"></script>
...
```

We also previously added the content of the `foodprefs-form` component by adding the `<foodprefs-form>` tag to the template. The form works now, but nothing happens when we click the `Submit` button because our application does not yet have access to the data.

## Listen for the emitted form data in the template

We need to create a `listener` in the Vue template to receive the data emitted from the `<form>` in this `component`. We will add this listener to the `<foodprefs-form>` tag where it is displayed in the **index.html** file. Then we need to create the `addFoodpref` method in our **main.js** Vue application.

- In **index.html** add a listener `@foodpref-submitted` to the `<foodprefs-form>` tag below the comment that reads `<!-- TODO: Add listener for foodprefs-form -->`.
  - The listener will execute a method named `addFoodpref`.

```html
...
<!-- TODO: Add listener for foodprefs-form -->
<foodprefs-form @foodpref-submitted="addFoodpref" :berth="berth"></foodprefs-form>
...
```

Now we modify the **main.js** application file to create an array data property and a method that will push the data elements into that array when data is emitted from the form that resides in our component.

- Add an array data property to **main.js** below the comment that reads `//TODO: create array property`.

```javascript
...
berth: true,
previous: true,
//TODO: Add array property
foodprefs: [],
...
```

- Create a method `addFoodpref` below the comment that reads `//TODO: Create method to push data into array`.

```javascript
...
//TODO: Create method to push data into array
addFoodpref(foodpref) {
    this.foodprefs.push(foodpref);
},
...
```

The form works now, as shown in the image below. However, when we click the `Submit` button the data will disappear because the form is cleared out after data is submitted to the Vue application. In order to see the data that was generated and stored in our data properties, we will create a component that displays the passenger's Food Preferences.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The first thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right. Two components are shown at the bottom left of the screen: "Food Preferences" and "Welcome Back to the Galaxy!" The "Food Preferences" form is filled out with sample data that is ready to be submitted.](../media/m09_Food-Pref-Form.png)

## Display the form data in the template

Create a component named **FoodPrefsList.js** to display the data that is generated when a Food Preferences form is submitted. Make sure you include a prop to pull the data arraty "down" into this component from the template.

- Create a `foodprefs` prop at the top of the component that is defined as type `Array`.
- Add the `html` elements that will be displayed in the template.

```javascript
...
app.component('foodpref-list', {
  props: {
    foodprefs: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="print-list">
  <h3>Food preferences submitted:</h3>
    <ul>
      <li v-for="(foodpref, index) in foodprefs" :key="index">
        <strong>{{ foodpref.passenger }}</strong>
        <br>
        Food allergies:  {{ foodpref.allergies }} <br>
        Allergy description: {{ foodpref.allergydesc }}
        <br>
        Gluten-free:  {{ foodpref.glutenfree }} 
        <br/>
        Vegan:  {{ foodpref.vegan }} 
      </li>
    </ul>
  </div>`
})
...
```

Now we will add the **FoodPrefsList.js** component to the **index.html** template. We want to display this new component only when the passenger has submitted a Food Preferences form. We will use the `v-bind` shorthand to tell Vue to cycle through the data in the `foodprefs` array.

- Specify the location of the **FoodPrefsList.js** component by specifying the source script below the comment that reads `<!-- TODO: Import Vue components -->`.
- Add the content of the `foodpref-list` component to the template display by adding the `<foodpref-list>` tags below the comment that reads `<!-- TODO: Add foodpref-list -->`.
  - Use `v-if` to set the component to display only when there is data in the `foodprefs` array (i.e., the `length` of the array is greater than 0).

```html
...
<!-- TODO: Add foodpref-list -->
<foodpref-list v-if="foodprefs.length" :foodprefs="foodprefs"></foodpref-list>
...
<!-- TODO: Import Vue components -->
<script src="./components/FoodPrefsList.js"></script>
...
```

The form works now and the HTML interface displays the form data when the `Submit` button is clicked, as shown in the image below. The form is reset (form fields cleared out) at the end of the `onSubmit` event.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The first thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right. Two components are shown at the bottom left of the screen. The first component highlighted with a light yellow background contains the sample data that was submitted in the form. The form fields are now cleared in the "Food Preferences" form.](../media/m09_Food-Pref-Form_submitted.png)

## Form Validation

For legal reasons we have decided that we want to add some basic form validation to ensure that users fill out all fields within our "Food Preferences" form. Even if a passenger selects "No" in response to the question "Do you have food allergies?", we want them to clarify that in the "Describe allergies" field by specifying "None".

We can accomplish this by adding a simple `if` statement at the beginning of our `onSubmit()` method. We essentially list all fields in the form and declare that if the first field is empty, **or** (`||`) the second field is empty, and so on...an alert should pop up to inform the user that the form is incomplete. This `if` statement will be checked by the Vue application when the user clicks the `Submit` button.
- Add an `if` statement on the first line below the `onSubmit() {` method below the comment that reads `/* TODO: Add methods */`.

```javascript
...
  /* TODO: Add methods */
  methods: {
    onSubmit() {
      if (this.passenger === '' || this.allergies === '' || this.allergydesc === '' || this.glutenfree === '' || this.vegan === '') {
        alert('Form is incomplete. Please fill out every field.')
        return
      }
      let foodprefanswers = {
...
```

