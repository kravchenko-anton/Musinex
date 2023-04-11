import React from 'react'
import { useForm } from 'react-hook-form'

import { ScrollView } from 'react-native'
import Field from '../../ui/Flield/Field'
import Layout from '../../ui/Layout/Layout'

const Search = () => {
	const {control, watch} = useForm()
	// const {data} = useSearchQuery("", {
	// 	skip: !watch('Search'),
	// 	refetchOnMountOrArgChange: 2000
	// })
	return <Layout>
	<ScrollView>
		<Field control={control} name={'Search'} />
	</ScrollView>
	</Layout>
}

export default Search
