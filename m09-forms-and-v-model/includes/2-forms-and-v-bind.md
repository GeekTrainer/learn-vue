## Forms

Your HTML interface should look similar to the one shown in the screenshot below. In this section we will add a form to the "Food Preferences" component that is located at the bottom left side of the screen.

![Screenshot showing the HTML page with a selected product image on the left and 4 thumbnail images below it. The first thumbnail from the left is highlighted with a yellow background. Product name and description are displayed on the right. Two components are located at the bottom left. Two components are shown at the bottom left of the screen: "Food Preferences" and "Welcome Back to the Galaxy!" is shown only if this person is a previous passenger on a Galaxy Tour.](../media/m09_start.png)

## Create form and data properties
Create a `<form>` tag in the **FoodPrefs.js** file, which is located under the **components** folder. To bind the data, we will also enter data() properties in the same file.

- Add the `<form>` element content shown here in the **FoodPrefs.js** file below the comment that reads `/* TODO: Add <form> element below last <p> tag */`
  - The `<form>` element will go under the paragraph that reads "Please fill out this form to let us know your food preferences."
- Add new `data()` properties for the form data that will be generated so we can bind these form elements to the data in our Vue application. The `data()` option should be entered below the comment that reads `/* TODO: Add form data properties */`.
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
  /* TODO: Add form data properties */
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
  }
})
```

## Use v-model to create two-way binding from template to data
On each form element following `id` we add the `v-model` directive, using the same `id` as the element. For example, the tag <input id="passenger"> becomes <input id="passenger" v-model="passenger">.
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

## Add a listener to the form for the submit event
We need to add a `listener` to the form so that When the user clicks the submit button the form will capture the data. We will use `@submit.prevent="onSubmit"`.
- The **prevent** modifier keeps the browser from refreshing the page so that the user experience remains seemless.
- We will need to add an `onSubmit` method to be executed when the listener hears the click of the Submit button.

Now we have accomplished a save of the data submitted through our form, but the data still lives within the isolated scope of this form. So we need to make this data available to all components within the template. We do this using `$emit` with the data property that contains the submitted data.

We also need to clear out the fields in the form so it can be used again. Otherwise, each time the form is activated it will contain pre-filled field entries.

## Import the submitted form data into our template.
Open **index.html** and add the script source for this new component below the comment that reads `<!-- TODO Import additional components -->`.

## Use the component in the template
<review-form></review-form>

The form works, but nothing happens with the data when we click the Submit button.
We have added a listener in the form to `$emit` the event when the button is submitted, but we also need to add a listener in the template to receive the information.

In the `<review-form>` tag we add a listener that is attached to a method that will be executed when a review-form is submitted.
- In the **ReviewForm.js** file, add the listener to the `<review-form>` tag below the comment that reads TODO: Add form component here

Add reviews data array

Add review method that pushes the new review into the reviews array.

## Display the reviews
