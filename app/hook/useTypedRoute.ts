import { RouteProp, useRoute } from '@react-navigation/native'
import { TypeRootStackParamList } from '../types/navigation/navigationTypes'

export const useTypedRoute = <N extends keyof TypeRootStackParamList>() =>
	useRoute<RouteProp<TypeRootStackParamList, N>>()
