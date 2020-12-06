// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            product_name: 'Book a Cruise to the Moon',
            //TODO: Create two properties named product_desc and company_url and assign each a text value
            product_desc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            company_url: 'https://docs.microsoft.com/en-us/learn/',
            selected_prod_img: './assets/images/space-4888643_1284x856.jpg',
            //TODO: Create a seats_available property and set the value to "true"
            seats_available: true,
            //TODO: Create an earlybird property with a boolean value
            earlybird: true,
            //TODO: Create a num_seats_available property with a numeric value 100 so we can perform conditional rendering based on numeric equations
            num_seats_available: 26,
        }
    }
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')