import { FC, PropsWithChildren } from 'react'
import { ScrollView, ScrollViewProps } from 'react-native'

export interface IUScrollView
	extends Omit<
		ScrollViewProps,
		| 'showsVerticalScrollIndicator'
		| 'showsHorizontalScrollIndicator'
		| 'decelerationRate'
		| 'renderToHardwareTextureAndroid'
	> {
	paddingBottom?: number
}

const UScrollView: FC<PropsWithChildren<IUScrollView>> = ({
	children,
	paddingBottom = 100,
	...rest
}) => {
	return (
		<ScrollView
			contentContainerStyle={[
				{
					paddingBottom: paddingBottom
				},
				rest.contentContainerStyle
			]}
			renderToHardwareTextureAndroid={true}
			showsVerticalScrollIndicator={false}
			decelerationRate={'fast'}
			showsHorizontalScrollIndicator={false}
			{...rest}
		>
			{children}
		</ScrollView>
	)
}

export default UScrollView
