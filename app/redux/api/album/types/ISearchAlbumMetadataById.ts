export interface ISearchAlbumMetadataById {
	status:     boolean;
	type:       string;
	id:         string;
	name:       string;
	shareUrl:   string;
	label:      string;
	date:       Date;
	copyright:  Copyright[];
	artists:    Artist[];
	cover:      Cover[];
	trackCount: number;
	discs:      Disc[];
}

export interface Artist {
	type:     string;
	id:       string;
	name:     string;
	shareUrl: string;
	visuals:  Visuals;
}

export interface Visuals {
	avatar: Cover[];
}

export interface Cover {
	url:    string;
	width:  number;
	height: number;
}

export interface Copyright {
	type: string;
	text: string;
}

export interface Disc {
	number:     number;
	trackCount: number;
}
