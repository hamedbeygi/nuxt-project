<template>
  <post-detail :value="value" @save="onSave"></post-detail>
</template>

<script>
import PostDetail from "~/components/Posts/PostDetail.vue";
import axios from "axios";
export default {
  components: { PostDetail },
  data() {
    return {
      value: {
        title: "",
        desc: "",
        thumb: ""
      }
    };
  },
  methods: {
    onSave(post) {
      axios
        .post("https://nuxt-one-2f33d-default-rtdb.firebaseio.com/posts.json", {
          ...post,
          date: new Date()
        })
        .then(result => console.log(result))
        .catch(e => console.log(e));
      this.$router.push("/admin");
    }
  }
};
</script>
