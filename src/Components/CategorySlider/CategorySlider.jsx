import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { offerImgproduct } from "../../assets/data/data";

export default function CategorySlider() {
  return (
    <>
      <div className="cat cursor-grab py-8">
        <Swiper
          modules={[ Navigation]}
          speed={1400}
          slidesPerView={3}
          navigation={true}
          spaceBetween={10}
          loop
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
          {offerImgproduct.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.cover}
                className="w-full h-full object-cover"
                alt={`Slide img ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
