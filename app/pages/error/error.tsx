import Lottie from 'lottie-react-native'
import { useTypedRoute } from '../../hook/useTypedRoute'
import Layout from '../../ui/layout/layout'
import Title from '../../ui/title/title'

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
		<Title className={'text-center'} size={50} text={'Error'} translate />
		<Title className={'text-center mt-5'} color={'#ccc'} numberOfLines={6} size={20}
		       text={params.error} />
	</Layout>
}

export default Error