// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            product_name: 'Book a Cruise to the Moon',
            product_desc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            company_url: 'https://docs.microsoft.com/en-us/learn/',
            selected_prod_img: './assets/images/space-4888643_1284x856.jpg',
            seats_available: true,
            earlybird: true,
            num_seats_available: 26,
        }
    }
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
