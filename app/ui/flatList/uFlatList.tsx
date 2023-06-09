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
	fixBottom?: boolean
	mt?: number
}

const UFlatList = <T,>({
	data,
	headerNavigate,
	wrapClassNames,
	headerText,
	mt = 0,
	style,
	...props
}: IFlatList<T>) => {
	if (data.length && data.length === 0 && !props.ListEmptyComponent) return null
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
				columnWrapperStyle={props.numColumns === 2 ? [{
					justifyContent: 'space-between',
					width: '100%',
					}, props.columnWrapperStyle] : props.columnWrapperStyle}
					style={[{
						height: props.fixBottom ? '93%' : 'auto',
					},
						style]}
				contentContainerStyle={!props.horizontal ? [{
					paddingBottom: 130,
				}, props.contentContainerStyle] : props.contentContainerStyle}
				renderToHardwareTextureAndroid={true}
				removeClippedSubviews={true}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				decelerationRate={'fast'}
				data={data}
				{...props}
			/>
		</View>
	)
}

export default UFlatList
