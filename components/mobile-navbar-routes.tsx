'use client';

import Image from 'next/image';

import searchIcon from '@/public/blackSearchIcon.svg';
import menuIcon from '@/public/mennuIcon.svg';
import cartIcon from '@/public/shoppingCartIcon.svg';
import Link from 'next/link';

const MobileNavbarRoutes = () => {
  return (
    <div
      className="flex fixed right-0 z-50 w-full bg-white h-[70px] 
       shadow-sm md:hidden top-0 left-0"
    >
      <div className="absolute left-0 right-0 -top-[400px]">
        <div>
          <h1 className="text-[24px] font-[700] text-[#252B42]">Bandage</h1>
          <span>
            <Image src={searchIcon} width={20} height={20} alt="Search Icon" />
            <Image src={searchIcon} width={20} height={20} alt="Search Icon" />
            <Image src={searchIcon} width={20} height={20} alt="Search Icon" />
          </span>
          <div>
            <Link
              href={'/'}
              className="text-[#737373] font-[600] leading-[32px]"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full top-0 right-0 left-0 z-30 relative">
        <h1 className="text-[24px] font-[700] text-[#252B42]">Bandage</h1>
        <Image
          src={menuIcon}
          width={20}
          height={20}
          alt="Search Icon"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default MobileNavbarRoutes;
