import AsyncStorage from '@react-native-async-storage/async-storage'
import i18next from 'i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: require('@/utils/translate/en.json')
	},
	ru: {
		translation: require('@/utils/translate/ru.json')
	},
	ua: {
		translation: require('@/utils/translate/ua.json')
	},
	pl: {
		translation: require('@/utils/translate/pl.json')
	}
}

i18n.use(initReactI18next)
i18n.on('languageChanged', async lng => {
 await	AsyncStorage.setItem('language', lng)
})
const initializeLanguage = async () => {
	const language = await AsyncStorage.getItem('language').then((res: any) =>
			 res || 'en'
	)
	if (!i18n.isInitialized) {
		 await i18next.init({
			resources,
			compatibilityJSON: 'v2',
			returnNull: false,
			supportedLngs: ['ua', 'en', 'ru', 'pl'],
			lng: language,
			fallbackLng: 'en',
			interpolation: {
				escapeValue: false
			},
			react: {
				useSuspense: false
			}
		}).catch((err) => {
			console.error('Error: ', err)
		 })
	}
}

initializeLanguage()

export default i18n
