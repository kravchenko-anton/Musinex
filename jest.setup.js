global.__reanimatedWorkletInit = () => {}
jest.mock('react-native-reanimated', () =>
	require('react-native-reanimated/mock')
)
jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: str => str,
		i18n: {
			changeLanguage: () => new Promise(() => {})
		}
	}),
	initReactI18next: {
		type: '3rdParty',
		init: () => {}
	}
}))
jest.mock('react-redux', () => ({
	useDispatch: () => jest.fn(),
	useSelector: () =>
		jest.fn({
			theme: 'dark'
		})
}))
