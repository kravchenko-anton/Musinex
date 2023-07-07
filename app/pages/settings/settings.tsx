import { useAction } from '@/hook/useAction'
import ThemeSwitcher from '@/pages/settings/ui/themeSwitcher'
import Button from '@/ui/button/button'
import Dropdown from '@/ui/dropdown/dropdown'
import Header from '@/ui/header/header'
import Layout from '@/ui/layout/layout'
import Title from '@/ui/title/title'
import i18n from 'i18next'
import { useState } from 'react'

const Settings = () => {
	const { logout } = useAction()
	const [isDropDownOpen, setDropDownOpen] = useState(false)
	const [dropDownValue, setDropDownValue] = useState(i18n.language)

	return (
		<Layout>
			<Header className='items-center justify-between'>
				<ThemeSwitcher />
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
