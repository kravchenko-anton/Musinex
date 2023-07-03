import { useAction } from '@/hook/useAction'
import Button from '@/ui/button/button'
import Dropdown from '@/ui/dropdown/dropdown'
import Header from '@/ui/header/header'
import Layout from '@/ui/layout/layout'
import Title from '@/ui/title/title'
import i18n from 'i18next'
import Lottie from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import { Ref, useEffect, useRef, useState } from 'react'
import { Pressable } from 'react-native'

const Settings = () => {
	const { setColorScheme, colorScheme } = useColorScheme()
	const { setTheme, logout } = useAction()
	const lottieRef = useRef<Lottie>()
	const [isDropDownOpen, setDropDownOpen] = useState(false)
	const [dropDownValue, setDropDownValue] = useState(i18n.language)
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
			<>
				<Title translate className='mt-8 mb-4'>
					Language Settings
				</Title>
				<Dropdown
					options={[
						{ label: 'English', value: 'en' },
						{ label: 'Russian', value: 'ru' },
						{ label: 'Polish', value: 'pl' },
						{ label: 'Ukrainian', value: 'ua' }
					]}
					value={dropDownValue}
					setValue={setDropDownValue}
					setIsOpen={setDropDownOpen}
					isOpen={isDropDownOpen}
					onSelect={async value => {
						await i18n.changeLanguage(value)
					}}
				/>
			</>
			<Button
				borderRadius={4}
				onPress={() => logout()}
				size={'medium'}
				translate={false}
				text={'Logout'}
				width={200}
				className='mt-4 z-0 justify-center items-center self-center'
			/>
		</Layout>
	)
}

export default Settings
