import { client } from './client'

export const login = (username, password) => client.post(`login`, { username, password })

export const register = () => client.post('register')

export const getUser = () => client.get('user').catch(() => null)
