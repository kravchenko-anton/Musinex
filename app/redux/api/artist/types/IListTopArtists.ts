export interface IListTopArtists {
	status:      boolean;
	type:        string;
	id:          string;
	title:       string;
	description: string;
	date:        Date;
	artists:     Artist[];
}

export interface Artist {
	type:      Type;
	id:        string;
	name:      string;
	shareUrl:  string;
	visuals:   Visuals;
	chartData: ChartData;
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

export enum Type {
	Artist = "artist",
}

export interface Visuals {
	avatar: Avatar[];
}

export interface Avatar {
	url:    string;
	width:  null;
	height: null;
}
