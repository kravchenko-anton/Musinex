import { createSlice } from '@reduxjs/toolkit'


export const playerSlice = createSlice({
	name: 'player',
	initialState: [] as Array<{
		PressedSongIndex: number, data: {
			url: string,
			title: string,
			artwork: string,
			artist: string,
			id: number,
			duration: number
		}
	}>,
	reducers: {
		addToPlayer: (state, { payload }) => {
			state.length = 0
			state.push.apply(state, [{ PressedSongIndex: payload.songIndex, data: payload.data }])
		}
		
	}
})
export const { reducer: playerReducer, actions } = playerSlice
