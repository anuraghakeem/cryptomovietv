import CastCard from "./CastCard";

const Cast = ({ cast }: any) => {
  return (
    <div className="mt-16">
      <h1 className="font-bold text-4xl my-2 text-primary ">Cast</h1>
      <div className="mt-6 grid gap-2 grid-cols-2 sm:grid-cols-2 sm:gap-9 md:grid-cols-3 md:gap-9 lg:gap-9 lg:grid-cols-5">
        {!!cast &&
          cast.cast
            .slice(0, 5)
            .map((person: any) => <CastCard person={person} />)}
      </div>
    </div>
  );
};

export default Cast;
