<template>
  <post-detail :value="value" @save="onSave" @cancel="cancel"></post-detail>
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
      this.$store
        .dispatch("addPost", post)
        .then(() => this.$router.push("/admin"));
    },
    cancel() {
      this.$router.go(-1);
    }
  }
};
</script>
