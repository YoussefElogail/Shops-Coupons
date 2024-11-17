"use client";
import React, { useCallback } from "react";
import { Clipboard } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
type Props = {
  code: string;
};

const CouponBoxText: React.FC<Props> = ({ code }) => {
  const t = useTranslations("card");
  const { toast } = useToast();

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);

    toast({
      title: t("success"),
      description: t("codeCopied"),
      className: "bg-green-700 text-white text-white text-lg",
    });
  }, [code, t, toast]);

  return (
    <div className="flex items-center rounded-[3px] border border-dashed border-gray-300 bg-[#3092493f] p-4 mt-4 mx-auto h-3 w-full relative">
      <label htmlFor="discount_coupon_code" className="sr-only">
        {t("discountCouponCode")}
      </label>
      <textarea
        id="discount_coupon_code"
        name="discount_coupon_code"
        className="text-[#292a2a] border-none leading-[30px]  translate-y-1/4 mx-auto resize-none outline-none overflow-hidden bg-transparent text-center font-bold select-none p-0 max-w-full"
        readOnly
        value={code}
        onClick={handleCopy}
        aria-label={t("discountCouponCode")}
      />

      {/* Tooltip Structure from shadcn/ui */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={handleCopy}
              aria-label={t("clickToCopy")}
            >
              <Clipboard className="text-gray-500" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("clickToCopy")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default React.memo(CouponBoxText);
