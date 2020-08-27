require("./bootstrap");

import VueRouter from "vue-router";

Vue.use(VueRouter);

window.Vue = require("vue");

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

const app = new Vue({
    el: "#app"
});
