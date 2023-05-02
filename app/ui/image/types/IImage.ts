import { ImageProps } from 'react-native'
import { FastImageProps } from 'react-native-fast-image'

export interface IFastImage extends Omit<FastImageProps, 'source'> {
	source: string
	width: number
	height: number
	borderRadius?: number
}

export interface IImage extends Omit<ImageProps, 'source'> {
	source: string
	width: number
	height: number
}
