import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { userServices } from '@/services/userServices'
import Header from '@/ui/header/header'
import Layout from '@/ui/layout/layout'
import { useQuery } from '@tanstack/react-query'

const Favorites = () => {
	const { navigate } = useTypedNavigation()
const {data, error} = useQuery(['favorites'], userServices.getProfile)
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
