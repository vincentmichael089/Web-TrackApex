import Vue from 'vue'
import Router from 'vue-router'

import Search from './components/Search.vue'

//use middleware
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes : [
        {
            path:'/',
            name:'search',
            component: Search
        }
    ]
})