import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import { useColorTheme } from '@/hook/useColorTheme'
import {
	backgroundColorSettings,
	gapSettings, iconColorSettings,
	iconSizeSettings,
	sizeSettings,
	textSizeSettings
} from '@/ui/button/button.settings'
import { IButtonTypes } from '@/ui/button/button.types'
import { Color } from '@/utils/color'
import { FC } from 'react'
import { View } from 'react-native'
import Icon from '../icon/default-icon/icon'
import Title from '../title/title'
const Button: FC<IButtonTypes> = ({
	translate = false,
	size = 'small',
	variant = 'default',
	borderRadius = 10,
	iconSize = 20,
	center = false,
	style,
	...props
}) => {
	const {charcoalToTwilight} = useColorTheme()
	const { pressFunctions, animatedStyle } = usePressAnimation()
			return (
		<AnimatedPressable {...pressFunctions} testID={'button'} style={[{
				backgroundColor: variant === 'primary' ? Color.primary : charcoalToTwilight,
				borderRadius: borderRadius,
				padding: sizeSettings[size],
				width: props.width ? props.width : '100%' },
			style,
			animatedStyle]} {...props}>
				<View
					style={{
						justifyContent: props.icon ? 'space-between' : 'center',
						marginVertical: center ? 0 : 5,
						gap:gapSettings[size]
					}}
					className='flex-row items-center'
				>
					<Title
						color={Color.white}
						translate={translate}
						weight={'semiBold'}
						size={
							props.textSize ? props.textSize : textSizeSettings[size]
						}
						style={{
							textTransform: props.uppercase ? 'uppercase' : 'none',
							letterSpacing: props.uppercase ? 1.4 : 1
						}}
					>
						{props.text}
					</Title>
					{props.icon && (
						<Icon
							size={
								iconSize ? iconSize : iconSizeSettings[size]
							}
							color={iconColorSettings[variant]}
							name={props.icon}
						/>
					)}
				</View>
		</AnimatedPressable>
	)
}

export default Button
