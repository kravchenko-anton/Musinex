import { TypeRootStackParamList } from '@/navigation/types/navigation.types'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export const useTypedNavigation = () =>
	useNavigation<NavigationProp<TypeRootStackParamList>>()
