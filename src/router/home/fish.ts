
export default [
  {
    path: "/home",
    name: "组合API",
    props: true ,
    component: () => import("@/views/main/main.vue"),
    meta: {
      auth: true,
      title: "组合API",
      iocn: "hai",
      keepAlive: true
    }
  }
];
