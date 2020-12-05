//TODO: Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            //TODO: Define a data property item as product_name with a text value
            product_name: 'Book a Cruise to the Moon'
        }
    },
})

//TODO: Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
