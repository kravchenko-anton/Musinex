import { useTypedSelector } from '@/hook/useTypedSelector'
import { pl } from '@/utils/translate/pl'
import { ru } from '@/utils/translate/ru'
import { ua } from '@/utils/translate/ua'
import I18n from 'i18n-js'

export const LanguageProvider = () => {
	I18n.locale = useTypedSelector(state => state.language)
	I18n.fallbacks	= true
	I18n.defaultLocale	= 'ru'
	I18n.missingTranslationPrefix	= 'missingTranslation:'
	I18n.missingPlaceholder	= (placeholder) => `missingPlaceholder:${placeholder}`
	I18n.translations	= {ru,	ua, pl}
	return null
}
