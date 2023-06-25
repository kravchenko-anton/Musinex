import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press-animation'
import UIcon from '@/ui/icon/default-icon/icon'
import { color } from '@/utils/color'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { View } from 'react-native'
import Title from '../title/title'
import { ButtonTypes } from './button.types'

const Button: FC<ButtonTypes> = ({
	translate = false,
	size = 'small',
	variant = 'light',
	borderRadius = 10,
	iconSize = 20,
	center = false,
	style,
	...props
}) => {
	const { colorScheme } = useColorScheme()
	const { pressFunctions, animatedStyle } = usePressAnimation()
	return (
		<AnimatedPressable {...pressFunctions}
		 style={[{
				backgroundColor:
					variant === 'primary'
						? color.primary
						: colorScheme === 'light'
							? color.charcoal
							: color.twilight,
				borderRadius: borderRadius,
				padding: size === 'small' ? 5 : size === 'medium' ? 8 : 12,
				width: props.width ? props.width : '100%' },
			style,
			animatedStyle]}
		 {...props}>
				<View
					style={{
						justifyContent: props.icon ? 'space-between' : 'center',
						marginVertical: center ? 0 : 5,
						gap: size === 'small' ? 10 : size === 'medium' ? 10 : 10
					}}
					className='flex-row items-center'
				>
					<Title
						color={'white'}
						translate={translate ? translate : false}
						fontFamily={'Montserrat_600SemiBold'}
						size={
							props.textSize
								? props.textSize
								: size === 'small'
								? 15
								: size === 'medium'
								? 18
								: 20
						}
						style={{
							textTransform: props.uppercase ? 'uppercase' : 'none',
							letterSpacing: props.uppercase ? 1.4 : 1
						}}
					>
						{props.text}
					</Title>
					{props.icon && (
						<UIcon
							size={
								iconSize
									? iconSize
									: size === 'small'
									? 15
									: size === 'medium'
									? 18
									: 30
							}
							color={
								variant === 'light'
									? 'dark'
									: variant === 'primary'
									? 'white'
									: 'dark'
							}
							name={props.icon}
						/>
					)}
				</View>
		</AnimatedPressable>
	)
}

export default Button
