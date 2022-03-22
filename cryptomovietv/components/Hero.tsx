import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
   <div className="text-center pb-10 font-lato">
      <div className="w-60 mx-auto">
        <Image src={"/img/cryptomovietvdp.png"} width={200} height={200} layout="responsive" />
      </div>
      <h1 className="text-2xl Otext-gray-700 uppercase font-bold">Welcome to Crypto Movie & TV Club</h1>
     <p className="text-gray-500">Produce FILM feature, TELEVISION and GAME.</p>
      <Link href="/contact">
        <button className="O bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">CONTACT US</button>
      </Link>
    </div>
  );
};
export default Hero;