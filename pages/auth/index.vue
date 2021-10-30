<template>
  <div class="main">
    <form @submit.prevent="login">
      <div>
        <form-controller v-model="email" controlType="input"
          >Email</form-controller
        >
        <form-controller v-model="pass" controlType="password"
          >Password</form-controller
        >
      </div>
      <div class="buttons">
        <base-button type="submit" mode="black">{{
          isLogin ? "Login" : "Sign Up"
        }}</base-button>
        <base-button type="button" @click="changeMode"
          >Switch to {{ isLogin ? "Sign Up" : "Login" }}</base-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import FormController from "~/components/UI/FormController.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import axios from "axios";
export default {
  components: { FormController, BaseButton },
  layout: "none",
  data() {
    return {
      isLogin: true,
      email: "",
      pass: ""
    };
  },
  methods: {
    changeMode() {
      this.isLogin = !this.isLogin;
    },
    login() {
      this.$store
        .dispatch("login", {
          mode: this.isLogin,
          email: this.email,
          pass: this.pass
        })
        .then(() => this.$router.push("/admin"))
        .catch(e => console.log(e));
    }
  }
};
</script>

<style scoped>
.main {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  padding: 1em;
  background-color: rgb(223, 223, 223);
}
.buttons {
  margin-top: 1em;
}
</style>
