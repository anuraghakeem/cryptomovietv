import Image from "next/image";

const Cast = ({cast}:any) => {
    return(
        <div className="mt-16">
        <h1 className="font-bold text-4xl my-2 text-primary ">Cast</h1>
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 sm:gap-9 md:grid-cols-3 md:gap-9 lg:gap-9 lg:grid-cols-5">
        <div className="bg-gradient-to-r from-cardGradientBlue-1 to-cardGradientBlue-2 border-solid border-2 border-primary shadow-sm rounded-md cursor-pointer">
      <Image
        src={`https://image.tmdb.org/t/p/w276_and_h350_face/${cast.cast[0].profile_path}`}
        width={276}
        height={350}
        className="rounded-t-md"
      />
      <div className="px-6 py-2">
        <div className="text-lato text-primary font-bold text-xl mb-1">Tom Holland</div>
        <p className="ext-lato font-normal text-white text-base mb-1">Peter Parker / Spiderman</p>
      </div>
    </div>
        </div>
        </div>
    )
}

export default Cast;