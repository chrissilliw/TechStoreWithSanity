import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProduct = () => {
  return (
    <>
      <div className="flex gap-9">
        <div className="flex w-[800px] h-auto">
          {/* <ProductImageGallery images={product?.images} /> */}
          <div className="flex flex-col gap-3">
            {"abcd".split("").map((i) => (
              <Skeleton className="rounded-lg aspect-square" />
            ))}
          </div>
          <Skeleton className="w-[300px] aspect-ratio rounded-xl" />
        </div>
        <div className="flex flex-col max-w-[400px] gap-4">
          <Skeleton className="h-4 w-[80px]" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-6 w-[95%]" />
            <Skeleton className="h-6 w-[75%]" />
          </div>
          <Skeleton className="h-5 w-[200px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[40%]" />
          <Skeleton className="h-10 w-[200px]" />

          <div className="flex items-center gap-1">
            <Skeleton className="w-[80px] h-[20px] rounded-md" />
            <Skeleton className="w-[80px] h-[20px] rounded-md" />
            <Skeleton className="w-[80px] h-[20px] rounded-md" />
          </div>

          <div className="flex gap-3">
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
            <Skeleton className="w-[80px] h-[20px] rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonProduct;
