export interface ISearchAlbumTrackById {
	status: boolean;
	tracks: Tracks;
}

export interface Tracks {
	totalCount: number;
	items:      Item[];
}

export interface Item {
	type:         ItemType;
	id:           string;
	name:         string;
	shareUrl:     string;
	durationMs:   number;
	durationText: string;
	discNumber:   number;
	trackNumber:  number;
	playCount:    number;
	artists:      Artist[];
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

export enum ItemType {
	Track = "track",
}
