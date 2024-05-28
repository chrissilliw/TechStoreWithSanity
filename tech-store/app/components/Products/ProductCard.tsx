import { IProduct } from "@/app/models/IProduct";
import { formatPrice } from "@/app/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  formatPrice;
  return (
    <>
      <Link
        href={`/product/${product.categorySlug}/${product.slug}`}
        className="cursor-pointer"
      >
        <div className="">
          <div className="relative max-w-[300px] bg-gray-100 rounded-xl">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              loading="lazy"
              className="w-[500px] object-contain mb-4 transition duration-300 ease-in-out hover:scale-[1.05] drop-shadow-md hovver:drop-shadow-2xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p>{product.name}</p>
            <p className="font-semibold">{formatPrice(product.price)}:-</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
