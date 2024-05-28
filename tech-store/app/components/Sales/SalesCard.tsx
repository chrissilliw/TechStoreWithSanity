import { IProduct } from "@/app/models/IProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SalesCardProps {
  product: IProduct;
}

const SalesCard = ({ product }: SalesCardProps) => {
  console.log(product.categoryName);
  return (
    <>
      <Link href={`/product/horlurar/${product.slug}`}>
        <div className="">
          <div className="relative w-full min-h-[200px] max-sm:min-h-[150px]  max-md:min-h-[250px] bg-gray-100 rounded-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              // width={300}
              loading="lazy"
              priority={false}
              // height={300}
              fill
              sizes="(min-width: 150px) 100%"
              className="w-[500px] object-contain rounded-xl mb-4 transition duration-300 ease-in-out hover:scale-[1.05] drop-shadow-md hover:drop-shadow-2xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col mt-2 gap-y-1">
            <p>{product.shortName}</p>
            <p className="font-semibold">{product.price} kr</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SalesCard;
