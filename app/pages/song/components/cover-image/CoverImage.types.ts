import { songAnimationValue } from '@/pages/song/animation.types'
import { Track } from 'react-native-track-player'

export interface ICoverImage  extends songAnimationValue, Pick<Track, 'artwork'>{}
