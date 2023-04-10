import { ViewProps } from 'react-native'

export interface IFlatListItem extends ViewProps {
	name: string
	artists: string
	image: {
		url: string
		width: number
		height: number
	}
	songId: string
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
	albumId: string
	ImageClassNames?: string
	WrapClassNames?: string
}

export interface IFlatListArtistItem extends ViewProps {
	name: string
	authorId: string
	image: {
		url: string
		width: number
		height: number
	}
	ImageClassNames?: string
	WrapClassNames?: string
}
