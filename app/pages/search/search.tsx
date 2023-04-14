import React from 'react'
import { useForm } from 'react-hook-form'
import { FlatList } from 'react-native'
import { useDebounce } from '../../hook/useDebounde'
import { useGetAllGenreQuery } from '../../redux/api/genre/genre'
import Field from '../../ui/Flield/Field'
import Layout from '../../ui/Layout/Layout'
import FullScreenLoader from '../../ui/Loader/FullScreenLoader'
import GenreItem from './ui/genreItem'

const Search = () => {
	const {control, watch} = useForm({
		defaultValues: {
			Search: ''
		}
	})
	const debounceSearch = useDebounce(watch('Search'), 500)
	const {data:genre} = useGetAllGenreQuery(null)
	if (!genre) return <FullScreenLoader/>
	console.log(genre)
	return <Layout className='h-full'>
		<Field control={control} name={'Search'} placeholder={'Type anything... '} />
			
			<FlatList
				showsVerticalScrollIndicator={false} numColumns={2} columnWrapperStyle={{
				justifyContent: 'space-between',
				marginVertical: 10,
				gap: 5,
				width: '100%',
				zIndex: 100
			}} data={genre.data.slice(1,20)} renderItem={({ item }) => {
				return <GenreItem name={item.name} picture_big={item.picture_big}/>
			}}/>
		
	</Layout>
}

export default Search
