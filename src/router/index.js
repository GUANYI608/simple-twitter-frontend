import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/accountsetting',
    name: 'account-setting',
    component: () => import('../views/AccountSetting.vue')
  },
  // 以下共同元件先放在views
  {
    path: '/otherusers',
    name: 'other-users',
    component: () => import('../views/OtherUsers.vue')
  },
  // ------結束------
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
