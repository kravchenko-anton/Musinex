import Image from '@/ui/image/image'
import { cleanup, render } from '@testing-library/react-native'

afterEach(() => cleanup())
describe('Image', () => {
	test('should render currect', () => {
		const renders = render(
			<Image
				width={20}
				height={20}
				borderRadius={10}
				url={
					'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
				}
				style={{
					width: 20
				}}
				className='mb-5'
			/>
		)
		expect(renders).toMatchSnapshot()
	})
})
