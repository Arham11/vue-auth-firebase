import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import axios from "axios";
import firebase from "firebase/app";

//Vue.prototype.$axios = axios;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjA0PE1A441vI-jhWml1PxMsDnGYbM_DY",
  authDomain: "vue-auth-basic.firebaseapp.com",
  projectId: "vue-auth-basic",
  storageBucket: "vue-auth-basic.appspot.com",
  messagingSenderId: "190610635933",
  appId: "1:190610635933:web:e711a00323024e13e3e874",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
