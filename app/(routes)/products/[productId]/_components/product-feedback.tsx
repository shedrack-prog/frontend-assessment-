import Image from 'next/image';

interface ProductFeedBackProps {
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

const ProductFeedback = ({ product }: ProductFeedBackProps) => {
  return (
    <div className="flex flex-col px-[8rem] mt-[4rem]">
      <div className="flex items-center justify-evenly">
        <button
          type="button"
          className="text-[14px] font-[600] leading-[24px] text-[#737373] border px-[10px] py-[6px] border-gray-500"
        >
          Description
        </button>
        <button
          type="button"
          className="text-[14px] font-[600] leading-[24px] text-[#737373]"
        >
          Additional Information
        </button>
        <button
          type="button"
          className="text-[14px] font-[600] leading-[24px] text-[#737373]"
        >
          Reviews(0)
        </button>
      </div>
      <div className="flex gap-[1rem] mt-[2rem]">
        <div
          className="pr-[7rem]
          "
        >
          <h1 className="text-[24px] font-[700] leading-[32px] text-[##252B42]">
            {product.title}
          </h1>
          <p className="mt-[2rem] text-[14px] font-[400] leading-[20px] ">
            {product.description}
          </p>
          <span className="mt-[2rem] text-[14px] font-[400] leading-[20px] ">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </span>
        </div>
        <Image
          src={product.thumbnail}
          alt="Product Image"
          width={450}
          height={372}
          className=""
        />
      </div>
    </div>
  );
};

export default ProductFeedback;
