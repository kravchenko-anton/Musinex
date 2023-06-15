import { IUser } from '@/services/types/IUserServices'

export interface IAuthFields extends Pick<IUser, 'email'> {
	password: string
}

export interface IAuthState extends Pick<IUser, 'email' | "id">{}

export enum EnumSecureStore {
	ACCESS_TOKEN = 'access_token',
	REFRESH_TOKEN = 'refresh_token'
}

export interface ITokens {
	access_token: string
	refresh_token: string
}

export interface IAuthResponse extends ITokens {
	user: Pick<IUser, 'id' | 'email'>
}
