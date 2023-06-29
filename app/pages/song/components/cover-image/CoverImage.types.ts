import { IsOpenType } from '@/animation/global'
import { TrackType } from '@/types/player/ITrack'

export interface CoverImageProps  extends IsOpenType, Pick<TrackType, 'coverBig'>{}
