import { createSlice } from '@reduxjs/toolkit'


export const playerSlice = createSlice({
		name: 'player',
		initialState: [] as Array<{
			PressedSongIndex: number, data: {
				id: number,
				title: string,
				artist: string,
				artwork: string,
			}[]
		}>,
		reducers: {
			addToPlayer: (state, { payload }) => {
				state.length = 0
				state.push.apply(state, [{ PressedSongIndex: payload.songIndex, data: payload.data }])
			}, skipToNext: (state) => {
				console.log(state[0].PressedSongIndex, state[0].PressedSongIndex + 1)
				state[0].PressedSongIndex = state[0].PressedSongIndex + 1
			}, skipToPrevious: (state) => {
				console.log(state[0].PressedSongIndex, state[0].PressedSongIndex - 1)
				
				state[0].PressedSongIndex = state[0].PressedSongIndex - 1
			}
		}
	}
)
export const { reducer: playerReducer, actions } = playerSlice
