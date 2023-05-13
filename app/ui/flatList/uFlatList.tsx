import UIcon from '@/ui/icon/defaultIcon/Icon'
import React from 'react'
import { FlatList, FlatListProps, ListRenderItem, Pressable, View } from 'react-native'
import Title from '../title/title'

interface IFlatList<T>
	extends Omit<FlatListProps<T>, 'renderToHardwareTextureAndroid' | 'bounces'> {
	data: T[]
	renderItem: ListRenderItem<T>
	header?: boolean
	headerText?: string
	wrapClassNames?: string
	headerNavigate?: () => void
}

const UFlatList = <T, >({
	                        data,
	                        renderItem,
	                        header,
	                        headerNavigate,
	                        wrapClassNames,
	                        headerText,
	                        ...rest
                        }: IFlatList<T>) => {
	if (data.length === 0 && !rest.ListEmptyComponent) return null
	return (
		<View className={wrapClassNames}>
			{header && headerText && data.length !== 0 ? (
					<View className='flex-row justify-between items-center mb-3'>
						<Title
							translate
							text={headerText}
							size={20}
							fontFamily={'Montserrat_500Medium'}
						/>
						{data.length > 5 ? (
							<Pressable
								onPress={headerNavigate}
								className='flex-row items-center'
							>
								<Title
									translate
									text={'See More'}
									size={20}
									fontFamily={'Montserrat_500Medium'}
									className='mr-1'
								/>
								<UIcon
									name='ios-arrow-forward'
									className='mt-[5px]'
									size={20}
								/>
							</Pressable>
						) : null}
					</View>
				) : // I not use FlashList because it has a bug with height and if you're using big image he gets 30 fps 🤦‍♂️
				null}
			<FlatList
				bounces={false}
				renderToHardwareTextureAndroid={true}
				maxToRenderPerBatch={4}
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
