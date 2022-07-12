import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import AboutContainer from "../components/about/AboutContainer.vue";
import PortfolioContainer from "../components/portfolio/PortfolioContainer.vue";
import ContactContainer from "../components/contact/ContactContainer.vue";

const router = new VueRouter({
  mode: 'hash',
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
      path: "/contact",
      component: ContactContainer,
    },
  ],
});

export default router;
