import { ITranslateTypes } from '@/types/global'
import { FlatListProps, ListRenderItem } from 'react-native'

export interface UFlatListProps<T>
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
	fixBottom?: boolean
	mt?: number
}
