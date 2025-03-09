import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import SwiperCard from "../shared/SwiperCard";

export default function SwiperComponent() {
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={`w-full flex justify-center items-center`}
      >
        <SwiperSlide>
          <SwiperCard
            title="Tech-City Phase 1"
            img="assets/feature0.png"
            price=""
            roi=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title="Tech City Phase 2"
            img="assets/feature1.png"
            price=""
            roi=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title="Tech City Phase 3"
            img="assets/feature2.png"
            price=""
            roi=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            title="Tech City Phase 4"
            img="assets/feature3.png"
            price=""
            roi=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
