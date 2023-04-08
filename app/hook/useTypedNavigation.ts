import { NavigationProp, useNavigation } from '@react-navigation/native'
import { TypeRootStackParamList } from '../types/navigation/navigationTypes'

export const useTypedNavigation = () =>
	useNavigation<NavigationProp<TypeRootStackParamList>>()
