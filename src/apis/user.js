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
  // followUser({ userId }) {
  //   return apiHelper.post('/followships', { userId }, {
  //     headers: { Authorization: `Bearer ${getToken()}` }
  //   })
  // },
  // unfollowUser({ followingId }) {
  //   return apiHelper.delete(`/followships/${followingId}`, {
  //     headers: { Authorization: `Bearer ${getToken()}` }
  //   })
  // },
}