import { useEffect } from 'react';
import Header from './components/header/Header';
import { useAppDispatch, useAppSelector } from './Hooks/storeHook';
import { getMovie } from "./features/movies/movieSlice"
import { getPopularMovies } from './features/movies/popularMoviesSlice';
import { getUpcomingMovies } from './features/movies/UpcomingMoviesSlice';
import MovieCard from './components/MovieCard/MovieCard';
import PopularMovies from './components/popularMovies/PopularMovies';
import UpcomingMovies from './components/upcomingMovies/UpcomingMovies';
import './App.css';

function App() {
  const { darkTheme, movies, popularMovies, upcomingMovies } = useAppSelector((state) => state)
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getMovie())
    dispatch(getPopularMovies())
    dispatch(getUpcomingMovies())
  },[dispatch])

  return (
    <div className={darkTheme ? "dark": ""}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header />
        <div className="flex justify-center items-center my-5">
          <h1 className="text font-medium text-lg tracking-wider">Trending</h1>
        </div>
        <div className="carousel">
          {
            movies.data && movies.data.results.map((movie) => {
              const { id, title, overview, poster_path } = movie;
              return (
                <MovieCard 
                  key={id} 
                  title={title} 
                  overview={overview}
                  poster_path={"https://image.tmdb.org/t/p/original" + poster_path}
                />
              )
            })
          }
        </div>

        <div className="flex justify-center items-center my-5">
          <h1 className="text font-medium text-lg tracking-wider">Popular</h1>
        </div>
        <div className="carousel">
          {
            popularMovies.data && popularMovies.data.results.map((movie) => {
              const { id, title, overview, poster_path } = movie;
              return (
                <PopularMovies 
                  key={id} 
                  title={title} 
                  overview={overview}
                  poster_path={"https://image.tmdb.org/t/p/original" + poster_path}
                />
              )
            })
          }
        </div>

        <div className="flex justify-center items-center my-5">
          <h1 className="text font-medium text-lg tracking-wider">Upcoming</h1>
        </div>
        <div className="carousel">
          {
            upcomingMovies.data && upcomingMovies.data.results.map((movie) => {
              const { id, title, overview, poster_path } = movie;
              return (
                <UpcomingMovies 
                  key={id} 
                  title={title} 
                  overview={overview}
                  poster_path={"https://image.tmdb.org/t/p/original" + poster_path}
                />
              )
            })
          }
        </div>

      </div>
    </div>
  );
}

export default App;
