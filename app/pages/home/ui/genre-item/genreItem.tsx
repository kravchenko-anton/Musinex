import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { GenreItemType } from '@/pages/home/ui/genre-item/genreItem.types'
import Image from '@/ui/image/image'
import Title from '@/ui/title/title'
import { getServerFileUrl } from '@/utils/api.config'
import { shadeRGBColor } from '@/utils/shade.color'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'

const GenreItem: FC<GenreItemType> = ({ item: genre }) => {
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
						shadeRGBColor(genre.color, -30),
						genre.color,
						shadeRGBColor(genre.color, +10)
					]}
					start={[0.2, 0.8]}
					end={[0.3, 0.2]}
				>
					<Image
						transparentSkeleton
						width={70}
						height={70}
						url={getServerFileUrl(genre.icon)}
					/>
				</LinearGradient>
			<Title className='text-center mt-2' numberOfLines={1} translate>
				{genre.name}
			</Title>
		</AnimatedPressable>
	)
}

export default GenreItem
