import { isOpen } from '@/animation/global'
import { Track } from 'react-native-track-player'

export interface ICoverImage  extends isOpen, Pick<Track, 'artwork'>{}
