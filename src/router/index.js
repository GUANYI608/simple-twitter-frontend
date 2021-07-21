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
    redirect: '/signin'  // 根目錄設定：直接轉址到首頁
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
    // 需要帶入使用者id
    path: '/account/setting/:id',
    name: 'account-setting',
    component: () => import('../views/AccountSetting.vue')
  },
  {
    // 動態路由要擺在最後
    // 需要帶入使用者id
    path: '/user/self/:id',
    name: 'user',
    component: () => import('../views/UserSelf.vue')
  },
  {
    path: '/user/reply/:id',
    name: 'user-reply',
    component: () => import('../views/UserReply.vue')
  },
  {
    path: '/user/like/:id',
    name: 'user-like',
    component: () => import('../views/UserLikedTweets.vue')
  },
  {
    path: '/user/other',
    name: 'user-other',
    component: () => import('../views/UserOther.vue')
  },
  // 以下：兩條路由不同名稱，共用一個 vue 檔案
  {
    path: '/user/:id/followers',
    name: 'user-followers',
    component: () => import('../views/UserFollowList.vue')
  },
  {
    path: '/user/:id/followings',
    name: 'user-followings',
    component: () => import('../views/UserFollowList.vue')
  },
  // 以上：兩條路由不同名稱，共用一個 vue 檔案
  {
    path: '/replylist/:id',
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
    name: 'admin-homepage',
    component: () => import('../views/AdminHomePage.vue')
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
