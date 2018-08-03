import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import my from '../components/my'
import invite from '../components/invite'
import discovery from '../components/discovery'
import detail from '../components/detail'
import entry from '../components/entry'
import index from '../components/index'
import myself from '../components/myself'
import kol from '../components/kol'
import kolsell from '../components/kolsell'
import login from '../components/login'
import more from '../components/more'
import better from '../components/better'
import newr from '../components/newr'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
    	path: '/index',
    	component: index,
    	children : [
    	{
		    path: 'home',
		    component: home
    	},
    	{
    		path: 'discovery',
    		component: discovery
    	},
    	{
    		path : '/index',
    		redirect : '/index/home'
    	},
    	{
    		path: 'entry/:id1',
    		component: entry
    	}]

    },
    
    {
    	path: '/detail/:id',
    	component: detail
    },
    {
    	path: '/my',
    	component: my,
    	children : [
			{
				path : 'kol',
				component : kol
			},
			{
				path : 'kolsell',
				component : kolsell
			},
			{
				path : 'myself',
				component : myself
			},
			{
				path : '/my',
				redirect : '/my/myself'
			}
    	]
    },
    {
    	path: '/invite',
    	component: invite
    },
    {
		path: '/login',
		component : login
    }
    ,
    {
        path: '/more',
        component : more,
        children : [
        {
            path : 'newr',
            component : newr
        },
        {
            path : 'better',
            component : better
        }]
    },
    {
        path:'*',
        redirect : '/index'
    }
  ]
})
