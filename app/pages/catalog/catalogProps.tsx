import { FC, useRef } from 'react'
import { Animated } from 'react-native'
import { ICatalogList, ICatalogRenderTypes, IHeartProps } from '../../types/catalogTypes'
import Layout from '../../ui/layout/layout'
import CatalogBackground from './ui/catalogBackground/catalogBackground'
import CatalogContent from './ui/catalogContent/catalogContent'
import CatalogHeader from './ui/catalogHeader/catalogHeader'

export interface ICatalogProps extends IHeartProps {
	headerImage: string
	headerText: string
	data: ICatalogList[]
	headerCatalogDescription?: string
	contentTypes?: ICatalogRenderTypes
}

const CatalogWithProps: FC<ICatalogProps> = props => {
	const y = useRef(new Animated.Value(0)).current
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				id={props.id}
				type={props.type}
				title={props.headerText}
				rightIcon={'heart'}
				rightIconFunction={() => console.log(1)}
				y={y}
			/>
			<CatalogBackground poster={props.headerImage} y={y} />
			<CatalogContent
				id={props.id}
				type={props.contentTypes ? props.contentTypes : props.type}
				description={props.headerCatalogDescription}
				headerTitle={props.headerText}
				DataList={props.data}
				y={y}
			/>
		</Layout>
	)
}

export default CatalogWithProps
