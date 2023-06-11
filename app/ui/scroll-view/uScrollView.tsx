import { UScrollViewProps } from '@/types/global'
import { FC, PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'

export interface IUScrollView
	extends Omit<
		UScrollViewProps,
		| 'renderToHardwareTextureAndroid'
		| 'showsHorizontalScrollIndicator'
		| 'showsVerticalScrollIndicator'
		| 'decelerationRate'
	> {
	paddingBottom?: number
}

const UScrollView: FC<PropsWithChildren<IUScrollView>> = ({
	children,
	paddingBottom = 100,
	...props
}) => {
	return (
		<ScrollView
			contentContainerStyle={[
				{
					paddingBottom: paddingBottom
				},
				props.contentContainerStyle
			]}
			renderToHardwareTextureAndroid={true}
			showsVerticalScrollIndicator={false}
			decelerationRate={'fast'}
			showsHorizontalScrollIndicator={false}
			{...props}
		>
			{children}
		</ScrollView>
	)
}

export default UScrollView
