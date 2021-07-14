import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import HomePage from '../views/HomePage.vue'
import AdminLogIn from '../views/AdminLogIn.vue'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/homapage'  // 根目錄設定：直接轉址到首頁
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
    path: '/homepage',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/account/setting/:id',
    name: 'account-setting',
    component: () => import('../views/AccountSetting.vue')
  },
  {
    path: '/user/self',
    name: 'user-self',
    component: () => import('../views/UserSelf.vue')
  },
  {
    path: '/user/self/like',
    name: 'user-self-like',
    component: () => import('../views/UserSelfLike.vue')
  },
  {
    path: '/user/self/followers',
    name: 'user-self-followers',
    component: () => import('../views/UserSelfFollowers.vue')
  },
  {
    path: '/user/self/followings',
    name: 'user-self-followings',
    component: () => import('../views/UserSelfFollowings.vue')
  },
  {
    path: '/user/other',
    name: 'user-other',
    component: () => import('../views/UserOther.vue')
  },
  {
    path: '/replylist',
    name: 'reply-list',
    component: () => import('../views/ReplyList.vue')
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogIn
  },
  {
    path: '/admin/homepage',
    name: 'admin-main',
    component: () => import('../views/AdminMain.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
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

router.beforeEach((to, from, next) => {
  store.dispatch('fetchCurrentUser')
  next()
})


export default router
