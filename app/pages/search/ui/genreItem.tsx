import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import { useColorTheme } from '@/hook/useColorTheme'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { GenreType } from '@/services/types/genre.services.types'
import Image from '@/ui/image/image'
import Title from '@/ui/title/title'
import { FC } from 'react'
import { View } from 'react-native'

const GenreItem: FC<{ genre: GenreType }> = ({ genre }) => {
	const { navigate } = useTypedNavigation()
	const { duskToWhite } = useColorTheme()
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<AnimatedPressable
			onPress={() => navigate('GenreCatalog', { id: genre.id })}
			className='w-[49%]'
			style={animatedStyle}
			{...pressFunctions}
		>
			<View
				className='w-[100%] h-[100px] m-1 rounded-xl p-3  overflow-hidden'
				style={{backgroundColor: genre.color }}
			>
				<Title
					className='mb-3'
					size={18}
					color={duskToWhite}
					fontFamily='Montserrat_700Bold'
				>
					{genre.name}
				</Title>
				<Image
					url={genre.songs[0].coverMedium}
					width={70}
					height={70}
					borderRadius={100}
					wrapperClassName='absolute right-[-10] bottom-[-10]'
				/>
			</View>
		</AnimatedPressable>
	)
}

export default GenreItem
