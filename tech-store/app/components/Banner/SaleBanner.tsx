"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IBanner } from "@/app/models/IBanner";
import { Button } from "@/components/ui/button";
import { getSalesBanner } from "@/services/sanityFetch";

const SaleBanner = () => {
  const [banner, setBanner] = useState<IBanner>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerData = await getSalesBanner();
        setBanner(bannerData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative w-[100%] sm:px-6 lg:max-w-6xl h-[400px] my-14 mx-auto max-sm:py-20 flex max-sm:flex-col max-sm:h-auto rounded-2xl text-white bg-[#F02D34] gap-2">
        {banner ? (
          <>
            <div className="flex flex-col justify-center px-8 gap-4">
              {/* <div className="grow"></div> */}
              <div className="flex flex-col gap-4 ">
                <p>{banner.discount}</p>
                <h3 className="font-bold text-6xl w-min uppercase">
                  {banner.largeText2}
                </h3>
                <p>{banner.smallText}</p>
              </div>
            </div>
            <div className="relative top-[-1%] right-0 w-[60%] aspect-auto h-auto mx-0 max-md:hidden">
              <Image
                src={banner.imageUrl}
                fill
                sizes="(max-width: 400px) 100%"
                style={{ objectFit: "contain" }}
                loading="lazy"
                priority={false}
                alt="bild"
              />
            </div>
            <div className="flex flex-col w-auto my-auto pl-10 gap-4">
              <p className="text-medium">{banner.product}</p>
              <h3 className="font-bold text-4xl">{banner.largeText1}</h3>
              <p className="text-xs font-light">{banner.description}</p>
              <Button className="w-fit px-8 rounded-lg">
                {banner.buttonText}
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default SaleBanner;
