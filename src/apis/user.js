import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
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
  editUser({ userId, name, account, email, password, checkPassword }) {
    return apiHelper.put(`/users/${userId}`, { name, account, email, password, checkPassword }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // addLike({ tweetId }) {
  //   return apiHelper.post(`/tweets/${tweetId}/like`, null, {
  //     headers: { Authorization: `Bearer ${getToken()}` }
  //   })
  // },
  // deleteLike({ tweetId }) {
  //   return apiHelper.delete(`/tweets/${tweetId}/unlike`, {
  //     headers: { Authorization: `Bearer ${getToken()}` }
  //   })
  // },
}