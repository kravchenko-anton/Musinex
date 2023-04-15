import { Ionicons } from '@expo/vector-icons/'
import React from 'react'
import { FlatList, FlatListProps, ListRenderItem, Pressable, View } from 'react-native'
import Title from '../title/title'

export interface IFlatList<T> extends Omit<FlatListProps<T>, "renderToHardwareTextureAndroid" | "bounces"> {
	data: T[]
	renderItem: ListRenderItem<T>
	header?: boolean
	headerText?: string
	wrapClassNames?: string
	headerNavigate?: () => void
}

const UFlatList = <T,>({ data, renderItem, header, headerNavigate, wrapClassNames, headerText, ...rest }: IFlatList<T>) => {
	return (
		<View className={wrapClassNames}>
			{header && headerText ? (
				<View className='flex-row justify-between items-center mb-3'>
					<Title text={headerText} size={25} fontFamily={'Montserrat_500Medium'} />
					{data.length > 5 ?
					<Pressable onPress={headerNavigate} className='flex-row items-center'>
						<Title text={'See More'} size={25} fontFamily={'Montserrat_500Medium'} classNames='mr-1 mb-1' />
						<Ionicons name='ios-arrow-forward' size={20} color='white' />
					</Pressable>
					: null}
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
