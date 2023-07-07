import { IsOpenSharedValueType } from '@/animation/global'
import { PlayerTypes } from '@/utils/player/player.types'

export interface CoverImageProps
	extends IsOpenSharedValueType,
		Pick<PlayerTypes, 'coverBig'> {}
