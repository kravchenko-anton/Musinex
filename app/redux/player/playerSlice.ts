import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
	name: 'player',
	initialState: [],
	reducers: {
		addToPlayer: (state, { payload }) => {
			
			// @ts-ignore
			if (state.some(r => r.title === payload.title)) return
			state.push(payload as never)
			
		}
		
	}
})
export const { reducer: playerReducer, actions } = playerSlice
