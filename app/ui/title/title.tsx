import { Silkscreen_400Regular, Silkscreen_700Bold, useFonts } from '@expo-google-fonts/silkscreen'
import React, { FC } from 'react'

import { Text } from 'react-native'
import FullScreenLoader from '../Loader/FullScreenLoader'
import { ITitle } from './Ititle'

const Title:FC<ITitle> = ({classNames, text,size, fontFamily}) => {
	let [fontsLoaded] = useFonts({
		Silkscreen_400Regular,
		Silkscreen_700Bold,
	});
	if (!fontsLoaded) {
		return <FullScreenLoader />;
	}
		return (
			<Text className={classNames} style={{
				fontFamily:fontFamily || "Silkscreen_400Regular",
				fontSize:size || 20
			}} numberOfLines={1}
			>
				{text}
			</Text>
	)
}

export default Title
