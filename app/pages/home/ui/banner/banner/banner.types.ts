import { SongType } from '@/services/types/global'
import { UViewProps } from '@/types/component.types'
import { WrapperProps } from '@/types/global'

export interface BannerProps extends WrapperProps<UViewProps['style']> {
	songs: SongType[]
	colors?: string[]
}
