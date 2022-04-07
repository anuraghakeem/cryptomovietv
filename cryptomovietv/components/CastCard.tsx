import Image from "next/image";

const CastCard = ({ person }: any) => {
  return (
    <div className="bg-gradient-to-r from-cardGradientBlue-1 to-cardGradientBlue-2 border-solid border-2 border-primary shadow-sm rounded-md cursor-pointer hover:shadow-lg hover:shadow-primary/50 hover:bg-primary transition ease-in-out group" >
      <Image
        src={`https://image.tmdb.org/t/p/w276_and_h350_face/${person.profile_path}`}
        width={276}
        height={350}
        className="rounded-t-md"
      />
      <div className="px-6 py-2">
        <div className="text-lato text-primary font-bold text-xl mb-1 group-hover:text-white">
          {person.name}
        </div>
        <p className="ext-lato font-normal text-white text-base mb-1">
        {"as "}{person.character}
        </p>
      </div>
    </div>
  );
};

export default CastCard;
