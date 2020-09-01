require("./bootstrap");
window.Vue = require("vue");
import router from "./router";

// VueX
import Vuex from "vuex";
Vue.use(Vuex);
import storeData from "./store/index";
const store = new Vuex.Store(storeData);

// Global Filter
import filter from "./filter";

// Admin Master Global Component
import AdminMaster from "./components/admin/MasterComponent.vue";
Vue.component("admin-master", AdminMaster); // Global Component

// V Form
import { Form, HasError, AlertError } from "vform";
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// Sweet Alert 2
import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});
window.Toast = Toast;
// window.Swal = Swal;

// V-Markdown Editor
import "v-markdown-editor/dist/v-markdown-editor.css";
import Editor from "v-markdown-editor";
// global register
Vue.use(Editor);

// Vue Instance
const app = new Vue({
    el: "#app",
    router,
    store
});
