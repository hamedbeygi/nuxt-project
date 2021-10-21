<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ desc }}</h3>
    <h3>{{ thumb }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      desc: "",
      date: new Date(),
      thumb: ""
    };
  },
  created() {
    const post = this.$store.getters.posts.find(
      post => post.id == this.$route.params.id
    );
    this.title = post.title;
    this.desc = post.desc;
    this.thumb = post.thumb;
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
h2,
h3 {
  margin: 2em auto;
}
</style>
