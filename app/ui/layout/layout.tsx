import { FC, PropsWithChildren } from 'react'
import { View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LanguageProvider } from '../../providers/languageProvider'
import ThemeProvider from '../../providers/themeProvider'

const Layout: FC<PropsWithChildren<ViewProps>> = ({ children, ...rest }) => {
	return (
		<SafeAreaView>
			<LanguageProvider>
				<ThemeProvider>
					<View className={'p-2 pb-0'} {...rest}>
						{children}
					</View>
				</ThemeProvider>
			</LanguageProvider>
		</SafeAreaView>
	)
}

export default Layout
