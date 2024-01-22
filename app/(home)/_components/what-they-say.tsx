import Image from 'next/image';

import userImage from '@/public/userImage.jpg';
import fullStarIcon from '@/public/icn bx-star.svg';
import halfStarIcon from '@/public/icn bxs-star.svg';

// Images>>>>>>>>>>>>
import Image1 from '@/public/x1.png';
import Image2 from '@/public/x2.png';
import Image3 from '@/public/x3.png';
import Image4 from '@/public/x4.png';
import Image5 from '@/public/x5.png';
import Image6 from '@/public/x6.png';
import Image7 from '@/public/x7.png';
import Image8 from '@/public/x8.png';
import Image9 from '@/public/x9.png';

const WhatTheySay = () => {
  return (
    <div className="flex items-center gap-[4rem] justify-between w-[80%] mx-auto mt-[8rem]">
      <div className="flex flex-col items-center justify-center w-[50%]">
        <h1 className="text-[24px] leading-[32px] font-[700]">
          What they say about us
        </h1>
        <div className="mt-[3rem] flex items-center flex-col">
          <Image
            src={userImage}
            alt="user Image "
            width={100}
            height={100}
            className="object-cover"
          />
          <span className="flex gap-x-2 mt-[10px]">
            <Image
              src={halfStarIcon}
              width={20}
              height={20}
              alt="Full star Icon"
            />
            <Image
              src={halfStarIcon}
              width={20}
              height={20}
              alt="Full star Icon"
            />
            <Image
              src={halfStarIcon}
              width={20}
              height={20}
              alt="Full star Icon"
            />
            <Image
              src={halfStarIcon}
              width={20}
              height={20}
              alt="Full star Icon"
            />
            <Image
              src={fullStarIcon}
              width={20}
              height={20}
              alt="Full star Icon"
            />
          </span>
          <p className=" text-center py-[13px] text-[14px] font-[400] text-[#737373]">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <span className="flex flex-col items-center justify-center  mt-[1rem]">
            <h1 className="text-[#23A6F0] text-[14px] font-[700] leading-[24px]">
              Regina Miles
            </h1>
            <h2 className="text-[14px] font-[700] leading-[24px]">Designer</h2>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center w-[50%] gap-[16px]">
        <Image
          src={Image1}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
        <Image
          src={Image2}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
        <Image
          src={Image3}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
        <Image
          src={Image4}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
        <Image
          src={Image5}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
        <Image
          src={Image6}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
        <Image
          src={Image7}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
        <Image
          src={Image8}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
        <Image
          src={Image9}
          width={143}
          height={143}
          alt="random photos"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WhatTheySay;
