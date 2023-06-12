import { useAuth } from '@/hook/useAuth'
import { userServices } from '@/services/userServices'
import { useQuery } from '@tanstack/react-query'


export const useFavorites = () => {
	const { user: userAuth } = useAuth()

	const { isLoading, data: user } = useQuery(
		['favorite movies'],
		() => userServices.getProfile(),
		{
			enabled: !!userAuth
		}
	)
	return {
		isLoading,
		user
	}
}
