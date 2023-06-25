import { useTypedNavigation } from '@/hook/useTypedNavigation'
import UIcon from '@/ui/icon/default-icon/icon'
import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import Title from '../title/title'
import { IHeaderTypes } from './header.types'

const Header: FC<PropsWithChildren<IHeaderTypes>> = ({
	children,
	firstIcon,
	secondIcon,
	...props
}) => {
	const { navigate, goBack } = useTypedNavigation()
	return (
		<View className='flex-row justify-between items-center' {...props}>
			{firstIcon && !children ? (
				<UIcon border name={firstIcon.name} onPress={firstIcon.onPress} />
			) : (
				<UIcon name={'arrow-back'} border onPress={() => goBack()} />
			)}

			<Title
				translate
				onPress={() => navigate('Home')}
				fontFamily={'Montserrat_900Black'}
				size={28}
			>
				Musinex
			</Title>
			{!children && secondIcon ? (
				<UIcon border name={secondIcon.name} onPress={secondIcon.onPress} />
			) : (
				children
			)}
		</View>
	)
}

export default Header
