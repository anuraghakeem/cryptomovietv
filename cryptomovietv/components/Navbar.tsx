import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-secondaryGradientBlue-1 to-secondaryGradientBlue-2">
      <div
        className="text-neutral-100 p-4 max-w-7x1 mx-auto container
        tracking-widest font-lato flex flex-row justify-center items-center text-center w-34 gap-4"
      >
        <a
          className="text-base md: text-2x1 text-center hover:text-primary"
          href="https://opensea.io/collection/cryptomovieclub"
          target="_blank"
        >
          Opensea
        </a>
        <Link href="/">
          <div className="w-16 flex-initial text-center cursor-pointer">
            <Image
              src={"/img/navLogo.png"}
              width={16}
              height={16}
              layout="responsive"
            />
          </div>
        </Link>

        <a
          className="text-base md: text-2x1 text-center hover:text-primary"
          href="https://twitter.com/cryptomovietv"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
