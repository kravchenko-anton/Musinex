import { ICatalogTypes } from '@/types/catalogTypes'
import UImage from '@/ui/image/image'
import { color as Color } from '@/utils/getColor'
import { WindowWidth } from '@/utils/screen'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HEADER_HEIGHT } from '../../catalogConstant'
import { useBackgroundAnimation } from './useBackgroundAnimation'

interface ICatalogBackgroundProps extends ICatalogTypes {
	color?: string
	poster?: string
}

const CatalogBackground: FC<ICatalogBackgroundProps> = ({
	poster,
	color = Color.primary,
	y
}) => {
	const { top } = useSafeAreaInsets()
	const { colorScheme } = useColorScheme()
	const { translateY, opacity, scale } = useBackgroundAnimation(y)
	return (
		<Animated.View
			style={[
				{
					...StyleSheet.absoluteFillObject,
					height: HEADER_HEIGHT * 1.77,
					marginTop: -top,
					opacity,
					transform: [{ scale }, { translateY }]
				}
			]}
		>
			{poster ? (
				<>
					<UImage
						style={StyleSheet.absoluteFill}
						source={poster}
						width={WindowWidth}
						height={HEADER_HEIGHT}
					/>
					<LinearGradient
						style={{
							...StyleSheet.absoluteFillObject,
							top: -HEADER_HEIGHT * 1.8
						}}
						start={[0, 0.1]}
						end={[0, 0.8]}
						colors={[
							'transparent',
							'rgba(0, 0, 0, 0.2)',
							colorScheme === 'light'
								? Color.silver
								: Color.midnight
						]}
					/>
				</>
			) : (
				<LinearGradient
					style={{
						...StyleSheet.absoluteFillObject,
						top: -HEADER_HEIGHT * 1.6
					}}
					start={[0, 0.1]}
					end={[0, 0.8]}
					colors={[color, 'transparent']}
				/>
			)}
		</Animated.View>
	)
}

export default CatalogBackground
