import { useAction } from '@/hook/useAction'
import { useAuth } from '@/hook/useAuth'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import AuthForm from '@/pages/auth/authForm'
import { login } from '@/redux/auth/authAction'
import { IAuthFields } from '@/types/auth/authTypes'
import Button from '@/ui/button/button'
import Layout from '@/ui/layout/layout'
import Title from '@/ui/title/title'
import Lottie from 'lottie-react-native'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'

const Auth = () => {
	const { user } = useAuth()
	const { register, login } = useAction()
	const { navigate } = useTypedNavigation()
	const [type, setType] = useState<'Login' | 'Register'>('Login')
	const { control, handleSubmit } = useForm<IAuthFields>({
		mode: 'onSubmit'
	})
	if (user) {
		navigate('Home')
	}

	const onSubmit: SubmitHandler<IAuthFields> = ({ password, email }) =>
		type === 'Login'
			? login({ password, email })
			: register({ password, email })
	return (
		<Layout className='justify-center'>
			<View className='items-center'>
				<Lottie
					source={require('@/assets/auth.json')}
					style={{
						width: 200,
						height: 200
					}}
					autoPlay
					loop
				/>
				<View className='w-full'>
					<Title
						translate
						className='text-center mb-4'
						size={24}
						fontFamily={'Montserrat_900Black'}
					>
						{type === 'Login' ? 'Login' : 'Register'}
					</Title>
					<View className='w-5/6 mx-auto'>
					
					<AuthForm control={control}/>
						
						<Button
							variant={'primary'}
							onPress={handleSubmit(onSubmit)}
							size={'large'}
							className='mt-2'
							translate
							text={type}
						/>
						
						
						<Title
							className='mt-4'
							size={16}
							translate
							onPress={() => setType(type === 'Login' ? 'Register' : 'Login')}
						>
							{type === 'Login'
								? 'Dont have an account?'
								: 'Already have an account?'}
						</Title>
					</View>
				</View>
			</View>
		</Layout>
	)
}

export default Auth
