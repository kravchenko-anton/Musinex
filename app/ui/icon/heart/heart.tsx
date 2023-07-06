import { AnimatedView } from '@/animation/global'
import { Style } from '@/types/global'
import { useHeartAnimation } from '@/ui/icon/heart/heart.animation'
import { HeartProps } from '@/ui/icon/heart/heart.types'
import { useHeart } from '@/ui/icon/heart/useHeart'
import { Color } from '@/utils/color'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC, memo } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { withSpring } from 'react-native-reanimated'

const Heart: FC<HeartProps> = ({ size = 28, type, id, style, ...props }) => {
	const { toggleFavorite, isSmashed } = useHeart({ id, type })
	const { outlineStyle, fillStyle, liked } = useHeartAnimation(isSmashed)

	return (
		<Pressable
			testID='heart'
			onPress={() => {
				liked.value = withSpring(liked.value === 1 ? 0 : 1)
				toggleFavorite()
			}}
			style={[{ height: size, width: size }, style as Style]}
			{...props}>
			<AnimatedView
				style={[StyleSheet.absoluteFill, outlineStyle, style as Style]}>
				<MaterialCommunityIcons
					name='heart-outline'
					size={size}
					color={Color.white}
				/>
			</AnimatedView>

			<AnimatedView style={fillStyle}>
				<MaterialCommunityIcons
					name='heart'
					size={size}
					color={Color.crimson}
				/>
			</AnimatedView>
		</Pressable>
	)
}

export default memo(Heart)
