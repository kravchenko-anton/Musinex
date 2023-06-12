import { useFavorites } from '@/pages/favorites/useFavorites'
import { userServices } from '@/services/userServices'
import { IHeartProps } from '@/types/catalogTypes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useHeart = ({ id, type }: IHeartProps) => {
	const [isSmashed, setIsSmashed] = useState(false)
	
	const { user } = useFavorites()
	const favoriteType =
		type === "song"
			? "favoritesSong"
			: type === "album"
				? "favoritesAlbum"
				: type === "artist"
					? "favoritesArtist"
					: "favoritePlayLists";
	useEffect(() => {
		if (!user) return
		
		const isFavorite = user[favoriteType].some(f => f.id === id)
		
		if (isSmashed !== isFavorite) setIsSmashed(isFavorite)
	}, [user, isSmashed, id])
	const queryClient = useQueryClient()
	const { mutate: toggleFavorite } = useMutation(
		['update favorites'],
		() => userServices.toggleFavorite({
			type,
			id
		}),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['toggle favorites'])
			}
		}
	)
	
	return {
		toggleFavorite,
		isSmashed
	}
}
