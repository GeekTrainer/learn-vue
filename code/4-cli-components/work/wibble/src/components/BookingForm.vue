<template>
    <h2>Book now!</h2>
    <form id="booking-form">
        <div class="row">
            <label for="product-cabin">Select class:</label>
            <select id="product-cabin" v-model="booking.cabinIndex">
                <option v-for="(cabin, index) in cabins" :value="index" :key="index">
                    {{ cabin.name }} $ {{ cabin.price.toLocaleString('en-US') }}
                </option>
            </select>
        </div>
        <div class="row">
            <label for="notes">Notes:</label>
            <textarea v-model="booking.notes" rows="3"></textarea>
        </div>
        <div class="row">
            <button class="button" type="button" @click="bookCabin()">Book now!</button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        cabins: Array,
    },
    data() {
        return {
            booking: this.emptyBooking()
        }
    },
    emits: ['saveBooking'],
    methods: {
        bookCabin() {
            this.$emit('saveBooking', {...this.booking});
            this.booking = this.emptyBooking();
        },
        emptyBooking() {
            return {
                cabinIndex: 0,
                notes: ''
            }
        }
    }
}
</script>

<style>

</style>