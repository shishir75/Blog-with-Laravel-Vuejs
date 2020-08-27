import Vue from "vue";
import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        // { path: "/", name: "home", component: ExampleComponent },
    ]
});

export default router;
