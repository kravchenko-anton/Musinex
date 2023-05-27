import AuthForm from '@/pages/auth/authForm'
import Layout from '@/ui/layout/layout'
import Lottie from 'lottie-react-native'
import { useForm } from 'react-hook-form'

const Auth = () => {
	const {control, watch} = useForm()
	return <Layout className='items-center'>
	<Lottie source={require('@/assets/spinning-eye.json')} style={{
		width: 200,
		height: 200
	}}  />
			<AuthForm control={control}/>
	</Layout>
}

export default Auth