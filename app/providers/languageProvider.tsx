import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: require('../utils/translate/en.json'),
	},
	ru: {
		translation: require('../utils/translate/ru.json'),
	},
	ua: {
		translation: require('../utils/translate/ua.json'),
	},
	pl: {
		translation: require('../utils/translate/pl.json'),
	},
};

i18n.use(initReactI18next);
	i18n.on('languageChanged', (lng) => {
			AsyncStorage.setItem('language', lng);
	});
const initializeLanguage = async () => {
	const language = await AsyncStorage.getItem('language').then((res: any) => res.toString());
	if (!i18n.isInitialized) {
		i18n.init({
			resources,
			compatibilityJSON: 'v2',
			returnNull: false,
			supportedLngs: ['ua', 'en', 'ru', 'pl'],
			lng: language,
			fallbackLng: 'en',
			interpolation: {
				escapeValue: false,
			},
		});
	}
};

initializeLanguage();

export default i18n;