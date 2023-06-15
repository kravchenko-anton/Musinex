import { IAuthFields } from '@/types/auth/authTypes'
import Field from '@/ui/Flield/field'
import { FC } from 'react'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

const AuthForm: FC<{ control: Control<IAuthFields, unknown> }> = ({ control }) => {
	return (
		<View>
			<Field
				rules={{
					required: {
						value: true,
						message: 'Email is required'
					},
					pattern: {
						value: /\S+@\S+\.\S+/,
						message: 'Entered value does not match email format'
					}
				}}
				control={control}
				name={'email'}
				placeholder={'Email'}
			/>

			<Field
				rules={{
					required: {
						value: true,
						message: 'Password is required'
					},
					minLength: {
						value: 6,
						message: 'Password must have at least 8 characters'
					}
				}}
				control={control}
				secureTextEntry={true}
				name={'password'}
				placeholder={'Password'}
			/>
		</View>
	)
}

export default AuthForm
