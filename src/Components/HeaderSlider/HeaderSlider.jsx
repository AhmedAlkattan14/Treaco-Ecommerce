import { Swiper, SwiperSlide } from "swiper/react";
import { slide } from "../../assets/data/data";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function HeaderSlider() {
  return (
    <>
      <div className="">
        <Swiper
          loop
          autoplay={{ delay: 500, disableOnInteraction: false }}
          speed={1400}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {slide.map((item, index) => (
            <SwiperSlide className="cursor-grab" key={index}>
              <img
                src={item.image}
                alt={`Slide img ${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
