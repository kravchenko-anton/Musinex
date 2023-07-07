import { UViewProps } from '@/types/component.types'
import { ITranslateTypes, WrapperProps } from '@/types/global'

export type TabsProps = {
	translate?: boolean
	data: {
		name: string
		title: ITranslateTypes
		component: () => JSX.Element
	}[]
} & Pick<WrapperProps<UViewProps['style']>, 'wrapperStyle'>
