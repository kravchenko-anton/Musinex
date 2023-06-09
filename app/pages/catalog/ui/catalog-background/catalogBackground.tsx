import { ICatalogTypes } from '@/types/catalogTypes'
import UImage from '@/ui/image/image'
import { getHexCode } from '@/utils/getColor'
import { WindowWidth } from '@/utils/screen'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HEADER_HEIGHT } from '../../catalogConstant'
import { useBackgroundAnimation } from './useBackgroundAnimation'

interface ICatalogBackgroundProps extends ICatalogTypes {
	color?: string
	poster?: string
}

const CatalogBackground: FC<ICatalogBackgroundProps> = ({ poster,color = "#32B47D", y }) => {
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
			{
				poster ? <View>
					<UImage
						style={StyleSheet.absoluteFill}
						resizeMode='cover'
						height={HEADER_HEIGHT}
						width={WindowWidth}
						source={poster}
					/>
					<LinearGradient
						style={{ ...StyleSheet.absoluteFillObject, top: -HEADER_HEIGHT * 1.6 }}
						start={[0, 0.1]}
						end={[0, 0.8]}
						colors={[
							'transparent',
							'rgba(0, 0, 0, 0.2)',
							colorScheme === 'light'
								? getHexCode('lightGray')
								: getHexCode('primaryBlack')
						]}
					/>
				</View> : 	<LinearGradient
					style={{ ...StyleSheet.absoluteFillObject, top: -HEADER_HEIGHT * 1.6 }}
					start={[0, 0.4]}
					end={[0, 0.8]}
					colors={[
					color, 'transparent'
					]}
				/>
				
			}
		</Animated.View>
	)
}

export default CatalogBackground
