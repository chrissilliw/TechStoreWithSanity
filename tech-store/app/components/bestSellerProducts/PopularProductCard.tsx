"use client";

import { urlFor } from "@/app/lib/sanity";
import { IProduct } from "@/app/models/IProduct";
import Link from "next/link";
// import Image from "next/image";

interface PopularProductCardProps {
  product: IProduct;
  productImage: string[];
}

const PopularProductCard = ({
  product,
  productImage,
}: PopularProductCardProps) => {
  const product_image: string = productImage[0];

  const testImage: string = urlFor(product.imageUrl[0]).url();

  console.log(`/horlurar/${product.slug}`);
  return (
    <>
      <div className=" w-full">
        {product ? (
          <>
            <Link href={`horlurar/${product.slug}`}>
              <div className="w-full flex flex-col gap-4">
                <div className="relative w-full h-[200px] bg-slate-400 rounded-xl">
                  {/* <Image
                  src={{ testImage }}
                  layout="fill"
                  objectFit="cotain"
                  alt="bild"
                /> */}
                </div>
                <div className="w-full flex flex-col gap-3">
                  <h4 className="text-xs text-red-400 font-semibold">
                    {product.brand}
                  </h4>
                  <h4>{product.name}</h4>
                  <p className="font-semibold">{product.price} kr</p>
                </div>
              </div>
            </Link>
          </>
        ) : null}
      </div>
    </>
  );
};

export default PopularProductCard;
