import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-left pb-10 font-lato container mx-auto px-4 mt-24 ">
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="w-11/12">
          <Image
            src={"/img/cryptomovietvdp2.png"}
            width={600}
            height={600}
            layout="responsive"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-primary leading-normal mb-5">
            Tired Of Netflix Telling You What To Watch?
          </h1>
          <p className="text-white mb-10 2xl: pr-20">
            Welcome to the first decentralized movie and TV Show Recommendation
            Engine recommendation run by the the community for the community.
            Now you don’t need to waste time finding the right movie for date
            night.
          </p>
          <div>
            <Link href='/#popular-movie'>
              <button className="bg-gradient-to-r from-secondaryGradientBlue-1 to-secondaryGradientBlue-2 text-white py-4 px-16 rounded text-sm mb-9">
                Start Watching
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
