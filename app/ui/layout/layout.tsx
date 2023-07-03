import { UViewProps } from '@/types/global'
import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren<UViewProps>> = ({ children, ...props }) => (
		<SafeAreaView edges={['right', 'top', 'left']} className='flex-1'>
			<View className='p-2 flex-1' {...props}>
				{children}
			</View>
		</SafeAreaView>
	)

export default Layout
