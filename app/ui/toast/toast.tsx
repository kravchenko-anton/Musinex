import { Color } from '@/utils/color'
import { shadeRGBColor } from '@/utils/shade.color'
import { FC } from 'react'
import RnToast, { BaseToast } from 'react-native-toast-message'

const options = (primaryColor: string) => ({
	style: {
		backgroundColor: Color.twilight,
		borderLeftColor: primaryColor,
		borderLeftWidth: 8,
		zIndex: 1000,
		shadowColor: Color.transparent
	},
	text1Style: {
		color: Color.white,
		fontSize: 16
	},
	text2Style: {
		fontSize: 14
	}
})
const Toast: FC = () => (
	<RnToast
		topOffset={50}
		autoHide={true}
		position='top'
		config={{
			success: props => (
				<BaseToast {...props} {...options(shadeRGBColor(Color.primary, 50))} />
			),
			info: props => <BaseToast {...props} {...options(Color.sunshine)} />,
			error: props => (
				<BaseToast
					{...props}
					{...{
						...options(Color.crimson)
					}}
				/>
			)
		}}
	/>
)

export default Toast
