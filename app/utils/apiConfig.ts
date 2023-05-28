export const SERVER_URL = 'http://10.0.2.2:7777'

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getGenresUrl = (string: string) => `/genre${string}`
export const getArtistUrl = (string: string) => `/artist${string}`
export const getAlbumUrl = (string: string) => `/album${string}`
export const getPlaylistUrl = (string: string) => `/playlist${string}`
export const getSearchUrl = (string: string) => `/search${string}`