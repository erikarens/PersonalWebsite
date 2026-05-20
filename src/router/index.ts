import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Erik Arens" },
    },
    {
      path: "/agb",
      name: "agb",
      component: () => import("../views/AGBView.vue"),
      meta: { title: "AGB — Erik Arens" },
    },
    {
      path: "/impressum",
      name: "impressum",
      component: () => import("../views/ImpressumView.vue"),
      meta: { title: "Impressum — Erik Arens" },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const title = (to.meta?.title as string) || "Erik Arens";
  document.title = title;
});

export default router;
