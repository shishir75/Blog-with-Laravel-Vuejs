// Steps: Actions -> State -> Mutations -> Getters

export default {
    state: {
        categories: [],
        posts: [],
        blogPosts: []
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
        }
    }
};
