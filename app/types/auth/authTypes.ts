	export interface IUser {
		id: number
		email: string
		password: string
		createdAt: string
		updatedAt: string
		name: string
	}


export interface IAuthFields extends Pick<IUser, 'email' | 'password'> {}

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


