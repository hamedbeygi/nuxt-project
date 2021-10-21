<template>
  <div>
    <TheHeader @toggleSide="togglenav" />
    <the-side-nav :show="show" @close="togglenav" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSideNav from "~/components/Navigation/TheSideNav.vue";
export default {
  components: {
    TheHeader,
    TheSideNav
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    togglenav() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
</style>
