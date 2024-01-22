import { bestServicesData } from '@/data';
import Image from 'next/image';

const BestServices = () => {
  return (
    <div className="mt-[4rem] flex flex-col items-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-[20px] font-[400] leading-[30px] text-[#737373]">
            Featured Products
          </h2>
          <h1 className="text-[24px] font-[700] leading-[32px] uppercase">
            the best services
          </h1>
          <p className="text-[14px] font-[400] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between all products
          </p>
        </div>

        <div className="flex flex-wrap gap-[1rem] items-center justify-center mt-[5rem] ">
          {bestServicesData.map((item) => (
            <div
              key={item.id}
              className="w-[300px] flex flex-col items-center "
            >
              <Image
                src={item.icon}
                alt="Icons"
                width={72}
                height={72}
                className=""
              />
              <span className="flex flex-col items-center gap-y-2 ">
                <h1 className="text-[#252B42] text-[24px] font-[700] leading-[32px]">
                  {item.title}
                </h1>
                <p className="text-[14px] text-[#737373] leading-[20px] font-[400] text-center mt-[10px]">
                  {item.text}{' '}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestServices;
