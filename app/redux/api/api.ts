import { getAccessToken } from '@/redux/auth/authHelper'
import { SERVER_URL } from '@/utils/apiConfig'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_URL,
		prepareHeaders: (headers, { getState }: any) => {
			const token = getState().auth.token ||  getAccessToken()
			if (token) {
				headers.set("authorization", `Bearer ${token}`)
			}
			return headers
		},
		
		
		
		
	}),
	endpoints: build => ({})
})
export const {} = api
