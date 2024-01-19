import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Heading from "../layout/Heading.jsx";
import { FreeMode, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants/index.js";

const ActiveSlider = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gradient-to-r from-[#13547A] to-[#7FCFC6]">
      <Heading title1="Our" title2="Services" />
      <div className="my-8" />
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
            slidesOffsetBefore: 50,
            slidesOffsetAfter: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay module
        autoplay={{ delay: 2500 }} // Set the delay (in milliseconds) between each slide
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-1 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-4 h-[90%] w-[80%] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-2 text-center">
                <item.icon className="text-blue-600 group-hover:text-blue-400 mx-auto w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl text-[#DFF6FF] text-center">{item.title} </h1>
                <p className="lg:text-[18px] text-[#DFF6FF] text-center">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-1363DF group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="page-break-before:bg-blue-500">
        
      </div>
    </div>
  );
};

export default ActiveSlider;
