import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': process.env.VUE_APP_API_TOKEN
  },
})