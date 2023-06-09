import { UViewProps } from '@/types/global'
import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren<UViewProps>> = ({ children, ...props }) => {
	return (
		<SafeAreaView>
			<View className={'p-2'} {...props}>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout
