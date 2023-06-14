import { IHeartProps } from '@/types/catalogTypes'
import { Style, UPressableProps } from '@/types/global'
import { useHeart } from '@/ui/icon/heart/useHeart'
import { useHeartAnimation } from '@/ui/icon/heart/useHeartAnimation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC, memo } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, { withSpring } from 'react-native-reanimated'

interface IHeart extends UPressableProps, IHeartProps {
	size?: number
}

const Heart: FC<IHeart> = ({ size = 28, type, id, style, ...props }) => {
	const { toggleFavorite, isSmashed } = useHeart({ id, type })
	const { outlineStyle, fillStyle, liked } = useHeartAnimation(isSmashed)

	return (
		<Pressable
			onPress={() => {
				liked.value = withSpring(liked.value === 1 ? 0 : 1)
				toggleFavorite()
			}}
			style={[{ height: size, width: size }, style as Style]}
			{...props}
		>
			<Animated.View
				style={[StyleSheet.absoluteFill, outlineStyle]}
				className='items-center justify-center'
			>
				<MaterialCommunityIcons
					name={'heart-outline'}
					size={30}
					color={'white'}
				/>
			</Animated.View>
			
			<Animated.View style={fillStyle}>
				<MaterialCommunityIcons
					name={'heart'}
					size={30}
					color={'#DC3F41'}
				/>
			</Animated.View>
		</Pressable>
	)
}

export default memo(Heart)
