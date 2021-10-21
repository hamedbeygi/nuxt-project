<template>
  <div class="image">
    <TheSideNavToggle @toggle="$emit('toggleSide')" />
    <div class="background">
      <nuxt-link to="/"><h2>WD Blod</h2></nuxt-link>
      <ul>
        <li><nuxt-link to="/posts" class="red">Blog</nuxt-link></li>
        <li><nuxt-link to="/about" class="red">About</nuxt-link></li>
        <li><nuxt-link to="/admin" class="red">Admin</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";
import TheSideNav from "~/components/Navigation/TheSideNav";
export default {
  components: {
    TheSideNavToggle,
    TheSideNav
  }
};
</script>
<style scoped>
.background {
  display: flex;
  align-content: center;
  background-color: black;
  color: white;
  justify-content: space-around;
  margin: 2em 1em;
  border-radius: 2em;
}
.image {
  background-image: url("~assets/pic2.jpg");
  background-position: center;
  background-size: cover;
  height: 300px;
  padding: 20px;
}
ul {
  list-style: none;
  display: flex;
}
li {
  margin: auto 1em;
}
.red:hover,
.red:active,
.red.nuxt-link-active {
  color: red;
}
a {
  color: white;
  text-decoration: none;
}

@media (max-width: 650px) {
  ul {
    display: none;
  }
  div {
    justify-content: normal;
  }
  h2 {
    margin-left: 1em;
  }
}
</style>
