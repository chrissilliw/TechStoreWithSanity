import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonBanner = () => {
  return (
    <>
      <div className="flex flex-cols justify-between w-full h-[400px] mb-10 rounded-2xl border bg-slate-300">
        {/* <Skeleton className="flex flex-cols w-full h-[400px]  rounded-2xl"> */}
        <div className="flex flex-col w-auto my-auto pl-10 gap-5">
          <div className="space-y-5 pl-10">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-10 w-[100px]" />
            <Skeleton className="h-16 w-[250px]" />
            <Skeleton className="pl-10 h-[40px] w-[80px]" />
          </div>
        </div>
        <div className="relative top-[-1%] right-0 w-[300px] h-auto"></div>
        {/* </Skeleton> */}
      </div>
      {/* <Skeleton className="w-full h-[400px] rounded-xl mb-10" /> */}
    </>
  );
};

export default SkeletonBanner;
