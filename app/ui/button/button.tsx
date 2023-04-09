import { Silkscreen_400Regular, Silkscreen_700Bold, useFonts } from '@expo-google-fonts/silkscreen'
import { Ionicons } from '@expo/vector-icons/'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'
import FullScreenLoader from '../Loader/FullScreenLoader'
import { Ibutton } from './Ibutton'

const Button:FC<PropsWithChildren<Ibutton>> = (props, {...rest}) => {
	let [fontsLoaded] = useFonts({
		Silkscreen_400Regular,
		Silkscreen_700Bold,
	});
	if (!fontsLoaded) {
		return <FullScreenLoader />;
	}
	console.log(props.size === 'small' ? 10 : props.size === 'medium' ? 10 : 18)
	return (
		<Pressable onPress={props.onClick} style={{
			backgroundColor: props.variant === 'dark' ? '#000' : '#fff',
			borderRadius: props.borderRadius ? props.borderRadius : 10,
			width: props.width ? props.width : props.size === 'small' ? 95 : props.size === 'medium' ? 125 : 165,
			padding: props.size === 'small' ? 10 : props.size === 'medium' ? 15 : 20,
		}} {...rest}>
			{!!(props.children && !(props.icon && props.text)) ?	props.children : <View className={`flex-row ${props.center ? "justify-center" : ''} gap-[${props.size === 'small' ? 10 : props.size === 'medium' ? 10 : 10}px] items-center`}>
				<Ionicons size={props.iconSize ? props.iconSize : (props.size === 'small' ? 15 : props.size === 'medium' ? 18 : 30)} color={props.variant === 'light' ? '#000' : '#fff'} name={props.icon}/>
				<Text style={{
					color: props.variant === 'dark' ? '#fff' : '#000',
					fontFamily:"Silkscreen_400Regular",
					fontSize:props.textSize ? props.textSize : (props.size === 'small' ? 15 : props.size === 'medium' ? 20 : 25),
				}}>{props.text}</Text>
			</View>}
		</Pressable>
	)
}

export default Button
