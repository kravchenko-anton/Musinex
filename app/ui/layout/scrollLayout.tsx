import React, { FC, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UScrollView, { IUScrollView } from '../scrollView/uScrollView'

const ScrollLayout: FC<PropsWithChildren<IUScrollView>> = ({ children, paddingBottom = 80, ...rest }) => {
	return (
		<SafeAreaView>
			<UScrollView className={'p-2'} paddingBottom={paddingBottom}  {...rest}>
				{children}
			</UScrollView>
		</SafeAreaView>
	)
}

export default ScrollLayout
