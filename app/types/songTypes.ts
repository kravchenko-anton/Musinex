export interface SongTypes {
	artists:ArtistTypesInSearch[]
	displayImageUri: string
	releaseDate: string
	trackName: string
	trackUri: string
}

export interface ArtistTypesInSearch {
	name: string
	spotifyUri: string
}
