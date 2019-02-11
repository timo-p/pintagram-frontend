import axios from 'axios'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT
})

client.interceptors.request.use(function (config) {
  const token = localStorage.getItem('pintagram-jwt-token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

client.interceptors.response.use(function (response) {
  if (response.headers['x-jwt-token']) {
    localStorage.setItem('pintagram-jwt-token', response.headers['x-jwt-token'])
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export {
  client
}
