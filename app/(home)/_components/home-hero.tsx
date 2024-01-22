const HomeHero = () => {
  return (
    <div className=" mt-[rem] flex justify-center p-8 px-[1rem] w-[100vw]">
      <div className="flex md:w-[80%]  md:gap-x-2 gap-x-2">
        <div
          className={`bg-[url('../public/card-cover-5.jpg')] bg-cover bg-center bg-no-repeat h-[610px] md:w-[404px] w-[700px] mt-2 `}
        >
          <div className="p-4 py-6">
            <p className="text-[#2DC071] text-[14px] font-[700] leading-[24px]">
              5 Items
            </p>
            <h1 className="text-[40px] font-[700] uppercase leading-[50px]">
              Furniture
            </h1>
            <button
              type="button"
              className="text-[14px] font-[700] leading-[24px]"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="gap-x-2 flex flex-col">
          <div
            className={`bg-[url('../public/card-cover-6.jpg')] mt-2 bg-cover bg-center object-contain bg-no-repeat w-[710px] h-[315px]`}
          >
            <div className="p-4 py-6">
              <p className="text-[#2DC071] text-[14px] font-[700] leading-[24px]">
                5 Items
              </p>
              <h1 className="text-[24px] font-[700] uppercase leading-[50px]">
                Furniture
              </h1>
              <button
                type="button"
                className="text-[14px] font-[700] leading-[24px]"
              >
                Read More
              </button>
            </div>
          </div>

          <div className="flex gap-x-2  mt-2 ">
            <div
              className={`bg-[url('../public/card-cover-8.jpg')]  bg-cover bg-no-repeat w-[700px] md:w-[350px] h-[285px]`}
            >
              <div className="p-4 py-6">
                <p className="text-[#2DC071] text-[14px] font-[700] leading-[24px]">
                  5 Items
                </p>
                <h1 className="text-[24px] font-[700] uppercase leading-[50px]">
                  Furniture
                </h1>
                <button
                  type="button"
                  className="text-[14px] font-[700] leading-[24px]"
                >
                  Read More
                </button>
              </div>
            </div>

            <div
              className={`bg-[url('../public/card-cover-7.jpg')] bg-cover bg-no-repeat w-[700px] md:w-[350px] h-[285px]`}
            >
              <div className="p-4 py-6">
                <p className="text-[#2DC071] text-[14px] font-[700] leading-[24px]">
                  5 Items
                </p>
                <h1 className="text-[24px] font-[700] uppercase leading-[50px]">
                  Furniture
                </h1>
                <button
                  type="button"
                  className="text-[14px] font-[700] leading-[24px]"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
