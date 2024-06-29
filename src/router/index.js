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
  },
  {
  path: '/category/:categoryName',
    name: 'Category',
    component: () => import("@/views/AppHome.vue"),
    props: (route) => ({ categoryName: route.params.categoryName }),
  },
  {
    path: '/item/:itemId',
    name: 'ItemDetail',
    component: () => import("@/views/Item/ItemDetail.vue"),
    props: (route) => ({ itemId: route.params.itemId }),
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
