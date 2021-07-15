import { apiHelper } from '../utils/helpers'

export default {
  // ===== 登入 =====
  // 帶入需要的參數
  signIn({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },
  // 帶入需要的參數
  signUp({ account, name, email, password, checkPassword }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword,
    })
  },
  AdminLogIn({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  }
}