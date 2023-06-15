import { useAction } from '@/hook/useAction'
import Button from '@/ui/button/button'
import Header from '@/ui/header/header'
import Layout from '@/ui/layout/layout'
import Title from '@/ui/title/title'
import i18n from 'i18next'
import Lottie from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import { Ref, useEffect, useRef, useState } from 'react'
import { Pressable, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const Settings = () => {
	const { setColorScheme, colorScheme } = useColorScheme()
	const { setTheme, logout } = useAction()
	const lottieRef = useRef<Lottie>()
	const [DropDownOpen, setDropDownOpen] = useState(false)
	const [DropDownValue, setDropDownValue] = useState(i18n.language)
	useEffect(() => {
		lottieRef.current?.play(
			colorScheme === 'light' ? 80 : 0,
			colorScheme === 'light' ? 180 : 80
		)
	}, [colorScheme, setColorScheme])
	return (
		<Layout>
			<Header className='justify-between items-center'>
				<Pressable
					onPress={() => {
						setTheme(colorScheme === 'light' ? 'dark' : 'light')
						setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
					}}
				>
					<Lottie
						autoSize={true}
						autoPlay={false}
						duration={1000}
						loop={false}
						ref={lottieRef as Ref<Lottie>}
						source={require('../../assets/switcher.json')}
					/>
				</Pressable>
			</Header>
			<View>
				<Title translate className='mt-2 mb-4'>
					Language Settings
				</Title>
				<DropDownPicker
					disableBorderRadius={true}
					onSelectItem={async item => {
						await i18n.changeLanguage(item.value)
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
			<Button
				borderRadius={4}
				onPress={() => logout()}
				size={'medium'}
				text={'Logout'}
				width={200}
				className='mt-4 justify-center items-center self-center'
			/>
		</Layout>
	)
}

export default Settings
