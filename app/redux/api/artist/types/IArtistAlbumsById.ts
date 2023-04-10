export interface IArtistAlbumsById {
	status: boolean;
	albums: Albums;
}

export interface Albums {
	totalCount: number;
	items:      Item[];
}

export interface Item {
	type:       Type;
	id:         string;
	name:       string;
	shareUrl:   string;
	date:       Date;
	cover:      Cover[];
	trackCount: number;
}

export interface Cover {
	url:    string;
	width:  number;
	height: number;
}

export enum Type {
	Album = "album",
}
