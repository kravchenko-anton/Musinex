import { IsOpenType } from '@/animation/global'
import { Track } from 'react-native-track-player'

export interface ICoverImage  extends IsOpenType, Pick<Track, 'artwork'>{}
