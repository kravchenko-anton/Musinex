export interface IdownloadTrackMp3 {
	users: Users;
	music: Music;
}

export interface Music {
	thumbnail:      string;
	title:          string;
	descriptions:   string;
	genres:         string;
	url:            string;
	duration:       number;
	likes_count:    number;
	reposts_count:  number;
	playback_count: number;
	created_at:     Date;
	release_date:   null;
	license:        string;
	tag_list:       string;
	waveform_url:   string;
	download_count: number;
	download_url:   string;
}

export interface Users {
	full_name:       string;
	followers_count: number;
	id:              number;
	permalink_url:   string;
	username:        string;
}
