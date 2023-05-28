import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedRoute } from '@/hook/useTypedRoute'
import NavigateHeader from '@/ui/header/navigateHeader'
import ScrollLayout from '@/ui/layout/scrollLayout'
import Title from '@/ui/title/title'
import React, { FC } from 'react'

const GenreCatalog: FC = () => {
	const { params } = useTypedRoute<'genreCatalog'>()
	// const { data: chart } = useGetChartInGenreQuery(params.genreId)
	const { navigate } = useTypedNavigation()
	// if (!chart) return <FullScreenLoader />
	return (
		<ScrollLayout>
			<NavigateHeader className='mb-4' logoSize={30} />
			<Title
				size={40}
				numberOfLines={2}
				className={'mb-4'}
				fontFamily={'Montserrat_900Black_Italic'}
				text={params.genreName}
			/>
			{/*<UFlatList*/}
			{/*	headerNavigate={() =>*/}
			{/*		navigate('catalog', {*/}
			{/*			data: chart.tracks.data.map(item => {*/}
			{/*				return {*/}
			{/*					id: item.id,*/}
			{/*					title: item.title,*/}
			{/*					image: item.album.cover_medium,*/}
			{/*					artist: item.artist.name*/}
			{/*				}*/}
			{/*			}),*/}
			{/*			type: 'songs',*/}
			{/*			id: chart.tracks.data[0].id,*/}
			{/*			headerText: I18n.t('Songs'),*/}
			{/*			headerImage: chart.tracks.data[0].album.cover_big*/}
			{/*		})*/}
			{/*	}*/}
			{/*	headerText={'Songs'}*/}
			{/*	showsHorizontalScrollIndicator={false}*/}
			{/*	horizontal*/}
			{/*	header*/}
			{/*	data={chart.tracks.data.slice(0, 10)}*/}
			{/*	renderItem={({ item }) => {*/}
			{/*		return (*/}
			{/*			<MusicCart*/}
			{/*				ImageClassNames={'rounded-lg'}*/}
			{/*				WrapClassNames={'mr-3 '}*/}
			{/*				name={item.title_short}*/}
			{/*				artists={item.artist.name}*/}
			{/*				image={{*/}
			{/*					url: item.album.cover_big,*/}
			{/*					width: 220,*/}
			{/*					height: 220*/}
			{/*				}}*/}
			{/*			/>*/}
			{/*		)*/}
			{/*	}}*/}
			{/*/>*/}
			{/*<UFlatList*/}
			{/*	headerNavigate={() =>*/}
			{/*		navigate('catalog', {*/}
			{/*			data: chart.artists.data.map(item => {*/}
			{/*				return {*/}
			{/*					id: item.id,*/}
			{/*					title: item.name,*/}
			{/*					image: item.picture_medium,*/}
			{/*					artist: item.name*/}
			{/*				}*/}
			{/*			}),*/}
			{/*			type: 'artists',*/}
			{/*			id: chart.artists.data[0].id,*/}
			{/*			headerText: I18n.t('Artists'),*/}
			{/*			headerImage: chart.artists.data[0].picture_big*/}
			{/*		})*/}
			{/*	}*/}
			{/*	headerText={'Artists'}*/}
			{/*	wrapClassNames={'mt-10 mb-5'}*/}
			{/*	showsHorizontalScrollIndicator={false}*/}
			{/*	horizontal*/}
			{/*	header*/}
			{/*	data={chart.artists.data.slice(0, 10)}*/}
			{/*	renderItem={({ item }) => {*/}
			{/*		return (*/}
			{/*			<MusicCart*/}
			{/*				onPress={() =>*/}
			{/*					navigate('ArtistWrapperCatalog', {*/}
			{/*						artistId: item.id*/}
			{/*					})*/}
			{/*				}*/}
			{/*				ImageClassNames={'rounded-full'}*/}
			{/*				WrapClassNames={'mr-3'}*/}
			{/*				image={{*/}
			{/*					url: item.picture_big,*/}
			{/*					width: 90,*/}
			{/*					height: 90*/}
			{/*				}}*/}
			{/*				name={item.name}*/}
			{/*			/>*/}
			{/*		)*/}
			{/*	}}*/}
			{/*/>*/}
			{/*<UFlatList*/}
			{/*	headerNavigate={() =>*/}
			{/*		navigate('catalog', {*/}
			{/*			data: chart.albums.data.map(item => {*/}
			{/*				return {*/}
			{/*					id: item.id,*/}
			{/*					title: item.title,*/}
			{/*					image: item.cover_medium,*/}
			{/*					artist: item.artist.name*/}
			{/*				}*/}
			{/*			}),*/}
			{/*			type: 'albums',*/}
			{/*			id: chart.albums.data[0].id,*/}
			{/*			headerText: I18n.t('Albums'),*/}
			{/*			headerImage: chart.albums.data[0].cover_big*/}
			{/*		})*/}
			{/*	}*/}
			{/*	headerText={'Albums'}*/}
			{/*	wrapClassNames={'mt-10 mb-5'}*/}
			{/*	showsHorizontalScrollIndicator={false}*/}
			{/*	horizontal*/}
			{/*	header*/}
			{/*	data={chart.albums.data.slice(0, 10)}*/}
			{/*	renderItem={({ item }) => {*/}
			{/*		return (*/}
			{/*			<MusicCart*/}
			{/*				onPress={() =>*/}
			{/*					navigate('AlbumWrapperCatalog', {*/}
			{/*						albumId: item.id*/}
			{/*					})*/}
			{/*				}*/}
			{/*				WrapClassNames={'mr-3'}*/}
			{/*				image={{*/}
			{/*					url: item.cover_big,*/}
			{/*					width: 200,*/}
			{/*					height: 200*/}
			{/*				}}*/}
			{/*				artists={item.artist.name}*/}
			{/*				name={item.title}*/}
			{/*			/>*/}
			{/*		)*/}
			{/*	}}*/}
			{/*/>*/}
			
			{/*<UFlatList*/}
			{/*	headerNavigate={() =>*/}
			{/*		navigate('catalog', {*/}
			{/*			data: chart.playlists.data.map(item => {*/}
			{/*				return {*/}
			{/*					id: item.id,*/}
			{/*					title: item.title,*/}
			{/*					image: item.picture_medium,*/}
			{/*					artist: item.user.name*/}
			{/*				}*/}
			{/*			}),*/}
			{/*			type: 'playlists',*/}
			{/*			id: chart.playlists.data[0].id,*/}
			{/*			headerText: I18n.t('Playlists'),*/}
			{/*			headerImage: chart.playlists.data[0].picture_big*/}
			{/*		})*/}
			{/*	}*/}
			{/*	headerText={'Playlists'}*/}
			{/*	wrapClassNames={'mt-10 mb-5'}*/}
			{/*	showsHorizontalScrollIndicator={false}*/}
			{/*	horizontal*/}
			{/*	header*/}
			{/*	data={chart.playlists.data.slice(0, 10)}*/}
			{/*	renderItem={({ item }) => {*/}
			{/*		return (*/}
			{/*			<MusicCart*/}
			{/*				onPress={() =>*/}
			{/*					navigate('PlayListWrapperCatalog', {*/}
			{/*						playListId: item.id*/}
			{/*					})*/}
			{/*				}*/}
			{/*				WrapClassNames={'mr-3'}*/}
			{/*				image={{*/}
			{/*					url: item.picture_big,*/}
			{/*					width: 200,*/}
			{/*					height: 200*/}
			{/*				}}*/}
			{/*				artists={item.user.name}*/}
			{/*				name={item.title}*/}
			{/*			/>*/}
			{/*		)*/}
			{/*	}}*/}
			{/*/>*/}
		</ScrollLayout>
	)
}

export default GenreCatalog
