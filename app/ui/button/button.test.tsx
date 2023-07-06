import Button from '@/ui/button/button'
import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor
} from '@testing-library/react-native'

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
const mockFn = jest.fn()
describe('blurIcon', () => {
	it('should render currect', function () {
		const renders = render(
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
		expect(renders).toMatchSnapshot()
	})

	it('press function', () => {
		render(
			<Button text={'by'} size={'large'} onPress={mockFn} icon={'search'} />
		)
		expect(screen.getByTestId('button')).toBeDefined()
		fireEvent.press(screen.getByTestId('button'))
		expect(mockFn).toHaveBeenCalledTimes(1)
	})
	it('check children', function () {
		render(
			<Button text={'by'} size={'large'} onPress={mockFn} icon={'search'} />
		)
		expect(screen.getByTestId('button')).toBeDefined()
		expect(screen.getByTestId('button').children[0]).toBeDefined()
	})
	it('check text', async function () {
		const { getByTestId, queryByTestId } = render(
			<Button text={'by'} size={'large'} onPress={mockFn} icon={'search'} />
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveTextContent('by')
	})
})
