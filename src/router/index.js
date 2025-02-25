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
    path: "/products",
    name: "products",
    component: () => import("@/views/product/index.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact/index.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignUp/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/SignIn/index.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/profile/index.vue"),
  },
  {
    path: "/view-cart",
    name: "view-cart",
    component: () => import("@/views/addToCart/index.vue"),
  },
  {
    path: "/product/detail/:id",
    name: "product-detail",
    component: () => import("@/views/detail/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
