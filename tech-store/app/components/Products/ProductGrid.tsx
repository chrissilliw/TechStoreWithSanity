import { IProduct } from "@/app/models/IProduct";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: IProduct[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <>
      <div className="mt-10 mx-auto">
        <div className="w-full grid grid-cols-5 gap-4">
          {products.map((product) => (
            <div className="" key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
