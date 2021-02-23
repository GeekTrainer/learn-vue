<template>
<section>
    <h2>Book now!</h2>
    <form>
        <div class="row">
            <label for="product-cabin">Select class:</label>
            <select id="product-cabin" v-model="cabinIndex">
                <option disabled value="-1">Select a cabin</option>
                <option v-for="(cabin, index) in cabins" :value="index" :key="index">
                    {{ cabin.name }} $ {{ cabin.price.toLocaleString('en-US') }}
                </option>
            </select>
        </div>
        <div class="row">
            <button class="button" type="button" @click="bookCabin">Book now!</button>
        </div>
    </form>
</section>
</template>

<script>
export default {
    name: 'BookingForm',
    props: {
        cabins: Array,
    },
    emits: ['bookingCreated'],
    data() {
        return {
            cabinIndex: -1
        }
    },
    methods: {
        bookCabin() {
            // validate the user has selected a cabin
            if (this.cabinIndex < 0) return;
            this.$emit('bookingCreated', this.cabinIndex);
            this.cabinIndex = -1;
        },
    }
}
</script>

<style>

</style>