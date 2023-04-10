import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	Search: undefined
	Settings: undefined
	catalog: undefined
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
