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
import React, { FC } from 'react'
import { Text } from 'react-native'
import FullScreenLoader from '../Loader/FullScreenLoader'
import { ITitle } from './Ititle'

const Title: FC<ITitle> =
	({
		 numberOfLines = 1,
		 color = '#fff',
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
		if (!fontsLoaded) {
			return <FullScreenLoader />
		}
		return (
			<Text
				style={[{
					fontFamily: fontFamily,
					fontSize: size,
					textAlign: center ? 'center' : 'left',
					color: color
				}, rest.style]}
				numberOfLines={numberOfLines}
				{...!rest.style && rest}
			>
				{text}
			</Text>
		)
	}

export default Title
