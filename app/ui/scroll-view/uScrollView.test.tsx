import UScrollView from '@/ui/scroll-view/uScrollView'
import Title from '@/ui/title/title'
import { render } from '@testing-library/react-native'

describe('uScrollView', () => {
	test('Render', () => {
		const uScrollViewRender = render(
			<UScrollView
				style={{
					backgroundColor: 'red'
				}}
				paddingBottom={100}
				className='mb-5'
				pointerEvents={'box-none'}
				contentContainerStyle={{
					backgroundColor: 'blue'
				}}>
				<Title
					numberOfLines={2}
					style={{ backgroundColor: 'red' }}
					size={25}
					className='mb-5'>
					test
				</Title>
			</UScrollView>
		)
		expect(uScrollViewRender).toMatchSnapshot()
	})
})
