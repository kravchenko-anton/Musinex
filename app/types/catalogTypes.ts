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