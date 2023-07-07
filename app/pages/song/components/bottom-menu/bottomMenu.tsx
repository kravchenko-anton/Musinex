import { AnimatedView } from '@/animation/global'
import { useOpacityAnimation } from '@/animation/opacity.animation'
import { useColorTheme } from '@/hook/useColorTheme'
import { BottomDropDownProps } from '@/pages/song/components/bottom-menu/bottomMenu.types'
import { useSongAnimation } from '@/pages/song/song.animation'
import PlayButton from '@/pages/song/ui/play-button/playButton'
import RepeatIcon from '@/pages/song/ui/repeat-icon/repeatIcon'
import Sliders from '@/pages/song/ui/slider/slider'
import Icon from '@/ui/icon/default-icon/icon'
import Heart from '@/ui/icon/heart/heart'
import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import {
	handleShuffle,
	skipToNext,
	skipToPrevious
} from '@/utils/player/player.function'
import { WINDOW_HEIGHT } from '@/utils/screen'
import { FC } from 'react'
import { Pressable, View } from 'react-native'
import { GestureDetector } from 'react-native-gesture-handler'

const BottomMenu: FC<BottomDropDownProps> = ({ isOpen, ...props }) => {
	const { bottomMenuAnimation, widthAnimation, panGesture } = useSongAnimation({
		isOpen
	})
	const { charcoalToTwilight, midnightToSilver } = useColorTheme()
	const { opacityAnimation, minusOpacityAnimation } = useOpacityAnimation({
		isOpen
	})
	return (
		<GestureDetector gesture={panGesture}>
			<AnimatedView
				className='w-full rounded-t-3xl pt-4'
				style={[
					{
						paddingBottom: WINDOW_HEIGHT * 0.05,
						backgroundColor: charcoalToTwilight
					},
					bottomMenuAnimation
				]}>
				<Pressable className='w-full items-center justify-center self-center'>
					<View className='h-[4px] w-10 rounded-full bg-charcoal' />
				</Pressable>
				<View className='mt-[15px] w-full  flex-row items-center justify-between self-center px-4'>
					<AnimatedView style={widthAnimation}>
						<Title size={25} weight='semiBold'>
							{props.title}
						</Title>
						<Title color={midnightToSilver} weight='medium' size={18}>
							{props.artist}
						</Title>
					</AnimatedView>
					<AnimatedView
						style={opacityAnimation}
						className='m-0 flex-row items-center justify-between p-0'>
						<Icon
							name='play-skip-back'
							onPress={() => skipToPrevious()}
							size={22}
							color={Color.white}
						/>
						<PlayButton size={52} circle={true} />
						<Icon
							name='play-skip-forward'
							onPress={() => skipToNext()}
							size={22}
							color={Color.white}
						/>
					</AnimatedView>
					<AnimatedView style={minusOpacityAnimation}>
						<Heart size={35} id={props.id} type='song' />
					</AnimatedView>
				</View>
				<Sliders />

				<AnimatedView
					style={[minusOpacityAnimation]}
					className='w-full flex-row items-center justify-evenly self-center px-3'>
					<Icon
						name='shuffle'
						onPress={() => handleShuffle()}
						size={30}
						color={Color.silver}
					/>
					<Icon
						name='play-skip-back'
						onPress={() => skipToPrevious()}
						size={30}
						color={Color.white}
					/>
					<PlayButton size={65} circle={true} />
					<Icon
						name='play-skip-forward'
						onPress={() => skipToNext()}
						size={30}
						color={Color.white}
					/>

					<RepeatIcon />
				</AnimatedView>
			</AnimatedView>
		</GestureDetector>
	)
}

export default BottomMenu
