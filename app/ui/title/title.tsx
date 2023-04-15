import {
	Montserrat_100Thin,
	Montserrat_100Thin_Italic,
	Montserrat_200ExtraLight,
	Montserrat_200ExtraLight_Italic,
	Montserrat_300Light,
	Montserrat_300Light_Italic,
	Montserrat_400Regular,
	Montserrat_400Regular_Italic,
	Montserrat_500Medium,
	Montserrat_500Medium_Italic,
	Montserrat_600SemiBold,
	Montserrat_600SemiBold_Italic,
	Montserrat_700Bold,
	Montserrat_700Bold_Italic,
	Montserrat_800ExtraBold,
	Montserrat_800ExtraBold_Italic,
	Montserrat_900Black,
	Montserrat_900Black_Italic,
	useFonts
} from '@expo-google-fonts/montserrat'
import React, { FC } from 'react'
import { Text } from 'react-native'
import FullScreenLoader from '../Loader/FullScreenLoader'
import { ITitle } from './Ititle'

const Title: FC<ITitle> = (props, { ...rest }) => {
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
		Montserrat_100Thin_Italic,
		Montserrat_200ExtraLight_Italic,
		Montserrat_300Light_Italic,
		Montserrat_400Regular_Italic,
		Montserrat_500Medium_Italic,
		Montserrat_600SemiBold_Italic,
		Montserrat_700Bold_Italic,
		Montserrat_800ExtraBold_Italic,
		Montserrat_900Black_Italic,
	})
	if (!fontsLoaded) {
		return <FullScreenLoader />
	}
	return (
		<Text
			numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
			className={props.classNames}
			style={{
				fontFamily: props.fontFamily || 'Montserrat_400Regular',
				fontSize: props.size || 20,
				textAlign: props.center ? 'center' : 'auto',
				color: props.color ? props.color : 'white',
			}}
			onPress={props.onPress}
			{...rest}
		>
			{props.text}
		</Text>
	)
}

export default Title
