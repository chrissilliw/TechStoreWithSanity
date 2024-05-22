import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { ICategory } from "@/app/models/ICategory";
import React from "react";
import Link from "next/link";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <>
      <Link href="">
        <div className="group w-full flex justify-center items-center relative overflow-hidden">
          <div className="absolute flex flex-col justify-end items-center gap-5 h-full w-full pb-10 rounded-2xl z-10 bg-gray-900 bg-opacity-45 transition duration-1000 group-hover:bg-opacity-25">
            <h3 className="text-3xl text-white font-semibold">
              {category.name}
            </h3>
            <button className="bg-white px-4 py-2 uppercase">
              Gå till alla produkter
            </button>
          </div>
          <div className="relative w-full h-[450px]">
            <Image
              src={category.imageUrl}
              alt={category.name}
              fill
              sizes="(min-width: 200px) 100%"
              loading="lazy"
              className="h-full object-cover rounded-2xl transition duration-1000 ease group-hover:scale-[1.15] "
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
