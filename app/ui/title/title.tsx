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
import I18n from 'i18n-js'
import { useColorScheme } from 'nativewind'
import React, { FC, memo } from 'react'
import { Text } from 'react-native'
import { getHexCode } from '../../utils/getColor'
import FullScreenLoader from '../loader/fullScreenLoader'
import { ITitle } from './types/Ititle'

const Title: FC<ITitle> = ({
	                           numberOfLines = 1,
	                           color,
	                           fontFamily = 'Montserrat_300Light',
	                           text,
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
	const { colorScheme } = useColorScheme()
	if (!fontsLoaded) {
		return <FullScreenLoader />
	}
	return (
		<Text
			style={[
				{
					fontFamily: fontFamily,
					fontSize: size,
					textAlign: center ? 'center' : 'left',
					color: color ? color : colorScheme === 'light' ? getHexCode('dark') : getHexCode('white')
				},
				rest.style
			]}
			numberOfLines={numberOfLines}
			{...(!rest.style && rest)}
		>
			{translate ? I18n.t(text.toString()) : text}
		</Text>
	)
}

export default memo(Title)
