import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	Search: undefined
	Settings: undefined
	catalog: {
		headerImage: string
		headerText: string
		data: {
			title: string
			image: string
			artist: string
			playTime: number
			id: number
		}[]
	
	}
	favorites: undefined
	Song: undefined
	Author: undefined
	playList: undefined
	playLists: undefined
}

export interface iRoutes {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
