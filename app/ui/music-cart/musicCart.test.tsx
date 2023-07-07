import MusicCart from '@/ui/music-cart/musicCart'
import { fireEvent, render } from '@testing-library/react-native'

const mockFn = jest.fn()
describe('musicCart', () => {
	test('should render currect', () => {
		const musicCartRender = render(
			<MusicCart
				text1='search'
				onPress={mockFn}
				wrapClassNames='mb-5'
				text2='artists'
				textCenter
				image={{
					width: 20,
					height: 20,
					border: 10,
					url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
				}}
				style={{
					width: 20
				}}
				className='mb-5'
			/>
		)
		expect(musicCartRender).toMatchSnapshot()
	})
	test('press', () => {
		const { getByTestId } = render(
			<MusicCart
				text1='search'
				onPress={mockFn}
				wrapClassNames='mb-5'
				text2='artists'
				textCenter
				image={{
					width: 20,
					height: 20,
					border: 10,
					url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
				}}
				style={{
					width: 20
				}}
				className='mb-5'
			/>
		)
		fireEvent.press(getByTestId('music-cart-wrapper'))
		expect(mockFn).toHaveBeenCalledTimes(1)
	})
})
