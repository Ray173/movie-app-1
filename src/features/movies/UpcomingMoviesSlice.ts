import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUpcomingMovies = createAsyncThunk("movies/getUpcomingMovies", async (data, thunkApi) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
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


const UpcomingMoviesSlice = createSlice ({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUpcomingMovies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUpcomingMovies.fulfilled, (state, action: PayloadAction<{ results: any[] }>) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getUpcomingMovies.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
})

export default UpcomingMoviesSlice.reducer;