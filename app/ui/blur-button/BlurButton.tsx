import { Ionicons } from '@expo/vector-icons/'
import { BlurView } from 'expo-blur'
import { FC, PropsWithChildren } from 'react'
import { Pressable } from 'react-native'

import { IBlurButton } from './blur-button.interface'

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
	children,
	color = '#fff',
	iconSize = 21,
	isSmall = false,
	icon,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={'items-center justify-center overflow-hidden'}
				style={{
					width: isSmall ? 15 : 40,
					height: isSmall ? 15 : 40,
					borderRadius: isSmall ? 4 : 100
				}}
			>
				{children ? (
					children
				) : (
					<Ionicons name={icon} size={iconSize} color={color} />
				)}
			</BlurView>
		</Pressable>
	)
}

export default BlurButton
