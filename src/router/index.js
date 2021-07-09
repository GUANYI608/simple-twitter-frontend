import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main'  // 根目錄設定直接轉址到首頁
  },
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
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/accountsetting',
    name: 'account-setting',
    component: () => import('../views/AccountSetting.vue')
  },
  {
    path: '/replylist',
    name: 'reply-list',
    component: () => import('../views/ReplyList.vue')
  },
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
