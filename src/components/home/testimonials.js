import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonialsData } from "../../pages/home/data";
import { Image, Header, HeaderSubheader } from "semantic-ui-react";
import SignUpBtn from "../home/signUpBtn";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="testimonial-wrapper">
      <Swiper
        className="swiper-container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="swiper-slide">
            <div className="testimonial-body">
              <Image src={testimonial.src} circular size="small" />
              <span className="testimonial-experience">
                <Header as="h4" content={testimonial.testimonial} />
                <HeaderSubheader
                  as="h5"
                  content={testimonial.userName}
                  className="testimonial-userName"
                />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to="/signup-form">
        <SignUpBtn />
      </Link>
    </div>
  );
};

export default Testimonials;
