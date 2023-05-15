import { useTypedNavigation } from '@/hook/useTypedNavigation'
import Header from '@/ui/header/header'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Layout from '@/ui/layout/layout'
import Tabs from '@/ui/tabs/tabs'
import React from 'react'
import { useFavorite } from './useFavorite'

const Favorites = () => {
	const { navigate } = useTypedNavigation()
	const { tabs } = useFavorite()
	return (
		<Layout className='h-screen'>
			<Header logoSize={30}>
				<UIcon
					name={'settings'}
					size={24}
					onPress={() => navigate('Settings')}
				/>
			</Header>
			<Tabs data={tabs} translate={true} />
		</Layout>
	)
}

export default Favorites
