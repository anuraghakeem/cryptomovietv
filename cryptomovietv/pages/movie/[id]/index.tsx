import axios from "axios";
import { server } from "../../../config";
import Meta from "../../../components/Meta";
import MovieDetails from "../../../components/MovieDetails";
import Cast from "../../../components/Cast";
import MovieRecommendation from "../../../components/MovieRecommendations";
import Reviews from "../../../components/Reviews";
import VideoList from "../../../components/VideoList";
import { useState } from "react";

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

interface PERSON {
  profile_path: string;
  id: number;
  name: string;
  character: string;
}
interface CAST {
  cast: [
    PERSON
  ]
}

interface RECOMMENDATION{
  poster_path: string;
  id: number;
  vote_average: number;
  title: string;
  release_date: Date;
}

interface REVIEWS{
  author: string;
  content: string;
  id: number;
}

interface VIDEO{
  site: string;
  type: string;
  key: string;
}

interface MOVIECOMP {
  movie: MOVIE;
  watchProviders?: WATCHPROVIDER[];
  cast: CAST;
  recommendations?: [RECOMMENDATION];
  reviews?: [REVIEWS];
  filteredVideos?: [VIDEO];
  trailer?: VIDEO;
}

interface CONTEXT {
  params: {
    id: string;
  };
}

const Movie = ({
  movie,
  watchProviders,
  cast,
  recommendations,
  reviews,
  filteredVideos,
  trailer,
}: MOVIECOMP) => {
  // console.log('movie',movie)
  // console.log('cast',cast)
  // console.log("reviews", reviews);
  // console.log('watchProviders',watchProviders)
  // console.log('filteredVideos:', filteredVideos)
  // console.log('trailer:',trailer)
  return (
    <div className="container max-w-6xl mx-auto pt-6 text-white px-2">
      <Meta title={movie.title} />
      {watchProviders ? (
        <MovieDetails movie={movie} watchProviders={watchProviders} trailer={trailer} />
      ) : (
        <MovieDetails movie={movie} trailer={trailer} />
      )}
      <Cast cast={cast} />
      {!!reviews && reviews.length>0 && <Reviews reviews={reviews} />}
      {!!filteredVideos && filteredVideos.length>0 && <VideoList videos={filteredVideos} />}
      {!!recommendations && recommendations.length>0 && <MovieRecommendation recommendations={recommendations} />}
      
    </div>
  );
};

export async function getStaticProps(context: CONTEXT) {
  const { id } = context.params;
  const movieRes = await axios(
    `${server}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const movie: MOVIE = movieRes.data;
  const castRes = await axios(
    `${server}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const cast: CAST = castRes.data;

  const recommendationRes = await axios(
    `${server}/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const recommendations = recommendationRes.data.results;

  const reviewsRes = await axios(
    `${server}/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const reviews = reviewsRes.data.results;

  const videosRes = await axios(
    `${server}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const videos = videosRes.data.results;
  const trailer = videos.find((video:VIDEO)=> video.type=='Trailer' )
  const filteredVideos = videos.filter( (video:VIDEO) => video.type!='Trailer' && video.site=='YouTube' ).slice(0,6);

  const watchProvidersRes = await axios(
    `${server}/${id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  let watchProviders:WATCHPROVIDER[] = [];
  // const [watchProviders, updateWatchProviders] = useState<WATCHPROVIDER[]>([])

  if (
    watchProvidersRes.data.results.IN &&
    watchProvidersRes.data.results.IN.flatrate
  ) {
    watchProviders = watchProvidersRes.data.results.IN.flatrate;
    // updateWatchProviders(watchProvidersRes.data.results.IN.flatrate)
  }

  let props:MOVIECOMP = {movie, cast, recommendations, reviews}
  
  if(watchProviders.length > 0){
    props = {...props, watchProviders}
  }

  if(videos.length> 0){
    props = {...props, filteredVideos, trailer}
  }
  return {
    props,
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
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
