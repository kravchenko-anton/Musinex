import { IsOpenType } from '@/animation/global'
import { TrackType } from '@/types/player/TrackType'

export interface CoverImageProps  extends IsOpenType, Pick<TrackType, 'coverBig'>{}
