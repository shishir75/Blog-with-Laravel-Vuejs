import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "./components/admin/HomeComponent.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{ path: "/home", name: "home", component: HomeComponent }]
});

export default router;
