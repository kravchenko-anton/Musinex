import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/usePressAnimation'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import { getHexCode } from '@/utils/getColor'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { View } from 'react-native'
import Title from '../title/title'
import { IButton } from './types/Ibutton'

const Button: FC<IButton> = ({
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
						? getHexCode('primary')
						: colorScheme === 'light'
							? getHexCode('primaryGray')
							: getHexCode('lightBlack'),
				borderRadius: borderRadius,
				padding: size === 'small' ? 5 : size === 'medium' ? 8 : 12,
				width: props.width ? props.width : '100%' },
			style,
			animatedStyle]}
		 {...props}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						display: 'flex',
						justifyContent: props.icon ? 'space-between' : 'center',
						marginVertical: center ? 0 : 5,
						gap: size === 'small' ? 10 : size === 'medium' ? 10 : 10
					}}
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
									? getHexCode('dark')
									: variant === 'primary'
									? getHexCode('white')
									: getHexCode('dark')
							}
							name={props.icon}
						/>
					)}
				</View>
		</AnimatedPressable>
	)
}

export default Button
