import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import Skeleton from "react-loading-skeleton";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "swiper/css";
import "swiper/css/scrollbar";

function AnimeCardsSkeleton() {
  const { height, width } = useWindowDimensions();

  return (
    <div
      style={{
        marginBottom: "1rem",
      }}
    >
      <Swiper
        slidesPerView={8}
        spaceBetween={35}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          "@0.9": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.20": {
            slidesPerView: 5,
            spaceBetween: 35,
          },
          "@1.40": {
            slidesPerView: 6,
            spaceBetween: 35,
          },
          "@1.60": {
            slidesPerView: 7,
            spaceBetween: 35,
          },
          "@1.75": {
            slidesPerView: 8,
            spaceBetween: 35,
          },
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {[...Array(8)].map((x, i) => (
          <SwiperSlide key={i}>
            <Skeleton
              width={
                width <= 600 ? (width <= 400 ? "100px" : "120px") : "160px"
              }
              height={
                width <= 600 ? (width <= 400 ? "160px" : "180px") : "235px"
              }
              borderRadius={"0.5rem"}
              baseColor={"#303436"}
              highlightColor={"#202225"}
            />
            <Skeleton
              width={width <= 600 ? "120px" : "160px"}
              baseColor={"#303436"}
              highlightColor={"#202225"}
              count={2}
              style={{
                marginTop: "1rem",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AnimeCardsSkeleton;
