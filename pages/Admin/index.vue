<template>
  <div>
    <div class="container">
      <base-button class="button1" mode="black" @click="createPost"
        >Create Post</base-button
      >
    </div>
    <Post />
  </div>
</template>

<script>
import Post from "~/components/Posts/Post.vue";
import BaseButton from "~/components/UI/BaseButton.vue";
export default {
  components: { Post, BaseButton },
  methods: {
    createPost() {
      this.$router.push("/admin/newPost");
    }
  }
};
</script>

<style scoped>
.container {
  margin: 2em auto 0 auto;
  display: flex;
  justify-content: center;
}
</style>
