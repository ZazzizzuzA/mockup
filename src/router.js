import Vue from "vue";
import VueRouter from 'vue-router';
import myContent from "./components/content.vue";
import posts from "./components/posts.vue";


Vue.use(VueRouter);

export let routes = [{
        path: "/",
        component: myContent,
    },
    {
        path: "/posts",
        component: posts,
    }

];
export default new VueRouter({
    mode: "history",
    routes
});