import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import { cleanup, render, screen, waitFor } from '@testing-library/react-native'

afterEach(() => cleanup())
describe('title', () => {
	it('Render', async function () {
		const titleRender = render(
			<Title
				style={{
					backgroundColor: 'red'
				}}
				className='mb-4'>
				by
			</Title>
		)
		await waitFor(() => expect(screen.queryByTestId('skeleton')).toBeNull())
		expect(titleRender).toMatchSnapshot()
	})
	it('Check Text', async function () {
		const { getByTestId, queryByTestId } = render(<Title>by</Title>)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveTextContent('by')
	})
	it('Check NumberOfLines', async function () {
		const { getByTestId, queryByTestId } = render(
			<Title numberOfLines={2}>by</Title>
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveProp('numberOfLines', 2)
	})
	it('Check Color', async function () {
		const { getByTestId, queryByTestId } = render(
			<Title color={Color.crimson}>by</Title>
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveProp('color', Color.crimson)
	})
})
