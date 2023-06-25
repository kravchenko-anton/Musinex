import { color } from '@/utils/color'
import { shadeColor } from '@/utils/shade.color'
import { FC } from 'react'
import RnToast, { BaseToast } from 'react-native-toast-message'

const options = (primaryColor: string) => ({
	style: {
		backgroundColor: color.twilight,
		borderLeftColor: primaryColor,
		borderLeftWidth: 8,
		zIndex: 1000,
		shadowColor: color.transparent
	},
	text1Style: {
		color: color.white,
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
						{...options(shadeColor(color.primary, 50))}
					/>
				),
				info: props => (
					<BaseToast {...props} {...options(color.sunshine)} />
				),
				error: props => (
					<BaseToast
						{...props}
						{...{
							...options(color.crimson)
						}}
					/>
				)
			}}
		/>
	)
}

export default Toast
