"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IBanner } from "@/app/models/IBanner";
import { Button } from "@/components/ui/button";
import { getHeroBanner } from "@/services/sanityFetch";

interface ProductBannerProps {
  banner?: IBanner;
}

const ProductBanner = ({ banner }: ProductBannerProps) => {
  if (!banner) {
    return null;
  }

  return (
    <>
      <div className="relative flex justify-between w-[100%] max-w-2xl sm:px-6 lg:max-w-6xl h-[400px] mx-auto rounded-2xl bg-slate-200 gap-10">
        {banner ? (
          <>
            {/* <div className="flex justify-between"> */}
            <div className="flex flex-col w-auto my-auto pl-10 gap-4">
              <div className="flex flex-col gap-1">
                <h4>{banner?.name}</h4>
                <h3 className="font-bold text-4xl">{banner?.midText}</h3>
              </div>
              <h3 className="font-bold text-6xl text-white uppercase">
                {banner?.largeText2}
              </h3>
              <Button className="w-fit">{banner?.buttonText}</Button>
            </div>
            <div className="relative top-[-1%] right-0 w-[300px] h-auto">
              <Image
                // src={urlFor(banner?.imageUrl).url()}
                src={banner?.imageUrl}
                fill
                objectFit="contain"
                alt="bild"
              />
            </div>
            {/* </div> */}
          </>
        ) : null}
      </div>
    </>
  );
};

export default ProductBanner;
