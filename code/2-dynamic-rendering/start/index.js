const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            productImage: 'assets/cruise.jpg',
            productImageDescription: 'An astronaut floats outside the window while you sit in comfort',
            productImageStyle: {
                'border-radius': '15px'
            },
            productClasses: [
                {
                    name: 'Coach',
                    price: 125000,
                    seatsAvailable: 20,
                    earlyBird: true
                },
                {
                    name: 'Business',
                    price: 275000,
                    seatsAvailable: 6,
                    earlyBird: true
                },
                {
                    name: 'First',
                    price: 430000,
                    seatsAvailable: 2,
                    earlyBird: false
                }
            ]
        }
    },
});
