import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import { BannerProps } from '@/pages/home/ui/banner/banner/banner.types'
import Image from '@/ui/image/image'
import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import { shadeRGBColor } from '@/utils/shade.color'
import { LinearGradient } from 'expo-linear-gradient'
import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import Ball from '../ball/ball'

const Banner: FC<PropsWithChildren<BannerProps>> = ({
	songs,
	colors = [
		`${shadeRGBColor(Color.primary, -15)}`,
		`${shadeRGBColor(Color.primary, 0)}`,
		`${shadeRGBColor(Color.primary, 30)}`
	],
	children,
	...props
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<View style={props.wrapperStyle} className={props.wrapperClassName}>
			<AnimatedPressable
				{...pressFunctions}
				style={[animatedStyle]}
				className='mt-8  h-[200px] w-full overflow-hidden rounded-3xl bg-primary'>
				<LinearGradient colors={colors} className='flex-1 items-center'>
					<Title
						weight='bold'
						color={Color.white}
						numberOfLines={2}
						className='absolute top-[15%] w-[80%] text-center'
						translate>
						Enjoy the music you love
					</Title>

					<View className='absolute bottom-[-10] flex-row items-center justify-center gap-[-10]'>
						{songs.slice(0, 3).map(({ coverMedium, id }, index) => (
							<Image
								key={id}
								width={100}
								height={100}
								borderRadius={12}
								style={{
									borderWidth: 2,
									borderColor: Color.white,
									zIndex: 5 + index
								}}
								className='rotate-12'
								url={coverMedium}
							/>
						))}
					</View>
				</LinearGradient>
				{children || (
					<View className='absolute h-full w-full'>
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
		</View>
	)
}

export default Banner
