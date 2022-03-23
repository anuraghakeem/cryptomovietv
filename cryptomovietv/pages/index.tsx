import type { NextPage } from "next";
import axios from "axios";

import { server } from "../config";

import Hero from "../components/Hero";
import PopularMovie from '../components/PopularMovie';
import NftSlider from "../components/NftSlider";

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
  vote_average: number,
}
interface MOVIESCOMP{
  movies:[
    MOVIE
  ]
}

const Home: NextPage<MOVIESCOMP> = ({movies}) => {
  // console.log('movies', movies)
  return (
    <div>
      <Hero />
      <NftSlider />
      <PopularMovie movies={movies} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;
  return {
    props: { movies },
  };
}

export default Home;
