import { Style } from '@/types/global'
import { color } from '@/utils/getColor'
import { shadeColor } from '@/utils/shadeColor'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { View } from 'react-native'

interface BallProps {
	style?: Style
	gradient?: [number, number, number, number]
	colors?: string[]
	width?: number
	height?: number
	wrapperStyle?: Style
}
const Ball: FC<BallProps> = ({
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
								borderColor: 'transparent',
								justifyContent: 'center'
						  }
				}
			>
				<LinearGradient
					colors={colors}
					start={[gradient[0], gradient[1]]}
					end={[gradient[2], gradient[3]]}
					style={{
						flex: 1,
						zIndex: 5,
						borderRadius: 100,
						justifyContent: 'center'
					}}
				/>
			</View>
		</View>
	)
}

export default Ball
