<template>
  <div class="col-large push-top">
    <h1>{{ category.name }}</h1>
    <ForumList :category-name="category.name" :forums="getForumsForCategory(category)"/>
  </div>
</template>

<script>
import ForumList from '@/components/ForumList'
import sourceData from '@/data.json'

export default {
  name: 'CategoryShow',
  components: {
    ForumList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    category () {
      return sourceData.categories.find(category => category.id === this.id)
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
