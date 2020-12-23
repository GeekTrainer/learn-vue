//TODO: Create the VueJS app
const app = Vue.createApp({
    data() {
        return {
            //TODO: Define a data property
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
        }
    },
})

//TODO: Mount the Vue app to the DOM
const mountedApp = app.mount('#app')
