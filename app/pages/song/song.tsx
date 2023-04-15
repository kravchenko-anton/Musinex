import React from 'react'
import { useTypedRoute } from '../../hook/useTypedRoute'
import { useGetTrackByIdQuery, useGetTrackMp3ByNameQuery } from '../../redux/api/song/song'
import UImage from '../../ui/image/Image'
import Layout from '../../ui/Layout/Layout'
import FullScreenLoader from '../../ui/Loader/FullScreenLoader'
import Title from '../../ui/title/title'

const Song = () => {
	const {params} = useTypedRoute<'Song'>()
	const {data: songData} = useGetTrackByIdQuery(params.id)
	if (!songData) return <FullScreenLoader/>
	const {data: songLyrics} = useGetTrackMp3ByNameQuery(songData.title)
	console.log(songLyrics?.result.find((item) => item.user.username === songData.artist.name &&	item.title === songData.title))
	return <Layout>
		<UImage source={songData.album.cover_big} width={200} height={200}/>
		<Title text={songData.title} size={30}/>
	</Layout>
}

export default Song
