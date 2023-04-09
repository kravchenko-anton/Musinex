import { Silkscreen_400Regular, Silkscreen_700Bold, useFonts } from '@expo-google-fonts/silkscreen'
import React, { FC, PropsWithChildren } from 'react'

import { Pressable } from 'react-native'
import FullScreenLoader from '../Loader/FullScreenLoader'
import { Ibutton } from './Ibutton'

const Button:FC<PropsWithChildren<Ibutton>> = ({children, size, fontFamily, ...rest}) => {
	let [fontsLoaded] = useFonts({
		Silkscreen_400Regular,
		Silkscreen_700Bold,
	});
	if (!fontsLoaded) {
		return <FullScreenLoader />;
	}
	return (
		<Pressable style={{
		
		}} {...rest}>
			{children}
		</Pressable>
	)
}

export default Button
