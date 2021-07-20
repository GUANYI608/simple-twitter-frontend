import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  // 設定頁面：取得
  getUser({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 讓 vuex 內 store 的 actions 取得使用者資料
  getCurrentUser() {
    return apiHelper.get(`/users/currentUser`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取得單一使用者所有推文
  getUserTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 設定頁面：編輯
  editUser({ userId, setting, name, account, email, password, checkPassword }) {
    return apiHelper.put(`/users/${userId}`, { setting, name, account, email, password, checkPassword }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取得 top users
  getTopUsers() {
    return apiHelper.get(`/users`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 跟隨使用者
  followUser(id) {
    return apiHelper.post(`/followships`,
      { id },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
  },
  // 取消跟隨使用者
  unfollowUser({ followingId }) {
    return apiHelper.delete(`/followships/${followingId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取得”跟隨者“資料
  getFollowers({ userId }) {
    return apiHelper.get(`/users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取得”正在跟隨的使用者“資料
  getFollowings({ userId }) {
    return apiHelper.get(`/users/${userId}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}