//Create the VueJS app
const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            //TODO: Add property selectedProdImg

        }
    }
})

//Mount the Vue app to the DOM
const mountedApp = app.mount('#app')
