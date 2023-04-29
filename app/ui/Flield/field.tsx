import { Controller } from 'react-hook-form'
import { TextInput, View } from 'react-native'
import Title from '../title/title'
import { IField } from './types/FiledTypes'

const Field = <T extends Record<string, any>>
({
	 control,
	 rules,
	 name,
	 ...rest
 }: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				         field: { value, onChange, onBlur },
				         fieldState: { error }
			         }) => (
				<>
					<View style={{
						borderWidth: error ? 1 : 0
					}} className={
						'bg-white w-full rounded-lg pb-4 pt-2.5 px-4 my-1.5'}
					>
						<TextInput
							autoCapitalize={'none'}
							onChangeText={onChange}
							onBlur={onBlur} style={{}}
							keyboardAppearance='dark'
							keyboardType={'default'}
							renderToHardwareTextureAndroid={true}
							placeholderTextColor={'#000'}
							value={(value || '').toString()}
							className='text-primaryBlack text-base'
							{...rest}
						/>
					</View>
					{error && <Title className='text-red' text={error.message ? error.message : 'Error!'} />}
				</>
			)}
		/>
	)
}

export default Field
