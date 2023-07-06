import { cleanup, render, screen, waitFor } from '@testing-library/react-native'
import { Pressable } from 'react-native'
import UFlatList from './uFlatList'

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (str: string) => str,
		i18n: {
			changeLanguage: () => new Promise(() => {})
		}
	}),
	initReactI18next: {
		type: '3rdParty',
		init: () => {}
	}
}))
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
	it('should render currect', async function () {
		const renders = render(
			<UFlatList
				data={data}
				renderItem={() => <Pressable />}
				style={{ backgroundColor: 'red' }}
			/>
		)
		await waitFor(() => expect(screen.queryByTestId('skeleton')).toBeNull())
		expect(renders).toMatchSnapshot()
	})
	it('test style', () => {
		const { getByTestId } = render(
			<UFlatList
				data={data}
				renderItem={() => <Pressable />}
				style={{ backgroundColor: 'red' }}
			/>
		)
		expect(getByTestId('uFlatList')).toHaveStyle({ backgroundColor: 'red' })
	})
	it('headerText', async () => {
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
