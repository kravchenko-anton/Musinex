import Lottie from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import React, { useEffect } from 'react'
import { Pressable, View } from 'react-native'
import Header from '../../ui/header/header'
import Layout from '../../ui/Layout/Layout'
import Title from '../../ui/title/title'

const Settings = () => {
	const { setColorScheme, colorScheme } = useColorScheme()
	const lottieRef = React.useRef<any>()
	
	useEffect(() => {
		lottieRef.current.play(
			colorScheme === 'light' ? 0 : 80
			, colorScheme === 'light' ? 80 : 180)
	}, [colorScheme, setColorScheme])
	return <Layout>
		<Header className='justify-between items-center' logoSize={30}>
			<Pressable onPress={() => setColorScheme(colorScheme === 'light' ?
				'dark' : 'light'
			)}>
				<Lottie autoSize={true}
				        autoPlay={false}
				        duration={1000}
				        loop={false}
				        ref={lottieRef}
				        source={require('../../assets/switcher.json')} />
			</Pressable>
		</Header>
		<View>
			<Title text={'Language Settings'} className='mt-2' />
		</View>
	</Layout>
}

export default Settings
