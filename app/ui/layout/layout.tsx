import { UViewProps } from '@/types/global'
import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren<UViewProps>> = ({ children, ...rest }) => {
	return (
		<SafeAreaView>
			<View className={'p-3'} {...rest}>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout
