import { ITranslateTypes } from '@/types/global'
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native'
import Title from '../title/title'

interface IFlatList<T>
	extends Pick<
		FlatListProps<T>, "horizontal" | "ListEmptyComponent" | "keyExtractor" | "style" | "data" | "className" | "extraData" | "inverted" | "initialNumToRender" | "maxToRenderPerBatch" | 'scrollEnabled' | 'numColumns' | 'contentContainerStyle' |'columnWrapperStyle'
	> {
	data: T[]
	renderItem: ListRenderItem<T>
	headerText?: ITranslateTypes
	wrapClassNames?: string
	headerNavigate?: () => void
	mt?: number
}

const UFlatList = <T,>({
	data,
	renderItem,
	headerNavigate,
	wrapClassNames,
	headerText,
	mt,
	...rest
}: IFlatList<T>) => {
	if (data.length && data.length === 0 && !rest.ListEmptyComponent) return null
	return (
		<View className={wrapClassNames} style={{ marginTop: mt }}>
			{headerText && data.length !== 0 ? (
				<Title
					translate
					className={'mb-3'}
					size={20}
					fontFamily={'Montserrat_600SemiBold'}
				>
					{headerText}
				</Title>
			) : null}
			<FlatList
				bounces={false}
				columnWrapperStyle={rest.numColumns === 2 ? [{
					justifyContent: 'space-between',
					width: '100%',
					}, rest.columnWrapperStyle] : rest.columnWrapperStyle}
				
				contentContainerStyle={!rest.horizontal ? [{
					paddingBottom: 130,
				}, rest.contentContainerStyle] : rest.contentContainerStyle}
				renderToHardwareTextureAndroid={true}
				removeClippedSubviews={true}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				decelerationRate={'fast'}
				horizontal={rest.horizontal}
				data={data}
				renderItem={renderItem}
				{...rest}
			/>
		</View>
	)
}

export default UFlatList
