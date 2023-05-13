import { IIconName } from '@/types/IconTypes'
import { getHexCode } from '@/utils/getColor'
import { Icon } from '@rneui/themed'
import { useColorScheme } from 'nativewind'
import React, { FC, memo } from 'react'
import { Pressable, PressableProps } from 'react-native'

interface IconProps extends PressableProps {
	name: IIconName
	color?: string
	size?: number
	type?: 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo' | 'antdesign'
	backgroundColor?: string
	borderRadius?: number
	padding?: number
}

const UIcon: FC<IconProps> =
	({
		 name,
		 color,
		 size = 24,
		 type = 'ionicon',
		 backgroundColor = 'transparent',
		 borderRadius = 10,
		 padding = 10,
		 ...rest
	 }) => {
		const { colorScheme } = useColorScheme()
		return (
			<Pressable
				pointerEvents={'auto'}
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					padding: padding,
					backgroundColor: backgroundColor,
					borderRadius: borderRadius
				}}
				{...rest}
			>
				<Icon
					name={name}
					type={type}
					color={color ? color : colorScheme === 'light' ? getHexCode('dark') : getHexCode('white')}
					size={size}
				/>
			</Pressable>
		)
	}

export default memo(UIcon)
