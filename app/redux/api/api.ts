import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://spotify-scraper.p.rapidapi.com/v1',
		headers: {
			'X-RapidAPI-Key': 'a08cec9b1amsh117eefa08d68c14p189742jsnd51114c548ec',
			'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
		}
	}),
	endpoints: build => ({})
})
