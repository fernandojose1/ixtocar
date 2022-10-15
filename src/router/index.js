import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import CreateUser from "../views/CreateUser.vue";
import Dashboard from "../views/Dashboard.vue";
import CarsView from "../views/CarsView.vue";
import GaragesView from "../views/GaragesView.vue";
import ProposalsView from "../views/ProposalsView.vue";
import StoreCarView from "../views/StoreCarView.vue";
import ConsultCarView from "../views/ConsultCarView.vue";
import MyAccountView from "../views/MyAccountView.vue";


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
    {
      path: "/veiculos",
      name: "cars",
      component: CarsView,
    },
    {
      path: "/garagens",
      name: "garages",
      component: GaragesView,
    },
    {
      path: "/propostas",
      name: "proposals",
      component: ProposalsView,
    },
    {
      path: "/meu-estoque/cadastrar",
      name: "storecar",
      component: StoreCarView,
    },
    {
      path: "/meu-estoque",
      name: "consultcar",
      component: ConsultCarView,
    },
    {
      path: "/minha-conta",
      name: "myaccount",
      component: MyAccountView,
    },
  ],
});

export default router;
