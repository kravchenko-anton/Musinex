import { ImageProps } from 'react-native'


export interface IImage extends Omit<ImageProps, 'source'> {
	source: string
	width: number
	height: number
}
