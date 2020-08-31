// Steps: Actions -> State -> Mutations -> Getters

import Axios from "axios";

export default {
    state: {
        categories: []
    },
    getters: {
        getCategory(state) {
            return state.categories;
        }
    },
    mutations: {
        getCategory(state, payload) {
            return (state.categories = payload);
        }
    },
    actions: {
        getCategory(context) {
            Axios.get("/api/category").then(response => {
                //console.log(response);
                context.commit("getCategory", response.data.categories);
            });
        }
    }
};
