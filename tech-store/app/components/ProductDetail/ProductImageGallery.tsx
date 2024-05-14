"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

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
    return <div className="w-[100%] h-[400px] bg-sky-700"></div>;
  }

  const handleSmallImageClick = (image: any) => {
    setLargeImage(image);
  };

  return (
    <div className="flex relative w-[100%] gap-4">
      <div className="flex flex-col gap-4">
        {images.map((image: any, idx: any) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg aspect-square bg-gray-100"
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
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
            className="w-full h-auto object-cover object-center rounded-xl p-9 bg-gray-100"
          />
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
