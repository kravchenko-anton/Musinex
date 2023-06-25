import { ISkeleton } from '@/ui/skeleton/skeleton.types'
import { color } from '@/utils/color'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { View } from 'react-native'

const Skeleton: FC<ISkeleton> = ({
	style,
	height,
	transparent,
	width,
	borderRadius = 6
}) => {
	const { colorScheme } = useColorScheme()
	return (
		<View
			style={[
				{
					height,
					width,
					borderRadius,
					backgroundColor: transparent
						? 'transparent'
						: colorScheme === 'light'
						? color.charcoal
						: color.twilight
				},
				style
			]}
		/>
	)
}

export default Skeleton
