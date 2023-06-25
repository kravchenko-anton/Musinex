import { IBallProps } from '@/pages/home/ui/banner/ball/ball.types'
import { color } from '@/utils/color'
import { shadeColor } from '@/utils/shade.color'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { View } from 'react-native'

const Ball: FC<IBallProps> = ({
	gradient = [0, 1, 1, 1],
	colors = [
		shadeColor(color.primary, -10),
		shadeColor(color.primary, 20),
		'transparent'
	],
	height = 200,
	width = 200,
	wrapperStyle = {},
	style,
	...props
}) => {
	return (
		<View
			style={[
				{
					position: 'absolute'
				},
				wrapperStyle
			]}
			{...props}
		>
			<View
				style={
					style
						? style
						: {
								width: width ? width : 200,
								height: height ? height : 200,
								borderWidth: 12,
						  }
				}
				className='justify-center border-transparent'
			>
				<LinearGradient
					colors={colors}
					start={[gradient[0], gradient[1]]}
					end={[gradient[2], gradient[3]]}
					className='flex-1 z-50 rounded-full justify-center'
				/>
			</View>
		</View>
	)
}

export default Ball
