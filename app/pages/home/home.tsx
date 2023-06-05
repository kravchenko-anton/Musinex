import Ball from '@/pages/home/ui/ball'
import { genreServices } from '@/services/genre.services'
import { searchServices } from '@/services/search.services'
import MusicCart from '@/ui/flatList/flatlistItem/musicCart'
import UFlatList from '@/ui/flatList/uFlatList'
import Header from '@/ui/header/header'
import UImage from '@/ui/image/image'
import ScrollLayout from '@/ui/layout/scrollLayout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import Title from '@/ui/title/title'
import { getServerFileUrl } from '@/utils/apiConfig'
import { useQuery } from '@tanstack/react-query'
import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'

const Home = () => {
	const {data: chart} = useQuery(['chart'], searchServices.getCatalogue)
	const {data: genre} = useQuery(['genre'], genreServices.getAll)
	if (!chart || !genre) return <FullScreenLoader/>
	return (
		<ScrollLayout>
<Header secondIcon={{
	name: 'mail',
	onPress: () => console.log('mail')
}} firstIcon={{
	name: 'search',
	onPress: () => console.log('search')
}}/>
			<View className='h-[200px] overflow-hidden w-full bg-primary rounded-3xl mt-8'>
			<LinearGradient colors={["#5BC397", "#46BB8A", "#2DA270" ]}
			                className='flex-1 items-center' >
						<Title fontFamily={'Montserrat_700Bold'} color={'white'} numberOfLines={2}	className='absolute text-center top-[15%] w-[50%]' translate>
							Enjoy the music you love
						</Title>
				
				<View className='absolute bottom-[-10] flex-row gap-[-10] justify-center items-center'>
					{[1, 2,3].map((_, index) => {
							return <UImage	width={100} height={100} style={{
								borderWidth: 2,
								borderColor: 'white',
								zIndex: 5 + index,
							}} className=' border-8 border-white rounded-xl rotate-12' source={chart.songs[index].coverMedium} />
						})}
				</View>
			</LinearGradient>
			<Ball wrapperStyle={{
				left: -100,
				top: -40,
			}}
			/>
			<Ball wrapperStyle={{
				right: -60,
				bottom: -30,
			}}  width={150} height={150} gradient={[1, 0.2, 0, 0.4]} />
			</View>
			
			<UFlatList data={genre} horizontal wrapClassNames={'mt-4 mr-[-8px]'} headerText='Genre' renderItem={
				({item}) => {
					return <View className='mr-3 w-[100px]'>
					<View className='bg-lightBlack p-4 rounded-3xl'>
						<UImage width={70} height={70} source={getServerFileUrl(item.icon)} />
					</View>
						<Title className='text-center mt-2' numberOfLines={1} translate>{item.name}</Title>
					</View>
					}
			}/>
			
			<UFlatList data={chart.songs} horizontal wrapClassNames={'mt-4 mr-[-8px]'} headerText='Trending Song' renderItem={
				({item}) => {
					return <MusicCart ImageClassNames={'rounded-2xl'} WrapClassNames={'mr-3'} image={{
						url: item.coverMedium,
						width: 130,
						height: 130,
					}} name={item.title} artists={item.artists[0].name}
			/>} }/>
			<UFlatList data={chart.artists} horizontal wrapClassNames={'mt-4 mr-[-8px]'} headerText='Rated Artists' renderItem={
				({item}) => {
					return <MusicCart
						ImageClassNames={'rounded-full'}
						WrapClassNames={'mr-3'}
						image={{
							url: item.pictureMedium,
							width: 80,
							height: 80,
						}}
						name={item.name}
						/>
				}}
				/>
		</ScrollLayout>
	)
}

export default Home
