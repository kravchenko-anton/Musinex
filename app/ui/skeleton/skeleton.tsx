import { UViewProps } from '@/types/global'
import { getHexCode } from '@/utils/getColor'
import { FC } from 'react'
import { View } from 'react-native'

interface ISkeleton {
	width: number
	height: number
	borderRadius?: number
	style: UViewProps['style']
}
const Skeleton: FC<ISkeleton> = ({
	style,
	height,
	width,
	borderRadius = 6
}) => {
	return (
		<View
			style={[
				{
					height,
					width,
					borderRadius,
					backgroundColor: getHexCode('lightBlack')
				},
				style
			]}
		/>
	)
}

export default Skeleton
