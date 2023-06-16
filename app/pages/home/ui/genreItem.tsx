import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { IGenre } from '@/services/types/IGenreServices'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { getServerFileUrl } from '@/utils/apiConfig'
import { FC } from 'react'
import { Pressable, View } from 'react-native'

interface IGenreItem {
	item: IGenre
}
const GenreItem: FC<IGenreItem> = ({ item: genre }) => {
	const { navigate } = useTypedNavigation()
	return (
		<Pressable
			onPress={() =>
				navigate('GenreCatalog', {
					id: genre.id
				})
			}
			className='mr-3 w-[100px]'
		>
			<View className='bg-lightBlack p-4 rounded-3xl'>
				<UImage width={70} height={70} source={getServerFileUrl(genre.icon)} />
			</View>
			<Title className='text-center mt-2' numberOfLines={1} translate>
				{genre.name}
			</Title>
		</Pressable>
	)
}

export default GenreItem
