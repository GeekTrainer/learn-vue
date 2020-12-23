//Create the VueJS app
const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            companyUrl: 'https://docs.microsoft.com/en-us/learn/',
            //TODO: Add a property with a text value for the selectedProdImg
            selectedProdImg: './assets/images/space-4888643_1284x856.jpg',
        }
    }
})

//Mount the Vue app to the DOM
const mountedApp = app.mount('#app')
