import React from 'react';
import SwiperCore from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { nursingHRRG, portfolio, dashboard } from '../../../../assets';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import '../../../../styles';

SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperMobile: React.FC = React.memo(() => {
    return (
        <div className="container">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                }}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {/* Imagen con botones 1 */}
                <SwiperSlide>
                    <div className="swiper-element">
                        <img src={nursingHRRG} className='img-fluid' alt="Departamento Enfermería" />
                        {/* <div className="row d-flex justify-content-center">
                            <div className="col-6 col-md-4 col-lg-2 my-3">
                                <FontAwesomeIcon icon={faGithub} className="icon-swiper" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 my-3">
                                <FontAwesomeIcon icon={faLaptop} className="icon-swiper" />
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>

                {/* Imagen con botones 2 */}
                <SwiperSlide>
                    <div className="swiper-element">
                        <img src={portfolio} className='img-fluid' alt="Prototipo Portafolio" />
                        {/* <div className="row d-flex justify-content-center">
                            <div className="col-6 col-md-4 col-lg-2 my-3">
                                <FontAwesomeIcon icon={faGithub} className="icon-swiper" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 my-3">
                                <FontAwesomeIcon icon={faLaptop} className="icon-swiper" />
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>

                {/* Imagen con botones 3 */}
                <SwiperSlide>
                    <div className="swiper-element">
                        <img src={dashboard} className='img-fluid' alt="Prototipo Dashboard" />
                        {/* <div className="row d-flex justify-content-center">
                            <div className="col-6 col-md-4 col-lg-2 my-3">
                                <FontAwesomeIcon icon={faGithub} className="icon-swiper" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 my-3">
                                <FontAwesomeIcon icon={faLaptop} className="icon-swiper" />
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
});

export default SwiperMobile;
