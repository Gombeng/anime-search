import { configureStore } from '@reduxjs/toolkit'
import animeReducer from '../features/anime/animeSlice'
import topAnimeReducer from '../features/anime/topAnimeSlice'

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    topAnime: topAnimeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
