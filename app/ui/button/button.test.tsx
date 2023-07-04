import Button from '@/ui/button/button'
import { fireEvent, render } from '@testing-library/react-native'
import { toHaveStyle } from '@testing-library/jest-native/dist/to-have-style';
describe('Button component', () => {
	
	test('should render correctly', async () => {
		const { getByTestId } = render(<Button size={'small'} onPress={() => console.log(1)} translate={false} text='test' />)
		const button = getByTestId('button')
		expect(button).toBeDefined()
		fireEvent.press(button,	() => console.log(1))
	})
		test('render text',	async () => {
		const { queryByText } = render(<Button size={'small'} onPress={() => console.log(1)} translate={false} text='test' />)
		const text = queryByText('/test/i')
		expect(text).toBeDefined()
		})
	test('icon have',	async () => {
		const { queryByText } = render(<Button size={'small'} onPress={() => console.log(1)} translate={false} text='test' icon={'search'} />)
		const icon = queryByText('search')
		expect(icon).toBeDefined()
	})

	test('check classname',	async () => {
		const { getByTestId } = render(<Button size={'small'} onPress={() => console.log(1)} translate={false} text='test' className='mb-4 mt-5' style={{width: "100%"}} />)
		const button = getByTestId('button')
		expect.extend({toHaveStyle})
		expect(button).toHaveStyle({width: "100%"})

	})
	it('calls onPress when pressed', () => {
		const mockOnPress = jest.fn();
		const { getByTestId } = render(<Button size={'medium'} translate={false} text={'by'} onPress={mockOnPress} />);
		const button = getByTestId('button');
		
		fireEvent.press(button);
		
		expect(mockOnPress).toHaveBeenCalled();
	});
	
})