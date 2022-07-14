import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import AboutContainer from "../components/about/AboutContainer.vue";
import PortfolioContainer from "../components/portfolio/PortfolioContainer.vue";

import TodoContainer from "../components/portfolio/todo/TodoContainer.vue";
import DesignContainer from "../components/portfolio/design/DesignContainer.vue";
import ChartContainer from "../components/portfolio/charts/ChartContainer.vue";
import MapContainer from "../components/portfolio/map/MapContainer.vue";
import PublicApiContainer from "../components/portfolio/public-api/PublicApiContainer.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: AboutContainer,
    },
    {
      path: "/portfolio",
      component: PortfolioContainer,
    },
    {
      path: "/portfolio/todo",
      component: TodoContainer,
    },
    {
      path: "/portfolio/design",
      component: DesignContainer,
    },
    {
      path: "/portfolio/charts",
      component: ChartContainer,
    },
    {
      path: "/portfolio/map",
      component: MapContainer,
    },
    {
      path: "/portfolio/publicapi",
      component: PublicApiContainer,
    },
  ],
});

export default router;
