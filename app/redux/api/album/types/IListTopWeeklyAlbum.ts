export interface IListTopWeeklyAlbum {
	status:      boolean;
	type:        string;
	id:          string;
	title:       string;
	description: string;
	date:        Date;
	albums:      Album[];
}

export interface Album {
	type:      AlbumType;
	id:        string;
	name:      string;
	shareUrl:  string;
	label:     string;
	date:      string;
	artists:   Artist[];
	cover:     Cover[];
	chartData: ChartData;
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

export interface Cover {
	url:    string;
	width:  null;
	height: null;
}

export enum AlbumType {
	Album = "album",
}
