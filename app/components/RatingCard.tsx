"use client";

import React from "react";
import { format } from "date-fns";

import { useContainerWidth } from "../hooks/useContainer";
import { getRatingDisplay } from "../utils/helper";
import { cn } from "../utils/cn";

interface RatingCardProps {
  rating: number;
  vendorName: string;
  productName: string;
  testCount: number;
  lastTestedDate: Date;
}

const RatingCard: React.FC<RatingCardProps> = ({
  rating = 4.6,
  vendorName = "Shanghai Innovy Chemical New Materials",
  productName = "Tesamorelin, CJC-1295, Ipamorelin",
  testCount = 6,
  lastTestedDate = new Date(),
}) => {
  const { grade, label, bgColor } = getRatingDisplay(rating);
  const { ref, width } = useContainerWidth();
  const isWide = width >= 370;

  return (
    <div
      ref={ref}
      className="min-w-0 flex-1 text-base rounded-lg border border-finnick-gray-light bg-finnick-gray-lightest p-4 text-finnick-black"
    >
      <div className="flex items-center justify-between h-4">
        <div className="flex-1 trim-text font-bold uppercase tracking-1">
          Finnrick Rating™
        </div>
        <button
          className="w-5 h-5 font-semibold text-sm flex items-center justify-center rounded-full border border-finnick-gray text-finnick-gray"
          title="More info"
        >
          ?
        </button>
      </div>
      <hr className="my-4 border-finnick-black" />
      <div
        className={cn(
          `flex items-start gap-4`,
          isWide ? "flex-row" : "flex-col"
        )}
      >
        <div className="flex items-center">
          <div
            className={cn(
              `min-w-[160px] font-semibold flex items-center rounded-full text-finnick-white`,
              bgColor
            )}
          >
            <span className="flex items-center justify-center text-[40px] rounded-full border border-finnick-gray-lightest w-[64px] h-[64px]">
              {grade}
            </span>
            <span className="pl-[14px] pr-[27px]">{label}</span>
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-4">
          <div className="text-xl font-semibold trim-text text-gray-900 ">
            {vendorName}
          </div>
          <div className="text-xl font-semibold trim-text">{productName}</div>
          <div className="text-sm trim-text">{`Tested ${testCount} Samples`}</div>
          <p className="text-sm trim-text text-finnick-gray-medium">
            {`Last test ${format(lastTestedDate, "dd MMM yyyy")}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
