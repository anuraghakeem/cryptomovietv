import MovieCard from "./MovieCard";

type id = number
interface MOVIE{
  id: id,
  title: string,
  backdrop_path: string,
  overview: string,
  genres: [{
    name: string
  }],
  release_date: Date,
  poster_path: string,
}
interface MOVIESCOMP{
  movies:[
    MOVIE
  ]
}

const PopularMovie = ({ movies }:MOVIESCOMP) => {
    return (
      <div className="bg-gray-700 container max-w-7x1 mx-auto pb-10 px-4">
        <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      </div>
    );
  };
  export default PopularMovie;