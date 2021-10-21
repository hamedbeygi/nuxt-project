<template>
  <post-detail :value="value" @save="doSave"></post-detail>
</template>

<script>
import PostDetail from "~/components/Posts/PostDetail.vue";
import axios from "axios";
export default {
  components: {
    PostDetail
  },
  data() {
    return {
      value: {
        title: "",
        desc: "",
        thumb: ""
      }
    };
  },
  created() {
    const post = this.$store.getters.posts.find(
      post => post.id == this.$route.params.id
    );
    this.value.title = post.title;
    this.value.desc = post.desc;
    this.value.thumb = post.thumb;
  },
  methods: {
    doSave(post) {
      axios
        .put(
          "https://nuxt-one-2f33d-default-rtdb.firebaseio.com/posts/" +
            "" +
            ".json",
          post
        )
        .then(res => console.log(res))
        .catch(e => console.log(e));
    }
  }
};
</script>
