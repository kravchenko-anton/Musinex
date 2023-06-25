import { useTypedNavigation } from '@/hook/useTypedNavigation'
import PlayButton from '@/pages/song/ui/play-button/playButton'
import Heart from '@/ui/icon/heart/heart'
import UImage from '@/ui/image/image'
import { usePlayer } from '@/utils/player/usePlayer'
import { shadeColor } from '@/utils/shade.color'
import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, View } from 'react-native'
import { useActiveTrack } from 'react-native-track-player'
import Title from '../title/title'

const SongPlayer = () => {
	const { navigate } = useTypedNavigation()
	const trackInfo = useActiveTrack()
	const { isPlayerReady, selector } = usePlayer()
	if (!isPlayerReady || selector.length <= 0 || !trackInfo || !trackInfo.title || !trackInfo.artist) return null
	return (
		<LinearGradient colors={[
			shadeColor(trackInfo.color, -40),
			shadeColor(trackInfo.color, -10),
		]} start={[0.407, 0.8,]} end={[0.41, 0.2]}
			className='rounded-xl absolute justify-center self-center bottom-[70px] h-[65px] w-11/12 bg-dark'
		>
			<Pressable
				onPress={() => navigate('Song')}
				className=' flex-row justify-between mx-2 items-center'
			>
				<View className='flex-row items-center w-2/3'>
					<UImage source={String(trackInfo.artwork)} borderRadius={10} width={50} height={50} />
					<View className='flex flex-col ml-2'>
						<Title color={'white'}  size={20}>
							{trackInfo.title}
						</Title>
						<Title color={'white'}  size={16}>
							{trackInfo.artist}
						</Title>
					</View>
				</View>
				<View className='flex-row '>
					<Heart id={trackInfo.id} type={'song'} />
					<PlayButton size={28} circle={false} className='ml-3' />
				</View>
			</Pressable>
		</LinearGradient>
	)
}

export default SongPlayer
