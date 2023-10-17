import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "",
    component: () => import("../views/router-template.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/service",
        name: "service",
        component: () => import("../views/ServiceView.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../views/ContactView.vue"),
      },
      {
        path: "/account-info",
        name: "account-info",
        component: () => import("../views/AccountApp/Account-info.vue"),
      },
      {
        path: "/account-edit",
        name: "account-edit",
        component: () => import("../views/AccountApp/Account-edit.vue"),
      },
    ],
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/LoginApp/SigninView.vue"),
    meta: { reload: true },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/LoginApp/SignupView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
