import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const imgList = [
  {
    link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/8910813703193131282285174557713039803139594424390869365843404559249324376074",
    img: "/img/frankstoeknife.png",
  },
  {
    link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/8910813703193131282285174557713039803139594424390869365843404560348836003845",
    img: "/img/michaelsmug.png",
  },
  {
    link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/8910813703193131282285174557713039803139594424390869365843404558149812748298",
    img: "/img/jacksnft.png",
  },
];

const NftSlider = () => {
  return (
    <div className="pb-10 font-lato container mx-auto px-4 items-center justify-center text-center">
      <h1 className="text-4xl font-semibold text-primary leading-normal mb-5 text-center">
        Join Our NFT Community
      </h1>
      <a href="https://opensea.io/collection/cryptomovieclub" target='_blank'>
        <button className="bg-gradient-to-r from-secondaryGradientBlue-1 to-secondaryGradientBlue-2 text-white py-4 px-16 rounded text-sm mb-9">
          View Collection
        </button>
      </a>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="slider-dots"
        itemClass=""
        minimumTouchDrag={80}
        focusOnSelect={true}
      >
        {imgList.map((img) => {
          return (
            <div className="mx-9 mb-9">
              <a href={img.link} target='_blank'>
                <Image
                  src={img.img}
                  width={800}
                  height={800}
                  //   layout="responsive"
                  className="rounded-xl cursor-pointer"
                />
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NftSlider;
