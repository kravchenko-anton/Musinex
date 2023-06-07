import UIcon from '@/ui/icon/defaultIcon/Icon'
import { getHexCode } from '@/utils/getColor'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, View, ViewStyle } from 'react-native'
import Title from '../title/title'
import { IButton } from './types/Ibutton'

const Button: FC<PropsWithChildren<IButton>> = ({
	translate = false,
	size = 'small',
	variant = 'light',
	borderRadius = 10,
	iconSize = 20,
	center = false,
	textSize,
	...props
}) => {
	return (
		<Pressable
			onPress={props.onPress}
			style={[
				{
					backgroundColor:
						variant === 'primary'
							? getHexCode('primary')
							: getHexCode('lightBlack'),
					borderRadius: borderRadius,
					padding: size === 'small' ? 5 : size === 'medium' ? 8 : 12,
					width: props.width || '100%'
				},
				props.style as ViewStyle
			]}
			{...(!props.style && props)}
		>
			{!!(props.children && !(props.icon && props.text)) ? (
				props.children
			) : (
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
						color={
							variant === 'primary' ? getHexCode('white') : getHexCode('white')
						}
						translate={ translate ? translate : false}
						fontFamily={'Montserrat_700Bold'}
						size={
							textSize
								? textSize
								: size === 'small'
								? 15
								: size === 'medium'
								? 18
								: 20
						}
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
			)}
		</Pressable>
	)
}

export default Button
