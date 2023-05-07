import { useEffect, useState } from 'react'
import { Image } from 'react-native'

export const useImageLoading = (source: string) => {
	const [imageLoad, setImageLoad] = useState(false)
	useEffect(() => {
		async function load() {
			if (!Image.queryCache) return
			await Image.queryCache([source])
				.then(results => {
					if (results[source]) {
						setImageLoad(true)
					} else {
						const imageLoader = Image.prefetch(source)
						imageLoader
							.then(() => setImageLoad(true))
							.catch(() => {
								setImageLoad(false)
							})
					}
				})
				.catch(() => {
					console.error('error')
					setImageLoad(false)
				})
		}

		load()
	}, [imageLoad])
	return imageLoad
}
