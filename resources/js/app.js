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

const app = new Vue({
    el: "#app",
    router
});
