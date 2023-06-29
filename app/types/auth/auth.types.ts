import { UserType } from '@/services/types/user.services.types'

export interface AuthFieldsType extends Pick<UserType, 'email'> {
	password: string
}

export type IAuthState = Pick<UserType, 'email' | 'id'>

export enum EnumSecureStore {
	ACCESS_TOKEN = 'access_token',
	REFRESH_TOKEN = 'refresh_token'
}

export interface TokensType {
	access_token: string
	refresh_token: string
}

export interface AuthResponseType extends TokensType {
	user: Pick<UserType, 'id' | 'email'>
}
