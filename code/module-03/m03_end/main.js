//Create the VueJS app
const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            companyUrl: 'https://docs.microsoft.com/en-us/learn/',
            selectedProdImg: './assets/images/space-4888643_1284x856.jpg',
            //TODO: Add seatsAvailable boolean
            seatsAvailable: true,
            //TODO: Add earlybird boolean
            earlybird: true,
            //TODO: Add numSeatsAvailable numeric
            numSeatsAvailable: 26,
        }
    }
})

//Mount the Vue app to the DOM
const mountedApp = app.mount('#app')
