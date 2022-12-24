import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orange from "../../assets/WebHomeBannerSlider.png";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Apple from "../../assets/JumkaSlider.jpg";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function SpotLightCarousal() {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <MainDiv>
                <Wrapper>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 1500,
                        }}
                        modules={[Navigation]}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <div>
                                <img
                                    src={Orange}
                                    alt="orange"
                                    style={{ display: "block", width: "100%" }}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img
                                    src={Apple}
                                    alt="orange"
                                    style={{ display: "block", width: "100%" }}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Wrapper>
            </MainDiv>
        </>
    );
}
const MainDiv = styled.div`
    padding: 140px 0 0 0;
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
`;

export default SpotLightCarousal;
