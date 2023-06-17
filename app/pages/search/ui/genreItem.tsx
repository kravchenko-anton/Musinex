import { usePressAnimation } from '@/animation/usePressAnimation'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { IGenre } from '@/services/types/IGenreServices'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { FC } from 'react'
import { Pressable } from 'react-native'
import Animated from 'react-native-reanimated'

const GenreItem:FC<{genre: IGenre}> = ({genre}) => {
	const {navigate} = useTypedNavigation()
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return <Pressable
		onPress={() =>
			navigate('GenreCatalog', {
				id: genre.id
			})
		}
		className='w-[49%]'
		{...pressFunctions}
	>
		<Animated.View 	className='w-[100%] h-[100px] m-1 rounded-xl p-3  overflow-hidden' style={[{ backgroundColor: genre.color }, animatedStyle]}>
			<Title className='mb-3' size={18} fontFamily='Montserrat_700Bold'>
				{genre.name}
			</Title>
			<UImage
				source={genre.songs[0].coverMedium}
				width={70}
				height={70}
				borderRadius={100}
				wrapperClassName='absolute right-[-10] bottom-[-10]'
			/>
		</Animated.View>
	</Pressable>
}

export default GenreItem