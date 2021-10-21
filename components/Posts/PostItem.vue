<template>
  <div class="container">
    <div class="con2">
      <div
        class="thumbnail"
        style="background-image: url('https://www.exasol.com/app/uploads/2020/06/women-in-tech.jpg');"
      ></div>
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "thumb"]
};
</script>

<style scoped>
.container {
  width: 400px;
  height: 320px;
  margin: 3em auto;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
}
.container:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.con2 {
  cursor: pointer;
}
.thumbnail {
  height: 200px;
  width: 100%;
  background-position: center;
  background-size: cover;
}
</style>
