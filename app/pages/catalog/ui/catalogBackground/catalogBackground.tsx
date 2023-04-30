import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { Animated, Image, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ICatalogTypes } from '../../../../types/catalogTypes'
import { HEADER_HEIGHT } from '../../catalogConstant'
import { useBackgroundAnimation } from './useBackgroundAnimation'

interface ICatalogBackgroundProps extends ICatalogTypes {
	poster: string
}

const CatalogBackground: FC<ICatalogBackgroundProps> = ({ poster, y }) => {
	const { top } = useSafeAreaInsets()
	const { colorScheme } = useColorScheme()
	const { translateY, opacity, scale } = useBackgroundAnimation(y)
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
