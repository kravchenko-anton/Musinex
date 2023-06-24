import { Style } from '@/types/global'
import { color } from '@/utils/getColor'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { View } from 'react-native'

interface ISkeleton {
	width: number
	height: number
	borderRadius?: number
	transparent?: boolean
	style: Style
}
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
