import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "./components/admin/HomeComponent.vue";
import ListComponent from "./components/admin/category/ListComponent.vue";
import NewComponent from "./components/admin/category/NewComponent.vue";
import EditComponent from "./components/admin/category/EditComponent.vue";
import AllPost from "./components/admin/post/ListComponent.vue";
import NewPost from "./components/admin/post/NewComponent.vue";
import EditPost from "./components/admin/post/EditComponent.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/home", component: HomeComponent },
        { path: "/category", component: ListComponent },
        { path: "/create-category", component: NewComponent },
        { path: "/edit-category/:id", component: EditComponent },
        { path: "/post", component: AllPost },
        { path: "/create-post", component: NewPost },
        { path: "/edit-post/:id", component: EditPost }
    ]
});

export default router;
