import BlurIcon from '@/ui/blurIcon/BlurIcon'
import {
	cleanup,
	fireEvent,
	render,
	screen
} from '@testing-library/react-native'

afterEach(() => cleanup())
const mockFn = jest.fn()
describe('blurIcon', () => {
	it('press function', () => {
		render(<BlurIcon onPress={mockFn} icon={'search'} />)
		expect(screen.getByTestId('blur-icon')).toBeDefined()
		fireEvent.press(screen.getByTestId('icon-wrapper'))
		expect(mockFn).toHaveBeenCalledTimes(1)
	})
	it('check style', function () {
		const { getByTestId } = render(
			<BlurIcon
				onPress={mockFn}
				icon={'search'}
				style={{
					backgroundColor: 'red'
				}}
			/>
		)
		expect(getByTestId('blur-icon')).toHaveStyle({
			backgroundColor: 'red'
		})
	})
	it('Check className', function () {
		const { getByTestId } = render(
			<BlurIcon onPress={mockFn} icon={'search'} className={'mb-4'} />
		)
		expect(getByTestId('blur-icon')).toHaveProp('className', 'mb-4')
	})
})
