import { AnimatedLinearGradient } from '@/animation/global'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import PlayButton from '@/pages/song/ui/play-button/playButton'
import { TrackType } from '@/types/player/TrackType'
import Heart from '@/ui/icon/heart/heart'
import Image from '@/ui/image/image'
import { usePlayer } from '@/utils/player/usePlayer'
import { shadeRGBColor } from '@/utils/shade.color'
import { Pressable, View } from 'react-native'
import { FadeInDown, FadeOutDown } from 'react-native-reanimated'
import { useActiveTrack } from 'react-native-track-player'
import Title from '../title/title'

const SongPlayer = () => {
	const { navigate } = useTypedNavigation()
	const trackInfo = useActiveTrack() as TrackType
	const { isPlayerReady, selector } = usePlayer()
	if (!isPlayerReady || selector.length <= 0 || !trackInfo || !trackInfo.title || !trackInfo.artist || !trackInfo.color || !trackInfo.id)  return  null

	return (
		<AnimatedLinearGradient exiting={FadeOutDown} entering={FadeInDown}  colors={[
			shadeRGBColor(trackInfo?.color, -40),
			shadeRGBColor(trackInfo?.color, -10),
		]} start={[0.407, 0.8]} end={[0.41, 0.2]}
			className='rounded-xl absolute justify-center self-center bottom-[70px] h-[65px] w-11/12 bg-dark'
		>
			<Pressable
				onPress={() => navigate('Song')}
				className=' flex-row justify-between mx-2 items-center'
			>
				<View className='flex-row items-center w-2/3'>
					<Image url={String(trackInfo.coverSmall)} borderRadius={10} width={50} height={50} />
					<View className='flex flex-col ml-2'>
						<Title color={'white'}   size={20}>
							{trackInfo?.title}
						</Title>
						<Title color={'white'}  size={16}>
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
