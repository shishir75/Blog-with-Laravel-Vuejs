require("./bootstrap");
window.Vue = require("vue");
import router from "./router";

import AdminMaster from "./components/admin/MasterComponent.vue";

Vue.component("admin-master", AdminMaster); // Global Component

// V Form
import { Form, HasError, AlertError } from "vform";

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

const app = new Vue({
    el: "#app",
    router
});
