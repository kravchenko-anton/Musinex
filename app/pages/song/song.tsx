import React from 'react'
import { useTypedRoute } from '../../hook/useTypedRoute'
import { useDownloadTrackMp3Query, useGetTrackByIdQuery, useGetTrackMp3ByNameQuery } from '../../redux/api/song/song'
import NavigateHeader from '../../ui/header/navigateHeader'
import Icon from '../../ui/icon/defaultIcon/Icon'
import UImage from '../../ui/image/Image'
import Layout from '../../ui/Layout/Layout'
import FullScreenLoader from '../../ui/Loader/FullScreenLoader'
import Title from '../../ui/title/title'

const Song = () => {
	const {params} = useTypedRoute<'Song'>()
	const {data: songData} = useGetTrackByIdQuery(params.id)
	const {data: songLyrics} = useGetTrackMp3ByNameQuery(songData?.title as string)
	
		const songName = songLyrics?.result.find((item) => item.user.username === songData?.artist.name ||	item.title === songData?.title)?.url
	const {data: mp3} = useDownloadTrackMp3Query(songName	as string)
	console.log(mp3)
	if (!songData || !mp3) return <FullScreenLoader/>
	
	return <Layout>
		<NavigateHeader logoSize={30} className='mb-4'/>
		<UImage source={songData.album.cover_big} width={200} height={200}/>
		<Title text={songData.title} size={30}/>
		<Icon	name='play' size={30}/>
	</Layout>
}

export default Song
