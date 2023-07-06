import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import { cleanup, render, screen, waitFor } from '@testing-library/react-native'

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (str: string) => str,
		i18n: {
			changeLanguage: () => new Promise(() => {})
		}
	}),
	initReactI18next: {
		type: '3rdParty',
		init: () => {}
	}
}))
afterEach(() => cleanup())
describe('title', () => {
	it('should render currect', async function () {
		const renders = render(
			<Title
				style={{
					backgroundColor: 'red'
				}}
				className='mb-4'>
				by
			</Title>
		)
		await waitFor(() => expect(screen.queryByTestId('skeleton')).toBeNull())
		expect(renders).toMatchSnapshot()
	})
	it('Check text in title', async function () {
		const { getByTestId, queryByTestId } = render(<Title>by</Title>)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveTextContent('by')
	})
	it('Check style in title', async function () {
		const { getByTestId, queryByTestId } = render(
			<Title
				style={{
					backgroundColor: 'red'
				}}>
				by
			</Title>
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveStyle({
			backgroundColor: 'red'
		})
	})
	it('Check numberOfLines in title', async function () {
		const { getByTestId, queryByTestId } = render(
			<Title numberOfLines={2}>by</Title>
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveProp('numberOfLines', 2)
	})
	it('Check color in title', async function () {
		const { getByTestId, queryByTestId } = render(
			<Title color={Color.crimson}>by</Title>
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveProp('color', Color.crimson)
	})
	it('Check  style in title', async function () {
		const { getByTestId, queryByTestId } = render(
			<Title
				style={{
					backgroundColor: 'red'
				}}>
				by
			</Title>
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveStyle({
			backgroundColor: 'red'
		})
	})
	it('Check className in title', async function () {
		const { getByTestId, queryByTestId } = render(
			<Title className={'mb-4'}>by</Title>
		)
		await waitFor(() => expect(queryByTestId('skeleton')).toBeNull())
		expect(getByTestId('title')).toHaveProp('className', 'mb-4')
	})
})
