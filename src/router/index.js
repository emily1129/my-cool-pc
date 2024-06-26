import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: { name: "AppHome" },
  },
  {
    path: '/',
    name: 'AppHome',
    component: () => import("@/views/AppHome.vue"),
    props: (route) => ({ categoryId: route.query.category }),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
