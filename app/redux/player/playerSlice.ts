import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
	name: 'player',
	initialState: [],
	reducers: {
		addToPlayer: (state, { payload }) => {
			state.length = 0                  // Clear contents
			state.push.apply(state, [{ PressedSongIndex: payload.songIndex, data: payload.data }] as never)  // Append new contents
		}
		
	}
})
export const { reducer: playerReducer, actions } = playerSlice
