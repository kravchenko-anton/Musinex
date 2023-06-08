import { useTypedNavigation } from '@/hook/useTypedNavigation'
import Header from '@/ui/header/header'
import Layout from '@/ui/layout/layout'

const Favorites = () => {
	const { navigate } = useTypedNavigation()
	return (
		<Layout className='h-screen'>
			<Header
				secondIcon={{
					name: 'settings',
					onPress: () => navigate('Settings')
				}}
			/>
		</Layout>
	)
}

export default Favorites
