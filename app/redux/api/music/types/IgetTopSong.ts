export interface IgetTopSong {
	status:      boolean;
	type:        string;
	id:          string;
	title:       string;
	description: string;
	date:        Date;
	tracks:      Track[];
}

export interface Track {
	type:      TrackType;
	id:        string;
	name:      string;
	shareUrl:  string;
	artists:   Artist[];
	album:     Album;
	chartData: ChartData;
}

export interface Album {
	type:  AlbumType;
	label: string;
	date:  string;
	cover: Cover[];
}

export interface Cover {
	url:    string;
	width:  null;
	height: null;
}

export enum AlbumType {
	Album = "album",
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

export interface ChartData {
	currentRank:                   number;
	previousRank:                  number;
	peakRank:                      number;
	peakDate:                      Date;
	entryRank:                     number;
	entryDate:                     Date;
	appearancesOnChart:            number;
	consecutiveAppearancesOnChart: number;
}

export enum TrackType {
	Track = "track",
}
