import { errorCatch } from '@/utils/errorCatch'
import Toast from 'react-native-toast-message'

export const errorToast = (e: any) => {
	Toast.show({
		type: 'error',
		text1: errorCatch(e),
		position: 'top',
		autoHide: true
	})
}
