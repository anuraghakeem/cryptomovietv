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
  vote_average:number,
}
interface MOVIESCOMP{
  movies:[
    MOVIE
  ]
}

const PopularMovie = ({ movies }:MOVIESCOMP) => {
    return (
      <div className="container max-w-7x1 mx-auto pb-10 px-4 font-lato">
        <h1 className="text-primary mt-8 mb-9 text-4xl font-semibold text-center">What Our Communnity <span className="text-white">❤</span></h1>
        <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      </div>
    );
  };
  export default PopularMovie;