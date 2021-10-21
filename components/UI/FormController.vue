<template>
  <div class="container">
    <div class="form">
      <form>
        <label><slot /></label>
        <input
          type="text"
          v-if="controlType === 'input'"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
        <textarea
          v-if="controlType === 'textarea'"
          rows="10"
          :value="value"
          @input="$emit('input', $event.target.value)"
        ></textarea>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["controlType", "value"]
};
</script>

<style scoped>
.container {
  display: block;
  margin: 0 auto;
}
input,
textarea {
  display: block;
  width: 90%;
}
</style>
