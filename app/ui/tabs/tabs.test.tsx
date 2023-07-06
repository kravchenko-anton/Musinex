import Tabs from '@/ui/tabs/tabs'
import { render } from '@testing-library/react-native'
import { View } from 'react-native'

describe('Tabs', () => {
	it('should render current', function () {
		const rendered = render(
			<Tabs
				data={[
					{
						name: 'test',
						component: () => <View />,
						title: 'test'
					},
					{
						name: 'test2',
						component: () => <View />,
						title: 'test2'
					}
				]}
			/>
		)
		expect(rendered).toMatchSnapshot()
	})
})
