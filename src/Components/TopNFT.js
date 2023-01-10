import React from "react";
import OwlCarousel from "react-owl-carousel";
import Heading from "./Heading";

const TopNfts = [
  {
    id: "1",
    name: " funky_town_1",
    price: "ETH 0.01",
    image: "/Images/funky1.png",
  },
  {
    id: "2",
    name: " funky_town_en_espanol_",
    price: "ETH 0.01",
    image: "/Images/espanol.png",
  },
  {
    id: "3",
    name: "funky_town_2",
    price: "ETH 0.01",
    image: "/Images/funky2.png",
  },
  {
    id: "4",
    name: "neon_town",
    price: "ETH 0.01",
    image: "/Images/neon.png",
  },
  {
    id: "5",
    name: "funky_town_3",
    price: "ETH 0.01",
    image: "/Images/funky3.png",
  },
  {
    id: "6",
    name: "funky_town_4",
    price: "ETH 0.01",
    image: "/Images/funky4.png",
  },
  {
    id: "7",
    name: "Lloyd",
    price: "ETH 0.01",
    image: "/Images/lloyd.png",
  },
  {
    id: "8",
    name: "funky_town_5",
    price: "ETH 0.01",
    image: "/Images/funky5.png",
  },
];

function TopNFT() {
  return (
    <div className="my-12">
      <Heading title={"TOP NFTs"} />
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        autoplaySpeed={2000}
        smartSpeed={1000}
        autoplayTimeout={3000}
        responsive={{
          0: {
            margin: 2,
            items: 1,
          },
          640: {
            items: 2,
            margin: 10,
          },
          1024: {
            items: 3,
            margin: 20,
          },
          1536: {
            items: 4,
            margin: 30,
          },
        }}
      >
        {TopNfts.map((t) => (
          <div
            key={t.id}
            className="top-hover relative border-8 border-subLightMain pb-5 bg-subMain flex-colo"
          >
            <div className="relative w-full">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-64 object-cover"
              />
              <div className="top-hidden absolute transitione top-1 bottom-1 left-1 right-1 bg-overlay flex-colo">
                <h2 className="font-semibold text-whites">{t.name}</h2>
                <div className="mt-2 text-lg font-black tracking-wider text-whites">
                  {t.price}
                </div>
              </div>
            </div>

            <button className="px-6 text-whites tracking-wide py-3 mt-5 bt-linear font-bold text-sm rounded">
              Read More
            </button>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TopNFT;
