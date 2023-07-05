import BlurIcon from '@/ui/blurIcon/BlurIcon'
import { fireEvent, render } from '@testing-library/react-native'

describe('BlurIcon component', () => {
	test('onPress check', () => {
		const onPress = jest.fn()
		const { getByTestId } = render(
			<BlurIcon className='mb-8' isSmall={false} onPress={onPress} />
		)
		const icon = getByTestId('icon-wrapper')
		fireEvent.press(icon)
		expect(onPress).toHaveBeenCalledTimes(1)
	})
})
