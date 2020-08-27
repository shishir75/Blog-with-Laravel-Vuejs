import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "./components/admin/HomeComponent.vue";
import Ect from "./components/ExampleComponent.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/home", name: "home", component: HomeComponent },
        { path: "/post", name: "post", component: Ect }
    ]
});

export default router;
