<template>
  <ForumList v-for="category in categories" :key="category.id" :forums="getForumsForCategory(category)"
             :category-id="category.id"
             :category-name="category.name"/>
</template>

<script>
import ForumList from '@/components/ForumList'
import sourceData from '@/data.json'

export default {
  name: 'CategoryList',
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      forums: sourceData.forums
    }
  },
  methods: {
    getForumsForCategory (category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
