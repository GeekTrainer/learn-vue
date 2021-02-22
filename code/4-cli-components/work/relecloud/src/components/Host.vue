<template>
    <div class="nav-bar"></div>
    <h1>Relecloud Galaxy Tours</h1>

    <div id="app">
        <h2>{{ product.name }}</h2>
        <div>{{ product.description }}</div>
        <hr />


        <img v-bind:src="product.image.src" v-bind:alt="product.image.description" :style="product.image.style" />
    </div>
</template>

<script>
export default {
    props: {
        product: {
            name: String,
            description: String,
            image: {
                src: String,
                description: String,
                style: Object,
            },
            cabins: Array
        }
    }
}
</script>

<style>

</style>