## Props

Props are custom attributes for passing data into a component. The `prop` must be defined within the same Javascript file where the `component` is defined, because all components are limited to the scope of the isolated component.

![Screenshot showing the HTML page with the main product image on the left and 4 thumbnail images below it. Product name and description are displayed on the right. A new component is displayed at bottom left within a bordered box that is titled "Food Preferences."](../media/m08-comp-food-prefs.png)

Suppose we need this component to have access to a data component that is outside of its scope? We have decided that passengers who purchase the rate for "First Class with a sleeping berth" should receive certain services for "free" or at "reduced cost." Since the main application and several components will need to access this data property, we will put it in our **main.js** file.

- Add `berth` as a boolean data property in **main.js** file below the comment that reads `//TODO: Add berth property`.

```javascript
...
//TODO: Add berth property
berth: true,
...
```

Now we need to add a `prop` that will allow our `component` to have access to the `berth` data property. Add this in our component Javascript file so the component can receive that value from the main application. We can even add some validation for the prop, such as the type of value it should be passing and whether or not the value is "required."

- Add a `props` property at the top of the **FoodPrefs.js** file below the comment that reads `//TODO: Add berth prop`.
- Add validation for the prop by specifying that it is a Boolean data property, and the prop value is "required".

```javascript
app.component('food-prefs', {
  //TODO: Add berth prop
  props: {
    berth: {
      type: Boolean,
      required: true,
    }
  },
  template: 
  /*html*/
...
```

To generate a specific case for use of the `berth` property within our `component` we can create a custom data property that is specific to our needs. We can accomplish this in our **FoodPres.js** file by defining a `computed` property.
- Add `roomService` as a `computed` property below the comment that reads `//TODO: Add computed property`.
  - if `berth` is set to `true`, return the text string 'No charge'
  - else, return the text string '$24.99'

```javascript
...
  //TODO: Add computed property
  computed: {
    roomService() {
      if (this.berth) {
        return `No charge`
      }
      return `$24.99`
    }
  }
})
```

Back in our **index.html** file we are going to add the shorthand for `v-bind` to our `component` to ensure that we will reactively receive the new value of `berth` if that property is updated within our application.

```html
...
<!-- TODO: Add component -->
<food-prefs :berth="berth"></food-prefs>
...
```

Now our Vue application should render as shown in the image below if the passenger making reservations has booked a cruise at the rate for "First class with sleeping berth" (i.e., the data property for `berth` in **main.js** is true).

![Screenshot showing the HTML page with the main product image on the left and 4 thumbnail images below it. Product name and description are displayed on the right. A new component is displayed at bottom left within a bordered box that is titled "Food Preferences." The Room Service Fee is listed as "no charge".](../media/m08-sleeping-berth.png)

For passengers who do not book a sleeping birth  (i.e., the data property for `berth` in **main.js** is flase) the new component will appear as shown in the image below.

![Screenshot showing the HTML page with the main product image on the left and 4 thumbnail images below it. Product name and description are displayed on the right. A new component is displayed at bottom left within a bordered box that is titled "Food Preferences." The Room Service Fee is listed as "$24.99".](../media/m08-no-sleeping-berth.png)
