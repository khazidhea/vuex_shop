<template>
  <div class="row">
    <CategoryList></CategoryList>
    <ProductList></ProductList>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'home',
  components: {
    CategoryList, ProductList
  }
}
</script>
