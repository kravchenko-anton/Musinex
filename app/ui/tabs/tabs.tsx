import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import React, { FC, useEffect } from 'react'
import { FlatList, Pressable, View } from 'react-native'

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
	return (
		<View>
			<View>
				<View className='flex-row flex-wrap gap-2 mt-2'>
					<FlatList
						ref={ref => (refList = ref)}
						initialScrollIndex={index}
						showsHorizontalScrollIndicator={false}
						horizontal
						data={tabs}
						renderItem={({ item: tab, index: renderIndex }) => {
							return (
								<Pressable key={tab.name}
								           onPress={() => {
									           setIndex(renderIndex)
									           setActiveTab(tab.name)
								           }}
								           className='p-2 rounded-xl mr-3 mb-4 items-center'
								           style={{
									           backgroundColor: renderIndex === index ? getHexCode('primary') : getHexCode(
										           'veryLightBlack'
									           )
								           }}
								>
									<Title text={tab.title} color={getHexCode('white')} translate={translate} />
								</Pressable>
							)
						}}
					/>
				</View>
				{tabs.map(tab => {
					if (tab.name === activeTab) {
						return tab.component()
					}
				})}
			</View>
		</View>
	)
}

export default Tabs
