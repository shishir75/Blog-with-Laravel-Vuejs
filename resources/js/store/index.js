// Steps: Actions -> State -> Mutations -> Getters

export default {
    state: {
        categories: [],
        posts: [],
        blogPosts: [],
        post: [],
        sidebarCategories: []
    },
    getters: {
        getCategory(state) {
            return state.categories;
        },
        getPosts(state) {
            return state.posts;
        },
        getBlogPosts(state) {
            return state.blogPosts;
        },
        getSinglePost(state) {
            return state.post;
        },
        sidebarCategories(state) {
            return state.sidebarCategories;
        }
    },
    mutations: {
        getCategory(state, payload) {
            return (state.categories = payload);
        },
        getPosts(state, payload) {
            return (state.posts = payload);
        },
        getBlogPosts(state, payload) {
            return (state.blogPosts = payload);
        },
        getSinglePost(state, payload) {
            return (state.post = payload);
        },
        sidebarCategories(state, payload) {
            return (state.sidebarCategories = payload);
        }
    },
    actions: {
        getCategory(context) {
            axios.get("/api/category").then(response => {
                //console.log(response);
                context.commit("getCategory", response.data.categories);
            });
        },
        getPosts(context) {
            axios.get("/api/post").then(response => {
                // console.log(response);
                context.commit("getPosts", response.data.posts);
            });
        },
        getBlogPosts(context) {
            axios.get("/public/blog").then(response => {
                // console.log(response);
                context.commit("getBlogPosts", response.data.posts);
            });
        },
        getSinglePost(context, id) {
            axios.get("/public/blog/" + id).then(response => {
                // console.log(response.data.post);
                context.commit("getSinglePost", response.data.post);
            });
        },
        sidebarCategories(context) {
            axios.get("/public/category").then(response => {
                context.commit("sidebarCategories", response.data.categories);
            });
        }
    }
};
