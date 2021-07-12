import axios from 'axios'
import Swal from 'sweetalert2'

// A 的 heroku 伺服器網址
// const baseURL = 'https://ac-twitter-api-2021.herokuapp.com/api'
// A 的測試伺服器
const baseURL = 'http://private-8887c6-test123319.apiary-mock.com/api'

// L 的 heroku 伺服器網址
// const baseURL = 'https://serene-beyond-63948.herokuapp.com/api'
// L 的測試伺服器
// const baseURL = 'https://private-31b1c-simpletwitter6.apiary-mock.com/api'


export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})