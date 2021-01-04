## Forms

Your HTML interface should look similar to the one shown in the screenshot below. In this section we will add a form to the "Food Preferences" component that is located at the bottom left side of the screen.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The first thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right. Two components are located at the bottom left. Two components are shown at the bottom left of the screen: "Food Preferences" and "Welcome Back to the Galaxy!" is shown only if this person is a previous passenger on a Galaxy Tour.](../media/m09_start.png)
- The "Room Service Fee" in the Food Preferences panel will read "No charge" if the passenger has booked a cruise at the rate for "First class with sleeping berth" (`berth` property is `true`).
  - It will read $24.99 if the `berth` property is `false`.
- If the passenger has previously booked a cruitse with Relecloud Galaxy Tours (`previous` is `true`) the message in the second box will invite the user to fill out a cruise review form, which will be added in the next training module.
  - When `previous` is `false` the second box will instead inform users that "Comments are Welcome!"

## Create form and data properties

In this section you will create a `<form>` tag in the **FoodPrefs.js** file, which is located under the **components** folder. To bind the form elements to your data, you will also enter `data()` properties in the same file for the data that will be generated when the form is submitted.

- Add the `<form>` element content shown below in the **FoodPrefs.js** file below the comment that reads `/* TODO: Add <form> element below last <p> tag */`.
  - The `<form>` element will go below the paragraph that reads "Please fill out this form to let us know your food preferences."
- Add new `data()` properties for the form data that will be generated so we can bind these form elements to the data in our Vue application. The `data()` option should be entered below the comment that reads `/* TODO: Add form data properties and methods */`.
  - Note that the name of each data property must match the name of the `id` in each input field on the form.

```javascript
...
  template: 
  /* TODO: Add <form> element below last <p> tag */
  /*html*/
  `<div class="componentBox">
    <h4 style="text-align:center;">Food Preferences</h4>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>
    <form>
    <label for="passenger">Passenger:  </label>
    <input id="passenger">

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
    <br><br>

    <label for="allergies">Do you have food allergies?  </label>
    <select id="allergies">
      <option>Yes</option>
      <option>No</option>
    </select>
    <br><br>

    <label for="allergydesc">Describe Allergies: </label>      
    <textarea id="allergydesc"></textarea>

    <div style="text-align:center;"><input class="button" type="submit" value="Submit"></div>
    </form>
  </div>`,
  /* TODO: Add form data properties and methods */
  data() {
    return {
      passenger: '',
      glutenfree: '',
      vegan: '',
      allergies: '',
      allergydesc: '',
    }
  },
...
```

## Use v-model to create two-way binding from template to data

On each form element following `id` we add the `v-model` directive, using the same `id` as the element. For example, the tag `<input id="passenger">` becomes `<input id="passenger" v-model="passenger">`.
- Add the `v-model` directive to each form element below the comment that reads `/* TODO: Add <form> element below last <p> tag */`. The code in the `template` section of **FoodPrefs.js** should now look like the code snippet shown here.

```javascript
...
  template: 
  /* TODO: Add <form> element below last <p> tag */
  /*html*/
  `<div class="componentBox">
    <h4 style="text-align:center;">Food Preferences</h4>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>
    <form>
    <label for="passenger">Passenger:  </label>
    <input id="passenger" v-model="passenger">

    <label for="glutenfree">Gluten-free?  </label>
    <select id="glutenfree" v-model="glutenfree">
      <option>Yes</option>
      <option>No</option>
    </select>
    <br><br>
    
    <label for="vegan">Vegan?  </label>
    <select id="vegan" v-model="vegan">
      <option>Yes</option>
      <option>No</option>
    </select>
    <br><br>

    <label for="allergies">Do you have food allergies?  </label>
    <select id="allergies" v-model="allergies">
      <option>Yes</option>
      <option>No</option>
    </select>
    <br><br>

    <label for="allergydesc">Describe Allergies: </label>      
    <textarea id="allergydesc" v-model="allergydesc"></textarea>

    <div style="text-align:center;"><input class="button" type="submit" value="Submit"></div>
    </form>
  </div>`,
...
```

## Add a listener to the form and emit the event

We need to add a `listener` to the form in **FoodPrefs.js** so that when the user clicks the `Submit` button the form will capture the data. We will use `@submit.prevent="onSubmit"` for the listener on the `<form>` tag. We then need to create the method `onSubmit` for actions to be performed when the event occurs.

- Add a listener to the opening `<form>` tag below the comment that reads `/* TODO: Add <form> element below last <p> tag */`.
- The **prevent** modifier keeps the browser from refreshing the page so that the user experience remains seemless.
- Add a trigger to the listener so it will execute a method named `onSubmit`.

```javascript
...
 template: 
  /* TODO: Add <form> element below last <p> tag */
  /*html*/
  `<div class="componentBox">
    <h4 style="text-align:center;">Food Preferences</h4>
    <p style="text-align:center;"><strong>Room Service Fee</strong>{{ roomService }}</p>
    <p>Please fill out this form to let us know your food preferences.</p>
    <form @submit.prevent="onSubmit">`
...
```

- Create the `onSubmit` method in **FoodPrefs.js** for capturing form data and storing it in data properties (below the comment that reads `/* TODO: Add methods */`).
  - The method will create a `foodPrefsData` object that will capture the data submitted in the form.
  - Use `$emit` to transfer the data to the HTML interface
  - Emit a `foodPrefSubmitted` event that passes the captured information to the `foodPrefsData` property.
  - Clear out the form fields so the form can be re-used after the data has been transmitted.

```javascript
...
/* TODO: Add form data properties and methods */
  data() {
    return {
      passenger: '',
      glutenfree: '',
      vegan: '',
      allergies: '',
      allergydesc: '',
    }
  },
   computed: {
    roomService() {
      if (this.berth) {
        return `: No charge`;
      }
      return `: $24.99`;
    }
  },
/* TODO: Add methods */
  methods: {
    onSubmit() {
      let foodPrefs = {
        passenger: this.passenger,
        glutenfree: this.glutenfree,
        vegan: this.vegan,
        allergies: this.allergies,
        allergydesc: this.allergydesc,
      }
      this.$emit ('foodPrefSubmitted', foodPrefs);

      this.passenger = ''
      this.glutenfree = ''
      this.vegan = ''
      this.allergies = ''
      this.allergydesc = ''
    }
  }
})
...
```

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The first thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right. Two components are located at the bottom left. Two components are shown at the bottom left of the screen: "Food Preferences" and "Welcome Back to the Galaxy!" is shown only if this person is a previous passenger on a Galaxy Tour.](../media/m09_Food-Pref-Form.png)

## Listen for the emitted form data in the main application

The form works now, but nothing happens when we click the `Submit` button because our application does not yet have access to the data. We need to create a `listener` in the Vue template to receive the data emitted from the `component`. We will add this listener to the `<food-prefs>` tag where it is displayed in the **index.html** page. Then we need to create the `addFoodPrefs` method in our **main.js** Vue application.

- In **index.html** add a listener `@foodPrefSubmitted` to the `<food-prefs>` tag below the comment that reads `<!-- TODO: Add listener for food-prefs data -->`.
  - The listener will execute a method named `addFoodPrefs`.

```html
...
<!-- TODO: Add listener for food-prefs data -->
<food-prefs :berth="berth" @foodPrefSubmitted="addFoodPrefs"></food-prefs>
...
```

Now we modify the **main.js** application file to create an array data property and a method that will push the data elements into that array when data is emitted from the form that resides in our component.

- Add an array data property below the comment that reads `//TODO: create array property`.

```javascript
...
berth: true,
previous: true,
//TODO: create array property
foodPrefsData: [],
}
...
```

- Create a method `addFoodPrefs` below the comment that reads `//TODO: Create addFoodPrefs method`.

```javascript
...
//TODO: Create addFoodPrefs method
addFoodPrefs(foodPref) {
    this.foodPrefs.push(foodPref);
}
...
```

## Display the form data in the template

