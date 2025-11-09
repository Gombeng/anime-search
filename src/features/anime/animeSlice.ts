import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { Anime } from '../../type/anime';

const baseUrl = 'https://api.jikan.moe/v4/anime'

export const fetchAnime = createAsyncThunk(
  'anime/fetchAnime',
  async ({ query, page }: { query: string; page: number }) => {
    const res = await axios.get(`${baseUrl}?limit=10`, {
      params: { q: query, page }
    })
    return res.data
  }
)

export const fetchAnimeDetail = createAsyncThunk(
  'anime/fetchAnimeDetail',
  async (id: string) => {
    const res = await axios.get(`${baseUrl}/${id}`)
    return res.data.data
  }
)

const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    list: [],
    detail: null as Anime | null,
    loading: false,
    error: null as string | null,
    pagination: { currentPage: 1, lastPage: 1 },
    query: "",
    page: 1,
  },
  reducers: {
    clearAnimeList: (state) => {
      state.list = [];
      state.error = null;
      state.pagination = { currentPage: 1, lastPage: 1 };
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnime.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAnime.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload.data
        state.pagination.lastPage = action.payload.pagination?.last_visible_page || 1
      })
      .addCase(fetchAnime.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch anime'
      })
      .addCase(fetchAnimeDetail.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAnimeDetail.fulfilled, (state, action) => {
        state.loading = false
        state.detail = action.payload
      })
      .addCase(fetchAnimeDetail.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch anime detail'
      })
  }
})

export const { clearAnimeList, setPage, setQuery } = animeSlice.actions;
export default animeSlice.reducer
