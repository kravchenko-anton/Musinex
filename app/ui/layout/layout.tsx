import { FC, PropsWithChildren } from 'react'
import { View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren<ViewProps>> = ({ children, ...rest }) => {
	return (
		<SafeAreaView>
			<View className={'p-2 pb-0'} {...rest}>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout
