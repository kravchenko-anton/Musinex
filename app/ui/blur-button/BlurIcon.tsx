import UIcon from '@/ui/icon/defaultIcon/Icon'
import { getHexCode } from '@/utils/getColor'
import { BlurView } from 'expo-blur'
import { useColorScheme } from 'nativewind'
import { FC, PropsWithChildren } from 'react'
import { IblurButton } from './types/IblurButton'

const BlurIcon: FC<PropsWithChildren<IblurButton>> = ({
	children,
	color,
	iconSize = 21,
	isSmall = false,
	icon,
	onPress,
	...props
}) => {
	const { colorScheme } = useColorScheme()
	return (
		<BlurView
			intensity={22}
			tint='light'
			className={'items-center justify-center overflow-hidden'}
			style={{
				width: isSmall ? 15 : 40,
				height: isSmall ? 15 : 40,
				borderRadius: isSmall ? 4 : 8
			}}
			{...props}
		>
			{children || !icon ? (
				children
			) : (
				<UIcon
					onPress={onPress}
					name={icon}
					size={iconSize}
					color={
						color
							? color
							: colorScheme === 'light'
							? getHexCode('dark')
							: getHexCode('white')
					}
				/>
			)}
		</BlurView>
	)
}

export default BlurIcon
