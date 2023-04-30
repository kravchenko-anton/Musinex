import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
	name: 'player',
	initialState: [] as Array<{
		PressedSongIndex: number
		data: {
			id: number
			url: string
			title: string
			artist: string
			artwork: string
		}[]
	}>,
	reducers: {
		addToPlayer: (state, { payload }) => {
			state.length = 0
			state.push.apply(state, [
				{ PressedSongIndex: payload.songIndex, data: payload.data }
			])
		}
	}
})
export const { reducer: playerReducer, actions: PlayerAction } = playerSlice
