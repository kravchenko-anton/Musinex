import { useColorTheme } from '@/hook/useColorTheme'
import { CatalogContentProps } from '@/pages/catalog/ui/catalog-content/catalogContent.types'
import { useScrollToTop } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { FC, PropsWithChildren, useRef } from 'react'
import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import { HEADER_HEIGHT } from '../../catalog.constant'
import CatalogContentHeader from './content-header/catalogContentHeader'

const CatalogContent: FC<PropsWithChildren<CatalogContentProps>> = ({
	y,
	children,
	gradientEnd = 0.8,
	paddingTop = HEADER_HEIGHT * 0.52,
	...props
}) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)
	const { silverToMidnight } = useColorTheme()
	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
			onScroll={Animated.event(
				[
					{
						nativeEvent: { contentOffset: { y } }
					}
				],
				{ useNativeDriver: true }
			)}
			contentContainerStyle={{
				paddingTop: paddingTop,
				paddingBottom: 50,
				zIndex: 100
			}}>
			<CatalogContentHeader
				description={props.description}
				title={props.headerTitle}
				y={y}
			/>
			<LinearGradient
				style={{
					...StyleSheet.absoluteFillObject,
					height: HEADER_HEIGHT / 0.9
				}}
				start={[0, 0.1]}
				end={[0, gradientEnd]}
				colors={['transparent', silverToMidnight]}
			/>
			<View
				style={[
					{
						backgroundColor: silverToMidnight,
						paddingHorizontal: 8
					},
					props.wrapperStyle
				]}
				className='w-full flex-1 pb-5 pl-2 pt-1'>
				{children}
			</View>
		</Animated.ScrollView>
	)
}

export default CatalogContent
