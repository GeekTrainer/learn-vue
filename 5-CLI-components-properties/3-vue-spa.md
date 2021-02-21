The previous overview gave you an explanation of what a Single File Application is and why you would use them. Let's now turn to the structure of the application model itself in order to get a better technical understanding of the SPA architecture.

Using File Explorer (or Finder on the Mac), browse to the root directory of the project you created using the CLI and open the `src` folder. Inside, you'll see a file called `App.vue` which is the primary Vue file for this application. Open this file in your code editor.

You should see two main sections in this file: a `<template>` section and a `<style>` section. As mentioned in an earlier topic, `.vue` files contain all the basic information needed to render the HTML. `.vue` files also can have a `<script>` section which can contain any JavaScript that you might need in your project. We'll examine this more closely below. Let's look at each of the sections in turn.

## The Template Section


If you look closely at this section, you'll notice that it's essentially HTML that will be rendered to the application pages at run time. In this HTML you can use Vue constructs as well as general HTML. In `App.vue` you should see two `router-link` directives which pull in other `.vue` files that will be used in the final rendering. You can examine the `Home.vue` and `About.vue` files in the `views` subfolder. When you examine these files, you'll see content that is rendered in your sample application and carefully examining the structure will help you understand how you can build on this model for your own application.

>[!HINT]
>Hint: The routes are declared in `index.js` in the `router` subfolder and are imported in `main.js` which is a peer to `App.vue`.

## The Script Section


As mentioned earlier, the script section of a `.vue` file contains JavaScript that will be used when the project is rendered. Let's take a look at another `.vue` file to see how this works.

- Browse to the `views` subfolder under the `src` folder of your project.
- Open the `Home.vue` file in your code editor.
- Find the `<script>` section and take a look at it.

You should notice that the JavaScript in this section imports yet *another* `.vue` file, `HelloWorld.vue`. The script imports this file and exports it as a component. If you look at `HelloWorld.vue` you'll notice that it's mostly HTML in the `<template>` section that will render most of what you see in your rendered Vue app. This is the power of modular Vue apps that use various components. Vue handles all the plumbing so you can develop components as independent parts of an overall application and then bring them together at build time.

You can think about how this might work when building a project with a team of developers. If the project is designed and architected appropriately, various components can be given to specific developers to work on. They can create `.vue` files with all the HTML, scripts, and styles those components require and then, at build time, all the components can be brought together to create a single application.

## The Style Section


Very simply, this section contains CSS styles that can be referenced in the HTML in the `<template>` section. Because of the way Vue brings each component together to render a single app, styles used in any component can be referenced in any other. There's one exception: if a specific style includes the `scoped` keyword, that style will only be able to be referenced by the component in which the style appears.

## Conclusion

We've now seen how the CLI can be used to accelerate the initial set up of a new project. We've also seen how using components can help with collaborative development and keeping the relevant assets and code for specific aspects of an application contained and modularized. This really illustrates the power of a framework like Vue and, when used to its full potential, can help improve overall application development.
