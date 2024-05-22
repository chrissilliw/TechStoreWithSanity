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
      <div className="relative w-[100%] sm:px-6 lg:max-w-6xl h-[400px] mx-auto flex justify-between rounded-2xl bg-slate-200 gap-10">
        {banner ? (
          <>
            <div className="flex flex-col w-auto my-auto max-sm:pl-4 pl-10 gap-4">
              <div className="flex flex-col gap-1">
                <h4>{banner?.name}</h4>
                <h3 className="font-bold text-4xl">{banner?.midText}</h3>
              </div>
              <h3 className="font-bold lg:text-8xl md:text-7xl sm:text-5xl text-white uppercase">
                {banner?.largeText2}
              </h3>
              <Button className="w-fit">{banner?.buttonText}</Button>
            </div>
            <div className="relative mx-6 top-[-1%] right-0 w-[300px] max-md:w-[250px] max-sm:w-[200px] h-auto">
              <Image
                // src={urlFor(banner?.imageUrl).url()}
                src={banner?.imageUrl}
                fill
                sizes="(max-width: 250px) 100%"
                style={{ objectFit: "contain" }}
                alt="bild"
                loading="lazy"
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default HeaderBanner;
