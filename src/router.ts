import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("./pages/Home.vue"),
    },
    {
      name: "search",
      path: "/search",
      component: () => import("./pages/Search.vue"),
    },
    {
      name: "movie",
      path: "/movies/:id",
      component: () => import("./pages/Movie.vue"),
    },
  ],
});
