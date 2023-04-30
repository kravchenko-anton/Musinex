import I18n from 'i18n-js'
import { useTypedSelector } from '../hook/useTypedSelector'
import { en } from '../utils/translate/en'
import { pl } from '../utils/translate/pl'
import { ru } from '../utils/translate/ru'
import { ua } from '../utils/translate/ua'

export const LanguageProvider = () => {
	const selector = useTypedSelector(state => state.language)
	I18n.translations = { en, ru, pl, ua }
	I18n.locale = selector // it like 'en' or 'ru' 😘
	I18n.fallbacks = true
	return null
}
