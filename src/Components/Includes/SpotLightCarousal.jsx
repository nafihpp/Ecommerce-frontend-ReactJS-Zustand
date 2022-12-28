import React from "react";
import Orange from "../../assets/WebHomeBannerSlider.png";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Apple from "../../assets/JumkaSlider.jpg";
import Christ from "../../assets/Christ.jpg";
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
                        <SwiperSlide>
                            <div>
                                <img
                                    src={Christ}
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
    padding: 120px 0 0 0;
`;
const Wrapper = styled.div``;

export default SpotLightCarousal;
