import Image from "next/image";
import Link from "next/link";

type id = number;

interface MOVIE {
  id: id;
  title: string;
  backdrop_path: string;
  overview: string;
  genres: [
    {
      name: string;
    }
  ];
  release_date: Date;
  poster_path: string;
  vote_average: number;
}

interface MOVIECARD {
  key: id;
  movie: MOVIE;
}

const MovieCard = ({ movie }: MOVIECARD) => {
  // console.log('movie 1',movie)
  const rating = movie.vote_average * 10;

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-gradient-to-r from-cardGradientBlue-1 to-cardGradientBlue-2 border-solid border-2 border-primary shadow-sm rounded-md cursor-pointer hover:shadow-lg hover:shadow-primary/50 hover:bg-primary transition ease-in-out group">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={500 * 1.2}
          height={750 * 1.2}
          className="rounded-t-md"
        />
        <div className="px-6 py-2">
          <p className="text-lato font-normal text-white text-base mb-1">
            {rating}%
          </p>
          <div className="text-lato text-primary font-bold text-xl mb-1 group-hover:text-white">
            {movie.title}
          </div>
          <p className="text-lato font-normal text-white text-base mb-1">
            {movie.release_date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
