import Button from '../../ui/button/button'
import Layout from '../../ui/Layout/Layout'

const Home = () => {
	return <Layout>
		<Button onClick={() => console.log(1)} center  size={'medium'} width={'100%'} text={'Hello World'} icon={'home'} variant={'dark'}/>
	</Layout>
}

export default Home
