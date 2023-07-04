import { useColorTheme } from '@/hook/useColorTheme'
import { SkeletonProps } from '@/ui/skeleton/skeleton.types'
import { FC } from 'react'
import { View } from 'react-native'

const Skeleton: FC<SkeletonProps> = ({
	style,
	height,
	transparent,
	width,
	borderRadius = 6
}) => {
	const { colorScheme,charcoalToTwilight } = useColorTheme()
	return (
		<View
			style={[
				{
					height,
					width,
					borderRadius,
					backgroundColor: transparent
						? 'transparent'
						: charcoalToTwilight
				},
				style
			]}
		/>
	)
}

export default Skeleton
