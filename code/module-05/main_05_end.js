// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            //TODO: add a cart property with an initial value set to 0
            cart: 0,
            product_name: 'Book a Cruise to the Moon',
            product_desc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            company_url: 'https://docs.microsoft.com/en-us/learn/',
            selected_prod_img: './assets/images/space-4888643_1284x856.jpg',
            seats_available: true,
            earlybird: true,
            num_seats_available: 75,
            passenger_rates: ['$125,000 - Coach class', '$150,000 - Business class', '$250,000 - First class', '$400,000 - First class with sleeping berth'],
            //TODO: Add an array of values to display group discount rates
            group_discounts: ['$1,000 (each person) - groups of 3-4', '$1,250 (each person) - groups of 5-6', '$1,750 (each person) - groups of 7-10', '$2,500 (each person) - groups of 11 or more'],
            features: [
                {id: 20511, feature: `Cruise to the Moon`, image: `./assets/images/space-4888643_1284x856.jpg`},
                {id: 20512, feature: `Asteroid Fireworks Display`, image: `./assets/images/asteroid-5737398_1284x856.jpg`},
                {id: 20513, feature: `Bullet Train through the Center of the Earth`, image: `./assets/images/fantasy-5732286_1284x856.jpg`},
                {id: 20514, feature: `Alien Ride-Along for Titanium Mining`, image: `./assets/images//spaceship-5730066_1284x856.jpg`},
            ]
        }
    //TODO: enter a comma (,) following the curly brace that ends the data property
    },
    //TODO: Create a method to calculate items added to the booking cart
    methods: {
        addItemToCart() {
            this.cart += 1
        }
    },
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
