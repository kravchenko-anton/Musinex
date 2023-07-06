import UFlatList from '@/ui/flatList/uFlatList'
import { render } from '@testing-library/react-native'
import { Pressable, View } from 'react-native'

const data = [
	{
		id: 1,
		name: 'name1'
	},
	{
		id: 2,
		name: 'name2'
	},
	{
		id: 3,
		name: 'name3'
	}
]

describe('uFlatList', () => {
	it('test with no data', () => {
		const { getByTestId } = render(
			<UFlatList data={[]} renderItem={() => <View />} />
		)
		expect(getByTestId('uFlatList')).toBeNull()
	})
	it('test with data and data.length', () => {
		const { getByTestId } = render(
			<UFlatList data={data} renderItem={() => <Pressable />} />
		)
		expect(getByTestId('uFlatList')).toBeTruthy()
	})
	it('test style', () => {})
	it('headerText', () => {})
})
