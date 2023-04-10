import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://spotify-scraper.p.rapidapi.com/v1',
		headers: {
			'X-RapidAPI-Key': '6a4d44d97bmsh9657e022a8567abp16623djsndc7ae30038a7',
			'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
		}
	}),
	endpoints: build => ({})
})
