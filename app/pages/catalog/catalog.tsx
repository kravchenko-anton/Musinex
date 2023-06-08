import { useTypedRoute } from '@/hook/useTypedRoute'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import Layout from '@/ui/layout/layout'
import { useRef } from 'react'
import { Animated } from 'react-native'

const Catalog = () => {
	const { params } = useTypedRoute<'catalog'>()
	const y = useRef(new Animated.Value(0)).current
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				type={params.type}
				id={params.id}
				title={params.headerText}
				rightIcon={'heart'}
				rightIconFunction={() => console.log(1)}
				y={y}
			/>
			<CatalogBackground poster={params.headerImage} y={y} />
			<CatalogContent
				id={params.id}
				type={params.type}
				description={params.headerDescription}
				headerTitle={params.headerText}
				DataList={params.data}
				y={y}
			/>
		</Layout>
	)
}

export default Catalog
