import { useColorTheme } from '@/hook/useColorTheme'
import { SkeletonProps } from '@/ui/skeleton/skeleton.types'
import { FC, memo } from 'react'
import { View } from 'react-native'

const Skeleton: FC<SkeletonProps> = ({
	style,
	height = 100,
	transparent = false,
	width = 100,
	borderRadius = 6
}) => {
	const { charcoalToTwilight } = useColorTheme()
	return (
		<View
			testID='skeleton'
			style={[
				{
					height,
					width,
					borderRadius,
					backgroundColor: transparent ? 'transparent' : charcoalToTwilight
				},
				style
			]}
		/>
	)
}

export default memo(Skeleton)
