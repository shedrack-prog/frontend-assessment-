import { featuredPost } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

import clockIcon from '@/public/clockIcon.svg';
import chartIcon from '@/public/chartIcon.svg';
import arrowIcon from '@/public/arrowIcon.svg';

const FeaturedPost = () => {
  return (
    <div className="flex items-center justify-center mt-[5rem]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[14px] font-[700] leading-[24px]  text-[#23A6F0]">
          Practice Advice
        </h3>
        <h2 className="text-[40px] py-[10px] font-[700] leading-[50px] text-[#252B42]">
          Featured Posts
        </h2>
        <div className="flex flex-wrap mt-[4rem] gap-6">
          {featuredPost.map((item) => (
            <div className="w-[320px] shadow-md items-start flex flex-col    ">
              <div className="w-full h-[300px]">
                <Image
                  src={item.imageUrl}
                  alt="post images"
                  width={100}
                  height={100}
                  className="w-full  h-full object-cover "
                />
              </div>
              <div className="px-4">
                <span className="flex items-center justify-between w-[50%] mt-[1rem] text-[12px] font-[400] ">
                  <Link href={'#'} className="text-[#8EC2F2]">
                    Google
                  </Link>
                  <Link href={'#'} className="text-[#737373]">
                    Trending
                  </Link>
                  <Link href={'#'} className="text-[#737373]">
                    New
                  </Link>
                </span>
                <h1 className="text-[20px] font-[400] text-[#252B42] leading-[30px] py-2 ">
                  {item.title}
                </h1>
                <p className="text-[14px] leading-[20px] text-[#737373]">
                  {item.text}
                </p>
              </div>
              <div className="px-4 flex justify-between mt-[1rem] w-full">
                <span className="flex gap-x-1 items-center ">
                  <Image
                    src={clockIcon}
                    alt="clock Icon"
                    width={20}
                    height={20}
                  />
                  <i className="text-[12px] text-[#737373] leading-[16px] font-[400]">
                    22 April 2022
                  </i>
                </span>
                <span className="flex gap-x-1 items-center ">
                  <Image
                    src={chartIcon}
                    alt="chart Icon"
                    width={18}
                    height={18}
                  />
                  <i className="text-[12px] text-[#737373] leading-[16px] font-[400]">
                    10 Comments
                  </i>
                </span>
              </div>
              <span
                className="flex gap-x-2 mt-[1rem] px-4
              "
              >
                <p className="text-[14px] font-[700] text-[#737373] leading-[24px]">
                  Learn More
                </p>
                <Image
                  src={arrowIcon}
                  width={10}
                  height={10}
                  alt="Arrow icon"
                  className=""
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
