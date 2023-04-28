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
import React, { FC } from 'react'
import { Text } from 'react-native'
import FullScreenLoader from '../loader/fullScreenLoader'
import { ITitle } from './Ititle'

const Title: FC<ITitle> =
	({
		 numberOfLines = 1,
		 color,
		 fontFamily = 'Montserrat_300Light',
		 text,
		 size = 20,
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
		const { colorScheme } = useColorScheme()
		if (!fontsLoaded) {
			return <FullScreenLoader />
		}
		return (
			<Text
				style={[{
					fontFamily: fontFamily,
					fontSize: size,
					textAlign: center ? 'center' : 'left',
					color: color ? color : colorScheme === 'light' ? '#000' : '#fff'
				}, rest.style]}
				numberOfLines={numberOfLines}
				{...!rest.style && rest}
			>
				{text}
			</Text>
		)
	}

export default Title
