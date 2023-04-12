import { api } from '../api'
import { IdownloadTrackMp3 } from './types/IDownloadTrackMp3'
import { IGetTrackByID } from './types/IGetTrackById'
import { IGetTrackMp3ByName } from './types/IGetTrackMp3ByName'

export const songApi = api.injectEndpoints({
	endpoints: build => ({
		getTrackById: build.query<IGetTrackByID, number>({
			query: id => ({
				url: `/track/${id}`,
			})
		}),
		
		getTrackMp3ByName: build.query<IGetTrackMp3ByName, string>({
			query: name => ({
				url: `https://soundcloud-downloader4.p.rapidapi.com/soundcloud/search`,
				headers: {
					'X-RapidAPI-Key': process.env.RAPID_API,
					'X-RapidAPI-Host': 'soundcloud-downloader4.p.rapidapi.com'
				},
				params: {
					query: name
				}
			})
		}),
		downloadTrackMp3: build.query<IdownloadTrackMp3, string>({
			query: url => ({
				url: "https://soundcloud-downloader4.p.rapidapi.com/soundcloud/track",
				headers: {
					'X-RapidAPI-Key': process.env.RAPID_API,
					'X-RapidAPI-Host': 'soundcloud-downloader4.p.rapidapi.com'
				},
				params: {
					url
				}
			})
		})
	})
})
export const {

} = songApi
