import Image from "next/image";
import Link from "next/link";

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

interface MOVIECARD{
  key:id,
  movie:MOVIE,
}


const MovieCard = ({ movie }: MOVIECARD) => {
  return (
      <Link href={`/movie/${movie.id}`}>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={500*1.2}
        height={750*1.2}
        className="rounded-t-md"
      />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-1">{movie.title}</div>
        <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
      </div>
    </div>
      </Link>
    
  );
};

export default MovieCard;
