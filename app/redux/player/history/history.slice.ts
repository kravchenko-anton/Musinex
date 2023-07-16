import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
	name: 'history',
	initialState: [] as number[],
	reducers: {
		addToHistory: (state, { payload }: PayloadAction<number[]>) => {
			state.unshift(...payload)
		},
		clearHistory: state => {
			state.length = 0
		}
	}
})
export const { reducer: historyReducer, actions: HistoryAction } = playerSlice
