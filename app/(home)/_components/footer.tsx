import Image from 'next/image';

import instagramIcon from '@/public/blue-instagram.svg';
import facebookIcon from '@/public/blue-facebook.svg';
import twitterIcon from '@/public/blue-twitter.svg';
import { footerLinks } from '@/data';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-[#E6E6E6] flex items-center text-center  justify-between py-[20px] pb-[30px] shadow-sm h-[80px] px-[8rem] pt-[4rem]">
        <h1 className="text-[24px] leading-[32px] font-[700] text-[#252B42]">
          Bandage
        </h1>
        <div className="flex items-center justify-center gap-x-5">
          <Image
            src={facebookIcon}
            width={20}
            height={16}
            alt="Instagram icon"
          />
          <Image
            src={instagramIcon}
            width={20}
            height={16}
            alt="Instagram icon"
          />
          <Image
            src={twitterIcon}
            width={20}
            height={16}
            alt="Instagram icon"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-[8rem] mt-[5rem]">
        {footerLinks.map((item, index) => (
          <div key={index}>
            <h1 className="text-[16px] leading-[24px] font-[700] text-[#252B42]">
              {item.headerText}
            </h1>
            <div className="flex flex-col items-start">
              {item.links?.map((lnk, index) => (
                <Link
                  key={index}
                  href={'#'}
                  className="text-[14px] font-[700] leading-[24px] text-[#737373]"
                >
                  {lnk}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center">
          <h1>Get In Touch</h1>
          <span className="flex w-[320px]  h-[50px]">
            <input
              type="text"
              placeholder="Your Email"
              className="flex px-3 w-[100%] bg-gray-100 focus:border-none"
            />
            <button className="px-[22.5px] py-[15px] h-[100%] bg-[#23A6F0] text-white">
              Subscribe
            </button>
          </span>
          <p className="text-[#737373] text-[16px] leading-[24px] font-[500] text-start ">
            Subscribe to our NewsLetter
          </p>
        </div>
      </div>

      <div className="bg-[#E6E6E6] h-[80px] flex items-center justify-center">
        <h1 className="text-[#737373] text-[14px] font-[600] leading-[24px]">
          Made with Love By Finland All Right Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
