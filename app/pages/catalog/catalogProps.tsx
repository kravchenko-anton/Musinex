import { FC, useRef } from 'react'
import { Animated } from 'react-native'
import Layout from '../../ui/Layout/Layout'
import CatalogBackground from './ui/catalogBackground/catalogBackground'
import CatalogContent from './ui/CatalogContent/catalogContent'
import CatalogHeader from './ui/catalogHeader/catalogHeader'

export interface ICatalogProps {
	headerImage: string
	headerText: string
	data: {
		title: string
		image: string
		artist: string
		id: number
	}[]
	headerCatalogDescription?: string
}

const CatalogWithProps: FC<ICatalogProps> = (props) => {
	const y = useRef(new Animated.Value(0)).current
	return <Layout className={'p-0'}>
		<CatalogHeader title={props.headerText} rightIcon={'heart'} rightIconFunction={() => console.log(1)} y={y} />
		<CatalogBackground poster={props.headerImage} y={y} />
		<CatalogContent description={props.headerCatalogDescription} headerTitle={props.headerText} musicList={props.data}
		                y={y} />
	</Layout>
}

export default CatalogWithProps
