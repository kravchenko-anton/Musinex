import { useTypedRoute } from '@/hook/useTypedRoute'
import Layout from '@/ui/layout/layout'
import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import Lottie from 'lottie-react-native'

const Error = () => {
	const { params } = useTypedRoute<'Error'>()
	console.log(params.error)
	return <Layout className='items-center justify-start text-center mt-[30%] flex h-full w-full'>
		<Lottie resizeMode={'cover'} source={require('../../assets/error.json')} autoSize={true} autoPlay={true}
		        loop={true}
		        style={{
			        width: 200,
			        height: 200,
			        justifyContent: 'center',
			        alignItems: 'center'
		        }} />
		<Title className={'text-center'} size={50}  translate >{'Error'}</Title>
		<Title className={'text-center mt-5'} color={getHexCode('primary')} numberOfLines={6} size={20}
		       >{params.error}</Title>
	</Layout>
}

export default Error