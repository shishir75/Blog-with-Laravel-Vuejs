import Vue from "vue";
import moment from "moment";

// Global Filter
Vue.filter("dateFormat", arg => {
    return moment(arg).format("MMM Do YYYY");
});

Vue.filter("shortLength", (text, length, suffix = "...") => {
    if (text.length > length) {
        return text.substring(0, length) + suffix;
    } else {
        return text;
    }
});
