import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const SkeletonCard = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[70%]" />
        <Skeleton className="h-4 w-[40%]" />
      </div>
    </div>
  );
};

export default SkeletonCard;
