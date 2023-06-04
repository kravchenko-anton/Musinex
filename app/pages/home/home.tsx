import Button from '@/ui/button/button'
import Layout from '@/ui/layout/layout'
import Title from '@/ui/title/title'

const Home = () => {
	return (
		<Layout>
			<Title translate>
				Musinex
			</Title>
				<Button size={'small'} width={100} variant={'primary'} text={'translate'} />
		</Layout>
	)
}

export default Home
