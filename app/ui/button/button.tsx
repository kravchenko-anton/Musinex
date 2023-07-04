import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import {
	backgroundColorSettings,
	gapSettings, iconColorSettings,
	iconSizeSettings,
	sizeSettings,
	textSizeSettings
} from '@/ui/button/button.settings'
import { IButtonTypes } from '@/ui/button/button.types'
import { color } from '@/utils/color'
import { useColorScheme } from 'nativewind'
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
	const { colorScheme } = useColorScheme()
	const { pressFunctions, animatedStyle } = usePressAnimation()
			return (
		<AnimatedPressable {...pressFunctions} testID={'button'} style={[{
				backgroundColor: variant === 'primary' ? color.primary : backgroundColorSettings[colorScheme],
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
						color={'white'}
						translate={translate}
						fontFamily={'Montserrat_600SemiBold'}
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
