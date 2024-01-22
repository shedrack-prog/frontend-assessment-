import Image from 'next/image';

import phoneIcon from '@/public/phone-icon.svg';
import settingsIcon from '@/public/settings-icon.svg';
import instagramIcon from '@/public/instagramIcon.svg';
import youtubeIcon from '@/public/youtubeIcon.svg';
import facebookIcon from '@/public/facebookIcon.svg';
import twitterIcon from '@/public/twitterIcon.svg';

const Banner = () => {
  return (
    <div className=" hidden bg-[#23856D] w-full h-[58px] fixed z-50 p-8 md:flex justify-between items-center text-white">
      <div className="flex items-center justify-center gap-x-2">
        <Image
          src={phoneIcon}
          width={15}
          height={15}
          color="white"
          alt="phone icon"
        />
        <p>(225) 555-0118</p>
      </div>

      <div className="flex gap-x-2 items-center justify-center">
        <Image
          src={settingsIcon}
          width={15}
          height={15}
          color="white"
          alt="Settings icon"
        />
        <p>michelle.rivers@example.com</p>
      </div>
      <div>
        <div>Follow Us and get a chance to win 80% off</div>
      </div>

      <div className="flex items-center justify-center gap-x-3">
        <p className="text-[14px] font-[700]">Follow Us:</p>
        <div className="flex items-center justify-center gap-x-3">
          <Image
            src={instagramIcon}
            width={16}
            height={16}
            color="white"
            alt="Instagram icon"
          />
          <Image
            src={youtubeIcon}
            width={16}
            height={16}
            color="white"
            alt="Youtube icon"
          />
          <Image
            src={facebookIcon}
            width={16}
            height={16}
            color="white"
            alt="facebook icon"
          />
          <Image
            src={twitterIcon}
            width={16}
            height={16}
            color="white"
            alt="twitter icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
