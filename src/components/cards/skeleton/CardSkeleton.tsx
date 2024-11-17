// app/CouponSkeleton.tsx
import React from "react";

export default function CardSkeleton() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-24 bg-gray-300 rounded-lg mb-4"></div>
      
      {/* Text Skeleton */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

      {/* Status Button Skeleton */}
      <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>

      {/* Button Skeleton */}
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  );
}
