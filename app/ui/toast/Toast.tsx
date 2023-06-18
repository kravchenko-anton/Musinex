import { getHexCode } from '@/utils/getColor'
import { shadeColor } from '@/utils/shadeColor'
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
				success: props => (
					<BaseToast
						{...props}
						{...options(shadeColor(getHexCode('primary'), 50))}
					/>
				),
				info: props => (
					<BaseToast {...props} {...options(getHexCode('yellow'))} />
				),
				error: props => (
					<BaseToast
						{...props}
						{...{
							...options(getHexCode('primaryRed'))
						}}
					/>
				)
			}}
		/>
	)
}

export default Toast
