Events are actions which we know can occur in our application but we don't necessary know when. For example, if you have a button on a page you know it's likely the user will click on it, but the timing is unknown. Handling events is a key component to creating any web application. We will explore how Vue.js allows you to manage events.

## v-on directive and @

Vue.js provides a directive called `v-on` which can be bound to any event, such as `v-on:click`. However, since handling events is a core task Vue.js also provides the `@` shortcut for any event. To bind a click event you can use `@click` instead.

## Creating event handlers

You can create event handlers by adding functions to the `methods` field in a Vue application or component. `methods` is just like `data()`, only instead of returning state objects it maintains a list of available functions for your application. You can then reference these in your HTML in the same way you would reference other JavaScript functions. The key reason to add functions to the `methods` field is the functions can access any registered data.

When adding a method to a Vue app or component, `this` points to the active instance. Any data available to the active instance, such as `name` in our example below, is accessible from `this`.

To create a method which would display the `name` when called, we could add it like this:

```javascript
const app = Vue.createApp({
    data() {
        return {
            name: 'Cheryl'
        }
    },

    methods: {
        displayName() {
            console.log(this.name);
        }
    }
});
```

We can then execute the function when a button is clicked by setting it to the `@click` attribute:

```html
<button type="button" @click="displayName">Display name</button>
