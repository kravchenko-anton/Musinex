import React from 'react'
import { View } from 'react-native'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import { useTypedSelector } from '../../hook/useTypedSelector'
import UFlatList from '../../ui/flatList/uFlatList'
import AlbumWrapper from '../../ui/flatList/wrapper/album'
import SongWrapper from '../../ui/flatList/wrapper/song'
import Header from '../../ui/header/header'
import Icon from '../../ui/icon/defaultIcon/Icon'
import Layout from '../../ui/layout/layout'
import Tabs from '../../ui/tabs/tabs'
import Title from '../../ui/title/title'

const Favorites = () => {
	const { navigate } = useTypedNavigation()
	const selector = useTypedSelector(state => state.favorites)
	const tabs = [
		{
			name: 'songs',
			title: 'Songs',
			component: () => {
				return (
					<View>
						<UFlatList data={selector.songs} renderItem={({ item }) => {
							console.log(item.id)
							return (
								<SongWrapper key={item.id} id={item.id} playFunc={() => console.log(1)} likeFunc={() => console.log(1)} />
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
							console.log(item.id)
							return (
								<AlbumWrapper key={item.id} id={item.id} />
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
	return (
		<Layout>
			<Header logoSize={30}>
				<Icon
					name={'settings'}
					size={24}
					onPress={() => navigate('Settings')}
				/>
			</Header>
			<Tabs data={tabs} />
		</Layout>
	)
}

export default Favorites
