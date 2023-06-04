import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
const resources = {
		en: {
			translation: require('../utils/translate/en.json')
		},
		ru: {
			translation: require('../utils/translate/ru.json')
		},
		ua: {
			translation: require('../utils/translate/ua.json')
		},
		pl: {
			translation: require('../utils/translate/pl.json')
		}
	}
	i18n.use(initReactI18next)
	
	if (!i18n.isInitialized) {
		i18n.init({
			resources,
			compatibilityJSON: 'v2',
			returnNull: false,
			lng: 'ua',
			fallbackLng: ['ua', 'en', 'ru', 'pl'],
			interpolation: {
				escapeValue: false,
			},
		});
	}
	export default i18n

