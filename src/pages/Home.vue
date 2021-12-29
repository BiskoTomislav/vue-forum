<template>
  <div class="col-large push-top">
    <h1>Welcome</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList'

export default {
  name: 'PageHome',
  components: {
    CategoryList
  },
  data () {
    return {
      categories: sourceData.categories
    }
  }
}
</script>

<style scoped>

</style>
