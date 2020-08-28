// Steps: Actions -> State -> Mutations -> Getters

export default {
    state: {
        categories: []
    },
    getters: {
        getCategory(state) {
            return (state.categories = state);
        }
    },
    mutations: {},
    actions: {}
};
