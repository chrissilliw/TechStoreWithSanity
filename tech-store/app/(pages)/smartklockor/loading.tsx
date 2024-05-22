import SkeletonBanner from "@/app/components/Skeleton/SkeletonBanner";
import SkeletonCard from "@/app/components/Skeleton/SkeletonCard";
import React from "react";

const loading = () => {
  return (
    <>
      <SkeletonBanner />

      <div className="grid grid-cols-5 gap-4">
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </>
  );
};

export default loading;
