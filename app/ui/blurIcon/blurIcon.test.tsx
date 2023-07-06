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
	it('Render', function () {
		const blurIconRender = render(
			<BlurIcon
				onPress={mockFn}
				icon='search'
				style={{
					backgroundColor: 'red'
				}}
				className='mb-4'
			/>
		)
		expect(blurIconRender).toMatchSnapshot()
	})
	it('OnPress', () => {
		render(<BlurIcon onPress={mockFn} icon='search' />)
		expect(screen.getByTestId('blur-icon')).toBeDefined()
		fireEvent.press(screen.getByTestId('icon-wrapper'))
		expect(mockFn).toHaveBeenCalledTimes(1)
	})
})
