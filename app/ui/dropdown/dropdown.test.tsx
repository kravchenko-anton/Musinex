import Dropdown from '@/ui/dropdown/dropdown'
import '@testing-library/jest-native/extend-expect'
import { cleanup, render, screen, waitFor } from '@testing-library/react-native'

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
const mockOnSelect = jest.fn()
describe('Dropdowns', () => {
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
	it('should render currect', async function () {
		const renders = render(<Dropdown {...props} />)
		await waitFor(() => expect(screen.queryByTestId('skeleton')).toBeNull())
		expect(renders).toMatchSnapshot()
	})
	it('Check label in dropdown', async function () {
		const { getAllByTestId, queryByTestId } = render(<Dropdown {...props} />)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getAllByTestId('title')[0]).toHaveTextContent('1') // First label
		expect(getAllByTestId('title')[1]).toHaveTextContent('Option 1') // option 1
		expect(getAllByTestId('title')[2]).toHaveTextContent('Option 2') // option 2
		expect(getAllByTestId('title')[3]).toHaveTextContent('Option 3') // option 3
	})
})
