import Lottie from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import React, { useEffect, useState } from 'react'
import { NativeModules, Pressable, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hook/useTypedSelector'
import { LanguageAction } from '../../redux/settings/languageSlice'
import { ThemeAction } from '../../redux/settings/themeSlice'
import Header from '../../ui/header/header'
import Layout from '../../ui/layout/layout'
import Title from '../../ui/title/title'

const Settings = () => {
	const { setColorScheme, colorScheme } = useColorScheme()
	const dispatch = useDispatch()
	const lottieRef = React.useRef<any>()
	const [DropDownOpen, setDropDownOpen] = useState(false)
	const selector = useTypedSelector((state) => state.language)
	const [DropDownValue, setDropDownValue] = useState(selector)
	useEffect(() => {
		lottieRef.current.play(
			colorScheme === 'light' ? 80 : 0
			, colorScheme === 'light' ? 180 : 80)
	}, [colorScheme, setColorScheme])
	return <Layout>
		<Header className='justify-between items-center' logoSize={30}>
			<Pressable onPress={() => {
				
				dispatch(ThemeAction.setTheme(colorScheme === 'light' ?
					'dark' : 'light'
				))
				setColorScheme(colorScheme === 'light' ?
					'dark' : 'light'
				)
			}}>
				<Lottie autoSize={true}
				        autoPlay={false}
				        duration={1000}
				        loop={false}
				        ref={lottieRef}
				        source={require('../../assets/switcher.json')} />
			</Pressable>
		</Header>
		<View>
			<Title translate text={'Language Settings'} className='mt-2 mb-4' />
			<DropDownPicker
				disableBorderRadius={true}
				onSelectItem={async (item) => {
					dispatch(LanguageAction.setLanguage(item.value ? item.value : 'en'))
					NativeModules.DevSettings.reload()
				}}
				closeAfterSelecting={true}
				theme={colorScheme === 'light' ? 'LIGHT' : 'DARK'}
				open={DropDownOpen}
				
				value={DropDownValue}
				items={[
					{ label: 'English', value: 'en' },
					{ label: 'Russian', value: 'ru' },
					{ label: 'Polish', value: 'pl' },
					{ label: 'Ukrainian', value: 'ua' }
				]}
				setOpen={setDropDownOpen}
				setValue={setDropDownValue}
			/>
		</View>
	</Layout>
}

export default Settings
