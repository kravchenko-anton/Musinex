import { en } from '@/utils/translate/en'
import { pl } from '@/utils/translate/pl'
import { ru } from '@/utils/translate/ru'
import { ua } from '@/utils/translate/ua'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const defaultNS = "ns1";
export const LanguageProvider = () => {
	const resources = {
		en: {
			translation: en
		},
		ru: {
			translation: ru
		},
		ua: {
			translation: ua
		},
		pl: {
			translation: pl
		}
	} as const
	i18n.use(initReactI18next).init({
		resources,
		defaultNS,
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	})
	return null
}
