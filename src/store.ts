import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movies/movieSlice";
import themeReducer from "./features/theme/themeSlice";
import UpcomingMoviesReducer from "./features/movies/UpcomingMoviesSlice";
import popularMoviesReducer from "./features/movies/popularMoviesSlice";

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        movies: movieReducer,
        popularMovies: popularMoviesReducer,
        upcomingMovies: UpcomingMoviesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;