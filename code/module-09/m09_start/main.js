//Create the VueJS app
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            productName: 'Book a Cruise to the Moon',
            productDesc: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            companyUrl: 'https://docs.microsoft.com/en-us/learn/',
            selectedProdImg: './assets/images/space-4888643_1284x856.jpg',
            isSelectedCruise: true,
            isSelectedAsteroid: false,
            isSelectedBullet: false,
            isSelectedAlien: false,
            btnTitle: 'Book a Cruise',
            bookingType: 'cruise',
            seatsAvailable: false,
            earlybird: true,
            numSeatsAvailable: 75,
            passengerRates: ['$125,000 - Coach class', '$150,000 - Business class', '$250,000 - First class', '$400,000 - First class with sleeping berth'],
            groupDiscounts: ['$1,000 (each person) - groups of 3-4', '$1,250 (each person) - groups of 5-6', '$1,750 (each person) - groups of 7-10', '$2,500 (each person) - groups of 11 or more'],
            featurePrice: 0,
            featureQty: 0,
            onSale: false,
            berth: true,
            previous: true,
            //TODO: Create array property

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
        featureBookCruise() {
            this.productName = 'Book a Cruise to the Moon';
            this.productDesc = 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.';
            this.id = '1100';
            this.selectedProdImg = './assets/images/space-4888643_1284x856.jpg';
            this.btnTitle = 'Book a Cruise';
            this.bookingType = 'cruise';
            this.isSelectedCruise = true;
            this.isSelectedAsteroid = false;
            this.isSelectedBullet = false;
            this.isSelectedAlien = false;
        },
        featureAsteroid() {
            this.productName = 'Asteroid Fireworks Display';
            this.productDesc = 'As we pass by the planet of Mars, you can watch a special fireworks event from our Viewpoint Star Surround Deck.';
            this.id = '1101';
            this.featurePrice = '12,000';
            this.featureQty = 50;
            this.onSale = false;
            this.selectedProdImg = './assets/images/asteroid-5737398_1284x856.jpg';
            this.btnTitle = 'Add Feature';
            this.bookingType = 'feature';
            this.isSelectedCruise = false;
            this.isSelectedAsteroid = true;
            this.isSelectedBullet = false;
            this.isSelectedAlien = false;
        },
        featureBulletTrain() {
            this.productName = 'Bullet Train Tour';
            this.productDesc = 'Buy a ticket on our Bullet Train for an exciting whirlwind tour through the center of the Earth.';
            this.id = '1102';
            this.featurePrice = '25,000';
            this.featureQty = 25;
            this.onSale = true;
            this.selectedProdImg = './assets/images/fantasy-5732286_1284x856.jpg';
            this.btnTitle = 'Add Feature';
            this.bookingType = 'feature';
            this.isSelectedCruise = false;
            this.isSelectedAsteroid = false;
            this.isSelectedBullet = true;
            this.isSelectedAlien = false;
        },
        featureAlienShip() {
            this.productName = 'Alien Spaceship Ride-a-long';
            this.productDesc = 'Aliens from our sister galaxy have a limited number of seats available for observers to watch Titanium mining operations on the moon.';
            this.id = '1103';
            this.featurePrice = '55,000';
            this.featureQty = 0;
            this.onSale = false;
            this.selectedProdImg = './assets/images/spaceship-5730066_1284x856.jpg';
            this.btnTitle = 'Add Feature';
            this.bookingType = 'feature';
            this.isSelectedCruise = false;
            this.isSelectedAsteroid = false;
            this.isSelectedBullet = false;
            this.isSelectedAlien = true;
        },
        //TODO: Create method to push data into array



    },
    computed: {
        featureDetails() {
            return '$' + this.featurePrice + ' (each person) - ' + this.featureQty + ' Tickets remaining';
        },
        sale() {
            if (this.onSale) {
                return this.productName + ' is on sale at 10% savings.';
            }
            return '';
        }
    }
})
