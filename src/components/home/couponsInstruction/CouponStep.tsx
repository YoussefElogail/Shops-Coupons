import Image from "next/image";

// CouponStep Component
export default function CouponStep({ stepImg, stepTitle, stepText }: { stepImg: string, stepTitle: string, stepText: string }) {
    return (
      <div className="bg-white p-6 border border-gray-300 min-h-[630px] lg:col-span-4 col-span-12 rounded-md">
        <Image
          src={stepImg}
          width={279}
          height={140}
          alt="coupon instruction step"
        />
        <strong className="text-lg block pt-4">
          {stepTitle}
        </strong>
        <p className="text-gray-600 text-base py-4 leading-relaxed">
          {stepText}
        </p>
      </div>
    );
  }