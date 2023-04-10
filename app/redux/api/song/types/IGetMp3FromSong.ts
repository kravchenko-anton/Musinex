export interface IGetMp3Data {
	status:          boolean;
	soundcloudTrack: SoundcloudTrack;
	spotifyTrack:    SpotifyTrack;
}

export interface SoundcloudTrack {
	searchTerm: string;
	id:         number;
	permalink:  string;
	title:      string;
	user:       User;
	audio:      Audio[];
}

export interface Audio {
	quality:      string;
	url:          string;
	durationMs:   number;
	durationText: string;
	mimeType:     string;
	format:       string;
}

export interface User {
	id:        number;
	permalink: string;
	name:      string;
	verified:  boolean;
}

export interface SpotifyTrack {
	type:         string;
	id:           string;
	name:         string;
	shareUrl:     string;
	durationMs:   number;
	durationText: string;
	artists:      Album[];
	album:        Album;
}

export interface Album {
	type:     string;
	id:       string;
	name:     string;
	shareUrl: string;
	cover?:   Cover[];
}

export interface Cover {
	url:    string;
	width:  number;
	height: number;
}
