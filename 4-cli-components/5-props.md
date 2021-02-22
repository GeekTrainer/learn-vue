HTML elements can display information to the user and allow interaction with the page. We can pass information into the element using attributes, and respond to various events like click. When we create a Vue component we are in essence creating a custom HTML element. As a result, we can implement this same type of functionality through props and custom events.

## Props as attributes

Props, short for properties, are a collection of different attributes we can add to our components. Their values can be set by the caller in the same fashion as an HTML attribute - a key/value pair. We declare props on a component by setting the `props` property inside the `script` section.

```html
<script>
export default {
    name: 'UserDisplay',
    props: ['lastName', 'firstName']
}
</script>
```

In the above example, we can set the values for the properties `lastName` and `firstName` by adding attributes to the `user-display` element the component creates. Notice the names will be converted into kebab-case, just like the name of the component itself.

```html
<user-display first-name="Cheryl" last-name="Smith"></user-display>
```

We can also create more robust props by creating a template for the object, similar to how you might declare a schema. If we had a `user` object with `firstName` and `lastName` properties of type `String`, we can register it in our component as follows:

```html
<script>
export default {
    user: {
        firstName: String,
        lastName: String
    }
    props: ['lastName', 'firstName']
}
</script>
```

We can then use the component with the following:

```html
<template>
<user-display user="user"></user-display>
</template>

<script>
import UserInfo from './UserInfo.vue';
export default {
    data() {
        return {
            user: {
                firstName: 'Cheryl',
                lastName: 'Smith'
            }
        }
    },
    components: {
        UserDisplay
    }
}
```

> ![IMPORTANT]
> Props are designed to be read-only for a component. If you need to modify values you can use `data()`.

## Events

HTML elements can raise events based on user interaction. Components allow us to do the same thing by emitting events. When creating the component you register any events your component may emit by listing them in the `emits` field in the `script`.

```html
<!-- inside the component's vue file -->
<script>
export default {
    // normal component fields
    emits: ['saveUser']
}
</script>
```

Emitting an event is done by using the `emit` function. You can call this function directly inside an event handler using the normal Vue syntax:

```html
<!-- inside the component's vue file -->
<template>
<!-- the rest of the template -->
<button @click="emit('saveUser')">Save user</button>
</template>
```

You can also emit an event from inside a method by using `this.$emit`.

```html
<!-- inside the component's vue file -->
<script>
export default {
    // normal component fields
    emits: ['saveUser']
}
</script>
```

