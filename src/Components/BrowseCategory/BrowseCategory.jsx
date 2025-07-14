import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { categories } from "../../assets/data/data";
export default function BrowseCategory() {
  return (
    <>
      <div className="cat py-9">
        <Swiper
          modules={[Autoplay, Navigation]}
          speed={1400}
          slidesPerView={3}
          navigation={true}
          spaceBetween={10}
          loop
          autoplay={{ delay: 500, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {categories.map((item) => (
            <SwiperSlide
              className="bg-slate-200 hover:bg-slate-300 h-96 p-3 cursor-grab  rounded-lg"
              key={item.id}
            >
              <div className="flex  justify-evenly   items-center">
                <div className="p-3">
                  <img
                    src={item.image}
                    className="size-12  object-contain"
                    alt={`category img ${item.id}`}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
