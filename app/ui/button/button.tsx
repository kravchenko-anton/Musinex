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
import { Ionicons } from '@expo/vector-icons/'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'
import FullScreenLoader from '../Loader/FullScreenLoader'
import { Ibutton } from './Ibutton'

const Button: FC<PropsWithChildren<Ibutton>> = (props, { ...rest }) => {
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
		<Pressable
			onPress={props.onClick}
			style={{
				backgroundColor: props.variant === 'dark' ? '#000' : '#fff',
				borderRadius: props.borderRadius ? props.borderRadius : 10,
				width: props.width
					? props.width
					: props.size === 'small'
					? 95
					: props.size === 'medium'
					? 130
					: 165,
				padding: props.size === 'small' ? 10 : props.size === 'medium' ? 15 : 20
			}}
			{...rest}
		>
			{!!(props.children && !(props.icon && props.text)) ? (
				props.children
			) : (
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						display: 'flex',
						justifyContent: props.center ? "center" : "flex-start",
						gap: 	props.size === 'small' ? 10 : props.size === 'medium' ? 10 : 10,
					}}
				>
					<Ionicons
						size={
							props.iconSize
								? props.iconSize
								: props.size === 'small'
								? 15
								: props.size === 'medium'
								? 18
								: 30
						}
						color={
							props.variant === 'light'
								? '#000'
								: props.variant === 'dark'
								? '#fff'
								: '#000'
						}
						name={props.icon}
					/>
					<Text
						style={{
							color: props.variant === 'dark' ? '#fff' : '#000',
							fontFamily: 'Rubik_400Regular',
							fontSize: props.textSize
								? props.textSize
								: props.size === 'small'
								? 15
								: props.size === 'medium'
								? 20
								: 25
						}}
					>
						{props.text}
					</Text>
				</View>
			)}
		</Pressable>
	)
}

export default Button
