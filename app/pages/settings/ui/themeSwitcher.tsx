import { AnimatedView } from '@/animation/global'
import { useAction } from '@/hook/useAction'
import { useThemeSwitcherAnimation } from '@/pages/settings/ui/themeSwitcher.animation'
import { ThemeSwitcherProps } from '@/pages/settings/ui/themeSwitcher.types'
import { Style } from '@/types/global'
import { Color } from '@/utils/color'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { withSpring } from 'react-native-reanimated'

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
	size = 30,
	style,
	...props
}) => {
	const { darkStyle, lightStyle, scheme } = useThemeSwitcherAnimation()
	const { toggleColorScheme, colorScheme } = useColorScheme()
	const { setTheme } = useAction()
	return (
		<Pressable
			onPress={async () => {
				await toggleColorScheme()
				await setTheme(colorScheme === 'light' ? 'dark' : 'light')
				scheme.value = withSpring(scheme.value === 1 ? 0 : 1)
			}}
			style={[{ height: size, width: size }, style as Style]}
			{...props}>
			<AnimatedView
				style={[StyleSheet.absoluteFill, darkStyle, style as Style]}>
				<Ionicons name='ios-moon' size={size} color={Color.charcoal} />
			</AnimatedView>

			<AnimatedView style={lightStyle}>
				<Octicons name='sun' size={size} color={Color.sunshine} />
			</AnimatedView>
		</Pressable>
	)
}

export default ThemeSwitcher
