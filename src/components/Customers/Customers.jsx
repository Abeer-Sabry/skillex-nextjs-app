"use client";
import { customers } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomerCard from "./CustomerCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Customers = () => {
  return (
    <div className="sm:pl-16 pl-6 mb-[100px]">
      <div className="flex justify-center">
        <h2 className="text-[35px] mb-[25px]">
          What our customer say
          <span className="inline-block w-[4px] h-[4px] bg-[#8FB67B]" />
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        autoplay={true}
        onSwiper={swiper => console.log(swiper)}
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={customer.id}>
            <CustomerCard {...customer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customers;
