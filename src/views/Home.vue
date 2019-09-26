<template>
  <div class="row">
    <CategoryList></CategoryList>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'

export default {
  name: 'home',
  components: {
    CategoryList
  }
}
</script>
