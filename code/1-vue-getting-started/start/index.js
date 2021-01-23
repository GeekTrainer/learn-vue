const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            // additional properties later
            productImage: 'assets/cruise.jpg',
            productImageDescription: 'An astronaut floats outside the window while you sit in comfort',
            productImageStyle: {
                'border-radius': '15px'
            }
        }
    },
});
