import Icon from '@/ui/icon/default-icon/icon'
import { cleanup, fireEvent, render } from '@testing-library/react-native'

const mockFn = jest.fn()
afterEach(() => cleanup())
describe('Icon', () => {
	test('should render currect', () => {
		const renders = render(
			<Icon
				name={'search'}
				style={{
					width: 20
				}}
				className='mb-5'
			/>
		)
		expect(renders).toMatchSnapshot()
	})
	test('press', () => {
		const { getByTestId } = render(
			<Icon
				name={'search'}
				style={{
					width: 20
				}}
				className='mb-5'
				onPress={mockFn}
			/>
		)
		fireEvent.press(getByTestId('icon-wrapper'))
		expect(mockFn).toHaveBeenCalledTimes(1)
	})
})
