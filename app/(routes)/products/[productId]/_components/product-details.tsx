'use client';

import Image from 'next/image';
import Link from 'next/link';

import arrowIcon from '@/public/arrowIcon.svg';

import cartIcon from '@/public/whiteCartIcon.svg';
import wishlistIcon from '@/public/wishlistIcon.svg';
import fullWishlistIcon from '@/public/fullwishlist.svg';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import {
  addToWishlist,
  deleteFromWishlist,
} from '@/redux/slices/wishlistSlice';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const cartItems: any = localStorage.getItem('cart');
const cart: any = JSON.parse(cartItems) || [];

const wishlistsItems: any = localStorage.getItem('wishlist');
const wishlists: any = JSON.parse(wishlistsItems) || [];

interface ProductDetailProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: [];
  };
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddToCart] = useState<boolean>(false);
  const [addWishlist, setAddWishlist] = useState<boolean>(false);
  // const quantity = 1;
  const dispatch = useDispatch();
  // const cart = useSelector((state: any) => state.cart);

  const alreadyInCart = cart?.find((item: any) => item.id === product.id);
  const alreadyInWishlist = wishlists?.find(
    (item: any) => item.id === product.id
  );
  const router = useRouter();
  // const alreadyInCart = false;

  console.log(cart);
  const handleAddToCart = (product: any, quantity: number): void => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        quantity,
        price: product.price,
      })
    );
    toast.success('Product added to cart');
    router.refresh();
  };
  const handleAddToWishlist = (product: any): void => {
    dispatch(
      addToWishlist({
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
      })
    );
    toast.success('Product added to wishlists');
  };
  const handleRemoveFromWishlist = (product: any): void => {
    dispatch(deleteFromWishlist(product.id));
    toast.success('Product removed to wishlists');
  };
  return (
    <div className="mt-[1rem] px-[8rem]">
      <div className="flex flex-col ">
        <div className="flex gap-x-2 items-center  ">
          <Link href={'/'} className="text-[14px] font-[700] text-[#252B42]">
            Home
          </Link>
          <Image
            src={arrowIcon}
            alt="arrow icon"
            width={10}
            height={10}
            className=""
          />
          <Link
            href={'/'}
            className="text-[14px] text-[#BDBDBD] font-[600] leading-[24px]"
          >
            Shop
          </Link>
        </div>

        <div className="flex gap-x-[4rem] mt-[2rem]">
          <div className="w-[506px]  border-[1px] border-gray-400">
            <Image
              src={product.thumbnail}
              alt="Product Image"
              width={506}
              height={450}
              className=""
            />
          </div>

          <div className="w-[50%] flex flex-col gap-y-[8px]">
            <h1 className="text-[20px] leading-[30px] font-[400] text-[#252B42]">
              {product.title}
            </h1>
            <span className="mt-[1rem]">
              Rating <span>10 Reviews</span>
            </span>
            <p className="text-[24px] leading-[32px] font-[700] text-[#252B42]">
              ${product.price}
            </p>
            <span className="flex text-[14px] gap-x-1 font-[700] leading-[24px] text-[#737373] ">
              Availability:
              <p className="text-[#23A6F0]">
                {product.stock === 1
                  ? 'Only one left'
                  : product.stock < 1
                  ? 'Out of stock'
                  : 'In stock'}
              </p>
            </span>
            <div className="w-[80%] h-[1px] bg-[#BDBDBD]" />

            <div>
              <div>Colors here</div>
              <div className="flex items-center mt-[3rem]">
                <button className="bg-[#23A6F0] rounded-sm px-[25px] py-[8px] text-white flex items-center ">
                  Buy Now
                </button>

                <div className="flex gap-x-4 ml-[1rem]">
                  {addWishlist || alreadyInWishlist ? (
                    <Image
                      src={fullWishlistIcon}
                      alt="wishlist Icon"
                      width={30}
                      height={30}
                      className="cursor-pointer"
                      onClick={() => {
                        setAddWishlist(false);
                        handleRemoveFromWishlist(product.id);
                      }}
                    />
                  ) : (
                    <Image
                      src={wishlistIcon}
                      alt="wishlist Icon"
                      width={30}
                      height={20}
                      className="cursor-pointer fill-blue-500 text-blue-500"
                      color="green"
                      onClick={() => {
                        setAddWishlist(true);
                        handleAddToWishlist(product);
                      }}
                    />
                  )}
                  {alreadyInCart || addedToCart ? (
                    <p
                      className="text-[14px] font-[600] text-[#fff] bg-[#e487e4]
                    text-center flex justify-center items-center px-3 rounded-sm "
                    >
                      Added to cart
                    </p>
                  ) : (
                    <Image
                      src={cartIcon}
                      alt="Cart Icon"
                      color="white"
                      width={30}
                      height={20}
                      className="cursor-pointer"
                      onClick={() => {
                        handleAddToCart(product, quantity);
                        setAddToCart((current) => !current);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
