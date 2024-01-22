import ctaBanner from '@/public/cta-banner.png';

const CallToAction = () => {
  return (
    <div
      className={`bg-[url('../public/cta-banner.png')] bg-cover bg-center
      flex items-center justify-center bg-no-repeat h-[510px] max-w-[100vw] overflow-x-hidden mt-[5rem] `}
    >
      <div className="flex flex-col items-center justify-center w-[50%] mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[14px] font-[700] leading-[24px] text-center text-[#23A6F0]">
            Designing Better Experience
          </h4>
          <h1 className="text-[40px] leading-[50px] font-[700] text-[#252B42]">
            Problems trying to resolve the conflict between
          </h1>
          <p className="text-[14px] font-[400] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
          <span className="text-[24px] leading-[32px] font-[700] text-[#23856D]">
            $16.48
          </span>
          <button className="text-[14px] font-[700] leading-[22px]  flex h-[52px] py-[15px] px-[70px] mt-[1rem] text-[#fff] bg-[#23A6F0] ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
