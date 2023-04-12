import { ViewProps } from 'react-native'

export interface IFlatListItem extends ViewProps {
	name: string
	artists: string
	image: {
		url: string
		width: number
		height: number
	}
	songId: number
	ImageClassNames?: string
	WrapClassNames?: string
}

export interface IFlatListAlbumItem extends ViewProps {
	name: string
	artists: string
	image: {
		url: string
		width: number
		height: number
	}
	albumId: number
	ImageClassNames?: string
	WrapClassNames?: string
}

export interface IFlatListArtistItem extends ViewProps {
	name: string
	authorId: number
	image: {
		url: string
		width: number
		height: number
	}
	ImageClassNames?: string
	WrapClassNames?: string
}

export interface IFlatListPlayListItem extends ViewProps {
	name: string
	PlayListId: number
	artists: string
	image: {
		url: string
		width: number
		height: number
	}
	ImageClassNames?: string
	WrapClassNames?: string
}
