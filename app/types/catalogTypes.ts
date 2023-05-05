import { Animated } from 'react-native'

export interface ICatalogList {
	id: number | string
	title: string
	image: string
	artist: string
	url?: string
}


export interface ICatalogTypes {
	y: Animated.Value
}

export type ICatalogRenderTypes = 'songs' | 'albums' | 'playlists' | 'authors'

export interface IHeartProps {
	id: number | string
	type: ICatalogRenderTypes
}