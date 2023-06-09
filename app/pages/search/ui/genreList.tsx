import { IGenre } from '@/services/types/IGenreServices'
import UFlatList from '@/ui/flatList/uFlatList'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { FC } from 'react'
import { View } from 'react-native'

const GenreList:FC<{genre: IGenre[]}> = ({genre}) => {
	return <UFlatList
			data={genre}
			fixBottom
			numColumns={2}
			renderItem={({ item }) => (
				<View
					className='w-[49%] h-[100px] m-1 rounded-xl p-3 relative overflow-hidden'
					style={{ backgroundColor: item.color }}
				>
					<Title
						className='mb-3'
						size={18}
						fontFamily='Montserrat_700Bold'
					>
						{item.name}
					</Title>
					<UImage
						source={item.songs[0].coverMedium}
						width={70}
						height={70}
						borderRadius={100}
						wrapperClassName='absolute right-[-10] bottom-[-10]'
					/>
				</View>
			)}
		/>
}

export default GenreList