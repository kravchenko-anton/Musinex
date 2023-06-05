import SmallLoader from '@/ui/loader/smallLoader'
import { getHexCode } from '@/utils/getColor'
import {
	Montserrat_100Thin,
	Montserrat_200ExtraLight,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_800ExtraBold,
	Montserrat_900Black,
	Montserrat_900Black_Italic,
	useFonts
} from '@expo-google-fonts/montserrat'
import { useColorScheme } from 'nativewind'
import React, { FC, memo, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { ITitle } from './types/Ititle'

const Title: FC<PropsWithChildren<ITitle>> =
	({
		children,
		 numberOfLines = 1,
		 color,
		 fontFamily = 'Montserrat_300Light',
		 size = 20,
		 translate = false,
		 center = false,
		 ...rest
	 }) => {
		let [fontsLoaded] = useFonts({
			Montserrat_100Thin,
			Montserrat_200ExtraLight,
			Montserrat_300Light,
			Montserrat_400Regular,
			Montserrat_500Medium,
			Montserrat_600SemiBold,
			Montserrat_700Bold,
			Montserrat_800ExtraBold,
			Montserrat_900Black,
			Montserrat_900Black_Italic
		})
		const {t} = useTranslation()
		const { colorScheme } = useColorScheme()
		if (!fontsLoaded || !children) {
			return <SmallLoader />
		}
		return (
			<Text onPress={rest.onPress}
				style={[
					{
						fontFamily: fontFamily,
						fontSize: size,
						textAlign: center ? 'center' : 'left',
						color: color ? getHexCode(color) : colorScheme === 'light' ? getHexCode('dark') : getHexCode('white')
					},
					rest.style
				]}
				numberOfLines={numberOfLines}
				{...(!rest.style && rest)}
			>
				{translate ? t(children.toString()) : children}
			</Text>
		)
	}

export default memo(Title)
