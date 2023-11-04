import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SingleProduct = ({ product }) => {
    console.log(product);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <div className=''>
            <div className="card w-full bg-base-100 shadow-xl h-full">
                <figure className="sh">
                    {
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
                                className="mySwiper h-64"
                            >

                                {
                                    product.ProfessionalImgArray.map((img, index) => 
                                    <SwiperSlide key={index} className='bg-no-repeat '>
                                        <img className='w-full h-full' src={img} alt="" />
                                    </SwiperSlide>
                                )
                                
                                }
                                <div className="autoplay-progress" slot="container-end">
                                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                                        <circle cx="5" cy="5" r="2"></circle>
                                    </svg>
                                    <span ref={progressContent}></span>
                                </div>
                            </Swiper>
                    }
                </figure>
                <div className="card-body px-3">
                    <h2 className="card-title text-xl">{product?.productTitle}</h2>
                    <p className='font-bold'>Price:$<span>{product?.specialPrice}</span> <span>${product?.RegularPrice}</span></p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;