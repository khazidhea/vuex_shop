<template>
<main class="col-sm-9">
  <ul class="list-group">
    <ProductDetail v-for="product in products" :key="product.id" :product="product"></ProductDetail>
  </ul>
</main>
</template>

<script>
import { mapState } from 'vuex'
import ProductDetail from '@/components/ProductDetail.vue'

export default {
  name: 'ProductList',
  computed: mapState({
    products: state => state.category ? state.category.products : []
  }),
  components: { 'ProductDetail': ProductDetail }
}
</script>
