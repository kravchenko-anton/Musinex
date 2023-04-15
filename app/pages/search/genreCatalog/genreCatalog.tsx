import React, { FC } from 'react'

import { ScrollView } from 'react-native'
import { useTypedRoute } from '../../../hook/useTypedRoute'
import { useGetChartInGenreQuery } from '../../../redux/api/genre/genre'
import AlbumItem from '../../../ui/FlatList/flatlistItem/AlbumItem'
import AuthorItem from '../../../ui/FlatList/flatlistItem/authorItem'
import PlayListItem from '../../../ui/FlatList/flatlistItem/PlayListItem'
import TrackItem from '../../../ui/FlatList/flatlistItem/trackItem'
import UFlatList from '../../../ui/FlatList/UFlatList'
import NavigateHeader from '../../../ui/header/navigateHeader'
import Layout from '../../../ui/Layout/Layout'
import FullScreenLoader from '../../../ui/Loader/FullScreenLoader'
import Title from '../../../ui/title/title'
import { cutString } from '../../../utils/cutString'

const GenreCatalog:FC = () => {
	const {params} = useTypedRoute<"genreCatalog">()
	const {data:chart} = useGetChartInGenreQuery(params.genreId)
	if(!chart) return <FullScreenLoader/>
	return (
<Layout>
	<ScrollView showsVerticalScrollIndicator={false}>
<NavigateHeader className='mb-4' logoSize={30}/>
		<Title
			size={40}
			numberOfLines={2}
			classNames={'mb-4'}
			fontFamily={'Montserrat_900Black_Italic'}
			text={params.genreName}
		/>
		<UFlatList headerText={cutString(params.genreName, 6) + ' Song'}
		           showsHorizontalScrollIndicator={false}
		           horizontal
		           header
		           data={chart.tracks.data.slice(0, 10)}
		           renderItem={({ item }) => {
			           return (
				           <TrackItem
					           ImageClassNames={'rounded-lg'}
					           WrapClassNames={'mr-3 '}
					           name={item.title_short}
					           artists={item.artist.name}
					           image={{
						           url: item.album.cover_big,
						           width: 220,
						           height: 220
					           }}
					           songId={item.id}
				           />
			           )
		           }}
		/>
		<UFlatList headerText={cutString(params.genreName, 6)  + ' Author'} wrapClassNames={'mt-10 mb-5'}
		           showsHorizontalScrollIndicator={false}
		           horizontal
		           header
		           data={chart.artists.data.slice(0, 10)}
		           renderItem={({ item }) => {
			           return (
				           <AuthorItem
					           ImageClassNames={'rounded-full'}
					           WrapClassNames={'mr-3'}
					           image={{
						           url: item.picture_big,
						           width: 150,
						           height: 150
					           }}
					           name={item.name}
					           authorId={item.id}
				           />
			           )
		           }}
		/>
		
		
		<UFlatList headerText={ cutString(params.genreName, 6)  + ' Album'} wrapClassNames={'mt-10 mb-5'}
		           showsHorizontalScrollIndicator={false}
		           horizontal
		           header
		           data={chart.albums.data.slice(0, 10)}
		           renderItem={({ item }) => {
			           return (
				           <AlbumItem
					           WrapClassNames={'mr-3'}
					           image={{
						           url: item.cover_big,
						           width: 200,
						           height: 200
					           }}
					           artists={item.artist.name}
					           name={item.title}
					           albumId={item.id}
				           />
			           )
		           }}
		/>
		
		
		<UFlatList headerText={  cutString(params.genreName, 6)  + ' PlayList'} wrapClassNames={'mt-10 mb-5'}
		           showsHorizontalScrollIndicator={false}
		           horizontal
		           header
		           data={chart.playlists.data.slice(0, 10)}
		           renderItem={({ item }) => {
			           return (
				           <PlayListItem
					           WrapClassNames={'mr-3'}
					           image={{
						           url: item.picture_big,
						           width: 200,
						           height: 200
					           }}
					           artists={item.user.name}
					           name={item.title}
					           PlayListId={item.id}
				           />
			           )
		           }}
		/>
	
	</ScrollView>
</Layout>
	)
}

export default GenreCatalog
