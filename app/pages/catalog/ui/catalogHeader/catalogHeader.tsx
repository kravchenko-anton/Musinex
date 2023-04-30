import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import React, { FC } from 'react'
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTypedNavigation } from '../../../../hook/useTypedNavigation'
import { ICatalogTypes } from '../../../../types/catalogTypes'
import BlurButton from '../../../../ui/blur-button/BlurButton'
import Title from '../../../../ui/title/title'
import { inputRange } from '../../catalogConstant'

interface ICatalogHeaderProps extends ICatalogTypes {
	title: string
	rightIcon?: keyof typeof Ionicons.glyphMap
	rightIconFunction?: () => void
}

const CatalogHeader: FC<ICatalogHeaderProps> = props => {
	const { goBack } = useTypedNavigation()
	const { top } = useSafeAreaInsets()
	const { width } = useWindowDimensions()
	const { colorScheme } = useColorScheme()
	return (
		<View
			className='absolute rounded-b-lg z-10 flex-row justify-between items-center px-2 pb-4'
			style={{
				marginTop: -top,
				paddingTop: top + 6,
				width
			}}
		>
			<Animated.View
				style={[
					{
						...StyleSheet.absoluteFillObject,
						opacity: props.y.interpolate({
							inputRange,
							outputRange: [0, 0, 1.8]
						}),
						backgroundColor: colorScheme === 'light' ? '#FFF' : '#101010'
					}
				]}
			/>
			<BlurButton icon='arrow-back' onPress={goBack} />
			
			<Animated.View
				className='items-center w-2/3'
				style={{
					opacity: props.y.interpolate({
						inputRange,
						outputRange: [0, 0, 1.6]
					})
				}}
			>
				<Title
					text={props.title}
					numberOfLines={1}
					fontFamily={'Montserrat_500Medium'}
					center
				/>
			</Animated.View>
			{props.rightIcon && (
				<BlurButton icon={props.rightIcon} onPress={props.rightIconFunction} />
			)}
		</View>
	)
}

export default CatalogHeader
