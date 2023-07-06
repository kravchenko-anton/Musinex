import { useColorTheme } from '@/hook/useColorTheme'
import Skeleton from '@/ui/skeleton/skeleton'
import { weightSettings } from '@/ui/title/title.settings'
import {
	Montserrat_300Light,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_900Black,
	useFonts
} from '@expo-google-fonts/montserrat'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { TitleProps } from './title.types'

const Title = ({
	children,
	numberOfLines = 1,
	weight = 'light',
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
	const { darkToWhite } = useColorTheme()
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
			testID={'title'}
			style={[
				{
					fontFamily: weightSettings[weight],
					fontSize: size,
					textAlign: center ? 'center' : 'left',
					color: props.color ? props.color : darkToWhite
				},
				style
			]}
			numberOfLines={numberOfLines}
			{...props}>
			{props.translate ? t(children.toString()) : children}
		</Text>
	)
}

export default memo(Title)
