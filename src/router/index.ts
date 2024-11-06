import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/productPage",
    name: "productPage",
    component: () => import("../views/ProductPage.vue"),
  },
  {
    path: "/servicePage",
    name: "servicePage",
    component: () => import("../views/ServicePage.vue"),
  },
  {
    path: "/favourite",
    name: "favourite",
    component: () => import("@/components/favouritePage.vue"),
  },
  {
    path: "/addToCart/:id",
    name: "addToCart",
    component: () => import("@/components/product/AddToCart.vue"),
  },

  //cart page
  {
    path: "/cartPage",
    name: "cartPage",
    component: () => import("@/views/CartPage/ProductCart.vue"),
  },

  //noti page
  {
    path: "/notiPage",
    name: "notiPage",
    component: () => import("@/views/CartPage/NotiPage.vue"),
  },
  //login page
  {
    path: "/loginPage",
    name: "loginPage",
    component: () => import("@/components/LoginPage.vue"),
  },
  //register
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/RegisterPage.vue"),
  },

  //account detail
  {
    path: "/accountDetail",
    name: "accountDetail",
    component: () => import("@/components/EditAccount.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
