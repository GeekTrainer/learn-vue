To start using Vue.js we need to install the framework, create an app, and then register it on the page. Let's see how this is done.

## Adding Vue.js to a page

There are a few different ways of adding Vue.js to an application. In this module we will explore how you can implement Vue by adding a `script` element to import Vue from a content delivery network (or CDN). By using a CDN it's possible to add Vue to existing applications without having to completely rewrite them.

To add Vue to a page by using the CDN, you add the following `script` element to your page.

```html
<script src="https://unpkg.com/vue@next"></script>
```

This will tell the browser to run the script file referenced in the `src` directive. After it runs, Vue's APIs will become available.

## Creating an app

All Vue.js applications begin with creating an app object. The app is the central location for any data and methods your application will use. While the app object follows certain conventions, at its core it is just a JavaScript object. We then make it a Vue app by calling `createApp`.

```javascript
const App = Vue.createApp({
    // methods and content go here
});
```

## Adding data

The first method, and the one we'll focus on in this module, added to most app objects is `data()`. `data()` is used by Vue.js to access any information you need to make available to your application. `data()` will return a JavaScript object.

Any of the properties inside the object returned by `data()` are dynamic. If the values change, Vue.js will automatically detect those updates and refresh the appropriate portions of the display as needed with the updated information.

The object itself can be named whatever you like; we will use the name `App` in this example.

```javascript
// a sample app object
const App = Vue.createApp({
    data() {
        return {
            firstName: 'Christopher',
            lastName: 'Harrison'
        };
    }
});
```

## Mounting the app

In order for Vue.js to use the created app object it must be mounted. By mounting the app you are telling Vue.js the portion of the page it controls, allowing it to display information or even HTML. To mount the application you reference the `id` of an ordinary HTML element.

```html
<!-- the HTML element which will host our app -->
<div id='app'>
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    const App = Vue.createApp({
        data() {
            return {
                firstName: 'Christopher',
                lastName: 'Harrison'
            };
        }
    });
    // Registering and mounting our app
    App.mount('#app');
</script>
```

## Displaying data

To display data on the page you use the `{{ }}` syntax, sometimes called **handlebars**. Inside `{{ }}` you can provide whatever JavaScript code is necessary to access the information you wish to display.

You will notice we created a `data()` function earlier which returns an object. Vue.js will automatically make the object available, so there is no need to call `data()`. If you wish to display the `firstName` from before you can use the syntax `{{ firstName }}`. You can see the full application below, which can display `lastName` and `firstName`.

```html
<!-- the HTML element which will host our app -->
<div id='app'>
    {{ lastName }}, {{ firstName }}
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    const App = Vue.createApp({
        data() {
            return {
                firstName: 'Christopher',
                lastName: 'Harrison'
            };
        }
    });
    // Registering and mounting our app
    App.mount('#app');
</script>
```

> ![NOTE]
> The `{{ }}` syntax will only work inside elements which are controlled by Vue. This could either be inside of a component (which is covered in other modules), or inside the HTML element "mounted" by Vue.
