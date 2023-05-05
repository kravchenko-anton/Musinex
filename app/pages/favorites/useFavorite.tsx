import React from 'react'
import { View } from 'react-native'
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
					<View>
						<UFlatList
							ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
							data={selector.songs} renderItem={({ item }) => {
							return (
								<RenderItem key={item.id} playFunc={() => console.log(1)} id={item.id} type={'songs'} />
							)
						}} />
					</View>
				)
			}
		}, {
			name: 'albums',
			title: 'Albums',
			component: () => {
				console.log(selector.albums.length)
				return (
					<View>
						<UFlatList
							ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
							data={selector.albums} renderItem={({ item }) => {
							console.log(item)
							return (
								<RenderItem key={item.id} playFunc={() => console.log(1)} id={item.id} type={'albums'} />
							)
						}} />
					</View>
				)
			}
		}, {
			name: 'Authors',
			title: 'Authors',
			component: () => {
				return (
					<View>
						<UFlatList data={selector.artists}
						           ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
						           renderItem={({ item }) => {
							           console.log(item)
							           return (
								           <RenderItem key={item.id} playFunc={() => console.log(1)} id={item.id} type={'authors'} />
							           )
						           }} />
					</View>
				)
			}
		}, {
			name: 'playlists',
			title: 'Playlists',
			component: () => {
				return (
					<View>
						<UFlatList
							ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
							data={selector.playlists} renderItem={({ item }) => {
							console.log(item)
							return (
								<RenderItem key={item.id} playFunc={() => console.log(1)} id={item.id} type={'playlists'} />
							)
						}} />
					</View>
				)
			}
		}
	]
	return { tabs }
}