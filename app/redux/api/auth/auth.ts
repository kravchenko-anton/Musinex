import { IAuthFields } from '@/types/auth/authTypes'
import { getAuthUrl } from '@/utils/apiConfig'
import { api } from '../api'

export const authApi = api.injectEndpoints({
	endpoints: build => ({
			getToken: build.query({
				query: (refresh_token: string) => ({
					url: getAuthUrl('/access-token'),
					method: 'POST',
					body: {refresh_token}
				}),
			}),
			register: build.query<any, IAuthFields>({
					query: ({ email, password }) => ({
							url: getAuthUrl('/register'),
							method: "POST",
						body: {email, password}
					})
			}),
		login: build.query({
			query: ({email,password}) => ({
					url: getAuthUrl('/login'),
				method: "POST",
				body: {email, password}
			})
		})
	})
})
export const {  } = authApi
