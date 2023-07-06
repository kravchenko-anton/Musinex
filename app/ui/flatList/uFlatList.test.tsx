import { cleanup, render, screen, waitFor } from '@testing-library/react-native'
import { Pressable } from 'react-native'
import UFlatList from './uFlatList'

afterEach(() => cleanup())
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
	it('Render', async function () {
		const uFlatListRender = render(
			<UFlatList
				data={data}
				renderItem={() => <Pressable />}
				style={{ backgroundColor: 'red' }}
			/>
		)
		await waitFor(() => expect(screen.queryByTestId('skeleton')).toBeNull())
		expect(uFlatListRender).toMatchSnapshot()
	})
	it('Check headerText', async () => {
		const { getByTestId, queryByTestId } = render(
			<UFlatList
				data={data}
				renderItem={() => <Pressable />}
				headerText='headerText'
			/>
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveTextContent('headerText')
	})
})
