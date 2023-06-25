import { IHeartProps } from '@/pages/catalog/catalog.types'
import { UPressableProps } from '@/types/global'

export interface IHeart extends UPressableProps, IHeartProps {
	size?: number
}