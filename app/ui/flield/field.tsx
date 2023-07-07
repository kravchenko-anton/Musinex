import { useColorTheme } from '@/hook/useColorTheme'
import { Color } from '@/utils/color'
import { Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextInput, View } from 'react-native'
import Title from '../title/title'
import { FieldProps } from './filed.types'

const Field = <T extends Record<string, any>>({
	placeholder,
	...props
}: FieldProps<T>): JSX.Element | null => {
	const [isFontsLoaded] = useFonts({
		Montserrat_700Bold
	})
	const { t } = useTranslation()
	const { charcoalToTwilight } = useColorTheme()
	if (!isFontsLoaded) return null
	return (
		<View style={props.wrapperStyle} className={props.wrapperClassName}>
			<Controller
				control={props.control}
				name={props.name}
				rules={props.rules}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							testID='field'
							style={{
								borderWidth: error ? 1 : 0,
								backgroundColor: charcoalToTwilight
							}}
							className='my-1.5 w-full rounded-lg border-crimson px-4 pb-4 pt-2.5'>
							<TextInput
								autoCapitalize='none'
								onBlur={onBlur}
								onChangeText={onChange as any}
								keyboardAppearance='dark'
								keyboardType='default'
								renderToHardwareTextureAndroid={true}
								placeholderTextColor={Color.white}
								value={(value ? value : '').toString()}
								className='text-base text-white'
								style={{
									fontFamily: 'Montserrat_700Bold'
								}}
								placeholder={t(placeholder).toString()}
								{...props}
							/>
						</View>
						{error && (
							<Title color={Color.crimson} size={16}>
								{error.message ? error.message : 'error!'}
							</Title>
						)}
					</>
				)}
			/>
		</View>
	)
}

export default Field
