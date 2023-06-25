import { ITranslateTypes } from '@/types/global'
import { FlatListProps, ListRenderItem } from 'react-native'

export interface IUFlatList<T>
	extends Pick<
		FlatListProps<T>,
		| 'horizontal'
		| 'ListEmptyComponent'
		| 'keyExtractor'
		| 'style'
		| 'data'
		| 'className'
		| 'extraData'
		| 'inverted'
		| 'initialNumToRender'
		| 'maxToRenderPerBatch'
		| 'scrollEnabled'
		| 'numColumns'
		| 'contentContainerStyle'
		| 'columnWrapperStyle'
	> {
	data: T[]
	renderItem: ListRenderItem<T>
	headerText?: ITranslateTypes
	wrapClassNames?: string
	headerNavigate?: () => void
	fixBottom?: boolean
	mt?: number
}