export interface ISearchPlayListContentById {
	status:   boolean;
	contents: Contents;
}

export interface Contents {
	totalCount: number;
	items:      Item[];
}

export interface Item {
	type:         ItemType;
	id:           string;
	name:         string;
	shareUrl:     string;
	addedAt:      Date;
	durationMs:   number;
	durationText: string;
	discNumber:   number;
	trackNumber:  number;
	album:        Album;
}

export interface Album {
	type:       AlbumType;
	id:         string;
	name:       string;
	shareUrl:   string;
	date:       Date;
	artists:    Artist[];
	cover:      Cover[];
	trackCount: number;
}

export interface Artist {
	type:     ArtistType;
	id:       string;
	name:     string;
	shareUrl: string;
}


export enum ArtistType {
	Artist = "artist",
}

export interface Cover {
	height: number;
	url:    string;
	width:  number;
}

export enum AlbumType {
	Album = "album",
}

export enum ItemType {
	Track = "track",
}
