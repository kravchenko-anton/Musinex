import { IdType } from '../../types/catalogTypes'

export interface dataState extends IdType {
	type: 'songs'
	title: string,
	url: string,
	image: string,
	artist: string,
}

export interface artistsState extends IdType {
	type: 'artists'
	name: string,
	image: string,
}

export interface albumState extends IdType {
	type: 'albums' | 'playlists'
	title: string,
	image: string,
	artist: string,
}

export type FavoritePayload = (dataState | artistsState | albumState)

export type IFavoriteProps<T> = T extends 'songs' ? dataState : T extends 'artists' ? artistsState : albumState
