<template>
    <div class="nav-bar"></div>
    <h1>Relecloud Galaxy Tours</h1>

    <div>
        <h2>{{ product.name }}</h2>
        <div>{{ product.description }}</div>
        <hr />

        <div class="row">
            <div>
                <booking-form @save-booking=addBooking :cabins=product.cabins></booking-form>
            </div>

            <div>
                <booking-list :bookings=bookings></booking-list>
            </div>
        </div>
    </div>
</template>

<script>
import BookingForm from './BookingForm.vue'
import BookingList from './BookingList.vue'

export default {
    name: 'Host',
    data() {
        return {
            product: {
                name: 'Cruise to the moon',
                description: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
                image: {
                    src: '../assets/cruise.jpg',
                    description: 'An astronaut floats outside the window while you sit in comfort',
                    style: { 'border-radius': '15px' },
                },
                cabins: [
                    { name: 'Coach', price: 125000 },
                    { name: 'Business', price: 275000 },
                    { name: 'First', price: 430000 },
                ]
            },
            bookingFormInfo: {
                cabinIndex: 0,
                notes: ''
            },
            bookings: [],
        }
    },
    methods: {
        addBooking(bookingFormInfo) {
            const booking = {
                cabin: this.product.cabins[bookingFormInfo.cabinIndex].name,
                price: this.product.cabins[bookingFormInfo.cabinIndex].price,
                notes: bookingFormInfo.notes
            }
            this.bookings.push(booking);
        }
    },
    components: {
        BookingForm,
        BookingList
    },
}
</script>

<style>
body {
  background-color: #f2f2f2;
  margin: 0, 5%;
  font-family: tahoma;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  vertical-align: middle;
  margin: 2em;
}

.button {
  background-color: #39495c;
  border-radius: 5px;
  color: white;
  text-align: center;
}

.nav-bar {
  background: linear-gradient(-50deg, #010801, #0d0d60);
  height: 60px;
  margin-bottom: 25px;
}
</style>