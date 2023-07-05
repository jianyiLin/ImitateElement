import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  {
    path: "/components",
    name: "components",
    redirect: "/components/install",
    component: () => import("@/views/content/index.vue"),
    children: [
      {
        path: "/components/button",
        component: () =>
          import("@/views/content/showComponent/button/button.md"),
      },
      {
        path: "/components/link",
        component: () => import("@/views/content/showComponent/link/link.md"),
      },
      {
        path: "/components/input",
        component: () => import("@/views/content/showComponent/input/input.md"),
      },
      {
        path: "/components/radio",
        component: () => import("@/views/content/showComponent/radio/radio.md"),
      },
      {
        path: "/components/switch",
        component: () =>
          import("@/views/content/showComponent/switch/switch.md"),
      },
      {
        path: "/components/select",
        component: () =>
          import("@/views/content/showComponent/select/select.md"),
      },
      {
        path: "/components/head",
        component: () => import("@/views/content/showComponent/head/head.md"),
      },
      {
        path: "/components/loading",
        component: () =>
          import("@/views/content/showComponent/loading/loading.md"),
      },
      {
        path: "/components/drawer",
        component: () =>
          import("@/views/content/showComponent/drawer/drawer.md"),
      },
      {
        path: "/components/carousel",
        component: () =>
          import("@/views/content/showComponent/carousel/carousel.md"),
      },
      {
        path: "/components/message",
        component: () =>
          import("@/views/content/showComponent/message/message.md"),
      },
      {
        path: "/components/messagebox",
        component: () =>
          import("@/views/content/showComponent/messagebox/messagebox.md"),
      },
      {
        path: "/components/install",
        component: () =>
          import("@/views/content/showComponent/install/install.md"),
      },
      {
        path: "/components/quickUse",
        component: () =>
          import("@/views/content/showComponent/quickUse/quickUse.md"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
