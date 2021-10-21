<template>
  <div>
    <div v-if="show" class="backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidebar">
        <ul @click="$emit('close')">
          <li><nuxt-link to="/">Blog</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["show"]
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  background-color: white;
  display: block;
  height: 100%;
  width: 50%;
  z-index: 10;
}
.backdrop {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 9;
}
ul {
  height: 100%;
}
li {
  list-style: none;
  padding: 0.5em;
}
a {
  text-decoration: none;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
