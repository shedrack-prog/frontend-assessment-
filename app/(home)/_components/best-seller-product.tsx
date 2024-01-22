import ProductCard from './product-card';
interface BestSellerProductsProps {
  hasHeading?: Boolean;
  heading: string;
  products: [
    {
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
    }
  ];
}

const BestSellerProduct = ({
  hasHeading,
  products,
  heading,
}: BestSellerProductsProps) => {
  return (
    <div className="mt-[3rem] flex flex-col justify-center items-center">
      {hasHeading && (
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-[20px] font-[400] leading-[30px] text-[#737373]">
            Featured Products
          </h2>
          <h1 className="text-[24px] font-[700] leading-[32px] uppercase">
            {heading}
          </h1>
          <p className="text-[14px] font-[400] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between all products
          </p>
        </div>
      )}

      <div
        className="flex flex-wrap items-center md:items-start 
            justify-center mt-[4rem] md:gap-[1.2rem] "
      >
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
        <span
          className="flex py-[15px] px-[40px] text-center
           rounded-[5px] border border-solid  border-[#23A6F0] text-[#23A6F0] cursor-pointer mb-[1rem]"
        >
          Load More products
        </span>
      </div>
    </div>
  );
};

export default BestSellerProduct;
