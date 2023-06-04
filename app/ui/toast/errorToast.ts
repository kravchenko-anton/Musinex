import { useTranslation } from 'react-i18next'
import Toast from 'react-native-toast-message'

export const errorToast = (e: any) => {
	Toast.show({
		type: 'error',
		text1: typeof e === 'string' ? e : e.message,
		position: 'top',
		autoHide: true,
		
	})
}