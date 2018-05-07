import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Editor from '@/components/Editor'
import Preview from '@/components/Preview'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import JobIntend from '@/components/JobIntend'
import Experience from '@/components/Experience'
import Skill from '@/components/Skill'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/editor',
    	component: Editor,
      children: [
        {path: '/',component: Profile},
        {path:'profile',component: Profile},
        {path:'jobintend', component: JobIntend},
        {path: 'experience',component: Experience},
        {path: "skill", component: Skill}
      ]
    },
    {
    	path: '/preview',
    	name: 'Preview',
    	component: Preview
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
