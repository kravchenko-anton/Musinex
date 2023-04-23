import { Text, View } from 'react-native'
import Icon from '../icon/defaultIcon/Icon'
import UImage from '../image/Image'

const SongPlayer = () => {
	return <View
		className='bg-[#115131] rounded-lg absolute self-center  bottom-[60px] h-[60px] w-5/6'>
		<View className='flex flex-row justify-between items-center h-full'>
			<View className='flex flex-row items-center ml-3 mr-3'>
				<UImage
					source={
						'https://i.ytimg.com/vi/kxgj5af8zg4/maxresdefault.jpg'
					} width={50} height={50} borderRadius={5}
				/>
				<View className='flex flex-col ml-2'>
					<Text className='text-white font-bold'>Song Title</Text>
					<Text className='text-white'>Artist Name</Text>
				</View>
			</View>
			<View className='flex-row'>
				<Icon name='heart' />
				<Icon name='play' />
			</View>
		
		</View>
	</View>
}

export default SongPlayer