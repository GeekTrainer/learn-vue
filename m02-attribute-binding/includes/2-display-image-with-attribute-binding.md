To display images in our HTML application, we will first create `<div>` tags on the page to contain our images in the left side of the screen, leaving the right side for display of detailed product information. Add the following code elements to your index.html page.

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
      <div class="main">
        <div class="product-container">
          <div class="product-images" >
            <img src="./assets/images/space-4888643_1284x856.jpg">
          </div>
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

## Bind an Attribute to an Expression

At this point we have hard-coded the name of the image file that is being displayed in the left side of our webpage, but we can bind the `src` attribute by entering its value into our Vue app. Open your main.js file and add the following code in the data() return function.

```javascript
productimage: './assets/images/space-4888643_1284x856.jpg',
```

Your main.js file should now include the following lines of code:

```javascript
const app = Vue.createApp({
    data() {
        return {
            product_name: 'Book a Cruise to the Moon',
					  selected_prod_img: './assets/images/space-4888643_1284x856.jpg',
        }
    }
})

const mountedApp = app.mount('#app')
```

Now all we have to do is change the literal `src` attribute in our HTML page to dynamically display any image of our choice. We cannot simply replace the path to our image within double curly braces like we did to display our product name. We need to include the `v-bind` directive to bind the attribute to the data defined in our Vue app. Change the `img` tag on line 18 of your HTML file to reflect the code shown below.

```html
<img v-bind:src="selected_prod_img">
```

If you have properly updated your **main.js** file and your **index.html**, the page should look the same as it did in the screenshot above. This may not seem very helpful at this point, but now our HTML interface can be updated to dynamically display a different image within this area of our page based on the current value of `selected_prod_img` in our Vue application.

## Update the value of the attribute

If you were to change the value of `selected_prod_img` in your **main.js** file to `./assets/images/asteroid-5737398_1284x856.jpg` and refresh your browser, the page would look like the image shown below.

![Screenshot showing the same HTML page displayed previously, with a new asteroid image displayed on the left side of the page.](../media/selected-product-changed-to-asteroid.png)

## Use Shorthand for Attribute Binding

Vue allows you to use shorthand syntax for v-bind. It essentially allows you to simply use the colon (:) by itself in front of an attribute, which means it is not necessary to include the text `v-bind` within the attribute binding. The result is that the following HTML syntax works just as well as the full v-bind syntax shown above.

```html
<img :src="selected_prod_img">
```
