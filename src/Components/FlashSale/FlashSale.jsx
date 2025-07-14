import { flaseproduct } from "../../assets/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function FlashSale() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mt-12">
        {/* الصورة */}
        <div className="md:col-span-5 h-[260px] w-full relative overflow-hidden group">
          <img
            src="/images/offer/banner-2.webp"
            className="w-full  rounded object-cover"
            alt="banner-2 img"
          />
          {/* Light Shine Effect */}
          <div className="shine-effect"></div>
        </div>

        {/* العنصر التاني */}
        <div className="md:col-span-3 border border-gray-200 shadow p-4  rounded-lg">
          <h2 className="text-2xl font-bold mb-4  w-fit  relative before:absolute before:-bottom-2 before:w-1/2 before:h-1 before:bg-gradient-to-r before:from-red-500 before:via-purple-400 before:to-blue-500">Flash Sale</h2>
          <div className="cursor-grab">
            <Swiper
              modules={[Autoplay]}
              speed={1200}
              slidesPerView={1}
              spaceBetween={10}
              loop
              autoplay={{ delay: 500, disableOnInteraction: false }}
            >
              {flaseproduct.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex p-2 rounded-xl bg-slate-200 justify-between">
                    <div className="w-3/4">
                      <h1 className="text-md font-medium">{item.name}</h1>
                      <p className="text-sm line-clamp-1 text-gray-500">
                        {item.desc}
                      </p>
                      <div className="flex mt-4 gap-2 items-center p-2">
                        <span className="font-semibold">
                          {" "}
                          Price: ${item.dprice}
                        </span>
                        <span className="line-through opacity-50 font-semibold">
                          ${item.price}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center text-gray-800 text-sm justify-between p-2">
                        <span className=" font-semibold">
                          Sold : {item.sold}
                        </span>
                        <span className="font-semibold ">
                          Available : {item.qty}
                        </span>
                      </div>
                      <>
                        {/* Progress */}
                        <div
                          className="flex w-full h-2.5 bg-slate-400 mt-4 rounded-full overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          //   aria-valuenow={item.sold / item.qty * 100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="flex flex-col justify-center rounded-full overflow-hidden bg-black text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                            style={{
                              width: `${(item.sold / item.qty) * 100}%`,
                            }}
                          />
                        </div>
                        {/* End Progress */}
                      </>
                    </div>

                    <div className="w-1/4">
                      <img
                        src={item.cover}
                        className="w-full h-full object-cover  rounded"
                        alt="image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
