import { IUser } from '@/services/types/user.services.types'

export interface IAuthFields extends Pick<IUser, 'email'> {
	password: string
}

export enum EnumSecureStore {
	ACCESS_TOKEN = 'access_token',
	REFRESH_TOKEN = 'refresh_token'
}



export interface ITokens {
	access_token: string
	refresh_token: string
}
	
	export interface IAuthResponse extends ITokens {
		user: IUser
	}


