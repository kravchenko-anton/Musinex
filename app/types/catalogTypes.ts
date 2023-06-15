import { Animated } from 'react-native'


export interface ICatalogTypes {
	y: Animated.Value
}

export type ICatalogRenderType = 'song' | 'album' | 'playlist' | 'artist'

export interface IHeartProps {
	id: number
	type: ICatalogRenderType
}
