"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductImageGalleryProps {
  images?: any;
}

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  const [largeImage, setLargeImage] = useState(
    images && images.length > 0 ? images[0] : null
  );

  useEffect(() => {
    if (images && images.length > 0) {
      setLargeImage(images[0]);
    }
  }, [images]);

  if (!images) {
    return (
      <div className="flex w-[800px] h-auto gap-4">
        {/* <ProductImageGallery images={product?.images} /> */}
        <div className="flex flex-col gap-3">
          {"abcd".split("").map((i, index) => (
            <Skeleton
              className="w-[180px] h-auto rounded-lg aspect-square"
              key={index}
            />
          ))}
        </div>
        <Skeleton className="w-[500px] h-[500px] aspect-ratio rounded-xl" />
      </div>
    );
  }

  const handleSmallImageClick = (image: any) => {
    setLargeImage(image);
  };

  return (
    <div className="flex relative w-[100%] max-sm:flex-col gap-4 max-lg:gap-2">
      <div className="flex flex-col max-sm:flex-row gap-4 max-lg:gap-2 max-sm:order-last">
        {images.map((image: any, idx: any) => (
          <div
            key={idx}
            className="overflow-hidden flex max-lg:p-2 rounded-lg aspect-square bg-gray-100"
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              priority={false}
              loading="lazy"
              className="h-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      {largeImage && (
        <div className="relative overflow-hidden aspect-square ">
          <Image
            src={urlFor(largeImage).url()}
            alt="photo"
            width={500}
            height={500}
            priority={false}
            loading="lazy"
            className="w-full h-auto object-cover object-center rounded-xl p-9 bg-gray-100"
          />
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
