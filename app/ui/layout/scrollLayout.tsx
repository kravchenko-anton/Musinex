import UScrollView, { IUScrollView } from '@/ui/scroll-view/uScrollView'
import { FC, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScrollLayout: FC<PropsWithChildren<IUScrollView>> = ({
	children,
	paddingBottom = 80,
	...props
}) => {
	return (
		<SafeAreaView>
			<UScrollView
				className={'p-3'} paddingBottom={paddingBottom} {...props}>
				{children}
			</UScrollView>
		</SafeAreaView>
	)
}

export default ScrollLayout
