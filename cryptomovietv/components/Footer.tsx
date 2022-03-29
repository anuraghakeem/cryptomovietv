import Image from "next/image";

const Footer = () => { 
    return(
      <div className="text-center mt-14 items-center justify-center">
        <div className="w-12 mx-auto">
          <Image src={"/img/twitter.svg"} width={68} height={56} layout="responsive" />
        </div>
        <h1 className="text-primary mt-4 mb-6 text-4xl font-semibold text-center">Don’t Miss Another Update</h1>
        <a href="https://twitter.com/cryptomovietv" target='_blank'>
        <button className="bg-gradient-to-r from-secondaryGradientBlue-1 to-secondaryGradientBlue-2 text-white py-4 px-16 rounded text-sm mb-9 hover:shadow-lg hover:shadow-primary/50 hover:bg-primary transition ease-in-out">Follow</button>
        </a>
        <p className="text-xl text-white mt-16 bg-gradient-to-r from-secondaryGradientBlue-1 to-secondaryGradientBlue-2 py-3">© All Right Reserved.</p>
      </div>
      
    );
  };
  export default Footer;