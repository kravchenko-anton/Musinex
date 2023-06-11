import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useHeaderAnimation } from '@/pages/catalog/ui/catalog-header/useHeaderAnimation'
import { ICatalogTypes, IHeartProps } from '@/types/catalogTypes'
import { IconType } from '@/types/global'
import BlurIcon from '@/ui/blur-button/BlurIcon'
import Heart from '@/ui/icon/heart/heart'
import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ICatalogHeaderProps extends ICatalogTypes, IHeartProps {
	title: string
	rightIcon: IconType
	rightIconFunction: () => void
}

const CatalogHeader: FC<ICatalogHeaderProps> = ({ y, ...props }) => {
	const { goBack } = useTypedNavigation()
	const { top } = useSafeAreaInsets()
	const { width } = useWindowDimensions()
	const { colorScheme } = useColorScheme()
	const { opacity } = useHeaderAnimation(y)
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
						opacity,
						backgroundColor:
							colorScheme === 'light'
								? getHexCode('white')
								: getHexCode('primaryBlack')
					}
				]}
			/>
			<BlurIcon icon='arrow-back' onPress={() => goBack()} />

			<Animated.View className='items-center w-2/3' style={{ opacity }}>
				<Title numberOfLines={1} fontFamily={'Montserrat_500Medium'}>
					{props.title}
				</Title>
			</Animated.View>
			{props.rightIcon && props.rightIcon === 'heart' ? (
				<BlurIcon>
					<Heart id={props.id} type={props.type} />
				</BlurIcon>
			) : (
				<BlurIcon icon={props.rightIcon} onPress={props.rightIconFunction} />
			)}
		</View>
	)
}
export default CatalogHeader
