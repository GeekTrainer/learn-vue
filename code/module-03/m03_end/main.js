// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            companyUrl: 'https://docs.microsoft.com/en-us/learn/',
            selectedProdImg: './assets/images/space-4888643_1284x856.jpg',
            //TODO: Add a seatsAvailable property with a boolean value
            seatsAvailable: true,
            //TODO: Create an earlybird property with a boolean value
            earlybird: true,
            //TODO: Create a numSeatsAvailable property with a numeric value so we can perform conditional rendering based on numeric equations
            numSeatsAvailable: 26,
        }
    }
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
