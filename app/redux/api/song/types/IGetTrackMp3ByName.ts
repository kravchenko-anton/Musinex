export interface IGetTrackMp3ByName {
	result: Result[];
}

export interface Result {
	title:    string;
	url:      string;
	duration: number;
	user:     User;
}

export interface User {
	username:      string;
	permalink_url: string;
}
