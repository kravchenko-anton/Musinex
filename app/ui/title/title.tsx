import Skeleton from '@/ui/skeleton/skeleton'
import { color } from '@/utils/color'
import {
	Montserrat_300Light,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_900Black,
	useFonts
} from '@expo-google-fonts/montserrat'
import { useColorScheme } from 'nativewind'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { TitleProps } from './title.types'

const Title = ({
	children,
	numberOfLines = 1,
	fontFamily = 'Montserrat_300Light',
	size = 20,
	center = false,
	style,
	...props
}: TitleProps) => {
	const [isFontsLoaded] = useFonts({
		Montserrat_300Light,
		Montserrat_500Medium,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
		Montserrat_900Black
	})
	const { t } = useTranslation()
	const { colorScheme } = useColorScheme()
	if (!isFontsLoaded || !children)
		return (
			<Skeleton
				width={children.length * 10}
				height={size * numberOfLines}
				style={style}
			/>
		)
	return (
		<Text
			style={[
				{
					fontFamily: fontFamily,
					fontSize: size,
					textAlign: center ? 'center' : 'left',
					color: props.color
						? color[props.color]
						: colorScheme === 'light'
						? color.dark
						: color.silver
				},
				style
			]}
			className={props.className}
			numberOfLines={numberOfLines}
			{...props}
		>
			{props.translate ? t(children.toString()) : children}
		</Text>
	)
}

export default memo(Title)
