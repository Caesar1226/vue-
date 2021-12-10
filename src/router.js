import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/$attrs/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/webWorker',
      name: 'webWorker',
      component: () => import(/* webpackChunkName: "about" */ './views/webWorker/index.vue')
    },
    {
      path: '/image',
      name: 'image',
      component: () => import(/* webpackChunkName: "about" */ './views/image/index.vue')
    }
  ]
})
