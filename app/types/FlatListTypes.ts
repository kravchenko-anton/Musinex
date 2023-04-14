import { ViewProps } from 'react-native'

export interface IFlatListItem extends ViewProps {
	name: string
	image: {
		url: string
		width: number
		height: number
	}
	ImageClassNames?: string
	WrapClassNames?: string
}

export interface IFlatListSongItem extends IFlatListItem {
	artists: string
	songId: number
}


export interface IFlatListAlbumItem extends IFlatListItem {
	artists: string
	albumId: number
}

export interface IFlatListArtistItem extends IFlatListItem {
	authorId: number
}

export interface IFlatListPlayListItem extends IFlatListItem  {
	PlayListId: number
	artists: string
}
