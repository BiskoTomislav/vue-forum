<template>
  <div class="col-full push-top">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
      </div>

      <div class="btn-group">
        <button class="btn btn-ghost">Cancel</button>
        <button class="btn btn-blue" type="submit" name="Publish">Publish </button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'PostEditor',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = 'myId' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }
      this.$emit('save-post', { post }) // Pass object, so argument order does not cause trouble later on, access: eventData.post
      // this.posts.push(post)
      // this.thread.posts.push(postId)

      // Clear input after submit
      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>
