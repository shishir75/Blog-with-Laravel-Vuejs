import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "./components/admin/HomeComponent.vue";
import Ect from "./components/ExampleComponent.vue";
import ListComponent from "./components/admin/category/ListComponent.vue";
import NewComponent from "./components/admin/category/NewComponent.vue";
import EditComponent from "./components/admin/category/EditComponent.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/home", component: HomeComponent },
        { path: "/post", component: Ect },
        { path: "/category", component: ListComponent },
        { path: "/create-category", component: NewComponent },
        { path: "/edit-category/:id", component: EditComponent, props: true }
    ]
});

export default router;
