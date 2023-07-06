import { BlurButtonProps } from '@/ui/blurIcon/blurButton.types'
import Icon from '@/ui/icon/default-icon/icon'
import { Color } from '@/utils/color'
import { BlurView } from 'expo-blur'
import { FC, memo, PropsWithChildren } from 'react'

const BlurIcon: FC<PropsWithChildren<BlurButtonProps>> = ({
	children,
	color = Color.white,
	iconSize = 21,
	isSmall = false,
	icon = 'alert-outline',
	onPress,
	style,
	...props
}) => (
	<BlurView
		intensity={22}
		tint='light'
		testID='blur-icon'
		className='items-center justify-center overflow-hidden'
		style={[
			{
				width: isSmall ? 15 : 40,
				height: isSmall ? 15 : 40,
				borderRadius: isSmall ? 4 : 8
			},
			style
		]}
		{...props}>
		{children || !icon ? (
			children
		) : (
			<Icon
				onPress={onPress}
				name={icon}
				size={iconSize}
				color={color ? color : Color.white}
			/>
		)}
	</BlurView>
)

export default memo(BlurIcon)
