import React from 'react'
import { useTypedSelector } from '../../hook/useTypedSelector'
import FlatList404 from '../../ui/flatList/flatList404'
import RenderItem from '../../ui/flatList/render/renderItem'
import UFlatList from '../../ui/flatList/uFlatList'

export const useFavorite = () => {
	const selector = useTypedSelector(state => state.favorites)
	const tabs = [
		{
			name: 'songs',
			title: 'Songs',
			component: () => {
				return (
					<UFlatList
						ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
						data={selector.songs} renderItem={({ item }) => {
						return (
							<RenderItem playFunc={() => console.log(1)} id={item.id} type={'songs'} />
						)
					}} />
				)
			}
		}, {
			name: 'albums',
			title: 'Albums',
			component: () => {
				return (
					<UFlatList numColumns={2}
					           ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
					           data={selector.albums} renderItem={({ item }) => {
						console.log(item)
						return (
							<RenderItem playFunc={() => console.log(1)} id={item.id} type={'albums'} />
						)
					}} />
				)
			}
		}, {
			name: 'Authors',
			title: 'Authors',
			component: () => {
				return (
					<UFlatList data={selector.artists}
					           ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
					           renderItem={({ item }) => {
						           console.log(item)
						           return (
							           <RenderItem playFunc={() => console.log(1)} id={item.id} type={'authors'} />
						           )
					           }} />
				)
			}
		}, {
			name: 'playlists',
			title: 'Playlists',
			component: () => {
				return (
					<UFlatList numColumns={2}
					           ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
					           data={selector.playlists} renderItem={({ item }) => {
						console.log(item)
						return (
							<RenderItem playFunc={() => console.log(1)} id={item.id} type={'playlists'} />
						)
					}} />
				)
			}
		}
	]
	return { tabs }
}