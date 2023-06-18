import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/usePressAnimation'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { IGenre } from '@/services/types/IGenreServices'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { getServerFileUrl } from '@/utils/apiConfig'
import { shadeColor } from '@/utils/shadeColor'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'

interface IGenreItem {
	item: IGenre
}
const GenreItem: FC<IGenreItem> = ({ item: genre }) => {
	const { navigate } = useTypedNavigation()
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<AnimatedPressable
			onPress={() =>
				navigate('GenreCatalog', {
					id: genre.id
				})
			}
			className='mr-3 w-[100px]'
			style={animatedStyle}
			{...pressFunctions}
		>
				<LinearGradient
					className='p-4 rounded-3xl'
					colors={[
						shadeColor(genre.color, -30),
						genre.color,
						shadeColor(genre.color, +10)
					]}
					start={[0.2, 0.8]}
					end={[0.3, 0.2]}
				>
					<UImage
						transparentSkeleton
						width={70}
						height={70}
						source={getServerFileUrl(genre.icon)}
					/>
				</LinearGradient>
			<Title className='text-center mt-2' numberOfLines={1} translate>
				{genre.name}
			</Title>
		</AnimatedPressable>
	)
}

export default GenreItem
