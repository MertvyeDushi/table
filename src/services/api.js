import { instance } from './instance'

export async function getLeagues (params) {
  const { data } = await instance.get('/competitions', params)

  return data
}

export async function getTeams (params) {
  return await instance.get('/', params)
}

export async function getMatches (params) {
  return await instance.get('/', params)
}