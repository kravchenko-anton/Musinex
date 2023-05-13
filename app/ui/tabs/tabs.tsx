import { getHexCode } from '@/utils/getColor'
import { WindowHeight } from '@/utils/screen'
import { Tab, TabView } from '@rneui/themed'
import I18n from 'i18n-js'
import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'

interface ITabs {
	translate?: boolean
	data: {
		name: string
		title: string
		component: () => JSX.Element
	}[]
}

const Tabs: FC<ITabs> = ({ data: tabs, translate = false }) => {
	const [index, setIndex] = React.useState(0)
	
	return (
		<View>
			<Tab
				value={index}
				onChange={(e) => setIndex(e)}
				style={{
					marginBottom: 20
				}}
				indicatorStyle={{
					height: 3,
					backgroundColor: getHexCode('white')
				}}
				scrollable={true}
				
				titleStyle={{
					color: getHexCode('white'),
					fontSize: 16,
					fontWeight: 'bold'
				}}
			>
				{tabs.map((item, i) => {
					return <Tab.Item
						key={i}
						size='sm'
						title={I18n.t(item.title)}
						onPress={() => setIndex(i)}
					/>
				})}
			</Tab>
			
			<TabView value={index} animationType='timing' onChange={setIndex}>
				{tabs.map((item, i) => {
					return <TabView.Item
						key={i}
						style={{ width: '100%', height: WindowHeight }}>
						<ScrollView>
							{item.component()}
						</ScrollView>
					</TabView.Item>
				})}
			</TabView>
		</View>
	)
}

export default Tabs
