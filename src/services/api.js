import { instance } from './instance'

export async function getLeagues (data) {
	return await instance.get('/', data)
}

export async function getTeams (data) {
	return await instance.get('/', data)
}

export async function getMatches (data) {
	return await instance.get('/', data)
}