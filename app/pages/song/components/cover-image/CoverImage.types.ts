import { IsOpenType } from '@/animation/global'
import { PlayerTypes } from '@/utils/player/player.types'

export interface CoverImageProps
	extends IsOpenType,
		Pick<PlayerTypes, 'coverBig'> {}
