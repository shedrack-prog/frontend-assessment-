'use client';

import Image from 'next/image';

import minusIcon from '@/public/minus-icon.svg';
import plusIcon from '@/public/plus-icon.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '@/redux/slices/cartSlice';

interface CatPopUpProps {
  setWishlistOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const WishlistPopup = ({ setWishlistOpen }: CatPopUpProps) => {
  let wishlists: any;
  if (typeof window !== 'undefined') {
    const wishItem: any = localStorage.getItem('cart');
    wishlists = JSON.parse(wishItem);
  }

  return (
    <div className="w-[500px] bg-white shadow-lg h-[750px] overflow-y-scroll absolute right-0 top-[65px] px-[10px] pt-[1rem]">
      <div className="">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-2xl font-[700] leading-[24px] mt-[1rem] mb-[1rem]">
            Wishlists
          </h1>
          <span
            onClick={() => setWishlistOpen(false)}
            className="flex text-[20px] font-[700] cursor-pointer"
          >
            X
          </span>
        </div>
        {wishlists?.length > 0 ? (
          wishlists.map((item: any) => {
            return (
              <div key={item.id} className=" mb-2">
                <div className="bg-gray-100 rounded-md p-[1rem]">
                  <div className="flex gap-x-5">
                    <Image
                      src={item.thumbnail}
                      alt="Product Image"
                      width={80}
                      height={80}
                      className="rounded-xl object-cover"
                    />
                    <div>
                      <h2 className="text-[14px] font-[700] leading-[24px]">
                        {item.title}
                      </h2>
                      <span>$ {item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p> No Item in Cart</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPopup;
