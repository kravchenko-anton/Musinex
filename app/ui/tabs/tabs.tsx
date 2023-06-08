import Button from '@/ui/button/button'
import UFlatList from '@/ui/flatList/uFlatList'
import React, { FC, memo, useState } from 'react'
import { View } from 'react-native'

interface ITabs {
	translate?: boolean
	data: {
		name: string
		title: string
		component: () => JSX.Element
	}[]
}
const Tabs: FC<ITabs> = ({ data: tabs, translate = false }) => {
	const [activeTab, setActiveTab] = useState(tabs[0].name)
	return (
		<View>
			<View>
				<View className='mt-2 mb-4'>
					<UFlatList
						horizontal
						data={tabs}
						renderItem={({ item: tab }) => {
							return (
						<Button uppercase translate={translate} size={'small'} onPress={() => setActiveTab(tab.name)} variant={tab.name === activeTab ? 'primary' : 'default'} className='mr-3' width={110} text={tab.title}/>
							)
						}}
					/>
				</View>
					{tabs.find((tab) => tab.name === activeTab)?.component()}
			</View>
		</View>
	)
}
export default memo(Tabs)