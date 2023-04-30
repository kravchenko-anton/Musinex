import { FastImageProps } from 'react-native-fast-image'

export interface IImage extends Omit<FastImageProps, 'source'> {
	source: string
	width: number
	height: number
}
