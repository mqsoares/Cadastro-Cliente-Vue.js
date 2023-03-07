import Vue from "vue";
// import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
import authenticate from "./auth/authenticate";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("./views/app"), //webpackChunkName app
    // beforeEnter: authenticate,
    redirect: "/app/dashboards/dashboard.v1",

    children: [
      {
        path: "/app/dashboards",
        component: () => import("./views/app/dashboards"), //DASHBOARD
        // beforeEnter: authenticate,
        redirect: "/app/dashboards/dashboard.v1",

        children: [
          {
            path: "dashboard.v1",
            name: "dashboard.v1",
            component: () => import("./views/app/dashboards/dashboard.v1"),
          },          
        ],
      },
      
      // CADASTROS
      {
        path: "/app/cadastros",
        component: () => import("./views/app/cadastros"),
        redirect: "/app/form/cadastroClientes",
        children: [
          {
            path: "cadastroClientes",
            component: () => import("./views/app/cadastros/cadastroClientes"),
          },
          {
            path: "cliente",
            component: () => import("./views/app/cadastros/cliente"),
          },
        ],
      },
    ],
  },
  // SESSIONS
  {
    path: "/app/sessions",
    component: () => import("./views/app/sessions"),
    redirect: "/app/sessions/signIn",
    children: [
      {
        path: "signIn",
        component: () => import("./views/app/sessions/signIn"),
      },
      {
        path: "signUp",
        component: () => import("./views/app/sessions/signUp"),
      },
      {
        path: "forgot",
        component: () => import("./views/app/sessions/forgot"),
      },
    ],
  },
  {
    path: "*",
    component: () => import("./views/app/pages/notFound"),
  },
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  
});

export default router;
