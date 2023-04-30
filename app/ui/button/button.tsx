import { Ionicons } from '@expo/vector-icons/'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, View, ViewStyle } from 'react-native'
import Title from '../title/title'
import { Ibutton } from './Ibutton'

const Button: FC<PropsWithChildren<Ibutton>> = ({
	children,
	icon,
	text,
	size = 'small',
	variant = 'light',
	width,
	borderRadius = 10,
	iconSize = 20,
	center = false,
	textSize,
	...rest
}) => {
	return (
		<Pressable
			style={[
				{
					backgroundColor: variant === 'primary' ? '#5b0eeb' : '#fff',
					borderRadius: borderRadius,
					width: width
						? width
						: size === 'small'
						? 95
						: size === 'medium'
						? 130
						: 165,
					padding: size === 'small' ? 10 : size === 'medium' ? 15 : 20
				},
				rest.style as ViewStyle
			]}
			{...(!rest.style && rest)}
		>
			{!!(children && !(icon && text)) ? (
				children
			) : (
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						display: 'flex',
						justifyContent: icon ? 'space-between' : 'center',
						marginVertical: center ? 0 : 5,
						gap: size === 'small' ? 10 : size === 'medium' ? 10 : 10
					}}
				>
					<Title
						text={text}
						color={variant === 'primary' ? '#fff' : '#000'}
						fontFamily={'Montserrat_700Bold'}
						size={
							textSize
								? textSize
								: size === 'small'
								? 15
								: size === 'medium'
								? 18
								: 25
						}
					/>
					{icon && (
						<Ionicons
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
									? '#000'
									: variant === 'primary'
									? '#fff'
									: '#000'
							}
							name={icon}
						/>
					)}
				</View>
			)}
		</Pressable>
	)
}

export default Button
