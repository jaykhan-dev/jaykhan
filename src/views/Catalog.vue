<template>
<div class="text-white">
    <h1 class="lg:text-8xl font-bold my-8">Catalog</h1>
    <CatalogAPI />
</div>
</template>

<script>
import CatalogAPI from '../components/CatalogAPI.vue'

export default {
    name: 'Catalog',
    components: {
        CatalogAPI,
    }
}
</script>