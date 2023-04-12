import { Silkscreen_400Regular, Silkscreen_700Bold, useFonts } from '@expo-google-fonts/silkscreen'
import React, { FC } from 'react'

import { Text } from 'react-native'
import FullScreenLoader from '../Loader/FullScreenLoader'
import { ITitle } from './Ititle'

const Title: FC<ITitle> = (props, { ...rest }) => {
	let [fontsLoaded] = useFonts({
		Silkscreen_400Regular,
		Silkscreen_700Bold
	})
	if (!fontsLoaded) {
		return <FullScreenLoader />
	}
	return (
		<Text
			numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
			className={props.classNames}
			style={{
				fontFamily: props.fontFamily || 'Silkscreen_400Regular',
				fontSize: props.size || 20,
				letterSpacing: -3,
				textAlign: props.center ? 'center' : 'auto',
			}}
			{...rest}
		>
			{props.text}
		</Text>
	)
}

export default Title
