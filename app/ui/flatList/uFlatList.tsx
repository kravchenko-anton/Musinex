import React from 'react'
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native'
import Title from '../title/title'

interface IFlatList<T>
	extends Omit<FlatListProps<T>, 'renderToHardwareTextureAndroid' | 'bounces' | 'removeClippedSubviews'> {
	data: T[]
	renderItem: ListRenderItem<T>
	headerText?: string
	wrapClassNames?: string
	headerNavigate?: () => void
}

const UFlatList
	=
	<T, >({
	                        data,
	                        renderItem,
	                        headerNavigate,
	                        wrapClassNames,
	                        headerText,
	                        ...rest
                        }: IFlatList<T>) => {
	if (data.length && data.length === 0 && !rest.ListEmptyComponent) return null
	return (
		<View className={wrapClassNames}>
			{headerText && data.length !== 0 ? (
						<Title
							translate
					
							className={'mb-3'}
							size={24}
							fontFamily={'Montserrat_700Bold'}
						>{headerText}</Title>
				) :
				null}
			<FlatList
				bounces={false}
				renderToHardwareTextureAndroid={true}
				maxToRenderPerBatch={4}
				removeClippedSubviews={true}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				decelerationRate={'fast'}
				data={data}
				renderItem={renderItem}
				{...rest}
			/>
		</View>
	)
}

export default UFlatList
