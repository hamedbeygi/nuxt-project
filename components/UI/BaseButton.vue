<template>
  <button :class="mode" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: ["mode"]
};
</script>

<style scoped>
button {
  padding: 1em 1.4em;
  border: none;
  cursor: pointer;
  font-family: inherit;
}
.red {
  background-color: red;
  color: white;
}
.white {
  background-color: white;
  color: black;
}
.black {
  background-color: black;
  color: white;
}
</style>
