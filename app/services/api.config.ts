export const SERVER_URL = process.env.SERVER_URL + '/api'
export const getAuthUrl = (string: string) => `/auth${string}`
export const getHistoryUrl = (string: string) => `/history${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getGenresUrl = (string: string) => `/genre${string}`
export const getArtistUrl = (string: string) => `/artist${string}`
export const getAlbumUrl = (string: string) => `/album${string}`
export const getPlaylistUrl = (string: string) => `/playlist${string}`
export const getSearchUrl = (string: string) => `/search${string}`
export const getServerFileUrl = (string: string) =>
	`${process.env.SERVER_URL}/${string}`
