import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account: '',
      name: '',
      email: '',
      avatar: '',
    },
    isAuthenticated: false,
    token: '',
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      }

      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeCurrentUser(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser()
        const { id, name, account, email, avatar } = data

        commit('setCurrentUser', {
          id, name, account, email, avatar
        })
        return true
      } catch (error) {
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeCurrentUser')
        return false
      }
    }
  },
  modules: {
  }
})
