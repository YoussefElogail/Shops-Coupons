export default function UserRegisterSkeleton() {
    return (
      <div className="bg-white p-6 border-gray-300 mb-4">
        <div className="h-6 bg-gray-300 rounded-md animate-pulse mb-4 w-1/3"></div>
        {/* Email input skeleton */}
        <div className="my-4">
          <div className="h-12 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
        {/* Phone input skeleton */}
        <div className="my-4">
          <div className="h-12 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
        {/* Button skeleton */}
        <div className="flex justify-center">
          <div className="bg-gray-300 animate-pulse rounded-full h-12 w-48"></div>
        </div>
      </div>
    );
  }
  