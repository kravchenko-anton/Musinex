import BlurIcon from '@/ui/blur-button/BlurIcon'
import { render,  } from '@testing-library/react-native'

describe('BlurIcon', () => {
		it('blurIcon no props', () => {
  render(<BlurIcon children={undefined} />)
			expect(BlurIcon).toBeDefined()
		})
})