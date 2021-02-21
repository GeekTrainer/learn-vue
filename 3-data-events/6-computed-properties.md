By using the handlebars syntax (`{{ }}`), we are able to display values and inject JavaScript into our HTML. While this is powerful, it can lead to confusing or repetitive code. You can use computed properties in Vue to offload calculations and other forms of dynamic strings.

## Creating a computed property

Much in the same way methods are added under a `methods` field, computed properties are added to the `computed` field. A computed property is a function which returns a value. Just like a method from before, a computed property is able to access the active instance of Vue by using `this`.

You can use computed properties to combine `firstName` and `lastName` into a `fullName` property, perform lookups in an array to return the correct value, or anything else which might be dynamic.

Creating the `fullName` example would look like this:

```javascript
const app = Vue.createApp({
    data() {
        return {
            firstName: 'Cheryl',
            lastName: 'Smith'
        }
    },
    computed: {
        fullName() {
            return `${lastName}, ${firstName}`
        }
    },
});

