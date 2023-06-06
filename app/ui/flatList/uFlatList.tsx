import { ITranslateTypes } from '@/types/global'
import React from 'react'
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native'
import Title from '../title/title'

interface IFlatList<T>
	extends Omit<
		FlatListProps<T>,
		'renderToHardwareTextureAndroid' | 'bounces' | 'removeClippedSubviews'
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
				renderToHardwareTextureAndroid={true}
				maxToRenderPerBatch={4}
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
