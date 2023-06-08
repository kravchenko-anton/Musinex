import { UViewProps } from '@/types/global'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { View } from 'react-native'

interface BallProps {
	style?: UViewProps['style']
	gradient?: [number, number, number, number]
	colors?: string[]
	width?: number
	height?: number
	wrapperStyle?: UViewProps['style']
}
const Ball: FC<BallProps> = ({
	gradient = [0, 1, 1, 1],
	colors = ['#2DA270', '#5BC397', 'transparent'],
	height = 200,
	width = 200,
	wrapperStyle = {},
	style,
	...rest
}) => {
	return (
		<View
			style={[
				{
					position: 'absolute'
				},
				wrapperStyle
			]}
			{...rest}
		>
			<View
				style={
			style || {
						width: width || 200,
						height: height || 200,
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
