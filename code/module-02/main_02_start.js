// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            product_name: 'Book a Cruise to the Moon',
            product_desc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
        }
    }
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
