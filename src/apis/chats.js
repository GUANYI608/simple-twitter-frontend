import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getChats() {
    return apiHelper.get('/chats/public-messages', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}