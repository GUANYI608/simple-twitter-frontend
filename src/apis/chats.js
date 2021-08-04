import axios from 'axios'
const getToken = () => localStorage.getItem('token')

const baseURL = 'http://1526770fd77e.ngrok.io/api'

export const apiHelper = axios.create({
  baseURL
})

export default {
  getChats() {
    return apiHelper.get('/chats/public-room/', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}