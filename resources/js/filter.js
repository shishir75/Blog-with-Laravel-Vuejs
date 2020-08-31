import Vue from "vue";
import moment from "moment";

// Global Filter
Vue.filter("dateFormat", arg => {
    return moment(arg).format("MMM Do YYYY");
});
