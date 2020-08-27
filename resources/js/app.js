require("./bootstrap");
window.Vue = require("vue");
import router from "./router";

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

const app = new Vue({
    el: "#app",
    router
});
