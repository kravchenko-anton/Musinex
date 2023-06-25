import useRepeatIcon from '@/pages/song/ui/repeat-icon/useRepeatIcon'
import { color } from '@/utils/color'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const RepeatIcon = () => {
const { repeatMode, changeRepeatMode } = useRepeatIcon()
	return (
		<MaterialCommunityIcons
			name={repeatMode}
			className='p-[5px] self-center justify-center'
			onPress={changeRepeatMode}
			size={30}
			color={color.silver}
		/>
	)
}

export default RepeatIcon
