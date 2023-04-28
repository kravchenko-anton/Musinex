import React from 'react'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import Header from '../../ui/header/header'
import Icon from '../../ui/icon/defaultIcon/Icon'
import Layout from '../../ui/Layout/Layout'

const Favorites = () => {
	const { navigate } = useTypedNavigation()
	return <Layout>
		<Header logoSize={30}>
			<Icon name={'settings'} size={24} onPress={() => navigate('Settings')} />
		</Header>
	</Layout>
}

export default Favorites
