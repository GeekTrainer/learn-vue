// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            companyUrl: 'https://docs.microsoft.com/en-us/learn/',
            selectedProdImg: './assets/images/space-4888643_1284x856.jpg',
            seatsAvailable: true,
            earlybird: true,
            //TODO: Set num_seats_available to 75
            numSeatsAvailable: 0,
            //TODO: Add an array of values to display passenger rates
            
        }
    }
})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
