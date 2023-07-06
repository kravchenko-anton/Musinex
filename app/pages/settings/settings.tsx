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
	const { colorScheme, toggleColorScheme } = useColorScheme()
	const { setTheme, logout } = useAction()
	const lottieRef = useRef<Lottie>()
	const [isDropDownOpen, setDropDownOpen] = useState(false)
	const [dropDownValue, setDropDownValue] = useState(i18n.language)
	useEffect(() => {
		lottieRef.current?.play(
			colorScheme === 'light' ? 80 : 0,
			colorScheme === 'light' ? 180 : 80
		)
	}, [colorScheme])
	return (
		<Layout>
			<Header className='items-center justify-between'>
				<Pressable
					onPress={() => {
						setTheme(colorScheme === 'light' ? 'dark' : 'light')
						toggleColorScheme()
					}}>
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
				<Title translate className='mb-4 mt-8'>
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
				size='medium'
				translate={true}
				text='Logout'
				width={200}
				className='z-0 mt-4 items-center justify-center self-center'
			/>
		</Layout>
	)
}

export default Settings
