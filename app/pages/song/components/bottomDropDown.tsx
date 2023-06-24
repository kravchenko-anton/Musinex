import { AnimatedView } from '@/animation/global'
import { songAnimationValue } from '@/pages/song/animation/songAnimationTypes'
import { useSongAnimation } from '@/pages/song/animation/useSongAnimation'
import PlayButton from '@/pages/song/ui/playButton'
import RepeatIcon from '@/pages/song/ui/repeatIcon'
import Sliders from '@/pages/song/ui/slider'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Heart from '@/ui/icon/heart/heart'
import Title from '@/ui/title/title'
import { handleShuffle } from '@/utils/player/handleShaffle'
import { skipToNext, skipToPrevious } from '@/utils/player/usePlayer'
import { WindowHeight } from '@/utils/screen'
import { FC } from 'react'
import { Pressable, View } from 'react-native'
import { GestureDetector } from 'react-native-gesture-handler'

interface IBottomDropDown extends songAnimationValue {
		title: string
		artist: string
		id: number
	}
const BottomDropDown:FC<IBottomDropDown> = ({isOpen, ...props}) => {
	const {opacityAnimation,BottomMenuAnimation,MinusOpacityAnimation,TitleAnimation,panGesture} = useSongAnimation(isOpen)
	return <GestureDetector gesture={panGesture}>
		<AnimatedView className='bg-lightBlack pt-4 rounded-t-3xl w-full' style={[{
			paddingBottom: WindowHeight * 0.05,
		}, BottomMenuAnimation]}>
			<Pressable className='w-full items-center justify-center self-center'>
				<View className='bg-primaryGray h-[4px] w-10 rounded-full'/>
			</Pressable>
			<View className='items-center px-4  self-center flex-row justify-between' style={{
				marginTop: 15,
				width: '100%',
			}}>
				<AnimatedView style={TitleAnimation}>
					<Title size={ 25} fontFamily={'Montserrat_600SemiBold'}>
						{props.title}
					</Title>
					<Title color={'charcoal'} fontFamily={'Montserrat_500Medium'} size={18}>
						{props.artist}
					</Title>
				</AnimatedView>
				<AnimatedView style={opacityAnimation} className='items-center justify-between flex-row p-0 m-0'>
					<UIcon
						name='play-skip-back'
						onPress={() => skipToPrevious()}
						size={22}
						color='white'
					/>
			<PlayButton size={52} circle={true}/>
					<UIcon
						name='play-skip-forward'
						onPress={() => skipToNext()}
						size={22}
						color='white'
					/>
				</AnimatedView>
				<AnimatedView style={MinusOpacityAnimation}>
					<Heart
						size={35}
						id={props.id}
						type={'song'}
					/>
				</AnimatedView>
			</View>
			<Sliders />
			
			<AnimatedView style={[MinusOpacityAnimation]}  className='flex-row self-center items-center justify-evenly w-full px-3'>
				<UIcon
					name='shuffle'
					onPress={() => handleShuffle()}
					size={30}
					color='silver'
				/>
				<UIcon
					name='play-skip-back'
					onPress={() => skipToPrevious()}
					size={30}
					color='white'
				/>
				<PlayButton size={65}  circle={true}/>
				<UIcon
					name='play-skip-forward'
					onPress={() =>	skipToNext()}
					size={30}
					color='white'
				/>
				
				<RepeatIcon/>
			</AnimatedView>
		</AnimatedView>
	</GestureDetector>
}

export default BottomDropDown