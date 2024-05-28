import { getCategories } from "@/services/sanityFetch";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryGrid = async () => {
  const categories = await getCategories();
  return (
    <>
      <div className="mt-10 mx-auto w-[100%]">
        <h2 className="mb-5 text-center">Våra Kategorier</h2>
        <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-between">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryGrid;
