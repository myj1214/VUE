import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";

Vue.use(VueRouter);

/*配置路由*/
const routes = [{
        path: "/Home",
        component: Home
    },
    {
        path: "/About",
        component: About
    }

]

const router = new VueRouter({
    routes
})

export default router