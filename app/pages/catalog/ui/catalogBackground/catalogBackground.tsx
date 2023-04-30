import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { Animated, Image, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HEADER_HEIGHT, inputRange } from '../../catalogConstant'

export interface ICatalogBackgroundProps {
	poster: string
	y: Animated.Value
}

const CatalogBackground: FC<ICatalogBackgroundProps> = ({ poster, y }) => {
	const { top } = useSafeAreaInsets()
	const { colorScheme } = useColorScheme()
	const scale = y.interpolate({
		inputRange,
		outputRange: [3, 1, 2],
		extrapolate: 'clamp'
	})
	const opacity = y.interpolate({
		inputRange,
		outputRange: [0, 1, 0],
		extrapolate: 'clamp'
	})

	const translateY = y.interpolate({
		inputRange,
		outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.01]
	})

	return (
		<Animated.View
			style={[
				{
					...StyleSheet.absoluteFillObject,
					height: HEADER_HEIGHT * 1.76,
					marginTop: -top,
					opacity,
					transform: [{ scale }, { translateY }]
				}
			]}
		>
			<Image
				style={StyleSheet.absoluteFill}
				resizeMode='cover'
				source={{
					uri: poster,
					height: HEADER_HEIGHT
				}}
			/>
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject, top: -HEADER_HEIGHT * 1.6 }}
				start={[0, 0.1]}
				end={[0, 0.8]}
				colors={[
					'transparent',
					'rgba(0, 0, 0, 0.2)',
					colorScheme === 'light' ? '#EEE' : '#101010'
				]}
			/>
		</Animated.View>
	)
}

export default CatalogBackground
