//Create the VueJS app
const app = Vue.createApp({
    data() {
        return {
            //TODO: Add cart property
            
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            companyUrl: 'https://docs.microsoft.com/en-us/learn/',
            selectedProdImg: './assets/images/space-4888643_1284x856.jpg',
            seatsAvailable: true,
            earlybird: true,
            numSeatsAvailable: 75,
            passengerRates: ['$125,000 - Coach class', '$150,000 - Business class', '$250,000 - First class', '$400,000 - First class with sleeping berth'],
            groupDiscounts: ['$1,000 (each person) - groups of 3-4', '$1,250 (each person) - groups of 5-6', '$1,750 (each person) - groups of 7-10', '$2,500 (each person) - groups of 11 or more'],
        }
    //TODO: Add a comma
}
//TODO: Increment value of cart




//TODO: Change selected image

})

//Mount the Vue app to the DOM
const mountedApp = app.mount('#app')
