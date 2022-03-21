import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-700">
        <div className="font-bold text-neutral-100 p-4 max-w-7x1 mx-auto container
        tracking-widest font-lato">
          <Link href="/">
            <a className="text-base md: text-2x1">Crypto <span className="text-red-600">Movie & TV Club</span>
            </a>
          </Link>
        </div>
      </nav>
    )
  };
  export default Navbar;