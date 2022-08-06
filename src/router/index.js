import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const DesignPreview = () => import("../views/DesignPreview.vue");

const routes = [
  {
    name: "home",
    path: "/",
    components: {
      main: Home,
    },
  },
  {
    name: "designPreview",
    path: "/designPreview",
    components: {
      main: DesignPreview,
    },
  },
];

const paths = createRouter({
  history: createWebHistory(),
  routes,
});

export default { routes, paths };
