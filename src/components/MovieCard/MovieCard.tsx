import { FC } from "react";

interface MovieCardProps {
  poster_path: string;
  overview: string;
  title: string;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { poster_path, overview, title } = props;

  return (
    <div className="mb-3 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 duration-200 hover:animate-pulse">
      <div className="w-full">
        <img
          src={poster_path}
          alt={title}
          className="rounded-t-lg h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview.slice(0, 80)}...
        </p>
      </div>
    </div>
  );
};

export default MovieCard;