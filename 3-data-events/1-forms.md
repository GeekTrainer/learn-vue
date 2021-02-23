The data returned by the `data()` function in a Vue app or component is generically referred to as state. State is any information your application needs to track to perform the necessary operations. Users typically modify state through HTML forms. Vue.js allows us to bind data to a form, allowing users to update state.

## v-model

The `v-model` directive creates a *two-way* binding between an HTML control and the associated data. This means whenever the value is updated in the form it is updated inside your application's state. `v-model` supports binding to any form control, including checkboxes, textboxes and dropdown lists.

> ![NOTE]
> `v-bind` creates a one-way binding, meaning any changes the user might make in the form would not be stored in state.

For all of our examples below, we will use the following Vue application:

```javascript
Vue.createApp({
    data() {
        return {
            name: 'Cheryl',
            status: -1,
            active: true,
            benefitsSelected: 'yes',
            statusList: [
                'full-time',
                'part-time',
                'contractor'
            ]
        }
    }
})
```

## Binding to textboxes

To bind to a textbox, you use the `v-model` directive.

```html
<input type="text" v-bind="name" />
```

The `name` property will be updated whenever the textbox value changes. If you wish to use a `textarea` instead, the syntax is the same; you use `v-bind="name"` just as before.

## Binding to checkboxes

Typically Boolean values are bound to checkboxes, as they allow for the option to be toggled. To bind the `active` option we can use `v-model` as we've done before:

```html
<input type="checkbox" v-bind="active" /> Is active
```

However, there may be times when the toggle isn't a Boolean value, but maybe two choices such as *yes*/*no*. In this case, we can use `true-value` and `false-value` to indicate the associated value for the checkbox being checked (true) or unchecked (false).

```html
<input type="checkbox" v-bind="benefitsSelected" true-value="yes" false-value="no"> Benefits selected: {{ benefitsSelected }}
```

## Dropdown lists

Dropdown lists are created in HTML by using `select` to create the list, and `option` to add options. The `select` tag stores the selected value of the dropdown list, so we will use it to bind to our model. To create the list of `option`s, we will use `v-for` to loop through the array.

Let's say we want to create a dropdown list for the `statusIndex` in our model. We bind the model to the select tag by using `v-model`.

We create the list of options by using `v-for`, which loops through a list of items. Because we want to set the value to be the index of the item in the array rather than the value, we use `v-for(status, index) in statusList`, which will provide the index for each item. We then set the `:value` of each option to the `index`, and display `status` as the option for the user.

```html
<select v-model="statusIndex">'
    <!-- Create a message to select one -->
    <option disabled value="">Please select one</option>
    <!-- Use v-for to create the list of options -->
    <option v-for="(status, index) in statusList" :value="index">
        {{ status }}
    </option>
</select>
