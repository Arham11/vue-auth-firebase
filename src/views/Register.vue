<template>
  <h3 class="mb-4">New User Registration</h3>
  <form class="col-6 mx-auto" @submit.prevent="registerUser">
    <div class="mb-4">
      <input
        type="email"
        class="form-control"
        placeholder="Email address"
        v-model="email"
      />
    </div>
    <div class="mb-4">
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Register",
  setup() {
    let email = ref("");
    let password = ref("");
    let error = ref("");
    return {
      email,
      password,
      error,
    };
  },
  methods: {
    async registerUser() {
      console.log(this.email, this.password);
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "Secret" });
      } catch (err) {
        console.log("error in registering user", err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
