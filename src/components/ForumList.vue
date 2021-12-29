<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{name: 'CategoryShow', params: {id: categoryId}}" v-if="categoryId">{{ categoryName }}</router-link>
      <span v-else >{{ categoryName }}</span>
    </h2>

    <div class="forum-listing" v-for="forum in forums" :key="forum.id">
      <div class="forum-details">
        <router-link
          :to="{name: 'ForumShow', params: {id: forum.id}}"
          href="#" class="forum-name">{{ forum.name }}</router-link>

        <p class="forum-description ">{{  forum.description }}</p>
      </div>

      <div class="threads-count">
        <p class="count text-lead">{{ forum.threads?.length }}</p> {{ forumThreadsWord(forum)}}
      </div>

      <div class="last-thread">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumList',
  props: {
    forums: {
      type: Array,
      required: true
    },
    categoryId: {
      type: String,
      required: false
    },
    categoryName: {
      type: String,
      required: true
    }
  },
  methods: {
    forumThreadsWord (forum) {
      return forum.threads?.length ? (forum.threads?.length > 1 ? 'threads' : 'thread') : ''
    }
  }
}
</script>

<style scoped>

</style>
