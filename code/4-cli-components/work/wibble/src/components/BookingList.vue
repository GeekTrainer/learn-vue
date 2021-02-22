<template>
    <h2>
        Here's your current bookings:
    </h2>

    <div class="row" v-for="(booking, index) in bookings" :key="index">
        <div>{{ booking.cabin }} </div>
        <div>Notes: {{ booking.notes }}</div>
    </div>

    <h3 class="row">
        Total: {{ totalDisplay }}
    </h3>
</template>

<script>
export default {
    props: {
        bookings: Array
    },
    computed: {
        totalDisplay() {
            let totalCost = 0;
            if (this.bookings && this.bookings.length > 0) {
                totalCost = this.bookings.map(b => b.price).reduce((a, b) => a + b);
            }
            return '$ ' + totalCost.toLocaleString('en-US');
        }
    }
}
</script>

<style>

</style>