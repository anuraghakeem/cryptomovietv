import axios from "axios";
import { server } from "../../../config";
import Meta from "../../../components/Meta";
import MovieDetails from "../../../components/MovieDetails";
import Cast from "../../../components/Cast";
import MovieRecommendation from "../../../components/MovieRecommendations";
import Reviews from "../../../components/Reviews";
import VideoList from "../../../components/VideoList";

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
  cast: any;
  recommendations: any;
  reviews: any;
  videos: any;
  trailer: any;
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
  videos,
  trailer,
}: MOVIECOMP) => {
  // console.log('movie',movie)
  // console.log('cast',cast)
  // console.log("reviews", reviews);
  // console.log('watchProviders',watchProviders)
  // const trailer= videos.results.find((video:any)=> video.type=='Trailer' )
  // console.log('videos:',videos)
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
      <Reviews reviews={reviews} />
      <VideoList />
      <MovieRecommendation recommendations={recommendations} />
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
  const cast: any = castRes.data;

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

  const videos = videosRes.data;
  const trailer = videos.results.find((video:any)=> video.type=='Trailer' )

  const watchProvidersRes = await axios(
    `${server}/${id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  let watchProviders: any = [];

  if (
    watchProvidersRes.data.results.IN &&
    watchProvidersRes.data.results.IN.flatrate
  ) {
    watchProviders = watchProvidersRes.data.results.IN.flatrate;
  }

  if (watchProviders.length > 0) {
    return {
      props: { movie, cast, recommendations, reviews, videos, trailer, watchProviders },
    };
  }

  return {
    props: { movie, cast, recommendations, reviews, videos, trailer },
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
