import { FontAwesome5 } from '@expo/vector-icons'
import { useGetTopSongQuery } from '../../redux/api/music/musicApi'
import Header from '../../ui/header/header'
import Layout from '../../ui/Layout/Layout'
import Title from '../../ui/title/title'

const Home = () => {
const {data} = useGetTopSongQuery(null)
	console.log(data)
if (!data) return
	return <Layout>
		<Header className={'mb-4'} logoSize={24}>
			<FontAwesome5 name="bell" size={26} color="black" />
		</Header>
		<Title size={40} fontFamily={"Silkscreen_700Bold"} text={'Select you music!'}/>
		{/*<FlatList data={data.slice(0,30)} showsHorizontalScrollIndicator={false} horizontal renderItem={({item}) => {*/}
		{/*	return <View className='p-1 rounded-lg mx-1 max-w-[250px]'>*/}
		{/*		<GrayScaleImage width={250} height={260}  source={item.trackMetadata.displayImageUri*/}
		{/*} classNames='rounded-lg mb-2'/>*/}
		{/*	<Title center classNames={'max-w-[230px]'}  numberOfLines={1} text={item.trackMetadata.trackName}/>*/}
		{/*		<Title center classNames={'max-w-[230px]'}  numberOfLines={1} text={"by " + item.trackMetadata.artists.map((item) => item.name).join(',')}/>*/}
		{/*</View>}}/>*/}
	</Layout>
}

export default Home
