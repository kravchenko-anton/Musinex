import { IsOpenType } from '@/animation/global'
import { ITrack } from '@/types/player/ITrack'

export interface ICoverImage  extends IsOpenType, Pick<ITrack, 'coverBig'>{}
