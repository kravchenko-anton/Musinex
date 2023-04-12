import { Ionicons } from '@expo/vector-icons/'
import React from 'react'
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native'
import Title from '../title/title'

export interface IFlatList<T> extends Omit<FlatListProps<T>, "renderToHardwareTextureAndroid" | "bounces"> {
	data: T[]
	header?: boolean
	renderItem: ListRenderItem<T>
	wrapClassNames?: string
	headerText: string
}

const UFlatList = <T,>({ data,
	                       renderItem,
	                       header,
	                       wrapClassNames, headerText,
	                       ...rest }: IFlatList<T>) => {
	return (
		<View className={wrapClassNames}>
			{header ? (
				<View className='flex-row justify-between items-center mb-3'>
					<Title text={headerText} fontFamily={'Silkscreen_700Bold'} />
					<View className='flex-row items-center'>
						<Title text={'See More'} fontFamily={'Silkscreen_700Bold'} classNames='mr-1 mb-1' />
						<Ionicons name='ios-arrow-forward' size={20} color='white' />
					</View>
				</View>
			) : null}
			<FlatList
				data={data}
				renderItem={renderItem}
				renderToHardwareTextureAndroid={true}
				bounces={false}
				{...rest}
			/>
		</View>
	)
}

export default UFlatList
