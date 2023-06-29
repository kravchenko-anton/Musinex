import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import Ball from '@/pages/home/ui/banner/ball/ball'
import { BannerProps } from '@/pages/home/ui/banner/banner/banner.types'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { color } from '@/utils/color'
import { shadeRGBColor } from '@/utils/shade.color'
import { LinearGradient } from 'expo-linear-gradient'
import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'

const Banner: FC<PropsWithChildren<BannerProps>> = ({
	songs,
	colors = [
		`${shadeRGBColor(color.primary, -15)}`,
		`${shadeRGBColor(color.primary, 0)}`,
		`${shadeRGBColor(color.primary, 30)}`
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
									borderColor: color.white,
									zIndex: 5 + index
								}}
								className='rotate-12'
								url={coverMedium}
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
