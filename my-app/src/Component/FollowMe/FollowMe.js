import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./FollowMe.css";
import FollowMeCard from './../FollowMeCard/FollowMeCard';

SwiperCore.use([EffectCoverflow, Pagination]);
const FollowMe = () => {
    return (
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <FollowMeCard img="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg"></FollowMeCard>
            </SwiperSlide>
            <SwiperSlide>
              <FollowMeCard img="https://www.thoughtco.com/thmb/US_elwpTpQxcghWZQoAuQmX_dJo=/1333x1000/smart/filters:no_upscale()/GettyImages-867202804-5b38de8f46e0fb00542339e3.jpg"></FollowMeCard>
            </SwiperSlide>
            <SwiperSlide>
              <FollowMeCard img="https://qph.fs.quoracdn.net/main-qimg-da1e219312c5a59bf8ffbd94205f7812"></FollowMeCard>
            </SwiperSlide>
            <SwiperSlide>
              <FollowMeCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGWsAH4B364c8t4QaXM_cGkV56lx01_OAvQ&usqp=CAU"></FollowMeCard>
            </SwiperSlide>
            <SwiperSlide>
              <FollowMeCard img="http://1.bp.blogspot.com/-Lvw1Y93lCQs/VqiUTfCJd6I/AAAAAAAAAF4/LPX9HgNNu7Y/s1600/nepal-pokhara-1.jpg"></FollowMeCard>
            </SwiperSlide>
            <SwiperSlide>
              <FollowMeCard img="https://www.planetware.com/photos-large/INA/bali-pura-ulun-danu.jpg"></FollowMeCard>
            </SwiperSlide>
            <SwiperSlide>
              <FollowMeCard img="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/01/Victoria-Memorial.jpg"></FollowMeCard>
            </SwiperSlide>
            <SwiperSlide>
              <FollowMeCard img="https://www.planetware.com/photos-large/INA/bali-pura-tanah-lot-tourists.jpg"></FollowMeCard>
            </SwiperSlide>
            <SwiperSlide>
              <FollowMeCard img="https://media.easemytrip.com/media/Blog/India/637350613416802581/637350613416802581qElw1X.png"></FollowMeCard>
            </SwiperSlide>
            
          </Swiper>
        </div>
      );
    };
export default FollowMe;