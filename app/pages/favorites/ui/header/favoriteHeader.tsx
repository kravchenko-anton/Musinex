import { useAuth } from '@/hook/useAuth'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import UIcon from '@/ui/icon/default-icon/icon'
import Title from '@/ui/title/title'
import { capitalizeFirstLetter } from '@/utils/capitalize.latter'
import { View } from 'react-native'

const FavoriteHeader = () => {
	const { navigate } = useTypedNavigation()
	const { user } = useAuth()
	if (!user) return null
	console.log(user)
	return (
		<View className='justify-between items-center flex-row border-b-2 border-b-twilight pb-2'>
			<View className='flex-row items-center gap-2'>
				<View className='bg-primary rounded-full w-[50px] h-[50px] items-center justify-center'>
					<Title
						fontFamily={'Montserrat_700Bold'}
						size={24}
						color={'midnight'}
					>
						{capitalizeFirstLetter(user.email.charAt(0))}
					</Title>
				</View>
				<Title translate fontFamily={'Montserrat_700Bold'}>
					Your library
				</Title>
			</View>
			<View className='flex-row items-center gap-5 justify-between'>
				<UIcon
					onPress={() => navigate('Settings')}
					name={'settings'}
					size={30}
				/>
			</View>
		</View>
	)
}

export default FavoriteHeader
