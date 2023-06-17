import { usePressAnimation } from '@/animation/usePressAnimation'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { IGenre } from '@/services/types/IGenreServices'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { getServerFileUrl } from '@/utils/apiConfig'
import { shadeColor } from '@/utils/shadeColor'
import { FC } from 'react'
import { Pressable } from 'react-native'
import Animated from 'react-native-reanimated'

interface IGenreItem {
	item: IGenre
}
const GenreItem: FC<IGenreItem> = ({ item: genre }) => {
	const { navigate } = useTypedNavigation()
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<Pressable
			onPress={() =>
				navigate('GenreCatalog', {
					id: genre.id
				})
			}
			className='mr-3 w-[100px]'
			{...pressFunctions}
		>
			<Animated.View className='p-4 rounded-3xl' style={[{
				backgroundColor: shadeColor(genre.color, -25)
			},animatedStyle]}>
				<UImage width={70} height={70} source={getServerFileUrl(genre.icon)} />
			</Animated.View>
			<Title className='text-center mt-2' numberOfLines={1} translate>
				{genre.name}
			</Title>
		</Pressable>
	)
}

export default GenreItem
