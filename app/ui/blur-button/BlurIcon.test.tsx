import BlurIcon from '@/ui/blur-button/BlurIcon'
import { render } from '@testing-library/react-native'

describe('BlurIcon', () => {
		it('should render correctly', () => {
		const renders = render(<BlurIcon />)
		expect(renders).toMatchSnapshot()
		})
})