import UScrollView from '@/ui/scroll-view/uScrollView'
import { IUScrollView } from '@/ui/scroll-view/uScrollView.types'
import { useQueryClient } from '@tanstack/react-query'
import { FC, PropsWithChildren, useCallback, useState } from 'react'
import { RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScrollLayout: FC<PropsWithChildren<IUScrollView>> = ({
	children,
	paddingBottom = 80,
	...props
}) => {
	const [refreshing, setRefreshing] = useState(false)
	const queryClient = useQueryClient()
	const onRefresh = useCallback(async () => {
		setRefreshing(true)
		await queryClient.resetQueries()
		setRefreshing(false)
	}, [])
	return (
		<SafeAreaView>
			<UScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				className={'p-3'}
				paddingBottom={paddingBottom}
				{...props}
			>
				{children}
			</UScrollView>
		</SafeAreaView>
	)
}

export default ScrollLayout
