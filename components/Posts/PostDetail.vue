<template>
  <div class="form">
    <form @submit.prevent="save">
      <div>
        <form-controller
          v-model="editedPost.title"
          controlType="input"
          :value="value.title"
          >Title</form-controller
        >
        <form-controller
          v-model="editedPost.thumb"
          controlType="input"
          :value="value.desc"
          >Thumbnail</form-controller
        >
        <form-controller
          v-model="editedPost.desc"
          controlType="textarea"
          :value="value.thumb"
          >Description</form-controller
        >
      </div>
      <div class="f2">
        <base-button type="submit" mode="black">Save</base-button>
        <base-button @click="cancel" mode="red">Cancel</base-button>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "~/components/UI/BaseButton.vue";
import FormController from "~/components/UI/FormController.vue";

export default {
  props: ["value"],
  components: {
    BaseButton,
    FormController
  },
  data() {
    return {
      editedPost: this.value
        ? { ...this.value }
        : {
            title: "",
            desc: "",
            thumb: ""
          }
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    save() {
      this.$emit("save", this.editedPost);
    }
  }
};
</script>

<style scoped>
.form {
  margin: 2em auto;
  width: 60%;
}

.f2 {
  margin: 1em auto;
  padding: 0 8em;
  justify-content: center;
  display: flex;
  justify-content: space-around;
}
</style>
