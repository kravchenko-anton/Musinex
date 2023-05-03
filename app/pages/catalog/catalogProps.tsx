import { FC, useRef } from 'react'
import { Animated } from 'react-native'
import { ICatalogList, ICatalogRenderTypes } from '../../types/catalogTypes'
import Layout from '../../ui/layout/layout'
import CatalogBackground from './ui/catalogBackground/catalogBackground'
import CatalogContent from './ui/catalogContent/catalogContent'
import CatalogHeader from './ui/catalogHeader/catalogHeader'

export interface ICatalogProps {
	headerImage: string
	headerText: string
	type: ICatalogRenderTypes
	data: ICatalogList[]
	headerCatalogDescription?: string
}

const CatalogWithProps: FC<ICatalogProps> = props => {
	const y = useRef(new Animated.Value(0)).current
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				title={props.headerText}
				rightIcon={'heart'}
				rightIconFunction={() => console.log(1)}
				y={y}
			/>
			<CatalogBackground poster={props.headerImage} y={y} />
			<CatalogContent
				type={props.type}
				description={props.headerCatalogDescription}
				headerTitle={props.headerText}
				DataList={props.data}
				y={y}
			/>
		</Layout>
	)
}

export default CatalogWithProps
