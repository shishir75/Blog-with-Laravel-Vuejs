import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "./components/admin/HomeComponent.vue";
import ListComponent from "./components/admin/category/ListComponent.vue";
import NewComponent from "./components/admin/category/NewComponent.vue";
import EditComponent from "./components/admin/category/EditComponent.vue";
import AllPost from "./components/admin/post/ListComponent.vue";
import NewPost from "./components/admin/post/NewComponent.vue";
import EditPost from "./components/admin/post/EditComponent.vue";

// Frontend Component
import PublicHome from "./components/public/HomeComponent.vue";
import BlogPostsComponent from "./components/public/blog/BlogPostsComponent.vue";
import BlogSidebarComponent from "./components/public/blog/BlogSidebarComponent.vue";
import SingleBlogComponent from "./components/public/blog/SingleBlogComponent.vue";

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
        { path: "/edit-post/:id", component: EditPost },

        { path: "/", component: PublicHome }, // Frontend Route
        { path: "/blog", component: BlogPostsComponent }
    ]
});

export default router;
