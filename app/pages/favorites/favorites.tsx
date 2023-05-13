import { useTypedNavigation } from '@/hook/useTypedNavigation'
import Header from '@/ui/header/header'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Layout from '@/ui/layout/layout'
import Tabs from '@/ui/tabs/tabs'
import React from 'react'
import { View } from 'react-native'
import { useFavorite } from './useFavorite'

const Favorites = () => {
	const { navigate } = useTypedNavigation()
	const { tabs } = useFavorite()
	return (
		<Layout>
			<Header logoSize={30}>
				<UIcon
					name={'settings'}
					size={24}
					onPress={() => navigate('Settings')}
				/>
			</Header>
			<View className='h-full'>
				<Tabs data={tabs} translate={true} />
			</View>
		</Layout>
	)
}

export default Favorites
