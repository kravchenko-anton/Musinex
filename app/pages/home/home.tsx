import { FontAwesome5 } from '@expo/vector-icons'
import { ScrollView } from 'react-native'
import { useGetChartQuery } from '../../redux/api/api'
import Header from '../../ui/header/header'
import Layout from '../../ui/Layout/Layout'
import Title from '../../ui/title/title'

const Home = () => {

		const {data} = useGetChartQuery(null)
	
	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
			<Header className={'mb-5'} logoSize={24}>
				<FontAwesome5 name='bell' size={26} color='black' />
			</Header>
			<Title
				size={40}
				numberOfLines={2}
				classNames={'mb-4'}
				fontFamily={'Silkscreen_700Bold'}
				text={'Select you music! '}
			/>
			{/*<UFlatList headerText={'Top Song'}*/}
			{/*	showsHorizontalScrollIndicator={false}*/}
			{/*	horizontal*/}
			{/*	header*/}
			{/*	data={topSong.tracks.slice(0, 10)}*/}
			{/*	renderItem={({ item }) => {*/}
			{/*		return (*/}
			{/*			<TrackItem*/}
			{/*				ImageClassNames={'rounded-lg'}*/}
			{/*				WrapClassNames={'mr-3 '}*/}
			{/*				name={item.name}*/}
			{/*				artists={item.artists.map(artist => artist.name).join(',')}*/}
			{/*				image={{*/}
			{/*					url: item.album.cover[0].url,*/}
			{/*					width: 220,*/}
			{/*					height: 220*/}
			{/*				}}*/}
			{/*				songId={item.id}*/}
			{/*			/>*/}
			{/*		)*/}
			{/*	}}*/}
			{/*/>*/}
			{/*	<UFlatList headerText={'Top Author'} wrapClassNames={'mt-10 mb-5'}*/}
			{/*	           showsHorizontalScrollIndicator={false}*/}
			{/*	           horizontal*/}
			{/*	           header*/}
			{/*	           data={artist.artists.slice(0, 10)}*/}
			{/*	           renderItem={({ item }) => {*/}
			{/*		           return (*/}
			{/*			           <AuthorItem*/}
			{/*				           ImageClassNames={'rounded-full'}*/}
			{/*				           WrapClassNames={'mr-3'}*/}
			{/*				           image={{*/}
			{/*					           url: item.visuals.avatar[0].url,*/}
			{/*					           width: 150,*/}
			{/*					           height: 150*/}
			{/*				           }}*/}
			{/*				           name={item.name}*/}
			{/*				           authorId={item.id}*/}
			{/*			           />*/}
			{/*		           )*/}
			{/*	           }}*/}
			{/*	/>*/}
			{/*<UFlatList headerText={'Top virus song'} wrapClassNames={'mt-10 mb-5'}*/}
			{/*	showsHorizontalScrollIndicator={false}*/}
			{/*	horizontal*/}
			{/*	header*/}
			{/*	data={virusSong.tracks.slice(0, 10)}*/}
			{/*	renderItem={({ item }) => {*/}
			{/*		return (*/}
			{/*			<TrackItem*/}
			{/*				ImageClassNames={'rounded-xl'}*/}
			{/*				WrapClassNames={'mr-3 '}*/}
			{/*				name={item.name}*/}
			{/*				artists={item.artists.map(artist => artist.name).join(',')}*/}
			{/*				image={{*/}
			{/*					url: item.album.cover[0].url,*/}
			{/*					width: 220,*/}
			{/*					height: 220*/}
			{/*				}}*/}
			{/*				songId={item.id}*/}
			{/*			/>*/}
			{/*		)*/}
			{/*	}}*/}
			{/*/>*/}
			{/*	*/}
			{/*	<UFlatList headerText={'Top Album'} wrapClassNames={'mt-10 mb-5'}*/}
			{/*	           showsHorizontalScrollIndicator={false}*/}
			{/*	           horizontal*/}
			{/*	           header*/}
			{/*	           data={album.albums.slice(0, 10)}*/}
			{/*	           renderItem={({ item }) => {*/}
			{/*		           return (*/}
			{/*			           <AlbumItem*/}
			{/*				           WrapClassNames={'mr-3'}*/}
			{/*				           image={{*/}
			{/*					           url: item.cover[0].url,*/}
			{/*					           width: 200,*/}
			{/*					           height: 200*/}
			{/*				           }}*/}
			{/*				           artists={item.artists.map(artist => artist.name).join(',')}*/}
			{/*				           name={item.name}*/}
			{/*				           albumId={item.id}*/}
			{/*			           />*/}
			{/*		           )*/}
			{/*	           }}*/}
			{/*	/>*/}
			
			</ScrollView>
		</Layout>
	)
}

export default Home
