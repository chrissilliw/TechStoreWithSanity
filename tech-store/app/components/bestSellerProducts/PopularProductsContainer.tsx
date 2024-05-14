import React from "react";
import PopularProductsGrid from "./PopularProductsGrid";

const PopularProductsContainer = () => {
  return (
    <>
      <div className="mt-10 flex flex-col ">
        <h2 className="text-center">Super deals!</h2>
        <div className="">
          <PopularProductsGrid />
        </div>
      </div>
    </>
  );
};

export default PopularProductsContainer;
