import Vue from 'vue'
import VueRouter from 'vue-router'
import WhoAmI_View from "@/views/WhoAmI_View";
import Projects_View from "@/views/Projects_View";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WhoAmI',
    component: WhoAmI_View
  },
  {
    path: '/projects',
    name:'Projects',
    component: Projects_View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
