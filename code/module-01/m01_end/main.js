// TODO: Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            //TODO: Define a data property item as productName with a text value
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
        }
    },
})

// TODO: Define another constant under the "app" construct to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
