import Vue from 'vue'
import Router from 'vue-router'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path : '/',
        redirect : '/event-list'
      },
     
    {
        path : '/event-list',
        name : 'event-list',
        component :() => import (/* webpackChunkName: "Event-List" */ './views/Event-List.vue') 
    },
    {
      path : '/event-list/:id',
      name : 'event-details',
      component :() => import (/* webpackChunkName: "Event-List" */ './views/Details.vue') 
    }
  ]
})
