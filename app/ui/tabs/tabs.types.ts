import { ITranslateTypes } from '@/types/global'

export type TabsProps = {
	translate: boolean
	data: {
		name: string
		title: ITranslateTypes
		component: () => JSX.Element
	}[]
}
