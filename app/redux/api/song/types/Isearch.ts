export interface ISearch {
	status:    boolean;
	albums:    Albums;
	artists:   Artists;
	episodes:  Episodes;
	genres:    Genres;
	playlists: Playlists;
	podcasts:  Podcasts;
	tracks:    Tracks;
	users:     Genres;
}

export interface Albums {
	totalCount: number;
	items:      AlbumsItem[];
}

export interface AlbumsItem {
	type:     string;
	id:       string;
	name:     string;
	shareUrl: string;
	date:     string;
	artists:  OwnerElement[];
	cover:    Cover[];
}

export interface OwnerElement {
	type:     string;
	id:       string;
	name:     string;
	shareUrl: string;
	image?:   Cover[];
	cover?:   Cover[];
	avatar?:  Cover[] | null;
}

export interface Cover {
	url:    string;
	width:  number | null;
	height: number | null;
}



export interface Artists {
	totalCount: number;
	items:      ArtistsItem[];
}

export interface ArtistsItem {
	type:     string;
	id:       string;
	name:     string;
	shareUrl: string;
	verified: boolean;
	visuals:  Visuals;
}

export interface Visuals {
	avatar: Cover[];
}

export interface Episodes {
	totalCount: number;
	items:      EpisodesItem[];
}

export interface EpisodesItem {
	type:         PurpleType;
	id:           string;
	name:         string;
	shareUrl:     string;
	date:         Date;
	description:  string;
	durationMs:   number;
	durationText: string;
	cover:        Cover[];
	podcast:      PodcastElement;
}

export interface PodcastElement {
	type:          PodcastType;
	id:            string;
	name:          string;
	shareUrl:      string;
	publisherName: string;
	cover:         Cover[];
}

export enum PodcastType {
	Show = "show",
}

export enum PurpleType {
	Episode = "episode",
}

export interface Genres {
	totalCount: number;
	items:      OwnerElement[];
}

export interface Playlists {
	totalCount: number;
	items:      PlaylistsItem[];
}

export interface PlaylistsItem {
	type:        FluffyType;
	id:          string;
	name:        string;
	shareUrl:    string;
	description: string;
	owner:       OwnerElement;
	images:      Array<Cover[]>;
}

export enum FluffyType {
	Playlist = "playlist",
}

export interface Podcasts {
	totalCount: number;
	items:      PodcastElement[];
}

export interface Tracks {
	totalCount: number;
	items:      TracksItem[];
}

export interface TracksItem {
	type:         TentacledType;
	id:           string;
	name:         string;
	shareUrl:     string;
	durationMs:   number;
	durationText: string;
	artists:      OwnerElement[];
	album:        OwnerElement;
}

export enum TentacledType {
	Track = "track",
}
