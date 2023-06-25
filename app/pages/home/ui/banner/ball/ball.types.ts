import { Style } from '@/types/global'

export interface IBallProps {
	style?: Style
	gradient?: [number, number, number, number]
	colors?: string[]
	width?: number
	height?: number
	wrapperStyle?: Style
}