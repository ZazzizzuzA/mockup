import "./styles/styles";
import Vue from "vue";
import router from "./router";
import sidebar from "./components/sidebar.vue";

new Vue({
    el: '#sidebarMenu',
    components: {
        'sidebar': sidebar
    },
    template: `<sidebar></sidebar>`,
});
let nav = new Vue({
    template: `
    <div class="block-sidebar__menu">
            <router-link to="/" class="nav-sidebar-button">MY CONTENT</router-link>
            <router-link to="/posts" class="nav-sidebar-button">POSTS</router-link>
    </div>
    `,
    router
}).$mount('#navigation');

let view = new Vue({
    el: "#routerViewer",
    template: `
        <div class="block__content" id="routerViewer">
            <router-view></router-view>
        </div>`,
    router
})


/* <router-link to="/posts">POSTS</router-link>
<router-link to="/subreddits">DISCOVER SUBREDDITS</router-link>
<router-link to="/findTime">Find the best time</router-link>
<router-link to="/settings">ACCOUNT SETTINGS</router-link> */