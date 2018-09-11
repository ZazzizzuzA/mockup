import "./styles/styles";
import Vue from "vue";
import router from "./router";
import sidebar from "./components/sidebar.vue";

let sidebarMenu = new Vue({
    el: '#sidebarMenu',
    components: {
        'sidebar': sidebar
    },
    template: `<sidebar></sidebar>`,
});
let nav = new Vue({
    template: `
    <div class="block-sidebar__menu">
        <router-link to="/" class="block-sidebar__menu-button"><img src="../assets/icons/post-it1.png" class="first-child-img-icon">MY CONTENT</router-link>
        <router-link to="/posts" class="block-sidebar__menu-button"><img src="../assets/icons/post-it.gif">POSTS</router-link>
        <router-link to="/subreddits" class="block-sidebar__menu-button"><img src="../assets/icons/magnifying-glass.gif">DISCOVER SUBREDDITS</router-link>
        <router-link to="/findTime" class="block-sidebar__menu-button"><img src="../assets/icons/chemistry.gif">Find the best time</router-link>
        <router-link to="/settings" class="block-sidebar__menu-button"><img src="../assets/icons/settings.gif">ACCOUNT SETTINGS</router-link>
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