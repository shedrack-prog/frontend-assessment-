'use client';

import Image from 'next/image';

const cartItems: any = localStorage.getItem('cart');
const carts: any = JSON.parse(cartItems) || [];

import minusIcon from '@/public/minus-icon.svg';
import plusIcon from '@/public/plus-icon.svg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '@/redux/slices/cartSlice';

const CartPopUp = () => {
  const [quantity, setQuantity] = useState();
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();

  const handleQuantity = (id: string, type: string) => {
    carts.map((p: any) => {
      if (p.id === id) {
        if (type === 'plus') {
          p.quantity++;
        } else if (type === 'minus') {
          p.quantity--;
        }
        // return {};
      }
    });
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className="w-[500px] bg-white shadow-lg h-[600px] absolute right-0 top-[65px] px-[10px] pt-[1rem]">
      <div className="">
        {carts?.length > 0 ? (
          carts.map((item: any) => {
            setQuantity(item.quantity);
            return (
              <div className=" ">
                <h1 className="text-2xl font-[700] leading-[24px] mt-[1rem] mb-[1rem]">
                  Cart Items
                </h1>
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
                      <div className="flex gap-[2.5rem] mt-[1rem]">
                        <Image
                          src={minusIcon}
                          width={27}
                          height={27}
                          alt="Minus Icon"
                          className="cursor-pointer"
                          onClick={() => handleQuantity(item.id, 'minus')}
                        />
                        <span className="bg-blue-400 flex items-center justify-center w-[30px] h-[30px] rounded-full p-4 text-white">
                          {item.quantity}
                        </span>
                        <Image
                          src={plusIcon}
                          width={24}
                          height={24}
                          alt="Plus Icon"
                          className="cursor-pointer"
                          onClick={() => handleQuantity(item.id, 'plus')}
                        />
                      </div>
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

export default CartPopUp;
