import { FC } from 'react'
import RnToast, { BaseToast } from 'react-native-toast-message'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { getHexCode } from '../utils/getColor'

const options = (primaryColor: string) => ({
	style: {
		backgroundColor: Colors.primary,
		borderLeftColor: primaryColor,
		zIndex: 1000
	},
	text1Style: {
		color: getHexCode('white'),
		fontSize: 16
	},
	text2Style: {
		fontSize: 14
	}
})
const Toast: FC = () => {
	return (
		<RnToast
			topOffset={50}
			autoHide={true}
			position={'top'}
			config={{
				success: props => <BaseToast {...props} {...options('#67E769')} />,
				info: props => <BaseToast {...props} {...options('#65d4ff')} />,
				error: props => <BaseToast {...props} {...options('#ff4949')} />
			}}
		/>
	)
}

export default Toast
