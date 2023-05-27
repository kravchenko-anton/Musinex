import Toast from 'react-native-toast-message'

export const errorToast = (e: any, text2?: string) => {
	Toast.show({
		type: 'error',
		text1: typeof e === 'string' ? e : e.message,
		text2,
		position: 'top',
		autoHide: true,
		
	})
}