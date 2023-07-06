import { useTypedNavigation } from '@/hook/useTypedNavigation'
import Icon from '@/ui/icon/default-icon/icon'
import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import Title from '../title/title'
import { HeaderProps } from './header.types'

const Header: FC<PropsWithChildren<HeaderProps>> = ({
	children,
	firstIcon,
	secondIcon,
	...props
}) => {
	const { navigate, goBack } = useTypedNavigation()
	return (
		<View className='flex-row items-center justify-between' {...props}>
			{firstIcon && !children ? (
				<Icon border name={firstIcon.name} onPress={firstIcon.onPress} />
			) : (
				<Icon name='arrow-back' border onPress={() => goBack()} />
			)}

			<Title
				translate
				onPress={() => navigate('Home')}
				weight='extraBold'
				size={28}>
				Musinex
			</Title>
			{!children && secondIcon ? (
				<Icon border name={secondIcon.name} onPress={secondIcon.onPress} />
			) : (
				children
			)}
		</View>
	)
}

export default Header
