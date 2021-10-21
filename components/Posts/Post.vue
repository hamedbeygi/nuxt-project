<template>
  <div>
    <ul>
      <li v-for="post in loadedPost" :key="post.id">
        <nuxt-link :to="editMode + post.id"
          ><post-item
            :title="post.title"
            :desc="post.desc"
            :thumb="post.thumb"
            :date="new Date()"
        /></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PostItem from "~/components/Posts/PostItem.vue";
export default {
  components: {
    PostItem
  },
  computed: {
    loadedPost() {
      return this.$store.getters.posts;
    },
    editMode() {
      if (this.$route.path === "/admin") return "/Admin/";
      else return "/Posts/";
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  width: 400px;
  height: 320px;
  margin: 3em auto;
  text-align: center;
}
li {
  list-style: none;
  margin: 3em auto;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
