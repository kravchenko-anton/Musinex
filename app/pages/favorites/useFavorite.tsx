import { useTypedSelector } from '@/hook/useTypedSelector'
import React from 'react'
import { useDispatch } from 'react-redux'
import FlatList404 from '../../ui/flatList/flatList404'
import RenderItem from '../../ui/flatList/render/renderItem'
import UFlatList from '../../ui/flatList/uFlatList'

export const useFavorite = () => {
	const selector = useTypedSelector(state => state.favorites)
	const dispatch = useDispatch()
	const tabs = [
		{
			name: 'songs',
			title: 'Songs',
			component: () => {
				return (
					<UFlatList
						ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
						data={selector.songs} style={{ height: '85%' }}
						contentContainerStyle={{ paddingBottom: 100 }}
						renderItem={({ item, index }) => {
							return (
								<RenderItem
									playFunc={() => {
										console.log('play')
									}}
									id={item.id}
									type={'songs'}
								/>
							)
						}}
					/>
				)
			}
		},
		{
			name: 'albums',
			title: 'Albums',
			component: () => {
				return (
					<UFlatList
						contentContainerStyle={{ paddingBottom: 100 }}
						numColumns={2}
						style={{ height: '85%' }}
						data={selector.albums}
						renderItem={({ item }) => {
							return (
								<RenderItem
									id={item.id}
									type={'albums'}
								/>
							)
						}}
					/>
				)
			}
		},
		{
			name: 'Artists',
			title: 'Artists',
			component: () => {
				return (
					<UFlatList
						data={selector.artists}
						style={{ height: '85%' }}
						contentContainerStyle={{ paddingBottom: 100 }}
						ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
						renderItem={({ item }) => {
							console.log(item)
							return (
								<RenderItem
									id={item.id}
									type={'artists'}
								/>
							)
						}}
					/>
				)
			}
		},
		{
			name: 'playlists',
			title: 'Playlists',
			component: () => {
				return (
					<UFlatList
						numColumns={2}
						style={{ height: '85%' }}
						contentContainerStyle={{ paddingBottom: 100 }}
						ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
						data={selector.playlists}
						renderItem={({ item }) => {
							console.log(item)
							return (
								<RenderItem
									id={item.id}
									type={'playlists'}
								/>
							)
						}}
					/>
				)
			}
		}
	]
	return { tabs }
}
