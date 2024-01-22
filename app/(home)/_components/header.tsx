'use client';

import Link from 'next/link';

import arrowDown from '@/public/arrow-down.svg';
import Image from 'next/image';
import profileIcon from '@/public/profileIcon.svg';
import searchIcon from '@/public/searchIcon.svg';
import cartIcon from '@/public/cartIcon.svg';
import wishlistIcon from '@/public/wishlistIcon.svg';
import { useState } from 'react';
import CartPopUp from '@/components/carts';

const cartItems: any = localStorage.getItem('cart');
const carts: any = JSON.parse(cartItems) || [];

const wishlistItems: any = localStorage.getItem('wishlist');
const wishlists: any = JSON.parse(wishlistItems) || [];

const HomeHeader = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="p-5 md:flex items-center px-[5rem] w-full hidden">
      {cartOpen && <CartPopUp />}
      <div className="flex justify-between w-full">
        <div className="flex justify-between items-center gap-x-8">
          <div>
            <Link href={'/'} className="text-[24px] font-[700] leading-[32px]">
              Bandage
            </Link>
          </div>

          <div className="flex items-center gap-x-4">
            <span>
              <Link href={'#'}>Home</Link>
            </span>
            <span className="flex gap-x-1 items-center">
              <Link href={'#'}>Shop</Link>
              <Image src={arrowDown} alt="arrow-down" width={14} height={14} />
            </span>
            <span>
              <Link href={'#'}>About</Link>
            </span>
            <span>
              <Link href={'#'}>Blog</Link>
            </span>
            <span>
              <Link href={'#'}>Contact</Link>
            </span>
            <span>
              <Link href={'#'}>Pages</Link>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-x-6">
          <span className="flex items-center gap-x-1 cursor-pointer">
            <Image
              src={profileIcon}
              alt="profile Icon"
              width={14}
              height={14}
            />
            <p className="text-[#23A6F0] text-[14px]">Login / Register</p>
          </span>
          <div className="flex gap-x-7">
            <span>
              <Image
                src={searchIcon}
                alt="Search Icon"
                width={14}
                height={14}
              />
            </span>
            <span
              className="flex gap-x-[1.5px] cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <Image src={cartIcon} alt="Cart Icon" width={20} height={14} />
              <p className="text-[12px] text-[#23A6F0]">{carts?.length}</p>
            </span>
            <span className="flex gap-x-[1.5px] cursor-pointer ">
              <Image
                src={wishlistIcon}
                alt="wishlist Icon"
                width={20}
                height={14}
              />
              <p className="text-[12px] text-[#23A6F0]">{wishlists?.length}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
