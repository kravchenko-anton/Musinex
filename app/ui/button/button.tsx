import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import {
	BackgroundColorSettings,
	gapSettings,
	IconColorSettings,
	IconSizeSettings,
	sizeSettings,
	TextSizeSettings
} from '@/ui/button/button.settings'
import { IButtonTypes } from '@/ui/button/button.types'
import UIcon from '@/ui/icon/default-icon/icon'
import { color } from '@/utils/color'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
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
	const { t } = useTranslation()
	const { pressFunctions, animatedStyle } = usePressAnimation()
			return (
		<AnimatedPressable {...pressFunctions}
		 style={[{
				backgroundColor: variant === 'primary' ? color.primary : BackgroundColorSettings[colorScheme],
				borderRadius: borderRadius,
				padding: sizeSettings[size],
				width: props.width ? props.width : '100%' },
			style,
			animatedStyle]}
		 {...props}>
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
							props.textSize ? props.textSize : TextSizeSettings[size]
						}
						style={{
							textTransform: props.uppercase ? 'uppercase' : 'none',
							letterSpacing: props.uppercase ? 1.4 : 1
						}}
					>
						{props.text && translate ? t(props.text) : props.text}
					</Title>
					{props.icon && (
						<UIcon
							size={
								iconSize ? iconSize : IconSizeSettings[size]
							}
							color={IconColorSettings[variant]}
							name={props.icon}
						/>
					)}
				</View>
		</AnimatedPressable>
	)
}

export default Button
