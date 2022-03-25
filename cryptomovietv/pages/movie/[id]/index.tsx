import axios from "axios";
import { server } from "../../../config";
import Meta from "../../../components/Meta";
import MovieDetails from '../../../components/MovieDetails'
import Cast from '../../../components/Cast'

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
  cast: any,
}

interface CONTEXT{
  params:{
    id: string
  }
}

const Movie = ({ movie,  watchProviders, cast }: MOVIECOMP ) => {
  console.log('movie',movie)
  console.log('cast',cast)
  // console.log('watchProviders',watchProviders)
  return (
    <div className="container max-w-6xl mx-auto pt-6 text-white">
      <Meta title={movie.title} />
      {
        watchProviders?
        <MovieDetails movie = {movie} watchProviders = {watchProviders} />
      :
        <MovieDetails movie = {movie} />
      }
      <Cast cast={cast} />
    </div>
  );
};

export async function getStaticProps(context: CONTEXT) {
  const { id } = context.params;
  const movieRes = await axios(
    `${server}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const movie: MOVIE = movieRes.data;

  const watchProvidersRes = await axios(
    `${server}/${id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  let watchProviders: any = [];

  const castRes = await axios(
    `${server}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const cast: any = castRes.data;

  if(watchProvidersRes.data.results.IN && watchProvidersRes.data.results.IN.flatrate){
    watchProviders = watchProvidersRes.data.results.IN.flatrate;
  } 
  if (watchProviders.length > 0){
    return {
      props: { movie, cast, watchProviders },
    };
  }
  return {
    props: { movie, cast },
    };  
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;
  const ids = movies.map((movie: MOVIE) => movie.id);
  const paths = ids.map((id: id) => ({ params: { id: id.toString() } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default Movie;
