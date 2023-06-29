import { UScrollViewProps } from '@/ui/scroll-view/uScrollView.types'
import { FC, PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'

const UScrollView: FC<PropsWithChildren<UScrollViewProps>> = ({
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
