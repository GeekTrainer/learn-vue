## Segment page content with `<div>` tags

To help format the display of images and product descriptions within our HTML page, let's create additional `<div>` tags to serve as information "containers". `//TODO: Create a main <div> to contain all product images and description details`, as shown in the code sample below.

Next `//TODO: create three more <div> tags to separate the product images from the detailed product descriptions` as shown in the code below. Note that this includes a link to display a specific product image that is available in the code download for this module.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Relecloud Galaxy Tours</title>
    <!-- Import Styles -->
    <link rel="stylesheet" href="./assets/styles.css" />
    <!-- Import Vue.js -->
    <script src="https://unpkg.com/vue@next"></script>
  </head>
  <body>
    <div id="app">
      <div class="nav-bar"></div>
      <h1 style="text-align: center;">Relecloud Galaxy Tours</h1>
      <!-- //TODO: create a <div> to contain all content under the page heading -->
      <div class="main">
        <!-- //TODO: create a <div> to surround product images and product details -->
        <div class="product-container">
          <!-- //TODO: Create <div> to format product images on the left -->
          <div class="product-images" >
            <img src="./assets/images/space-4888643_1284x856.jpg">
          </div>
          <!-- //TODO: Create <div> to format product descriptions on the right -->
          <div class="product-desc">
            <h2>{{ product_name }}</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Import Vue app after DOM is loaded -->
    <script src="./main.js"></script>
  </body>
</html>
```

The HTML page should look like the screenshot below when viewed in your Live browser.

![Screenshot showing the HTML page with new div sections that display an image on the left, with the product name centered in the section on the right.](../media/html-formatted-with-image-on-left.png)

## Bind an attribute to an expression

At this point we have hard-coded the name of the image file that is being displayed in the left side of our webpage, but we can bind the `src` attribute by entering a value into our Vue app data properties. `//TODO: Open your **main.js** file and add the following code in the data() return function to specify a value for your selected product image.`

Your main.js file should now include the following lines of code:

```javascript
// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            product_name: 'Book a Cruise to the Moon',
            product_desc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            //TODO: Add a property with a value for the currently selected image
            selected_prod_img: './assets/images/space-4888643_1284x856.jpg',
        }
    }
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
```

Now all we have to do is change the literal `src` attribute in our HTML page to dynamically display any image of our choice. We cannot simply replace the path to our image within double curly braces like we did to display our product name. We need to include the `v-bind` directive to bind the attribute to the data defined in our Vue app. `//TODO: Change the img tag in your HTML file to use the new property by using the v-bind directive, as shown in the code snippet below`.

```html
<!-- TODO: Change the <img src> tag to use the selected_prod_img value instead of a direct link to a specific image -->
<img v-bind:src="selected_prod_img">
```

If you have properly updated your **main.js** file and your **index.html**, the page should look the same as it did in the screenshot above. This may not seem very helpful at this point, but now our HTML interface can be updated to dynamically display a different image within this area of our page based on the current value of `selected_prod_img` in our Vue application.

## Update the value of the attribute

If you were to change the value of `selected_prod_img` in your **main.js** file to `./assets/images/asteroid-5737398_1284x856.jpg` and refresh your browser, the page would look like the image shown below.

![Screenshot showing the same HTML page displayed previously, with a new asteroid image displayed on the left side of the page.](../media/selected-product-changed-to-asteroid.png)

## Use shorthand for attribute binding

Vue allows you to use shorthand syntax for v-bind. It essentially allows you to simply use the colon (:) by itself in front of an attribute, which means it is not necessary to include the text `v-bind` within the attribute binding. The result is that the following HTML syntax works just as well as the full v-bind syntax shown above.

```html
<img :src="selected_prod_img">
```
