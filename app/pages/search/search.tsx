import React from 'react'

import { Text } from 'react-native'
import { useSearchSongQuery } from '../../redux/api/music/musicApi'

const Search = () => {
	const {data} = useSearchSongQuery('подружка')
console.log(data)
	return (
		<Text>
		
		</Text>
	)
}

export default Search
