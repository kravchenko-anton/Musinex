import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { IAuthFields } from '@/types/auth/authTypes'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Title from '@/ui/title/title'
import { capitalizeFirstLetter } from '@/utils/capitalizeLatter'
import { FC } from 'react'
import { View } from 'react-native'

interface IFavoriteHeader extends Pick<IAuthFields, 'email'> {}

const FavoriteHeader:FC<IFavoriteHeader> = ({email}) => {
	const { navigate } = useTypedNavigation()
	return 	<View className='justify-between items-center flex-row border-b-2 border-b-lightBlack pb-2'>
		<View className='flex-row items-center gap-2'>
			<View className='bg-primary rounded-full w-[50px] h-[50px] items-center justify-center'>
				<Title
					fontFamily={'Montserrat_700Bold'}
					size={24}
					color={'primaryBlack'}
				>
					{capitalizeFirstLetter(email.charAt(0))}
				</Title>
			</View>
			<Title translate fontFamily={'Montserrat_700Bold'}>
				Your library
			</Title>
		</View>
		<View className='flex-row items-center gap-5 justify-between'>
			<UIcon onPress={() => navigate('Settings')} name={'settings'} size={30} />
		</View>
	</View>
}

export default FavoriteHeader
