import { getHexCode } from '@/utils/getColor'
import { FC } from 'react'
import RnToast, { BaseToast } from 'react-native-toast-message'

const options = (primaryColor: string) => ({
	style: {
		backgroundColor: getHexCode('lightBlack'),
		borderLeftColor: primaryColor,
		borderLeftWidth: 8,
		zIndex: 1000,
		shadowColor: getHexCode('transparent')
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
				success: props => <BaseToast {...props} {...options('#00c851')} />,
				info: props => <BaseToast {...props} {...options('#65d4ff')} />,
				error: props => (
					<BaseToast
						{...props}
						{...{
							...options('#ff4444')
						}}
					/>
				)
			}}
		/>
	)
}

export default Toast
