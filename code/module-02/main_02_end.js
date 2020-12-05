// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            product_name: 'Book a Cruise to the Moon',
            product_desc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            //TODO: Add a property with a value for the currently selected image
            selected_prod_img: './assets/images/asteroid-5737398_1284x856.jpg',
            //Coding Challenge: Add a property with a value for the currently selected image
            company_url: 'https://docs.microsoft.com/en-us/learn/',
        }
    }
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
