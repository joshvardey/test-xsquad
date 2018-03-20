import Vue from "vue";
import Router from "vue-router";
import Signup from "./views/Signup.vue";
import Homepage from "./views/Homepage.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/homepage",
      component: Homepage
    }
  ]
});
