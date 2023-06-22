import { usePressAnimation } from '@/animation/usePressAnimation'
import Ball from '@/pages/home/ui/ball'
import { ISong } from '@/services/types/global'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import { shadeColor } from '@/utils/shadeColor'
import { LinearGradient } from 'expo-linear-gradient'
import { FC, PropsWithChildren } from 'react'
import { Pressable, View } from 'react-native'
import Animated from 'react-native-reanimated'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
interface IBanner {
	songs: ISong[]
	colors?: string[]
}
const Banner: FC<PropsWithChildren<IBanner>> = ({
	songs,
	colors = [
		`${shadeColor(getHexCode('primary'), -15)}`,
		`${shadeColor(getHexCode('primary'), 0)}`,
		`${shadeColor(getHexCode('primary'), 30)}`
	],
	children
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<AnimatedPressable
			{...pressFunctions}
			style={animatedStyle}
			className='h-[200px] overflow-hidden w-full bg-primary rounded-3xl mt-8'
		>
			<LinearGradient colors={colors} className='flex-1 items-center'>
				<Title
					fontFamily={'Montserrat_700Bold'}
					color={'white'}
					numberOfLines={2}
					className='absolute text-center top-[15%] w-[50%]'
					translate
				>
					Enjoy the music you love
				</Title>

				<View className='absolute bottom-[-10] flex-row gap-[-10] justify-center items-center'>
					{songs.slice(0, 3).map(({ coverMedium, id }, index) => {
						return (
							<UImage
								key={id}
								width={100}
								height={100}
								borderRadius={12}
								style={{
									borderWidth: 2,
									borderColor: getHexCode('white'),
									zIndex: 5 + index
								}}
								className='rotate-12'
								source={coverMedium}
							/>
						)
					})}
				</View>
			</LinearGradient>
			{children || (
				<View className='h-full w-full absolute'>
					<Ball
						wrapperStyle={{
							left: -100,
							top: -40
						}}
					/>
					<Ball
						wrapperStyle={{
							right: -60,
							bottom: -30
						}}
						width={150}
						height={150}
						gradient={[1, 0.2, 0, 0.4]}
					/>
				</View>
			)}
		</AnimatedPressable>
	)
}

export default Banner