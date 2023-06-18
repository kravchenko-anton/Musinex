import FavoriteList from '@/pages/favorites/ui/favoriteList'
import FavoriteHeader from '@/pages/favorites/ui/header/favoriteHeader'
import Layout from '@/ui/layout/layout'

const Favorites = () => {
	return (
		<Layout>
			<FavoriteHeader />
			<FavoriteList />
		</Layout>
	)
}

export default Favorites
