import { IHeartProps } from '@/types/catalogTypes'
import { UPressableProps } from '@/types/global'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import { FC, memo } from 'react'
import { useHeart } from './useHeart'

interface IHeart extends UPressableProps, IHeartProps {
	size?: number
}

const Heart: FC<IHeart> = ({ size = 28, type, id, style, ...props }) => {
	const heart = useHeart({ id, type })
	return (
		<UIcon
			name={heart ? 'md-heart-sharp' : 'md-heart-sharp'}
			size={size}
			{...props}
		/>
	)
}

export default memo(Heart)
