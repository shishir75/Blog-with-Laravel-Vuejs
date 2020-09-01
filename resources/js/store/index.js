// Steps: Actions -> State -> Mutations -> Getters

export default {
    state: {
        categories: [],
        posts: []
    },
    getters: {
        getCategory(state) {
            return state.categories;
        },
        getPosts(state) {
            return state.posts;
        }
    },
    mutations: {
        getCategory(state, payload) {
            return (state.categories = payload);
        },
        getPosts(state, payload) {
            return (state.posts = payload);
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
                console.log(response);
                context.commit("getPosts", response.data.posts);
            });
        }
    }
};
