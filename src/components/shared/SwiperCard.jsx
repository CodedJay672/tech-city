import React from "react";
import { useSwiperSlide } from "swiper/react";

const SwiperCard = ({ img, title, price, roi }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <article
      className={`rounded-lg shadow-lg overflow-hidden p-10 ${
        swiperSlide.isActive && "bg-blue-50"
      }`}
    >
      <div className="-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <img
          src={img}
          alt={title}
          className="w-full h-auto object-cover mb-4"
        />
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{price}</span>
          <span className="text-sm text-gray-500">{roi}</span>
        </div>
      </div>
    </article>
  );
};

export default SwiperCard;
