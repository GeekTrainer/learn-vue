//Create the VueJS app
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            companyUrl: 'https://docs.microsoft.com/en-us/learn/',
            selectedProdImg: './assets/images/space-4888643_1284x856.jpg',
            //TODO: create boolean data property for each thumbnail

            


            seatsAvailable: true,
            earlybird: true,
            numSeatsAvailable: 75,
            passengerRates: ['$125,000 - Coach class', '$150,000 - Business class', '$250,000 - First class', '$400,000 - First class with sleeping berth'],
            groupDiscounts: ['$1,000 (each person) - groups of 3-4', '$1,250 (each person) - groups of 5-6', '$1,750 (each person) - groups of 7-10', '$2,500 (each person) - groups of 11 or more'],
        }
    },
    methods: {
        addItemToCart() {
            this.cart += 1;
        },
        removeItemFromCart() {
            if (this.cart >=1) {
                this.cart -= 1;
            }
        },
        //TODO: set boolean values for each feature
        featureBookCruise() {
            this.selectedProdImg = './assets/images/space-4888643_1284x856.jpg';
        },
        featureAsteroid() {
            this.selectedProdImg = './assets/images/asteroid-5737398_1284x856.jpg';
        },
        featureBulletTrain() {
            this.selectedProdImg = './assets/images/fantasy-5732286_1284x856.jpg' ;
        },
        featureAlienShip() {
            this.selectedProdImg = './assets/images/spaceship-5730066_1284x856.jpg';
        },
    },
})
