import Image from "next/image";
import React, { useState } from "react";
import VideoModal from "./VideoModal";

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
  tagline: string;
  vote_average: number;
}

interface WATCHPROVIDER {
  logo_path?: string;
}

interface MOVIECOMP {
  movie: MOVIE;
  watchProviders?: [WATCHPROVIDER];
  trailer?: any;
}

interface CONTEXT {
  params: {
    id: string;
  };
}

const MovieDetails = ({ movie, watchProviders, trailer }: MOVIECOMP) => {
  const rating = movie.vote_average * 10;
  const [isOpen, setOpen] = useState(false);
  console.log('trailer2',trailer)

  return (
    <>
      {isOpen && (
        <>
          <div
            className={`overlay fixed z-10 h-screen w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black`}
          ></div>

          <div
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}
          >
            <button
              className={`float-right bg-primary text-white py-4 px-5 rounded-full text-sm hover:shadow-lg hover:shadow-primary/50 hover:bg-primary transition ease-in-out`}
              onClick={() => setOpen(false)}
            >
              X
            </button>
            <VideoModal video={trailer} />
          </div>
        </>
      )}

      <div className="">
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            width={1000 * 1.136}
            height={600 * 1.136}
            layout="responsive"
            className="rounded-md"
          />
          {
            !!trailer &&
            <button
            className={`bg-primary text-black py-4 px-16 rounded text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 hover:shadow-lg hover:shadow-primary/50 hover:bg-primary transition ease-in-out`}
            onClick={() => setOpen(true)}
          >
            Play Trailer
          </button>
          }
          
        </div>
        <p className="font-semibold mt-4">{movie.tagline}</p>
        <h1 className="font-bold text-4xl my-2 text-primary ">{movie.title}</h1>
        <p className="mt-4">{movie.overview}</p>
        <p className="mt-5 font-bold">
          Genres:{" "}
          <span className=" text-primary">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </span>
        </p>
        <h2 className="font-semibold text-3xl my-2 mt-4">
          Score: <span className="text-primary">{rating}%</span>
        </h2>
        {watchProviders && (
          <>
            <p className="mt-8 font-bold mb-4">Now Streaming In India On:</p>
            {watchProviders.map((watchProvider: any) => {
              return (
                <Image
                  src={`https://www.themoviedb.org/t/p/original${watchProvider.logo_path}`}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
