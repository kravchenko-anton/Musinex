import Header from '@/ui/header/header'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import ScrollLayout from '@/ui/layout/scrollLayout'

const Home = () => {
// const {data} = useQuery(['catalog'], () => searchServices.getCatalogue())
// 	console.log(data, 'catalog')
	return (
		<ScrollLayout>
			<Header className={'mb-5'} logoSize={30}>
				<UIcon name={'mail'} size={24} borderRadius={100} padding={10} />
			</Header>
		</ScrollLayout>
	)
}

export default Home
