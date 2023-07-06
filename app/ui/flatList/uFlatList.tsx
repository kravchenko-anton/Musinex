import { UFlatListProps } from '@/ui/flatList/uFlatList.types'
import { memo } from 'react'
import { FlatList, View } from 'react-native'
import Title from '../title/title'

const UFlatList = <T,>({
	data,
	wrapClassNames,
	headerText,
	mt = 0,
	style,
	...props
}: UFlatListProps<T>) => {
	if (data.length && data.length === 0 && !props.ListEmptyComponent) return null
	return (
		<View className={wrapClassNames} style={{ marginTop: mt }}>
			{headerText && data.length !== 0 ? (
				<Title translate className='mb-3' size={20} weight={'semiBold'}>
					{headerText}
				</Title>
			) : null}
			<FlatList
				bounces={false}
				columnWrapperStyle={
					props.numColumns === 2
						? [
								{
									justifyContent: 'space-between',
									width: '100%'
								},
								props.columnWrapperStyle
						  ]
						: props.columnWrapperStyle
				}
				style={[
					{
						height: props.fixBottom ? '93%' : 'auto'
					},
					style
				]}
				contentContainerStyle={
					!props.horizontal
						? [
								{
									paddingBottom: 130
								},
								props.contentContainerStyle
						  ]
						: props.contentContainerStyle
				}
				renderToHardwareTextureAndroid={true}
				removeClippedSubviews={true}
				alwaysBounceHorizontal={false}
				maxToRenderPerBatch={props.maxToRenderPerBatch || 10}
				initialNumToRender={props.initialNumToRender || 10}
				alwaysBounceVertical={false}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				decelerationRate={'fast'}
				data={data}
				{...props}
			/>
		</View>
	)
}

export default memo(UFlatList)
