// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            //TODO: Add a property with a text value for the selectedProdImg

        }
    }
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
