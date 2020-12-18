// Create the VueJS app using a constant named app
const app = Vue.createApp({
    data() {
        return {
            //TODO: add a cart property with an initial value set to 0
            
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
    //TODO: enter a comma (,) following the curly brace that ends the data property
}
//TODO: Create a method to calculate items added to the booking cart




//TODO: Create 4 methods (one for each thumbnail image) to change the selected image whenever the thumbnail is clicked

})

// Define another constant to mount the Vue app to the DOM
const mountedApp = app.mount('#app')
