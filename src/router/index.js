import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import CreateUser from "../views/CreateUser.vue";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/criar-conta",
      name: "createUser",
      component: CreateUser,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
  ],
});

export default router;
