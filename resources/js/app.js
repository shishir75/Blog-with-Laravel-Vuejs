require("./bootstrap");
window.Vue = require("vue");
import router from "./router";

import AdminMaster from "./components/admin/MasterComponent.vue";

Vue.component("admin-master", AdminMaster); // Global Component

const app = new Vue({
    el: "#app",
    router
});
