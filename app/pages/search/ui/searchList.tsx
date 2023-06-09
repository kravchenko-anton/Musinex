import { ISearchResult } from '@/services/types/ISearchServices'
import CatalogArtistItem from '@/ui/flatList/catalogItem/catalogArtistItem'
import FlatList404 from '@/ui/flatList/flatList404'
import MusicCart from '@/ui/flatList/flatlistItem/musicCart'
import UFlatList from '@/ui/flatList/uFlatList'
import Tabs from '@/ui/tabs/tabs'
import { FC } from 'react'

const SearchList:FC<{searchResult:ISearchResult}> = ({searchResult}) => {
	return 	<Tabs data={[{
		title: 'Songs',
		name: 'songs',
			component: () => <UFlatList data={searchResult.songs} ListEmptyComponent={() => <FlatList404 width={150} height={150}/>}
    renderItem={
				({item}) => <MusicCart
					image={{
						url:item.coverMedium,
						width: 180,
						height: 180,
						border: 10
					}}
					wrapClassNames={'mb-4'}
					name={item.title}
				/>
			} numColumns={2}  className='mx-2' />
	},
		{
			title: 'Albums',
			name: 'albums',
			component: () => <UFlatList data={searchResult.albums} ListEmptyComponent={() => <FlatList404 width={150} height={150}/>}
				           renderItem={
					           ({item}) => <MusicCart
						           wrapperWidth={'50%'}
						           image={{
							           url:item.coverMedium,
							           width:  190,
							           height: 190
						           }}
						           wrapClassNames={'mb-4'}
						           name={item.title}
					           />
				           } numColumns={2}  />
		},
		{
			title: 'Artists',
			name: 'artists',
			component: () => <UFlatList data={searchResult.artists} ListEmptyComponent={() => <FlatList404 width={150} height={150}/>}
			                               renderItem={
				                               ({item}) => <CatalogArtistItem
				                                name={item.name}
				                                id={item.id}
				                                image={item.pictureMedium}
				                               />
			                               } numColumns={2}  />
		},
		{
			title: 'Playlists',
			name: 'playlists',
			component: () => <UFlatList data={searchResult.playlists} ListEmptyComponent={() => <FlatList404 width={150} height={150}/>}
			                               renderItem={
				                               ({item}) => <MusicCart
					                               wrapperWidth={'50%'}
					                               image={{
						                               url:item.coverMedium,
						                               width:  190,
						                               height: 190
					                               }}
					                               wrapClassNames={'mb-4'}
					                               name={item.title}
				                               />
			                               } numColumns={2}  />
		}
	]}/>
}

export default SearchList