import { capitalizeFirstLetter } from '@/utils/capitalize.latter'
import { Color } from '@/utils/color'
import { errorCatch } from '@/utils/error.catch'

describe('utils', () => {
	test('errorCatch', () => {
		expect(
			errorCatch({
				message: 'message'
			})
		).toBe('message')
		expect(
			errorCatch({
				response: {
					data: {
						message: 'message'
					}
				}
			})
		).toBe('message')
	})
	test('Color', () => {
		expect(Color.crimson).toEqual('#DC3F41')
	})
	test('capitalizeFirstLetter', () => {
		expect(capitalizeFirstLetter('hello')).toBe('Hello')
	})
})
