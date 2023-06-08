import Ball from '@/pages/home/ui/ball'
import { ISong } from '@/services/types/global'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { View } from 'react-native'

interface IBanner {
	songs: ISong[]
}
const Banner: FC<IBanner> = ({ songs }) => {
	return (
		<View className='h-[200px] overflow-hidden w-full bg-primary rounded-3xl mt-8'>
			<LinearGradient
				colors={['#5BC397', '#46BB8A', '#2DA270']}
				className='flex-1 items-center'
			>
				<Title
					fontFamily={'Montserrat_700Bold'}
					color={'white'}
					numberOfLines={2}
					className='absolute text-center top-[15%] w-[50%]'
					translate
				>
					Enjoy the music you love
				</Title>

				<View className='absolute bottom-[-10] flex-row gap-[-10] justify-center items-center'>
					{songs.slice(0, 3).map(({ coverMedium, id }, index) => {
						return (
							<UImage
								key={id}
								width={100}
								height={100}
								style={{
									borderWidth: 2,
									borderColor: getHexCode('white'),
									zIndex: 5 + index
								}}
								className='rounded-xl rotate-12'
								source={coverMedium}
							/>
						)
					})}
				</View>
			</LinearGradient>
			<Ball
				wrapperStyle={{
					left: -100,
					top: -40
				}}
			/>
			<Ball
				wrapperStyle={{
					right: -60,
					bottom: -30
				}}
				width={150}
				height={150}
				gradient={[1, 0.2, 0, 0.4]}
			/>
		</View>
	)
}

export default Banner
