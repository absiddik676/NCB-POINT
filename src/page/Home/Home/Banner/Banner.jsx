import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { TbSquareRotatedFilled } from "react-icons/tb";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bg1 from '../../../../assets/hero banner/slider.png'
import bg2 from '../../../../assets/hero banner/58jfsiurfiuah99117.png'
import bg3 from '../../../../assets/hero banner/hhh [Recovered].png'
import bg4 from '../../../../assets/hero banner/BANNERm004.c7.gadgets isometric set [Converted].png'
const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='h-64 mb-20'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper h-80"
            >
                <SwiperSlide className='bg-no-repeat '>
                    <img className='w-full h-80' src={bg1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-no-repeat bg-slate-900 '>
                    <img className='w-full h-80' src={bg2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-no-repeat bg-slate-900 '>
                    <img className='w-full h-80' src={bg3} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-no-repeat bg-slate-900' >
                    <img className='w-full h-80' src={bg4} alt="" />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="5" cy="5" r="2"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;