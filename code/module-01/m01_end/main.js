// TODO: Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            //TODO: Define a data property item as productName with a text value
            productName: 'Book a Cruise to the Moon',
        }
    },
})

// TODO: Define another constant under the "app" construct to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
