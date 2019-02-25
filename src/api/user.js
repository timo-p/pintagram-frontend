import { client } from './client'

export const login = (username, password) => client.post(`login`, { username, password })

export const register = () => client.post('register')

export const getUser = () => client.get('user').catch(() => null)

export const createPost = (post) => client.post('posts', post)

export const getPosts = (username, lastPostId) => {
  const config = {
    params: {}
  }
  if (lastPostId) {
    config.params.posts_before = lastPostId
  }
  return client.get(`users/${username}/posts`, config)
}

export const deletePost = (id) => client.delete(`posts/${id}`)

export const getTopUsers = (lastUsername) => {
  const config = {
    params: {}
  }
  if (lastUsername) {
    config.params.users_before = lastUsername
  }
  return client.get('users', config)
}

export const getUserByUsername = (username) => client.get(`users/${username}`)

export const follow = (body) => client.post('follow', body)

export const unfollow = (body) => client.post('unfollow', body)

export const getFollowings = () => client.get('followings')

export const getTimeline = (lastPostId) => {
  const config = {
    params: {}
  }
  if (lastPostId) {
    config.params.posts_before = lastPostId
  }
  return client.get('timeline', config)
}
export const getLines = () => client.get('lines')
