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
          <div className="relative min-w-[200px] max-w-[300px] bg-gray-100 rounded-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="w-[500px] object-contain rounded-xl mb-4 transition duration-300 ease-in-out hover:scale-[1.05] drop-shadow-md hover:drop-shadow-2xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p>{product.shortName}</p>
            <p className="font-semibold">{product.price} kr</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SalesCard;
