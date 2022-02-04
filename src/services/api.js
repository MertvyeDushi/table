import { instance } from './instance'

export async function getLeagues (params) {
  const { data } = await instance.get('/competitions', params)

  return data
}

export async function getTeams (params) {
  const { data } = await instance.get('/teams', params)

  return data
}

export async function getMatches (params) {
  const { type, id, dates } = params

  const time = dates ?? {
    dateFrom: '2020-03-01',
    dateTo: '2021-01-01',
  }

  const url = {
    league: `/competitions/${id}/matches`,
    team: `/teams/${id}/matches`,
  }

  const { data } = await instance.get(url[type] ?? '/', time)

  return data
}