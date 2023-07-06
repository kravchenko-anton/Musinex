import Dropdown from '@/ui/dropdown/dropdown'
import '@testing-library/jest-native/extend-expect'
import { cleanup, render, screen, waitFor } from '@testing-library/react-native'

afterEach(() => cleanup())
const mockOnSelect = jest.fn()
const props = {
	isOpen: false,
	setIsOpen: jest.fn(),
	value: '',
	setValue: jest.fn(),
	onSelect: mockOnSelect,
	options: [
		{ label: 'Option 1', value: '1' },
		{ label: 'Option 2', value: '2' },
		{ label: 'Option 3', value: '3' }
	]
}
describe('Dropdown', () => {
	it('Render', async function () {
		const dropdownRender = render(<Dropdown {...props} />)
		await waitFor(() => expect(screen.queryByTestId('skeleton')).toBeNull())
		expect(dropdownRender).toMatchSnapshot()
	})
	it('Check Label', async function () {
		const { getAllByTestId, queryByTestId } = render(<Dropdown {...props} />)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getAllByTestId('title')[0]).toHaveTextContent('1') // First label
		expect(getAllByTestId('title')[1]).toHaveTextContent('Option 1') // option 1
		expect(getAllByTestId('title')[2]).toHaveTextContent('Option 2') // option 2
		expect(getAllByTestId('title')[3]).toHaveTextContent('Option 3') // option 3
	})
})
