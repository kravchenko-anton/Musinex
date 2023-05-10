import { getHexCode } from '@/utils/getColor'
import { Ionicons } from '@expo/vector-icons/'
import { BlurView } from 'expo-blur'
import { useColorScheme } from 'nativewind'
import { FC, PropsWithChildren } from 'react'
import { Pressable } from 'react-native'
import { IblurButton } from './types/IblurButton'

const BlurIcon: FC<PropsWithChildren<IblurButton>> = ({
	                                                      children,
	                                                      color,
	                                                      iconSize = 21,
	                                                      isSmall = false,
	                                                      icon,
	                                                      ...rest
                                                      }) => {
	const { colorScheme } = useColorScheme()
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
					<Ionicons
						name={icon}
						size={iconSize}
						color={color ? color : colorScheme === 'light' ? getHexCode('dark') : getHexCode('white')}
					/>
				)}
			</BlurView>
		</Pressable>
	)
}

export default BlurIcon
