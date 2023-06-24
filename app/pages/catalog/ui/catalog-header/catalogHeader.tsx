import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useHeaderAnimation } from '@/pages/catalog/ui/catalog-header/useHeaderAnimation'
import { ICatalogRenderType, ICatalogTypes } from '@/types/catalogTypes'
import { IconType } from '@/types/global'
import BlurIcon from '@/ui/blur-button/BlurIcon'
import Heart from '@/ui/icon/heart/heart'
import Title from '@/ui/title/title'
import { color } from '@/utils/getColor'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ICatalogHeaderProps extends ICatalogTypes {
	title: string
	rightIcon?: IconType
	rightIconFunction?: () => void
	type?: ICatalogRenderType
	id?: number
}

const CatalogHeader: FC<ICatalogHeaderProps> = ({ y, ...props }) => {
	const { goBack } = useTypedNavigation()
	const { top } = useSafeAreaInsets()
	const { width } = useWindowDimensions()
	const { colorScheme } = useColorScheme()
	const { opacity } = useHeaderAnimation(y)
	return (
		<View
			className='absolute rounded-b-lg z-10 flex-row  items-center px-2 pb-4'
			style={{
				marginTop: -top,
				paddingTop: top + 6,
				width,
				justifyContent: props.rightIcon ? 'space-between' : 'flex-start'
			}}
		>
			<Animated.View
				style={[
					{
						...StyleSheet.absoluteFillObject,
						opacity,
						backgroundColor:
							colorScheme === 'light'
								? color.white
								: color.midnight
					}
				]}
			/>
			<BlurIcon icon='arrow-back' onPress={() => goBack()} />

			<Animated.View
				className='items-center'
				style={{ opacity, marginLeft: props.rightIcon ? 0 : 15 }}
			>
				<Title
					numberOfLines={1}
					className='max-w-[300px]'
					fontFamily={'Montserrat_500Medium'}
				>
					{props.title}
				</Title>
			</Animated.View>
			{props.rightIcon &&
			props.rightIcon === 'heart' &&
			props.type &&
			props.id ? (
				<BlurIcon>
					<Heart id={props.id} type={props.type} />
				</BlurIcon>
			) : props.rightIcon && props.rightIconFunction ? (
				<BlurIcon icon={props.rightIcon} onPress={props.rightIconFunction} />
			) : null}
		</View>
	)
}
export default CatalogHeader
