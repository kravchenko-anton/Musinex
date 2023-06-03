import { useAction } from '@/hook/useAction'
import { useAuth } from '@/hook/useAuth'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { login } from '@/redux/auth/authAction'
import { IAuthFields } from '@/types/auth/authTypes'
import Button from '@/ui/button/button'
import Field from '@/ui/Flield/field'
import Layout from '@/ui/layout/layout'
import Title from '@/ui/title/title'
import Lottie from 'lottie-react-native'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'

const Auth = () => {
	const [type, setType] = useState<'Login' | 'Register'>('Login')
	const {control, handleSubmit} = useForm<IAuthFields>({
	mode: 'onSubmit'
	})
const {user} = useAuth()
	const {register, login} = useAction()
	const {navigate} = useTypedNavigation()
	if (user) {
		navigate('Home')
	}
	const onSubmit: SubmitHandler<IAuthFields>  = ({password,email}) => type === "Login" ? login({password,email}) : register({password,email})
	return <Layout>
		<View className='items-center'>
		
	<Lottie source={require('@/assets/spinning-eye.json')} style={{
		width: 200,
		height: 200
	}}  />
		{/*add to authForm*/}
		<View className='w-full'>
			<Field  rules={{
				required: {
					value: true,
					message: 'Email is required'
				},
				pattern: {
					value: /\S+@\S+\.\S+/,
					message: 'Entered value does not match email format'
				},
				
			}} control={control} name={'email'} placeholder={'Email'} />
			
			<Field  rules={{
				required: {
					value: true,
					message: 'Password is required'
				},
				minLength: {
					value: 6,
					message: 'Password must have at least 8 characters'
				}
			}} control={control} secureTextEntry={true} name={'password'} placeholder={'Password'} />
		</View>
		<Button onPress={handleSubmit(onSubmit)} size={'medium'} text={type} />
		</View>
		
	<Title  size={16} onPress={
		() => setType(type === 'Login' ? 'Register' : 'Login')
	}
	>{type === 'Login' ? 'Don\'t have an account?' : 'Already have an account?'}</Title>
	</Layout>
}

export default Auth