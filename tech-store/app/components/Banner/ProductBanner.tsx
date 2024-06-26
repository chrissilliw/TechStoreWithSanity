// "use client";
import Image from "next/image";
import { IBanner } from "@/app/models/IBanner";
import { Button } from "@/components/ui/button";

interface ProductBannerProps {
  banner?: IBanner;
}

const ProductBanner = ({ banner }: ProductBannerProps) => {
  if (!banner) {
    return null;
  }

  return (
    <>
      <div className="relative flex justify-between w-[100%] sm:px-6 lg:max-w-6xl h-[400px] mx-auto rounded-2xl bg-slate-200 gap-10">
        {banner ? (
          <>
            {/* BANNER TEXT CONTAINER */}
            <div className="flex flex-col w-auto my-auto pl-10 gap-4">
              <div className="flex flex-col gap-1">
                <h4>{banner?.product}</h4>
                <h3 className="font-bold text-4xl">{banner?.midText}</h3>
              </div>
              <h3 className="font-bold text-6xl text-white uppercase">
                {banner?.largeText2}
              </h3>
              <Button className="w-fit">{banner?.buttonText}</Button>
            </div>
            {/* BANNER IMAGE CONTAINER */}
            <div className="relative top-[-1%] right-0 w-[300px] h-auto">
              <Image
                src={banner?.imageUrl}
                fill
                sizes="(max-width: 250px) 100%"
                style={{ objectFit: "contain" }}
                loading="lazy"
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
