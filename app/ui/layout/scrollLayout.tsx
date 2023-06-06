import UScrollView, { IUScrollView } from '@/ui/scroll-view/uScrollView'
import React, { FC, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScrollLayout: FC<PropsWithChildren<IUScrollView>> = ({
	children,
	paddingBottom = 80,
	...rest
}) => {
	return (
		<SafeAreaView>
			<UScrollView className={'p-2'} paddingBottom={paddingBottom} {...rest}>
				{children}
			</UScrollView>
		</SafeAreaView>
	)
}

export default ScrollLayout
