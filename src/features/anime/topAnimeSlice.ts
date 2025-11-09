import { createSlice, createAsyncThunk, type PayloadAction, } from "@reduxjs/toolkit";
import axios from "axios";
import type { Anime } from "../../type/anime";


interface TopAnimeState {
    anime: Anime | null;
    loading: boolean;
    error: string | null;
}

const initialState: TopAnimeState = {
    anime: null,
    loading: false,
    error: null,
};

export const fetchTopAnime = createAsyncThunk("anime/fetchTop", async () => {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime?limit=3");
    return response.data.data as Anime;
});

const topAnimeSlice = createSlice({
    name: "topAnime",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopAnime.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopAnime.fulfilled, (state, action: PayloadAction<Anime>) => {
                state.loading = false;
                state.anime = action.payload;
            })
            .addCase(fetchTopAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch top anime";
            });
    },
});

export default topAnimeSlice.reducer;
