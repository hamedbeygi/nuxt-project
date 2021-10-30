<template>
  <post-detail :value="value" @save="doSave" @cancel="cancel"></post-detail>
</template>

<script>
import PostDetail from "~/components/Posts/PostDetail.vue";
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
      this.$store
        .dispatch("editPost", { post, id: this.$route.params.id })
        .then(() => this.$router.push("/admin"));
    },
    cancel() {
      this.$router.go(-1);
    }
  }
};
</script>
