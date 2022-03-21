import Head from "next/head";

interface METAPROPS{
    keywords: string,
    description: string,
    title: string,
}

const Meta = ({ keywords, description, title }:METAPROPS) => {
  return (
    <Head>
      <meta name="viewport" content="width=Ddevice-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Crypto Movie & TV Club",
  keywords: "movie app, fre movies, popular movies",
  description: "Welcome to the cinemas. This is a growing collection of maximum 100 unique NFTs dedicated to movie and tv references.",
};

export default Meta;
