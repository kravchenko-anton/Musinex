import React, { FC, useEffect } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import Title from '../title/title'

interface ITabs {
	translate?: boolean
	data: {
		name: string
		title: string
		component: () => JSX.Element
	}[]
}

const Tabs: FC<ITabs> = ({ data: tabs, translate = false }) => {
	const [activeTab, setActiveTab] = React.useState('songs')
	const [index, setIndex] = React.useState(0)
	let refList = React.useRef<FlatList>(null).current
	useEffect(() => {
		if (!refList) return
		refList.scrollToIndex({ index, animated: true })
	}, [index])
	return <View>
		<View className='flex-row flex-wrap gap-2 mt-2'>
			<FlatList ref={ref => refList = ref}
			          initialScrollIndex={index}
			          showsHorizontalScrollIndicator={false}
			          horizontal data={tabs} renderItem={({ item: tab, index: renderIndex }) => {
				return <Pressable
					onPress={() => {
						setIndex(renderIndex)
						setActiveTab(tab.name)
					}}
					className='p-2 rounded-xl mr-3 mb-4 items-center'
					style={{
						backgroundColor: renderIndex === index ? '#5b0eeb' : '#202020'
					}}>
					<Title text={tab.title} translate={translate} />
				</Pressable>
			}} />
		</View>
		{tabs.map(tab => {
			return activeTab === tab.name ? tab.component() : null
		})}
	</View>
}

export default Tabs