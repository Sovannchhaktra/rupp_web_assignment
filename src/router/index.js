import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/shop/index.vue"),
  },
  {
    path: "/new",
    name: "new",
    component: () => import("@/views/new/index.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
