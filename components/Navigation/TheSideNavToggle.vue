<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.bar {
  height: 3px;
  background-color: white;
  width: 90%;
  border-radius: 2em;
}
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35px;
  cursor: pointer;
  height: 2em;
  margin-top: 1.15em;
  margin-left: 1em;
}

@media (min-width: 650px) {
  .drawer-toggle {
    display: none;
  }
}
</style>
