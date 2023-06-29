import { AnimatedView } from '@/animation/global'
import Title from '@/ui/title/title'
import { WindowWidth } from '@/utils/screen'
import { memo, useMemo } from 'react'
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const PlayerWidth = WindowWidth * 0.91
const Sliders = () => {
	const { position, duration } = useProgress(10);
	const isOpen = useSharedValue(0)
	const isSliding = useSharedValue(false)
	const PanGesture = useMemo(() => Gesture.Pan().activeOffsetX([0, 0])
		.onBegin((ctx) => {
				isSliding.value = true
			isOpen.value = ctx.x
		}).onChange(((e) => {
		if (e.x < 10 || e.x > PlayerWidth) return isOpen.value = e.x < 10 ? 10 : PlayerWidth
			isOpen.value = e.x
		}))
			.onFinalize((e) => {
				isSliding.value = false
			runOnJS(TrackPlayer.seekTo)(e.x / PlayerWidth * duration)
			}),
		[isSliding.value, duration])
	const SliderStyle = useAnimatedStyle(() => {
		return {
			width: isSliding.value ? isOpen.value : position / duration * PlayerWidth,
			zIndex: 1000,
			backgroundColor: 'white',
		}
	})
	return (
		<View className='justify-center px-4 self-center w-full mt-[15px]'>
				<GestureDetector gesture={PanGesture}>
					<View className='h-[17px] p-0 m-0' style={{
						width: PlayerWidth,
						maxWidth: PlayerWidth,
					}}>
					
					<View className='p-0 h-[5px] bg-charcoal z-0 m-0 rounded-full'/>
						<AnimatedView style={SliderStyle}	className='p-0 h-[5px] absolute m-0 rounded-full'>
							<View 	className='p-0 h-[12px] bg-white  w-[12px] absolute right-0 top-[-3] z-0 m-0 rounded-full'/>
						</AnimatedView>
						
					</View>
				</GestureDetector>
			
			<View className='flex-row justify-between p-0 m-0'>
				<Title color={'silver'} className='text-center mt-1' size={20}>
					{
			isSliding.value ? String((isOpen.value / PlayerWidth * duration).toFixed(2)) : String(position.toFixed(2))
					}
				</Title>
				<Title color={'silver'} className='text-center mt-1' size={20}>
					{
						String(duration.toFixed(2))
					}
				</Title>
			</View>
		</View>
	)
}

export default memo(Sliders)
