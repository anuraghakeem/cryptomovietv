import RecommendationCard from "./RecommendationCard";


interface RECOMMENDATION{
  poster_path: string;
  id: number;
  vote_average: number;
  title: string;
  release_date: Date;
}
interface MOVIERECOMMENDATIONCONTEXT{
  recommendations: [RECOMMENDATION]
}

const MovieRecommendation = ({recommendations}:MOVIERECOMMENDATIONCONTEXT) => {
  // console.log('recommendation: ', recommendations)
  return (
    <div className="mt-16">
      <h1 className="font-bold text-4xl my-2 text-primary ">You Will Also Love ❤</h1>
      <div className="mt-6 grid gap-2 grid-cols-2 sm:grid-cols-2 sm:gap-9 md:grid-cols-3 md:gap-9 lg:gap-9 lg:grid-cols-5">
        {!!recommendations &&
          recommendations
            .slice(0, 5)
            .map((recommendation: RECOMMENDATION) => <RecommendationCard recommendation={recommendation} key={recommendation.id}/>)}
      </div>
    </div>
  );
};

export default MovieRecommendation;
