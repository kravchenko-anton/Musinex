import { SongAnimationState } from '@/pages/song/animation.types'
import { Track } from 'react-native-track-player'

export interface ICoverImage  extends SongAnimationState, Pick<Track, 'artwork'>{}
