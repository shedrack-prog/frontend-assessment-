import { truncateText } from '@/libs/truncate-text';
import Image from 'next/image';
import Link from 'next/link';

interface productCardProps {
  item: {
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

const productCard = ({ item }: productCardProps) => {
  return (
    <div className="border-[1px] border-gray-200 rounded-sm">
      <Link href={`/products/${item.id}`} className="">
        <div className="flex hover:scale-105 mb-[30px] transition-all duration-200 flex-col items-center justify-center gap-y-2 w-[183px] p-[10px] ">
          <div className="h-[238px]">
            <Image
              src={item.thumbnail}
              alt="Product image"
              width={183}
              height={400}
              className=" h-[250px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center mt-2 gap-y-[20px]">
            <h1 className="text-[16px] font-[700] leading-[24px] text-center">
              {item.title}
            </h1>
            <p className="text-center text-[14px] font-[700] text-[#737373] leading-[24px] ">
              {truncateText(item.description, 50)}
            </p>
            <span className="text-center text-[16px] text-[#23856D] leading-[24px] font-[700]">
              $ {item.price}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default productCard;
