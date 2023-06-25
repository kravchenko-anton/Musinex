import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press-animation'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { IGenreItem } from '@/pages/home/ui/genre-item/genreItem.types'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { getServerFileUrl } from '@/utils/api.config'
import { shadeColor } from '@/utils/shade.color'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'

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
