import Image from "next/image"
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
    tagline: string,
    vote_average:number,
  
  }
  
  interface WATCHPROVIDER{
    logo_path?: string
  }
  
  interface MOVIECOMP{
    movie: MOVIE,
    watchProviders?: [
      WATCHPROVIDER
    ],
  }
  
  interface CONTEXT{
    params:{
      id: string
    }
  }

const MovieDetails = ({movie, watchProviders}: MOVIECOMP)  =>{
  const rating = movie.vote_average*10;
    return(
        <div className="">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={600}
          className="rounded-md"
        />
        <p className="font-semibold mt-4">{movie.tagline}</p>
        <h1 className="font-bold text-4xl my-2 text-primary ">{movie.title}</h1>
        <p className="mt-4">{movie.overview}</p>
        <p className="mt-5 font-bold">
          Genres:{" "}
          <span className=" text-primary">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </span>
        </p>
        <h2 className="font-semibold text-3xl my-2 mt-4">Score: <span className="text-primary">{rating}%</span></h2>
        {watchProviders? 
        <>
        <p className="mt-8 font-bold mb-4">Now Streaming In India On:</p>
        {watchProviders.map((watchProvider:any) =>{
          return(
            <Image
            src={`https://www.themoviedb.org/t/p/original${watchProvider.logo_path}`}
            width={50}
            height={50}
            className="rounded-md"
          />
          )
        })}
        </>
        :""}
      </div> 
    )
}

export default MovieDetails