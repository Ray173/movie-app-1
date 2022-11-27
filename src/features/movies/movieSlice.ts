import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovie = createAsyncThunk("movies/getMovies", async (data, thunkApi) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        return await response.json();
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }
})

interface MovieState {
    loading: boolean;
    error: null | string;
    data: null | { results: any[] };
}

const initialState: MovieState= {
    loading: false,
    error: null,
    data: null
}

// Slice


const movieSlice = createSlice ({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovie.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMovie.fulfilled, (state, action: PayloadAction<{ results: any[] }>) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getMovie.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
})

export default movieSlice.reducer;