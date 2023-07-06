import { AnimatedLinearGradient } from '@/animation/global'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import PlayButton from '@/pages/song/ui/play-button/playButton'
import Heart from '@/ui/icon/heart/heart'
import Image from '@/ui/image/image'
import { usePlayer } from '@/ui/song-player/usePlayer'
import { Color } from '@/utils/color'
import { PlayerTypes } from '@/utils/player/player.types'
import { shadeRGBColor } from '@/utils/shade.color'
import { Pressable, View } from 'react-native'
import { FadeInDown, FadeOutDown } from 'react-native-reanimated'
import { useActiveTrack } from 'react-native-track-player'
import Title from '../title/title'

const SongPlayer = () => {
	const { navigate } = useTypedNavigation()
	const trackInfo = useActiveTrack() as PlayerTypes
	const { isPlayerReady, selector } = usePlayer()
	if (
		!isPlayerReady ||
		selector.length <= 0 ||
		!trackInfo ||
		!trackInfo.title ||
		!trackInfo.artist ||
		!trackInfo.color ||
		!trackInfo.id
	)
		return null
	return (
		<AnimatedLinearGradient
			exiting={FadeOutDown}
			entering={FadeInDown}
			colors={[
				shadeRGBColor(trackInfo?.color, -40),
				shadeRGBColor(trackInfo?.color, -10)
			]}
			start={[0.407, 0.8]}
			end={[0.41, 0.2]}
			className='absolute bottom-[70px] h-[65px] w-11/12 justify-center self-center rounded-xl bg-dark'>
			<Pressable
				onPress={() => navigate('Song')}
				className=' mx-2 flex-row items-center justify-between'>
				<View className='w-2/3 flex-row items-center'>
					<Image
						url={String(trackInfo.coverSmall)}
						borderRadius={10}
						width={50}
						height={50}
					/>
					<View className='ml-2 flex flex-col'>
						<Title color={Color.white} size={20}>
							{trackInfo?.title}
						</Title>
						<Title color={Color.white} size={16}>
							{trackInfo?.artist}
						</Title>
					</View>
				</View>
				<View className='flex-row items-center'>
					<Heart id={trackInfo?.id} type={'song'} />
					<PlayButton size={28} circle={false} className='ml-3' />
				</View>
			</Pressable>
		</AnimatedLinearGradient>
	)
}

export default SongPlayer
