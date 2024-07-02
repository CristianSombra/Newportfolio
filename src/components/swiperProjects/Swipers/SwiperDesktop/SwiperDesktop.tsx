import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { nursingHRRG, portfolio, dashboard } from '../../../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import '@/styles';


SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperDesktop: React.FC = React.memo(() => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className="container swiper-container">
            <div className="row">
                <div className="col-12">
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        className="mySwiper"
                        onSlideChange={handleSlideChange}
                    >
                        <SwiperSlide>
                            <motion.div 
                                animate={{opacity: activeIndex === 0 ? 1 : 0}}
                                >
                                <FontAwesomeIcon icon={faGithub} className="mb-3 icon-swiper-desktop" />
                                <FontAwesomeIcon icon={faLaptop} className="mb-3 icon-swiper-desktop" />
                            </motion.div>
                            <img src={nursingHRRG} className='img-fluid' alt="Departamento Enfermería" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                animate={{opacity: activeIndex === 1 ? 1 : 0}}
                                >
                                <FontAwesomeIcon icon={faGithub} className="mb-3 icon-swiper-desktop" />
                                <FontAwesomeIcon icon={faLaptop} className="mb-3 icon-swiper-desktop" />
                            </motion.div>
                            <img src={portfolio} className='img-fluid' alt="Prototipo Portafolio" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                animate={{opacity: activeIndex === 2 ? 1 : 0}}
                                >
                                <FontAwesomeIcon icon={faGithub} className="mb-3 icon-swiper-desktop" />
                                <FontAwesomeIcon icon={faLaptop} className="mb-3 icon-swiper-desktop" />
                            </motion.div>
                            <img src={dashboard} className='img-fluid' alt="Prototipo Dashboard" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
});


export default SwiperDesktop;
