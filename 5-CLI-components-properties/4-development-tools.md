FOLDER STRUCTURE
- node_modules - contains all of the libraries we need for our project
- public - put all the files that you don't want to "process" through a bundler (e.g., icon images)
- src - contains application-specific files, such as assets (images, CSS files, etc.), components (pieces of reusable code that can be displayed within the main application), and views (files for the different pages of our app).
- App.vue - root component that contains all application components
- main.js - calls the Vue.js library and mounts our app to the DOM
- router.js
- store.js (for Vuex)
- .gitignore - we can specify what we want Git to ignore
- {} package.json - which lets npm handle the dependencies for our project

main.js file
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

new Vue instance
render the app
mount the app

When the app is rendered in the HTML file, it first displays the contents in the **public** folder. The **index.html** file in that folder contains very little content. The important part of the file is the `<div>` with the id="app". This is where the built Vue files will be inserted (i.e., where the app will be mounted). You may notice the comment in **index.html** that reads: "built files will be auto injected".

Vue files are easier to create than JavaScript components because they are built with common `<html>` tags. However, these files are saved with the .vue file extension, which is not natively understood by a browser. So these .vue files have to be "built" before they can be properly rendered in an HTML interface using a build tool.

## Build Process

In the command line run the following command:
`npm run build`

If the build is successful you will receive a confirmation message indicating that the `dist` directory is ready to be deployed. Deployment instructions can be found at https://cli.vuejs.org/guide/deployment.html. The `dist` directory must be served by an HTTP server, so it will not work if you open the **index.html** file in your `dist` folder. The recommendation from the Vue website is to preview your production build locally using a Node.js static file server. However, if you have installed VSCode as your editor, you can run the built files using the VSCode Live Server. From the "Welcome" screen in VSCode, click "Open folder" and select your project folder.

Notice that the new folder named `dist` has been added to the cruise-details folder after the build process is complete. If we open the **index.html** file in that folder, we can see that the previous comment has been replaced by two new script tags. These scripts reference the Javascript files that have been bundled and placed in the `js` folder as part of the build process we just executed. The `chunk-vendors` files include all of our dependencies, and the `app` files contain all of our application-specific code - including the code that was in the original **main.js** file.

In the **views` folder under the **src** folder you will see two files with the **.vue** extension. If you open one of these files you might see text that is displayed in all one color (e.g., white font). "Vetur" can enable syntax highlighting of .vue files. It also adds features designed to assist deelopers. If you have not installed the Vetur extension, you may see a message at the top of the screen indicating that the "vetur" extension is recommended for htis file type, along with an **Install** button. Be sure you click the "reload" button after the installation is complete, or open and close VSCode.

>>HINT: If you don't see the "vetur" extension you can search for the extension.

## Vetur extension

## Syntax highlighting
Now when you open the Home.vue file in VSCode you can see that syntax highlighting is in effect for both HTML and JavaScript code.

## Tag completion
Vetur also includes time-saving snippets of code that you can easily add to your project files. Right-click on the `components` folder and select "New File". Name it "EventDetails.vue". Type the word `vue` at the top of the new file. A dropdown list will appear to show you the types of snippets you can create. Clicking `<vue> with default.vue` will create the skeleton tags you will likely need for a new Vue component:
- `<template>`
- `<script>`
- `<style>`

Notice that you could instead create just `<template>` or `<style>` tags if you only need those elements.

Vetur is also packaged with the **Emmet** toolkit for web developers, which allows you to quickly type HTML and CSS elements. For example, in the `<template>` tag you could type h1 or h2 or h3 and hit `Enter` to automatically create a pair of opening and closing heading tags, with your cursor sitting between the tags ready for you to enter text. Typing div>ul>li would produce the code shown below. To learn more about what you can do with Emmet you can visit their website at https://emmet.io/.

## Integrated Terminal
VSCode includes an integrated terminal that lets you run commands the same way we have been doing in the computer terminal window. To access this feature, click `Ctrl+`` (Windows) or `Cmd+`` (Mac). This will open 4 panels at the bottom of VSCode, and the `TERMINAL` option should be selected.


