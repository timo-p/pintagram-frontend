import { client } from './client'

export const login = (username, password) => client.post(`login`, { username, password })

export const register = () => client.post('register')

export const getUser = () => client.get('user').catch(() => null)

export const createPost = (post) => client.post('posts', post)

export const getPosts = (username) => client.get(`users/${username}/posts`)

export const deletePost = (id) => client.delete(`posts/${id}`)
