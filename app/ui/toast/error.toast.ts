import { errorCatch } from '@/utils/error.catch'
import Toast from 'react-native-toast-message'

export const errorToast = (e: any) => {
	Toast.show({
		type: 'error',
		text1: errorCatch(e),
		position: 'top',
		autoHide: true
	})
}
