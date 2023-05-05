import React from 'react'
import { View } from 'react-native'
import { useTypedSelector } from '../../hook/useTypedSelector'
import UFlatList from '../../ui/flatList/uFlatList'
import RenderItem from '../../ui/flatList/wrapper/renderItem'

export const useFavorite = () => {
	const selector = useTypedSelector(state => state.favorites)
	const tabs = [
		{
			name: 'songs',
			title: 'Songs',
			component: () => {
				return (
					<View>
						<UFlatList data={selector.songs} renderItem={({ item }) => {
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
				return (
					<View>
						<UFlatList data={selector.albums} renderItem={({ item }) => {
							console.log(item)
							return (
								<RenderItem key={item.id} playFunc={() => console.log(1)} id={item.id} type={'albums'} />
							)
						}} />
					</View>
				)
			}
		}, {
			name: 'artists',
			title: 'Artists',
			component: () => {
				return (
					<View>
						<UFlatList data={selector.artists} renderItem={({ item }) => {
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
						<UFlatList data={selector.playlists} renderItem={({ item }) => {
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