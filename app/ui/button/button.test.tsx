import Button from '@/ui/button/button'
import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor
} from '@testing-library/react-native'

afterEach(() => cleanup())
const mockFn = jest.fn()
describe('Button', () => {
	it('Render', function () {
		const buttonRender = render(
			<Button
				text={'by'}
				size={'large'}
				style={{
					backgroundColor: 'red'
				}}
				onPress={mockFn}
				className='mb-4'
				icon={'search'}
			/>
		)
		expect(buttonRender).toMatchSnapshot()
	})

	it('OnPress', () => {
		render(
			<Button text={'by'} size={'large'} onPress={mockFn} icon={'search'} />
		)
		expect(screen.getByTestId('button')).toBeDefined()
		fireEvent.press(screen.getByTestId('button'))
		expect(mockFn).toHaveBeenCalledTimes(1)
	})
	it('Check Children', function () {
		render(
			<Button text={'by'} size={'large'} onPress={mockFn} icon={'search'} />
		)
		expect(screen.getByTestId('button')).toBeDefined()
		expect(screen.getByTestId('button').children[0]).toBeDefined()
	})
	it('Check Text', async function () {
		const { getByTestId, queryByTestId } = render(
			<Button text={'by'} size={'large'} onPress={mockFn} icon={'search'} />
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveTextContent('by')
	})
})
