import type { NextPage } from "next";
import axios from "axios";

import { server } from "../config";

import Hero from "../components/Hero";
import PopularMovie from '../components/PopularMovie';

const Home: NextPage = ({movies}:any) => {
  return (
    <div>
      <Hero />
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
