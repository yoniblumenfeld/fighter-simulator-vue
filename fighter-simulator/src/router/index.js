import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import EditProfile from '@/components/profile/EditProfile'
import ViewProfile from '@/components/profile/ViewProfile'
import ViewFighter from '@/components/fighter/ViewFighter'
import {store} from '../store/store'

Vue.use(Router)

let isAuthenticated = (to,from,next) => {
  if(store.getters.isAuthenticated){
    next()
  }
  else {
    console.log('not auth')
    next({name:'Login'})

  }
}



export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/edit-profile',
      name: 'EditProfile',
      component: EditProfile,
      beforeEnter: isAuthenticated,
      
    },
    {
      path:'/view-fighter',
      name: 'ViewFighter',
      component: ViewFighter,
      beforeEnter: isAuthenticated
    },
    {
      path:'/view-profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      beforeEnter: isAuthenticated
    }
  ]
})


