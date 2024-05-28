"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IBanner } from "@/app/models/IBanner";
import { Button } from "@/components/ui/button";
import { getHeroBanner } from "@/services/sanityFetch";

const HeaderBanner = () => {
  const [banner, setBanner] = useState<IBanner>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerData = await getHeroBanner();
        setBanner(bannerData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative w-[100%] lg:max-w-6xl min-h-[400px] mx-auto flex max-sm:flex-col max-sm:py-10 justify-around max-sm:items-center rounded-xl bg-slate-200 gap-10">
        {banner ? (
          <>
            <div className="flex flex-col max-sm:items-center sm:hidden">
              <div className="flex flex-col gap-1">
                <h4>{banner?.smallText}</h4>
                <h3 className="font-bold text-4xl">{banner?.midText}</h3>
              </div>
            </div>
            {/* BANNER TEXT CONTAINER */}
            <div className="flex flex-col w-auto my-auto max-sm:pl-4 gap-4 max-sm:hidden">
              <div className="flex flex-col gap-1">
                <h4>{banner?.smallText}</h4>
                <h3 className="font-bold text-4xl">{banner?.midText}</h3>
              </div>
              <h3 className="font-bold lg:text-8xl md:text-7xl sm:text-5xl text-white uppercase">
                {banner?.largeText2}
              </h3>
              <Button className="w-fit">{banner?.buttonText}</Button>
            </div>
            {/***************/}
            {/* BANNER IMAGE CONTAINER */}
            <div className="relative top-[-1%] right-0 max-sm:px-6 w-[300px] max-sm:h-[400px] max-sm:w-[90%] h-auto flex max-sm:items-center">
              <Image
                src={banner?.imageUrl}
                fill
                sizes="(max-width: 250px) 100%"
                style={{ objectFit: "contain" }}
                alt="bild"
                loading="lazy"
              />
            </div>
            {/***************/}
            <div className="sm:hidden">
              <h3 className="font-bold lg:text-8xl md:text-7xl sm:text-5xl text-white uppercase"></h3>
              <Button className="w-fit">{banner?.buttonText}</Button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default HeaderBanner;
