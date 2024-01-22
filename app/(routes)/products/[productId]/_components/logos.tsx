import Image from 'next/image';

import logo1 from '@/public/fa-brands-1.png';
import logo2 from '@/public/fa-brands-2.png';
import logo3 from '@/public/fa-brands-3.png';
import logo4 from '@/public/fa-brands-4.png';
import logo5 from '@/public/fa-brands-5.png';
import logo6 from '@/public/fa-brands-6.svg';

const FooterLogos = () => {
  return (
    <div className="flex items-center px-[8rem] py-[1rem]">
      <div className="flex gap-x-2 justify-evenly w-full">
        <Image
          src={logo1}
          alt="Hooli brand logo"
          width={103}
          height={34}
          className=" object-contain"
        />
        <Image
          src={logo2}
          alt="Lyf brand logo"
          width={103}
          height={34}
          className=" object-contain"
        />
        <Image
          src={logo3}
          alt="Hooli brand logo"
          width={103}
          height={34}
          className=" object-contain"
        />
        <Image
          src={logo4}
          alt="Stripe brand logo"
          width={103}
          height={34}
          className=" object-contain"
        />
        <Image
          src={logo5}
          alt="AWS brand logo"
          width={103}
          height={34}
          className=" object-contain"
        />
        <Image
          src={logo6}
          alt="Hooli brand logo"
          width={90}
          height={34}
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default FooterLogos;
