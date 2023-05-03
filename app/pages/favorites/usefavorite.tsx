import React from 'react'
import { View } from 'react-native'
import { useTypedSelector } from '../../hook/useTypedSelector'
import UFlatList from '../../ui/flatList/uFlatList'
import Title from '../../ui/title/title'

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
							console.log(item)
							return (
								<View>
									<Title text={item.id} />
								</View>
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
								<View>
									<Title text={item.id} />
								</View>
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
						<Title text={'Artists'} />
					</View>
				)
			}
		}, {
			name: 'playlists',
			title: 'Playlists',
			component: () => {
				return (
					<View>
						<Title text={'Playlists'} />
					</View>
				)
			}
		}
	]
	return { tabs }
}