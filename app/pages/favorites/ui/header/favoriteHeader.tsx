import { useAuth } from '@/hook/useAuth'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import Icon from '@/ui/icon/default-icon/icon'
import Title from '@/ui/title/title'
import { capitalizeFirstLetter } from '@/utils/capitalize.latter'
import { Color } from '@/utils/color'
import { View } from 'react-native'

const FavoriteHeader = () => {
	const { navigate } = useTypedNavigation()
	const { user } = useAuth()
	if (!user) return null
	return (
		<View className='flex-row items-center justify-between border-b-2 border-b-twilight pb-2'>
			<View className='flex-row items-center gap-2'>
				<View className='h-[50px] w-[50px] items-center justify-center rounded-full bg-primary'>
					<Title weight='bold' size={24} color={Color.midnight}>
						{capitalizeFirstLetter(user.email.charAt(0))}
					</Title>
				</View>
				<Title translate weight='bold'>
					Your library
				</Title>
			</View>
			<View className='flex-row items-center justify-between gap-5'>
				<Icon onPress={() => navigate('Settings')} name='settings' size={30} />
			</View>
		</View>
	)
}

export default FavoriteHeader
