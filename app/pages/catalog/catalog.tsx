import React, { useRef } from 'react'

import { Animated } from 'react-native'
import { useTypedRoute } from '../../hook/useTypedRoute'
import Layout from '../../ui/Layout/Layout'
import CatalogBackground from './ui/catalogBackground/catalogBackground'
import CatalogContent from './ui/CatalogContent/catalogContent'
import CatalogHeader from './ui/catalogHeader/catalogHeader'


const Catalog = () => {
	const {params} = useTypedRoute<"catalog">()
	const y = useRef(new Animated.Value(0)).current
	console.log(params)
	return <Layout className={'p-0'}>
			<CatalogHeader title={'Top Song'} rightIcon={'heart'} rightIconFunction={() => console.log(1)} y={y}/>
			<CatalogBackground poster={params.headerImage} y={y}/>
		<CatalogContent musicList={params.data} y={y} />
	</Layout>
}

export default Catalog
